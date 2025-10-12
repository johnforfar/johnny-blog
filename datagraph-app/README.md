# Johnny Blog Frontend

A modern Next.js blog with Farcaster integration, YouTube video embedding, and social features.

## Features

- 📝 **Blog Posts**: Markdown-based posts with rich content
- 🎥 **YouTube Integration**: Automatic video embedding and metadata
- 🌐 **Farcaster Integration**: Share posts and track engagement
- 💰 **Tipping System**: Support creators through Farcaster
- 🎨 **Modern UI**: Clean, responsive design with dark mode
- 📱 **Mobile Friendly**: Optimized for all devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Markdown**: React Markdown with GitHub Flavored Markdown
- **Social**: Farcaster Mini App SDK
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johnforfar/johnny-blog.git
cd johnny-blog/datagraph-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp ENV-TEMPLATE.md .env.local
# Edit .env.local with your configuration
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

See `ENV-TEMPLATE.md` for required environment variables.

## Project Structure

```
datagraph-app/
├── app/                    # Next.js app directory
│   ├── posts/             # Blog post pages
│   ├── about/             # About page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   ├── header.tsx        # Site header
│   ├── footer.tsx        # Site footer
│   ├── share.tsx         # Farcaster sharing
│   └── tip.tsx           # Tipping component
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

- GitHub Issues: [Report bugs or request features](https://github.com/johnforfar/johnny-blog/issues)
- Farcaster: [@johnforfar](https://farcaster.xyz/johnforfar)
- Twitter: [@johnforfar](https://twitter.com/johnforfar)
