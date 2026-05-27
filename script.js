const subscribeBtn = document.getElementById("subscribeBtn");

subscribeBtn.addEventListener("click", () => {

  const email = document.querySelector("input").value;

  if(email.trim() === ""){
    alert("Please enter your email");
    return;
  }

  alert("Subscribed Successfully");

});