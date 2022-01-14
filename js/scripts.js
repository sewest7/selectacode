$(document).ready(function() {
  $("#codeForm").submit(function(event) {

    const userCoconut = $("select#userCoconut").val();
    const userQuest = $("select#userQuest").val();
    const userColor = $("select#userColor").val();
    const userNext = $("select#userNext").val();

    const codeMatch = ("id#userNext" + "id#userQuest" + "id#userCoconut" + "id#userColor");

    if (userCoconut === 'found' && userQuest === 'camelot' && userColor === 'colorBlue' && userNext === 'assyria') {
      $('codeMatch' === 'concordeDiv');
    } else if (userCoconut === 'found' && userQuest === 'camelot' && userColor === 'colorBlue' && userNext === 'velocity') {
      $("#bridgeKeeper");
    } else if (userCoconut === 'found' && userQuest === 'camelot' && userColor === 'notBlue' && userNext === 'velocity') {
      $("#lancelotDiv");
    } else {
      $("#arthurDiv");
    }

    $("#theAnswer").text(codeMatch);
    $("#codeMatch").show();

    event.preventDefault();
      
    
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

