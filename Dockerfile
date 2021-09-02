# build environment
FROM node:14.17.3

# ARG FROM_IMAGE=react-mfe
# ARG FROM_TAG=latest
# FROM ${FROM_IMAGE}:${FROM_TAG} AS react-mfe-build
ARG SRCDIR=/usr/src/app

# set working directory
WORKDIR ${SRCDIR}

# Install app dependencies
COPY package.json ${SRCDIR}/package.json
COPY lerna.json ${SRCDIR}/lerna.json
COPY yarn.lock ${SRCDIR}/yarn.lock
COPY ./packages/core-ui/package.json ${SRCDIR}/packages/core-ui/
COPY ./packages/frontend-components/feature-01/package.json ${SRCDIR}/packages/frontend-components/feature-01/
COPY ./packages/shared-components/package.json ${SRCDIR}/packages/shared-components/

RUN yarn global add serve

# RUN install dependencies
RUN yarn 

# Bundle app source
COPY . ${SRCDIR}
RUN yarn lerna bootstrap
RUN yarn lerna run build

COPY ./packages/frontend-components/feature-01/build ${SRCDIR}/packages/core-ui/build/feature-one

# Expose the port and start the application
EXPOSE 9090

# CMD [ "yarn", "workspace", "@mfe/core-ui", "run", "start" ]
CMD [ "serve", "-s", "/usr/src/app/packages/core-ui/build"]