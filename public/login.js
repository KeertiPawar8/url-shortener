let myform = document.getElementById("form_login");

myform.addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.getElementById("email_login").value;
  let password = document.getElementById("password_login").value;

  let obj = {
    email: email,
    password: password,
  };
  try {
    let data = await fetch("https://tough-bee-flip-flops.cyclic.app/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    data = await data.json();

    alert(data.message);

    localStorage.setItem("token", JSON.stringify(data.token));
    window.location.href = "./index.html";
  } catch (error) {
    alert(error.message);
  }
});

let myform2 = document.getElementById("form_signup");

myform2.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("signup is okay");
  let name = document.getElementById("username").value;
  let email = document.getElementById("email_signup").value;
  let password = document.getElementById("password_signup").value;

  let obj = {
    username: name,
    email: email,
    password: password,
  };
  console.log(obj)

  try {
    let data = await fetch("https://tough-bee-flip-flops.cyclic.app/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  data = await data.json();
  alert(data.message);

  } catch (error) {
    alert(data.message);
  }

  

});
