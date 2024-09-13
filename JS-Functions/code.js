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

/**
 * write a switch statement for Mr O.Zibeke for the following days
 * Monday & Tuesday - (Zoom meeting: 10:00 am) Soccer Training at 15:00 pm
 * Wednesday - coding sections from 09:am to 15:30 pm
 * Thurday & Friday - coding section from 10:00 am 
 * Startuday - coding section at 15:30 pm
 * Sunday - Resting day
 */
let day = 'Monday';
switch(day){
    case 'Monday':
    case 'Tuesday':
        console.log('Zoom meeting at 10:00 am and Soccer Training at 15:00 pm');
        break;
    case 'Wednesday':
        console.log('Coding section at 09:00 am to 15:30 pm');
        break;
    case 'Thursday':
    case 'Friday':
        console.log('Coding section at 10:00 am');
        break;
    case 'Staturday':
        console.log('Coding section at 15:30 pm');
        break;
    case 'Sunday':
        console.log('Resting day');
    default:
        console.log('Invalid day'); 
}
