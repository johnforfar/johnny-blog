# Johnny Blog Mini App

A Farcaster Mini App for Johnny's Blog running on Xnode!

## Features

- 📝 Blog posts with markdown support
- 🎥 YouTube video integration
- 🔗 Farcaster sharing and engagement
- 💰 Tipping functionality
- 📱 Responsive design
- 🌙 Dark/light theme support

## Development

```bash
cd mini-app
npm install
npm run dev
```

## Deployment

This mini app is designed to be deployed on Xnode using the NixOS module:

```nix
services.johnny-blog-miniapp = {
  enable = true;
  port = 3000;
  url = "https://your-domain.com";
};
```

## Backend

The backend API runs separately and provides:
- Blog post content
- YouTube video metadata
- Farcaster integration
- CSV data storage

## License

MIT
