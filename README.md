### Prime Checker API (Node.js + Express)

A simple REST API to check whether a given number is a prime number or not.


### Getting Started

###### Clone the repository

git clone [https://github.com/motivated-star/challenge.git](https://github.com/motivated-star/challenge.git)

cd challenge

###### Install Dependencies

npm install

###### Run the app

npm start

### API ENDPOINT

**GET** `/check_prime?number=YOUR_NUMBER`

**Query Parameter:**

* `number` — the number to check for primality

Example: 

http://localhost:5001/check_prime?number=13

Response: 

{
  "number": 13,
  "is_prime": true
}
