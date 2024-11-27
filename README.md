# Node.js Menu API

This project is a simple Node.js application that provides an API to create and fetch menu items. It uses Express.js for building the server, MongoDB for the database, and Postman for testing. The API has two main endpoints: one for creating menu items (POST) and another for retrieving them (GET).

## Features
 1. Create menu items and store them in a MongoDB database.
 2. Retrieve all menu items.
 3. Simple and clean structure for easy customization.

## Technologies Used
1.Node.js: JavaScript runtime.
2.Express.js: Framework for building the server.
3.MongoDB: NoSQL database.
4.Postman: For API testing.
5.Body-parser: Middleware to parse incoming request bodies

### Installation
1. Clone the repository
2. Install dependencies:
   i. npm install
3. Set up MongoDB
4. Run the server

## Endpoints 
1. Base URL: http://localhost:3000/
2. Check Server Status
  i.  Endpoint: GET /

##  Create Menu Item
 i.Endpoint: POST /menu
ii.Request Body Example (JSON):
![image](https://github.com/user-attachments/assets/4beb86a2-a98d-4b26-941b-4a0ca60bdf7e)

## Response : 
![image](https://github.com/user-attachments/assets/2f18b523-2eeb-459d-b8fd-91d752f7a596)

##  Retrieve All Menu Items
  i. Endpoint: GET /menudata
 ii. Response : 
 ![image](https://github.com/user-attachments/assets/17dcb88d-59de-4f62-a6fe-a338f2c1bd48)

 ## Project structure  : 
 ![image](https://github.com/user-attachments/assets/9ae48553-5409-4769-8958-fa04a8dcd867)

 ## Testing with Postman 
   1. Import the collection into Postman.
  2. Use the POST and GET requests to interact with the API.
  3.  Ensure MongoDB is running when testing.






