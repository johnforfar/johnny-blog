# Environment Variables Template

Create a `.env.local` file in the frontend directory with these variables:

```bash
# Backend Configuration
NEXT_PUBLIC_BACKEND_URL=http://localhost:3007

# For production, set to your actual backend URL:
# NEXT_PUBLIC_BACKEND_URL=https://your-backend-domain.com
```

## Notes

- `NEXT_PUBLIC_` prefix is required for Next.js to expose variables to the browser
- Never commit `.env.local` files to version control
- Use different URLs for development and production
