## HelloWorld-app Project (DevOps)
This project is intended to give the familiarity to use the tools of Azure DevOps and the technical skills DevOps.

### Task 1
** 1. Write HelloWorld app using **React.js** **
* Publish Health-check API 
* Push the code to the GitHub in the **MAIN BRANCH**

** 2. Write Dockerfile to build an image of the app and Docker-containers by create Docker-compose **
* Create a Dockerfile to build base image that include your runtime: java, python and so on
* Create a Dockerfile to build own HelloWorld app
* Publish Docker image to own repositories on [Docker Hub](https://hub.docker.com/)

* Pull image and run HellWorld app on own local PC with docker
* Check HelloWorld app by calling Health-check API with curl or by localhost:<port_no>/health/api


### Task 2
** 1. Create Azure Kubernetes (AKS) cluster **
* Deploy AKS in Azure platform
* Compose AKS manifest to deploy your database to AKS cluster manually
* Compose AKS manifest (like deployment, service, ...) to deploy your hello world app (using image that already publish to docker hub) to AKS cluster manually


### Task 3
** 1. Create CI/CD pipelines using Azure DevOps **
* Define HELM Chart for AKS Manifest that will need for helloWorld app deployment
* Create own Azure DevOps project
*  Define the HelloWorld configurations (include database password) into Azure Devops variable-group

** 2. Define Azure DevOps Pipeline with the following steps **
* Pull code from Git
*  Using Dockerfile to build own HelloWorld image tag
* Push the above image tag to Docker Hub
* Using Helm Chart to deploy HelloWorld app to AKS cluster
* Health-check HelloWorld app with defined health-check API

