// js
function textChange() {
  document.getElementById('tc').innerHTML = "hello world";
}
function showChange() {
  document.getElementById('st').innerHTML = "hello world";
}
function showDate(){
  document.getElementById('sd').innerHTML = Date();

}
function bulpOne() {
  document.getElementById('b_img').
 src="img/pic_bulbon.gif";  
}
function bulpOff() {
  document.getElementById('b_img').
 src="img/pic_bulboff.gif";  
}
function performSearch() {
      const query = document.getElementById("searchInput").value;
      if (query) {
        // Redirect to search results (example: Google)
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      } else {
        alert("Please enter a search term.");
      }
    }
 function performSearch2() {
      const query = document.getElementById("searchInput2").value.trim();
      if (query !== "") {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      } else {
        alert("Type something to search!");
      }
    }
//--------------------------------------------//

function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const sum = num1 + num2;
  document.getElementById("result1").innerText = "Result: " + sum;
}

function greetUser() {
  const name = document.getElementById("username").value;
  document.getElementById("greeting").innerText = "Hello, " + name + "!";
}

function checkEvenOdd() {
  const num = parseInt(document.getElementById("number").value);
  const result = (num % 2 === 0) ? "Even" : "Odd";
  document.getElementById("output").innerText = "This number is: " + result;
}

function checkSign() {
  const num = parseFloat(document.getElementById("numCheck").value);
  let result = "";
  if (num > +880) result = "Positive";
  else if (num < 0) result = "Negative";
  else result = "Zero";
  document.getElementById("signResult").innerText = result;
}

function printNumbers() {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += i + " ";
  }
  document.getElementById("numbersList").innerText = result;
}

function printArray() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const output = fruits.join(", ");
  document.getElementById("arrayOutput").innerText = output;
}
function findMax() {
  const arr = [12, 45, 7, 89, 32];
  const max = Math.max(...arr);
  document.getElementById("maxOutput").innerText = "Max: " + max;
}

function reverseString() {
  const str = document.getElementById("inputString").value;
  const reversed = str.split("").reverse().join("");
  document.getElementById("reversed").innerText = reversed;
}

function checkPalindrome() {
  const str = document.getElementById("palindromeInput").value.toLowerCase();
  const reversed = str.split("").reverse().join("");
  const isPalindrome = (str === reversed);
  document.getElementById("palindromeResult").innerText = isPalindrome ? "Palindrome" : "Not a Palindrome";
}
function multiply() {
  const a = parseFloat(document.getElementById("mul1").value);
  const b = parseFloat(document.getElementById("mul2").value);
  document.getElementById("mulResult").innerText = "Result: " + (a * b);
}

function showTime() {
  const now = new Date();
  document.getElementById("dateTime").innerText = now.toString();
}

function showOdds() {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const odds = numbers.filter(n => n % 2 !== 0);
  document.getElementById("oddOutput").innerText = odds.join(", ");
}

function factorial() {
  const n = parseInt(document.getElementById("factInput").value);
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  document.getElementById("factorialResult").innerText = "Factorial: " + result;
}
function calculateAge() {
  const year = parseInt(document.getElementById("birthYear").value);
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  document.getElementById("ageResult").innerText = "You are " + age + " years old.";
}

