const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");

// show and hide navbar in mobile
toggler.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  if (navLinks.classList.contains("nav-active")) {
    // Adicione espaço acima do conteúdo quando o menu de navegação estiver ativo
    content.style.marginTop = "15px";
  } else {
    // Remova o espaço quando o menu de navegação não estiver ativo
    content.style.marginTop = "0";
  }
});


// add active class on click to nav-items
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("nav-item-active"));
    this.classList.add("nav-item-active");

    navLinks.classList.toggle("nav-active");
  });
});

const projectsTabBtns = document.querySelectorAll(".projects-tab-btn");
const projectsItems = document.querySelectorAll(".projects-item");

// filter projects
projectsTabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    projectsTabBtns.forEach((btn) =>
      btn.classList.remove("projects-tab-btn-active")
    );

    this.classList.add("projects-tab-btn-active");

    projectsItems.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

window.addEventListener('load', function() {
  var carregamento = document.getElementById('carregamento');
  setTimeout(function() {
    carregamento.style.display = 'none';
  }, 2000); // Ajuste este valor para controlar quanto tempo a animação de carregamento deve aparecer
});