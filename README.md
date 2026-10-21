# Sun Relief Ice Cream 🍦

> Authentic Gujarat-crafted ice cream website for consumers and distributors. Featuring pure milk dairy products, real packaging photography, and a dedicated B2B wholesale partnership portal.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## ✨ Features

### 🍨 1. Consumer Flavour Discovery
- **Authentic Product Lineup**: Showcasing real Sun Relief products from Gujarat dairy line:
  - **Mango Dolly** (Ice Stick / Bar — *"Real Mango Taste"*)
  - **American Nuts** (Family Tub / Cup — Whole roasted almonds, cashews, pistachios, tutti-frutti)
  - **Black Current Creamy** (Family Tub / Cup — *"Rich & Creamy"* with real dark berry fruit ribbons)
  - **Pista Cone** (Waffle Cone with roasted pistachio nibs)
  - **Choco Late Chips** (Premium Waffle Cone with chocolate chips and cocoa swirl)
  - **Mango Duet™** (Juicy mango candy crust with creamy vanilla ice cream core)
- **Interactive Flavour Spotlight**: Switch and preview packaging, flavours, and formats dynamically.
- **Search & Category Filters**: Filter by *Sticks & Candies*, *Crisp Waffle Cones*, and *Family Tubs & Cups*.
- **Detailed Specifications Modal**: View packaging formats, serving suggestions, cold chain requirements, and instant social share actions.

### 🏢 2. B2B & Distributor Partnership Hub ("Grow With Sun Relief")
- **4-Step Onboarding Roadmap**: Clear guide for distributors, stockists, and ice cream parlours across Western India.
- **Commercial Requirements Guide**: Cold-chain infrastructure guidelines (-18°C storage), SKU availability, and refrigerated distribution route planning.
- **Interactive Territory Footprint**: Regional status for **Gujarat** (Headquarters & Active Hub), **Maharashtra**, and **Rajasthan**.
- **Functional Distributor Enquiry Form**:
  - Full Name, Firm Name, 10-digit Phone, Email (optional), City, State, Business Type, Cold Storage readiness (-18°C), Existing network experience, and Custom Requirements.
  - Generates verifiable Enquiry Reference IDs (e.g. `SR-B2B-XXXX-XXXX`).
  - Stores submission records locally with `.txt` receipt download.
  - **WhatsApp Direct Connect**: Automatically formats and encodes the submission into a ready-to-send WhatsApp message linking to the company contact desk.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8, tsx
- **Styling**: Tailwind CSS v4, custom ambient gradients and subtle grain textures
- **Typography**: Anton (Display titles) + Inter / Plus Jakarta Sans (Clean body & UI)
- **Icons**: Lucide React
- **Testing**: Node.js built-in test runner (`node:test`, `node:assert/strict`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or bun

### Installation
```bash
# Clone repository
git clone https://github.com/jayendrasinh025/Sunrelief.git
cd Sunrelief

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Unit Tests
```bash
# Run unit tests
npx tsx --test src/utils/enquiryValidation.test.ts src/utils/whatsappFormatter.test.ts
```

### Production Build
```bash
npm run build
```

---

## 📸 Media & Assets
All product packaging assets in `public/assets/aistudio/` are authentic product photographs of Sun Relief Ice Cream products manufactured in Gujarat, India.

---

## 📄 License
This project is licensed under the Apache-2.0 License.
