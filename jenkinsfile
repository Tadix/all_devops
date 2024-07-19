pipeline{
agent any
    stages{
        // stage("Checkout") {
        //         checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Tadix/amigos-services.git']])
        //     }

        stage("build and lunch containers") {
                sh '''
                sudo docker compose up -d
                
                '''
            }}
}