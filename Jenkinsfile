pipeline{
agent any
    stages{

        stage("build and lunch containers") {
             steps{
                   sh '''
                docker compose up -d
                
                '''
             }
            }}
}