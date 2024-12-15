const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const container = document.getElementById("container");

// modal
const openModal = () => {
    modal.classList.add("open-popup");
    container.style.opacity = "0.6";
    modal.style.opacity = "1";    
}
closeModal.onclick = () => {
    modal.style.display = "none"
    container.style.opacity = "1";
};