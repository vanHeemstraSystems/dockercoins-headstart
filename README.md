dockercoins-headstart
# Docker Coins - Headstart

Based on "Docker Coins" at https://github.com/jpetazzo/container.training/tree/main/dockercoins

See video "#SwarmWeek with Jérôme Petazzoni" at https://www.youtube.com/watch?v=qbIvUvwa6As from 1:41

See video "Getting Started with Kubernetes and container orchestration" at https://www.youtube.com/watch?v=J08MrW2NC1Y from 2:21:15

## 100 - Prerequisites

- Git Client (optional)
- Docker Engine, see https://github.com/vanHeemstraSystems/docker-quick-start-headstart
- Docker Compose, see https://github.com/vanHeemstraSystems/docker-compose-headstart

## 200 - Installation

### 100 - Clone this repository

### 200 - Use sample code

Make a copy of the following files:

```
$ cp /containers/docker-coins/sample.docker-compose.yml /containers/docker-coins/docker-compose.yml
$ cp /containers/docker-coins/sample.docker-compose.logging.yml /containers/docker-coins/docker-compose.logging.yml
```

### 300 - Build and run the Docker Coins

```
$ cd /containers/docker-coins/
docker-compose up -d
```

The Web UI will be running on the designated port (default: 8000).

Check the server fro the command line:

```
$ wget https://localhost:8000
```

It should return: ***200 OK***

Check the server through the browser:

```
https://[HOSTNAME]:8000
```

You should get:

```
Docker Coins
Hello from Docker Coins!
```
