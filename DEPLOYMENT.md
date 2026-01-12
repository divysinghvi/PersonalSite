# Deployment Guide

This guide covers how to deploy the Personal Site to various hosting platforms.

## GitHub Pages

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Vercel

1. Install Vercel CLI (optional):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or simply connect your GitHub repository to Vercel dashboard.

Build settings:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Netlify

### Via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Via Dashboard:
1. Connect your GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Cloudflare Pages

1. Connect your GitHub repository in Cloudflare Pages dashboard
2. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: `NODE_VERSION = 18`

## Custom Server (via FTP/SSH)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web server's root directory (usually `public_html` or `www`)

## Docker

Create a `Dockerfile`:
```dockerfile
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t personal-site .
docker run -p 80:80 personal-site
```

## Environment Variables

No environment variables are required for this static site.

## Notes

- The site is completely static after build, requiring no server-side processing
- All mode preferences are stored in localStorage on the client side
- The built files in `dist/` can be served from any static file server or CDN