function generateTable() {
  const num = parseInt(document.getElementById("tableNum").value);
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${num} × ${i} = ${num * i}\n`;
  }
  document.getElementById("tableResult").innerText = result;
}
function sortArray() {
  const arr = [8, 2, 9, 1, 5];
  arr.sort((a, b) => a - b);
  document.getElementById("sortedArray").innerText = "Sorted: " + arr.join(", ");
}
function countVowels() {
  const text = document.getElementById("sentence").value.toLowerCase();
  const vowels = text.match(/[aeiou]/g);
  const count = vowels ? vowels.length : 0;
  document.getElementById("vowelCount").innerText = "Vowels: " + count;
}
function checkPrime() {
  const n = parseInt(document.getElementById("primeInput").value);
  if (n < 2) return document.getElementById("primeResult").innerText = "Not Prime";
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return document.getElementById("primeResult").innerText = "Not Prime";
  }
  document.getElementById("primeResult").innerText = "Prime";
}
function convertTemp() {
  const c = parseFloat(document.getElementById("celsius").value);
  const f = (c * 9 / 5) + 32;
  document.getElementById("fahrenheitOutput").innerText = f.toFixed(2) + " °F";
}


function countWords() {
  const text = document.getElementById("wordInput").value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  document.getElementById("wordResult").innerText = "Words: " + words;
}
// Example 026
function convertToUppercase() {
  const text = document.getElementById("upperInput").value;
  document.getElementById("upperResult").innerText = text.toUpperCase();
}

// Example 027
function getStringLength() {
  const text = document.getElementById("lengthInput").value;
  document.getElementById("lengthResult").innerText = "Length: " + text.length;
}

// Example 028
function findMin() {
  const arr = [34, 12, 7, 89, 2];
  const min = Math.min(...arr);
  document.getElementById("minResult").innerText = "Min: " + min;
}

// Example 029
function convertToCelsius() {
  const f = parseFloat(document.getElementById("fahrenheitInput").value);
  const c = (f - 32) * 5 / 9;
  document.getElementById("celsiusOutput").innerText = c.toFixed(2) + " °C";
}

// Example 030
function capitalizeFirst() {
  const text = document.getElementById("capitalizeInput").value;
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
  document.getElementById("capitalizeResult").innerText = capitalized;
}

// Example 031
function sumArray() {
  const arr = [5, 10, 15, 20];
  const sum = arr.reduce((total, num) => total + num, 0);
  document.getElementById("sumResult").innerText = "Sum: " + sum;
}

// Example 032
function countConsonants() {
  const text = document.getElementById("consonantInput").value.toLowerCase();
  const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/g);
  document.getElementById("consonantCount").innerText = "Consonants: " + (consonants ? consonants.length : 0);
}

// Example 033
function reverseArray() {
  const arr = [1, 2, 3, 4, 5];
  const reversed = arr.reverse();
  document.getElementById("reversedArray").innerText = reversed.join(", ");
}

// Example 034
function checkContains() {
  const sentence = document.getElementById("sentenceInput").value.toLowerCase();
  const word = document.getElementById("wordInput").value.toLowerCase();
  const found = sentence.includes(word);
  document.getElementById("containResult").innerText = found ? "Yes, it contains the word." : "No, it does not contain the word.";
}

// Example 035
function findAverage() {
  const numbers = [10, 20, 30, 40, 50];
  const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  document.getElementById("averageResult").innerText = "Average: " + avg;
}

// Example 036
function generateRandomNumber() {
  const num = Math.floor(Math.random() * 100) + 1;
  document.getElementById("randomResult").innerText = "Random: " + num;
}

// Example 037
function findSquareRoot() {
  const n = parseFloat(document.getElementById("sqrtInput").value);
  const sqrt = Math.sqrt(n);
  document.getElementById("sqrtResult").innerText = "Square Root: " + sqrt.toFixed(2);
}

// Example 038
function checkLeapYear() {
  const year = parseInt(document.getElementById("yearInput").value);
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  document.getElementById("leapResult").innerText = isLeap ? "Leap Year" : "Not a Leap Year";
}

// Example 039
function getTodayDate() {
  const today = new Date().toLocaleDateString();
  document.getElementById("todayDate").innerText = "Today: " + today;
}

// Example 040
function countDigits() {
  const num = document.getElementById("digitInput").value;
  const count = num.replace(/\D/g, "").length;
  document.getElementById("digitCount").innerText = "Digits: " + count;
}

// Example 041
function removeSpaces() {
  const str = document.getElementById("spaceInput").value;
  document.getElementById("noSpaceOutput").innerText = str.replace(/\s+/g, "");
}

// Example 042
function repeatString() {
  const str = document.getElementById("repeatInput").value;
  const times = parseInt(document.getElementById("repeatTimes").value);
  document.getElementById("repeatOutput").innerText = str.repeat(times);
}

// Example 043
function charAtPosition() {
  const str = document.getElementById("charInput").value;
  const pos = parseInt(document.getElementById("charPos").value);
  const char = str.charAt(pos);
  document.getElementById("charOutput").innerText = "Character: " + char;
}

// Example 044
function convertToLowercase() {
  const str = document.getElementById("lowerInput").value;
  document.getElementById("lowerOutput").innerText = str.toLowerCase();
}

// Example 045
function validateEmail() {
  const email = document.getElementById("emailInput").value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.getElementById("emailOutput").innerText = pattern.test(email) ? "Valid Email" : "Invalid Email";
}

// Example 046
function sumEvenNumbers() {
  const arr = [2, 4, 7, 10, 13];
  const evenSum = arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
  document.getElementById("evenSumResult").innerText = "Even Sum: " + evenSum;
}

// Example 047
function findLongestWord() {
  const sentence = document.getElementById("longestInput").value;
  const words = sentence.split(" ");
  const longest = words.reduce((a, b) => a.length > b.length ? a : b);
  document.getElementById("longestWordResult").innerText = "Longest: " + longest;
}

// Example 048
function removeVowels() {
  const str = document.getElementById("removeVowelInput").value;
  const result = str.replace(/[aeiou]/gi, "");
  document.getElementById("removeVowelResult").innerText = result;
}

// Example 049
function mergeArrays() {
  const a = [1, 2];
  const b = [3, 4];
  const merged = a.concat(b);
  document.getElementById("mergedArray").innerText = merged.join(", ");
}

// Example 050
function isUpperCase() {
  const str = document.getElementById("upperCheckInput").value;
  const isUpper = str === str.toUpperCase();
  document.getElementById("upperCheckResult").innerText = isUpper ? "Yes, All Uppercase" : "No";
}
// Example 051
function showCurrentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("currentTime").innerText = "Time: " + time;
}

// Example 052
function checkPalindrome() {
  const word = document.getElementById("palindromeInput").value.toLowerCase();
  const reversed = word.split('').reverse().join('');
  document.getElementById("palindromeResult").innerText = word === reversed ? "Palindrome" : "Not a Palindrome";
}

// Example 053
function countWords() {
  const sentence = document.getElementById("wordCountInput").value.trim();
  const wordCount = sentence ? sentence.split(/\s+/).length : 0;
  document.getElementById("wordCountResult").innerText = "Words: " + wordCount;
}

// Example 054
function generateRandomColor() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const box = document.getElementById("colorBox");
  box.style.backgroundColor = color;
  box.innerText = color;
}

// Example 055
function reverseString() {
  const text = document.getElementById("reverseInput").value;
  const reversed = text.split('').reverse().join('');
  document.getElementById("reverseOutput").innerText = reversed;
}

// Example 056
function giveTempAdvice() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  let advice = "";
  if (temp < 10) advice = "Very Cold";
  else if (temp < 20) advice = "Cold";
  else if (temp < 30) advice = "Moderate";
  else advice = "Hot";
  document.getElementById("tempAdvice").innerText = advice;
}

// Example 057
function countUppercaseLetters() {
  const text = document.getElementById("uppercaseInput").value;
  const matches = text.match(/[A-Z]/g);
  document.getElementById("uppercaseCount").innerText = "Uppercase Letters: " + (matches ? matches.length : 0);
}

// Example 058
function checkEvenOdd() {
  const number = parseInt(document.getElementById("evenOddInput").value);
  const result = number % 2 === 0 ? "Even" : "Odd";
  document.getElementById("evenOddResult").innerText = result;
}

// Example 059
function getInitials() {
  const name = document.getElementById("nameInput").value.trim();
  const initials = name.split(" ").map(n => n[0].toUpperCase()).join("");
  document.getElementById("initialsOutput").innerText = "Initials: " + initials;
}

// Example 060
function removeNumbers() {
  const text = document.getElementById("removeNumInput").value;
  const result = text.replace(/[0-9]/g, "");
  document.getElementById("noNumberOutput").innerText = result;
}
function findFactorial() {
  let n = parseInt(document.getElementById("factorialInput").value);
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  document.getElementById("factorialResult").innerText = "Factorial: " + fact;
}

function toggleCase() {
  const text = document.getElementById("toggleCaseInput").value;
  let toggled = '';
  for (let char of text) {
    if (char === char.toLowerCase()) toggled += char.toUpperCase();
    else toggled += char.toLowerCase();
  }
  document.getElementById("toggleCaseResult").innerText = toggled;
}

function getRandomItem() {
  const arr = ["apple", "banana", "cherry", "date"];
  const item = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("randomItem").innerText = item;
}

function checkPrime() {
  const n = parseInt(document.getElementById("primeInput").value);
  let isPrime = n > 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  document.getElementById("primeResult").innerText = isPrime ? "Prime" : "Not Prime";
}

function generateTable() {
  const n = parseInt(document.getElementById("tableInput").value);
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${n} × ${i} = ${n * i}<br>`;
  }
  document.getElementById("tableOutput").innerHTML = result;
}

