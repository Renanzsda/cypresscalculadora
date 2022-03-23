pipeline {
  agent any
   
    parameters {
        string(name:'SPEC',defaultValue: "cypress/cypress/integration/**/**",description:"Acessar aonde estão os scripts que serão executas")
        choice(name: "BROWSER", choices: ['chrome','edge','firefox'], description: "Escolha o browser que você deseja")
    }
    options{
        ansiColor('xterm')
    }
    stages{
        stage('Deploying'){
            steps{
                echo "Buildar a aplicação"
            }
        }
        stage('Testing'){
            steps{
                bat 'npm i'
                bat 'npm run cy:run --browser ${BROWSER} --spec ${}'
            }
        }
        stage('DeployingApp'){
            steps{
                echo "Deploy the application"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/cypress/reports', reportFile: 'index.html', reportName: 'HTML Report', reportTitle: ''])
        }
    }
}