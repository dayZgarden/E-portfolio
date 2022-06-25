// template_awl0kpy
// service_ppqfkff
// Y7hvo2-gbpBgv_JAo

function contact() {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.remove("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_ppqfkff",
      "template_awl0kpy",
      event.target,
      "Y7hvo2-gbpBgv_JAo"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The Email service is temporarily unavalaible. Please contact me directly on zyad.alkurdi22@gmail.com"
      );
    });

  loading.classList += " modal__overlay--visible";
  setTimeout(() => {
    console.log("it worked 1");
  }, 1000);
}

let isModalOpen = false
function toggleModal() { 
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
    }
    isModalOpen = true;
    document.body.classList += ' modal--open'
}
