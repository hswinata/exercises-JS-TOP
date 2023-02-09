const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


/* const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
       if (oldest > person.passed - person.year) {
        return oldest;
       }
    }, 0)
}; */

const a = people.reduce(function(oldest, person){
    let personAge = person.yearOfDeath - person.yearOfBirth;
    let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    if (oldestAge < personAge) {
        return person;
    } else {return oldest
    };
})

console.log(a);

findTheOldest(people);
    //Loop every object and calculate their age when died (passed - year).
    //Compare each died age with other objects.

// Do not edit below this line
module.exports = findTheOldest;
