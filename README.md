# WhipAlgo - Next.js Portfolio

A modern, high-performance portfolio website for WhipAlgo trading indicators, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** - Latest version with App Router and Server Components
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS for rapid UI development
- **Responsive Design** - Mobile-first approach for all screen sizes
- **Smooth Animations** - Custom keyframes and transitions
- **SEO Optimized** - Meta tags, structured data, and best practices
- **Performance** - Image optimization, code splitting, lazy loading
- **Accessible** - WCAG compliant components and navigation

## 📁 Project Structure

```
whipalgo/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Marketing routes group
│   │   ├── page.tsx              # Home page
│   │   ├── about/page.tsx        # About page
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── projects/page.tsx     # Projects page
│   │   ├── services/page.tsx     # Services page
│   │   └── layout.tsx            # Marketing layout
│   ├── api/                      # API routes
│   │   ├── contact/route.ts      # Contact form handler
│   │   └── newsletter/route.ts   # Newsletter signup
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── not-found.tsx             # 404 page
├── components/
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/                 # Page sections
│   │   ├── hero.tsx
│   │   ├── notable-calls.tsx
│   │   ├── how-it-works.tsx
│   │   ├── pricing.tsx
│   │   ├── about.tsx
│   │   ├── faq.tsx
│   │   └── cta.tsx
│   ├── cards/                    # Card components
│   │   └── signal-card.tsx
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx
│   │   └── container.tsx
│   └── shared/                   # Shared components
│       ├── logo.tsx
│       ├── social-links.tsx
│       └── scroll-to-top.tsx
├── lib/
│   └── utils.ts                  # Utility functions
├── hooks/
│   ├── use-intersection-observer.ts
│   ├── use-media-query.ts
│   └── use-scroll.ts
├── data/
│   └── index.ts                  # Static data and constants
├── types/
│   └── index.ts                  # TypeScript interfaces
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies

```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/whipalgo.git
   cd whipalgo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Create environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Design System

### Colors

The design uses a dark theme with these core colors:

- **Background**: `#080810`
- **Surface**: `#0d0d1a`
- **Text**: `#e8e8f0`
- **Accent**: `#7c5cfc` (Purple)
- **Green**: `#00d68f`
- **Red**: `#ff4d6d`

### Typography

- **Heading Font**: Space Mono (monospace)
- **Body Font**: DM Sans (sans-serif)

### Components

All UI components are located in `components/ui/` and can be imported and reused:

```tsx
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function MyComponent() {
  return (
    <Container>
      <Button variant="primary">Click me</Button>
    </Container>
  )
}
```

## 🔗 Key Pages

- **Home** (`/`) - Landing page with all sections
- **About** (`/about`) - Company information
- **Services** (`/services`) - Service descriptions
- **Projects** (`/projects`) - Trading indicators showcase
- **Contact** (`/contact`) - Contact form
- **404** - Custom 404 page

## 📡 API Routes

### POST `/api/contact`

Submit contact form data.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

### POST `/api/newsletter`

Subscribe to newsletter.

**Request body:**
```json
{
  "email": "john@example.com"
}
```

## 🚀 Deployment

This project is optimized for deployment on:

- **Vercel** (recommended) - Zero-config deployment for Next.js
- **Netlify** - Full Next.js support
- **Docker** - Containerized deployment
- **Self-hosted** - Any Node.js server

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 🔐 Environment Variables

Copy `.env.local.example` to `.env.local` and add your variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Add other public variables here (NEXT_PUBLIC_ prefix)
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance)
- **Core Web Vitals**: Optimized
- **Bundle Size**: ~50KB (gzipped)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@whipalgo.com or open an issue on GitHub.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with types

---

**Built with ❤️ by WhipAlgo Team**
