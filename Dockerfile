# Build step #1: build the React front end
FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV PORT 3000
EXPOSE 3000
COPY package.json ./
COPY ./public ./public
COPY ./src ./src
RUN npm install --force --loglevel verbose
CMD npm start

