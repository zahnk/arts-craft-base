// Seeds file that remove all components and create several new components

// To execute this seed, run from the root of the component
// $ node bin/seeds.js

const mongoose = require("mongoose");
const Components = require("../models/Component");

const dbName = 'arts-craft-base';
mongoose
  .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let components = [];
let max = 10;
let id = 0;
let desc = [ 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sed ornare mattis. 
Pellentesque maximus eros semper aliquet rhoncus. Ut ac molestie enim. Suspendisse dictum, mi non mattis aliquet, 
urna ipsum auctor metus, vehicula finibus quam turpis sit amet lacus.`,
`Vivamus lacinia tortor odio, at scelerisque sapien scelerisque at. Nunc id elit a eros elementum commodo porttitor ut enim. 
Praesent at ultrices orci. Integer sagittis odio at libero interdum, sit amet pellentesque turpis scelerisque.
Suspendisse vitae ante quis nunc ullamcorper faucibus. Quisque sed purus sollicitudin arcu congue aliquam.`,
`Pellentesque sollicitudin sapien non nibh vehicula, ac faucibus orci lacinia. Mauris risus arcu, efficitur ut lacus eget, 
accumsan facilisis ligula. Vivamus nec porttitor lorem. Integer semper nisi non elit commodo, non sollicitudin dolor volutpat. 
Vivamus mollis ex eu facilisis feugiat. Nulla facilisi. Nam sapien ipsum, ultrices id sodales ac, porta ac lectus.`,
`Nulla et nulla iaculis, efficitur diam ac, eleifend libero. Mauris mattis ligula euismod, rutrum ipsum eget, mattis nulla. 
Praesent nec augue eget libero eleifend mattis. Suspendisse faucibus arcu ut ligula tempor volutpat. 
Pellentesque nec molestie turpis. Donec mollis ex in magna ultrices, et placerat mi auctor.`
]; 

while( id < max )
{
  components.push( {
    name: `Component No.${id}`,
    description: desc[Math.floor(Math.random()*4)],
    imageUrl: imgName = "img_" + Math.floor(Math.random()*4) + ".png",
  
  });
  id++;
}

Components.deleteMany()
.then(() => {
  return Components.create(components)
})
.then(componentsCreated => {
  console.log(`${componentsCreated.length} components created with the following id:`);
  console.log(componentsCreated.map(c => c._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})