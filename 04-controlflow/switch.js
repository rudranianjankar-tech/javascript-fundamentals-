//A switch statement is used when you want 
// to compare one variable against multiple possible values.
//  It is often cleaner than writing many if...else if conditions.

const month = "march"

switch(month){
    case "jan":
        console.log("january");
        break;
    
    case"feb":
        console.log("feb");
        break;

     case "march":
        console.log("march");
        break;
        
    case "april":
        console.log("april");
        break;

    default:
        console.log("wrong month");
        break;
    
}