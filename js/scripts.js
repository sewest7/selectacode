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
    const userName = $("input#userName").val();

    if (userCoconut === 'found' && userQuest === 'camelot') {
      $("#concordeDiv").toggle();
    } else if (userCoconut === 'found' && userQuest === 'seekGrail') {
      $("#bridgeKeeper").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'camelot') {
      $("#lancelotDiv").toggle();
    } else {
      $("#arthurDiv").toggle();
    }

    $(".userName").text(userName);

    $("#codeMatch").show();
    
  });
});

