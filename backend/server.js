import express from 'express';

const app = express();

const port  = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('server is ready');
//   });

app.use(express.static('dist'));

app.get('/api/foods', (req, res)=> {
   
    const foods = [
    {
        id:1,
        name: "Margherita Pizza",
        price: 350,
        text: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
        image:"https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "fastfood",
    },
    {
        id:2,
        name: "Pepperoni Pizza",
        price: 450,
        text: "Delicious pizza topped with pepperoni slices and melted cheese.",
        image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "fastfood",
    },
    {
        id:3,
        name: "Vegetarian Pizza",
        price: 400,
        text: "Healthy pizza loaded with assorted vegetables and cheese.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "fastfood",
    },
    {
        id:4,
        name: "BBQ Chicken Pizza",
        price: 550,
        text: "Tasty pizza topped with barbecue sauce, chicken pieces, and onions.",
        image: "https://images.unsplash.com/photo-1606674727310-6d55b6960d8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "fastfood",
    },

    {
        id: 5,
        name: "Classic Cheeseburger",
        price: 450,
        text: "A classic cheeseburger with a juicy beef patty, melted cheese, lettuce, tomato, and pickles.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "fastfood",
    },
    {
        id: 6,
        name: "Chicken Cheeseburger",
        price: 500,
        text: "A delicious chicken cheeseburger with crispy chicken strips, melted cheese, lettuce, and tomato.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "fastfood",
    },
    {
        id: 7,
        name: "Burger & fries",
        price: 400,
        text: "A tasty chicken patty burger with lettuce, tomato, and vegan mayo & a combo of fries.",
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "fastfood",
    },

    {
        id: 8,
        name: "Chicken Chowmein",
        price: 400,
        text: "Delicious chow mein noodles stir-fried with chicken, vegetables, and savory sauce.",
        image: "https://media.istockphoto.com/id/1128687886/photo/noodles-with-chicken-curry-sauce-peanuts-and-broccoli-chinese-style.jpg?s=612x612&w=0&k=20&c=L8xdIHqRswVZKyxtd30loDVQxaJmg8UMgBFKR0oTb4o=",
        type: "chinese",
    },
    {
        id: 9,
        name: "Egg-veg Chowmein",
        price: 450,
        text: "Tasty chow mein noodles stir-fried with veg & egg, bell peppers, onions, and garlic sauce.",
        image: "https://media.istockphoto.com/id/1169255874/photo/chicken-wok-noodles-on-black-concrete-table.jpg?s=612x612&w=0&k=20&c=q5eM1bFlxqeGfw1033znNOAdhfvAr4xo9PKPC9wmhx4=",
        type: "chinese",
    },
    {
        id: 10,
        name: "Oven baked pasta",
        price: 550,
        text: "Oven baked pasta served with creamy chicken & sauce, and parmesan cheese.",
        image: "https://media.istockphoto.com/id/1088590118/photo/macaroni-cheese.jpg?s=612x612&w=0&k=20&c=zZBq46bh1Unq1yok2iWZu9axkpV3WKOveA6GklHotog=",
        type: "italian",
    },
    {
        id: 11,
        name: "White Sauce Pasta",
        price: 600,
        text: "Creamy white sauce pasta made with penne pasta, garlic, cream, butter, and parmesan cheese.",
        image: "https://media.istockphoto.com/id/1225004589/photo/pasta-with-cream-sauce.jpg?s=612x612&w=0&k=20&c=KvlgEhh45qvDao_zYp4Bhv-GOQX1zKkAiaQ4qz3DPDw=",
        type: "italian",
    },

    {
        id: 12,
        name: "Grilled Chicken Sandwich",
        price: 350,
        text: "Delicious grilled chicken sandwich with lettuce, tomato, cheese, and mayonnaise.",
        image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbmR3aWNofGVufDB8fDB8fHww",
        type: "fastfood",
    },
    {
        id: 13,
        name: "Fried Chicken",
        price: 450,
        text: "Crispy fried chicken pieces seasoned with herbs and spices, served with fries.",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
        type: "fastfood",
    },

      
    {
        id: 14,
        name: "Hyderabadi Biryani",
        price: 500,
        text: "Spicy Hyderabadi biryani cooked with long-grain basmati rice, succulent meat, and rich spices.",
        image: "https://media.istockphoto.com/id/592689852/photo/balti-dish-with-indian-chicken-biryani.jpg?s=612x612&w=0&k=20&c=KTUHu82hhEf1u1Y6wKpVlgTKJ9ZDnmjw61AMR22gOB0=",
        type: "indian",
    },

    {
        id: 15,
        name: "Mutton Biryani",
        price: 550,
        text: "Rich and flavorful mutton biryani cooked with fragrant basmati rice, tender mutton pieces, and aromatic spices.",
        image: "https://media.istockphoto.com/id/855894476/photo/pilaf-rice-with-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=U4XShbSRM7DA-TdaeZzIPVkCwI3GEE0A81zvBthVJGw=",
        type: "indian",
    },
    {
        id: 16,
        name: "Beef Biryani",
        price: 500,
        text: "Savory beef biryani made with long-grain basmati rice, succulent beef chunks, and a blend of spices.",
        image: "https://media.istockphoto.com/id/1413124373/photo/indian-and-pakistani-spicy-food-lucknowi-dum-pukht-biryani-served-in-a-dish-isolated-on-dark.jpg?s=612x612&w=0&k=20&c=jgp042UbNEJCghVClZNSRa0CB8BiV4GI40P6Sb1Ce0c=",
        type: "indian",
    },

    {
        id: 17,
        name: "Chocolate Cake",
        price: 400,
        text: "Decadent chocolate cake with rich chocolate frosting and chocolate shavings.",
        image: "https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "dessert",
    },
    {
        id: 18,
        name: "Vanilla Cake",
        price: 350,
        text: "Classic vanilla cake with creamy vanilla frosting and colorful sprinkles.",
        image: "https://media.istockphoto.com/id/880443720/photo/vanilla-sponge-cake-with-cream-and-white-chocolate-decorate-sliced-piece-of-cake-on-white.jpg?b=1&s=612x612&w=0&k=20&c=0vSUrbOGEHtR5asMa0SMUkcSGvIexUGrZXlWNLzcmlY=",
        type: "dessert",
    },

    {
        id: 19,
        name: "Cheesecake",
        price: 450,
        text: "Delicious strawberry cheesecake with a buttery graham cracker crust and fresh strawberry topping.",
        image: "https://images.pexels.com/photos/15529193/pexels-photo-15529193/free-photo-of-cheese-cake-with-chocolate.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "dessert",
    },
    {
        id: 20,
        name: "Tiramisu",
        price: 500,
        text: "Classic tiramisu made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
        image: "https://images.pexels.com/photos/16041846/pexels-photo-16041846/free-photo-of-photo-of-a-glass-with-tiramisu-and-a-small-bowl-of-coffee-beans.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "dessert",
    },

    {
        id: 21,
        name: "Red Velvet Cake",
        price: 480,
        text: "Indulgent red velvet cake with cream cheese frosting and a hint of cocoa flavor.",
        image: "https://images.pexels.com/photos/6133310/pexels-photo-6133310.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "dessert",
    },

    {
        id: 22,
        name: "Chocolate Brownie",
        price: 350,
        text: "Decadent chocolate brownie made with rich cocoa, butter, and chunks of chocolate.",
        image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "dessert",
    },

    {
        id: 23,
        name: "Cold Coffee",
        price: 250,
        text: "Refreshing cold coffee made with chilled milk, espresso, sugar, and ice cubes.",
        image: "https://media.istockphoto.com/id/1181926795/photo/caramel-frappuccino-with-wipped-cream-on-marble-table.jpg?s=612x612&w=0&k=20&c=h4293DKK2_SuOM5dkbx9YF_fgrsIUN1TxoIwGub0qNU=",
        type: "shakes",
    },
    {
        id: 24,
        name: "Oreo Shake",
        price: 300,
        text: "Creamy Oreo shake blended with vanilla ice cream, milk, and crushed Oreo cookies.",
        image: "https://media.istockphoto.com/id/1151243111/photo/cookies-and-creme-milkshake.jpg?s=612x612&w=0&k=20&c=y25YjtyQjA1mIxlt8RUmd8X6Ik1Ms4jmIiJ0p-M5uVg=",
        type: "shakes",
    },
    {
        id: 25,
        name: "Strawberry Shake",
        price: 280,
        text: "Sweet and fruity strawberry shake made with fresh strawberries, milk, and a touch of sugar.",
        image: "https://images.pexels.com/photos/15126557/pexels-photo-15126557/free-photo-of-shake-with-strawberries-near-tablet.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "shakes",
    },
    {
        id: 26,
        name: "Banana Shake",
        price: 270,
        text: "Classic Banana milkshake made with creamy milk, Banana, vanilla ice cream, and a hint of vanilla extract.",
        image: "https://media.istockphoto.com/id/641031722/photo/banana-smoothie.jpg?s=612x612&w=0&k=20&c=GQHtqdoiGSG3bjLvm9pC4VvYYWzEdP9__z4-fG3bJDw=",
        type: "shakes",
    },

    {
        id: 27,
        name: "Cappuccino",
        price: 300,
        text: "Classic cappuccino made with espresso, steamed milk, and a thick layer of milk foam.",
        image: "https://media.istockphoto.com/id/521308182/photo/coffee-mug-with-newspaper-on-teal-rustic-table-cozy-breakfast.jpg?s=612x612&w=0&k=20&c=b2sF019js0YBSIRA0hP-7f1ETipg0yQHR1wN-nD2fwg=",
        type: "hotcoffes",
    },
    {
        id: 28,
        name: "Latte",
        price: 320,
        text: "Creamy latte made with espresso and steamed milk, topped with a small amount of milk foam.",
        image: "https://images.pexels.com/photos/2910874/pexels-photo-2910874.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "hotcoffes",
    },
    {
        id: 29,
        name: "Mocha",
        price: 350,
        text: "Indulgent mocha made with espresso, steamed milk, chocolate syrup, and topped with whipped cream.",
        image: "https://images.pexels.com/photos/849645/pexels-photo-849645.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "hotcoffes",
    },

    {
        id: 30,
        name: "Cold drinks",
        price: 30,
        text: "Refreshing cold drinks.",
        image: "https://media.istockphoto.com/id/508708700/photo/pepsi-coca-cola-sprite-and-fanta-soda-drinks.jpg?s=612x612&w=0&k=20&c=gJnGdNqTTxEqKVeqgSystiNIdaPYNh9y3dUysMKkjzE=",
        type: "colddrinks",
    }
    ];

    res.send(foods);

  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  
