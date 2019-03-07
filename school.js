//滑动效果
var index=1;
var oBox;
//点击事件
(function() {
    var $ = function(id) {
        return document.getElementById(id);
    };
    oBox = $("transImageBox"),
        oTrigger = $("transImageTrigger").getElementsByTagName("a"),
        lTrigger = oTrigger.length;

    if (oBox && lTrigger) {
        for (var i = 0; i<lTrigger; i+=1) {
            oTrigger[i].onclick = function() {
                index = Number(this.href.replace(/.*#/g, "")) || 1;
                for (var a=1;a<=lTrigger;a++)
                {
                    if (a==index){document.getElementById("d"+index).style.background="darkred";}
                    else{document.getElementById("d"+a).style.background="#cfcfcf";}
                }
                oBox.style.marginLeft = (1 - index) * 980 + "px";
                return false;
            };
        }
    }
})();

//随时间改变
function change()
{
    oBox.style.marginLeft = (1 - index) * 980 + "px";
    for (var a=1;a<=lTrigger;a++)
    {
        if (a==index){document.getElementById("d"+index).style.background="darkred";}
        else
        {document.getElementById("d"+a).style.background="#cfcfcf";}
    }
    index++;
    if (index==7) {index=1;}
}
setInterval(change,2000);


function show1() {
    var u=document.getElementById("ul");
    var t=document.getElementById("ta");
    u.style.display="block";
    t.style.display="none";
}
function show2() {
    var u=document.getElementById("ul");
    var t=document.getElementById("ta");
    u.style.display="none";
    t.style.display="block";
}
function show3() {
    var u1=document.getElementById("ul1");
    var u2=document.getElementById("ul2");
    u1.style.display="block";
    u2.style.display="none";
}
function show4() {
    var u1=document.getElementById("ul1");
    var u2=document.getElementById("ul2");
    u1.style.display="none";
    u2.style.display="block";
}

function  menu11() {
    var menu=document.getElementById("s1");
    menu.style.display="block";
    menu20();
    menu30();
    menu40();
    menu50();
    menu60();
    menu70();
}
function  menu10() {
    var menu=document.getElementById("s1");
    menu.style.display="none";
}
function  menu21() {
    var menu=document.getElementById("s2");
    menu.style.display="block";
    menu10();
    menu30();
    menu40();
    menu50();
    menu60();
    menu70();
}
function  menu20() {
    var menu=document.getElementById("s2");
    menu.style.display="none";
}
function  menu31() {
    var menu=document.getElementById("s3");
    menu.style.display="block";
    menu10();
    menu20();
    menu40();
    menu50();
    menu60();
    menu70();
}
function  menu30() {
    var menu=document.getElementById("s3");
    menu.style.display="none";
}
function  menu41() {
    var menu=document.getElementById("s4");
    menu.style.display="block";
    menu10();
    menu20();
    menu30();
    menu50();
    menu60();
    menu70();
}
function  menu40() {
    var menu=document.getElementById("s4");
    menu.style.display="none";
}
function  menu51() {
    var menu=document.getElementById("s5");
    menu.style.display="block";
    menu10();
    menu20();
    menu30();
    menu40();
    menu60();
    menu70();
}
function  menu50() {
    var menu=document.getElementById("s5");
    menu.style.display="none";
}
function  menu61() {
    var menu=document.getElementById("s6");
    menu.style.display="block";
    menu10();
    menu20();
    menu30();
    menu40();
    menu50();
    menu70();
}
function  menu60() {
    var menu=document.getElementById("s6");
    menu.style.display="none";
}
function  menu71() {
    var menu=document.getElementById("s7");
    menu.style.display="block";
    menu10();
    menu20();
    menu30();
    menu40();
    menu50();
    menu60();
}
function  menu70() {
    var menu=document.getElementById("s7");
    menu.style.display="none";
}

function f(e) {
    var x=e.clientX;
    var y=e.clientY;
    if (y<80 || y>380){
        menu10();
        menu20();
        menu30();
        menu40();
        menu50();
        menu60();
        menu70();
     }

}