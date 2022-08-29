/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let sender = [],
    destination = "";

  for (let i = 0; i < paths.length; i++) {
    const element = paths[i];
    sender.push(element[0]);
  }

  for (let i = 0; i < paths.length; i++) {
    const element = paths[i];
    if (!sender.includes(element[1])) destination = element[1];
  }
  return destination;
};

//O(nˆ2)

destCity([
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
]);

destCity([
  ["B", "C"],
  ["D", "B"],
  ["C", "A"],
]);
destCity([
  ["jMgaf WaWA", "iinynVdmBz"],
  [" QCrEFBcAw", "wRPRHznLWS"],
  ["iinynVdmBz", "OoLjlLFzjz"],
  ["OoLjlLFzjz", " QCrEFBcAw"],
  ["IhxjNbDeXk", "jMgaf WaWA"],
  ["jmuAYy vgz", "IhxjNbDeXk"],
]);
