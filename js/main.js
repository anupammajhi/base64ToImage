clearDownloadBtn()

function convertBase64ToImage(){
    let image = new Image();
    let textareaValue = document.getElementById('base64text').value
    let img_datauri = "";
    let base64Text = ""
    let imgext = ""
    let mimeType = ""
    const dtaturiPreText = "data:image";

    if(textareaValue){
        clearOutDiv();
    }

    if(textareaValue.trim() == ""){
        return
    }

    if(textareaValue.startsWith(dtaturiPreText)){
        img_datauri = textareaValue
        base64Text = textareaValue.split(";base64,")[1];
        mimeType = textareaValue.split(";base64,")[0].replace("image:","")
    }
    else{
        mimeType = getMimeType(textareaValue);
        img_datauri = "data:" + mimeType + ";base64," + document.getElementById('base64text').value;
    }

    image.setAttribute('id', "art");
    image.src = img_datauri

    if(textareaValue){
        clearOutDiv();
    }
    
    document.getElementById("imageOut").appendChild(image);
    document.getElementById("downloadbtn").setAttribute("href", img_datauri);
    document.getElementById("downloadbtn").setAttribute("download", "am_b64toimg." + mimeType.split("/")[1]);
    document.getElementById("downloadbtn").style.display = "inline-block";

    // download();
    
}

function clearOutDiv(){
    let e = document.getElementById("imageOut");
    let outDivChild = e.lastElementChild;
    while(outDivChild){
        e.removeChild(outDivChild);
        outDivChild = e.lastElementChild;
    }
}

function clearDownloadBtn() {
    document.getElementById("downloadbtn").style.display = "none";
}

function getMimeType(base64Text) {
    mimeMap = {
        "iVBORw0KGgo" : "image/png",
        "UklGR" : "image/webp",
        "/9j/" : "image/jpeg",
        "R0lGOD" : "image/gif",
        "Qk": "image/bmp"
    }

    for (let p in mimeMap){
        if (base64Text.startsWith(p)){
            return mimeMap[p];
        }
    }
}

