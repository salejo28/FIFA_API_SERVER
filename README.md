# Fifa api (serve)

## Starting

Clone this repository

```
git clone https://github.com/santi280403/FIFA_API_SERVER.git
```

## Install dependencies

```
yarn install
```

## Set .env file

```
AUTHORIZATION_TOKEN=YOUR_CUSTOM_TOKEN
MONGO_URI=YOUR_HOST_DATABASE
```

## Run server

```
yarn start:dev
```

The first time the server will download all the infomation of the players and save it in the database.
In the process the server will show the message in console **Getting players information, please wait...**, this process will take a while, once finished the server will show the message **Players saved.**

## Folders

```
│   app.ts
│   db.ts
│   index.ts
│
├───auth
│       index.ts
│
├───controllers
│       index.ts
│       player.controller.ts
│
├───interfaces
│       index.ts
│
├───keys
│       index.ts
│
├───models
│   │   index.ts
│   │
│   └───Player
│           index.ts
│
├───routes
│       index.ts
│       player.routes.ts
│
└───script
        index.ts
```

## Routes

> **POST /api/v1/team** params { name: club_name, page: page_number } and return all the players in the club.

> **GET /api/v1/players?search=player_name&page=page_number&order=asc** return player or players with letter or full name matches.
