const menuData = require('../data/menuData');

const getMenuItems = (category) => {
  if (category) {
    const menuCategory = menuData.find(item => item.category === category);
    return menuCategory ? menuCategory.items : [];
  }
  return menuData.flatMap(item => item.items);
};

module.exports = {
  getMenuItems
};
