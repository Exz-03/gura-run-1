FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  python \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install 
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY 83ugv9vrf0b75nk
ENV PM2_SECRET_KEY 711vhimf1m7g6am

COPY . .

EXPOSE 5000

CMD ["pm2-runtime", "main.js"]
