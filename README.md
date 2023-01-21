# NestJS + Docker +AppDynamics Example Project


Below referenced link example is modified and enabled to work with AppDynamics.



1. Docker file (I have rewrote the Dockerfile and kept it pretty basic which can be modified as per the user)
2. appdconfig.js (this file contains all the information to connect the agent with the Controller, make sure to change xxxx variable with the correct value)
3. package.json (added the appdynamics module)


Once you checkout the code by
```
git clone https://github.com/mithun100/nestjs-docker-tutorial.git

```
Navigate inside the folder, ensure to put correct value in the otel-collector-config.yaml file, which is marked as XXXX.

You can run the
```
docker-compose up

```
Once you want to stop it

```
docker-compose down
```
docker ps
create some traffic:

curl localhost:3000



You can find the related tutorial [here](https://dev.to/erezhod/setting-up-a-nestjs-project-with-docker-for-back-end-development-30lg).
