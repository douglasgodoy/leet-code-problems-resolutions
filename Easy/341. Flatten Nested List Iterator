var NestedIterator = function (nestedList) {
  this.stack = [];
  this.recursiveSearch(nestedList);
};

NestedIterator.prototype.recursiveSearch = function(nestedList) {
    let n;
while (n = nestedList.pop()) {
    if (n.isInteger()) this.stack.push(n.getInteger());
    else this.recursiveSearch(n.getList());
  }
};

NestedIterator.prototype.hasNext = function () {
  return !!this.stack.length;
};

NestedIterator.prototype.next = function () {
  return this.stack.pop();
};
