# Specify the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Create the temp directory and set permissions
RUN mkdir -p /usr/src/app/public/temp && \
    chown -R node:node /usr/src/app && \
    chmod -R 755 /usr/src/app/public

# Switch to non-root user
USER node

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]