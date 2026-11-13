function route(){var h=(location.hash||"#home").slice(1);if(!["home","resume","biodata"].includes(h))h="home";
document.querySelectorAll(".view").forEach(function(v){v.classList.toggle("on",v.id===h)});
document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.dataset.v===h)});window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
