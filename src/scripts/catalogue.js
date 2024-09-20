export const Catalog = (harvestedPlants) => {
    const container = document.querySelector('.container');
    harvestedPlants.forEach(plant => {
        const plantHTML = `<section class="plant">${plant.name}</section>`;
        container.innerHTML += plantHTML;
    });
};
