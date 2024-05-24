const request = require('supertest');
const app = require('../src/index');

// api.test.js

describe('GraphQL API Tests', () => {
  it('should return all menu items', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    // Test logic here
    const query = `
      query {
        menu {
          name
          description
          price
        }
      }
    `;
    const response = await request(app)
      .post('/graphql')
      .send({ query })
      .expect(200);
    expect(response.body.data.menu).to.be.an('array');
  });

  it('should add a new menu item', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    // Test logic here
    const mutation = `
      mutation {
        addMenuItem(category: "APPETIZERS", item: { name: "Test Item", description: "Test Description", price: 9.99 }) {
          name
          description
          price
        }
      }
    `;
    const response = await request(app)
      .post('/graphql')
      .send({ query: mutation })
      .expect(200);
    expect(response.body.data.addMenuItem).to.deep.include({ name: 'Test Item', description: 'Test Description', price: 9.99 });
  });

  it('should update a menu item', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');

    const mutation = `
      mutation {
        updateMenuItem(category: "APPETIZERS", name: "Test Item", updates: { description: "Updated Description", price: 12.99 }) {
          name
          description
          price
        }
      }
    `;
    const response = await request(app)
      .post('/graphql')
      .send({ query: mutation })
      .expect(200);
    expect(response.body.data.updateMenuItem).to.deep.include({ name: 'Test Item', description: 'Updated Description', price: 12.99 });
  });

  it('should delete a menu item', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');

    const mutation = `
      mutation {
        deleteMenuItem(category: "APPETIZERS", name: "Test Item") {
          name
        }
      }
    `;
    const response = await request(app)
      .post('/graphql')
      .send({ query: mutation })
      .expect(200);
    expect(response.body.data.deleteMenuItem).to.deep.include({ name: 'Test Item' });
  });


  after(() => {
    app.close(); // Close the server after all tests are completed
  });
});
