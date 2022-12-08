let n = 9;
for(let i=2; i<n; i++){
  if(n%i==0){
    count++;
  }
  if(count>0){
    console.log(n+" is not prime");
  }
  else{
    console.log(n+" is prime");
  }
}