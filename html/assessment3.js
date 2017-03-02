 
  var guess = prompt("Please type in your password");
  var password = "ilovekarl";
        
        if (guess==password) {
          alert("You have been successfully logged in");
      } else{
          while (guess != password) {
            guess = prompt("Incorrect. Please try again.");
        }
        alert("You have been successfully logged in");
      }
        
