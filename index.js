// 1. **Addition.**
// Write a program that calculates the sum of  numbers from 1 to 20.

let sumFromOneTwenty = 0;

for (let i = 1; i <= 20; i++) {
  sumFromOneTwenty += 1;
  console.log("Q1:The result is", sumFromOneTwenty);
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

// 2. **There are `[i]` bottles of beer on the table.**
// Write a program that will execute the above mentioned statement until `i` equals to `5`. for example:
// "There is 1 bottle of beer on the table."
// "There are 2 bottles of beer on the table."
//  and so on.. until the last one:
// "There are 5 bottles of beer on the table."

for (let i = 1; i <= 5; i++) {
  if (i > 1) {
    console.log(`Q2: There are ${i} bottles of beer  on the table.`);
  } else {
    console.log(`Q2: There is  ${i} bottle  of beer  on the table.`);
  }
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

// 3.**The odd/even reporter.**
// Write a program that will iterate from 0 to 20 (counting from 0 to 20 while executing a specific statement). For each iteration, it will check if the current number is even or odd and display a message to the screen. e.g. ("2 is even") or (" 3 is odd")

for (let i = 0; i <= 20; i++)
  if (i % 2 == 0) {
    console.log(`Q3:${i} is even`);
  } else {
    console.log(`Q3:${i} is odd`);
  }

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

// 4.**Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the `for` loop, it will multiply the number by 9 and display the result.e.g. ("2 * 9 = 18").

for (let i = 0; i <= 10; i++) {
  console.log(`Q4: ${i} = ${i * 9}`);
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i = 0; i <= 10; i++) {
  for (let y = 0; y <= 10; y++) {
    const multiplier = i * y;
    console.log(`${i} * ${y} = ${multiplier}`);
  }
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

// 5.* Write a program which iterates the integers from 1 to 100. But for multiples of three, print "Fizz" in addition to the number and for the multiples of five, print "Buzz" in addition to the number. For numbers which are multiples of both three and five print "FizzBuzz" in addition to the number.
// *

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`Q5:${i} is FizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`Q5:${i} is Fizz`);
  } else if (i % 5 == 0) {
    console.log(`Q5:${i} is Buzz`);
  } else {
    console.log(`Q5:${i}`);
  }
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
// 6.**Sum of Multiples**
// Write a program to calculate the sum of the multiples of 3 and 5 under 1000.

let multiThreeFive = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    multiThreeFive += i;
  }
  console.log(`Q6: ${multiThreeFive}`);
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

// 7. Write programs that produce the following outputs:

// >
// > 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// > 100 200 300 400 500 600 700 800 900 1000
let start = 100;

for (let i = 1; i <= 1000; i++) {
  console.log(`7a: ${start * i}`);
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

// > 0 2 4 6 8 10
for (let i = 2; i <= 10; i++) {
  console.log(`7b:${i}`);
  i += 1;
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

// > 3 6 9 12 15
for (let i = 3; i <= 15; i++) {
  console.log(`7c:${i}`);
  i += 2;
}
console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
// > 9 8 7 6 5 4 3 2 1 0
for (let i = 10; i >= 1; ) {
  i--;
  console.log(`7c:${i}`);
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

// > 1 1 1 2 2 2 3 3 3 4 4 4

let count = 1;
for (let i = 1; i <= 4; ) {
  console.log(`7d ${i}`);
  if (count !== 0 && count % 3 === 0) {
    i++;
    count = 0;
  }
  count++;
}

console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
// > 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let runCount = 0;
for (let i = 0; i <= 4; ) {
  console.log("7e:", i);
  if (i === 4 && runCount <= 1) {
    i = 0;
    runCount++;
  } else {
    i++;
  }
}
