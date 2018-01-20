console.clear();
const n =8;
let cycle=1;
let currentVal=1;
let prevVal=0;
let array1=[currentVal];

// O(N)
while(cycle<n){
    let temp = currentVal;
    currentVal+=prevVal; 
    prevVal=temp;
    array1.push(currentVal);
    cycle++;
}


console.log(array1);
//O(2^n)
function fibo(n){

    if(n==1){
      return 1;
    }
    return fib(n-1)+fib(n-2);
}

//O(2n)
function fibo(n,mem){
    
    mem = mem || {};

    if(n<=1){
       return 1;
    }
    if(mem[n]){
        return mem[n];
     }

    return mem[n] = fib(n-1,mem)+fib(n-2,mem);

}

//https://leetcode.com/problems/climbing-stairs/solution/