# VGArchive
## An archive of videogames
<img width="1906" height="992" alt="image" src="https://github.com/user-attachments/assets/dad830eb-9149-48bc-8702-8d72fe6db721" />


### How to run

Create .env in server folder

get API key from rawg.io/apidocs

add API_KEY=`<your key here>` to .env

open terminals for server and client

run "npm i" in both terminals

"npm run dev" in server terminal

"npm start" in client terminal

open link provided by the client terminal

### How to run in docker

open docker desktop app

open terminals for server and client

run in client terminal:

docker build -t vgarchive-frontend .

docker run -p 3000:3000 vgarchive-frontend

run in server terminal:

docker build -t vgarchive-backend .

docker run -p 5000:5000 vgarchive-backend
