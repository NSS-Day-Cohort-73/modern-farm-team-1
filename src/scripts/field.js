const fieldArray = []

export const addPlant = (seed) => {
    if(Array.isArray(seed)) {
        seed.forEach(plant => fieldArray.push(plant))
    } else {
        fieldArray.push(seed)
    }
}

export const usePlants = () => {
    return fieldArray.slice()
}
