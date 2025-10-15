# Johnny Blog Frontend

🚀 **Modern Blog Frontend for Xnode Deployment**

A clean, responsive Next.js blog that connects to an encrypted datagraph backend.

## ✨ Features

- 📝 **Blog Posts**: Clean, readable post display
- 🎨 **Modern UI**: Responsive design with dark mode
- 📱 **Mobile Friendly**: Optimized for all devices
- 🔗 **Social Integration**: Share posts across platforms
- ⚡ **Fast Loading**: Optimized performance

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/johnforfar/johnny-blog
cd johnny-blog/mini-app

# Install dependencies
npm install

# Set environment variables (create .env.local file)
echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:3007" > .env.local

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env.local` file with:
```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:3007
```

## 🌐 Xnode Deployment

Deploy with encrypted datagraph backend:
- **Frontend**: Port 3006 (public access)
- **Backend**: Port 3007 (internal only)
- **Security**: Backend protected by firewall rules

## 📁 Project Structure

```
mini-app/
├── app/           # Next.js pages
├── components/    # React components
├── lib/          # Utilities
└── public/       # Static assets
```

## 🛡️ Security

- **Internal API**: Connects to localhost backend only
- **No secrets**: All sensitive data handled by backend
- **Firewall protected**: Backend not exposed to internet

## 🎨 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Icons**: Lucide React

---

**Clean, fast, and secure** 🌟