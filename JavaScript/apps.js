const SoundList = [boom,clap,hihat,kick,openhat,ride,snare,tink,tom];

const playsound = (sound) => {
    let element = document.getElementById(sound)
    element.pause();
    element.currentTime = 0;
    element.play();  
       }; 
       
       
       
 
       const ridePic = document.getElementById("ridePic"); 
 





const liveMusic = {
    ride: [
        "ridePic",
        "ridePicHit"] ,
    tom: [
        "tomPic",
        "tomPicHit"] ,
    kick: [
        "kickPic",
        "kickPicHit"
        ] ,    
    snare: [
        "snarePic",
        "snarePicHit"] ,     
    hihat: [
        "hihatPic",
        "hihatPicHit"]          
    };


const animation = async function (instrument,i) {
    clearTimeout(i)
    console.log(liveMusic[instrument][0]);
    console.log(liveMusic[instrument][1]);
    document.getElementById(liveMusic[instrument][0]).style.display ="none";
    document.getElementById(liveMusic[instrument][1]).style.display ="block";

   i = setTimeout(()=>{
        console.log(1)
        document.getElementById(liveMusic[instrument][1]).style.display ="none";
        document.getElementById(liveMusic[instrument][0]).style.display ="block"; }      
        ,500);
}


const ridePicHit = document.getElementById("ridePicHit");



document.addEventListener("keypress", (event) =>{
        let letter = event.key;
        console.log(event);
        let target = event.target
        console.log(letter);
        if(letter == "a"){
            console.log("A");
            playsound("boom");
        }
        else if(letter == "s"){
            console.log("S");
            playsound("clap");
        }
        else if(letter == "d"){
            console.log("D");
            playsound("hihat");
            animation("hihat",1);
        }
        else if(letter == "f"){
            console.log("F");
            playsound("kick");
            animation("kick",2)
        }
        else if(letter == "g"){
            console.log("G");
            playsound("openhat");
        }
        else if(letter == "h"||target == ridePic){
            console.log("H")
            playsound("ride");
            animation("ride",3)
        } 
        else if(letter == "j"){
            console.log("J")
            playsound("snare")
            animation("snare",4)
        }
        else if(letter == "k"){
            console.log("K")
            playsound("tink")
        }
        else if(letter == "l"){
            console.log("L")
            playsound("tom")
            animation("tom",5)
        }

});


document.addEventListener("click",(event)=>{

    if(event.target == ridePic||event.target == ridePicHit){
        console.log("H")
        playsound("ride");
        animation("ride",3)
    }else if(event.target == tomPic||event.target == tomPicHit){
        console.log("H")
        playsound("tom");
        animation("tom",3)
    }else if(event.target == kickPic||event.target == kickPicHit){
        console.log("H")
        playsound("kick");
        animation("kick",3)
    }else if(event.target == snarePic||event.target == snarePicHit){
        console.log("H")
        playsound("snare");
        animation("snare",3)
    }else if(event.target == hihatPic||event.target == hihatPicHit){
        console.log("H")
        playsound("hihat");
        animation("hihat",3)
    }


})