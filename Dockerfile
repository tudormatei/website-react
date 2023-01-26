FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm i react-typical --legacy-peer-deps
RUN npm install
COPY . .
CMD ["npm","start"]