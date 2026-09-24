'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface GraphNode {
  id: string;
  label: string;
  category: 'SUSPECT_CRITICAL' | 'INTERMEDIARY' | 'ACCOMMODATION' | 'DEVICE' | 'LOCATION';
  x: number;
  y: number;
  riskScore: number;
  centrality: number;
  connections: string[];
  typeLabel: string;
  detail: string;
}

const DEFAULT_NODES: GraphNode[] = [
  {
    id: 'ND-01',
    label: 'T-9042 [KINGPIN]',
    category: 'SUSPECT_CRITICAL',
    x: 48,
    y: 38,
    riskScore: 94,
    centrality: 0.892,
    connections: ['ND-02', 'ND-03', 'ND-04', 'ND-05', 'ND-07'],
    typeLabel: 'Primary Target',
    detail: 'Surfaced via Betweenness Centrality. Controls 4 money-mule channels.',
  },
  {
    id: 'ND-02',
    label: 'C-3820 [HAWALA CONDUIT]',
    category: 'INTERMEDIARY',
    x: 28,
    y: 22,
    riskScore: 82,
    centrality: 0.674,
    connections: ['ND-01', 'ND-06', 'ND-08'],
    typeLabel: 'Financial Conduit',
    detail: 'Cross-border wire transfer routing through shell entity in Dubai.',
  },
  {
    id: 'ND-03',
    label: 'SIM-8829 [BURNER CDR]',
    category: 'DEVICE',
    x: 72,
    y: 26,
    riskScore: 76,
    centrality: 0.541,
    connections: ['ND-01', 'ND-04'],
    typeLabel: 'Burner Telemetry',
    detail: 'IMEI matched across 3 armed extortion FIR filings.',
  },
  {
    id: 'ND-04',
    label: 'L-091 [SAFEHOUSE]',
    category: 'LOCATION',
    x: 68,
    y: 64,
    riskScore: 88,
    centrality: 0.612,
    connections: ['ND-01', 'ND-03', 'ND-05'],
    typeLabel: 'Geofenced Cluster',
    detail: 'Repeated late-night CDR tower co-locations with 5 known associates.',
  },
  {
    id: 'ND-05',
    label: 'AC-1094 [MULE ACCT]',
    category: 'ACCOMMODATION',
    x: 42,
    y: 78,
    riskScore: 68,
    centrality: 0.485,
    connections: ['ND-01', 'ND-04', 'ND-08'],
    typeLabel: 'Shell Account',
    detail: 'Rapid structured cash withdrawals following extortion calls.',
  },
  {
    id: 'ND-06',
    label: 'V-491 [VEHICLE SCAN]',
    category: 'DEVICE',
    x: 15,
    y: 42,
    riskScore: 59,
    centrality: 0.312,
    connections: ['ND-02', 'ND-07'],
    typeLabel: 'ANPR Hit',
    detail: 'Automated license plate hit at Sector 18 toll plaza 02:41 AM.',
  },
  {
    id: 'ND-07',
    label: 'SUB-201 [LOGISTICS]',
    category: 'INTERMEDIARY',
    x: 25,
    y: 65,
    riskScore: 71,
    centrality: 0.428,
    connections: ['ND-01', 'ND-05', 'ND-06'],
    typeLabel: 'Sub-tier Handler',
    detail: 'Identified delivering unregistered SIM cards to safehouse.',
  },
  {
    id: 'ND-08',
    label: 'BANK-009 [OFFSHORE]',
    category: 'ACCOMMODATION',
    x: 82,
    y: 50,
    riskScore: 84,
    centrality: 0.589,
    connections: ['ND-02', 'ND-05'],
    typeLabel: 'Crypto/Forex Gateway',
    detail: 'P2P escrow liquidity node mapped through UPI transaction graph.',
  },
];

interface NetworkGraphVisualProps {
  interactive?: boolean;
  compact?: boolean;
  className?: string;
}

