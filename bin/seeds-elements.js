// Seeds file that remove all components and create several new components

// To execute this seed, run from the root of the component
// $ node bin/seeds.js

const mongoose = require("mongoose");
const Components = require("../models/Element");

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

components.push( {
    element:     'InputText',
    description: 'FORM-INPUT of type text',
    eltype:      'text',

    fixedProps:    [
      { prop: 'name'        , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'label'       , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'placeholder' , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'readonly'    , typ: 'checkbox', disp: 'Boolean', def: false },
      { prop: 'required'    , typ: 'checkbox', disp: 'Boolean', def: false }
    ],

    variableProps: [
      { prop: 'maxlength'   , typ: 'number', disp: 'Number', def: 100 }
    ],
    status: false 
  }
);

components.push( {
    element:     'InputNumber',
    description: 'FORM-INPUT of type number',
    eltype:      'number',

    fixedProps:    [
      { prop: 'name'        , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'label'       , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'placeholder' , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'readonly'    , typ: 'checkbox', disp: 'Boolean', def: false },
      { prop: 'required'    , typ: 'checkbox', disp: 'Boolean', def: false }
    ],

    variableProps: [
      { prop: 'min'         , typ: 'number', disp: 'Number', def: 0 },
      { prop: 'max'         , typ: 'number', disp: 'Number', def: 100 },
      { prop: 'step'        , typ: 'number', disp: 'Number', def: 1 }
    ],
    status: false 
  }
);

components.push( {
    element:     'InputColor',
    description: 'FORM-INPUT of type color',
    eltype:      'color',

    fixedProps:    [
      { prop: 'name'        , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'label'       , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'placeholder' , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'readonly'    , typ: 'checkbox', disp: 'Boolean', def: false },
      { prop: 'required'    , typ: 'checkbox', disp: 'Boolean', def: false }
    ],

    variableProps: [
      { prop: 'color'       , typ: 'color', disp: 'Color', def: '#0000000' }
    ],
    status: false 
  }
);

components.push( {
    element:     'InputCheckBox',
    description: 'FORM-INPUT of type checkbox',
    eltype:      'checkbox',

    fixedProps:    [
      { prop: 'name'        , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'label'       , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'placeholder' , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'readonly'    , typ: 'checkbox', disp: 'Boolean', def: false },
      { prop: 'required'    , typ: 'checkbox', disp: 'Boolean', def: false }
    ],

    variableProps: [
      { prop: 'checked'     , typ: 'checkbox', def: false }
    ],
    status: false 
  }
);

components.push( {
    element:     'InputTextArea',
    description: 'FORM-INPUT of type textarea',
    eltype:      'textarea',

    fixedProps:    [
      { prop: 'name'        , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'label'       , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'placeholder' , typ: 'text',     disp: 'String',  def: '' },
      { prop: 'readonly'    , typ: 'checkbox', disp: 'Boolean', def: false },
      { prop: 'required'    , typ: 'checkbox', disp: 'Boolean', def: false }
    ],

    variableProps: [
      { prop: 'maxlength'   , typ: 'number', disp: 'Number', def: 100 },
      { prop: 'wrap'        , typ: 'text',   disp: 'String', def: 'soft' }
    ],
    status: false
  }
);

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