// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];


console.group('1. Parašykite funkciją, kur grąžintų naują masyvą, kur kiekvienas elementas būtų dvigubai didesnis nei pradiniame masyve');
console.log('---');
{
  console.log({
    numbers,
    numbersDoubled: numbers.map(a => a * 2)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu');
console.log('---');
{
  console.log({
    numbers,
    numbersSquared: numbers.map(a => (a ** 2))
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve)');
console.log('---');
{
  console.log({
    numbers,
    numbersIndexed: numbers.map(a => (a * numbers.indexOf(a)))
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersPositive: numbers.filter(a => (a > 0))
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersNegative: numbers.filter(a => (a < 0))
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersEven: numbers.filter(a => (a % 2 === 0))
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersUneven: numbers.filter(a => (a % 2 !== 0))
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis");
{
  console.log({
    numbers,
    numbersPositive: numbers.map(a => Math.abs(a))
  });
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\'');
console.log('---');
{
  console.log({
    numbers,
    numbersSquared: numbers.map(a => (Math.pow(a, numbers.indexOf(a))))
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersNatural: numbers.filter(a => a > 0)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių');
console.log('---');
{
  console.log({
    numbers,
    numbersSuapvalinti: numbers.map(a => Math.round(a))
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  console.log({
    numbers,
    numbersEverySecond: numbers.filter((a, i) => i % 2 === 0)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  console.log({
    numbers,
    numbersEveryFifth: numbers.filter((a, i) => i % 5 === 0)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  {
    let sorted = numbers.sort(function(a, b) {
      return a - b;
    });
    sorted.forEach((a, i) => console.log(`[${i}] => ${a}`));
  }
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  console.log({
    numbers,
    numbersSum: numbers.reduce((sum, value) => sum + value, 0)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  console.log({
    numbers,
    numbersAverage: numbers.reduce((sum, value, _, arr) => sum + value / arr.length, 0)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  console.log({
    numbers,
    numbersHighest: numbers.reduce((previousNumber, nextNumber) => Math.max(previousNumber, nextNumber))
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  console.log({
    numbers,
    numbersLowest: numbers.reduce((previousNumber, nextNumber) => Math.min(previousNumber, nextNumber))
  });
}
console.log('---');
console.groupEnd();