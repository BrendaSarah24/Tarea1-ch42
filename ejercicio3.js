/* Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

const vecReductor=[1,2,3,4];

const resultSum=vecReductor.reduce((acumulador,value)=>acumulador+value,0);
console.log(resultSum);

const resultMul=vecReductor.reduce((acumulador,value)=>acumulador*value,1);
console.log(resultMul);