# Use Node.js LTS version on Alpine Linux
FROM node:lts-alpine

# Create a directory for the app
RUN mkdir /app

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json first to take advantage of Docker's cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code to /app
COPY src src

# Expose port 5000 inside the container
EXPOSE 5000

# Define the command to start the application
CMD ["npm", "start"]
