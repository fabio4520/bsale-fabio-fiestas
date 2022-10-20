# Welcome to this Amazing Ecommerce!

## Stack used

- Reactjs
- Fetch api
- Tailwind css
- react hook forms, react-icons, react-router-dom, etc.

This project was developed in Reactjs and Tailwind for styles.

The external api consumed was: http://fakestoreapi.com

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

This method according to the api documentation don't add new product into the original database, but returns a result (product info)

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

Same as POST method, according to the documentation this method don't update a product, but returns the product's info.

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

Sames as before.

```plain
method = 'delete'
headers = {}
endpoint = https://fakestoreapi.com/products/:idProduct
```

To further explanation of the documentation, follow this link: http://fakestoreapi.com/docs
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
