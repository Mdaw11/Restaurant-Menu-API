// resolvers.test.js

const { getMenuItems } = require('../src/models/menu');
const resolvers = require('../src/schema/resolvers');


describe('Resolver Tests', () => {
  it('should return all menu items for a specific category', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    const category = 'APPETIZERS';
    const result = await resolvers.Query.menu(null, { category });
    const expected = getMenuItems(category);
    expect(result).to.deep.equal(expected);
  });

  // Test for addMenuItem mutation resolver
  it('should add a new menu item', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    const category = 'APPETIZERS';
    const newItem = { name: 'New Test Item', description: 'New Test Description', price: 10.99 };
    const result = await resolvers.Mutation.addMenuItem(null, { category, item: newItem });
    const expectedMenuItems = getMenuItems(category);
    const addedItem = expectedMenuItems.find(item => item.name === newItem.name);
    expect(addedItem).to.deep.equal(newItem);
  });

  // Test for updateMenuItem mutation resolver
  it('should update an existing menu item', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    const category = 'APPETIZERS';
    const itemName = 'New Test Item';
    const updates = { description: 'Updated Description', price: 12.99 };
    const result = await resolvers.Mutation.updateMenuItem(null, { category, name: itemName, updates });
    const expectedMenuItems = getMenuItems(category);
    const updatedItem = expectedMenuItems.find(item => item.name === itemName);
    expect(updatedItem).to.deep.include(updates);
  });

  // Test for deleteMenuItem mutation resolver
  it('should delete an existing menu item', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    const category = 'APPETIZERS';
    const itemName = 'New Test Item';
    const result = await resolvers.Mutation.deleteMenuItem(null, { category, name: itemName });
    const expectedMenuItems = getMenuItems(category);
    const deletedItem = expectedMenuItems.find(item => item.name === itemName);
    expect(deletedItem).to.be.undefined;
  });

  // Test for fetching all menu items in a category
  it('should return all menu items for a specific category', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');

    const category = 'APPETIZERS';
    const result = await resolvers.Query.menu(null, { category });
    const expected = getMenuItems(category);
    expect(result).to.deep.equal(expected);
  });
});
