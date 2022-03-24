node {
    
    stage('Clone repository'){
        checkout scm
    }


    stage('Build image'){
        dir('cypress'){
        sh 'pwd'
        def customImage = docker.build("renanziinz/my-cypress-image")
        docker.withRegistry("https://registry.hub.docker.com","docker-hub-credentials"){
                customImage.run("-it -p '81:80'")    
                customImage.push("${env.BUILD_NUMBER}")
                customImage.push("latest")
         }
        }
    }
    
}
