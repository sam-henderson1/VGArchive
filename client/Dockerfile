FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]

## To build the Docker image, run:
# docker build -t vgarchive-frontend .

## To run the Docker container, use:
# docker run -p 3000:3000 vgarchive-frontend