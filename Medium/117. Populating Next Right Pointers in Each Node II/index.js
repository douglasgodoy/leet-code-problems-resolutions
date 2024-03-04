var connect = function (root) {
  let queue = [root];
  while (queue[0]) {
    let qlen = queue.length;
    let next = null;
    for (let i = 0; i < qlen; i++) {
      let curr = queue.shift();
      curr.next = next;
      next = curr;
      if (curr.right) queue.push(curr.right);
      if (curr.left) queue.push(curr.left);
    }
  }
  return root;
};

console.log(
  JSON.stringify(
    connect({
      val: 1,
      right: {
        val: 3,
        right: {
          val: 7,
          right: null,
          left: null,
        },
        left: null,
      },
      left: {
        val: 2,
        right: {
          val: 5,
          right: null,
          left: null,
        },
        left: {
          val: 4,
          right: null,
          left: null,
        },
      },
    })
  )
);
