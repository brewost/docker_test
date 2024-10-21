# Use a lightweight Node image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Vite uses (default 5173)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
