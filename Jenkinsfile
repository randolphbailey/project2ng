pipeline {
  agent {
    docker {
      image 'node:13-alpine'
      args '-p 20001-20100:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      when { branch "master" }
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      when { branch "master" }
      steps {
        sh 'npm run build'
        }
      }
    stage('Deployment') {
       when { branch "master" }
        steps {
         withAWS(region:'us-east-1',credentials:'e1b45079-b2b7-4af7-b53c-65346b59e6ce') {
           s3Delete(bucket: 'jradrecipes.club', path:'**/*')
           s3Upload(bucket: 'jradrecipes.club', workingDir:'dist/project2-front-end', includePathPattern:'**/*');
            }
          }
       }
    }
}
