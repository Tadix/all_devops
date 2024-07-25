node {
    stage('Prepare Environment for JAVA APP') {
        steps {
            script {
                dir('javaapp') {
                    sh 'chmod 700 ./mvnw'
                }
            }
        }
    }

    stage('Build') {
        steps {
            sh './mvnw clean compile'
        }
    }

    stage('Unit Tests') {
        steps {
            sh './mvnw test'
        }
    }

    stage('Integration Tests') {
        steps {
            sh './mvnw verify -DskipTests=false -DskipITs=false'
        }
    }

    post {
        always {
            junit '**/target/surefire-reports/*.xml'
            junit '**/target/failsafe-reports/*.xml'
        }
    }
}
