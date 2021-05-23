FROM node:14.15.4

#WORKDIR /usr/src/app

RUN mkdir -p /usr/src/roi-calc
WORKDIR /usr/src/roi-calc

# update and install dependency
#RUN apt update && apt upgrade
#RUN apt add git


COPY . /usr/src/roi-calc

RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
