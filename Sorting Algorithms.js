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

// Insertion Sort
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