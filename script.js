// Wait until the page loads

document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById("btn");

  button.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    document.getElementById("result").textContent = "Hello, " + name + "!";
  });
});