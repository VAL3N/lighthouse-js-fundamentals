const lastIndexOf = function (array,num){

  for(let i = array.length - 1; i >= 0; i--){
    let lengthArray = array.length;
    if(array[i] === num ){
      if(lengthArray === 0){
        return -1;
      }
      return i;
    } 
  }
  return -1;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


// OTHER ATTEMPTS

/*let i = array.length - 1;
  while(i >= 0){
    if(array[i] === num ){
      return array[i];
    } else if(array.length === 0 || array[i] !== num){
      return -1;
    } else{
      i--;
    }
  }  */


    /*for(let i = array.length - 1; i >= 0){
    //const reversed = index.reverse();
    let newArray = [];
    if(array[i] === num ){
      return i;
    } else if(array.length === 0 || array[i] !== num){
      return -1;
    } else{
      i--;
    }
  } */