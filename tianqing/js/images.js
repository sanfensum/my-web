
function RandImage()
{
    let img = document.getElementById("img");

    fetch('http://tianqing.sanfensum.cn/api/randimage',{
        method: 'GET',
        mode:"cors"
    })
    .then(res => { 
       console.log('res',res);
       return res.json();
    }).then(json => {
        json = json.replaceAll(" ", "%20");
        console.log('获取的结果', json);


        img.innerHTML = "<img style=\"max-height:10%; max-width:10%\" src = " + json + ">" ;
        return json;
    }).catch(err => {
        console.log('请求错误', err);
    })
}
