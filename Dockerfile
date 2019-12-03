FROM node:10.15.3-alpine

COPY $PWD /home/node
WORKDIR /home/node
RUN yarn install
RUN yarn build
RUN yarn global add serve

EXPOSE 80/tcp
EXPOSE 3000/tcp

CMD serve -s build
