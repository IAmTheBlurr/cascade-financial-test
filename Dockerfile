# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Expose the port that the tests will run on
EXPOSE 4444

# Set the command to run the tests
CMD ["npm", "test"]
