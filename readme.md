# 2gether

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

