//import necessary modules
import {createPlan} from './plan.js'
import {plantSeeds} from './tractor.js'
import {usePlants} from './field.js'
import {harvestPlants, plantCount, myBarn} from './harvester.js'
import {catalogue} from './catalogue.js'
import { processor } from './processingFacility.js'




//Get HTML elements
const inventory = document.querySelector('.container')

//gets the plan for what seeds to plant
const yearlyPlan = createPlan()

//plants the seeds and adds them to the field array
plantSeeds(yearlyPlan)

//gets a copy of the field array and stores it in the harvest variable
const harvest = usePlants()

//stores an array of the output from each seed planted in an array called seedObjects
const seedObjects = harvestPlants(harvest)


const seedObject = plantCount(seedObjects)


const crops = myBarn.getCrops()
const belt = processor()
let farmStore = []

const processedGoods = {
    'Soybean': 'Bean paste',
    'Corn': 'Corn meal',
    'Sunflower': 'Sunflower Oil',
    'Asparagus': 'Pickled asparagus',
    'Wheat': 'Flour',
    'Potato': 'Potato chips'
}

// 3 Crops at a time on the belt
// Counter for managing the conveyor belt queue
let currentIndex = 0

for (let i = 0; i < crops.length; i++) {
    // Fill the belt with a maximum of 3 items at a time, using a separate index for the belt
    while (belt.size() < 3 && currentIndex < crops.length) {
        belt.enqueue(crops[currentIndex])
        currentIndex++ 
    }

    // Process items on the belt
    while (!belt.isEmpty()) {
        const crop = belt.dequeue()  
        if (crop.type in processedGoods) {
            farmStore.push(processedGoods[crop.type])  
        }

        // Make sure there's always at least 1 item on the belt until storage is empty
        if (currentIndex < crops.length) {
            belt.enqueue(crops[currentIndex]) 
            currentIndex++ 
        }
    }
}

// At the end, log the required messages
console.log('Storage Barn is ready for new crops')
console.log('Farm Store inventory is full and ready to open for business')


//Updates the DOM with the catalogue of plants.
inventory.innerHTML = catalogue(seedObject)





