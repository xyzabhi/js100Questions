const flatten = (obj, prefix) => {
  //store result
  let output = {};
  //iterate over the object
  for (k in obj) {
    let val = obj[k];
    //new key
    let newKey = prefix ? prefix + "." + k : k;
    //Array and object both object in js
    if (typeof val === "object") {
      //If it is array
      if (Array.isArray(val)) {
        //Use rest and spread tpogether to convert array to object
        const { ...arrayToObj } = val;
        const newObj = flatten(arrayToObj, newKey);
        output = { ...output, ...newObj };
      }
      //else if it object
      else {
        const newObj = flatten(val, newKey);
        output = { ...output, ...newObj };
      }
    }
    //If value is primitive
    else {
      output = { ...output, [newKey]: val };
    }
  }
  return output;
};

const object = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

console.log(flatten(object));
