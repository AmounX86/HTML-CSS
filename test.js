
function changeContent(fil){
    console.log(fil);
    console.log(fil[0].name);
    let content = document.getElementById("test-head");
    let file = new FileReader();
    file.onload = function(e){
        content.innerText=e.target.result;
    };
    file.readAsText(fil[0]);
}