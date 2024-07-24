pipeline{
agent any
    stages{

      stage('Unit Tests') {
                  steps {
                      script {
                          dir('javaapp') {
                              sh 'chmod 700 ./mvnw'
                              sh './mvnw test'
                          }
                      }
                  }
              }
              }
}

