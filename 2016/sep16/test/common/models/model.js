var schema_v1 = {
  "name": "test-model-835",
  "base": "PersistedModel",
  "idInjection": false,
  "options": {
    "validateUpsert": true
  },
  "mysql": {
    "schema": "strongloop",
    "table": "test-model-835"
  },
  "properties": {
    "id": {
      "type": "Number",
      "length": 20,
      "id": 1
    },
    "age": {
      "type": "Number",
      "required": false,
      "length": null
    },
    "name": {
      "type": "String",
      "required": false,
      "length": 512
    }
  }
};

var ds = Model.app.dataSources.mysql;

ds.createModel(schema_v1.name, schema_v1.properties, schema_v1.options);

ds.automigrate(function() {
  ds.discoverModelProperties('test-model-835', function(err, props) {
    if(err) 
      console.log(err);
    console.log(props);
  });
});
