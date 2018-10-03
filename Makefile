SHELL := /bin/bash

SVC_NAME = react-frontend

SVC_TAG = latest

SOURCE_CONTAINTER = nodejs-backend

# Set the port to expose the frontend
SERVER_PORT = 3000

all:
	$(MAKE) local

local:
	$(MAKE) bridge
	$(MAKE) build
	$(MAKE) run

build:
	docker build --rm \
		-f docker-build.d/Dockerfile \
		-t $(SVC_NAME):$(SVC_TAG) \
		.

run:
	$(MAKE) stop
	docker run \
	-it \
	--network=petbnb \
	--name $(SVC_NAME) \
	-p $(SERVER_PORT):$(SERVER_PORT) \
	-v ${PWD}/src:/service/src \
	--rm \
	$(SVC_NAME):$(SVC_TAG)

exec:
	docker exec \
		-ti \
		$(SVC_NAME) \
		/bin/sh

stop:
	docker stop $(SVC_NAME) || true && docker rm $(SVC_NAME) || true

bridge:
	./scripts/add_bridge.sh

