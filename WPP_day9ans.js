// Question 9: Write a JavaScript program to find the closest value to 100 from two numerical values.
// Answer 9:

function closerTo100(x,y){
    const diffX = Math.abs(100-x);
    const diffY = Math.abs(100-y);
    
    if(diffX<diffY){
        console.log(`${x} is closer to 100 than ${y}.`);
    } else if(diffX>diffY){
        console.log(`${y} is closer to 100 than ${x}.`);
    } else {
        console.log(`Both x:${x} and y:${y} have same value difference with 100 and hence they both are equally closer to 100!`)
    }
}

closerTo100(90,78);
closerTo100(121,111);