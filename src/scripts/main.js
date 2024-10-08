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


const getCrops = myBarn.getCrops()

console.log(getCrops)

myBarn.pop()

myBarn.pop()

myBarn.pop()

myBarn.pop()

console.log(myBarn.peek())

console.log(getCrops)

const process = processor()

process.enqueue(myBarn.pop())


console.log(process.getBelt())


//Updates the DOM with the catalogue of plants.
inventory.innerHTML = catalogue(seedObject)





