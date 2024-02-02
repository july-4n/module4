const Cart = function(arr = []) {
  this.arr = arr;
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.calculateGoodsPrice = function() {
  this.totalPrice = this.arr.reduce((sum, good) => {
    const discountedPrice = good.price * (1 - good.discount / 100);
    return sum + discountedPrice * good.count;
  }, 0);
};

Cart.prototype.addGoods = function(good) {
  this.arr.push(good);
  return this.arr;
};

Cart.prototype.getTotalPrice = function() {
  this.calculateGoodsPrice();
  return this.totalPrice;
};

Cart.prototype.increaseCount = function() {
  return ++this.count;
};

Cart.prototype.clear = function() {
  this.arr = [];
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function() {
// eslint-disable-next-line max-len
  console.log(`${JSON.stringify(this.arr)}\nОбщая стоимость ${this.getTotalPrice()}`);
};

const Goods = function(price, name, discount, count = 0) {
  this.price = price;
  this.name = name;
  this.discount = discount;
  this.count = count;
};

const FoodGoods = function(good, calorie) {
  Goods.call(this, good.price, good.name, good.discount, good.count);
  this.calorie = calorie;
};

const ClothingGoods = function(good, material) {
  Goods.call(this, good.price, good.name, good.discount, good.count);
  this.material = material;
};

const TechnicsGoods = function(good, vehicleType) {
  Goods.call(this, good.price, good.name, good.discount, good.count);
  this.vehicleType = vehicleType;
};


const lemon = new Goods(60, 'Lemon', 0, 4);
const jacket = new Goods(6000, 'Jacket', 10, 2);
const bike = new Goods(155000, 'bike', 3, 1);

const newCart = new Cart();
newCart.addGoods(new FoodGoods(lemon, 29));
newCart.addGoods(new ClothingGoods(jacket, 'cotton'));
newCart.addGoods(new TechnicsGoods(bike, 'track'));

newCart.increaseCount();
newCart.print();
