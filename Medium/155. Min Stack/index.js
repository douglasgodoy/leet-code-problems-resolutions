var MinStack = function () {
  MinStack.prototype.stack = [];
  MinStack.prototype.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (!this.minStack.length) {
    return this.minStack.push(val);
  }

  if (this.minStack[this.minStack.length - 1] >= val) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stack.pop();
  if (this.minStack[this.minStack.length - 1] === val) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1] || null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1] || null;
};
