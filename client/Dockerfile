# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install client application dependencies
RUN npm install

# Copy the rest of the client application source code to the container
COPY . .

# Build the client application
RUN npm run build

# Expose a port (if needed)
EXPOSE 3000

# Define the command to start the client application
CMD ["npm", "start"]
