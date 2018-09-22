class Sorter {
      constructor() {
        this.arr = [];
        this.compareFunction = function(a, b) {
            return a - b;
          }    
      }

      add(element) {
        return this.arr.push(element);
      }

      at(index) {
        return this.arr[index];
      }

      get length() {
        return this.arr.length
      }

      toArray() {
        return this.arr;
      }

      sort(indices) {
        var addSort = []; 
        var num = indices.length-1;  
        for (var i = num;  i >= 0; i--) {
          addSort.push(this.arr[indices[i]]);
        }        
        
        addSort.sort(this.compareFunction);
        indices.sort();

        for (var i = num;  i >= 0; i--) {
          this.arr[indices[i]] = addSort[i];
        }

        return this.arr;
      }

      setComparator(compareFunction) {
        return this.compareFunction = compareFunction;
      }
}

module.exports = Sorter;