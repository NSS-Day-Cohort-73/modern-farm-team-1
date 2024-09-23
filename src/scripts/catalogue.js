export const catalogue = (harvestedPlants) => {
    let html = "";
    for (const plantType in harvestedPlants) {
        const plant = harvestedPlants[plantType];

        const plantHTML = `<section class="plants"><img src='${plant.icon}' alt='${plant.type}'>: ${plant.count}</section>`;
        html += plantHTML;
    }
    return html;
};
