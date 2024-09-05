// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, b) {
  if (b <= 0) return 1;

  return a * power(a, b - 1);
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
  if (!arr.length) return 1;

  return arr.shift() * productOfArray(arr);
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num <= 0) return 0;

  return num + recursiveRange(num - 1);
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// 1,1,2,3,5,8,12
function fib1(num) {
  let fibo = [1];
  let result = 1;

  function helper(a) {
    if (a >= num) return;

    if (a === 1) {
      fibo.push(1);
    } else {
      let lastElement = fibo[fibo.length - 1];
      result = fibo[fibo.length - 2] + lastElement;
      fibo.push(result);
    }
    return helper(fibo.length);
  }
  helper(fibo.length);
  return fibo[fibo.length - 1];
}

// Fibonacci Sequence
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

function binarySearch(arr, num) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === num) {
      console.log("found", mid);
      return mid;
    } else if (num > arr[mid]) {
      console.log("greater", mid);
      l = mid + 1;
    } else if (num < arr[mid]) {
      console.log("lower", mid);
      r = mid - 1;
    }
  }

  return -1;
}

// Are there duplicates
function areThereDuplicates(arr) {
  let x = {};

  console.log(x, arr);
  for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
    if (arr[a] in x) {
      return true;
    } else {
      x[arr[a]] = 1;
    }
    console.log(x);
  }

  return false;
}

areThereDuplicates(["a", "b", "c", "a"]);

// Max profit given K
function maxProfit1(prices, k) {
  /// Implement your code here ///
  let maxprofit = 0;
  let buy, sell, diff;
  let profit = [];

  // const getMax = (a, b) => Math.max(a, b);
  const getSum = (a, b) => a + b;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      buy = prices[i];
      sell = prices[j];
      diff = sell - buy;
      maxprofit = Math.max(maxprofit, diff);
      // console.log('', buy, 'sell', sell, 'diff:', diff, 'in loop maxProfit:', maxprofit)
    }
    // console.log()
    if (profit.lastIndexOf(maxprofit) === -1) {
      profit.push(maxprofit);
    }
  }

  maxprofit = profit.reduce(getSum);
  console.log(profit, maxprofit);
  return maxprofit;
}

function maxProfit(prices, k) {
  /// Implement your code here ///
  let profit = new Array(k + 1).fill(0);
  let maxDiff = new Array(k + 1).fill(Number.MIN_SAFE_INTEGER);

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      maxDiff[j] = Math.max(maxDiff[j], profit[j - 1] - prices[i]);
      profit[j] = Math.max(profit[j], prices[i] + maxDiff[j]);
    }
  }

  return profit[k];
}

maxProfit([3, 2, 6, 5, 0, 3], 2);
// maxProfit([7,1,5,3,6,4], 1)

// Average Pair
function averagePair(arr, avg) {
  let num = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let num = (arr[start] + arr[end]) / 2;
    console.log(num);
    if (num === avg) return true;
    else if (num < avg) start++;
    else end--;
  }

  return false;
}

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

// Same frequency
function sameFrequency(one, two) {
  const a = one.toString();
  const b = two.toString();
  if (a.length !== b.length) return false;

  // create object
  let x = {};

  console.log(x);

  // add to object
  for (let i = 0; i < a.length; i++) {
    let key = a.charAt(i);
    console.log("key is", key);

    if (key in x === false) {
      x[key] = 1;
    } else {
      x[key]++;
    }
  }

  console.log(x);

  // remove from object if exists
  for (let i = 0; i < a.length; i++) {
    let key = b.charAt(i);
    if (key in x) {
      x[key]--;
    } else {
      return false;
    }
  }

  console.log(x);
  return true;
}

sameFrequency(182, 181);

/*
Divide and Conquer - countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
*/
function countZeroes(arr) {
  let length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) return length - i;
  }
  return 0;
}
