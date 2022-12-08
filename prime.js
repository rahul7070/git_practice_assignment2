let n = 9;
for(let i=2; i<=n/2; i++){
  if(n%i==0){
    console.log("no")
    return;
  }
}
console.log("yes")