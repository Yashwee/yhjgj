https://teachablemachine.withgoogle.com/models/nc8MKI28i/

function start()
{
 navigator.mediaDevices.getUserMedia({audio: true})
 Classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nc8MKI28i/', modelReady); 
}

function modelReady()
{
    Classifier.classify(gotResults);
}

function gotResults(error,results)
{
  if (error){
    console.error(error);
  }
else {
    console.log(results);

    random_number_r =Math.floor(Math.random()*255)+1;
    random_number_g =Math.floor(Math.random()*255)+1;
    random_number_b =Math.floor(Math.random()*255)+1;
    
    document.getElementById("result_label").innerHTML=" I can hear "+results[0].label;
    document.getElementById("result_confidence").innerHTML=" Accuracy "+(results[0].confidence *100).toFixed(2)+" %";

    document.getElementById("result_confidence").style.color=" rgb(" +random_number_r+ ", "+random_number_g+", "+random_number_b+")";
    document.getElementById("result_label").style.color=" rgb(" +random_number_r+ ", "+random_number_g+", "+random_number_b+")";

    img1=document.getElementById("cat.jpg")
    img2=document.getElementById("dog.png");

    if( results[0].label=="meow")
    {
     img1.src='cat.jpg';
     img2.src='dog.png'; 
    }

    else
    {
     img1.src='dog.png';
     img2.src='cat.jpg'; 
    }
}
}
