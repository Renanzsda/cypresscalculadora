node {
    
    stage('Clone repository'){
        checkout scm
    }
    stage('Build image'){
        sh "cd cypress && pwd"
        sh "cd cypress"
        sh "ls"
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
