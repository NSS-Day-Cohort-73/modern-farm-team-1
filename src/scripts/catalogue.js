export const catalogue = (harvestedPlants) => {
    let html = "";
    harvestedPlants.forEach(plant => {
        const plantHTML = `<section class="plant">${plant.name}</section>`;
        html += plantHTML;
    });
};
