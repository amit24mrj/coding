let day='Saturday';
switch(day){
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Today is a weekday.');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Today is a weekend.');
        break;
    default:
        console.log('Invalid day.');
}