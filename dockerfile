# Stage 1: Build the application
FROM node:14-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build files from the React build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the ports for HTTP (80) and HTTPS (443)
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
