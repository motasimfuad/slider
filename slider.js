fetch("https://cdn.jsdelivr.net/gh/motasimfuad/slider/slider.txt")
  .then(res => res.text())
  .then(status => {
    if (status.trim() === "on") {
      document.body.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:white;font-size:2rem;">gocha</div>';
    }
  })
  .catch(err => console.error("Slider error:", err));
