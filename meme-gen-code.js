let topTextInput, bottomTextInput, imageInput, generateBtn, canvas, ctx;



function generateMeme(img, topText, bottomText){
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    ctx.imageSmoothingEnabled = true;

    let fontSize = canvas.width / 10;
    ctx.font = fontSize + 'px Impact' ;
    ctx.fillStyle = 'white' ;
    ctx.strokeStyle = 'black' ; 
    ctx.lineWidth = fontSize / 15 ;
    ctx.textAlign = 'center';

    ctx.textBaseline = 'top';;
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });
   
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) { // .reverse() because it's drawing the bottom text from the bottom up
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

function init(){
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function () {
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, bottomTextInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });  
}

init();