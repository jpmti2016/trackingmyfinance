import { getUtility, getRepair } from "../../graphql/queries";

export function asEnumeration(dictionary) {
  return Object.freeze({
    fromValue: value => {
      if (dictionary[value]) {
        return dictionary[value];
      }
      //   throw Error(`Invalid enumeration value ${value}`);
      return null;
    }
  });
}

const getEvenNumbers = () => {};

const getElementsInEvenPosition = () => {};

const getOddNumbers = () => {};

const getElementsInOddPosition = () => {};

const numbersEnumeration = asEnumeration({
  even: {
    getSequence: getEvenNumbers,
    getElementsByPositionType: getElementsInEvenPosition
  },
  odd: {
    getSequence: getOddNumbers,
    getElementsByPositionType: getElementsInOddPosition
  }
});

const categoryEnum = asEnumeration({
  housing: {
    getTitle: ""
  },
  phone: {},
  insurance: {},
  legal: {},
  grocery: {},
  commute: {},
  education: {},
  personalcare: {},
  pet: {},
  entertainment: {},
  loan: {},
  taxes: {},
  investment: {}
});

const getTitle = (expense, type) => {
  const title = expense && expense[type] ? expense[type].title : "";
  return title;
};

export const housingEnum = asEnumeration({
  "utility": {
    getTitle
  },
  "supply": {
    getTitle
  },
  "repair": {
    getTitle
  },
  "home": {
    getTitle
  },
  "other": {
    getTitle
  }
});

const fromValue = type => numbersEnumeration.fromValue(type);

// const getSequence = type => numbersEnumeration.fromValue(type).getSequence(10);
const getSequence = type => fromValue(type).getSequence(10);

// const getElementsByPositionType = (type, elements) => numbersEnumeration.fromValue(type).getElementsByPositionType(elements);
const getElementsByPositionType = (type, elements) =>
  fromValue(type).getElementsByPositionType(elements);

console.log(getSequence("even"));
console.log(getElementsByPositionType("odd", [6, 7, 8, 9, 10]));

// const getRepairTitle = (expense, isUpdating) => {
//   const title =
//     isUpdating && expense && expense.repair ? expense.repair.title : "";
//   return title;
// };
// const getHomeTitle = (expense, isUpdating) => {
//   const title =
//     isUpdating && expense && expense.home ? expense.home.title : "";
//   return title;
// };
// const getOtherHousing = (expense, isUpdating) => {
//   const title = isUpdating && expense && expense.home ? expense.home.title : "";
//   return title;
// };
// const getUtilityTitle = (expense, isUpdating) => {
//   const title =
//     isUpdating && expense && expense.utility ? expense.utility.title : "";
//   return title;
// };
