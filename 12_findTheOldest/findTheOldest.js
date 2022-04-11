const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
  
    const oldest = people.reduce((obj, person) => {
      const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
      return age > obj.age ? { person, age } : obj;

    }, { person: null, age: 0 }).person;
    return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
