'use strict';

// TASK 1 Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
console.log("Original array: ", userNames);

  const nameAbbreviations = userNames.map(function(name) {
    const words = name.split(" ");
    const abbreviation = words.map(function(word) {
      return word[0]; 
    }).join(".");
  
    return abbreviation;
  });
  nameAbbreviations.sort(function(a, b) {
    return a.localeCompare(b);
  });
  
  console.log("Name Abbreviations:", nameAbbreviations);
  
/*
 * alternative sorting in alphabetical order
 */
/*
userNames.sort(function(a, b) {
  const nameA = a.toLowerCase();
  const nameB = b.toLowerCase();

  if (nameA < nameB) {
    return -1;
  } 
  if (nameA > nameB) {
    return 1;
  } else{
    return 0;
  }
});
console.log("Sorted Names: ", userNames);
*/

// TASK 2 Задача на фільтрування масиву
// first method 
const userNames2 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowelLetters = ['А', 'Е', 'Є', 'И', 'І', 'О', 'У', 'Я', 'Ю', 'Ї'];
console.log("Initital array of names: ", userNames2);

 const filteredNames = userNames2.filter(function(name){
    const firstLetter = name[0].toUpperCase();
    return vowelLetters.includes(firstLetter);
 })
 console.log(filteredNames);

//second method 
const filteredNamesWithSwitch = userNames2.filter(function(name) {
    const firstLetter = name[0].toUpperCase();
  
    switch (firstLetter) {
      case 'А':
      case 'Е':
      case 'Є':
      case 'И':
      case 'І':
      case 'О':
      case 'У':
      case 'Я':
      case 'Ю':
      case 'Ї':
        return true;
      default:
        return false;
    }
  });
  
  console.log("Імена, що починаються з голосної букви за допомогою умовної конструкції:", filteredNamesWithSwitch);
  

// TASK 3 Задача на розворот числа

const currentMaxValue = 4589;
console.log(currentMaxValue);

function reverseNumber(number) {
    const reversedString = String(number).split('').reverse().join('');
    return parseInt(reversedString, 10);
  }
  
  const reverseMaxValue = reverseNumber(currentMaxValue);
  console.log(reverseMaxValue); 
  console.log(typeof reverseMaxValue);

// TASK 4 Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності

  const resultsArray = [1, 2, [3, [4]]];
  const flatArray = resultsArray.flat(2);
  console.log(flatArray);  
  const productOfArray = flatArray.reduce(function (acc,num) {
    return acc * num;
  }, 1);
  
  console.log(productOfArray); // 24