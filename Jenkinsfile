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
             sh './mvnw clean verify -DskipTests=false -DskipITs=false sonar:sonar -Dsonar.projectKey=all_devops -Dsonar.projectName="all_devops" -Dsonar.host.url=http://54.234.56.10:9000 -Dsonar.login=sqp_602b4d379d350f12dfb2c6b3387b7057067c0c0f'
         }

    }

    stage("Build") {
        dir('javaapp'){
            sh "./mvnw package -DskipTests"}
        }

//     stage("Build Docker Image") {
//
//     dir('javaapp'){
//         sh "sudo docker build -t javaapp ."
//          }
//      }


 }
}