function checkSubstring() {
  const str = document.getElementById("mainStr").value;
  const sub = document.getElementById("subStr").value;
  const found = str.includes(sub);
  document.getElementById("subResult").innerText = found ? "Substring Found" : "Not Found";
}

function swapNumbers() {
  let a = parseInt(document.getElementById("swapA").value);
  let b = parseInt(document.getElementById("swapB").value);
  [a, b] = [b, a];
  document.getElementById("swapResult").innerText = `A = ${a}, B = ${b}`;
}

function isDivisibleBy3and5() {
  const num = parseInt(document.getElementById("divInput").value);
  const result = (num % 3 === 0 && num % 5 === 0) ? "Yes" : "No";
  document.getElementById("divResult").innerText = result;
}

function findSecondLargest() {
  const arr = [10, 40, 20, 50, 30];
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  document.getElementById("secondLargest").innerText = "2nd Largest: " + (unique[1] || "N/A");
}

function countVowelsConsonants() {
  const text = document.getElementById("vcInput").value.toLowerCase();
  const vowels = text.match(/[aeiou]/g);
  const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/g);
  document.getElementById("vcResult").innerText = `Vowels: ${vowels ? vowels.length : 0}, Consonants: ${consonants ? consonants.length : 0}`;
}

function roundToTwoDecimals() {
  const num = parseFloat(document.getElementById("roundInput").value);
  document.getElementById("roundResult").innerText = num.toFixed(2);
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weightInput").value);
  const height = parseFloat(document.getElementById("heightInput").value);
  const bmi = weight / (height * height);
  document.getElementById("bmiOutput").innerText = `BMI: ${bmi.toFixed(2)}`;
}

