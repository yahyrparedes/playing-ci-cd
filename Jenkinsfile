pipeline {

  agent any
  tools {
    nodejs '16.0.0'
  }
  stages {
    stage('build') {

      steps {
        echo 'Start Build'
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        echo 'Start Test'
        sh 'npm run test'
      }
    }

  }
}