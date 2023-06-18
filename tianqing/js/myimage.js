
function getImage()
{
    let dir_name = decodeURI(window.location.href.split("?")[1].split("=")[1])
    url = "http://tianqing.sanfensum.cn/api/directory?name=" + dir_name;
    fetch(url, {
        method: "GET",
        mode:"cors"
    })
    .then(res => {
        // console.log('res',res);
        return res.json();
    })
    .then(res => {
        num = res["num"];
        list = res["list"];
        // console.log(list);

        data = ""
        for(let i = 0; i < list.length; i++){
            data += "<img class=\"lazyload\" data-src=\"" + list[i] + "\" onclick=toBig(\"" + list[i] + "\") >";
        }

        let content = document.getElementById("main");
        content.innerHTML = data;
        // console.log(data)
    })
}

function toBig(url)
{
    window.open(url, "_blank")
}