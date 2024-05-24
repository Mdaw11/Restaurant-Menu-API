const { getMenuItems } = require('../models/menu');
const menuData = require('../data/menuData');

const resolvers = {
  Query: {
    menu: (parent, args) => getMenuItems(args.category),
    menuCategories: () => menuData,
  },
  Mutation: {
    addMenuItem: (parent, { category, item }) => {
      const categoryIndex = menuData.findIndex(cat => cat.category === category);
      if (categoryIndex !== -1) {
        menuData[categoryIndex].items.push(item);
        return item;
      }
      return null;
    },
    updateMenuItem: (parent, { category, name, updates }) => {
      const categoryIndex = menuData.findIndex(cat => cat.category === category);
      if (categoryIndex !== -1) {
        const itemIndex = menuData[categoryIndex].items.findIndex(item => item.name === name);
        if (itemIndex !== -1) {
          menuData[categoryIndex].items[itemIndex] = { ...menuData[categoryIndex].items[itemIndex], ...updates };
          return menuData[categoryIndex].items[itemIndex];
        }
      }
      return null;
    },
    deleteMenuItem: (parent, { category, name }) => {
      const categoryIndex = menuData.findIndex(cat => cat.category === category);
      if (categoryIndex !== -1) {
        const itemIndex = menuData[categoryIndex].items.findIndex(item => item.name === name);
        if (itemIndex !== -1) {
          const deletedItem = menuData[categoryIndex].items.splice(itemIndex, 1);
          return deletedItem[0];
        }
      }
      return null;
    }
  }
};

module.exports = resolvers;
