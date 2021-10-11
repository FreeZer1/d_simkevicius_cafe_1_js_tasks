let arr = [ 8, 2, 3, 4, 5]

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function firstEl(arr){
    return arr[0];
  };

  console.log(firstEl(arr));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function firstEl(arr){
    arr.shift();
    return console.log(arr);
  };

  firstEl(arr);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnLastEl(arr){
    return arr[arr.length - 1];
  };

  console.log(returnLastEl(arr));
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function removeLastEl(arr){
    arr.pop();
    return console.log(arr);
  };

  removeLastEl(arr)
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function arrayLenght(arr) {
    return arr.length;
  };

  console.log(arrayLenght(arr));
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function lastIndexOf(arr) {
    return arr.length - 1;
  };
  console.log(lastIndexOf(arr));
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elementų indeksus eilutėmis');
{
  function arrayIndexOf(arr) { 
    for (let i = 0; i < arr.length; i++) {
      console.log(i)
    };
  };

  arrayIndexOf(arr);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function arrayIndexLine(arr) { 
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    };
  };

  arrayIndexLine(arr);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function arrayIndex(arr){
    for (let i = 0; i < arr.length; i++) {
      console.log(`[${i}] => ${arr[i]}`)
    };
  };

  arrayIndex(arr);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function backwardsArray(arr){
    for (let i = (arr.length -1); i >= 0 ; i--){
      console.log(arr[i]);
    };
  };

  backwardsArray(arr);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas
  // google: mdn array map
  // google: mdn array join arba google mdn spread operator array
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas
  // google: mdn array join arba google mdn spread operator array
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  // google: mdn array map
  // google: mdn string literal
}
console.groupEnd();