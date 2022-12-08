let n = 9;

let count =0;
for(let i=2; i<=n/2; i++){
  if(n%i==0){
    count++;
  }
}

  if(count>0){
    console.log(n+" is not prime");
  }
  else{
    console.log(n+" is prime");
  }
