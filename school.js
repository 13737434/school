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
function banner() {
    var ban=document.getElementById("banner");
    var ban1=document.getElementById("banner1");
    ban.style.display="none";
    ban1.style.display="block";
}
function banner1() {
    var ban=document.getElementById("banner");
    var ban1=document.getElementById("banner1");
    ban.style.display="block";
    ban1.style.display="none";
}