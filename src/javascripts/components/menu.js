////////// Print to dom //////////

const printToDom = (divId, text) => {
  selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += text;
}

////////// Database Arrays //////////

const fish = [
  {
    name: "Buffalo",
    sandwich: "8.50",
    plate: "11.15",
    itemPic: 'https://jesseyancy.com/wp-content/uploads/2014/02/buffalo-fish-1-blog2.jpg'
  },
  {
    name: "Catfish",
    sandwich: "8.50",
    plate: "11.15",
    itemPic: 'https://i.pinimg.com/originals/d0/8d/ae/d08dae5dc9cb5839334d651bff09e440.jpg'
  },
  {
    name: "Fillet",
    sandwich: "9.25",
    plate: "12.25",
    itemPic: 'https://whiskitrealgud.com/wp-content/uploads/2017/12/Southern-Fried-Fish-A-Whiting-Fish-Recipe-8.jpg'
  },
  {
    name: "Whiting",
    sandwich: "8.50",
    plate: "11.15",
    itemPic: 'https://i0.wp.com/www.savorythoughts.com/wp-content/uploads/2019/12/Fried-Whiting-Fish-Recipe.jpg?resize=610%2C407&ssl=1'
  },
]

const meatsAndSides = [
  {
    name: "Pig Feet",
    price: "8.75"
  },
  {
    name: "Pork Chop",
    price: "8.75"
  },
  {
    name: "Neck Bone",
    price: "8.75"
  },
  {
    name: "Fried Chicken",
    price: "8.75"
  },
  bakedChicken = {
    name: "Baked Chicken",
    price: "8.75"
  }
]

const sides = [
  {
    name: "Mashed Potatoes",
  },
  {
    name: "Brown Beans",
  },
  {
    name: "Green Beans",
  },
  {
  name: "White Beans",
  },
  {
  name: "Potato Salad",
  },
  {
  name: "Corn",
  },
  {
  name: "Okra",
  },
  {
  name: "Yams",
  },
  {
  name: "Macaroni & Cheese",
  },
  {
  name: "Broccoli & Cheese",
  },
  {
  name: "Cole Slaw",
  },
  {
  name: "French Fries"
  },
]

const sideQuantity = [
  sideQ1 = {
    name: "1 side",
    price: "3.00"
  },
  sideQ2 = {
    name: "2 side",
    price: "5.00"
  },
  sideQ3 = {
    name: "3 sides",
    price: "6.50"
  },
  sideQ4 = {
    name: "4 sides",
    price: "7.00"
  }
]

const drinks = [
  drinks01 = {
    name: "20oz Drinks",
    price: "2.00",
    drinkPic: "data:image/jpeg;base64,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"
  },
  drinks02 = {
    name: "Water",
    price: "1.00",
    drinkPic: "data:image/jpeg;base64,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"
  }
]

const byThePound = [
  fbtp01 = {
    name: "Filets",
    price: "7.00"
  },
  fbtp02 = {
    name: "Steaks",
    price: "6.00"
  },
  fbtp03 = {
    name: "Whiting",
    price: "6.00"
  },
  fbtp04 = {
    name: "Buffalo",
    price: "6.00"
  }
]

////////// Domstring Builders //////////

////////// Fish //////////

const pickfish = () => {
    
  let piscado = '';

  piscado += '<h3 id="cat-title">FISH</h3>'
  piscado += '<p class="extras">Mixed Fish - $1.00 extra</p>'
  for(let i = 0; i < fish.length; i++) {
      piscado += '<div class="fish-opt">'
      piscado += `<p>${fish[i].name}</p>`
      piscado += `<p>Sandwich - $${fish[i].sandwich}</p>`
      piscado += `<p>Plate - $${fish[i].plate}</p>`
      piscado += `<img src="${fish[i].itemPic}" class="col-12 item-pic" />`
      piscado += '</div>'
      piscado += '<hr>'
  }
  printToDom('fish', piscado);
}

////////// Meats and Sides //////////

const meatAndSides = () => {
  let mAs = '';

  mAs += '<h3 id="cat-title">Meat and Sides</h3>'
  for(let i = 0; i < meatsAndSides.length; i++) {
    mAs += '<div class="meat-and-sides">'
    mAs += `<p>${meatsAndSides[i].name}</p>`
    mAs += `<p>Plate - $${meatsAndSides[i].price}</p>`
    mAs += '</div">'
  }
  printToDom('meats-sides', mAs);
}

////////// Sides //////////

const theSides = () => {
  let sydes = '';
  
  sydes += '<h3 id="cat-title">Sides</h3>'
  for( let s = 0; s < sides.length; s++) {
    sydes += '<div>'
    sydes += `<p>${sides[s].name}</p>`
    sydes += '</div>'
  }
  printToDom('sides', sydes)
}

////////// Quantity Sides //////////

const quantitySide = () => {
  let quanity = '';
  quanity += '<h3 id="cat-title">Side Quantity</h3>'
  for(let q = 0; q < sideQuantity.length; q++) {
    quanity += '<div>'
    quanity += `<p>${sideQuantity[q].name} - $${sideQuantity[q].price}</p>`
    quanity += '</div>'
  }
  printToDom('sides', quanity)
}

////////// Drinks //////////

const dranks = () => {
  let bev = '';
  
  bev += '<h3 id="cat-title">Drinks</h3>'
  for (let d = 0; d < drinks.length; d++) {
    bev += '<div>'
    bev += `<p>${drinks[d].name} - $${drinks[d].price} - <img src="${drinks[d].drinkPic}" class="drink-pic" /></p>`
    bev += '</div>'
  }
  printToDom('drinks', bev)
}

////////// Fish by the Pound //////////

const fishPound = () => {
  let pound = '';

  pound += '<h3 id="cat-title">Fish by the Pound</h3>'
  for (let lb = 0; lb < byThePound.length; lb++) {
    pound += '<div>'
    pound += `<p>${byThePound[lb].name} - $${byThePound[lb].price}</p>`
    pound += '</div>'
  }
  printToDom('fish-by-the-pound', pound)
}

init = () => {
  pickfish();
  meatAndSides();
  theSides();
  quantitySide();
  dranks();
  fishPound();
}

init();