# Use official Node.js 14 as base image
FROM node:16.20.2-buster-slim as build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client code
COPY . .

RUN mv .env.example .env

# Build the client for production
CMD [ "npm", "run", "dev" ]