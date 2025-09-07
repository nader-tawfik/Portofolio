# Portfolio - NextJS with Tailwind CSS

A modern, responsive portfolio website built with NextJS and Tailwind CSS.

## Features

- ⚡ **NextJS 14** - Latest React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Performance Optimized** - Fast loading and smooth animations
- 🎯 **TypeScript** - Type-safe development
- 📧 **Contact Form** - Interactive contact section
- 🎨 **Modern UI/UX** - Clean and professional design

## Tech Stack

- **Framework**: NextJS 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: React Icons
- **Animations**: CSS Transitions & Tailwind Animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── pages/                 # NextJS pages
│   ├── _app.tsx          # App wrapper
│   └── index.tsx         # Home page
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Landing.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── constants/        # Data and configuration
│   │   └── profile.tsx
│   └── styles/          # Global styles
│       └── globals.css
├── public/              # Static assets
└── tailwind.config.js   # Tailwind configuration
```

## Customization

### Profile Data

Edit `src/constants/profile.tsx` to update:

- Personal information
- Projects
- Skills
- Contact details
- Social links

### Styling

- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes

## Deployment

The project is ready for deployment on platforms like:

- Vercel (recommended for NextJS)
- Netlify
- AWS Amplify
- Any static hosting service

Build the project:

```bash
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).
