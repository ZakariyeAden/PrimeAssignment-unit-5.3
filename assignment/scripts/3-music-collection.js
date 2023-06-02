console.log('***** Music Collection *****')


// Create a variable `collection` that starts as an empty array.

let collection = [];


// Question 2 : Add a function named `addToCollection`
function addToCollection(title,artist,yearPublished){
  // Object
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
console.log('Collection:', collection);


