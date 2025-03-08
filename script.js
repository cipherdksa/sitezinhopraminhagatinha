function criarPetala() {
    const petala = document.createElement("div");
    petala.classList.add("petala");
    petala.style.left = Math.random() * window.innerWidth + "px"; // Posição aleatória
    petala.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Velocidade aleatória
    
    document.querySelector(".petalas-container").appendChild(petala);

    setTimeout(() => {
        petala.remove();
    }, 5000); // Remove a pétala após 5 segundos
}

setInterval(criarPetala, 300); // Gera pétalas a cada 300ms




