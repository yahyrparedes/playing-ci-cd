pipeline {
  agent {
    node {
      label 'Develop'
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