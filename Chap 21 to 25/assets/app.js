// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your First Name ");
// var lastName = prompt(" Enter your Last Name ");
// var fullName = firstName + lastName;
// document.write(fullName); 


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var phoneModel = prompt("Enter your favourite Mobile phone model");
// var phoneOfLength = phoneModel.length;
// document.write("My favourite Phone is  " + phoneModel + "<br>" + "Length of User Input model is  " + phoneOfLength) 


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var indexWord = "Pakistani";
// var index = indexWord.indexOf("n");
// document.write(indexWord + "<br>" + "Index of 'n' :"  + index);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var indexWord = "Hello World";
// var index = indexWord.lastIndexOf('l');
// document.write(indexWord + "<br>" + "The Last index of 'l' :" + index);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var indexWord = "Pakistani";
// var index = indexWord.charAt("3");
// document.write(indexWord + "<br>" + "The Character at 3rd index is:  " + index) 

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your First Name ");
// var lastName = prompt(" Enter your Last Name ");
// var fullName = firstName.concat(lastName);
// document.write(fullName); 

// 7. Write a program to replace the “Hyder” to “Islam” in the  word “Hyderabad” and display the result in your browser.

// var cityName = "Hyderabad";
// var replacing = cityName.replace("Hyderabad","Islamabad")
// document.write("City :" + cityName + "<br>" + "After replacement: " + replacing); 


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and  football together.”; 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message +"<br>") ; 
// var messageReplace = message.replace(/and/g,"&")
// document.write(messageReplace); 


// 9. Write a program that converts a string “472” to a number  472. Display the values & types in your browser.
// var stringNum = "472";
// var number = Number(stringNum);
// document.write("Value: " + stringNum + "<br> "+ "Type : " + typeof stringNum + "<br>" );
// document.write("Value: " + number + "<br> "+ "Type : " + typeof number + "<br>" ); 


// 10. Write a program that takes user input. Convert and  show the input in capital letters. 
// var userInput = prompt("Enter your favourite fruit name in small letters");
// var caseChange = userInput.toUpperCase();
//  document.write("User Input :" + userInput + "<br> ");
// document.write("Upper Case : " + caseChange);


// 11. Write a program that takes user input. Convert and  show the input in title case. 


// var userInput = prompt("Enter a sentence");

// var firstChar = userInput.slice(0,1);
// var otherChar = userInput.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// var mixed = firstChar + otherChar;
// document.write(mixed) 



// 12. Write a program that converts the variable num to  string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
// var number1 = 35.36;
// var withoutDot = number1.toString().replace(".","");
// document.write("Number : " + number1 +"<br> ") 
// document.write("Result : " + withoutDot) 


// 13. Write a program to take user input and store username  in a variable. If the username contains any special symbol  among [@ . , !], prompt the user to enter a valid username.  For character codes of [@ . 
//     Note: 
//     ASCII code of ! is 33 
//     ASCII code of , is 44 
//     ASCII code of . is 46 
//     ASCII code of @ is 64 

// var userInput = prompt("Enter your Username");
// var characterCode = userInput.charCodeAt(0);
// for(var i = 0; i < userInput.length; i++){
//      characterCode = userInput.charCodeAt(i);
//      if(characterCode === 64 || characterCode === 33 || characterCode === 44 || characterCode === 46){
//         alert("Please enter a valid username!");
//         break
//      } 
// }



//     14. You have an array 
//     A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//     Write a program to enable “search by user input” in an  array. After searching, prompt the user whether the given  item is found in the list or not. 
//     Note: Perform case insensitive search. Whether the user  enters cookie, Cookie, COOKIE or coOkIE, program  should inform about its availability. Example:
    
// var array = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("What do you want to order ?");
// var flag = false;
// userInput = userInput.toLowerCase();
// for(var i = 0; i < array.length; i++){
//    if( userInput=== array[i]){
//     document.write(array[i] + " is available at index " +  i + " in our bakery")
//     flag = true
//    }
// }
// if (flag=== false){
//     document.write("We are sorry " +  userInput + " is not available in our bakery"   )
// }


//     15. Write a program to take password as an input from  user. The password must qualify these requirements: a. It should contain alphabets and numbers 
//     b. It should not start with a number 
//     c. It must at least 6 characters long 
//     If the password does not meet above requirements, prompt the user to enter a valid password. 
//     For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 

function validatePassword() {
    var password = prompt("Enter a password:");
  
    // Check if the password contains alphabets and numbers
    var hasAlphabet = /[a-zA-Z]/.test(password);
    var hasNumber = /\d/.test(password);
  
    // Check if the password starts with a letter
    var startsWithLetter = /^[a-zA-Z]/.test(password);
  
    // Check if the password is at least 6 characters long
    var isLengthValid = password.length >= 6;
  
    // Validate the password
    if (hasAlphabet && hasNumber && startsWithLetter && isLengthValid) {
      console.log("Password is valid!");
    } else {
      console.log("Password is invalid. Please enter a valid password.");
      validatePassword(); // Prompt the user to enter a valid password recursively
    }
  }
  
  // Call the function to validate the password
  validatePassword();
  





//     16. Write a program to convert the following string to an  array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser.

// var university = ("UNIVERSITY OF KARACHI");
// var array = university.split("");
// for(var i = 0; i < array.length; i++){
//     document.write(array[i]);
// }


// 17. Write a program to display the last character of a user  input.

// var userInput = prompt("Write any word");
// var lastChar =userInput[userInput.length -1];
// document.write("User input " + userInput + "<br>" + "Last character of input:" + lastChar); 




// // 18. You have a string “The quick brown fox jumps over the  lazy dog”. Write a program to count number of  
// // occurrences of word “the” in given string.

// var string = "The quick brown fox jumps over the lazy dog";
// string = string.toLowerCase();
// var findThe = string.split("the").length - 1;
// document.write("Text: " + string +"<br>" + " There are " + findThe + " occurence(s) of word 'the' " ); 


    


