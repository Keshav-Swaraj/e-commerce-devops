FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the backend files
COPY backend/ ./backend/

# Expose port
EXPOSE 5000

# Start command
CMD ["node", "backend/server.js"]
