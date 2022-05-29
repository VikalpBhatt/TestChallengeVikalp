function getFinalValue(object, key) {
    
  const keys = key.split('/');
  let obj = object;
  for (let ikey of keys) {
      for (let [objKey, value] of Object.entries(obj)) {
          if(!keys.includes(objKey)) {
              continue; //run till we find a match
          }
          obj = value;
      }
  }
  return obj;
}
module.exports = getFinalValue;
