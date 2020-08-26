## Clone the Code
```
git clone https://gitlab.refactory.id/samsularifin/pingpong-app.git
```

## Build the Image
```
docker build -t /pingpongapp:latest
```

## Deploy the Cluster
```
kubectl apply -f deployment.yaml
```

## Install Minikube
```
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
  && chmod +x minikube
sudo mkdir -p /usr/local/bin/
sudo install ./minikube /usr/local/bin/
```

## Start Minikube Service
```
minikube start --driver=docker
```

## Deploy to Minikube
```
minikube service ping-pong-app
```