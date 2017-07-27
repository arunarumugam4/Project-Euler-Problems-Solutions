/* Question: The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

//solution:
//start:

function primeFinder(n){
         var find;
         var factorCount=0;
         for (var j=1; j<n; j++){
           if(n%j===0){
           	factorCount +=1;
           }
         }
         
       if(factorCount<2){
            find = true;
       }
       else{
       	find= false;
       }
     return find;     
}

//-----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------
function primeFactors(number){
     var primeChecker = primeFinder(number);
     var primeNumbers;
     var requiredPrime =[];
     
     
     
     if (primeChecker){
     	return number;
     }
    
    else {

          for(var i=2; i<number;i++){
  if(primeFinder(i) && number%i===0){
    requiredPrime.push(i);
    if(requiredPrime.length===2){
      requiredPrime=[Math.max.apply(null, requiredPrime)];
    }
  }

}

    }
    

    return Math.max.apply(null, requiredPrime);
    
}

primeFactors( 600851475143);


//end