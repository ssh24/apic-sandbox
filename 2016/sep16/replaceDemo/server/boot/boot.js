// module.exports = function(server, done) {
//   var customers = server.models.customer;
//   server.dataSources.mysqlDs.automigrate('customer', function(err, props) {
//     if (err)
//       console.log(err);
//     console.log('Property: ' + props);
//   });
// }
module.exports = function(server, done) {
  // discovery
  var loopback = require('loopback');
  var fs = require('fs');

  var ds = loopback.createDataSource('mysql', {
    "host": "166.78.158.45",
    "port": 3306,
    "database": "strongloop",
    "username": "strongloop",
    "password": "str0ng100pjs"
  });
  ds.discoverSchema('testModel835', { owner: 'strongloop' }, function(err, result) {
    fs.writeFile('./common/models/testModel835.json', JSON.stringify(result, null, 2), function(err){
      if(err)
        console.log(err);
    });
    console.log(JSON.stringify(result, null, 2));
  });

  // // migrate
  // var schema_v1 = {
  //   "name": "testModel835",
  //   "base": "PersistedModel",
  //   "idInjection": true,
  //   "options": {
  //     "validateUpsert": true
  //   },
  //   "properties": {
  //     "name": {
  //       "type": "string",
  //       "required": false
  //     },
  //     "age": {
  //       "type": "number",
  //       "required": false
  //     }
  //   },
  //   "validations": [],
  //   "relations": {},
  //   "acls": [],
  //   "methods": {}
  // };

  // // var model = server.models.testModel835;

  // var ds = server.dataSources.mysqlDs;

  // // ds.createModel(schema_v1.name, schema_v1.properties, schema_v1.options);

  // ds.automigrate(function() {
  //   ds.discoverModelProperties('testModel835', function(err, props) {
  //     console.log(props);
  //   });
  // });
};
