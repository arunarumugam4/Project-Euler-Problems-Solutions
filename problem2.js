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

function primearray(n){
var x =[];
for(var i=2; i<n;i++){
	if(primeFinder(i)){
		x.push(i);
	}

}

return x;
}


//-----------------------------------------------------------------------------------------
function primeFactors(number){
     var primeChecker = primeFinder(number);
     var primeNumbers;
     var requiredPrime =[];
     
     primeNumbers = primearray(number);
     
     if (primeChecker){
     	return number;
     }
    
    else {

          for (i in primeNumbers){
          	if (number%primeNumbers[i]===0){
          		requiredPrime.push(primeNumbers[i]);
          		number=(number/primeNumbers[i]);
          	}
          
          }

    }


    return Math.max.apply(null, requiredPrime);
    
}

//end
