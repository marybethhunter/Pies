const pies = [
  {
    name: 'Dutch Apple Pie',
    ingredients: 'apples,sugar,butter,nutmeg,dutch people',
    bakeTemp: 5000,
    drinkPairing: 'Earl Grey Tea',
    imageUrl:
      'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg',
    instructor: 'Doc',
    iceCream: 'Vanilla',
  },
  {
    name: 'Berry Pie',
    ingredients: 'berries',
    bakeTemp: 400,
    drinkPairing: 'wine',
    imageUrl:
      'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
    instructor: 'Doc',
    iceCream: 'banana',
  },
  {
    name: 'Pumpkin Pie',
    ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
    bakeTemp: 42,
    drinkPairing: 'egg nog',
    imageUrl:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
    instructor: 'Aja',
    iceCream: 'Vanilla',
  },
  {
    name: 'Shoo Fly Pie',
    ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
    bakeTemp: 1234,
    drinkPairing: 'Apple Cider',
    imageUrl:
      'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
    instructor: 'Aja',
    iceCream: 'Coffee',
  },
  {
    name: 'Pecan Pie',
    ingredients: 'Pecans, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Milk',
    imageUrl:
      'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
    instructor: 'Trinity',
    iceCream: 'Vanilla',
  },
  {
    name: 'Keylime Pie',
    ingredients: 'lemons, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Water',
    imageUrl:
      'https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg',
    instructor: 'Trinity',
    iceCream: 'none',
  },
];

//const allButtons = document.querySelector("#buttonContainer"); put this in the buttonEvents function instead

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

//display buttons on DOM
const buttons = () => {
  //allButtons.innerHTML
  const domString = `
  <button type="button" class="btn btn-primary" id="all">All</button>
  <button type="button" class="btn btn-secondary" id="trinity">Trinity</button>
  <button type="button" class="btn btn-success" id="aja">Aja</button>
  <button type="button" class="btn btn-danger" id="doc">Doc</button>
  `;

  renderToDom("#buttonContainer", domString);
};

const filterPies = (array, instructor) => {
  return array.filter(pieObject => pieObject.instructor === instructor);
};

//initially just the button clicks of if statements - then adding filter function
const handleButtonClick = (event) => {
  if (event.target.id === "all") {
    const allPies = filterPies(pies);
    pieBuilder(pies);
  } 
  if (event.target.id === "trinity") {
    const trinPies = filterPies(pies, "Trinity");
    pieBuilder(trinPies);
  } 
  if (event.target.id === "aja") {
    const ajaPies = filterPies(pies, "Aja");
    pieBuilder(ajaPies);
  } 
  if (event.target.id === "doc") {
    const docPies = filterPies(pies, "Doc");
    pieBuilder(docPies);
  }
};


const pieBuilder = (piesArray) => {
  let domString = "";
  piesArray.forEach((pie) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <img src="${pie.imageUrl}" class="card-img-top" alt="${pie.name}">
    <div class="card-body">
      <h5 class="card-title">${pie.name}e</h5>
      <p class="card-text">${pie.ingredients}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `;
  })

  renderToDom('#piesContainer', domString);
}

//handles the button events
const buttonEvents= () => {
  document.querySelector('#buttonContainer')
  .addEventListener('click', handleButtonClick);
}

const init = () => {
  //this starts the app
  buttons(); //put dom elements first
  buttonEvents(); //put event listeners after
  pieBuilder(pies);
};

init();





//code that doesn't make sense to me
//if (event.target.id === "all" || event.target.id === "buttonContainer") {
  //pieBuilder(pies);
//} else {
 // const pieArray = filterPies(pies, event.target.id);
 // pieBuilder(pieArray);
//}
//};
