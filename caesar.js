var currentIndex = 0; //Pointing to the characters of the sorted array in frequency analysis

//Encryption Function for Caesar Cipher
function encrypt() {
  var text = document.getElementById("text").value.toUpperCase(); //Taking text value from textarea and converting it to upper case
  //   console.log(text);
  var key = document.getElementById("key").value; //Taking key value
  //   console.log(key);
  var result = ""; //Initializing result variable
  for (var i = 0; i < text.length; i++) {
    //Looping through the text
    var char = text.charAt(i); //Taking each character from the text
    var charCode = char.charCodeAt(0); //Converting each character to its ASCII value
    // console.log(charCode);
    var newCharCode = parseInt(charCode) + parseInt(key); //Adding the key to the ASCII value

    if (newCharCode == 32 + parseInt(key)) {
      //If any character is space then it will be space only
      result += " "; //Adding space to the result
    } else if (newCharCode > 90) {
      newCharCode = (newCharCode % 90) + 64; //If the ASCII value is greater than 90 then it will start once again start from ASCII value of capital A i.e. 65
      result += String.fromCharCode(newCharCode).toUpperCase(); //Converting the ASCII value to character and adding it to the result
    } else {
      result += String.fromCharCode(newCharCode).toUpperCase(); //Converting the ASCII value to character and adding it to the result
    }
  }
  //   console.log(result);
  document.getElementById("result").innerText = result; //Displaying the result in the result area at the bottom
}

//Decryption Function for Caesar Cipher
function decrypt() {
  var text = document.getElementById("text").value.toUpperCase();
  // console.log(text);
  var key = document.getElementById("key").value;
  // console.log(key);
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var charCode = char.charCodeAt(0);
    // console.log(charCode);
    var newCharCode = parseInt(charCode) - parseInt(key); //Subracting the key from the ASCII value to get the ASCII value of the decrypted character
    // console.log(newCharCode);
    if (newCharCode == 32 - parseInt(key)) {
      //Space will be space only
      result += " ";
    } else if (newCharCode <= 64) {
      newCharCode = newCharCode + 26; //If the ASCII value is less than 64 then we are adding 26 to it to get the ASCII value of the character Z i.e. 90
      // console.log(newCharCode);
      result += String.fromCharCode(newCharCode).toUpperCase();
    } else {
      result += String.fromCharCode(newCharCode).toUpperCase();
    }
  }
  // console.log(result);
  document.getElementById("result").innerText = result;
}

//Brute Force Function for Caesar Cipher
//Doing Same as Decryption Function, just we are looping key values 26 times
function bruteForce() {
  var text = document.getElementById("text").value.toUpperCase();
  //   console.log(text);
  var result = "";
  for (var i = 0; i < 26; i++) {
    //Looping through the key values
    var newText = ""; //Initializing newText variable
    for (var j = 0; j < text.length; j++) {
      var char = text.charAt(j);
      var charCode = char.charCodeAt(0);
      // console.log(charCode);
      var newCharCode = parseInt(charCode) - parseInt(i);
      if (newCharCode == 32 - parseInt(i)) {
        newText += " ";
      } else if (newCharCode <= 64) {
        newCharCode = newCharCode + 26;
        newText += String.fromCharCode(newCharCode).toUpperCase();
      } else {
        newText += String.fromCharCode(newCharCode).toUpperCase();
      }
    }
    // console.log(newText);

    document.getElementById("result").innerHTML +=
      i + " : " + newText + "<br />" + "<br />"; //(Format) Key Value : Decrypted Text
    // document.getElementById("result").innerText += newText;
    // document.getElementById("result").innerHTML += "<br />";
  }
}

