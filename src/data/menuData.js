const menuData = [
    {
      category: "APPETIZERS",
      items: [
        {
          name: "Iceberg Wedge Salad with House Cured Bacon",
          description: "Tomato salsa gorgonzola",
          price: 7.50
        },
        {
          name: "Sautéed Shredded Brussels Sprouts",
          description: "Bacon hazelnuts gorgonzola",
          price: 6.95
        },
        {
          name: "Kale Salad",
          description: "Parmesan crisp corn radish garlic-lemon vinaigrette",
          price: 7.50
        },
        {
          name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
          description: "Grilled tomato salsa crostini",
          price: 6.95
        },
        {
          name: "Chicken and Cabbage Eggrolls",
          description: "Hot & sour dipping sauce",
          price: 6.95
        }
      ]
    },
    {
      category: "ENTREES",
      items: [
        {
          name: "Farfalle Pasta with Braised Pork in Tomato Cream",
          description: "Capers butternut squash kale",
          price: 12.95
        },
        {
          name: "Stout Braised Bratwurst",
          description: "Horseradish mashed potatoes roasted root veggies grilled onion",
          price: 13.95
        },
        {
          name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
          description: "Vegetable sauté golden raisin chutney",
          price: 15.95
        },
        {
          name: "Sesame Shrimp",
          description: "Udon noodles ramen broth shiitake mushrooms bean sprouts scallions",
          price: 13.95
        }
      ]
    },
    {
      category: "SANDWICHES",
      items: [
        {
          name: "Turkey & Avocado",
          description: "With tomato, choice of sourdough, whole wheat, or rye bread",
          price: 9.25,
          halfPrice: 7.95
        },
        {
          name: "Pub Club",
          description: "Turkey, bacon, lettuce, tomato, choice of sourdough, whole wheat, or rye bread",
          price: 9.25,
          halfPrice: 7.95
        },
        {
          name: "Rare Roast Beef & Swiss",
          description: "Sweet-hot mustard, lettuce, red onion, choice of sourdough, whole wheat, or rye bread",
          price: 9.25,
          halfPrice: 7.95
        },
        {
          name: "Veggie",
          description: "Pepper jack, avocado, sprout, tomato, choice of sourdough, whole wheat, or rye bread",
          price: 9.25,
          halfPrice: 7.95
        },
        {
          name: "Southwest Chicken Breast",
          description: "Grilled onion, poblano pepper, tomato, lettuce, jack cheese, choice of whole wheat or cheese & onion bun",
          price: 9.50
        },
        {
          name: "Portobello Fresh Mozzarella",
          description: "Caramelized onion, roasted pepper, tomato, field greens, basil aioli, choice of whole wheat or cheese & onion bun",
          price: 9.50
        },
        {
          name: "Chipotle BBQ Pork Sandwich",
          description: "With pickled jalapeño slaw, choice of whole wheat or cheese & onion bun",
          price: 9.50
        },
        {
          name: "Bacon Burger*",
          description: "Swiss, lettuce, tomato, choice of whole wheat or cheese & onion bun",
          price: 9.25
        },
        {
          name: "Mexi Burger*",
          description: "Pepper relish, pepper jack, tomato, lettuce, guacamole, choice of whole wheat or cheese & onion bun",
          price: 9.25
        },
        {
          name: "Herb Marinated Top Sirloin*",
          description: "Crimini mushrooms, caramelized onion, gorgonzola, basil aioli, served open faced on focaccia",
          price: 10.95
        },
        {
          name: "Roast Beef with Ancho Au Jus",
          description: "Jack cheese, grilled onions, served on crumb bros. baguette",
          price: 9.75
        },
        {
          name: "Blackened Catfish",
          description: "Creole peppers & onions, fresh herb aioli, served on house made sourdough",
          price: 9.75
        }
      ]
    },
    {
      category: "SOUP & SALAD COMBOS",
      items: [
        {
          name: "French Onion or Soup of the Day",
          description: "",
          price: 4.95
        },
        {
          name: "French Onion or Soup of the Day Combo with small green salad, fresh fruit or house pasta",
          description: "",
          price: 7.25
        },
        {
          name: "French Onion or Soup of the Day Combo with half pasta of the day",
          description: "",
          price: 8.75
        }
      ]
    },
    {
      category: "FAJITAS",
      items: [
        {
          name: "Chicken",
          description: "Onions, poblano and bell peppers, guacamole, two salsas, served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas",
          price: 10.95
        },
        {
          name: "Sirloin Steak",
          description: "Onions, poblano and bell peppers, carrots, onion, guacamole, two salsas, served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas",
          price: 10.95
        }
      ]
    },
    {
      category: "TACOS",
      items: [
        {
          name: "Beer Battered Fish",
          description: "Jalapeño remoulade, roasted salsa, cabbage, served with red rice, black beans, corn & romaine salad, tortilla chips",
          price: 9.95
        },
        {
          name: "Carne Asada",
          description: "Marinated sirloin with guacamole, tomatillo salsa, served with red rice, black beans, corn & romaine salad, tortilla chips",
          price: 9.95
        },
        {
          name: "Citrus Marinated Chicken",
          description: "With guacamole, tomatillo salsa, served with red rice, black beans, corn & romaine salad, tortilla chips",
          price: 9.95
        },
        {
          name: "Grilled Veggie",
          description: "Zucchini, yellow squash, bell peppers, onion, guacamole, tomatillo salsa, served with red rice, black beans, corn & romaine salad, tortilla chips",
          price: 9.95
        }
      ]
    },
    {
      category: "ENCHILADAS",
      items: [
        {
          name: "Beef",
          description: "With Southwestern succotash, black beans with chipotle crema",
          price: 8.50,
          dosPrice: 9.95,
          tresPrice: 11.50
        },
        {
          name: "Chicken",
          description: "With Southwestern succotash, black beans with chipotle crema",
          price: 8.50,
          dosPrice: 9.95,
          tresPrice: 11.50
        },
        {
          name: "Cheese",
          description: "With Southwestern succotash, black beans with chipotle crema",
          price: 8.50,
          dosPrice: 9.95,
          tresPrice: 11.50
        },
        {
          name: "Veggie",
          description: "With Southwestern succotash, black beans with chipotle crema",
          price: 8.50,
          dosPrice: 9.95,
          tresPrice: 11.50
        },
        {
          name: "Chili Relleno Stuffed with Jack Cheese & Corn",
          description: "Glazed yam, chayote squash succotash, red chili sauce",
          price: 9.95
        },
        {
          name: "Pepita Crusted Salmon with Chipotle Glaze",
          description: "Chevre whipped yams, jicama slaw, tomatillo sauce",
          price: 10.95
        }
      ]
    },
    {
      category: "QUICHE",
      items: [
        {
          name: "Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche",
          description: "Choice of fresh fruit or green salad",
          price: 8.95
        }
      ]
    },
    {
      category: "GREEN SALADS",
      items: [
        {
          name: "Grilled Red Trout",
          description: "Lentils, tomatoes, cukes, green beans, red bells, almonds, sundried tomato vinaigrette",
          price: 10.95
        },
        {
          name: "Smoked Turkey",
          description: "Cheese tortellini, bacon, tomato, cucumber, egg, black bean-corn salsa, avocado",
          price: 9.95
        },
        {
          name: "Asian Grilled Chicken",
          description: "Snow peas, carrot slaw, red bells, water chestnut, peanuts, baby corn, cilantro, cukes, spicy peanut dressing",
          price: 10.50
        },
        {
          name: "Southwest Grilled Chicken",
          description: "Tomato, guacamole, pepitas, jicama, corn & black bean salsa, orange wedges, spicy citrus vinaigrette",
          price: 10.50
        },
        {
          name: "Mediterranean",
          description: "Italian sausage, artichoke hearts, green beans, roma tomato, kalamatas, red onion, cucumber, croutons, parmesan, fresh mozzarella, gorgonzola vinaigrette",
          price: 9.95
        },
        {
          name: "Grilled Salmon",
          description: "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps",
          price: 11.50
        }
      ]
    },
  ];
  
  module.exports = menuData;