# Security Configuration for Xnode Deployment

## 🔒 Security Model

This application is designed for deployment on Xnode as sub-apps on NixOS, which provides a different security model than traditional web applications.

### **Internal Communication Only**
- Frontend and backend run on the same Xnode instance
- Communication via `localhost:3006` (internal network only)
- No external API exposure required
- NixOS firewall controls external access

## 🛡️ Security Measures Implemented

### **1. Internal Request Validation**
- Only allows requests from localhost/internal network ranges
- Blocks external requests in production mode
- Validates request origin and IP addresses

### **2. Rate Limiting**
- **General API**: 1000 requests/minute per IP
- **GitHub Sync**: 10 requests/minute (sensitive operation)
- **YouTube Scraping**: 20 requests/minute
- **Farcaster Sharing**: 30 requests/minute

### **3. Input Validation**
- Required field validation for sensitive endpoints
- Request size limits (10MB max)
- Input sanitization for all user inputs

### **4. CORS Configuration**
- Development: Allows localhost origins
- Production: Restricted to specific domains
- No wildcard origins allowed

### **5. Environment Variables**
- Backend secrets never exposed to frontend
- Frontend only receives `NEXT_PUBLIC_BACKEND_URL`
- Sensitive keys (GitHub, Farcaster) stay on server

## 🚀 Deployment Security

### **NixOS Configuration**
```nix
# Firewall only opens frontend port (3000)
networking.firewall.allowedTCPPorts = [ 3000 ];

# Backend runs on internal port (3006)
# Not exposed externally
```

### **Systemd Service Isolation**
- Dedicated user/group for the application
- Process isolation
- Limited file system access

### **Environment Variables**
```bash
# Backend (server-side only)
GITHUB_TOKEN=your_token
FARCASTER_API_KEY=your_key
FARCASTER_FID=your_fid

# Frontend (exposed to browser)
NEXT_PUBLIC_BACKEND_URL=http://localhost:3006
NEXT_PUBLIC_URL=https://your-domain.com
```

## 🔍 Security Monitoring

### **Logging**
- All API requests logged with IP addresses
- Rate limit violations tracked
- Failed authentication attempts monitored

### **Error Handling**
- No sensitive information in error responses
- Generic error messages for external requests
- Detailed logging for internal debugging

## ⚠️ Security Considerations

### **What's Protected**
- ✅ Internal API communication
- ✅ Rate limiting on sensitive endpoints
- ✅ Input validation and sanitization
- ✅ CORS restrictions
- ✅ Request size limits

### **What's Not Needed (Xnode Context)**
- ❌ API keys for internal communication
- ❌ JWT tokens for authentication
- ❌ External API gateway
- ❌ Load balancer security

### **Production Checklist**
- [ ] Set `NODE_ENV=production`
- [ ] Set `DEBUG_MODE=false`
- [ ] Configure proper CORS origins
- [ ] Set up monitoring/logging
- [ ] Regular security updates

## 🛠️ Development vs Production

### **Development**
- More permissive CORS (allows localhost)
- Debug logging enabled
- Relaxed rate limits

### **Production**
- Strict CORS policies
- Minimal logging
- Aggressive rate limiting
- Internal request validation

## 📞 Security Contact

For security issues or questions about this deployment model, please contact the development team.
