# ⛪ Sint-Jacobskerk Interactive 3D Tour

**Live Demo: [sint-jacobs.vercel.app](https://sint-jacobs.vercel.app/)**
**GitHub Repository: [github.com/Quintenntje/sint-jacobs](https://github.com/Quintenntje/sint-jacobs)**

An immersive, interactive 3D experience of the historic **Sint-Jacobskerk** (Saint James' Church) in Ghent, Belgium. This project allows users to explore the church's unique architecture and history through a browser-based 3D environment.

## ✨ Features

- **Interactive 3D Model**: Explore a detailed 3D reconstruction of the Sint-Jacobskerk.
- **Points of Interest (POI)**: Clickable markers that reveal historical facts, images, and trivia (like the famous 1996 hot air balloon incident).
- **Dynamic Lighting**: Toggle between **Day** and **Night** modes, affecting the scene's atmosphere and lighting.
- **Narrator (Text-to-Speech)**: Integrated Dutch (nl-NL) narration for all historical descriptions.
- **Cinematic Camera**: Smooth camera transitions between points of interest using GSAP.
- **Sound Effects**: Atmospheric audio feedback when switching modes.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Quintenntje/sint-jacobs.git
   cd sint-jacobs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **3D Engine**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Three.js](https://threejs.org/)
- **Utilities**: [React Three Drei](https://github.com/pmndrs/drei)
- **Animation**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📜 Points of Interest Included

1. **Westgevel en de Ongelijke Torens**: The Romanesque facade and its asymmetrical towers.
2. **De Laat-gotische Sacristie**: The 16th-century late-gothic sacristy.
3. **Het Luchtballon-incident (1996)**: The spectacular crash of a hot air balloon against the tower.
4. **Gotische Tracery Vensters**: High-gothic window designs.
5. **De Achthoekige Vieringtoren**: The Scheldegotiek central tower.
