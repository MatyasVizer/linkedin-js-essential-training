//create arbitrary objects

const myCar1 = {
    brand: "Volkswagen",
    generation: "Mk7",
    model: "Golf",
    edition: "Trendline",
    displacement: 1.2,
    cylinders: 4,
    drivetrain: "FWD",
    horsepower: 110,
    turbo: "yes" 
}

//adding methods

const myCar2 = {
    stage: 0,
    brand: "BMW",
    generation: "E60",
    model: "5 Series",
    edition: "M",
    displacement: 5,
    cylinders: 10,
    drivetrain: "RWD",
    horsepower: 600,
    turbo: false,
    stageTuning: function() {
        switch (this.stage) {
            case 0:
                this.stage = 1
                this.horsepower += (this.horsepower/100*10)
                break;
            case 1:
                this.stage = 2
                this.horsepower += (this.horsepower/100*10)
                break;
            case 2:
                this.stage = 3
                this.horsepower += (this.horsepower/100*10)
                break;
            case 3:
                this.stage = 3
                this.horsepower += (this.horsepower/100*10)
        }
    }
}

console.log(myCar2.stage)
console.log(myCar2.horsepower)
myCar2.stageTuning
console.log(myCar2.stage)
console.log(myCar2.horsepower)
myCar2.stageTuning
myCar2.stageTuning
console.log(myCar2.stage)
console.log(myCar2.horsepower)
myCar2.stageTuning
myCar2.stageTuning
myCar2.stageTuning
console.log(myCar2.stage)
console.log(myCar2.horsepower)
