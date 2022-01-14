$(document).ready(function() {
  $("#codeForm").submit(function(event) {
    event.preventDefault();
    $("#concordeDiv").hide();
    $("#bridgeKeeper").hide();
    $("#lancelotDiv").hide();
    $("#arthurDiv").hide();
 

    const userCoconut = $("select#userCoconut").val();
    const userQuest = $("select#userQuest").val();
    const userColor = $("select#userColor").val();
    const userNext = $("select#userNext").val();

    // let codeMatch === userCoconut && userColor && userNext && userQuest;

    if (userCoconut === 'found' && userQuest === 'camelot') {
      $("#concordeDiv").toggle();
    } else if (userCoconut === 'found' && userQuest === 'seekGrail') {
      $("#bridgeKeeper").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'camelot') {
      $("#lancelotDiv").toggle();
    } else {
      $("#arthurDiv").toggle();
    }

    // $("#theAnswer").text(codeMatch);
    $("#codeMatch").show();
    
      
    
    // if (userCoconut === 'found' && userQuest === 'seekGrail' && userColor === 'colorBlue' && userNext === 'velocity') {
    //   $("#rabbitDiv").show();
    // } 
    
    // if (userCoconut === 'matter' && userQuest === 'seekGrail' && userColor === 'colorBlue' && userNext === 'velocity') {
    //   $("#arthurDiv").show();
    // } 
    
    // if (userCoconut === 'matter' && userQuest === 'seekGrail' && userColor === 'colorBlue' && userNext === 'assyria') {
    //   $("#grailDiv").show();
    // }
    
    // if (userCoconut === 'matter' && userQuest === 'seekGrail' && userColor === 'notBlue' && userNext === 'assyria') {
    //   $("#witchDiv").show();
    // }
    
    // if (userCoconut === 'matter' && userQuest === 'camelot' && userColor === 'notBlue' && userNext === 'assyria') {
    //   $("#gallahadDiv").show();
    // }
    
    // if (userCoconut === 'found' && userQuest === 'seekGrail' && userColor === 'colorBlue' && userNext === 'assyria') {
    //   $("#robinDiv").show();
    // }
    
    // if (userCoconut === 'found' && userQuest === 'seekGrail' && userColor === 'notBlue' && userNext === 'assyria') {
    //   $("#zootDiv").show();
    // }
    
    // if (userCoconut === 'found' && userQuest === 'seekGrail' && userColor === 'notBlue' && userNext === 'velocity') {
    //   $("#blackKnight").show();
    // }
    
    // if (userCoconut === 'matter' && userQuest === 'seekGrail' && userColor === 'notBlue' && userNext === 'velocity') {
    //   $("#godDiv").show();
    // }
    
    // if (userCoconut === 'matter' && userQuest === 'camelot' && userColor === 'notBlue' && userNext === 'velocity') {
    //   $("#timDiv").show();
    // }
    
    // if (userCoconut === 'matter' && userQuest === 'camelot' && userColor === 'colorBlue' && userNext === 'velocity') {
    //   $("#niKnight").show();
    // }
    
    // if (userCoconut === 'matter' && userQuest === 'camelot' && userColor === 'colorBlue' && userNext === 'assyria') {
    //   $("#bedevereDiv").show();
    // }
    
    // if (userCoconut === 'found' && userQuest === 'camelot' && userColor === 'notBlue' && userNext === 'assyria') {
    //   $("#frenchDiv").show();
    // }


  });
});

