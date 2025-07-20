document.addEventListener("DOMContentLoaded", async function () {
  console.log("✅ MAIN.JS | Vista resumida por categoría con botón toggle");

  const lang = localStorage.getItem("lang") || "es";
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  const finalLang = langParam || lang;
  localStorage.setItem("lang", finalLang);

  const container = document.getElementById("blog-listing");
  const viewAllBtn = document.getElementById("view-all-btn");
  if (!container || typeof blogPosts === "undefined") return;

  const langData = await fetch("assets/js/lang.json").then(res => res.json()).catch(() => null);
  const t = langData ? langData[finalLang] : {};
  let showAll = false;

  const normalize = str => str.toLowerCase().replace(/\s+/g, '');
  const badgeColors = {
    "automatización": "#7C5CFA",
    "estrategia": "#D077F8",
    "ventas": "#22D060",
    "errorescomunes": "#F4498D",
    "educación": "#418BFA",
    "rayosx": "#F44336"
  };

  const filteredPosts = blogPosts.filter(p => p.lang === finalLang);

  const getLatestByCategory = () => {
    const map = {};
    filteredPosts.forEach(p => {
      const key = normalize(p.categories[0]);
      if (!map[key] || new Date(p.date) > new Date(map[key].date)) {
        map[key] = p;
      }
    });
    return Object.values(map);
  };

  function renderPosts(posts) {
    container.innerHTML = "";
    posts.forEach((post, index) => {
      const category = post.categories[0];
      const norm = normalize(category);

      const card = document.createElement("article");
      card.className = "w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row transition transform opacity-0 translate-y-6 duration-700";

      const imageWrapper = document.createElement("div");
      imageWrapper.className = "w-full md:w-1/3 flex-shrink-0";
      const image = document.createElement("img");
      image.src = post.image;
      image.alt = post.title;
      image.className = "w-full aspect-[4/3] object-cover";
      imageWrapper.appendChild(image);

      const content = document.createElement("div");
      content.className = "p-4 w-full md:w-2/3";

      const badge = document.createElement("span");
      badge.textContent = category;
      badge.className = "inline-block mb-2 px-4 py-1 text-sm font-semibold text-white rounded-full";
      badge.style.backgroundColor = badgeColors[norm] || "#CBD5E1";

      const title = document.createElement("h2");
      title.textContent = post.title;
      title.className = "text-xl font-bold mb-1 text-white";

      const date = document.createElement("p");
      date.textContent = post.date;
      date.className = "text-sm text-white/80 mb-2";

      const summary = document.createElement("p");
      summary.textContent = post.summary;
      summary.className = "text-white/90 mb-3 line-clamp-2";

      const readMore = document.createElement("a");
      readMore.href = post.link;
      readMore.className = "inline-block text-cyan-300 hover:underline font-semibold";
      readMore.textContent = t.readMore || (finalLang === "en" ? "Read more →" : "Leer más →");

      content.appendChild(badge);
      content.appendChild(title);
      content.appendChild(date);
      content.appendChild(summary);
      content.appendChild(readMore);

      card.appendChild(imageWrapper);
      card.appendChild(content);
      container.appendChild(card);

      setTimeout(() => {
        card.classList.remove("opacity-0", "translate-y-6");
      }, index * 100);
    });
  }

  // Primera carga: modo resumido
  renderPosts(getLatestByCategory());

  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      showAll = !showAll;
      viewAllBtn.textContent = showAll
        ? (t.viewLess || "Ver menos")
        : (t.viewAll || "Ver todos los artículos");
      const toRender = showAll ? filteredPosts : getLatestByCategory();
      renderPosts(toRender);
    });
  }
});