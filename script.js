const modal = document.getElementById("modal");
const searchInput = document.querySelector(".search-box input");
const vehicles = document.querySelectorAll(".vehicle");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  vehicles.forEach(vehicle => {
    const text = vehicle.innerText.toLowerCase();
    vehicle.style.display = text.includes(value) ? "block" : "none";
  });
});

