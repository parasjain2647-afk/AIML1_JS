let heading=document.getElementById("mainHeading");
let paragraph=document.getElementById("para");
let input=document.getElementById("newHeading");

let fontSize=16;

//change heading text (on click using addEventListener)
document.getElementById("changeTextBtn").addEventListener("click",()=>{
    if(input.value !==""){
        heading.textContent=input.value;
    }
});

//change background color (on click using addEventListener)
document.getElementById("bgColorBtn").addEventListener("click",function(){
    document.body.style.backgroundColor=
    "#"+Math.floor(Math.random()*16777215).toString(16);

});

//Increase font size (on click using addEventListener)
document.getElementById("fontSizeBtn").addEventListener("click",function(){
    fontSize+=2;
    paragraph.style.fontSize=fontSize+"px";
});

// Show/hide paragraph (on click using addEventListener)
document.getElementById("toggleParagraphBtn").addEventListener("click",function(){
    if(paragraph.style.display==="none"){
        paragraph.style.display="block";
    }else{
        paragraph.style.display="none";
    }
});

//reset to default (on click using addEventListener)
document.getElementById("resetBtn").addEventListener("click",function(){
    heading.textContent="Welcome to JavaScript Lab";
    document.body.style.backgroundColor=" #e6e6e6";
    fontSize=16;
    paragraph.style.fontSize=fontSize+"px";
    paragraph.style.display="block";
});
