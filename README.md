# ⚡ Personal Portfolio Website - Venkata Surya Kiran Maddipudi

A modern, responsive, high-performance personal portfolio website built for **Venkata Surya Kiran Maddipudi**. Built using **React 18**, **Vite**, **Tailwind CSS**, and **Express.js**, featuring **1-Click Render Blueprint Deployment** via `render.yaml`.

---

## 🌟 Key Features

- **Responsive Design**: Flawlessly adapted across mobile devices, tablets, and desktop displays.
- **Render Blueprint Deployment (`render.yaml`)**: Built-in Render configuration file for effortless 1-click cloud deployment.
- **14 Detailed Projects Catalog**: Includes all projects from resume with search filtering, tech stack tags, interactive modals, and direct GitHub links.
- **Internships & Industry Experience Timeline**: Highlighting roles at **Infosys** (Java Full Stack Intern - ShipTrack Pro) and **SmartBridge** (MERN Full Stack Intern).
- **Academic Qualifications**: B.Tech in Computer Science (CGPA: 8.48), Intermediate (96.7%), SSC (100%).
- **Interactive Skills Matrix**: Visual level meters and categorized technology cards (Java, React, Node.js, Spring Boot, PostgreSQL, MongoDB, AWS, OpenCV, etc.).
- **Interactive Contact Form**: Integrated with Node.js Express backend (`/api/contact`) with validation and instant feedback.
- **Dark & Light Mode**: Smooth theme toggling with automatic user preference persistence.
- **Interactive Resume Modal**: View, print, or download PDF formatted resume directly from the site.

---

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React Icons
- **Backend**: Node.js, Express.js (Contact API & Production Static Server)
- **Deployment**: Render Blueprint (`render.yaml`), Node 20+

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 3. Build & Test Production Server Locally
```bash
npm run build
npm start
```
The Express server will launch on `http://localhost:5000` serving the built production static site and the `/api/contact` backend API.

---

## ☁️ Deployment on Render (1-Click Blueprint)

This project contains a pre-configured `render.yaml` blueprint file at the repository root.

### Steps to Deploy:
1. Push this project code to your **GitHub** repository.
2. Sign in to your [Render Dashboard](https://dashboard.render.com).
3. Click **New +** and select **Blueprint**.
4. Connect your GitHub repository containing this project.
5. Render will automatically detect `render.yaml` and configure:
   - **Service Name**: `portfolio-surya-kiran`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Click **Apply**. Render will automatically build the React application and launch the Express web service!

---

## 📁 Repository Structure

```
CERSO/
├── render.yaml               # Render Blueprint deployment specification
├── package.json              # Project scripts & dependencies
├── vite.config.js            # Vite bundler configuration
├── tailwind.config.js        # Tailwind styling & dark mode setup
├── postcss.config.js         # PostCSS plugins
├── index.html                # HTML template with SEO meta
├── README.md                 # Project documentation
├── server/                   # Express backend server
│   └── index.js              # API routes (/api/contact) & static asset server
└── src/                      # React frontend
    ├── main.jsx              # React mounting root
    ├── App.jsx               # Main application container
    ├── index.css             # Tailwind directives & global styling
    ├── data/                 # Centralized resume dataset
    │   └── portfolioData.js
    └── components/           # UI Components
        ├── Navbar.jsx        # Sticky navigation & theme toggle
        ├── Hero.jsx          # Hero landing banner & quick stats
        ├── About.jsx         # Profile summary & hackathon spotlight
        ├── Skills.jsx        # Categorized skill meters & icons
        ├── Experience.jsx    # Infosys & SmartBridge internship timeline
        ├── Education.jsx     # B.Tech, Inter & SSC academic scores
        ├── Projects.jsx      # Filterable & searchable 14 projects
        ├── ProjectModal.jsx # Project deep-dive details modal
        ├── Certifications.jsx # AWS, MERN, Python credentials & awards
        ├── Contact.jsx       # Interactive form connected to /api/contact
        ├── Footer.jsx        # Navigation links & credits
        └── ResumeModal.jsx   # Resume viewer & printer
```

---

## 📧 Contact & Links

- **Email**: [suryamaddipudi10@gmail.com](mailto:suryamaddipudi10@gmail.com)
- **LinkedIn**: [maddipudi-venkata-surya-kiran-2ba6842ba](https://linkedin.com/in/maddipudi-venkata-surya-kiran-2ba6842ba)
- **GitHub**: [Surya-Kiran22](https://github.com/Surya-Kiran22)
