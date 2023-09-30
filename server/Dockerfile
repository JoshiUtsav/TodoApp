# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install server application dependencies
RUN npm install

# Copy the rest of the server application source code to the container
COPY . .

# Expose a port (if needed)
EXPOSE 8080

# Define the command to start the server application
CMD ["npm", "start"]
