const qr = document.querySelector(".qr"),
genButton = document.querySelector("button"),
image = document.querySelector(".image"),
imageQr = document.querySelector(".image img"),
salahh = document.querySelector(".salah"),
qrInput = document.querySelector("input");

 genButton.addEventListener("click", ()=>{
    const Input = qrInput.value;
    if(!Input) 
    return;
    imageQr.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Input}`;
    imageQr.addEventListener("load", ()=>{
        image.classList.add("active");
    })


})