# Clock-in Landing Page

A modern, responsive landing page for Clock-in - a seamless event management mobile application designed for workshops, hackathons, and educational events.

## About Clock-in

Clock-in revolutionizes event management by providing a simple, secure platform for event discovery, registration, and check-in. Built with Flutter for mobile and powered by Firebase, it offers offline access, QR code tickets, and secure authentication.

## Features

- **Modern Design**: Clean, responsive interface with smooth animations
- **Interactive Hero**: Custom GLSL shader background with GSAP animations
- **Feature Showcase**: Grid-based feature cards with dynamic patterns
- **Technology Stack**: Detailed overview of the mobile app's architecture
- **FAQ Section**: Comprehensive answers to common questions
- **Dark/Light Theme**: Built-in theme switching with next-themes

## Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Styling**: Tailwind CSS 4.0 with custom animations
- **Animations**: Framer Motion, GSAP, and Lenis for smooth scrolling
- **3D Graphics**: Three.js with React Three Fiber for shader backgrounds
- **UI Components**: Radix UI primitives with custom styling
- **Code Quality**: Biome for linting and formatting
- **Runtime**: Optimized for Bun

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clockin
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start the development server:
```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run Biome linter
- `bun format` - Format code with Biome

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── eldoraui/         # Third-party UI components
│   └── mvpblocks/        # Feature blocks
├── lib/                  # Utility functions
├── public/               # Static assets
└── doc/                  # Documentation
```

## Key Components

- **Hero Section**: Interactive shader background with animated text
- **Feature Cards**: Grid layout showcasing app capabilities
- **Technology Stack**: Visual representation of the mobile app's tech
- **FAQ Section**: Collapsible questions and answers
- **CTA Section**: Call-to-action for app downloads

## Mobile App Features

The landing page showcases a Flutter mobile app with:

- **Event Discovery**: Browse hackathons, workshops, and seminars
- **Secure Registration**: Code-protected event sign-ups
- **Digital Tickets**: QR code generation for seamless check-in
- **Offline Access**: Local ticket caching for connectivity-free access
- **Profile Management**: Streamlined user information handling
- **Firebase Integration**: Authentication and real-time database

## Deployment

The site is optimized for deployment on Vercel:

```bash
bun build
```

Deploy to Vercel by connecting your repository or using the Vercel CLI.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## License

© 2025 Clock-in. All rights reserved.

Built with ♥ by Dev-Opify
