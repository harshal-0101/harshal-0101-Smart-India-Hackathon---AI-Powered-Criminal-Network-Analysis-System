# SENTINEL-X — AI Criminal Network Analysis Platform

> **National-Security-Grade Intelligence & Syndicate Interdiction Platform**  
> Built for NCRB / Ministry of Home Affairs investigative workflows, combining real-time computer vision (OpenCV), NLP entity extraction from police records, and graph analytics to uncover hidden criminal syndicates.

---

## ⚡ Quick Start: How to Run the Project

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (`node -v`)
- **npm**: v9.0.0 or higher (`npm -v`)
- **MongoDB**: Optional (If MongoDB is running on `mongodb://127.0.0.1:27017`, the backend connects automatically. If not running, the backend seamlessly activates an **in-memory resilient store** so you can test all features without installing or starting MongoDB!).

---

### 2. Installation
From the root directory (`d:\Sunstone_hackathon`), install dependencies for all workspaces:
```bash
npm install
```

---

### 3. Running the Entire System (Frontend + Backend)

You can run both services concurrently or in separate terminal windows:

#### Option A: Run Both Together (Recommended)
Add or run concurrently:
```bash
# Terminal 1: Backend API (Express on port 5000)
npm run dev:api

# Terminal 2: Frontend Web App (Next.js on port 3000)
npm run dev:web
```

#### Option B: Run From Within Each Subdirectory
```bash
# To run the Express REST API:
cd apps/api
npm run dev
# Server will be active at: http://localhost:5000

# To run the Next.js Frontend:
cd apps/web
npm run dev
# App will be accessible at: http://localhost:3000
```

---

## 🌐 URLs & Endpoints

| Service | Port / URL | Description |
| :--- | :--- | :--- |
| **Next.js Web Interface** | `http://localhost:3000` | Full command-center marketing & live intelligence console |
| **API Health Telemetry** | `http://localhost:5000/api/health` | System status, database state, uptime |
| **Contact / Demo Lead API** | `http://localhost:5000/api/contact` | POST endpoint with Zod validation & Mongoose storage |
| **Lead Verification Feed** | `http://localhost:5000/api/leads` | GET endpoint to inspect captured agency demo requests |

---

## 🏗️ Monorepo Architecture

```
d:/Sunstone_hackathon/
├── package.json                   # Root workspace orchestration
├── README.md                      # Complete system execution guide
├── apps/
│   ├── web/                       # Next.js 14+ (App Router)
│   │   ├── app/
│   │   │   ├── layout.tsx         # Technical dark theme, fonts, SEO metadata
│   │   │   ├── page.tsx           # Assembles all 9 sections in strict order
│   │   │   └── globals.css        # Defense-tech CSS (reticles, scanlines, grids)
│   │   ├── components/
│   │   │   ├── navbar.tsx         # Tactical header with live status beacon
│   │   │   ├── hero-section.tsx   # Video/HUD overlay, rotating headlines, stat strip
│   │   │   ├── problem-section.tsx# Scattered intelligence sources converging to core
│   │   │   ├── pipeline-section.tsx # 5-stage architecture pipeline (CCTV to Console)
│   │   │   ├── features-grid.tsx  # 3-col grid with interactive micro-UI previews
│   │   │   ├── dashboard-preview.tsx # Command console with interactive SVG network graph
│   │   │   ├── impact-section.tsx # Decision support, Sec 65B audit trails, DPDP alignment
│   │   │   ├── tech-stack-section.tsx # OpenCV, Neo4j, PyTorch, Node.js scale benchmarks
│   │   │   ├── contact-section.tsx # Agency clearance & demo request form
│   │   │   ├── footer.tsx         # Prototype disclaimer, compliance specifications
│   │   │   └── ui/
│   │   │       ├── stat-counter.tsx # Scroll-triggered precision counter
│   │   │       ├── network-graph-visual.tsx # Force-directed interactive graph visual
│   │   │       └── reticle-card.tsx # Reusable card with corner targeting brackets
│   │   └── public/
│   │       ├── hero-poster.svg    # High-tech procedural surveillance poster
│   │       └── README-ASSETS.md   # Instructions for dropping custom MP4 videos
│   │
│   └── api/                       # Express + TypeScript + Mongoose REST API
│       ├── src/
│       │   ├── server.ts          # Express server with CORS & health telemetry
│       │   ├── config/db.ts       # Resilient MongoDB connector with in-memory fallback
│       │   ├── models/Lead.ts     # Mongoose Lead schema
│       │   └── routes/contact.ts  # POST /api/contact & GET /api/leads
│       ├── tsconfig.json
│       └── package.json
```

---

## 🎯 Verification & Testing

### 1. Test the Frontend
Open `http://localhost:3000` in your browser:
- Observe the **procedural OpenCV HUD overlay** with bounding boxes, tracking vectors, and confidence metrics.
- Click **"Tactical Angle"** toggles in the Hero to cycle headlines.
- Watch **Stat Counters** smoothly animate up on scroll.
- Hover over nodes in the **Command Center Mockup** to highlight connected syndicate edges and inspect real-time node telemetry (Risk Score, Betweenness Centrality, Degree).

### 2. Test the Agency Contact Form
1. Scroll to the **"Request an Institutional Demonstration"** section at the bottom.
2. Fill in the investigator fields:
   - **Name**: e.g., `ACP Rajesh Kumar`
   - **Agency**: e.g., `State CID Special Cell`
   - **Designation**: e.g., `Superintendent of Police`
   - **Email**: `analyst@cid.gov.in`
   - **Scope**: `Cross-Jurisdiction Syndicate Mapping`
3. Click **Transmit Demo Requisition**.
4. You will instantly receive a **Clearance Dossier Ticket** (`REF-XXXXXX`).
5. Open `http://localhost:5000/api/leads` in your browser to verify that the lead was captured in the backend database.
"# Smart-India-Hackathon---AI-Powered-Criminal-Network-Analysis-System" 
