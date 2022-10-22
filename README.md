# Welcome to this Amazing Ecommerce!

## Stack used

- Reactjs
- Fetch api
- Tailwind css
- react hook forms, react-icons, react-router-dom, etc.
- Nodejs for backend

This project was developed in Reactjs and Tailwind for styles. Also a server in nodejs was configured for api rest.

The backend was inspired in http://fakestoreapi.com

The requests are:

## GET

### List all products

```plain
method = 'get'
headers = {}
endpoint = https://fakestoreapi.com/products
```

### Get a single product

```plain
method = 'get'
headers = {}
endpoint = https://fakestoreapi.com/products/:idProduct
```

## POST

```plain
method = 'post'
headers = {}
endpoint = https://fakestoreapi.com/products
body: {
title: 'test product',
price: 13.5,
description: 'lorem ipsum set',
image: 'https://i.pravatar.cc',
category: 'electronic'
}
```

## PUT

```plain
method = 'put'
headers = {}
endpoint = https://fakestoreapi.com/products/:idProduct
body: {
title: 'test product',
price: 13.5,
description: 'lorem ipsum set',
image: 'https://i.pravatar.cc',
category: 'electronic'
}
```

## DELETE

```plain
method = 'delete'
headers = {}
endpoint = https://fakestoreapi.com/products/:idProduct
```

Toast was added in order to verify the functionality of api requests.

# Run project in local

To run project, needs to clone this repository

Once the repository is cloned, follow these commands in terminal

```terminal
npm run build
```

To start the project, type this commandline

```terminal
npm start
```

Enjoy the project! 😉
