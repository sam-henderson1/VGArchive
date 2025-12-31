FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 5000

CMD ["npm", "run", "dev"]

## To build the Docker image, run:
# docker build -t vgarchive-backend .

## To run the Docker container, use:
# docker run -p 5000:5000 vgarchive-backend