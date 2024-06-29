// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, b){
    if (b <= 0) return 1
    
    return a * power(a, b-1)
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if (num < 0) return 0;
    if (num <= 1) return 1;
   
   return num * factorial(num-1)
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
   if (!arr.length) return 1;
   
   return arr.shift() * productOfArray(arr)
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   if (num <= 0) return 0

   return num + recursiveRange(num-1)
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// 1,1,2,3,5,8,12
function fib1(num){ 
    let fibo = [1]
    let result = 1

    function helper(a){
        if (a >= num) return;
        
        if (a === 1){
            fibo.push(1)  
        } else{
            let lastElement = fibo[fibo.length - 1]
            result = fibo[fibo.length - 2] + lastElement
            fibo.push(result)   
        }
        return helper(fibo.length)
    }    
    helper(fibo.length)
    return fibo[fibo.length - 1]
}

function fib(num){
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2)
}


function binarySearch(arr, num){
  // add whatever parameters you deem necessary - good luck!
    let l = 0
    let r = arr.length - 1
  
    while(l <= r){    
        let mid = Math.floor( (l + r) / 2)
        if (arr[mid] === num){
            console.log("found", mid)
            return mid
        }else if(num > arr[mid]){
            console.log("greater", mid)
            l = mid + 1
        }else if(num < arr[mid]){
            console.log("lower", mid)
            r = mid - 1
        }
    }
  
    return -1
}


// Bubble Sort
function Bubble(arr){
    let noSwaps;
    
    for(let i=arr.length ; i>0; i--){
        noSwaps = true;
        for(let j=0 ; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                noSwaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr
}

// Selection Sort
function Selection(arr){
    for(let i=0 ; i<arr.length; i++){
        let swapItem = i 
        for(let j=i+1 ; j<arr.length; j++){
            if(arr[swapItem] > arr[j]){
                swapItem = j
            }
            console.log("min", swapItem)         
            console.log(arr, i, j, swapItem, arr[i], arr[j])
        }
        if(swapItem !== i){
            [arr[i], arr[swapItem]] = [arr[swapItem], arr[i]]
        }   
        console.log(i, "Run", arr)
    }
    return arr
}


function insertion(arr) {
    for(let i=1 ; i<arr.length; i++){
        let el = arr[i];
        for(var j=i-1 ; j>=0 && arr[j] > el; j--){
                arr[j+1] = arr[j]
        }
        console.log(arr)
        arr[j+1] = el
    }
    return arr
}

// Quick Sort
function pivot(arr, start=0, end=arr.length+1){ 
    var pivot = arr[start];
    var swapIdx = start;

    for(var i = start+1; i<arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
        }
    }
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]
    return swapIdx
}

function quicksort(arr, left=0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        // left
        quicksort(arr,left,pivotIndex-1)
        //right
        quicksort(arr,pivotIndex+1,right)
    }
    return arr;
}
quicksort([5,3,4,10,2,-30,14,24])