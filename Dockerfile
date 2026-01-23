# Stage 1: Build the application
FROM node:20-alpine AS builder

# Accept build arguments for EmailJS credentials
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY

# Set as environment variables for Vite build
ENV VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID
ENV VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID
ENV VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
# Using npm ci for faster, reliable, reproducible builds
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Build the application (env vars will be embedded during build)
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Install OpenSSL for certificate generation
RUN apk add --no-cache openssl

# Copy SSL certificate generation script
COPY generate-ssl-cert.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/generate-ssl-cert.sh

# Generate self-signed SSL certificate
RUN /usr/local/bin/generate-ssl-cert.sh

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose ports 80 and 443
EXPOSE 80 443

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
