# Restaurant Menu API

This project is a Restaurant Menu API built using Node.js and GraphQL. The API provides data to a restaurant menu application.

## Project Setup

Follow these instructions to set up and run the API locally.

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>


2. Navigate to the project directory:

```
cd restaurant-menu-api
```

3. Install the dependencies

```
npm install

or 

npm install --legacy-peer-deps if it doesn't cooperate
```

### Running the API
To start the server, run;

```
npm start
```

To start the server in development mode(with `nodemon`), run:

```
npm run dev
```

The API will be available at http://localhost:4000/graphql

### Running Tests
To run the automated tests, use:

```
npm test
```

### GraphQL Queries
You can use the following example queries to interact with the API:

Get all menu items:

```
{
  menu {
    category
    name
    description
    price
  }
}
```

Get menu items by category:

```
{
  menu(category: "APPETIZERS") {
    category
    name
    description
    price
  }
}
```
