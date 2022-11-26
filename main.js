function convertBase64ToPNG(){
    let image = new Image();
    let textareaValue = document.getElementById('base64text').value
    const pngPreText = "data:image/png;base64"

    clearOutDiv();

    if(textareaValue.trim() == ""){
        return
    }

    if(textareaValue.startsWith(pngPreText)){
        image.src = document.getElementById('base64text').value
    }
    else{
        image.src = pngPreText + "," + document.getElementById('base64text').value;
    }

    clearOutDiv();

    document.getElementById("imageOut").appendChild(image);
}

function clearOutDiv(){
    let e = document.getElementById("imageOut");
    let outDivChild = e.lastElementChild;
    while(outDivChild){
        e.removeChild(outDivChild);
        outDivChild = e.lastElementChild;
    }
}