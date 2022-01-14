$(document).ready(function() {
  $("#codeForm").submit(function(event) {
    event.preventDefault();
    $("concordeDiv").hide();
    $("bridgeKeeper").hide();
    $("lancelotDiv").hide();
    $("arthurDiv").hide();
    $("grailDiv").hide();
    $("rabbitDiv").hide();
    $("witchDiv").hide();
    $("gallahadDiv").hide();
    $("robinDiv").hide();
    $("zootDiv").hide();
    $("blackKnight").hide();
    $("godDiv").hide();
    $("timDiv").hide();
    $("niKnight").hide();
    $("bedevereDiv").hide();
    $("frenchDiv").hide();

    const userCoconut = $("select#userCoconut").val();
    const userQuest = $("select#userQuest").val();
    const userColor = $("select#userColor").val();
    const userNext = $("select#userNext").val();

    if (userCoconut === 'found' && userQuest === 'camelot' && userColor === 'colorBlue' && userNext === 'assyria') {
      $("#concordeDiv").toggle();
    } else if (userCoconut === 'found' && userQuest === 'camelot' && userColor === 'colorBlue' && userNext === 'velocity') {
      $("#bridgeKeeper").toggle();
    } else if (userCoconut === 'found' && userQuest === 'camelot' && userColor === 'notBlue' && userNext === 'velocity') {
      $("#lancelotDiv").toggle();
    } else if (userCoconut === 'found' && userQuest === 'seekGrail' && userColor === 'colorBlue' && userNext === 'velocity') {
      $("#rabbitDiv").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'seekGrail' && userColor === 'colorBlue' && userNext === 'velocity') {
      $("#arthurDiv").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'seekGrail' && userColor === 'colorBlue' && userNext === 'assyria') {
      $("#grailDiv").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'seekGrail' && userColor === 'notBlue' && userNext === 'assyria') {
      $("#witchDiv").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'camelot' && userColor === 'notBlue' && userNext === 'assyria') {
      $("#gallahadDiv").toggle();
    } else if (userCoconut === 'found' && userQuest === 'seekGrail' && userColor === 'colorBlue' && userNext === 'assyria') {
      $("#robinDiv").toggle();
    } else if (userCoconut === 'found' && userQuest === 'seekGrail' && userColor === 'notBlue' && userNext === 'assyria') {
      $("#zootDiv").toggle();
    } else if (userCoconut === 'found' && userQuest === 'seekGrail' && userColor === 'notBlue' && userNext === 'velocity') {
      $("#blackKnight").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'seekGrail' && userColor === 'notBlue' && userNext === 'velocity') {
      $("#godDiv").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'camelot' && userColor === 'notBlue' && userNext === 'velocity') {
      $("#timDiv").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'camelot' && userColor === 'colorBlue' && userNext === 'velocity') {
      $("#niKnight").toggle();
    } else if (userCoconut === 'matter' && userQuest === 'camelot' && userColor === 'colorBlue' && userNext === 'assyria') {
      $("#bedevereDiv").toggle();
    } else if (userCoconut === 'found' && userQuest === 'camelot' && userColor === 'notBlue' && userNext === 'assyria') {
      $("#frenchDiv").toggle();
    }
  });
});