function convertDaysToWeeks() {
  const days = parseInt(document.getElementById("daysInput").value);
  const weeks = Math.floor(days / 7);
  const remaining = days % 7;
  document.getElementById("weeksOutput").innerText = `${weeks} week(s) and ${remaining} day(s)`;
}

function findCommonElements() {
  const a = [1, 2, 3, 4];
  const b = [3, 4, 5, 6];
  const common = a.filter(i => b.includes(i));
  document.getElementById("commonOutput").innerText = common.join(", ");
}

function countWordsStartingWithCapital() {
  const sentence = document.getElementById("capitalInput").value;
  const words = sentence.split(" ");
  const count = words.filter(w => w[0] && w[0] === w[0].toUpperCase()).length;
  document.getElementById("capitalResult").innerText = `Capital Start Words: ${count}`;
}
function checkLeapYear() {
  const year = parseInt(document.getElementById("leapYearInput").value);
  const result = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "Leap Year" : "Not a Leap Year";
  document.getElementById("leapYearResult").innerText = result;
}

function reverseNumber() {
  const num = document.getElementById("reverseNumInput").value;
  const reversed = num.split('').reverse().join('');
  document.getElementById("reverseNumResult").innerText = reversed;
}

function findMaxInArray() {
  const arr = [12, 25, 7, 34, 19];
  const max = Math.max(...arr);
  document.getElementById("maxArrayResult").innerText = "Max: " + max;
}

function countCharacters() {
  const text = document.getElementById("charCountInput").value;
  document.getElementById("charCountResult").innerText = "Total Characters: " + text.length;
}

function isPalindromeNumber() {
  const num = document.getElementById("palindromeNumInput").value;
  const isPal = num === num.split('').reverse().join('');
  document.getElementById("palindromeNumResult").innerText = isPal ? "Palindrome" : "Not Palindrome";
}

function removeSpaces() {
  const text = document.getElementById("spaceRemoveInput").value;
  document.getElementById("spaceRemoveResult").innerText = text.replace(/\s/g, '');
}

function checkPerfectSquare() {
  const num = parseInt(document.getElementById("perfectSquareInput").value);
  const root = Math.sqrt(num);
  document.getElementById("perfectSquareResult").innerText = Number.isInteger(root) ? "Perfect Square" : "Not Perfect Square";
}

function countDigits() {
  const num = document.getElementById("digitCountInput").value;
  document.getElementById("digitCountResult").innerText = "Digits: " + num.length;
}

function findAsciiValue() {
  const char = document.getElementById("asciiCharInput").value;
  if (char.length === 1) {
    document.getElementById("asciiResult").innerText = "ASCII: " + char.charCodeAt(0);
  } else {
    document.getElementById("asciiResult").innerText = "Enter one character only.";
  }
}

function sumArrayElements() {
  const arr = [5, 10, 15, 20];
  const sum = arr.reduce((acc, val) => acc + val, 0);
  document.getElementById("sumArrayResult").innerText = "Sum: " + sum;
}

//--------------//
function generateFibonacciSequence() {
  const n = parseInt(document.getElementById("fibonacciInput").value);
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  document.getElementById("fibonacciResult").innerText = fib.slice(0, n).join(", ");
}

function isArmstrongNumber() {
  const num = document.getElementById("armstrongInput").value;
  const sum = num.split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), num.length), 0);
  document.getElementById("armstrongResult").innerText = parseInt(num) === sum ? "Armstrong Number" : "Not an Armstrong Number";
}

function sortArrayAscending() {
  const arr = document.getElementById("sortArrayInput").value.split(',').map(Number);
  const sorted = arr.sort((a, b) => a - b);
  document.getElementById("sortArrayResult").innerText = sorted.join(", ");
}

function findGCD() {
  let a = parseInt(document.getElementById("gcdInput1").value);
  let b = parseInt(document.getElementById("gcdInput2").value);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  document.getElementById("gcdResult").innerText = "GCD: " + a;
}

function validateEmailFormat() {
  const email = document.getElementById("emailInput").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const valid = regex.test(email);
  document.getElementById("emailResult").innerText = valid ? "Valid Email" : "Invalid Email";
}