//Frequency Analysis Function for Caesar Cipher
function frequencyAnalysis() {
  //Object of frequency of different characters in descending order
  // theoreticalFrequency = {
  //   e: 12.7,
  //   t: 9.06,
  //   a: 8.17,
  //   o: 7.51,
  //   i: 6.97,
  //   n: 6.75,
  //   s: 6.33,
  //   h: 6.09,
  //   r: 5.99,
  //   d: 4.25,
  //   l: 4.03,
  //   c: 2.78,
  //   u: 2.76,
  //   m: 2.41,
  //   w: 2.36,
  //   f: 2.23,
  //   g: 2.02,
  //   y: 1.97,
  //   p: 1.93,
  //   b: 1.29,
  //   v: 0.98,
  //   k: 0.77,
  //   j: 0.15,
  //   x: 0.15,
  //   q: 0.1,
  //   z: 0.07,
  // };

  theoreticalFrequencyCharCode = [
    69, 84, 65, 79, 73, 78, 83, 72, 82, 68, 76, 67, 85, 77, 87, 70, 71, 89, 80,
    66, 86, 75, 74, 88, 81, 90,
  ]; //Array of character(ASCII) codes in alphabetical order

  function getFrequency(string) {
    //Function to get frequency of each character in the text
    var freq = {}; //Initializing freq object
    for (var i = 0; i < string.length; i++) {
      //Looping through the text
      var character = string.charAt(i); //Taking each character from the text
      if (freq[character]) {
        //If the character is already present in the object
        freq[character]++; //Incrementing the frequency of the character
      } else {
        freq[character] = 1; //If the character is not present in the object then it will be added with frequency 1
      }
    }

    return freq; //Returning the frequency of characters in the text
  }

  var text = document.getElementById("text").value.toUpperCase();
  var text1 = document.getElementById("text").value.toUpperCase();
  var removeSpace = text1.split(" ").join(""); //Removing spaces from the text
  //   console.log(text);
  var frequencyObject = getFrequency(removeSpace); //Getting the frequency of each character in the text
  // console.log(frequencyObject);

  var frequencyArray = []; //Initializing frequencyArray

  for (var letter in frequencyObject) {
    //Looping through the frequencyObject
    frequencyArray.push([letter, frequencyObject[letter]]); //Pushing the character and its frequency in the frequencyArray
  }

  var sortedArray = frequencyArray.sort(function (a, b) {
    //Sorting the frequencyArray in descending order
    return b[1] - a[1];
  });

  // console.log(frequencyArray);
  // console.log(sortedArray);

  var firstChar = sortedArray[0][0]; //Taking the first character from the sortedArray
  // console.log(firstChar);

  var key =
    parseInt(firstChar.charCodeAt(0)) >=
    theoreticalFrequencyCharCode[currentIndex]
      ? parseInt(firstChar.charCodeAt(0)) -
        theoreticalFrequencyCharCode[currentIndex]
      : parseInt(firstChar.charCodeAt(0)) -
        theoreticalFrequencyCharCode[currentIndex] +
        26;
  // Calculating Key. If ASCII code of first character of sorted array is greater than ASCII code of freq char code array
  // subracting freq array from first char code gives key otherwise add 26
  // console.log(key);

  //Below code snippet is same as decryption function
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var charCode = char.charCodeAt(0);
    // console.log(charCode);
    var newCharCode = parseInt(charCode) - parseInt(key);
    console.log(newCharCode);
    if (newCharCode == 32 - parseInt(key)) {
      result += " ";
    } else if (newCharCode <= 64) {
      newCharCode = newCharCode + 26;
      // console.log(newCharCode);
      result += String.fromCharCode(newCharCode).toUpperCase();
    } else {
      result += String.fromCharCode(newCharCode).toUpperCase();
    }
  }
  // console.log(result);
  document.getElementById("result").innerText = key + " " + " : " + result;
}

//Next function if present frequency analysis doesn't make sense.
//So you can map next frequent character to the most frequent character in plain text
function Next() {
  currentIndex++; //Incrementing currentIndex
  frequencyAnalysis(); //Calling frequencyAnalysis function
}
