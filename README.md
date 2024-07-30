# Product Service

A complex product management service for handling CRUD operations, categories, reviews, ratings, and more in a scalable microservices architecture.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Create Product](#create-product)
  - [Get All Products](#get-all-products)
  - [Get Product by ID](#get-product-by-id)
  - [Update Product](#update-product)
  - [Delete Product](#delete-product)
- [Error Handling](#error-handling)
- [Logging](#logging)

## Features

- Product Management (CRUD operations)
- Product Categories
- Product Reviews and Ratings
- Product Inventory Management
- Search and Filtering
- Product Images
- JWT Authentication
- Data Validation
- Pagination and Sorting
- Discounts and Promotions
- Analytics and Reporting

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SimiyuWafulah/product-service.git
   cd product-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB:
   ```bash
   mongod --dbpath /path/to/your/db
   ```

4. Start the application:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
PORT=3001
MONGODB_URI=mongodb://localhost:27017/productdb
JWT_SECRET=your_jwt_secret
```

## API Endpoints

### Create Product

- **URL**: `/api/products`
- **Method**: `POST`
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 100.00,
    "stock": 10,
    "category": "Category Name",
    "images": ["image1.jpg", "image2.jpg"],
    "ratings": 0,
    "reviews": [
      {
        "user": "UserID",
        "rating": 5,
        "comment": "Great product!"
      }
    ]
  }
  ```
- **Responses**:
  - `201 Created`:
    ```json
    {
      "message": "Product created successfully",
      "product": { ... }
    }
    ```
  - `400 Bad Request`:
    ```json
    {
      "error": "Validation error message"
    }
    ```

### Get All Products

- **URL**: `/api/products`
- **Method**: `GET`
- **Responses**:
  - `200 OK`:
    ```json
    [
      {
        "_id": "ProductID",
        "name": "Product Name",
        "description": "Product Description",
        "price": 100.00,
        "stock": 10,
        "category": "Category Name",
        "images": ["image1.jpg", "image2.jpg"],
        "ratings": 4.5,
        "reviews": [
          {
            "user": "UserID",
            "rating": 5,
            "comment": "Great product!"
          }
        ]
      },
      ...
    ]
    ```

### Get Product by ID

- **URL**: `/api/products/:id`
- **Method**: `GET`
- **Responses**:
  - `200 OK`:
    ```json
    {
      "_id": "ProductID",
      "name": "Product Name",
      "description": "Product Description",
      "price": 100.00,
      "stock": 10,
      "category": "Category Name",
      "images": ["image1.jpg", "image2.jpg"],
      "ratings": 4.5,
      "reviews": [
        {
          "user": "UserID",
          "rating": 5,
          "comment": "Great product!"
        }
      ]
    }
    ```
  - `404 Not Found`:
    ```json
    {
      "message": "Product not found"
    }
    ```

### Update Product

- **URL**: `/api/products/:id`
- **Method**: `PUT`
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "name": "Updated Product Name",
    "description": "Updated Product Description",
    "price": 120.00,
    "stock": 15,
    "category": "Updated Category Name",
    "images": ["image1.jpg", "image2.jpg"],
    "ratings": 0,
    "reviews": [
      {
        "user": "UserID",
        "rating": 4,
        "comment": "Good product!"
      }
    ]
  }
  ```
- **Responses**:
  - `200 OK`:
    ```json
    {
      "message": "Product updated successfully",
      "product": { ... }
    }
    ```
  - `400 Bad Request`:
    ```json
    {
      "error": "Validation error message"
    }
    ```
  - `404 Not Found`:
    ```json
    {
      "message": "Product not found"
    }
    ```

### Delete Product

- **URL**: `/api/products/:id`
- **Method**: `DELETE`
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Responses**:
  - `200 OK`:
    ```json
    {
      "message": "Product deleted successfully"
    }
    ```
  - `404 Not Found`:
    ```json
    {
      "message": "Product not found"
    }
    ```
