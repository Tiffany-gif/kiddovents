# Kiddovents

A web platform for kids' events — frontend setup complete.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher recommended)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## Installation

1. Clone the repository (if you haven't already):
```bash
git clone <repository-url>
cd kiddovents
```

2. Install all required dependencies:
```bash
npm install
```

This will install all the packages listed in `package.json`, including:
- React and React DOM
- React Router DOM for routing
- Tailwind CSS for styling
- TypeScript and related type definitions
- Vite for building and development
- ESLint for code linting
- And other development dependencies

## Running the Application

### Development Mode

To start the development server:
```bash
npm run dev
```

This will start the Vite development server. You should see output indicating the local server URL (typically `http://localhost:5173`). Open this URL in your browser to view the application.

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- Source maps for debugging

### Build for Production

To create a production build:
```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

This serves the production build locally, useful for testing before deployment.

### Linting

To check for code quality issues:
```bash
npm run lint
```

## Project Structure

```
kiddovents/
├── src/
│   ├── components/      # React components
│   ├── App.tsx          # Main app component
│   ├── AppRouter.tsx    # Router configuration
│   ├── index.tsx        # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Troubleshooting

If you encounter issues:

1. **Node modules issues**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.
2. **Port already in use**: If port 5173 is in use, Vite will automatically try the next available port.
3. **Type errors**: Ensure all dependencies are installed and run `npm install` to update packages.