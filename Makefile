SHELL := /bin/bash

SVC_NAME = react-frontend

SVC_TAG = latest

SOURCE_CONTAINTER = nodejs-backend

# Set the port to expose the frontend
SERVER_PORT = 8007

all:
	$(MAKE) local
local:
	$(MAKE) bridge
	$(MAKE) build-develop
	$(MAKE) run cmd="yarn dev"


prod:
	$(MAKE) bridge
	$(MAKE) build-production
	$(MAKE) run cmd="yarn start"

build-develop:
	docker build --rm \
		-f docker-build.d/Dockerfile.develop \
		-t $(SVC_NAME):$(SVC_TAG) \
		.

build-production:
	docker build --rm \
		-f docker-build.d/Dockerfile.production \
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
	$(SVC_NAME):$(SVC_TAG) \
	$(cmd)

exec:
	docker exec \
		-ti \
		$(SVC_NAME) \
		/bin/sh

stop:
	docker stop $(SVC_NAME) || true && docker rm $(SVC_NAME) || true

bridge:
	./scripts/add_bridge.sh

