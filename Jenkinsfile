node {
    stage('Prepare Environment') {
        dir('javaapp') {
            sh 'chmod 700 ./mvnw'
        }
    }

    stage('Build') {
     dir('javaapp') {
                sh './mvnw clean compile'
            }

    }

    stage('Unit Tests') {
    dir('javaapp') {
                    sh './mvnw test'
                }

    }

    stage('Integration Tests') {
    dir('javaapp') {
                       sh './mvnw verify -DskipTests=false -DskipITs=false'
                    }

    }

    post {
        always {
            dir('javaapp') {
                               junit '**/target/surefire-reports/*.xml'
                               junit '**/target/failsafe-reports/*.xml'
                            }

        }
    }
}
