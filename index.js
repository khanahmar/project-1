const panals = document.querySelectorAll(".panal");

panals.forEach((panal) => {
  panal.addEventListener("click", (e) => {
    removeActiveClasses();
    panal.classList.add("active");
  });
  function removeActiveClasses() {
    panals.forEach((panal) => {
      panal.classList.remove("active");
    });
  }
});
