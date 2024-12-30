function foo(a,b){
  a = parseInt(a);
  b = parseInt(b);
  if(isNaN(a) || isNaN(b)){
    return "Invalid Input";
  }
  return a+b;}
console.log(foo(2,3)); //5
console.log(foo(2,"3")); //5
console.log(foo("2",3)); //5