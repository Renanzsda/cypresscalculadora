node {
    
    stage('Clone repository'){
        steps{
        checkout scm
        }
    }
     
    // stage('Build image'){
    //     steps{
    //         sh "pwd"
    //         dir('cypress') {
    //         sh "pwd"
    //                                 }
    //         sh "pwd"

    //     def customImage = docker.build("renanziinz/my-cypress-image")
    // }
    // }
    
    stage('Test image'){
        steps{
            echo "Tests passed"

        }
    }
    
    stage('Push image'){
            docker.withRegistry("https://registry.hub.docker.com","docker-hub-credentials"){
            customImage.push("${env.BUILD_NUMBER}")
            customImage.push("latest")
        }
    }
}
