console.log('***** Music Collection *****')


// Create a variable `collection` that starts as an empty array.

let collection = [];


// Question 2 : Add a function named `addToCollection`
function addToCollection(title,artist,yearPublished){
  // Make an Object
  let album = {
    albumtitle: title,
    albumtArtist: artist,
    albumYear: yearPublished
  }
  // Push it to the Collection array
  collection.push(album);
  return album;
}
// Show in the Console
addToCollection('Music', 'Ahmed', 2000);
addToCollection('Music2', 'abdi', 1992);
console.log('Collection:', collection);


// Question 3 : Add a function named `showCollection`.
function showCollection(collect){
  // Loop through Array
  for(let collects of collect){
    console.log(`title by ${collects.albumtArtist}, published by ${collects.albumYear}`);
  }
}
// Show in the Console
showCollection(collection);
// console.log('showCollection', showCollection());



// Question 4 : Add a function named `findByArtist`. This function should:
function findByArtist(artist){
  // Storage
  let storage = [];
    for(let singer of collection){
      // Find the matching artist 
      if(singer.albumtArtist === artist){
        // Push to empty array
        storage.push(singer)
      } else {
        // If not found return an empty array
        storage = [];
      }
      return storage;
    }
  }

console.log('Find My Artist', findByArtist('Ahmed'));



