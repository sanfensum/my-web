
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
        let num = res["num"];
        let list = res["list"];
        // console.log(list);

        let data = ""
        for(let i = 0; i < list.length; i++){
            li = list[i].replaceAll(" ", "%20")
            let _data = "<img class=\"lazyload\" data-src=\"" + li + "\" onclick=toBig(\"" + li + "\") >";
            data += _data;
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