//https://teachablemachine.withgoogle.com/models/4b353HOQ1/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4b353HOQ1/model.json'modelReady);
    }

    function modelReady(){
        classifier.classify(gotResult);
    }

    function gotResult(){
        if(error){
            console.error(error)
        }
        else{
            
        }
    }