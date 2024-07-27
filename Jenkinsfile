node {


 withEnv(["JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64", "PATH=${env.JAVA_HOME}/bin:${env.PATH}"]) {

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

    stage('Integration Tests and sonarqube code analyses') {
    dir('javaapp') {
             sh './mvnw clean verify sonar:sonar -Dsonar.projectKey=all_devops -Dsonar.projectName="all_devops" -Dsonar.host.url=http://44.204.229.221:9000 -Dsonar.token=sqp_602b4d379d350f12dfb2c6b3387b7057067c0c0f -Dsonar.coverage.jacoco.xmlReportPaths=target/jacoco/jacoco.xml'
         }

    }

    stage("Build") {
        dir('javaapp'){
            sh "./mvnw package -DskipTests"}
        }

stage("Build Docker Image") {
            dir('javaapp') {
                sh "docker build -t javaapp ."
            }
        }

        stage("Push Docker Image to Registry") {
            withCredentials([string(credentialsId: 'docker-registry-credentials', variable: 'DOCKER_PASSWORD')]) {
                sh """
                    echo "$DOCKER_PASSWORD" | docker login -u tadix07 --password-stdin
                    docker tag javaapp:latest tadix07/tadix-private-image:latest
                    docker push tadix07/tadix-private-image:latest
                """
            }
        }


 }
}
