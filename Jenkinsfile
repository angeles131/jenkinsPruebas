pipeline {
    agent any
    tools { nodejs 'node20' }
    
    stages {
        stage('Instalar Dependencias') {
            steps { sh 'npm install' }
        }
        stage('Pruebas (CI)') {
            steps { sh 'npm test' }
        }
        stage('Empaquetado (CD)') {
            steps {
                // 1. Comprime los archivos vitales de la API en un .tar.gz (un zip)
                sh 'tar czf mi-api-lista.tar.gz app.js package.json'
                
                // 2. Le dice a Jenkins que guarde ese archivo como un Artefacto descargable
                archiveArtifacts artifacts: '*.tar.gz', fingerprint: true
            }
        }
    }
    post {
        always { echo 'Pipeline finalizado.' }
        success { echo 'El artefacto está listo para ser desplegado en el servidor.' }
    }
}
