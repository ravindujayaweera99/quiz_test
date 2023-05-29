
  const data = [
    // data : [

    /*  
           */     
         
//1

          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                op5 = Math.ceil(Math.random() * 4) + 1;
                op6 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                opB = Math.pow(op1,op6);
                fraction = reduce(op3+op6, op2);
                return {
                    ques:`If $ \\sqrt[${op2} ]{${opA}} . \\sqrt[${op2} ]{${opB}}$ is written as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$, what is b? (Reduce to simplest fraction first.)`,
                    Hint: `Hint: $ ${opA} = ${op1}^${op3}, etc...$ `,
                    Answer: `Answer: The fraction is $${op1} ^{\\frac{${fraction[0]}}{${fraction[1]}}}$  and so $b = ${fraction[0]}$`,
                    ans: fraction[0]

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a fractional exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   

//1
     {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = op1*(Math.ceil(Math.random() * 5) + 1);
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = op2+op3;
                opB = Math.pow((Math.pow(opA+op3,2) - op2)/op1,0.5);
                opC = op3/op1*Math.pow(op2,2);

                return {
                  ques:` Solve for $x$: $ \\sqrt{${op1}x}  =  ${op2} \\sqrt{${op3}}  $`,
                  Hint: `Hint: Square both sides... Also $(\\sqrt{${op3}})^2 = ${op3} $`,
                  Answer: `Answer:  ${opC}`,
                  ans: opC

                 }
                 
            },
            answer: function() {
                return op1 * op2;
            }
          },   
       
 


//1
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 2) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 2) + 1;
                op4 = Math.ceil(Math.random() * 2) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
                opA = op1 + op2;    
                opB = Math.pow(op4, op1 + op2);
                opC = Math.pow(op4, op1);
                Ansr = Math.pow(op4,op3);
                return {
                  ques:` If $ ${opA}x - ${op1}y = ${op3} $, then find the value of $ ${opB}^{x} / ${opC}^{y} $`,
                  Hint: `Hint: Reduce to common base first... `,
                  Answer: `Answer: $ ${Ansr} $ `,
                  ans: Ansr

                 }
                // return  ``;
                
                //"If " + (op1 + op2) + "x - " + op1 + "y = " + op3 + ", then find the value of " + Math.pow(2, op1 + op2) + "^x / " + Math.pow(2, op1) + "^y";

            },
            answer: function() {
                return op1 * op2;
            }
        },

//1
 {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`Solve for $x: \\sqrt{x+ ${op1}  } = ${op2}\\sqrt{ ${op3} } $`,
                    Hint: `Hint: Square both sides to get rid of the square root sign`,
                    Answer: `Answer:  $  ${op2*op2*op3 - op1}  $`,
                    ans: op2*op2*op3 - op1

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },  
 

//1

         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`Solve for $x: \\sqrt{ ${op1} x} = ${op2}\\sqrt{${op1*op3}} $`,
                    Hint: `Hint: Square both sides to get rid of the square root sign `,
                    Answer: `Answer:  $  ${op2*op2*op3}  $`,
                    ans: op2*op2*op3

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },  



 




//1 
       
      {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`Solve for x: $ \\sqrt{x+${op1}} - ${op2} = ${op3}  $`,
                    Hint: `Hint: First isolate the $\\sqrt{x+${op1}}$ term. Then square both sides `,
                    Answer: `Answer:  $  ${(op2+op3)*(op2+op3) - op1}  $`,
                    ans: (op2+op3)*(op2+op3) - op1    
                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },  



 





       //1         
     
   {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 2) + 1;
                op2 = Math.ceil(Math.random() * 1) + 1;
                op3 = op2+ Math.ceil(Math.random() * 2) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                op5 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op2);
                opB = Math.pow(op1,op3);
                
                fraction = (op2*op4 - op3*op5)/(op3-op2);
                return {
                    ques:`$ ${opA}^{a+ ${op4}  } = ${opB}^{a+  ${op5} }$. Find $a$.`,
                    Hint: `Hint: $ ${opA} = ${op1}^${op2}, ${opB} = ${op1}^${op3}    $ `,
                    Answer: `Answer:  $  ${(op2*op4 - op3*op5)/(op3-op2)}    $`,
                    ans: (op2*op4 - op3*op5)/(op3-op2)

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },  





          //1  
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                Ansr = op1*op1*op2*op3;

        return {
                  ques:` If $m = ${op1}  \\sqrt{ ${op2} }$ , then  ${op3}$m^{2}  $  = ? `,
                  Hint: `Hint: Square both sides... `,
                  Answer: `Answer: $ ${Ansr} $ `,
                  ans: Ansr

                 }
                //return ``;
                //"If m = "+op1+" sqrt("+op2 + ") , then  m^2 / " + op3 + "  = ? "
            },
            answer: function() {
                return op1 * op2;
            }
        },
     
      //1            

     {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = op2+op3;
                opB =  Math.pow((Math.pow(opA+op3,2) - op2)/op1,0.5);
                opC = opB.toFixed(2);

                return {
                  ques:` Solve for $k$: $ \\sqrt{${op1}k^2+${op2}} - ${op3} = ${opA}.$ Round to $2$ decimal places. `,
                Hint: `Hint: Isolate the Square Root. Then Square both sides `,
                  Answer: `Answer:  ${opC}`,
                  ans: opC

                 }
                 
            },
            answer: function() {
                return op1 * op2;
            }
          },   

     
