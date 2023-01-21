FROM node:16 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
#ENV NODE_OPTIONS='--require "/usr/src/app/appdconfig.js"'

RUN npm run build
ENV NODE_OPTIONS='--require "/usr/src/app/appdconfig.js"'

EXPOSE 3000
CMD ["node", "dist/main"]
