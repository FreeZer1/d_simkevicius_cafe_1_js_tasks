console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  }

  const players = [
    new Player('Jonas', 18, 180, 80),
    new Player('Agnė', 20, 170, 63),
    new Player('Stano', 45, 180, 90)
  ];

  players.forEach(player => {
    console.log(player.getAge());
    console.log(player.getHeight());
    console.log(player.getWeight());
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    add(param1, param2) {
      return param1 + param2;
    }
    subtract(param1, param2) {
      return param1 - param2;
    }
    multiply(param1, param2) {
      return param1 * param2;
    }
    divide(param1, param2) {
      return param1 / param2;
    }
  }

  const arg1 = 10;
  const arg2 = 5;

  const calc = new Calculator();
  console.log(calc.add(arg1, arg2));
  console.log(calc.subtract(arg1, arg2));
  console.log(calc.multiply(arg1, arg2));
  console.log(calc.divide(arg1, arg2));

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
      this.lastname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
    }

    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    }

    get email() {
      return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }
  }

  const emp1 = new Employee("joHn", "Smith");
  console.log(emp1.fullname)

  const emp2 = new Employee("Mary", "Sue");
  emp2.lastname = "Changed";
  console.log(emp2);
  console.log(emp2.email);

  const emp3 = new Employee("Antony", "Walker");
  console.log(emp3.firstname);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age === other.age) {
        return `${other.name} is the same age as me.`
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`
      } else {
        return `${other.name} is older than me.`
      }
    }
  }

  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p1.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA;
      this.sideB = sideB;
    };
    getArea(){return this.sideA*this.sideB};
    getPerimeter(){return (this.sideA + this.sideB) *2};
  };
  
  
  class Circle {
    //put code here
    constructor(radius) {
      this.radius = radius;
    };
    
    getArea() {
      return Math.PI * this.radius * this.radius;
    };
    
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    };
  };
  
  
  // unquote and use run to test these cases:
  
  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname,lname){
      this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
    };
    get name() {
      return this.fname + " "+ this.lname;
    };
    get initial() {
      return this.fname.charAt(0) + "." + this.lname.charAt(0);
    };
  };

  a1 = new Name("john", "SMITH");
  console.log(a1.fname);
  console.log(a1.lname);
  console.log(a1.name);
  console.log(a1.initial);

}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{

  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    };
  };

  function sweetestIcecream(arr) {
    const sweetnessValue = {
      "Plain" : 0,
      "Vanilla" :	5,
      "ChocolateChip" :	5,
      "Strawberry"	: 10,
      "Chocolate" :	10
    };

    return Math.max(...arr.map(icecreamFlavor => sweetnessValue[icecreamFlavor.flavor] + icecreamFlavor.numSprinkles))

  };

  let ice1 = new IceCream("Chocolate", 13);         // value of 23
  let ice2 = new IceCream("Vanilla", 0);            // value of 5
  let ice3 = new IceCream("Strawberry", 7);         // value of 17
  let ice4 = new IceCream("Plain", 18);             // value of 18
  let ice5 = new IceCream("ChocolateChip", 3);      // value of 8

  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
  console.log(sweetestIcecream([ice3, ice1]));
  console.log(sweetestIcecream([ice3, ice5]));

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines{
    constructor(number){
      this.number = number
    };

    get ones(){
      return Math.floor(this.number / 1);
    };

    get threes(){
      return Math.floor(this.number / 3);
    };

    get nines(){
      return Math.floor(this.number / 9);
    };
  };

  const n1 = new OnesThreesNines(29);
  console.log(n1.ones);
  console.log(n1.threes);
  console.log(n1.nines);
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    static userCount = 0
    constructor(username) {
      this.username = username
      this.userCount = ++User.userCount
    };
  };

  let u1 = new User("johnsmith10");
  let u2 = new User("marysue1989");
  let u3 = new User("milan_rodrick");

  console.log(u1.username);
  console.log(u1.userCount);

  console.log(u2.username);
  console.log(u2.userCount);

  console.log(u3.username);
  console.log(u3.userCount);

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    };
    
    getTitle() {
      return `Title: ${this.title}`
    };
    
    getAuthor() {
      return `Author: ${this.author}`
    };
  };

  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');

  console.log(PP.title);
  console.log(PP.author);

  console.log(H.title);
  console.log(H.author);

  console.log(WP.title);
  console.log(WP.author);

}
console.groupEnd();