module.exports = {

  first: function(array) {
    return array[0]
  },
  last: function(array){
    return array[array.length - 1]
  },
  empty: function(array){
    if (array[0] === undefined)
      return true
    else
      return false
  },
  first_n: function(array, n){
    if(array[0] === undefined)
      return []
    else
      return array.slice(0, n)
  },
  last_n: function(array, n){
    if(array[0] === undefined)
      return []
    else if ( array.length < n)
      return array
    else
      return array.slice(array.length-n, array.length)
  },
  drop: function(array, n){
    if(array[0] === undefined || array.length < n)
      return []
    else
      return array.slice(array.length-n, array.length)
  },
  union: function(ar1, ar2){
    return [].concat(ar1, ar2)
  },
  intersection: function(ar1, ar2){
    var intersect = []
    for(var i = 0; i < ar1.length; i++){
      for(var b = 0; b < ar2.length; b++){
        if(ar1[i] === ar2[b])
          intersect.push(ar2[b])
      }
    }
    return intersect
  }

}
