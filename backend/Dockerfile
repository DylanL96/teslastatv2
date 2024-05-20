# Start with a base image containing Java runtime
FROM openjdk:17-jdk-slim

# Add Maintainer Info
LABEL maintainer="dylanlaw2@gmail.com"

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8080 available to the world outside this container
EXPOSE 8080

# The application's jar file
ARG JAR_FILE=target/backend-0.0.1-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} app.jar

# Set the environment variable for Firebase credentials
ENV GOOGLE_APPLICATION_CREDENTIALS=backend/src/main/resources/serviceAccountKey.json

# Copy the Firebase service account key to the container
COPY src/main/resources/serviceAccountKey.json /app/serviceAccountKey.json

# Run the jar file
ENTRYPOINT ["java","-jar","/app.jar"]
