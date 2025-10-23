# Use the official Node.js image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the code
COPY . .

# Expose your app’s port (e.g. 3000)
EXPOSE 3030

# Start the app
CMD ["npm", "start"]
