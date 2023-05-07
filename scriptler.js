function arama() {
  var input, filter, kart1, kart2, li, a, i;
  input = document.getElementById('ara');
  filter = input.value.toUpperCase();
  kart1 = document.getElementById("kart1");
  kart2 = document.getElementById("kart2");
  li = kart1.getElementsByTagName('li');
  li2 = kart2.getElementsByTagName('li');
  var sonuc = 0;
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          sonuc++;
      } else {
          li[i].style.display = "none";
      } 
  }
  for (i = 0; i < li2.length; i++) {
      a = li2[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li2[i].style.display = "";
          sonuc++;
      } else {
          li2[i].style.display = "none";
      } 
  }

  var failMessage = document.querySelector('.failmessage');
  if (sonuc === 0) {
    failMessage.classList.add("show");
  } else {
    failMessage.classList.remove("show");
  }
}

const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const kart1 = document.getElementById("kart1");
  const kart2 = document.getElementById("kart2");

  button1.addEventListener("click", () => {
    setActiveButton(button1);
    kart1.style.display = "block";
    kart2.style.display = "none";
  });

  button2.addEventListener("click", () => {
    setActiveButton(button2);
    kart1.style.display = "none";
    kart2.style.display = "block";
  });

  function setActiveButton(button) {
    button1.classList.remove("active");
    button2.classList.remove("active");
    button.classList.add("active");
  }
