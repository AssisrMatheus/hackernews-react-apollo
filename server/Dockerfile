FROM node:10.15.3-alpine

COPY $PWD /home/node
WORKDIR /home/node
RUN yarn install

EXPOSE 80/tcp
EXPOSE 3001/tcp

CMD yarn prisma deploy
