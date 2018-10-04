SHELL := /bin/bash

SVC_NAME = react-frontend

SVC_TAG = latest

SOURCE_CONTAINTER = nodejs-backend

# Set the port to expose the frontend
SERVER_PORT_DEV = 8007
SERVER_PORT_PROD = 3007

all:
	$(MAKE) local
local:
	$(MAKE) bridge
	$(MAKE) build-develop
	$(MAKE) run_dev cmd="yarn dev"


prod:
	$(MAKE) bridge
	$(MAKE) build-production
	$(MAKE) run_prod cmd="yarn start"

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

run_dev:
	$(MAKE) stop
	docker run \
	-it \
	--network=petbnb \
	--name $(SVC_NAME) \
	-p $(SERVER_PORT_DEV):$(SERVER_PORT_DEV) \
	-v ${PWD}/src:/service/src \
	--rm \
	$(SVC_NAME):$(SVC_TAG) \
	$(cmd)

run_prod:
	$(MAKE) stop
	docker run \
	-it \
	--network=petbnb \
	--name $(SVC_NAME) \
	-p$(SERVER_PORT_PROD):$(SERVER_PORT_PROD) \
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

