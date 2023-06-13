
function GetWater()
{
    let xhr = new XMLHttpRequest();
    xhr.open("get","http://www.sanfensum.cn:8010/sqlapi/water/allmywater", false);
    xhr.send();

    let waters = xhr.responseText;
    waters = JSON.parse(waters);
    console.log(waters);
    if (waters == "select error"){
        alert("数据库连接错误");
        return;
    }

    for(let i = 0 ; i < waters.length; i++){
        let water = waters[i]["water"];
        RandomDiv(i, water);
    }
}

function RandomData()
{
    let x = parseInt(Math.random()*100) % 75;
    return x + "%";
}

function RandomDiv(zi, water = "water")
{
    let div = document.createElement("div");
    div.className = "card";
    div.style.left = RandomData();
    div.style.top = RandomData();
    div.style.zIndex = zi;
    div.innerHTML = "<span class=\"onewater\"> " + water + "</span>"
    document.body.appendChild(div);
}

function AddWater()
{
    let add = document.querySelector(".add_water");
    var kuang = document.querySelector(".popup");
    var span = document.querySelector(".popup_close");
    var content = document.querySelector(".forflex");

    let cookie = document.cookie;
    let xhr = new XMLHttpRequest();
    xhr.open("get","http://www.sanfensum.cn:8010/cookie?cookie=" + cookie, false);
    xhr.send();
    let re = xhr.responseText;
    if (re != "true"){
        add.style.display = 'none';
        return;
    }

    
    add.onclick = function(){
        kuang.style.display = "block";
    }

    span.onclick = function() {
        kuang.style.display = "none";
    }
    
    window.onclick = function(event) {j
        if (event.target == content) {
            kuang.style.display = "none";
        }
    }
}

function GetSubmit()
{
    let sub = document.getElementById("popup_input");
    let txt = sub.value;
    console.log(txt);

    let xhr = new XMLHttpRequest();
    xhr.open("get","http://www.sanfensum.cn:8010/sqlapi/water/insert?water=" + txt, false);
    xhr.send();
    
    sub.value = "";
    document.querySelector(".popup").style.display = "none";
    location.reload();
}

