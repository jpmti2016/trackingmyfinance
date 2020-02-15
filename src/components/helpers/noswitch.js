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
