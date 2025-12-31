# VGArchive
## An archive of videogames
<img width="1906" height="992" alt="image" src="https://github.com/user-attachments/assets/dad830eb-9149-48bc-8702-8d72fe6db721" />


### How to run

open terminals for server and client

"npm run dev" in backend terminal

"npm start" in frontend terminal

open link provided by the frontend terminal

### How to run in docker

run docker

open terminals for server and client

run in frontend terminal:

docker build -t vgarchive-frontend .

docker run -p 3000:3000 vgarchive-frontend

run in backend terminal:

docker build -t vgarchive-backend .

docker run -p 5000:5000 vgarchive-backend
