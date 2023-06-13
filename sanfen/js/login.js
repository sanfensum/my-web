
function Login()
{
    let sub = document.getElementById("password");
    let pwd = sub.value;

    let ok = "no";
    let re = set_cookie(ok);
    if(!re){
        alert("密码错误");
    }

    location.reload();
}


function set_cookie(ok)
{
    if(ok == "true"){
        document.cookie = "who=me";
        return true;
    }
    else{
        return false;
    }
}

function _login()
{
    let pp1 = document.getElementById("pp1");
    let pp2 = document.getElementById("pp2");
    let pp3 = document.getElementById("pp3");
    let pp4 = document.getElementById("pp4");
    let pp6 = document.getElementById("pp6");
    let pp7 = document.getElementById("pp7");
    let pp8 = document.getElementById("pp8");
    let pp9 = document.getElementById("pp9");

    let pwd = ""
    pp1.onclick = function(){ pwd = pwd + "1"; _login_send(pwd);}
    pp2.onclick = function(){ pwd = pwd + "2"; _login_send(pwd);}
    pp3.onclick = function(){ pwd = pwd + "3"; _login_send(pwd);}
    pp4.onclick = function(){ pwd = pwd + "4"; _login_send(pwd);}
    pp6.onclick = function(){ pwd = pwd + "6"; _login_send(pwd);}
    pp7.onclick = function(){ pwd = pwd + "7"; _login_send(pwd);}
    pp8.onclick = function(){ pwd = pwd + "8"; _login_send(pwd);}
    pp9.onclick = function(){ pwd = pwd + "9"; _login_send(pwd);}
}

function _login_send(txt)
{
    console.log(txt.length);
    if(txt.length < 5 || txt.length > 10){
        return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open("get","http://www.sanfensum.cn:8010/login?pwd=" + txt, false);
    xhr.send();

    let ok = xhr.responseText
    let re = set_cookie(ok);
    if(re){
        alert("登录成功");
        location.reload()
    }
}