/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.replace(/\/\//gi, "/");
  if (path.endsWith("/")) path = path.substring(0, path.length - 1);

  const splitedPath = path.split("/");
  const stack = [];

  for (let i = 0; i < splitedPath.length; i++) {
    const char = splitedPath[i];
    if (!char) continue;
    if (char === "..") {
      stack.pop();
      continue;
    }

    if (char === ".") continue;

    stack.push(char);
  }

  let result = stack.join("/");
  result = result.replace(/\/\//gi, "/");
  if (result.startsWith("/")) return result;
  return `/${result}`;
};

console.log(
  simplifyPath(
    "/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///"
  )
);
