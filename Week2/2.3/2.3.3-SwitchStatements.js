let day = 1; // You can reassign day to any number from 0 to 6 to test the result
let dayName = `Today`;

switch (day) {
  case 0:
    dayName = `Today is Sunday`;
    break;
  case 1:
    dayName = `Today is Monday`;
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    dayName = `Today is Wednesday`;
    break;
  case 4: {
    const message = `Today is Thursday`;
    console.log(message);
    break;
  }
  case 5: {
    const message = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  }
  case 6:
    alert(`It's the Weekend !!`);
    dayName = `Today is Saturday`;
    break;
  default:
    console.log(`Invalid day value! Are you living in a parallel universe?`);
    break;
}

if (dayName !== 'Today') {
  console.log(dayName);
}
