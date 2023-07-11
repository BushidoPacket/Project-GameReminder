export function switchBodyClass(oldClass, newClass){

    document.getElementById("htmlTG").classList.remove(oldClass);
    document.getElementById("htmlTG").classList.add(newClass);
  
  }
  
  export function changeTheme(){
    
  
    let htmlEl = document.getElementById("htmlTG");
  
    if(htmlEl.classList.contains("dark")){
        switchBodyClass("dark", "light");
        document.getElementById("themeButton").style.backgroundImage = "url('../graphic/switch-icon-dark.png')";
        document.getElementById("themeButton").style.backgroundSize = "contain";}
    else{
        switchBodyClass("light", "dark");
        document.getElementById("themeButton").style.backgroundImage = "url('../graphic/switch-icon-light.png')";
        document.getElementById("themeButton").style.backgroundSize = "contain";}
  
  }