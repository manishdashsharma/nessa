# Use official Node.js image as base
FROM node:18

# Switch to root temporarily to set up directories
USER root

# Create and set working directory
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
