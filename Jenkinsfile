node {
    
    stage('Clone repository'){
        checkout scm
    }
    steps {
    sh "pwd"
    dir('cypress') {
      sh "pwd"
    }
    sh "pwd"
} 
    stage('Build image'){
        def customImage = docker.build(sh "cd cypress && pwd && ls","renanziinz/my-cypress-image")
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
