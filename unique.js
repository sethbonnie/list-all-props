function unique( arr ) {
  var _names = {};

  for ( var i = 0; i < arr.length; i++ ) {
    _names[arr[i]] = true;
  };

  return Object.keys( _names );
};

module.exports = unique;