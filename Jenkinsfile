pipeline {
//   agent any
//   stages {
//     stage('build') {
//       steps {
//         sh 'npm install'
//       }
//     }
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }

    stage('test') {
      steps {
        sh 'npm run test'
      }
    }

  }
}