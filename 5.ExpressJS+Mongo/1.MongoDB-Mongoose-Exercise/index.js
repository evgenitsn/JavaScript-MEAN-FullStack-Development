/**
 * Created by evgeni.tsn on 17-Oct-16.
 */

let db = require('./instanode-db')

// Save new entry to DB

// db.saveImage(
//   { url: `https://kotka.com/KOTKATA`,
//     description: `such cat much wow`,
//     tags: [`catstagram`] })

// Find Cats by Tag

db.findByTag('cute')

// Find Cats between 2 Dates with limit

// db.findBetweenDates(new Date(2015, 9, 19), new Date(2016, 9, 19), 2)

// Find Cats between 2 Dates without limit

// db.findBetweenDates(new Date(2015, 9, 19), new Date(2016, 9, 19))

