node {
    stage('Prepare Environment') {
        dir('javaapp') {
            sh 'chmod 700 ./mvnw'
        }
    }

    stage('Build') {
        sh './mvnw clean compile'
    }

    stage('Unit Tests') {
        sh './mvnw test'
    }

    stage('Integration Tests') {
        sh './mvnw verify -DskipTests=false -DskipITs=false'
    }

    post {
        always {
            junit '**/target/surefire-reports/*.xml'
            junit '**/target/failsafe-reports/*.xml'
        }
    }
}
