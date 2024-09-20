const harvestPlants = (arr) => {
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
            for (let n=0; n < item.output; n++) {
                harvestArray.push(item)
            }
        }
    }
    return harvestArray
}

const testArray = [
    { type: "Peanut", height: 30, output: 2 },
    { type: "Peanut", height: 30, output: 2 },
    [
        { type: "corn", height: 20, output: 6 },
        { type: "corn", height: 20, output: 6 }
    ],
    { type: "Wheat", height: 25, output: 4 },
    { type: "Wheat", height: 25, output: 4 },
    [
        { type: "corn", height: 20, output: 6 },
        { type: "corn", height: 20, output: 6 }
    ],
    { type: "Soybean", height: 35, output: 3 },
    { type: "Soybean", height: 35, output: 3 },
    [
        { type: "corn", height: 20, output: 6 },
        { type: "corn", height: 20, output: 6 }
    ],
    { type: "Rice", height: 22, output: 5 },
    { type: "Rice", height: 22, output: 5 },
    [
        { type: "corn", height: 20, output: 6 },
        { type: "corn", height: 20, output: 6 }
    ],
    { type: "Tomato", height: 40, output: 7 },
    { type: "Tomato", height: 40, output: 7 },
    [
        { type: "corn", height: 20, output: 6 },
        { type: "corn", height: 20, output: 6 }
    ],
    { type: "Barley", height: 28, output: 4 },
    { type: "Barley", height: 28, output: 4 },
    [
        { type: "corn", height: 20, output: 6 },
        { type: "corn", height: 20, output: 6 }
    ]
]

console.log(harvestPlants(testArray))