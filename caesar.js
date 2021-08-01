function encrypt() {
  var text = document.getElementById("text").value.toUpperCase();
  //   console.log(text);
  var key = document.getElementById("key").value;
  //   console.log(key);
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var charCode = char.charCodeAt(0);
    // console.log(charCode);
    var newCharCode = parseInt(charCode) + parseInt(key);
    // console.log(newCharCode);
    // if (newCharCode > 255) {
    //   newCharCode = newCharCode - 256;
    // }
    if (newCharCode == 32 + parseInt(key)) {
      result += " ";
    } else if (newCharCode > 90) {
      newCharCode = (newCharCode % 90) + 64;
      result += String.fromCharCode(newCharCode).toUpperCase();
    } else {
      result += String.fromCharCode(newCharCode).toUpperCase();
    }
  }
  //   console.log(result);
  document.getElementById("result").innerText = result;
}

function decrypt() {
  var text = document.getElementById("text").value.toUpperCase();
  //   console.log(text);
  var key = document.getElementById("key").value;
  //   console.log(key);
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var charCode = char.charCodeAt(0);
    // console.log(charCode);
    var newCharCode = parseInt(charCode) - parseInt(key);
    if (newCharCode == 32 - parseInt(key)) {
      result += " ";
    } else if (newCharCode < 64) {
      newCharCode = (newCharCode % 64) + 90;
      result += String.fromCharCode(newCharCode).toUpperCase();
    } else {
      result += String.fromCharCode(newCharCode).toUpperCase();
    }
  }
  //   console.log(result);
  document.getElementById("result").innerText = result;
}
