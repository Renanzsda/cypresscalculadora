node {
    
    stage('Clone repository'){
        checkout scm
    }
    steps {
        sh "pwd"
    dir('your-sub-directory') {
        sh "pwd"
            }
        sh "pwd"
} 
    stage('Build image'){
        
        def customImage = docker.build("renanziinz/my-cypress-image")
    }
    stage('Test image'){
        steps{
            sh 'echo "Tests passed"'

        }
    }
    stage('Push image'){
            docker.withRegistry("https://registry.hub.docker.com","docker-hub-credentials"){
            customImage.push("${env.BUILD_NUMBER}")
            customImage.push("latest")
        }
    }
}
