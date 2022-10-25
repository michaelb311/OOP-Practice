// class Person {
//     constructor(name , age) {
//         this.name = name
//         this.age = age
//     }
// }

// let person = new Person("Michael", 31);
// console.log(person);

// class Person {
//     constructor(name , age) {
//         this.name = name
//         this.age = age
//     }

//     getName = () => {
//         return this.name
//     }
//     getAge = () => {
//         return this.age
//     }
// }

// let person = new Person("Michael", 31);
// console.log(person.getName());
// console.log(person.getAge());

// class Person {
//     constructor(name , age) {
//         this.name = name;
//         this.age = age;
//     }

//     getName = () => {
//         return this.name
//     };
//     getAge = () => {
//         return this.age
//     };
// }

// class Home {
//     constructor(bedrooms, bathrooms, residents) {
//         this.bedrooms = bedrooms
//         this.bathrooms = bathrooms
//         this.residents = residents
//     }

//     getBedrooms = () => {
//         return this.bedrooms;
//     };

//     getBathrooms = () => {
//         return this.bathrooms;
//     };

//     getResidents = () => {
//         return this.residents;
//     };
// }

// let michael = new Person('Michael', 31);
// let halie = new Person('Halie', 27);


// let house = new Home(5, 3.5, [michael, halie]);

// console.log(house.getResidents());

class Person {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }

    getName = () => {
        return this.name
    };
    getAge = () => {
        return this.age
    };
}

class Home {
    constructor(bedrooms, bathrooms, residents) {
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.residents = residents
    }

    getBedrooms = () => {
        return this.bedrooms;
    };

    getBathrooms = () => {
        return this.bathrooms;
    };

    getResidents = () => {
        return this.residents;
    };

    addResident = (resident) => {
        this.residents.push(resident);
    }

    removeResident = (resident) => {
        let indexOfResident = this.residents.indexOf(resident);
        console.log(indexOfResident)
        if (resident && indexOfResident > -1){
            this.residents.splice(indexOfResident, 1);
        } else {
            console.log(`name doens't match.`);
        }
    }
}

let michael = new Person('Michael', 31);
let halie = new Person('Halie', 27);
let piper = new Person('Piper', 19);

let house = new Home(5, 3.5, [michael, halie]);

console.log(house.getResidents());

house.addResident(piper);

console.log(house.residents);

house.removeResident(piper);

console.log(house.residents);

house.removeResident(piper);

house.removeResident(michael);

console.log(house.residents);

house.addResident(michael);
console.log(house.residents);




