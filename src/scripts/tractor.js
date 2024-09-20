import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createWheat} from "./seeds/wheat.js"
import {createPotato} from "./seeds/potato.js"
import {createCorn} from "./seeds/corn.js"

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const item of row) {
            if (item === "Soybean") {
                addPlant(createSoybean())
            } else if (item === "Sunflower") {
                addPlant(createSunflower())
            } else if (item === "Asparagus") {
                addPlant(createAsparagus)
            } else if (item === "Wheat") {
                addPlant(createWheat())
            } else if (item === "Potato") {
                addPlant(createPotato())
            } else if (item === "Corn") {
                addPlant(createCorn())
            }
        }
    }
}