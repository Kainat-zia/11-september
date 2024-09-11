
// //  chp 83


// function registrationForm(){
//     let Name = document.getElementById('name').value
//     let  Contact= document.getElementById('contact').value
//     let Email = document.getElementById('email').value
//     let Password = document.getElementById('password').value
//     let Confirm_Password = document.getElementById('conf_pass').value
    
//     if(Name==""||Contact==""||Email==""|| Password==""||Confirm_Password==""){
//         alert("All Field are Mandatory to fill")
//         return false;
//     }
//     else if(Contact.lenth>10 || Contact.length<10){
//         alert("number should be of 10 digits")
//         return false
//     }
//     // else if(Password =!Confirm_Password){
//     //     alert("Enter the same password")
//     //     return false 
//     // }
//     else if(isNaN (Contact)){
//         alert("enter the digits in numbers")
//         return false
//     }
//     else{
//     return true;
//     }
//      }


// //  chp 84
// // function checkForSelection()
// //  { if (document.getElementById("states").selectedIndex === 0)
// //   {     alert("Please select a state."); 
// //    return false;  }  }


// //  chp 87


// //  to handle the error through try and catch error
// function greetWorld() { 
//     try{
//      let greeting = "Hello world!"; 
     
//      aler(greeting); 
//      }
    
//      catch(error){
//   alert (error)
//      }}
//      greetWorld()


    //  error handling try and catch error
    // try code: execute krayga

    let a = +prompt("enter a digit")
    let b= +prompt("enter a digit")
    if(isNaN(a) || isNaN(b)){
        throw SyntaxError("sorry this is not allowed")
    }
    let sum = a + b
    console.log("the sum of: " + a + b);
    

    // try ki script jb chlti hai jb true hoti h
    // try{
    //  console.log("hellow world");
    //  Registration()
    //  console.log("jas");
    // }
    // catch(err){
    //     // console.log("function is calling is not exists");
    //     console.log(err);
    // }


    //  catch is like if else condition

    // function greetWorld() { 
    //     try{
    //     var greeting = "Hello world!"; 
         
    //      alert(greeting); 
    //      throw "syntax error"
    //      }
        
    //      catch(error){
    //         console.log(error);
    //      }}
    //      greetWorld()

        //  throw is a custom error

// function checkPassword() {
// try {   
// var pass = document.getElementById("f1").value;
//  if (pass.length < 8)
//   {throw "Please enter at least 8 characters.";} 
//    if (pass.indexOf(" ") !== -1) { 
//      throw "No spaces in the password, please.";} 
//      var numberSomewhere = false;
//         for (var i = 0; i < pass.length; i++) { if (isNaN(pass(i, i+1)) === false) { numberSomewhere = true; break; } }
//          if (numberSomewhere === false) { throw "Include at least 1 number."; 
//          }}   catch(err ) {  alert(err );  
//         }}
