pipeline {
  environment {
    registry = "zakiyasifat/simple-node-local-jenkins-kube" 
    registryCredential = '07f94c1d-6a84-4f11-a051-d8da6867566d' 
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
