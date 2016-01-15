/**
 * Created by LJM on 2015/6/28.
 */
 // 'use strict';
function Import()
{
    for( var i=0; i<arguments.length; i++ )
    {
        var file = arguments;
        if ( file.match(/\\.js$/i))
            document.write('<script type=\\"text/javascript\\" src=\\"' + file + '\\"></sc' + 'ript>');
        else
            document.write('<style type=\\"text/css\\" href="" \\"' + file + '\\"> </st'+'yle>');
    }
}

function include(path){
    var a=document.createElement("script");
    a.type = "text/javascript";
    a.src=path;
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(a);
}

var b={
    start:window.onload=function(){
        alert("可能");
    }
};
var a=document.getElementById("f");


with(b.start){
    alert("可能");
}
