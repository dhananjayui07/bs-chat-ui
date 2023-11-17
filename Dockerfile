# Stage 1: Build React app
FROM node:14 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install ALL dependencies, including development dependencies
RUN npm install --force

# Copy app source code
COPY . .

# Build the React app
RUN npm run build


# Stage 2: Serve app with Nginx
FROM nginx:latest

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf

# Copy the built React app from Stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
