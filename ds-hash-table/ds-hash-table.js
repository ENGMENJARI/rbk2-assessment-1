var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      var index=hashFn(key,4)
      for(var i=0;i<_storage[index].length;i++){
        if(_storage[index][i][0]===key){
          return _storage[index][i][1]
        }
      }
      //your code is here

    },

    insert: function(key, value) {
      var index=hashFn(key,4)
      var found=true
      if(!_storage[index]){
        _storage[index]=[]
      }
      for(var i=0;i<_storage[index].length;i++){
        if(_storage[index][i][0]===key){
          _storage[index][i][1]===value
        }
        found=false
      }

      //your code is here
  };
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};