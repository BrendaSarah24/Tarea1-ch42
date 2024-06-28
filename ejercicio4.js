/* let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
let result=[];
for (let i=0;i<=student1Courses.length-1;i++){
    for(let j=0;j<=student2Courses.length-1;j++){
        if(student1Courses[i]==student2Courses[j]){
            result.push(student1Courses[i]);
        }
    }
}

console.log(result);