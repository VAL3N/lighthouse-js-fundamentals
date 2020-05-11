const range = function(start,end,step){
  const rangeArray = [];
  for(let i = start; i <= end; i += step){
    if(start === undefined || start > end || step <= 0){
      if(end === undefined){
        if(step === undefined){
          return rangeArray;
        }
        return rangeArray;
      }
      return rangeArray;
    }
    rangeArray.push(i);
  }
  return rangeArray;
} 


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10,20,-1));