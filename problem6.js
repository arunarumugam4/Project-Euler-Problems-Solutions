/* Question: By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */
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
//----------------

function primenumber(x){

      var counter1 =2;
      var counter2 =0;
      var checker;
      var result;
      var condition = true;

      while(condition){
            checker = primeFinder(counter1);
            if(counter2===x){
                    result =(counter1-1);
                    return result;
                    break;
            }
            else if(checker===true){
                      counter2 +=1; 
            }
             
            counter1 += 1;
           

      }

}

//end

