export const barn = () => {
    let crops = []

    return {
        push: (crop) => crops.push(crop), 
        pop: () => crops.pop(),            
        peek: () => crops[crops.length - 1], 
        isEmpty: () => crops.length === 0  
    }
}