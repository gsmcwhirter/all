
# all

  Similar functionality to python's 'all' (see http://docs.python.org/2/library/functions.html#all)

## Installation

    $ component install gsmcwhirter/all

## API

    $ var all = require("all");
    $ all([true, 'a', 1]); //true
    $ all([true, 0]); //false
    $ all([2, 3, 4], function (item){ return item % 2 === 0; }); //false
    
  The function provided has the signature:
    
    $ function all(iter, testFunc, context){...}
    
  The parameter testFunc has the following signature, similar to underscore's "each":
  
    $ function testFunc(item, index, iter){...}    

  This function returns false on the first false test, ignoring tests of any remaining items in the collection.
  
## License

  MIT
