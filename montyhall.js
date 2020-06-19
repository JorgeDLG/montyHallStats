var iterations = 1000;
//TO-DO: doors as int 1,2,3 ¡NOT 3 vars!
var results = new Array(); //inside array = [bool(doorChanged),bool(win)];

for (var i = 0; i < iterations; i++) {
  play(i+1);
}
statsFor(results);

function statsFor(res) {
  var n = 0;
  res.forEach(game =>{ // [doorChanged, win]
    if (game[0] == false && game[1] == true) {
      n++; 
    }
  });
  console.log("1000 GAMES, "+n+" wins without change the door");  
}

function play(numberOfGame) {
  console.log("---GAME "+numberOfGame+"---");
  var a = false, b = false, c = false; //doors, true selected
  var doors = new Array(3);
  var contestantSel = null;
  var doorOpen = null;
  var doorChanged = null; //boolean
  var win = null; //boolean

  //Put car behind the door
  switch (getRand(1,3)) {
    case 1:
     a = true; 
      console.log("car on a");
      break;
    case 2:
     b = true; 
      console.log("car on b");
      break;
    case 3:
     c = true; 
      console.log("car on c");
      break;
    
    default:
      console.log("error putting car");
  }
  doors = [a,b,c];
  
  //contestant selection
  switch (getRand(1,3)) {
    case 1:
     contestantSel = 'a'; 
      console.log("contestant select a door");
      break;
    case 2:
     contestantSel = 'b'; 
      console.log("contestant select b door");
      break;
    case 3:
     contestantSel = 'c'; 
      console.log("contestant select c door");
      break;
    
    default:
      console.log("error contestant selection");
  }
  
  //open 1 goat door
  if (contestantSel == 'a') { //b,c
    doorOpen = getRand(1, 2) == 1 ? 'b' : 'c'
      console.log("door opened "+doorOpen);
  
  }else if(contestantSel == 'b'){ //a,c
    doorOpen = getRand(1, 2) == 1 ? 'a' : 'c'
      console.log("door opened "+doorOpen);
  
  }else{ //a,b
    doorOpen = getRand(1, 2) == 1 ? 'a' : 'b'
      console.log("door opened "+doorOpen);
  }
  
  //Ask for door change
  doorChanged = getRand(1, 2) == 1 ? false : true
  
  if (doorChanged) {
    contestantSel = changeDoor(contestantSel,doorOpen);
    console.log("contestant change the door to "+contestantSel);
  }
  
  win = endGame(contestantSel,doors); // bool
  
  let resBooleanArr = [doorChanged,win];
  results.push(resBooleanArr);

}//end play()


////////////////////////////////////// FUNCTIONS ///////////////////////////////////
function endGame(sel,doors) {
  if (sel == 'a') {
   sel = 1; 
  }else if(sel == 'b') {
    sel = 2;
  }else{
    sel = 3;
  }
  return doors.indexOf(true)+1 == sel ? true : false
}

function changeDoor(contestantSel,doorOpen) {
  switch (doorOpen) {
    case 'a':
      return contestantSel == 'b' ? 'c' : 'b'
      break;
    case 'b':
      return contestantSel == 'a' ? 'c' : 'a'
      break;
    case 'c':
      return contestantSel == 'a' ? 'b' : 'a'
      break;
    
    default:
      console.log("error on changeDoor()");
  }
}
function getRand(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min) ;
}