//1   
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = op2+op3;
                opB =  Math.pow((Math.pow(opA,2) - op2)/op1,0.5);
                opC = opB.toFixed(2);

                return {
                  ques:`Solve for $k$: $ \\sqrt{${op1}k^2+${op2}} = ${opA}.$ Round to $2$ decimal places. `,
                  Hint: `Hint: Square both sides `,
                  Answer: `Answer:  ${opC}`,
                  ans: opC
                 }

                
            },
            answer: function() {
                return op1 * op2;
            }
          }, 




            // 1.1
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 3) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                Ansr = Math.pow(op1,op2);
                return {
                    ques: `If $ ${op1}^{x+ ${op2} } = y$, then $ ${op1}^{x}  = \\dfrac{y}{A}$. Find $A$. `,
                    Hint: `Hint: Split into $ ${op1}^x.${op1}^${op2} $ `,
                    Answer: `Answer:  $ y/${op1}^{${op2}}$, so $A = ${Ansr} $`,
                    ans: Ansr
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

 


        // 1.2
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;

                return {
                    ques: `If $ ${op1}^{x + ${op2}} = ${op1}^{-x + ${op3} } $, what is the value of $x$?`,
                    Hint: `Hint: $ a + ${op2} = -a + ${op3}$ `,
                    Answer: `Answer:  $ ${(op3-op2)/2}  $`,
                    ans: (op3-op2)/2
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

 


        // 1.3
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 2) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 1) + 3;
                return {
                    ques: `If $ ${op6} m - n = ${op4}  $, what is the value of $ \\frac{ ${op5 ** op6 }^{m}}{ ${op5}^{n}} $ ?`,
                    Hint: `Hint:  $  ${op5 ** op6 }^{m} = ${op5}^{${op6}m} $`,
                    Answer: `Answer:  $ ${op5}^${op4} = ${Math.pow(op5, op4) } $`,
                    ans: Math.pow(op5, op4) 
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   


        // 1.4
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 4) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `If $\\sqrt[ ${op1 + op2}]{x^{ ${op1+1} }} = x^{\\frac{a}{b}}$, what is $b$?`,
                    Hint: `Hint: Convert to $  \\frac{${op1+1}}{${op2+op1}} $ `,
                    Answer: `Answer:  $  x^{\\frac{${op1+1}}{${op2+op1}}}  $`,
                    ans: op2+op1
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
 

        // 1.5
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1; op2 = Math.ceil(Math.random() * 4) + 1; op3 = Math.ceil(Math.random() * 4) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1; op5 = Math.ceil(Math.random() * 4) + 1; op6 = Math.ceil(Math.random() * 4) + 1;
                f = reduce(op1, op2+op1);
                f1 = reduce(op3*op1, op2+op1);

                return {
                    ques: `What is the value of $a$ if $(x^${op3})^{ \\frac{${f[0]}}{${f[1]}} } = x^{\\frac{a}{b}}$?`,
                    Hint: `Hint: $ ${op3} . \\frac{${f[0]}}{${f[1]}} $ `,
                    Answer: `Answer:  $\\frac{a}{b} =  \\frac{${f1[0]}}{${ f1[1] }} $, so $a = ${f1[0]}$`,
                    ans: f1[0]
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
          

    
//2
              {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`City A has ${op1}% more population than Country B. If Country B's population is ${op2*100000}, find the population of City A `,
                    Hint: `Hint: $ Old*(1+pct) = New $ .. Careful which is New and which is Old `,
                    Answer: `Answer:  $  ${op2*100000*(1+op1*0.01)}   $`,
                    ans: op2*100000*(1+op1*0.01)

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   

 
     
//2
              {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`City A has ${op1}% more population than Country B. If City A's population is ${op2*100000}, find the population of Country B `,
                    Hint: `Hint: $ Old*(1+pct) = New $ .. Careful which is New and which is Old `,
                    Answer: `Answer:  $  ${(op2*100000/(1+op1*0.01)).toFixed(0)}   $`,
                    ans: (op2*100000/(1+op1*0.01)).toFixed(0)

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   
  
   


//2     
    
   {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`A city's population increased by $ ${op1}  \\%$ in one year and then increased by $ ${op2}  \\%$ the next year.  Find the new population, if the initial population was $ ${op3*10000} $. `,
                    Hint: `Hint: $ Old*(1+pct)*(1+pct) = New  $ `,
                    Answer: `Answer:  $   ${op3*10000*(1+op1*.01)*(1+op2*.01)} $`,
                    ans: op3*10000*(1+op1*.01)*(1+op2*.01)

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   
 
   

//2     
      
   {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`A city's population increased by $ ${op1} \\%$  in one year and then decreased by $ ${op2} \\% $ the next year.  Find the new population, if the initial population was $ ${op3*10000} $. `,
                    Hint: `Hint: $ Old*(1+pct)*(1-pct) = New  $ `,
                    Answer: `Answer:  $   ${op3*10000*(1+op1*.01)*(1-op2*.01)} $`,
                    ans: op3*10000*(1+op1*.01)*(1-op2*.01)

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   



   
     
//2

   {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`A city's population increased by $ ${op1} \\%$  in one year and then decreased by $ ${op2} \\% $ the next year.  Find the net percentage change in the population. `,
                    Hint: `Hint: Use $ Old*(1+pct)*(1-pct) = New$  and put Old = 100 `,
                    Answer: `Answer:  $   ${ ((((1+.01*op1)*(1-.01*op2))-1)*100).toFixed(2)} \\% $`,
                    ans: ((((1+.01*op1)*(1-.01*op2))-1)*100).toFixed(2)

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   

 

          
//2  


   {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`A city's population increased by $ ${op1} \\%$  in one year and then increased by $ ${op2} \\% $ the next year.  Find the net percentage change in the population. `,
                    Hint: `Hint: Use $ Old*(1+pct)*(1+pct) = New$  and put Old = 100 `,
                    Answer: `Answer:  $   ${ ((((1+.01*op1)*(1+.01*op2))-1)*100).toFixed(2)} \\% $`,
                    ans: ((((1+.01*op1)*(1+.01*op2))-1)*100).toFixed(2)    
                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   
 

  
  
        
       
//2      
 
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                 op3 = Math.ceil(Math.random() * 100) + 5;
                op2 = op3*op1;
               
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`$ ${op1} \\%$ of $x$ is $ ${op2}.$ Find $x $.`,
                    Hint: `Hint: $  \\dfrac{${op1}}{100} = \\dfrac{ ${op2}}{x}.$ Then Cross-Multiply to find $x$. `,
                    Answer: `Answer:  $   ${op3*100}  $`,
                    ans: op3*100

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   
  

     
//2
     {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op2 = Math.ceil(Math.random() * 100) + 5;
                op3 = Math.ceil(Math.random() * 4) + 1;
                op1 = op3*op2;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`What percent of ${op2*100} is ${op1}?`,
                    Hint: `Hint: $ \\dfrac{x}{100} = \\dfrac{ ${op1} }{${(100*op2)} }.$ Then Cross-Multiply to find $x$.  `,
                    Answer: `Answer:  $ ${op3} \\% $`,
                    ans: op3

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   




//2
   {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 4) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`$ ${op1} \\% $ of boys and $ ${op2} \\% $ of girls in a class like History. If there are $ ${op3*100} $  boys and $ ${op4*100}  $ girls in a certain school, how many students like History?`,
                    Hint: `Hint: $  ${op1/100}*${op3*100} +  ${op2/100}*${op4*100}  $ `,
                    Answer: `Answer:  $  ${op1*op3 + op2*op4} $`,
                    ans: op1*op3 + op2*op4

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   



                     // 2.1
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$ ${op3*10}\\%$ of ${op1*10} students in Class A are girls, and $${op4*10}\\%$ of ${op2*10} students in Class B are girls, what is the percent of girls of the entire ${(op1+op2)*10} students?`,
                    Hint: `Hint: Find the number of girls separately and then add.`,
                    Answer: `Answer:  $ ${Math.round((op3*op1+op4*op2)/(op1+op2)*10)}\\%  $`,
                    ans: Math.round((op3*op1+op4*op2)/(op1+op2)*10)
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

   

        // 2.2
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = 5*(Math.ceil(Math.random() * 9) + 1); op2 = 5*(Math.ceil(Math.random() * 9) + 1); op3 = 5*(Math.ceil(Math.random() * 9) + 1);
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `The price of bitcoin increased by $ ${ op1 } \\%$, then decreased by $ ${op2}\\%$, and then increased by $ ${op3}\\%$. Find the percent change in the price.`,
                    Hint: `Hint: $ New = (1+${op1/100})(1-${op2/100})(1+${op3/100})Old  $ `,
                    Answer: `Answer:  $ ${Math.round(((1+op1/100)*(1-op2/100)*(1+op3/100)-1)*100*100)/100}  $`,
                    ans: Math.round(((1+op1/100)*(1-op2/100)*(1+op3/100)-1)*100*100)/100
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

 
        // 2.3

      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$\\$$${op1*100} is deposited into a bank account earning $${op2} $% interest each year, compounded semi-annually. Rounded to two decimal places, how much money is in the account after $${op3}$ years?`,
                    Hint: `Hint: $  ${op1*100}   (1+(0.01*${op2}/2))^{2(${op3})} $  `,
                    Answer: `Answer: $ \\$${ Math.round((op1*100)*((1+0.01*op2/2)**(op3*2) )*100)/100} $ `,
                    ans:  Math.round((op1*100)*((1+0.01*op2/2)**(op3*2) )*100)/100
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          }, 




        // 2.4
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$\\$$${op1*100} is deposited into a bank account earning $${op2} $% interest each year, compounded annually. Rounded to two decimals, how much money is in the account after $${op3}$ years?`,
                    Hint: `Hint: $  ${op1*100}   (1+(0.01*${op2}))^{${op3}} $  `,
                    Answer: `Answer: $ \\$${ Math.round((op1*100)*((1+0.01*op2)**op3 )*100)/100} $ `,
                    ans: Math.round((op1*100)*((1+0.01*op2)**op3 )*100)/100
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          }, 


        

                   

        // 2.5


    

        // 2.6
    
 
        // 2.7 -> hard
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = 10*(Math.ceil(Math.random() * 50) + 1); op2 = (Math.ceil(Math.random() * 20) + 1); op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `The price is bitcoin today was $${op1*1000}$. Last month, the price was $${Math.round(op1*1000*(1-(op2/100)))}$. What is the percent change in the price?`,
                    Hint: `Hint: $ \\% change = \\frac{New -Old}{Old}$ `,
                    Answer: `Answer:  $ -${ op2}  $`,
                    ans: -op2
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
    // 2.8 - done in other
 
  
        // 2.9
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 50) + 1; op2 = Math.ceil(Math.random() * 50) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$${op1}$% of books online are non-fiction books. Among those books, $${ op2}$% are autobiographies. What percent of books online are both non-fiction and autobiographies?`,
                    Hint: `Hint: $ (${op1/100})(${op2/100}) $ `,
                    Answer: `Answer:  $ ${Math.round(10000*op1*op2)/1000000}  $`,
                    ans: Math.round(10000*op1*op2)/1000000
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   




 

       //3

 {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 3) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`State if this series is linearly increasing or exponentially increasing:  ${op1*op2}, ${op1*Math.pow(op2,2)}, ${op1*Math.pow(op2,3)}, ... Answer $1$ if linear and $2$ if exponential.`,
                    Hint: `Hint: If Difference is constant: Linear. If Ratio is constant: Exponential. `,
                    Answer: `Answer:  exponentially increasing`,
                    ans: 2

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },  
 
 


    
//3
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`State if this series is linearly increasing or exponentially increasing: $ ${op1}, ${op1 + op2}, ${op1 + 2*op2}, ${op1 + 3*op2}, ... $ Answer $1$ if linear and $2$ if exponential.`,
                    Hint: `Hint: If Difference is constant: Linear. If Ratio is constant: Exponential. `,
                    Answer: `Answer:  linearly increasing`,
                    ans: 2

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },  


 //3
       
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = 1000*(Math.ceil(Math.random() * 5) + 1);
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 10) + 1;
                op6 = Math.ceil(Math.random() * 10) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
                Ansr = (op3*Math.pow((1-op1/100),op2)).toFixed(2);
                return {
                    ques:` The current price of a stock = ${op3} and decreases by ${op1}% every month. Find the price after ${op2}  months. Round to 2 decimal places.`,
                    Hint: `Hint: $New = Old(1-pct)^{${op2}} $`,
                    Answer: `Answer: $ ${Ansr}$`,
                    ans: Ansr

                 }  
                //return `;
            },
            answer: function() {
                return op1 * op2;
            }
        }, 
      
  

//3 
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = 1000*(Math.ceil(Math.random() * 5) + 1);
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 10) + 1;
                op6 = Math.ceil(Math.random() * 10) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
                Ansr = (op3*Math.pow((1+op1/100),op2)).toFixed(2);
                return {
                    ques:` The current price of a stock = ${op3} and increases by ${op1}% every month. Find the price after ${op2}  months.`,
                    Hint: `Hint: $New = Old(1+pct)^{${op2}} $`,
                    Answer: `Answer: Final Price is $ ${Ansr}$`,
                    ans: Ansr

                 }  
                //return `;
            },
            answer: function() {
                return op1 * op2;
            }
        }, 
 
 

