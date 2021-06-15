dockercoins-headstart
# Docker Coins - Headstart

Based on "Docker Coins" at https://github.com/jpetazzo/container.training/tree/main/dockercoins

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

```
$ wget https://localhost:8000
```
