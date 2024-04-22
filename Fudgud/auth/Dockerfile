# Use an official Node.js runtime as the base image
FROM node:21.7.3

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the entire project to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 5000

# Define the command to run the app
CMD ["node", "index.js"]
