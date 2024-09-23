import {barn} from "./storageBarn.js"

export const myBarn = barn()

export const harvestPlants = (arr) => {
    arr.sort((a, b) => a.type.localeCompare(b.type))
    let harvestArray = []
    for (const item of arr) {
        if (item.type === "Corn") {

            for (let i=0; i < item.output / 2; i++) {
                harvestArray.push({...item})
                myBarn.push(item)
            }
            
        } else {
            for (let x=0; x < item.output; x++) {
                harvestArray.push({...item})
                myBarn.push(item)
            }
        }
    }
    let startValue = 1

    for (const items of harvestArray) {
        if (!items.hasOwnProperty("id")) {
            items.id = startValue
        } 
        startValue++
        }
        
        
        

    
    return harvestArray
}

export const plantCount = (harvestedArray) => {
    const plantCounts = {}

    // Loop through each item in the array
    for (const plant of harvestedArray) {
        // If the plant type is not yet in the object, initialize its count and icon
        if (!plantCounts[plant.type]) {
            plantCounts[plant.type] = {
                count: 0,
                icon: plant.icon // Use the icon directly from the plant object
            }
        }

        // Increment the count of the specific plant type
        plantCounts[plant.type].count++
    }

    return plantCounts
}