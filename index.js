const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

    const email = e.target.elements.email.value;
    
    const newEmail = email.split("")

  if (email === "") {
    iziToast.error({
      title: "Error",
      message: "Please fill the field",
      position: "topRight",
    });
    return;
  }
  if (!newEmail.includes("@")) {
    iziToast.error({
      title: "Error",
      message: `The address ${email} does not contain the @ character.`,
      position: "topRight",
    });
    return;
  }
  const instance = basicLightbox.create(`
        <div class="modal">
        <img class="icon" src='./assets/images/icon-list.svg' />
            <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to
        <strong>${email} </strong>Please open it and click the button inside to confirm
        your subscription.</p>
        <button class="close">Dismiss message</button>
        </div>
    
`);
    
    instance.show();
    const close = document.querySelector(".close");

    close.addEventListener("click", () => {
      instance.close();
    });

    document.addEventListener("keyup", (e) => {
        if (e.code === "Escape") {
          instance.close();
        }
    })
    e.target.reset();
});
