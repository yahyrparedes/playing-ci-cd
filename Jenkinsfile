pipeline {
  agent {
    node {
      label 'develop'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        sh 'npm run test'
      }
    }

  }
}