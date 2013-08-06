
module.exports = function all(iter, testFunc, context){
  if (iter == null) return;

  if (typeof testFunc !== "function"){
    testFunc = function (item){
      return item; //tests general truthiness
    };
  }
  
  //array-like
  if (iter.length === +iter.length) {
    for (var i = 0, l = iter.length; i < l; i++) {
      if (testFunc.call(context, iter[i], i, iter)){
        //pass
      }
      else {
        return false;
      }
    }
    
    return true;
  }
  //object-like 
  else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (iterator.call(context, obj[key], key, obj)){
          //pass
        }
        else {
          return false;
        }
      }
    }
    
    return true;
  }
  
};
