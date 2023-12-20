let token = JSON.parse(localStorage.getItem("token")) || null;

let buttonHandler = document.querySelector("#submit");
let data;
buttonHandler.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!token) {
    alert("Please Login first");
  } else {
    let original_url = document.querySelector("#url").value;
    let obj = {
      original_url,
    };
    try {
      console.log(obj);
      data = await fetch("https://tough-bee-flip-flops.cyclic.app/shorten", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
      });
      data = await data.json();

      if (data.message == "Provide Valid URL") {
        alert("Provide Valid URL");
      } else if (data.original_url && data.short_url) {
        let short_url = document.querySelector("#short-url");
        let original_url = document.querySelector("#original-url");

        short_url.href = data.short_url;
        short_url.innerHTML = data.short_url;
        original_url.href = data.original_url;
        original_url.innerHTML = data.original_url;
      } else if (data.err.message == "jwt malformed") {
        alert("please login first");
      } else {
        alert(data.err.message);
      }
    } catch (error) {
      alert(error);
    }
  }
});