//3

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 10) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
                return {
                    ques:`The population of a certain city is decaying at $ ${op1} \\% $ per year. If the current population is $ ${op2*100000} $, what will be the population in $ ${op3} $ years' time?`,
                    Hint: `Hint: $ Old*(1-pct)^{time} = New  $ `,
                    Answer: `Answer:  $ ${   (op2*100000*Math.pow(1-0.01*op1,op3)).toFixed(0)  } $`,
                    ans:  (op2*100000*Math.pow(1-0.01*op1,op3)).toFixed(0)

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   
 




        // 3.1


        // 3.2
 {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
            question: function() {
                op1 = 100*(Math.ceil(Math.random() * 9) + 1); op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `If $ P= ${op1}(${1 + (op2/100)})^{\\frac{t}{${op3}}}$ models the population, $P$, of a city after $t$ years, the population increases by $ ${op2}  $% after how many years?`,
                    Hint: `Hint: $ New = Old (1+${op2/100})^{\\frac  {${op3}}  {${op3}}}$ after $${op3}$ years `,
                    Answer: `Answer:  $ ${op3}  $`,
                    ans: op3
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
 

    {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
            question: function() {
                op1 = 100*(Math.ceil(Math.random() * 9) + 1); op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `If $ P= ${op1}(${1 - (op2/100)})^{\\frac{t}{${op3}}}$ models the population, $P$, of a city after $t$ years, the population decreases by $ ${op2}  $% after how many years?`,
                    Hint: `Hint: $ New = Old (1-${op2/100})^{\\frac  {${op3}}  {${op3}}}$ after $${op3}$ years `,
                    Answer: `Answer:  $ ${op3}  $`,
                    ans: op3
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

 



        // 3.3 and 3.4

      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
            question: function() {
                op1 = 10*(Math.ceil(Math.random() * 5) + 1); op2 = Math.ceil(Math.random() * 5) + 1; op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `The population of a country is initially $ ${op1*1000}$ and it doubles every $${op2}$ years. Find the population after $${op2*op3*12}$ months.`,
                    Hint: `Hint: It grows by a factor of $ 2^ {\\frac{${op2*op3*12}}{(${op2}){12}}}$ `,
                    Answer: `Answer:  $ ${op1*1000*2**(op3)} $`,
                    ans: op1*1000*2**(op3)
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },  
  

      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
            question: function() {
                op1 = 10*(Math.ceil(Math.random() * 9) + 1); op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `The population of a country is initially $ ${op1*1000}$ and it doubles every $${op2}$ years. Find the population after $${op2*op3}$ years.`,
                      Hint: `Hint: It grows by a factor of $ 2^ {    \\frac{${op2*op3}}   {${op2}}    }$ `,
                    Answer: `Answer:  $ ${op1*1000*2**op2} $`,
                    ans: op1*1000*2**op2
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   



//4


{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
    

                return {
                    ques:` Ray reads  $${op1}a$ pages per day for $${op2}b$ days. Jenny reads $c/${op3}$ pages per day for $${op5*op3}d$ days. Then they read  $Xab +${op5}cd$ pages in all. Find $X$.`,
                    Hint: `Hint: Work = Rate*Time`,
                    Answer: `Answer:  $ ${op1*op2}ab +${op5}cd $`,
                    ans:  op1*op2

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },


 



{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
    

                return {
                    ques:` Ray reads  $${op1}a$ pages per day for $${op2}b$ days. Jenny reads $c/${op3}$ pages per day for $${op5*op3}d$ days. Then they read  $Xab +Ycd$ pages in all. Find $Y$.`,
                    Hint: `Hint: Work = Rate*Time`,
                    Answer: `Answer:  $ ${op1*op2}ab +${op5}cd $`,
                    ans:  op5

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
 

//4




 
//4


{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = (Math.ceil(Math.random() * 5) + 1);
                op2 = op1+(Math.ceil(Math.random() * 5) + 1);
                op3 = (op1/10 + Math.ceil(Math.random() * 5) + 1)*10;
                opA = op3*op2;
    

                return {
                    ques:` The cost of renting a boat is $${op1}r$ dollars per minute. If the total cost to rent for $ ${op2}s$ hours is $Ars$ dollars, find $A$.`,
                    Hint: `Hint: Use cross-multiplication`,
                    Answer: `Answer:  $ ${(60*op1*op2)} rs$, so $ A = ${(60*op1*op2)}$`,
                    ans: 60*op1*op2

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
    



//4
     

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = 10*(Math.ceil(Math.random() * 5) + 1);
                op2 = (Math.ceil(Math.random() * 9) + 1)/10;
                op3 = (op1/10 + Math.ceil(Math.random() * 5) + 1)*10;
                opA = op3*op2;
    

                return {
                    ques:` The cost of bananas is b bananas per dollar. If $${op1}m$ bananas cost $Am/b$ dollars, find $A$.`,
                    Hint: `Hint: Use cross-multiplication`,
                    Answer: `Answer:  $ ${op1}m/b$, so $A = ${op1}$`,
                    ans: op1

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },

//4



{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op_speed = (Math.ceil(Math.random() * 4) + 3)*10;
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = op_speed*op1*365*60*60;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                topic = ["English", "History", "Biology", "Physics", "Chemistry", "soccer", "baseball", "basketball"];
               
                pick = topic[Math.floor(Math.random() *  topic.length )];

                return {
                    ques:` The distance of Planet A's orbit around the sun is ${op2}. If its take the planet ${op1} years to orbit around the sun. What is it's speed in km per second?`,
                    Hint: `Hint:  speed = distance/time; time in seconds = years*365*24*60*60`,
                    Answer: `Answer:  $${op_speed}$ km per second`,
                    ans: op_speed

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },

 


//4

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = 10*(Math.ceil(Math.random() * 5) + 1);
                op1_mult = (Math.ceil(Math.random() * 5) + 1);
                op2 = (Math.ceil(Math.random() * 9) + 1);
                op3 = (op1/10 + Math.ceil(Math.random() * 5) + 1);
                opA = op3*op2;
                topic = ["English", "History", "Biology", "Physics", "Chemistry", "soccer", "baseball", "basketball"];
               
                pick = topic[Math.floor(Math.random() *  topic.length )];

                return {
                    ques:` Out of ${op1*op1_mult} students surveyed in a school, ${op1} like ${pick}. If the school has ${op1*op3*op1_mult} students, how many students in the entire school can be 
                    estimated to like ${pick}?`,
                    Hint: `Hint: Use cross-multiplication`,
                    Answer: `Answer:  ${op1*op3}`,
                    ans: op1*op3

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },





//4

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = (Math.ceil(Math.random() * 5) + 1);
                op2 = (Math.ceil(Math.random() * 5) + 1);
                op3 = (op1/10 + Math.ceil(Math.random() * 5) + 1)*10;
                opA = op3*op2;
    

                return {
                    ques:` $ ${op1*op2} c$ pencils cost $ ${op1} d$ cents. The unit rate of each pencil in dollars is $\\dfrac{d}{Ac}$?`,
                    Hint: `Hint: Use cross-multiplication`,
                    Answer: `Answer:  $\\dfrac{d}{${100*op2}c}$, so A = $ ${op2*100}$`,
                    ans: op2*100


                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },



 
//4  

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = 10*(Math.ceil(Math.random() * 5) + 1);
                op2 = (Math.ceil(Math.random() * 9) + 1);
                op3 = (op1/10 + Math.ceil(Math.random() * 5) + 1)*10;
                opA = op3*op2;
    

                return {
                    ques:` ${op1} pens cost ${op1*op2} dollars. What is the unit rate of each pen?`,
                    Hint: `Hint: Use cross-multiplication`,
                    Answer: `Answer:  ${op1}`,
                    ans: op1

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },





 
//4


//4


//4

  {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = 10*(Math.ceil(Math.random() * 5) + 1);
                op2 = (Math.ceil(Math.random() * 9) + 1)*10;
                op3 = (op1/10 + Math.ceil(Math.random() * 5) + 1)*10;
                opA = op3*op2;
    

                return {
                    ques:` ${op1} books cost ${op1*op2}. How many books cost ${opA}?`,
                    Hint: `Hint: Use cross-multiplication`,
                    Answer: `Answer:  ${op3}`,
                    ans: op3

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },

//4




 
//4  


        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = 10*(Math.ceil(Math.random() * 5) + 1);
                op2 = (Math.ceil(Math.random() * 9) + 1)/10;
                op3 = (op1/10 + Math.ceil(Math.random() * 5) + 1)*10;
                opA = Math.round(op3*op2);
    

                return {
                    ques:` ${op1} bananas cost ${op1*op2} dollars. How much do ${op3} bananas cost?`,
                    Hint: `Hint: Use cross-multiplication`,
                    Answer: `Answer:  ${opA}`,
                    ans: opA

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
     





         
        // 4.1
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 3; op2 = Math.ceil(Math.random() * 5) + 1; op3 = op2+ Math.ceil(Math.random() * 5) + 1;
                op4 = op2+ Math.ceil(Math.random() * 9) + 3; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$${op1*op2}$ apples cost $\\$ ${op1*op3}$. How much do $${op2*op4}$ apples cost?`,
                    Hint: `Hint: $ \\frac{${op1*op2}} {${op1*op3}} = \\frac{${op2*op4}}{x} $ `,
                    Answer: `Answer:  $ ${op3*op4}  $`,
                    ans: op3*op4
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   





//5


{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 3) + 1;
                op2 = Math.ceil(Math.random() * 3) + 1;
                op3 = Math.ceil(Math.random() * 4) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = op4+ Math.ceil(Math.random() * 4) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                opg = op5*op6-op2
                ansr = op4*op6-op1;
    

                return {
                    ques:`In a class there are ${op1} boys and ${op2} girls. ${opg} more girls enter the class. How many boys need to enter the class so the that ratio of boys to girls is  $ \\dfrac{${op4}}{${op5}} $`,
                    Hint: `Hint: Let the boys be $x$...`,
                    Answer: `Answer: ${ansr} `,
                    ans: ansr  


                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },



   


//5
{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 3) + 1;
                op3 = Math.ceil(Math.random() * 4) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ans = (op3*(1+op1/100)*(1+op2/100)).toFixed(2);
    

                return {
                    ques:`In the formula, $A = b/c^${op2}$, $c$ becomes $ ${op1}c$. Now if the value of A is unchanged, the value of $b$ becomes $Mb$. Find $M$.`,
                    Hint: `Hint: Let the original value of c be equal to 1`,
                    Answer: `Answer: $b$ changes to $  ${Math.pow(op1,op2)}b $, so $M = ${Math.pow(op1,op2)}$`,
                    ans: Math.pow(op1,op2)  

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
//5




{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 3) + 1;
                op3 = Math.ceil(Math.random() * 4) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ans = (op3*(1+op1/100)*(1+op2/100)).toFixed(2);
    

                return {
                    ques:`In the formula, $A = b^${op2}/c$, $b$ becomes $ ${op1}b$. Now if the value of A is unchanged, the value of $c$ becomes $Mc$. Find $M$.`,
                    Hint: `Hint: Let the original value of c be equal to 1`,
                    Answer: `Answer: c changes to $  ${Math.pow(op1,op2)}c $, so $M = ${Math.pow(op1,op2)} $`,
                    ans: Math.pow(op1,op2)  

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
 
//5

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 6) + 1;
                op2 = Math.ceil(Math.random() * 6) + 1;
                op3 = Math.ceil(Math.random() * 6) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ans = (op3*(1+op1/100)*(1+op2/100)).toFixed(2);
    

                return {
                    ques:`In the formula, $A = b^${op2}/c^${op3}$. If $c$ becomes $ ${op1}c$, value of $A$ becomes $A/M$. Find $M$.`,
                    Hint: `Hint: Let the original value of c be equal to 1`,
                    Answer: `Answer: it changes to $  A/${Math.pow(op1,op3)}$, so $M = ${Math.pow(op1,op3)} $`,
                    ans: Math.pow(op1,op3)

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
   

//5
{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 3) + 1;
                op3 = Math.ceil(Math.random() * 4) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ans = (op3*(1+op1/100)*(1+op2/100)).toFixed(2);
    

                return {
                    ques:`In the formula, $A = b^${op2}/c^${op3}$, $b$ becomes $ ${op1}b$. If the value of $A$ changes to $MA$, find $M$.`,
                    Hint: `Hint: Let the original value of b be equal to 1`,
                    Answer: `Answer: it changes to $  ${Math.pow(op1,op2)}A $, so $M =  ${Math.pow(op1,op2)}$`  ,
                    ans: Math.pow(op1,op2)

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },

//5

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = 10*(Math.ceil(Math.random() * 5) + 1);
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ansr = (op3*(1+op1/100)*(1+op2/100)).toFixed(2);
    

                return {
                    ques:`The width of a rectangle is increased by ${op1}% and the height is increased by ${op2}%. If the original area is ${op3}, what is the area of the new rectangle? Round to 2 decimal places.`,
                    Hint: `Hint: Let each side be equal to 1`,
                    Answer: `Answer: $ ${ansr} $`  ,
                    ans: ansr
                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },

 

//5
{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ansr = ((1+op1/100)*(1+op2/100)).toFixed(2);
    

                return {
                    ques:`The width of a rectangle is increased by ${op1}% and the height is increased by  ${op2}% What is the ratio of the area of the new rectangle to the area of the original rectangle Round to 2 decimals`,
                    Hint: `Hint: Let each side be equal to 1`,
                    Answer: `Answer: $ ${ansr} $`,
                    ans: ansr  

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
 
//5

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ansr = ((1+op1/100)*(1+op1/100)*(1+op1/100)).toFixed(2);
    

                return {
                    ques:`The side of a cube is increased by ${op1}%. What is the ratio of the volume of the new cube to the volume of the original cube? Round to 2 decimals`,
                    Hint: `Hint: Let each side be equal to 1`,
                    Answer: `Answer: $ ${ansr} $`,
                    ans: ansr  

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
  
//5//5

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ansr = ((1-op1/100)*(1-op1/100)).toFixed(2);
    

                return {
                    ques:`The side of a square is decreased by ${op1}%. What is the ratio of the area of the new square to the area of the original square? Round to 2 decimals.`,
                    Hint: `Hint: Let each side be equal to 1`,
                    Answer: `Answer: $ ${ansr} $`,
                    ans: ansr  

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },



//5

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ansr = ((1+op1/100)*(1+op1/100)).toFixed(2);
    

                return {
                    ques:`The side of a square is increased by ${op1}%. What is the ratio of the area of the new square to the area of the original square? Round to 2 decimal places.`,
                    Hint: `Hint: Let each side be equal to 1`,
                    Answer: `Answer: $ ${ansr} $` ,
                    ans: ansr 

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },

//5

{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                ansr = (op7*op1*op3*op5/(op2*op4*op6)).toFixed(2);
    

                return {
                    ques:` ${op1} dollars = ${op2} euros  <br> ${op3} dinars = ${op4} kronas <br>  ${op5} euros = ${op6} dinars<br> ${op7} kronas are equivalent to how many dollars? Round to 2 decimals.`,
                    Hint: `Hint: Use dimensional analysis to guickly get to the answer`,
                    Answer: `Answer: $\\dfrac{ ${op7*op1*op3*op5} }  { ${op2*op4*op6} } $. Rounded to 2 decimals becomes $${ansr}$`  ,
                    ans: ansr
                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },




        // 5.1
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = op1+ Math.ceil(Math.random() * 5) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `The ratio of pens to pencils that you bought is $${op1}$ to $${op2}$. If you bought $${op2*op3}$ pencils, how many pens did you buy?`,
                    Hint: `Hint: Rewrite the ratio as: $ ${op1*op3} : ${op2*op3}$ `,
                    Answer: `Answer:  $ ${op1*op3}  $`,
                    ans: op1*op3
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

             
           
 
        // 5.2
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1; op2 = op1 + Math.ceil(Math.random() * 5) + 1; op3 = op2+ Math.ceil(Math.random() * 2) + 1;
                op4 = Math.ceil(Math.random() * 3) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `You buy a few items. The ratio of pens to pencils is $ ${op1}:${op2}$, and ratio of pencils to erasers is $${op4*op2}:${op4*op3}$. If the total numbers of items is $${ (op1*op4 + op2*op4 + op3*op4)*op5 }$, how many erasers are bought?`,
                    Hint: `Hint: Rewrite the ratio as: $ ${op4*op1}: ${op4*op2}:${op4*op3}$ `,
                    Answer: `Answer:  $ ${op4*op3*op5}  $`,
                    ans: op4*op3*op5
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
   
  
        // 5.3
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 20) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `If the radius of a circle is decreased by $${op1}$%, the area of the circle decreases by what percent?. Round to 2 decimals.`,
                    Hint: `Hint: New Area =  $(1-${op1/100})^2$    Old Area`,
                    Answer: `Answer:  $ ${  Math.round((Math.pow(1-op1/100,2)-1)*10000)/100}  $`,
                    ans:  (Math.round((Math.pow(1-op1/100,2)-1)*10000)/100).toFixed(2)
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
  
        // 5.4
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `If the length of a rectangle is increased by $${op1}$% and the width is decreased by $${op2}$%, then the area of the rectangle is changed by what percent?`,
                    Hint: `Hint: New Area =  ($1+${op1}$%) ($1-${op2}$%)   Old Area`,
                    Answer: `Answer:  $ ${Math.round(   ((1+op1/100)*(1-op2/100)-1)*10000  )/100  }  $`,
                    ans: (Math.round(   ((1+op1/100)*(1-op2/100)-1)*10000  )/100).toFixed(2)
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
 
        // 5.5
 
 {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1; op2 = Math.ceil(Math.random() * 10) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                f = reduce(op2, op1**2);
                return {
                    ques: `In the equation, $F = \\frac{q_{1}q_{2}}{r^{2}}$, if $r$ becomes $${op1}r$, $q_{1}$ becomes $${op2}q_{1}$ and $q_{2}$ remain unchanged, then $F$ becomes $\\dfrac{aF}{${f[1]}} $. What is $a$?`,
                    Hint: `Hint: $ \\frac{${op2}}{${op1}^{2}}$ `,
                    Answer: `Answer:  F becomes $ \\frac{${f[0]}}  {${f[1]}}F  $, so $a = ${f[0]} $`,
                    ans: f[0]
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          }, 


      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$$F = \\frac{q_{1}q_{2}}{r^{2}}$$ If $r$ becomes $${op1}r$, and $q_{1}$ and $q_{2}$ remain unchanged, then $F$ becomes $F/B$. What is $B$?`,
                    Hint: `Hint: $ \\frac{F}{${op1}^{2}}$  `,
                    Answer: `Answer:  $ \\frac{F}{${Math.pow(op1,2)}}   $ so $B = ${Math.pow(op1,2)}$`,
                    ans: Math.pow(op1,2)
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

  
        // 5.6
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `The area of a square $A$ becomes $${op1}A$. The length of each side has increased by what percent?`,
                    Hint: `Hint: $(length)^2 = ${op1}$. Then find the percent increase. `,
                    Answer: `Answer:  $ ${Math.round((Math.pow(op1,0.5)-1)*10000)/100 }  $`,
                    ans: Math.round((Math.pow(op1,0.5)-1)*10000)/100 
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

  




          
     // 6.1
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                op7 = Math.ceil(Math.random() * 9) + 1; op8 = Math.ceil(Math.random() * 9) + 1; op9 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$$ ${op1}(${op2}x^2 -${op3}x^2y^2 - ${op4}y^2) - ${op5}(${op6}x^2 + ${op7}x^2y^2 - ${op8}y^2)$$What is the coefficient of $x^2y^2$ in the expression above?`,
                    Hint: `Hint: Distribute and then compare coefficients `,
                    Answer: `Answer:  $ ${op1*op2-op5*op6}  $`,
                    ans: op1*op2-op5*op6
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   




        // 6.2
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$$ ${op1}(${op2}x+${op3})(${op4}x- ${op5}) = ax^2 + bx + c$$What is the value of $a$?`,
                    Hint: `Hint: Distribute and then compare coefficients `,
                    Answer: `Answer:  $ ${op1*op2*op4}  $`,
                    ans: op1*op2*op4
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
 

  

{
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$$ ${op1}(${op2}x+${op3})(${op4}x- ${op5}) = ax^2 + bx + c$$What is the value of $b$?`,
                     Hint: `Hint: Distribute and then compare coefficients `,
                    Answer: `Answer:  $ ${op1*(-op2*op5 + op3*op4)}  $`,
                    ans: op1*(-op2*op5 + op3*op4)
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   


     

{
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$$ ${op1}(${op2}x+${op3})(${op4}x- ${op5}) = ax^2 + bx + c$$What is the value of $c$?`,
                    Hint: `Hint: Distribute and then compare coefficients `,
                    Answer: `Answer:  $ ${-op1*op3*op5}  $`,
                    ans: -op1*op3*op5
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

   


        // 6.3
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$$ ${op1**2}m^{4} - ${op2**2}n^{2} = (Am^2+Bn)(Am^2-Bn) $$ What is the value of $A+B$?`,
                    Hint: `Hint: Recall:  $a^2-b^2 = (a-b)(a+b)  $`,
                    Answer: `Answer:  $ ${op1+op2}  $`,
                    ans: op1+op2
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
  

        // 6.4
       {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$$ ${(op1)**2}x^2 - ${2*(op1)*op2}xy +${op2**2} y^2 = (Ax-By)^2$$ What is the value of $A+B$?`,
                    Hint: `Hint: Recall: $ (a-b)^2 = a^2 -2ab + b^2$ `,
                    Answer: `Answer:  $ ${op1+op2}  $`,
                    ans: op1+op2
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },  
 
   

      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$$ ${(op1)**2}x^4 - ${2*(op1)*op2}x^2y^2 +${op2**2} y^4 = (Ax^2-By^2)^2$$ What is the value of $A+B$?`,
                    Hint: `Hint: Recall: $ (a-b)^2 = a^2 -2ab + b^2$ `,
                    Answer: `Answer:  $ ${op1+op2}  $`,
                    ans: op1+op2
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   
          // 6.5 -> use the 1/x example from the main file
   

        // 6.7
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: ` If $\\frac{${op1*op2} + B}{${op2}} = A + \\frac{B}{${op2}}$, what is the value of $A$?`,
                    Hint: `Hint: $ \\frac{${op1*op2} + B}{${op2}} =  \\frac{${op1*op2}}{${op2}} + \\frac{B}{${op2}} $ `,
                    Answer: `Answer:  $ ${op1}  $`,
                    ans: op1
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

          

        // 6.8
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `There are $${op1}$ houses with $${op2}$ people in each house. If $${op1*op2*op3}$ oranges are distributed equally among the people, how many oranges does each student receive?`,
                    Hint: `Hint: $ ${op1*op2*op3}/ (${op1}.${op2})$ `,
                    Answer: `Answer:  $ ${op3}  $`,
                    ans: op3
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   


             
             
        // 7.1 graph
  
        // 7.2 
      {
            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
            question: function() {
                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                return {
                    ques: `$ ${op1}(x + ${op2}y ) = ${op1 +op4}x + ${op1*op2}y - ${op3*op4} $, find the value of $x$.`,
                    Hint: `Hint: Distribute and eliminate the $y$ terms `,
                    Answer: `Answer:  $ ${op3}  $`,
                    ans: op3
                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

         /* 
        */
      
    ];   
    // export { data1 };



