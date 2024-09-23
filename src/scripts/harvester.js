export const harvestPlants = (arr) => {
    let harvestArray = []
    for (const item of arr) {
        if (item.type === "Corn") {

            for (let i=0; i < item.output / 2; i++) {
                harvestArray.push(item)
            }
            
        } else {
            for (let x = 0; x < item.output; x++) {
                harvestArray.push(item)  
            }
        }
    }

    
    return harvestArray
}