function switchBodyClass(oldClass, newClass) {

    document.body.classList.remove(oldClass);
    document.body.classList.add(newClass);

}

function changeTheme(){

    var body = document.body;

    if(body.classList.contains("dark")){
        switchBodyClass("dark", "light");}
    else{
        switchBodyClass("light", "dark");}

}