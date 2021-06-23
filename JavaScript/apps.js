const SoundList = [boom,clap,hihat,kick,openhat,ride,snare,tink,tom];

const playsound = (sound) => {
   
    let element = document.getElementById(sound)
    element.pause();
    element.currentTime = 0;
    element.play();  
       };

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

// console.log(liveMusic.ride[0])


// for (let i=0 ; i < array.length ; i++){
// let array =[rideTimeout,tomTimeout,kickTimeout,snareTimeout,hihatTimeout];
// let array[i] =
// }



// const timeOut=(instrument)=>{setTimeout(()=>{
//     document.getElementById(liveMusic[instrument][1]).style.display ="none";
//     document.getElementById(liveMusic[instrument][0]).style.display ="block"; }      
//     ,1000);}




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

const ridePic = document.getElementById("ridePic");
const ridePicHit = document.getElementById("ridePicHit");




document.addEventListener('keypress', (event) =>{
        let letter = event.key;
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
        else if(letter == "h"){
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