function cookieMonster(name, value) {
  document.cookie = `${name}=${value}`
}

function getCookies() {
  return document.cookie.split(';')
}

function getCookieValue(name) {
  let array = getCookies();
  for (let i = 0; i < array.length; i++) {
    let subArray = array[i].split('=');
    if (subArray[0] === name) {
      return subArray[1];
    }
  }
  return null;
}

function deleteCookie(name) {
  let array = getCookies();
  for (let i = 0; i < array.length; i++) {
    let subArray = array[i].split('=');
    let cookieName = subArray[0];
    if (subArray[0] === name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
      return;
    }
  }
  alert("Cookie not found!");
}

function randomWindow(windowName) {
  let randomNumder = Math.floor(Math.random() * 1000);
  cookieMonster(windowName, randomNumber)
}

window.onload = () => {
  console.log("success!");
  
  document.cookie = "monster_name=cookie";
  document.cookie = "favorite_cookie=snickerdoodle";
  // console.log(getCookies());
  // console.log(getCookieValue("monster_name"));
  // console.log(getCookieValue("Liam_Niesen"));
  // console.log(deleteCookie("monster_name"));
  // console.log(deleteCookie("Liam_Galager"));
  // console.log(getCookies());
};

