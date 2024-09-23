export const processor = () => {
    let conveyorBelt = []
return {
    enqueue: (removedCrop) => conveyorBelt.push(removedCrop),
    dequeue: () => conveyorBelt.shift(),
    next: () => conveyorBelt[0],
    last: () => conveyorBelt[conveyorBelt.length -1],
    isEmpty: () => conveyorBelt.length === 0, 
    size: () => conveyorBelt.length
    
}
}