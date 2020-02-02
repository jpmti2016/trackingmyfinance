export function asEnumeration(dictionary) {
    return Object.freeze({
        fromValue: value => {
            if (dictionary[value]) {
                return dictionary[value];
            }
            throw Error(`Invalid enumeration value ${value}`);
        }
    });
};

const getEvenNumbers = () => { }

const getElementsInEvenPosition = () => { }

const getOddNumbers = () => { }

const getElementsInOddPosition = () => { }

const numbersEnumeration = asEnumeration({
    'even': {
        getSequence: getEvenNumbers,
        getElementsByPositionType: getElementsInEvenPosition,
    },
    'odd': {
        getSequence: getOddNumbers,
        getElementsByPositionType: getElementsInOddPosition,
    }
});


const fromValue = type => numbersEnumeration.fromValue(type);

// const getSequence = type => numbersEnumeration.fromValue(type).getSequence(10);
const getSequence = type => fromValue(type).getSequence(10);

// const getElementsByPositionType = (type, elements) => numbersEnumeration.fromValue(type).getElementsByPositionType(elements);
const getElementsByPositionType = (type, elements) => fromValue(type).getElementsByPositionType(elements);

console.log(getSequence('even'));
console.log(getElementsByPositionType('odd', [6, 7, 8, 9, 10]));