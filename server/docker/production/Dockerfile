# Use a specific node version instead of latest for stability
FROM node:20-slim

# Add node user for security
USER node

# Create and set working directory with proper permissions
WORKDIR /usr/src/app

# Copy package files with correct ownership
COPY --chown=node:node package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy application code with correct ownership
COPY --chown=node:node . .

# Expose the port
EXPOSE 5000

# Set NODE_ENV
ENV NODE_ENV=production

# Start the application
CMD ["node", "src/server.js"]