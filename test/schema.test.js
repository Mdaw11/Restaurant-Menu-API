// schema.test.js

const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('../src/schema/typeDefs');
const resolvers = require('../src/schema/resolvers');

describe('GraphQL Schema Tests', () => {
  let schema;

  before(() => {
    schema = makeExecutableSchema({ typeDefs, resolvers });
  });


  it('should have valid type definitions', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const typeDefsString = schema.getTypeMap();
    // Validate Query type
    expect(typeDefsString).to.have.property('Query');
    expect(typeDefsString.Query).to.have.property('name').that.equals('Query');
    expect(typeDefsString.Query).to.have.property('getFields').that.is.a('function');
    // Validate Mutation type
    expect(typeDefsString).to.have.property('Mutation');
    expect(typeDefsString.Mutation).to.have.property('name').that.equals('Mutation');
    expect(typeDefsString.Mutation).to.have.property('getFields').that.is.a('function');
  });

  it('should have resolvers for all types', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    // Validate Query resolvers
    expect(resolvers).to.have.property('Query');
    expect(resolvers.Query).to.have.property('menu').that.is.a('function');
    expect(resolvers.Query).to.have.property('menuCategories').that.is.a('function');
    // Validate Mutation resolvers
    expect(resolvers).to.have.property('Mutation');
    expect(resolvers.Mutation).to.have.property('addMenuItem').that.is.a('function');
    expect(resolvers.Mutation).to.have.property('updateMenuItem').that.is.a('function');
    expect(resolvers.Mutation).to.have.property('deleteMenuItem').that.is.a('function');
  });

  it('should define all required types', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');
    
    const expectedTypes = ['MenuItem', 'MenuCategory', 'Query', 'Mutation'];
    const definedTypes = Object.keys(schema.getTypeMap()).map(type => type.toString());
    expect(definedTypes).to.include.members(expectedTypes);
  });

  it('should have correct field types for MenuItem', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');

    const menuItemType = schema.getType('MenuItem');
    expect(menuItemType.getFields().name.type).to.equal(schema.getType('String'));
    expect(menuItemType.getFields().description.type).to.equal(schema.getType('String'));
    expect(menuItemType.getFields().price.type).to.equal(schema.getType('Float'));
  });

  it('should have correct field types for MenuCategory', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');


    const menuCategoryType = schema.getType('MenuCategory');
    expect(menuCategoryType.getFields().category.type.toString()).to.equal('String');
    expect(menuCategoryType.getFields().items.type.toString()).to.equal('[MenuItem]');
  });

  it('should have correct field types for Query', async () => {
    // Import Chai asynchronously within an async function
    const { expect } = await import('chai');

    const queryType = schema.getType('Query');
    expect(queryType.getFields().menu.type.toString()).to.equal('[MenuItem]');
    expect(queryType.getFields().menuCategories.type.toString()).to.equal('[MenuCategory]');
  });


});
