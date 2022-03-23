node {
    deff app
    stage('Clone repository'){
        checkout scm
    }
    stage('Build image'){
        app = docker.build('renanziinz/my-cypress-image')
    }
    stage('Test image'){
        app.insider{
            sh 'echo "Tests passed"'

        }
    }
    stage('Push image'){
        docker.withRegistry("https://registry.hub.docker.com","docker-hub-credentials"){
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }


}
