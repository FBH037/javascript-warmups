module.exports = {
  sameLength: function(string1, string2) {
    if (string1.length === string2.length)
      return true
    else
      return false
  },
  firstGreater: function(one, two){
    if (one >  two)
    return true
  else
    return false
  },
  firstGreaterThanOrEqualTo: function(one, two){
    if (one >= two)
    return true
  else
    return false
  },
  firstLengthGreater: function(one, two){
    if (one === String){
      if (one.split("").length > two.split("").length)
        return true
      else
        return false
    }
    else if (one.length > two.length)
      return true
    else
      return false
  },
  secondGreater: function(one, two){
    if (one <  two)
    return true
  else
    return false
  },



}
