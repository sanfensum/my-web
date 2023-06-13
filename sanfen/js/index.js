

function sayxun()
{
    let str = "好菜 好菜 好菜 好菜 好菜";
    let output = document.getElementById("myxun");
    let i = 0;
    let timer = setInterval( 
        function () {
            output.innerHTML = str.substring(0, i);
            i++;
            if(output.innerHTML == str){
                // clearInterval(timer);
                i = 0;
            }
        },
        120
    )
}

function Flip()
{
    var login = false;
    var flip_card = document.getElementById("flip_card");
    var face = document.getElementById("face");
    var face_head = document.getElementById("head_card");
    var back = document.getElementById("back");
    var back_ground = document.getElementById("back_background");

    function f() {
        login = !login;
        if(login){
            flip_card.style.transform = "rotateY(180deg)";
            setTimeout(
                function(){
                    face.style.display = "none";
                    back_ground.style.display = "block";
                },
                300
            )
        }else{
            flip_card.style.transform = "rotateY(0deg)";
            setTimeout(
                function(){
                    face.style.display = "block";
                    back_ground.style.display = "none";
                },
                300
            )
        }
    }
    face_head.onclick = function(){
        f();
    }

    window.onclick = function(event) {
        if (event.target == back_ground) {
            f();
        }
    }
}

