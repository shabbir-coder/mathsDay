const planetsInfo = {
    mercury: "Mercury is the closest planet to the Sun.",
    venus: "Venus has a thick atmosphere and is the hottest planet.",
    earth: "Earth is the only planet known to support life.",
    mars: "Mars is known as the Red Planet.",
    jupiter: "Jupiter is the largest planet in the solar system.",
    saturn: "Saturn is famous for its stunning ring system.",
    uranus: "Uranus rotates on its side, unlike other planets.",
    neptune: "Neptune is known for its intense blue color."
  };
  
  // Rotate planets
  function rotatePlanets() {
    const orbits = document.querySelectorAll(".orbit");
    orbits.forEach((orbit, index) => {
      const planet = orbit.querySelector(".planet");
      const radius = orbit.offsetWidth / 2;
      const speed = 10000 * (index + 1); // Adjust speed per planet
      let angle = 0;
  
      setInterval(() => {
        angle = (angle + 0.5) % 360;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);
        planet.style.transform = `translate(${x}px, ${y}px)`;
      }, speed / 360);
    });
  }
  
  // Display planet info
  document.querySelectorAll(".planet").forEach((planet) => {
    planet.addEventListener("click", (event) => {
      const planetId = event.target.id;
      const infoPanel = document.getElementById("info-panel");
      infoPanel.innerHTML = `<h2>${planetId.toUpperCase()}</h2><p>${planetsInfo[planetId]}</p>`;
    });
  });
  
  rotatePlanets();
  