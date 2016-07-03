var Restaurants = []; //Array of all restaurant objects

function Restaurant(name, address, type, vegan) {
  this.name = name;
  this.address = address;
  this.type = type; // Array of types
  this.vegan = vegan; //If it has KNOWN vegan options for an entree (sides don't count, it would suck if you were looking for a vegan place that only had a side of broccoli or something
  //also, by default I am listing coffee joints as false for vegan, since I think vegan applies more towards food, and if they select coffee from search, vegan checkbox disappears

  this.reviews = [];
}

var fivePointCafe = new Restaurant('Five Point Cafe', '415 Cedar Street', ['American', 'Breakfast'], false);
var bangBangCafe = new Restaurant('Bang Bang Cafe', '2460 Western Ave', ['Sandwich', 'Mexican', 'Breakfast'], true);
var cherryStCoffee = new Restaurant('Cherry Street Coffee', '2621 5th Ave', ['Coffee'], false);
var dripCity = new Restaurant('Drip City', '2929 1st Ave S', ['Coffee'], false);
var modPizza = new Restaurant('Mod Pizza', '305 Harrison St.', ['Pizza'], true);
var plumPantry = new Restaurant('Plum Pantry', '305 Harrison St.', ['Healthy', 'Salad'], true);
var premMeatPies = new Restaurant('Premier Meat Pies', '305 Harrison St.', ['Pies', 'American'], false);
var quincysBurg = new Restaurant('Quincy\'s Charbroiled Burgers', '305 Harrison St.', ['American', 'Seafood'], false);
var sportBar = new Restaurant('Sport Restaurant & Bar', '140 4th Ave N', ['American', 'Pizza'], false);
var streetBean = new Restaurant('Street Bean Coffee', '2711 3rd Ave', ['Coffee'], false);
var tacoDelMar = new Restaurant('Taco Del Mar', '411 Cedar Street', ['Mexican'], true);
var thaiOnOne = new Restaurant('Thai on 1', '2904 1st Ave', ['Thai', 'Asian'], false);
var uptownExpresso = new Restaurant('Uptown Expresso', '2801 Alaskan Way', ['Coffee'], false);
var worldClassCoffee = new Restaurant('World Class Coffee', '2819 2nd Ave', ['Coffee', 'Sandwich', 'Asian'], false);
