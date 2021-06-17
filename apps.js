
const ridePic = document.getElementById("ridePic");
const ridePicHit = document.getElementById("ridePicHit");



document.addEventListener('keypress', (event) =>{
        let letter = event.key;
        console.log(letter);
        if(letter == "a"){
            document.getElementById('boom').pause();
            document.getElementById('boom').currentTime = 0;
            console.log("A");
            document.getElementById('boom').play();
            ridePic.style.display = "none"
            ridePicHit.style.display = "block"
            setTimeout(ridePic.style.display = "block",
            ridePicHit.style.display = "none",
            5000);
            
            

        }
        else if(letter == "s"){
            console.log("S")
            document.getElementById('clap').play();
        }
        else if(letter == "d"){
            console.log("D")
            document.getElementById('hihat').play();
        }
        else if(letter == "f"){
            console.log("F")
            document.getElementById('kick').play();
        }
        else if(letter == "g"){
            console.log("G")
            document.getElementById('openhat').play();
        }
        else if(letter == "h"){
            console.log("H")
            document.getElementById('ride').play();
        }
        else if(letter == "j"){
            console.log("J")
            document.getElementById('snare').play();
        }
        else if(letter == "k"){
            console.log("K")
            document.getElementById('tink').play();
        }
        else if(letter == "l"){
            console.log("L")
            document.getElementById('tom').play();
        }




});