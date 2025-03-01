// target
let n=6;
//array
let array=[8,7,4,12,2,10]; 

function sumArray(array,n) {
  let numbers=array;
  let cont=0;
  for (let i=0;i<array.length;i++) {
    for (let j=i+1;j<array.length;j++) {
      if (n == (array[i] + array[j])) {
        console.log("Indice I: "+i+"  val: "+ array[i])
        console.log("Indice J: "+j+"  val: "+ array[j])
        result=array[i]+array[j];
        console.log("Result: "+ result)
        return true;
      }
    }
  }
  return false;
}
console.log(sumArray(array,n))

console.log(sumArray([2,7,11,15],9))

console.log(sumArray([3,2,4],6))

console.log(sumArray([3,3],6))