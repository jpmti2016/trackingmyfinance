export const asEnumeration = dictionary => {
  return Object.freeze({
    fromValue: value => {
      if (dictionary[value]) {
        return dictionary[value];
      }
      throw new Error(`Invalid enumeration value ${value}`);
    }
  });
};

//Descriptions from ramda

// Map

// Takes a function and a functor, applies the function to each of the functor's values,
// and returns a functor of the same shape.

// Ramda provides suitable map implementations for Array and Object,
// so this function may be applied to [1, 2, 3] or {x: 1, y: 2, z: 3}.

// Dispatches to the map method of the second argument, if present.

// Acts as a transducer if a transformer is given in list position.

// Also treats functions as functors and will compose them together.

export const map = f => arr => arr.map(f);

// Pipe

// Performs left-to-right function composition. The first argument may have any arity;
// the remaining arguments must be unary.

// In some libraries this function is named sequence.

export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

//Dissoc

// Returns a new object that does not contain a prop property.

export const dissoc = prop => ({ [prop]: _, ...obj }) => obj;

// Map object

// An Object-specific version of map. The function is applied to three arguments: (value, key, obj).
// If only the value is significant, use map instead.

export const mapObject = f => obj =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: f(obj[key]) }), {});

export const replaceEmptyStringWithNull = x => (x === "" ? null : x);

export const prepareArrayOfObjects = prop =>
  map(pipe(dissoc(`${prop}`), mapObject(replaceEmptyStringWithNull)));

export const replacePropEmptyString = mapObject(replaceEmptyStringWithNull);
