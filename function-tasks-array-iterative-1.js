const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  people.forEach((person) => console.log(`${person.name} ${person.surname} - ${person.sex} ${person.age} ${person.income} ${person.marriage} ${person.hasCar}`));
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach((person) => console.log(`${person.name}-${person.surname}`));
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusus');
{
  people.forEach((person) => console.log(`${person.name} ${person.surname}, Married: ${person.married}`));
}
console.groupEnd();

console.groupCollapsed('4. Sukurkite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  console.log(people.map(person => `${person.sex} - ${person.income}`))
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  console.log(people.map(person => `${person.name} ${person.surname}, ${person.sex.toUpperCase()}`))
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visų vyrų vardus');
{
  people.filter(person => person.sex === 'male').forEach(person => console.log(person.name));
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visų moterų atlyginimus');
{
  people.filter(person => person.sex === 'female').forEach(person => console.log(person.name, person.income));
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  people.filter(person => person.hasCar).forEach(person => console.log(person.name, person.surname));
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  console.table(people.filter(person => person.married).forEach(person => person));
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  const driverObjects = {
    male: people.filter(person => person.hasCar && person.sex === 'male').length,
    female: people.filter(person => person.hasCar && person.sex === 'female').length,
  }
  console.log(driverObjects);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
// Šustrai
{
  const result = people.map(({ income, ...values }) => ({
    ...values,
    salary: income,
  }));
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
// Šustrai
{
  const result = people.map(({ sex, name, surname, ...rest }) => ({
    ...rest,
  }));
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
// Šustrai
{
  const result = people.map(({ name, surname, ...rest }) => ({
    ...rest,
    fullname: `${name} ${surname}`,
  }));
  console.log(result);
}
console.groupEnd();