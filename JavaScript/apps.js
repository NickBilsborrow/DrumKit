
const ridePic = document.getElementById("ridePic");
const ridePicHit = document.getElementById("ridePicHit");




document.addEventListener('keypress', (event) =>{
        let letter = event.key;
        console.log(letter);
        if(letter == "a"){
            console.log("A");
            document.getElementById('boom').pause();
            document.getElementById('boom').currentTime = 0;
            document.getElementById('boom').play();
            // ridePic.style.display = "none"
            // ridePicHit.style.display = "block"
            // setTimeout(ridePic.style.display = "block",
            // ridePicHit.style.display = "none",
            // 5000);                   
        }

        else if(letter == "s"){
            console.log("S")
            document.getElementById('clap').pause();
            document.getElementById('clap').currentTime = 0;
            document.getElementById('clap').play();
        }

        else if(letter == "d"){
            console.log("D")
            document.getElementById('hihat').pause();
            document.getElementById('hihat').currentTime = 0;
            document.getElementById('hihat').play();
        }

        else if(letter == "f"){
            console.log("F")
            document.getElementById('kick').pause();
            document.getElementById('kick').currentTime = 0;
            document.getElementById('kick').play();
        }

        else if(letter == "g"){
            console.log("G")
            document.getElementById('openhat').pause();
            document.getElementById('openhat').currentTime = 0;
            document.getElementById('openhat').play();
        }

        else if(letter == "h"){
            console.log("H")
            document.getElementById('ride').pause();
            document.getElementById('ride').currentTime = 0;
            document.getElementById('ride').play();
        }

        else if(letter == "j"){
            console.log("J")
            document.getElementById('snare').pause();
            document.getElementById('snare').currentTime = 0;
            document.getElementById('snare').play();
        }

        else if(letter == "k"){
            console.log("K")
            document.getElementById('tink').pause();
            document.getElementById('tink').currentTime = 0;
            document.getElementById('tink').play();
        }

        else if(letter == "l"){
            console.log("L")
            document.getElementById('tom').pause();
            document.getElementById('tom').currentTime = 0;
            document.getElementById('tom').play();
        }

});