# VELOOP Rewards — Banner Redesign

A responsive frontend redesign of the VELOOP Rewards promotional banners, built as part of **Task 08 — Rewards Engagement Banner/Card Redesign**.

## Project Overview

This project redesigns five feature banners to create a premium, modern, trustworthy, and reward-focused user experience. The interface uses a dark fintech-inspired visual theme with distinct illustrations, responsive layouts, and interactive elements.

## Features

- **Refer & Earn:** Referral-code sharing demonstration.
- **Swap Center:** Interactive preview of reward balance conversion.
- **Bonus VEs:** Explore sample bonus activities.
- **Captcha Tasks:** Interactive sample CAPTCHA verification.
- **Exchange Center:** Preview redemption options.

The feature interactions are frontend demonstrations. No real reward balances, payouts, conversions, or redemptions are processed.

## Technology Stack

- React.js
- Vite
- JavaScript
- Bootstrap
- CSS Modules
- Lucide React
- React Hooks
- CSS animations and responsive media queries

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- A code editor such as Visual Studio Code

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd veloop-rewards
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Development Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
veloop-rewards/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ReferEarnBanner/
│   │   ├── SwapCenterBanner/
│   │   ├── BonusVEsBanner/
│   │   ├── CaptchaTasksBanner/
│   │   ├── ExchangeCenterBanner/
│   │   └── FeatureDestination.jsx
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The exact folder structure may vary slightly depending on the final implementation.

## Responsive Design

The layout is designed to adapt to desktop, tablet, and mobile screens.

Target banner heights from the assignment:

- Desktop/laptop: 410–450px
- Tablet: 380–540px
- Mobile: 330–520px

The banners use the available parent width and adapt their layouts for smaller screens.

## Design and Animation

- Main application background: `#161827`
- Premium dark navy surfaces with gold, soft blue, silver, and muted purple accents.
- Feature-specific visual compositions.
- Subtle entrance, hover, and illustration animations.
- Keyboard focus indicators and reduced-motion support.

## Screenshots

Add screenshots of the completed application here.

Suggested screenshots:
1. Full rewards dashboard.
2. Refer & Earn and Swap Center banners.
3. Bonus VEs and Captcha Tasks banners.
4. Exchange Center banner.
5. Mobile responsive layout.
6. Feature interaction screens.

## Live Demo

**Live website:** ADD_YOUR_DEPLOYED_WEBSITE_URL

## GitHub Repository

**Source code:** ADD_YOUR_GITHUB_REPOSITORY_URL

## Author

**Author:** YOUR_NAME

## Assignment

VELOOP Rewards — Frontend Development Task Assignment  
Task 08: Rewards Engagement Banner/Card Redesign

## License

This project was developed for an educational frontend development assignment.
