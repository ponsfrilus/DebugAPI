# See https://github.com/ponsfrilus/DebugAPI

FROM ubuntu:latest
LABEL maintainer="ponsfrilus@gmail.com"

RUN apt update -y && apt install -yq httpie curl
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt install -y nodejs
RUN node -v
RUN npm -v

WORKDIR /srv
ADD index.js index.js
ADD package.json package.json

RUN npm install --prefix /srv

EXPOSE 3000/tcp

CMD ["npm", "run", "debug"]
