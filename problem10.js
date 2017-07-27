/* Question: The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. */
//start:
function newprimeFinder(num){

	if (num===2 || num===3){
    	return true;
    }
	else if(num%2===0){
		return false;
	}
	else if(!(num%2===0)){
		for (let i = num-2; i>1;i-=2){
         

			if(num%i===0){
				return false;
			}
          
		}
	   return true;
      
	}
    
}




function sumprimeNumbers(num){
	var counter =2;
	var container =0;

	

 while(counter <num){
        if(newprimeFinder(counter)){
        	container += counter;
        } 
	   counter +=1;
        
	}



    return container;  

}

console.time(sumprimeNumbers(20000));
console.timeEnd(sumprimeNumbers(20000));
