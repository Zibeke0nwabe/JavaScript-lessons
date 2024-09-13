/**
 * Write a JavaScript function called checkNumber that takes a number
 *  as an argument and logs whether the number is positive, negative, 
 * or zero.
 */
function checkNumber(number){
    if(number === 0){
        console.log('number is Zero')
    }else if(number < 0){
        console.log('number is nagetive')
    }else{
        console.log('number is positive')
    }
};
checkNumber(4);

/**
 * Write a JavaScript function called gradeMessage that takes a numeric 
 * grade (0-100) as an argument and returns a message based 
 * on the grade:
 */
function gradeMessage(grade){
    if(grade >= 0 && grade <= 100){
        if(grade >= 90){
            console.log('Excellent');
        }else if(grade >= 70 && grade <= 89){
            console.log('Good');
        }else if(grade >= 50 && grade <= 69){
            console.log('Average');
        }else{
            console.log('fail');
        }
    }
}
gradeMessage(20);

/**
 * Write a JavaScript function called dayName that takes a number (1-7) 
 * and returns the name of the corresponding returnof the week. 
 * Use a switch statement for this.
 */

function dayName(day){
    switch(day){
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return'Saturday';
        case 7: return 'Sunday';
        default: return 'Invalid day';
    }
}
console.log(dayName(4));