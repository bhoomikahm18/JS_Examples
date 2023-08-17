//Object literals for creating objects
let car = {
    name:'Maruthi 800',
    topSpeed:89,
    run:function(){
        console.log("car is running");
    }
}

// new Date();

//Creating a constructor for cars
function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`This car is faster by ${150 + this.topSpeed} km/h than Mercedes`);
    }
}
car1 = new GeneralCar('BMW',180);
car2 = new GeneralCar('Fortuner',180);
car3 = new GeneralCar('Mercedes',200);
console.log(car1,car2,car3);