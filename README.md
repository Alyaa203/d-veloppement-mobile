<div align="center">

<img src="logo_smash_princes-xm3pbzCU.png" alt="Smash Princes logo" width="160" />

# Smash Princes

**A real-time, mobile-first multiplayer card battle game featuring Disney characters.**

[Live demo](https://smash-princes.netlify.app) · [User testing report](TESTS_UTILISATEURS.md)

![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)
![MUI](https://img.shields.io/badge/Material_UI-007FFF?logo=mui&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

</div>

---

## Overview

Smash Princes is a web app where two players build a deck of Disney characters and fight each other in real time, each from their own phone.

**Why it exists:** it was built as a mobile development project to cover a full product cycle: consuming a public REST API, Google sign-in, real-time sync between two devices, deployment, and **user testing with real players** whose feedback led to design changes.

**At a glance:**
- Full-stack app (React front end, Firebase back end), deployed and playable online
- Real-time multiplayer: each move shows up instantly on the opponent's screen
- Tested with 6 users; satisfaction went from **3.4/5 to 4/5** after the changes

---

## Features

- **Google sign-in** with Firebase Authentication and protected routes
- **Deck builder**: browse and search 100 Disney characters from the [Disney API](https://disneyapi.dev), then pick 10 cards for your deck
- **Card stats**: each character gets attack and defense stats (1–10), stored in Firebase so every player sees the same values
- **Lobby**: create a game or join one that is waiting for an opponent
- **Real-time turn-based combat**:
  - Each player starts with 5 HP and 3 cards on the field, drawn from their shuffled deck
  - The attacker picks a card; the defender chooses to **block** with one of their cards or **take the hit** (−1 HP)
  - The field refills automatically from the deck
  - The game ends in a win, a loss or a draw
- **Clear turn indicators**: colour-coded status ("Your turn — Attack!", "Defend yourself!", "Opponent's turn…") and a highlighted active field
- **Mobile-first UI** with Material UI and a custom dark/gold theme

---

## Tech stack

| Layer | Technologies |
| --- | --- |
| Front end | React 19, React Router 7, Vite 8 |
| UI | Material UI 7, Emotion, Google Fonts (Cinzel Decorative) |
| Back end | Firebase Authentication (Google), Firebase Realtime Database |
| Data | [Disney API](https://disneyapi.dev) (REST) |
| State | React Context (auth, cards, stats) |
| Quality | ESLint, Prettier, Vitest |
| Deployment | Netlify (SPA redirects with `_redirects`) |

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later and npm
- A [Firebase](https://console.firebase.google.com/) project with:
  - **Authentication** set up, with the **Google** provider enabled
  - **Realtime Database** created

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/alyaa203/d-veloppement-mobile.git
cd d-veloppement-mobile

# 2. Install dependencies
npm install
```

3. Add your Firebase web app config (API key, auth domain, database URL, project ID…) to the Firebase service file used by the app.

### Run

```bash
npm run dev       # Start the dev server at http://localhost:5173
npm run build     # Build for production in dist/
npm run preview   # Preview the production build locally
```

### Code quality

```bash
npm run lint          # ESLint
npm run format:check  # Prettier check
npm test              # Vitest
```

> **Tip:** to try multiplayer locally, open the app in two different browsers (or one normal window and one private window) and sign in with two Google accounts.

---

## User testing

The game was tested with 6 players on their own phones, using the think-aloud method and a short interview after each session. Main changes made after testing:

- Consistent wording throughout the interface
- Visual highlight on the active player's field, so it is clear whose turn it is

The full protocol, quotes from players and next steps are in [`TESTS_UTILISATEURS.md`](TESTS_UTILISATEURS.md) (in French).

---

## Roadmap

- Rebalance the HP system so that blocking is a real strategic choice
- Add a card rarity system to reduce power gaps between characters
- Give access to the full Disney character catalogue, not just the first 100
