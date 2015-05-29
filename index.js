var unique = require( './unique' );

function listAllProps( obj ) {
  var result = [];
  var prototype;

  if ( obj !== null && typeof obj === 'object' ) {
    result = result.concat( Object.getOwnPropertyNames(obj) );
    prototype = Object.getPrototypeOf( obj );

    if ( prototype ) {
      result = result.concat( listAllProps(prototype) );
    }
  }

  // Be sure to remove dups
  return unique( result );
};

module.exports = listAllProps;