# Migrating monolith

To run
## 1) Run in Fudgud/frontend:
  - build docker container
 ```
docker build -t <docker-username>/frontend:<tag> .
```
  - run kubernetes deployment and service
```
kubectl apply -f <docker-username>/frontend:<tag>
```
 - (testing) to run docker container
``` 
docker run -p 3000:3000
 ```
## 2) Run in Fudgud/auth:
  - build docker container
 ```
docker build -t <docker-username>/auth:<tag> .
```
  - run kubernetes deployment and service
```
kubectl apply -f <docker-username>/auth:<tag>
```
 - (testing) to run docker container
``` 
docker run -p 5000:5000
 ```
## 3) Run in Fudgud/cart:
  - build docker container
 ```
docker build -t <docker-username>/cart:<tag> .
```
  - run kubernetes deployment and service
```
kubectl apply -f <docker-username>/cart:<tag>
```
 - (testing) to run docker container
``` 
docker run -p 5001:5001
 ```

## 4) Run an instance of mongodb via mongosh or compass
