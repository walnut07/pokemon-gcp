# Which Pokemon?
### This app tells you which types of pokemon you should use in a fight!

## Features
- [x] The client-side server written with React is CI/CD to GCP.
- [ ] The server-side server written with Go is CI/CD to GCP.
- [x] Users can input a pokemon name and can see the pokemon types that are advantageous to it.
- [x] Anyone can leave a comment about a pokemon.
- [ ] Only logged in users can leave a comment.
- [ ] Users can edit or delete comments that they had made.

## Tech Stack
Frontend: React, TypeScript, tailwind, Docker, Nginx, GCP \
Backend: Go, gin, Firebase Realtime Database, (Docker, GCP *not used as of 2/12 2023)

## GCP Architecture
### Client Side
The client-side server is deployed to GCP. A code push to the source code triggers Cloud Build and it deploys the app to Cloud Run.
![The architecture](https://user-images.githubusercontent.com/90857923/218310161-779661f9-d282-4534-9a93-6456c2d8c990.png)

### Server Side
TODO: Deploy server side with Docker
