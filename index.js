function shout(Sht) {
    return Sht.toUpperCase();
  }

function whisper(Whp) {
    return Whp.toLowerCase();
  }

function logShout (Lsht) {
    console.log(Lsht.toUpperCase())
}

function logWhisper(Lwhisp) {
    console.log(Lwhisp.toLowerCase())
}

function sayHiToGrandma (Gma) {

    var canthear = "I can't hear you!";
    var yes = "YES INDEED!";
    var iloveyou = "I love you, too.";

    if (Gma.toLowerCase(Gma) === Gma) {
    return canthear;
  }

    else if (Gma.toUpperCase(Gma) === Gma) { return yes;
  }

  else if ("I love you, Grandma." === Gma) { return iloveyou;
    }
}