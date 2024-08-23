node {


 withEnv(["JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64", "PATH=${env.JAVA_HOME}/bin:${env.PATH}"]) {

     stage("Checkout") {
            checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Tadix/all_devops.git']])
        }

    stage('Prepare Environment') {
        dir('javaapp') {
            sh 'chmod 700 ./mvnw'
        }
    }

    stage('Unit Tests') {
    dir('javaapp') {
             sh './mvnw test'
         }

    }

    stage('Integration Tests and sonarqube code analyses') {
    dir('javaapp') {
             sh './mvnw clean verify sonar:sonar -Dsonar.projectKey=all_devops -Dsonar.projectName="all_devops" -Dsonar.host.url=http://3.93.52.84/:9000 -Dsonar.token=sqp_3aaeee711735f727110648dc24bfdf42989ace35 -Dsonar.coverage.jacoco.xmlReportPaths=target/jacoco/jacoco.xml'
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

//         stage("Push Docker Image to Registry") {
//             withCredentials([string(credentialsId: 'docker-registry-credentials', variable: 'DOCKER_PASSWORD')]) {
//                 sh """
//                     echo "$DOCKER_PASSWORD" | docker login -u tadix07 --password-stdin
//                     docker tag javaapp:latest tadix07/tadix-private-image:latest
//                     docker push tadix07/tadix-private-image:latest
//                 """
//             }
//         }


 }
}
