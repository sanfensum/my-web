
function showMarkdown(name, time) 
{
    document.getElementById("filetitle" + name).innerHTML = name;
    document.getElementById("filetime" + name).innerHTML = time;

    var file = "md/" + name + ".md";
    console.log(file);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("file" + name).innerHTML = marked(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
}

function getfiles()
{
    let files = [];
    let xhr = new XMLHttpRequest();
    
    xhr.open("get","http://www.sanfensum.cn:8010/sqlapi/files/allmyfiles", false);
    xhr.send();
    files = xhr.responseText;
    files = JSON.parse(files);
    console.log(files);
    if (files == "select error"){
        alert("数据库连接错误");
        return;
    }


    for(let i = 0 ; i < files.length; i++){
        let file = files[i]["name"];
        let _time = files[i]["create_time"];
        // let fileurl = encodeURI(file);
        document.write
        ("                                                                                              \                                                                                         \
            <div class=\"blogs_list\" >                                                                 \
                <a class=\"file_title_and_time\" href=\"blog.html?name=" + file + "\" target=\"_blank\" rel=\"noopener noreferrer\">                         \
                    <div class=\"file_title\" id=\"filetitle" + file + "\" >                                               \
                        标题                                                                            \
                    </div>                                                                              \
                    <div class=\"file_time\" id=\"filetime" + file + "\" >                                                               \
                        时间                                                                \
                    </div>                                                                          \
                </a>                                                                                       \
                <div class=\"file_other\" id=\"file" + file + "\">                                       \
                        主体预览                                                                         \
                </div>                                                                                  \
            </div>                                                                                      \
            <script>                                                                                \
                showMarkdown(\"" + file + "\", \"" + _time + "\" );                                  \
            </script>                                                                                 \
        ");
    }
}

