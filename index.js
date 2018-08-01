var katzDeli = [];
  
function takeANumber(katzDeliLine) {
   var i = 0
   katzDeliLine.push(i++);
   return `Welcome, you are number ${katzDeliLine.length} in line.`;
}
  

function nowServing(katzDeliLine) {
 if (katzDeliLine.length > 0) {
 var firstPerson = katzDeliLine.shift()
 return `Currently serving ${firstPerson}.`;
 } else {
     return 'There is nobody waiting to be served!';
    }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else if (line.length > 0) {
    var newCurrentLine = [];
  for (var i = 0; i < line.length; i++) {
    newCurrentLine.push(` ${i + 1}. ${line[i]}`);
      }
  return `The line is currently:${newCurrentLine}`;
//=======
   // newCurrentLine.push(`${i + 1}. ${line[i]}, `);
     // }
  //return `The line is currently: ${newCurrentLine}`;
//>>>>>>> 1cdc3de4530b382e6684333d371b356dafdfd3e3
  }
}
