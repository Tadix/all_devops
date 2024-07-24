pipeline{
agent any
    stages{

       stage("Unit Tests") {
               steps{
               sh "chmod 700 javaapp/mvnw && javaapp/./mvnw test"
               }
           }}
}

