# Use an official Node.js image as a base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project (if using a framework that needs it)
RUN npm run build

# Define the command to run the application
CMD ["npm", "start"]
