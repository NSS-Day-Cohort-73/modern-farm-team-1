export const catalogue = (harvestedPlants) => {
    let html = "";
    harvestedPlants.forEach(plant => {
        const plantHTML = `<section class="plants">${plant.type}</section>`;
        html += plantHTML;
    });
    return html
};
