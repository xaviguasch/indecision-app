
const isAdult = (age) => age >= 18

// const isAdult = (age) => {
//     if (age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

const canDrink = (age) => age >= 21


// const canDrink = (age) => {
//     if (age >= 21) {
//         return true
//     } else {
//         return false
//     }
// }


export default (age) => age >= 65


export { isAdult, canDrink }