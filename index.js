// Function to implement Saturday fun activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function to implement Monday work activity
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function that returns a function with a visual flair
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage of the functions
  console.log(saturdayFun()); //=> "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("hike")); //=> "This Saturday, I want to hike!"
  
  console.log(mondayWork()); //=> "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); //=> "This Monday, I will work from home."
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); //=> "You are !!!a dedicated programmer!!!"
  console.log(wrapAdjective("%")("a dedicated programmer")); //=> "You are %a dedicated programmer%!"
  
