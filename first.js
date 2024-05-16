// let name = prompt("your name");

// if (name == "raxa"){
//     alert("you are the owner")
// }
// let student={
//     name:"raxa",
//     age:20,
//     flat:"fivestar",

// }


// let score = prompt("your marks");
// let grade;


// if ( score >= 90  && score <= 100)
//     {
//       grade="a";
//     }
// else if ( score >= 80  && score <= 90)
//         {
//             grade="b";
//         }
// else if ( score >= 80  && score <= 70)
//             {
//                 grade="c";
//             }
// else {
//                     grade="d";
//                 }
//                 console.log( grade, "your garde is");
                

// for(
//     let age = 1; age <=20; age++ 
// )
// {
//     console.log("raxa");
// }
// console.log("loop has ended");

// let sum =0;
// for(
//     let age = 1; age <=20; age++ 
// )
// {
//     sum = sum + age;
//     console.log(sum, "sum");
// }
// console.log("loop has ended");


// for (let num=2; num<=100; num++){  
//    if (num%2 !== 0)
//     {
//         console.log(num)
//     }
// }

// let gameNum = 25;

// let userNum =  prompt("guess the number : ");

// while ( userNum != gameNum){
//     userNum = prompt("you entered wrong number guess correct : ");
// }
//  console.log("congratulation you won");

// let namee = prompt ("enter your name");

// let username = "@" + namee + namee.length;
// console.log(username);
// let student = ["raxa" , "hassan" , "mohsin"];

// console.log(student.length)




// let game = prompt("enter ek machli");
// let sec = "pani mai gyi"

// if (game == "ek machli" ){
//     alert("pani mai gyi")

// }
// else (game != "ek machli")
//  {  alert("its not part of our game")   }

   
// aminemangwaya.splice(0 , 1);
// aminemangwaya.splice(1 , );
// aminemangwaya.push("winner");
// console.log(aminemangwaya);


// let home= document.getElementsByClassName(".do");


// console.log (home);
// let home = document.querySelector("h2");

// let hom = document.querySelectorAll(".home")
// let name=""

// for (let i=0; i<hom.length; i++){
//     if(i == 0){ 
//         name= hom[i];
//         if (name.innerText == "raxa1"){
//             name.style.color="red"
//         }
//         console.log("at index ",i, name)
//     }
//     else if(i == 1){
//         console.log("at index ",i, hom[i])
//     }
// }
const textDisplay = document.getElementById('text-display');

document.getElementById('button1').addEventListener('click', () => {
  textDisplay.textContent = "Our First Imam is Ali ibn Abi Talib A.S";
});

document.getElementById('button2').addEventListener('click', () => {
  textDisplay.textContent = "Our Second Imam is Hasan ibn Ali A.S";
});
document.getElementById('button3').addEventListener('click', () => {
    textDisplay.textContent = "Our Third Imam is Hussain ibn Ali A.S";
  });
  
  document.getElementById('button4').addEventListener('click', () => {
    textDisplay.textContent = "Our fourth Imam is zain ul abideen A.S" ;
  });
 
  document.getElementById('button5').addEventListener('click', () => {
    textDisplay.textContent = "Our fifth Imam is muhammad baqir A.S";
  });
 
  document.getElementById('button6').addEventListener('click', () => {
    textDisplay.textContent = "Our sixth Imam is jaffer e sadiq A.S";
  });
 
  document.getElementById('button7').addEventListener('click', () => {
    textDisplay.textContent = "Our seven Imam is musa qazim A.S";
  });
 
  document.getElementById('button8').addEventListener('click', () => {
    textDisplay.textContent = "Our eighth Imam is ali raza A.S";
  });
 
  document.getElementById('button9').addEventListener('click', () => {
    textDisplay.textContent = "Our ninth Imam is muhammad taqi A.S";
  });
 
  document.getElementById('button10').addEventListener('click', () => {
    textDisplay.textContent = "Our ten Imam is Ali naqi A.S";
  });
  
  document.getElementById('button11').addEventListener('click', () => {
    textDisplay.textContent = "Our eleven Imam is hassan askari A.S";
  });
  document.getElementById('button12').addEventListener('click', () => {
    textDisplay.textContent = "Our twleve Imam is mehdi A.S";
  });


 
// Add event listeners for more buttons similarly

