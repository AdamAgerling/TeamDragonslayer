document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  const navElement = document.createElement("nav");
  navElement.className =
    "navbar navbar-expand-lg bg-dark navbar-dark sticky-top";
  navElement.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand text-danger fs-2 d-flex align-items-center" href="/index.html">
                <img src="../images/LogoPlaceholder.png" alt="Team Dragonslayer Logo" width="100" height="40" class="d-inline-block align-text-top me-2">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/showcase.html">Showcase</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about.html">About us</a>
                    </li>
                </ul>
            </div>
        </div>
    `;

  document.body.prepend(navElement);

  const navLinks = document.querySelectorAll(".navbar-nav a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});
