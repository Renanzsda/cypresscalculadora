node {
    
    stage('Clone repository'){
        checkout scm
    }


    stage('Build image'){
        dir('cypress'){
        sh 'pwd'
        def customImage = docker.build("renanziinz/my-cypress-image")
    }
    }
    
    stage('Test image'){
            echo "Tests passed"
            sh 'pwd'
    }
    
    stage('Push image'){
        
            docker.withRegistry("https://registry.hub.docker.com","docker-hub-credentials"){
            customImage.push("${env.BUILD_NUMBER}")
            customImage.push("latest")
        }
          
    }
}
