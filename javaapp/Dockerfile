FROM openjdk:17.0.2-jdk
WORKDIR /opt
COPY mvnw .
COPY mvnw.cmd .
COPY .mvn/ ./.mvn
COPY pom.xml .
RUN ./mvnw dependency:resolve
COPY . .
RUN ./mvnw clean package && mv target/*.jar target/javaapp.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "/opt/target/javaapp.jar" ]

