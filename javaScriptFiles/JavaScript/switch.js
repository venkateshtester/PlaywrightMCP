//switch case
function daysOfWeek(numberDay){
    let day;
    switch (numberDay) {
        case 0:
            day= "Sunday"
            break;
        case 1:
            day= "Monday"
            break;
        case 2:
            day= "Tuesday"
            break;
        case 3:
            day= "Wednesday"
            break;
        case 4:
            day= "Thursday"
            break;
        case 5:
            day= "Friday"
            break;
        case 6:
            day= "Saturday"
            break;
    
        default:
            console.log("Invalid day");
            break;
    }

    return day;
}

console.log(daysOfWeek(4));