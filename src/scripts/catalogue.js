export const catalogue = (harvestedPlants) => {
    let html = "";
    harvestedPlants.forEach(plant => {
        const plantHTML = `<section class="plants"><img src='${plant.icon}' alt='${plant.type}'> ${plant.type}</section>`;
        html += plantHTML;
    });
    return html
};
