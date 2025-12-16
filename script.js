const modal = document.getElementById("modal");
const searchInput = document.getElementById("searchInput");
const vehicles = document.querySelectorAll(".vehicle");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toUpperCase();
  vehicles.forEach(v => {
    v.style.display = v.dataset.vehicle.includes(value) ? "block" : "none";
  });
});
