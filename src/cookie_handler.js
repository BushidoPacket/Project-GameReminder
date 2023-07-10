// Creating a cookie
function createCookie(name, nameValue){
   
    let expireDate = new Date();
    expireDate.setDate(date.getDate() + 400);

    document.cookie = name + "=" + nameValue + "; " + expireDate + "; " + "path=/";
}

// Reading all cookies and logging them into console
let cookies = document.cookie.split("; ");
for (let i = 0; i < cookies.length; i++) {
  let cookie = cookies[i].split("=");
  let name = cookie[0];
  let value = cookie[1];
  console.log(name + "=" + value);
}

// Search for cookie
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null; // Cookie not found
  }