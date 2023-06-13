
function GetName()
{
    var fileName = window.location.href.split("?")[1].split("=")[1];
    fileName = decodeURI(fileName);
    console.log(decodeURI(fileName));

    return fileName;
}

function Title() 
{
    let fileName = GetName();
    document.getElementById("title").innerHTML = fileName;
}


function showMarkdown(name) 
{
    var file = "../../md/" + name + ".md";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("article").innerHTML = marked(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", file, true);
    xmlhttp.send();

}

function Article()
{
    let fileName = GetName();
    showMarkdown(fileName);
}
