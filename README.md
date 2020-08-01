# Call for code, Server API


This API was written in NodeJS (ExpressJS + JWT + SQLite3). The idea is to provide an API to handle data in a mobile app. So basically, we need to handle four entities/endpoints: `users`, `animals`, `vehicles`
and `missions`.


# server instalation
For the instalation the server you can get from https://github.com/cmtehenz/backendIBM
```sh
$ git clone https://github.com/cmtehenz/backendIBM.git
```
after 
```sh
$ cd server-skipthedishes
```
then
```sh
$ yarn install
```
or
```sh
$ npm install
```
finaly run
```sh
$ npm run 
```
or
```sh
$ yarn start 
```

## Firefighters:

### Get firefighters:

`GET /firefighters` (authentication not required): get all firefighters.

## Animals:

### Get animals:

`GET /animals` (authentication not required): gets all animals.


## Vehicles:

### Get vehicles:

`GET /vehicles` (authentication not required): gets all vehicles.

## Missions:

### Get missions:

`GET /missions` (authentication not required): gets all missions.

### Get mission by id:

`GET /missions/:missionId` (authentication not required): gets information from specific mission.
