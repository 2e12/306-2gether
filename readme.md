# 2gether

## Demo Users

| E-Mail        | Username | Password |
|---------------|----------|----------|
| gibb0@gibb.ch | gibb0    | sml12345 |
| gibb1@gibb.ch | gibb1    | sml12345 |
| gibb2@gibb.ch | gibb2    | sml12345 |
| gibb3@gibb.ch | gibb3    | sml12345 |

A set of demo users will be auto generated if not existing.

## API

Make sure that the backend is running and open the following URL in order to take a look at the API specification.

```
http://localhost:8888/docs
```

## Backend

Make sure that the following steps have been followed.

### Installation

Make sure you have python 3 installed. We recommend version `3.9`, because we are developing on this version.

Then install all python dependencies with:
```shell script
$ pip install -r requirements.txt
```

### Start backend

Start the backend Server with:
```shell script
$ python -m backend
```
This will start the HTTP server. By default port 8888 and host 0.0.0.0 are used. 
Set the environment variable `FAST_API_HOST` and `FAST_API_PORT` to overwrite them.


## Frontend

Make sure that the following steps have been followed.

### Installation

Make sure you have Node and npm installed.
We recommend Node version `v12.18.3` and npm version `6.14.8`, because we are developing on this version.

Then install all npm dependencies with:
```shell script
$ npm i
```

### Start frontend

Before you can start the frontend make sure that you changed the ENV Variable `API_PATH` to the exact path your backend is running on.\
As an example: `export const API_PATH = 'http://192.168.211.1:8888/api';`

Start the frontend Server with:
```shell script
$ npm start
```
This will start the HTTP server. By default port 3000 and host 0.0.0.0 are used. 
