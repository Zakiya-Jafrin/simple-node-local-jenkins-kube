pipeline {
  environment {
    registry = "knsakib/simple-node-local-jenkins-kube" 
    registryCredential = '4ac13e38-8252-49a6-92f1-e2bcd019ade0' 
    dockerImage = ''
    CI = 'true'
  }
  agent any
  stages {
    stage('Building our image') { 
      steps { 
        script { 
          dockerImage = docker.build registry
        }
      } 
    }
    stage('Push image') { 
      steps { 
        script { 
          docker.withRegistry( '', registryCredential ) { 
            dockerImage.push() 
          }
        } 
      }
    }
    stage('Deployment') {
      steps {
        script {
        sh """
        helm upgrade --install local-kube helm-local-jenkins-kube
        """
        // sh """
        // kubectl create secret docker-registry IMG_PULL_SECRET \
        // --docker-server=https://registry.hub.docker.com --docker-username=${docker-user} \
        // --docker-password=${docker-pass} --docker-email=${docker-email}>
        // """
        // sh """
        // helm upgrade --install local-kube \
        //     --set imagePullSecrets=${IMG_PULL_SECRET} \
        //     --set image.repository=knsakib/simple-node-local-jenkins-kube helm-local-jenkins-kube
        // """
        sh "sleep 5"
        }
      }
    }
  }  
}
