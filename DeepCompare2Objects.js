const deepEqual = (object1, object2) => {
  // get object keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // if mismatched keys
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    // get the values
    const val1 = object1[key];
    const val2 = object2[key];
    // if both values are objects
    const areObjects =
      val1 && typeof val1 === "object" && val2 && typeof val2 === "object";
    // if are objects
    if (areObjects) {
      // deep check again
      if (!deepEqual(val1, val2)) {
        return false;
      }
    }
    // if are not objects
    // compare the values
    else if (!areObjects && val1 !== val2) {
      return false;
    }
  }
  return true;
};

//Input case 1
const obj1 = {
  name: "learnersbucket",
  details: {
    x: [1, 2],
    y: 2,
  },
};
const obj2 = {
  name: "learnersbucket",
  details: {
    y: 2,
    x: [1, 2],
  },
};

console.log(deepEqual(obj1, obj2));
