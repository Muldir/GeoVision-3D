
function applyTranslations(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          el.innerText = data[key];
        }
      });
    });
  localStorage.setItem("lang", lang);
}

function initLang() {
  const savedLang = localStorage.getItem("lang") || "kk";
  document.getElementById("langSelect").value = savedLang;
  applyTranslations(savedLang);
}

document.addEventListener("DOMContentLoaded", initLang);
