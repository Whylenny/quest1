var email = window.sessionStorage.getItem("email");
email = "";
document.getElementById("asking").style.display = "none";

const submit = () => {
  email = document.getElementById("userEmail").value;
  const comques = document.getElementById("comQues").value;
  document.getElementById("input").innerHTML = email + " " + comques;
  console.log(email + " " + comques);
  document.getElementById("asking").style.display = "none";
  window.sessionStorage.setItem("email", email);
};

function ask() {
  document.getElementById("asking").style.display = "block";
  document.getElementById("comQues").value = "";
  document.getElementById("userEmail").value = email;
}

console.log("started");
