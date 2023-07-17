function insert(array, value, position) {
    array.splice(position, 0, value);
    return array;
  }
  
  function deleteElement(array, position) {
    array.splice(position, 1);
    return array;
  }
  
  function find(array, value) {
    return array.indexOf(value);
  }
  
  module.exports = {
    insert,
    deleteElement,
    find
  };