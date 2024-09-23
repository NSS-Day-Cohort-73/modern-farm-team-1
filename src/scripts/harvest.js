export const harvestPlants = (arr) => {
    let harvestArray = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            for (const object of item) {
                const output = object.output / 2
                for (let i=0; i < output; i++) {
                    harvestArray.push(object)
                }

            }
        } else {
            for (let x=0; x < item.output; x++) {
                harvestArray.push(item)
            }
        }
    }
    let startValue = 1

    for (items of harvestArray) {
        if (!items.hasOwnProperty("id")) {
            items.id = startValue
        } else {items.id = startValue}
        startValue ++
        }
        
    
    return harvestArray
}
