var recipes = {};
var newObj = Object.assign({}, object);

function updateObjectWithKeyAndValue(object, key, value) {
 
  return Object.assign({}, object, { [key]: value })
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  
  return object
  
}

function deleteFromObjectByKey(object, key){
  Object.assign({}, object)
  delete object.key)
  return object
  
}