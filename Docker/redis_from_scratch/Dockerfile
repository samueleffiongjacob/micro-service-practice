# use an existing docker image as a base
FROM alpine

# download install dependencies
RUN apk add --update redis

# Additional step: install curl
RUN apk add --update curl

# Tell the image what to do when it starts as a container
CMD ["redis-server"]