// var assigntime = document.getElementsByClassName("box")
setInterval(()=>{
    clocktime();
},1000)
function clocktime(){
    let time = new Date();
    let hrs =time.getHours();
    let min =time.getMinutes();
    let sec =time.getSeconds();
    let AMPM ="AM";
    if(hrs>12){
        hrs =hrs - 12;
        AMPM = "PM"
    } 
    else{
        AMPM = "AM"
    }
    console.log(`${hrs}`)
    document.getElementById('box2').innerHTML=`${hrs} hours`
    document.getElementById('box3').innerHTML=`${min} \n\n mins`
    document.getElementById('box4').innerHTML=`${sec} \n secs`
    document.getElementById('box5').innerHTML=AMPM

    if ((hrs<=11)&&(min<=59) && (AMPM=='AM')){
        document.getElementById("grab").innerHTML ="GRAB SOME HEALTHY BREAKFAST!!!";
    }
    
    else if((hrs<=12) &&(hrs<=3)&&(min<=59)&&(AMPM="PM")){
             document.getElementById("grab").innerHTML="LET'S HAVE SOME LUNCH !!"
      }
      else if((hrs>=4) &&(hrs<=7)&&(min<=59)&&(AMPM="PM")){
             document.getElementById("grab").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
          }
          
        else {
              document.getElementById("grab").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
               }
            }
let good = document.getElementById("a");
let image = document.getElementById("last")
let inputvalue = document.querySelectorAll(".tim");
function callbutton(){   
let time = new Date();
let hrs= time.getHours();
// let wakeup = inputvalue[0].selectedIndex;
// let lunch =  inputvalue[1].selectedIndex;
// let select = inputvalue[0].options[wakeup].value
// let select1 = inputvalue[1].options[lunch].value
// p1.innerHTML=`${select.text}`;
// p2.innerHTML=`${select1.text}`;
// p[1].innerHTML=`${select}`;
// p[1].innerHTML=`${select}`;
// *****************************************************************************
// *****************************************************************************
let box=inputvalue[0].options[inputvalue[0].value]
let box1=inputvalue[1].options[inputvalue[1].value]
let box2=inputvalue[2].options[inputvalue[2].value]
let box3=inputvalue[3].options[inputvalue[3].value]
    p1.innerHTML=`Wake Up Time:${box.text}`
	p2.innerHTML=`Lunch Time:${box1.text}`
	p3.innerHTML=`Nap Time:${box2.text}`
	p4.innerHTML=`Night Time:${box3.text}`




if (parseInt(inputvalue[0].value)===hrs){
good.innerText= "GOOD MORNING!! WAKE UP !!"
image.src = "./morning.svg"
}
else if (parseInt(inputvalue[1].value)===hrs){
 good.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP"
 image.src = "./lunch.svg"
}
else if(parseInt(inputvalue[2].value)===hrs){
  good.innerText= "GOOD EVENING !!"
  image.src = "./evening.png"
}
 else if(parseInt(inputvalue[3].value)===hrs){
good.innerText ="GOOD NIGHT !!"
image.src = "./night.png"
}




}

    // if else()
    // if ((hrs>=4)(hrs<=11) &&(min<=59)&&(AMPM=="AM")){
    //     document.getElementById("grab").innerHTML ="GRAB SOME HEALTHY BREAKFAST!!!";
    //  }
    //  else if((hrs>=12) &&(hrs<=3)&&(min<=59)&&(AMPM="PM")){
    //      document.getElementById("grab").innerHTML="LET'S HAVE SOME LUNCH !!"
    //  }
    //  else if((hrs>=4) &&(hrs<=8)&&(min<=59)&&(AMPM=="PM")){
    //      document.getElementById("grab").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    //  }
    //  else {
    //      document.getElementById("grab").innerHTML="GOOD night"
    //  }
    
    
 
// assigntime[1].innerHTML=hrs
// assigntime[2].innerHTML=`${min} `
// assigntime[3].innerHTML=`${sec} `
// assigntime[4].innerHTML=`${AMPM}`





// clocktime();
// let inputvalue = document.querySelectorAll("select")
// function callfunction(){
//     if(inputvalue.value<=12){
        
//     }
// }
// // ************************************************************************************************************************************************************
// let option = document.querySelector("goodmorning")
// let inputvalue = document.querySelectorAll("select")
// let parag = document.getElementsByTagName("p")
// let image = document.querySelector("morning")
// function callbutton(){
//     let time = new Date();
//     let hrs =time.getHours();
//     console.log(select.value)
//     console.log(hrs)
//     if(parseInt(selectvalue.value===hrs)){
//         parag[0].innerHTML="good"
//         img.src = "./(1).svg"
//     }
//     else{
//         parag[0].innerHTML=hrs;
//     }


    
// }


