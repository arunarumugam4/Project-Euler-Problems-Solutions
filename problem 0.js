
/* problem 1: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

//soulution-1
//start

function Multiple(val){
	var result =0;
	val +=1
	for(i in range(1,val)){
		i=parseInt(i);
		if(i%3===0 || i%5===0){
			
			 result +=i; 
		}
	}
    return result;

}

function range(start, end)
{
    var array = new Array();
    for(var i = start; i < end; i++)
    {
        array.push(i);
    }
    return array;
}

Multiple(1000);
//end

//solution-2:
//start
//Another way to get range function is including js library like underscore, lodash
//then using _.range(val), will works fine
//end