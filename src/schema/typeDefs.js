const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type MenuItem {
    name: String
    description: String
    price: Float
  }

  input MenuItemInput {
    name: String!
    description: String!
    price: Float!
  }

  input MenuItemUpdateInput {
    name: String
    description: String
    price: Float
  }

  type MenuCategory {
    category: String
    items: [MenuItem]
  }

  type Query {
    menu(category: String): [MenuItem]
    menuCategories: [MenuCategory]
  }

  type Mutation {
    addMenuItem(category: String!, item: MenuItemInput!): MenuItem
    updateMenuItem(category: String!, name: String!, updates: MenuItemUpdateInput!): MenuItem
    deleteMenuItem(category: String!, name: String!): MenuItem
  }
`;

module.exports = typeDefs;
