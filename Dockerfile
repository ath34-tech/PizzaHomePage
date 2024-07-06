# Use the official Python image from Docker Hub
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the website files to the working directory
COPY . .

# Expose port 8000
EXPOSE 8000

# Start the HTTP server when the container starts
CMD ["python", "-m", "http.server", "8000"]