/* Question: A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */
//start:

function pythagoreantriplet(x){
   
   var a = 1;
   var b;
   var c;
   var sum = 1000;
   for (a; a<sum; a++){
      
      b = a +1;
      for(b; b<sum; b++){

          c = sum - a -b;
          console.log(a,b,c);
       
          if ((a+b+c===1000) && (a*a)+(b*b)===(c*c)){
            return (a*b*c);
          }
          else {
            
          }
      }
   }
 return console.log("nothing found");
}
// this problem made me crazy for a while.
// the end


