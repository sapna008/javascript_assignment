// 1. Car constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = true;
    this.type = ''; // SUV, Sedan, etc.
    this.rentalPrice = 0; // base price
  }
  
  // 2. Customer constructor
  function Customer(name) {
    this.name = name;
    this.rentedCars = [];
  }
  
  // 3. Rent car method for Customer
  Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} rented ${car.make} ${car.model}.`);
    } else {
      console.log(`${car.make} ${car.model} is already rented.`);
    }
  };
  
  // 4. PremiumCustomer constructor
  function PremiumCustomer(name) {
    Customer.call(this, name);
    this.discountRate = 10; // 10% discount
  }
  
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  // 5. Calculate rental price function
  function calculateRentalPrice(car, customer) {
    let basePrice = 50; // $50 per day
    let typeMultiplier = 1;
    if (car.type === 'SUV') typeMultiplier = 1.5;
    else if (car.type === 'Sedan') typeMultiplier = 0.8;
    
    let price = basePrice * typeMultiplier;
    if (customer.discountRate) {
      price *= (1 - customer.discountRate / 100);
    }
    return price;
  }
  
  // 6. Return car method for Customer
  Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars = this.rentedCars.filter(c => c !== car);
      console.log(`${this.name} returned ${car.make} ${car.model}.`);
    }, 2000); // 2-second delay
  };
  
  // 7. Maintenance function
  function maintenance(car, delay) {
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
  }
  
  // 8. Demonstrate functionality
  let toyotaCorolla = new Car('Toyota', 'Corolla', 2020);
  toyotaCorolla.type = 'Sedan';
  toyotaCorolla.rentalPrice = 40;
  
  let hondaCRV = new Car('Honda', 'CR-V', 2022);
  hondaCRV.type = 'SUV';
  hondaCRV.rentalPrice = 60;
  
  let john = new Customer('anuj');
  let jane = new PremiumCustomer('tanuj');
  
  john.rentCar(toyotaCorolla);
  jane.rentCar(hondaCRV);
  
  console.log(`Rental price for ${jane.name}: $${calculateRentalPrice(hondaCRV, jane)}`);
  
  john.returnCar(toyotaCorolla);
  
  maintenance(hondaCRV, 5000); // 5-second delay
  
  