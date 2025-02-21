/*
P
  Input = minutes before or after midnight (negative or positive)
  Output = time of day in 24-hr format hh:mm
  REQUIREMENTS:
    - Re-implement using JS's Date object
E
D
A
  - create date object with time of midnight

  - create time delta object by doing some math with milliseconds
    - convert date to milliseconds
    - add or subtract milliseconds (per fn argument)
    - turn the result back into a date object

  - create the desired output
  
*/



// TESTS
timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"


// MY SOLUTION
function zeroPadded(int) {
  return ("00" + String(int)).slice(-2)
}

function timeOfDay(minutes) {
  const MINS_TO_MILLISECONDS = 60 * 1000  // 60 seconds per minute, 1000 milliseconds per second
  // create a date object with time at midnight
  let x = new Date(2000, 0, 1, 0, 0, 0);  // use UTC time to avoid confusion
  let timestamp = x.getTime()  // convert to timestamp
  // change the time using the provided argument
  let delta = minutes * MINS_TO_MILLISECONDS;
  timestamp += delta;
  // Create new time and extract hrs and minutes
  let new_time = new Date(timestamp)
  let hrs = zeroPadded(new_time.getHours())
  let mins = zeroPadded(new_time.getMinutes())
  
  // log the result
  console.log(`${hrs}:${mins}`);
}

