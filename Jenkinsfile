pipeline {
    agent any
    tools { nodejs 'node20' } // Asegurate de tener configurada esta tool en Global Tool Configuration en Jenkins
    stages {
        stage('Install Dependencies') {
            steps { sh 'npm install' }
        }
        stage('Run Unit Tests') {
            steps { sh 'npm test' }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Simulando creacion de imagen Docker...'
                // sh 'docker build -t mi-api-node:latest .'
            }
        }
    }
    post {
        always { echo 'Pipeline finalizado.' }
        success { echo 'Despliegue exitoso (simulado).' }
    }
}
