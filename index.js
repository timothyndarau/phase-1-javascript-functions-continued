function saturdayFun(activity = 'roller-skate') {
    if (activity === 'roller-skate') {
      return `This Saturday, I want to roller-skate!`    
    }else {
       return `This Saturday, I want to bathe my dog!`
    }
 }
 function mondayWork(activity='go to the office'){
    if(activity ==='go to the office'){
        return 'This Monday, I will go to the office.'
    }
    else{
        return 'This Monday, I will work from home.'
    }
 }
 let wrapAdjective = function() {
            return function(adjective) {
              if (adjective === "a hard worker") {
                return "You are *a hard worker*!";
              } else if (adjective === "a dedicated programmer") {
                return "You are ||a dedicated programmer||!";
              }
            };
          };

   


