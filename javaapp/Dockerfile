FROM ubuntu
RUN apt-get update && apt-get install openjdk-17-jdk vim curl -y
WORKDIR /opt
ADD target/*.jar target/javaapp.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "/opt/target/javaapp.jar" ]