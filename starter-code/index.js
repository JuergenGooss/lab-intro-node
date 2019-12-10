class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }
  

  add(item) {
      this.items.push(item);
      this.length = this.items.length;
      this.items = this.items.sort(function(a,b) {
      return a-b}); 
  }

  get(pos) {
    if (pos ===this.items.indexOf(pos)){
      return pos;
    }
    else throw new Error("OutOfBounds");
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[this.length - 1];
  }

  min() {
    if (this.length ===0) throw new Error("EmptySortedList");
    else return this.items[0]
  }

  sum() {
    if (this.length ===0) return 0;
    else return (this.items.reduce((acc,e) => {return acc + e}));
  } 

  avg() {
    if (this.length ===0) throw new Error("EmptySortedList");
    else return this.sum()/this.length;
  }
}

module.exports = SortedList;
