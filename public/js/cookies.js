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
  
}

window.onload = () => {
  console.log("success!");
  
  document.cookie = "monster_name=cookie";
  document.cookie = "favorite_cookie=snickerdoodle";
  console.log(getCookies());
  console.log(getCookieValue("monster_name"));
  console.log(getCookieValue("Liam_Niesen"));
};