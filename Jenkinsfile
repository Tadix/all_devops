pipeline{
agent {dockerfile true}
    stages{
        // stage("Checkout") {
        //         checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Tadix/amigos-services.git']])
        //     }

        stage("build and lunch containers") {
             steps{
                   sh '''
                sudo docker compose up -d
                
                '''
             }
            }}
}