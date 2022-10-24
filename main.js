// // Factory Function
// let createCircle = (radius) => {
//     return {
//         //properties
//         radius,
//         location:{
//             x: 1,
//             y: 1
//         },
//         //method/behavior || one or more methods are called behaviors
//         draw: () => {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

//Constructor Function


// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0 };
//     this.getDefaultLocation = () => {
//     return defaultLocation;
//    }
//     this.draw = () => {
//         console.log('draw');
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get: () => {
//             return defaultLocation;
//         }, 
//         set: (value) => {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid Location.');
//             defaultLocation = value
//         }
//     })
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw();
// let number = {value: 10};

// function increase(number) {
//     number.value++;
// }

// increase(number);
// console.log(number);

// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;
//     this.start = () => {
//         if (running)
//             throw new Error('The stopwatch is already running');
        
//         running = true;

//         startTime = new Date();
//     };
//     this.stop = () => {
//         if (!running)
//             throw new Error('The stopwatch has already stopped');

//         running = false;

//         endTime = new Date();
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };
//     this.reset = () => {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };
//     Object.defineProperty(this, 'duration', {
//         get: () => duration
//     });

// };