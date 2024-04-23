# Migrating monolith

To run
1) Run in Fudgud/frontend:
 ```
docker build -t frontend .
docker run -p 3000:3000
 ```
2) Run in Fudgud/auth and Fudgud/cart:
```
docker build -t auth .
docker run -p 5000:5000
```
3) Run in Fudgud/cart:
```
docker build -t cart .
docker run -p 5001:5001
```
4) Run an instance of mongodb