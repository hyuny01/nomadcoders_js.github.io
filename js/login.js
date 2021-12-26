const login = document.querySelector(".login");
const fromWrap = document.querySelector(".login .form");
const loginH2 = login.querySelector("h2");
const loginForm = login.querySelector("form");
const loginInput = login.querySelector("input");
const loginP = login.querySelector("p");

function setLogin(event){
  event.preventDefault();
  const userName = loginInput.value;
  if(userName === ""){
    alert("Please write your name");
  }else{
    login.classList.remove("hidden");
    fromWrap.classList.add("hidden");
    loginP.classList.add("set-p");
    loginP.innerHTML = `반갑습니다.<br>${userName}님`;
    login.appendChild(loginP);
    localStorage.setItem("name", userName);
  }
}

const id = localStorage.getItem("name")
if(id === null){
  login.classList.remove("hidden");
  loginForm.addEventListener("submit", setLogin);
}else{
  login.classList.remove("hidden");
  fromWrap.classList.add("hidden");
  loginP.classList.add("set-p");
  loginP.innerHTML = `반갑습니다.<br>${id}님`;
}

