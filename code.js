function myFunction(){
    var a = parseInt(document.getElementById('e').value);
    var b = parseInt(document.getElementById('f').value);
    var c = document.getElementById('ope').value;
    if(c == '+'){
        ans = a+b
        document.getElementById("g").value = ans;
    }
    if(c == '-'){
        ans = a-b
        document.getElementById("g").value = ans;
    }
    if(c == '*'){
        ans = a*b
        document.getElementById("g").value = ans;
    }
    if(c == '/'){
        ans = a/b
        document.getElementById("g").value = ans;
    }

}