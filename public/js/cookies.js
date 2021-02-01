function cookieMonster(name, value) {
  document.cookie = `${name}=${value}`
}

window.onload = () => {
  console.log("success!");

  document.cookie = "monster_name=cookie";
  document.cookie = "favorite_cookie=snickerdoodle";
  for (let i = 0; i < 100; i++) {
    cookieMonster("cookie" + i, i);
  }
};