export const NetworkGraphVisual: React.FC<NetworkGraphVisualProps> = ({
  interactive = true,
  compact = false,
  className = '',
}) => {
  const [activeNode, setActiveNode] = useState<GraphNode | null>(DEFAULT_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const selectedNode = hoveredNode
    ? DEFAULT_NODES.find((n) => n.id === hoveredNode) || activeNode
    : activeNode;

  // Color mapping based on risk semantics
  const getNodeColors = (category: GraphNode['category'], isHighlighted: boolean) => {
    switch (category) {
      case 'SUSPECT_CRITICAL':
        return {
          fill: '#E24B4A',
          stroke: isHighlighted ? '#FFFFFF' : '#FF7373',
          glow: 'rgba(226, 75, 74, 0.4)',
          text: 'text-risk-red',
        };
      case 'INTERMEDIARY':
        return {
          fill: '#EF9F27',
          stroke: isHighlighted ? '#FFFFFF' : '#FBBF24',
          glow: 'rgba(239, 159, 39, 0.35)',
          text: 'text-risk-amber',
        };
      case 'LOCATION':
      case 'DEVICE':
      case 'ACCOMMODATION':
      default:
        return {
          fill: '#22D3C7',
          stroke: isHighlighted ? '#FFFFFF' : '#38F6E8',
          glow: 'rgba(34, 211, 199, 0.35)',
          text: 'text-cyan',
        };
    }
  };

  const isEdgeHighlighted = (fromId: string, toId: string) => {
    if (!selectedNode) return false;
    return (
      (selectedNode.id === fromId && selectedNode.connections.includes(toId)) ||
      (selectedNode.id === toId && selectedNode.connections.includes(fromId))
    );
  };

  return (
    <div className={`relative w-full h-full select-none overflow-hidden bg-defense-950/90 rounded border border-defense-700/60 ${className}`}>
      {/* Background HUD Matrix */}
      <div className="absolute inset-0 tech-dot-bg opacity-30 pointer-events-none" />
      <div className="absolute top-2 left-3 flex items-center gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/80">
          NEO4J CLUSTER · GRAPH ENGINE ACTIVE
        </span>
      </div>

      <div className="absolute top-2 right-3 text-[10px] font-mono text-defense-400 pointer-events-none">
        ALGO: PAGERANK + BETWEENNESS
      </div>

      {/* SVG Canvas for Graph */}
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="edgeGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22D3C7" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="edgeGradAlert" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E24B4A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EF9F27" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Render Edges */}
        {DEFAULT_NODES.map((source) =>
          source.connections.map((targetId) => {
            const target = DEFAULT_NODES.find((n) => n.id === targetId);
            if (!target || source.id > target.id) return null; // prevent duplicate drawing

            const highlighted = isEdgeHighlighted(source.id, target.id);
            const isCriticalPath =
              source.category === 'SUSPECT_CRITICAL' || target.category === 'SUSPECT_CRITICAL';

            return (
              <g key={`${source.id}-${target.id}`}>
                <line
                  x1={`${source.x}%`}
                  y1={`${source.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke={highlighted ? (isCriticalPath ? '#E24B4A' : '#22D3C7') : '#232B38'}
                  strokeWidth={highlighted ? 0.75 : 0.35}
                  strokeDasharray={highlighted ? 'none' : '1, 1'}
                  className="transition-all duration-300"
                />

                {/* Animated Signal Packet along active edges */}
                {highlighted && (
                  <circle r="0.8" fill={isCriticalPath ? '#FF7373' : '#38F6E8'}>
                    <animateMotion
                      path={`M ${source.x} ${source.y} L ${target.x} ${target.y}`}
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })
        )}

        {/* Render Nodes */}
        {DEFAULT_NODES.map((node) => {
          const isSelected = selectedNode?.id === node.id;
          const isNeighbor = selectedNode?.connections.includes(node.id);
          const { fill, stroke } = getNodeColors(node.category, isSelected);

          const radius = node.category === 'SUSPECT_CRITICAL' ? 3.2 : 2.4;

          return (
            <g
              key={node.id}
              className={interactive ? 'cursor-pointer' : ''}
              onMouseEnter={() => interactive && setHoveredNode(node.id)}
              onMouseLeave={() => interactive && setHoveredNode(null)}
              onClick={() => interactive && setActiveNode(node)}
            >
              {/* Outer Pulse Ring for High Risk */}
              {node.riskScore > 80 && (
                <circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={radius * 1.7}
                  fill="none"
                  stroke={fill}
                  strokeWidth="0.3"
                  opacity="0.3"
                  className="animate-pulse"
                />
              )}

              {/* Node Core */}
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={radius}
                fill={fill}
                stroke={stroke}
                strokeWidth={isSelected ? '0.8' : '0.4'}
                opacity={isSelected || isNeighbor || !selectedNode ? 1 : 0.35}
                className="transition-all duration-200"
              />

              {/* Node ID Tag */}
              {!compact && (
                <text
                  x={`${node.x}%`}
                  y={`${node.y + 4.5}%`}
                  textAnchor="middle"
                  fill={isSelected ? '#F1F5F9' : '#94A3B8'}
                  fontSize="2.4"
                  fontFamily="monospace"
                  opacity={isSelected || isNeighbor ? 1 : 0.6}
                >
                  {node.id}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Floating Node Telemetry Inspector */}
      {interactive && selectedNode && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute bottom-3 right-3 left-3 sm:left-auto sm:w-80 bg-defense-900/95 border border-defense-700 p-3.5 backdrop-blur-md shadow-2xl rounded text-xs pointer-events-none"
          >
            <div className="flex items-center justify-between border-b border-defense-750 pb-2 mb-2">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    selectedNode.category === 'SUSPECT_CRITICAL'
                      ? 'bg-risk-red animate-ping'
                      : selectedNode.category === 'INTERMEDIARY'
                      ? 'bg-risk-amber'
                      : 'bg-cyan'
                  }`}
                />
                <span className="font-mono font-bold text-defense-100">{selectedNode.label}</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-defense-800 text-defense-300 border border-defense-700">
                {selectedNode.typeLabel}
              </span>
            </div>

            <p className="text-defense-300 text-[11px] leading-relaxed mb-2.5">
              {selectedNode.detail}
            </p>

            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-defense-800/80 font-mono text-[10px]">
              <div className="bg-defense-850 p-1 rounded border border-defense-750">
                <span className="text-defense-400 block">RISK SCORE</span>
                <span
                  className={`font-bold text-xs ${
                    selectedNode.riskScore >= 80
                      ? 'text-risk-red'
                      : selectedNode.riskScore >= 60
                      ? 'text-risk-amber'
                      : 'text-cyan'
                  }`}
                >
                  {selectedNode.riskScore}/100
                </span>
              </div>
              <div className="bg-defense-850 p-1 rounded border border-defense-750">
                <span className="text-defense-400 block">CENTRALITY</span>
                <span className="font-bold text-xs text-defense-100">{selectedNode.centrality}</span>
              </div>
              <div className="bg-defense-850 p-1 rounded border border-defense-750">
                <span className="text-defense-400 block">LINKS</span>
                <span className="font-bold text-xs text-cyan">{selectedNode.connections.length} Edges</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
