import { API, graphqlOperation } from "aws-amplify";

import {
  includeObjectProps,
  replacePropEmptyString,
  asEnumeration,
} from "../../helpers/utilities";

import {
  createAcademicFee,
  updateAcademicFee,
  deleteAcademicFee,
} from "../../../graphql/mutations";

import { getAcademicFee, listAcademicFees } from "../../../graphql/queries";

import {
  handleCreatePeriod,
  handleUpdatePeriod,
  handleDeletePeriod,
  handleFormatPeriod,
} from "./period";

// import { partAsEnum } from "./part";

export const academicFeeAsEnum = asEnumeration({
  COLLEGE: {
    idName: "academicFeeCollegeId",
  },
  COMMUNITYCOLLEGE: {
    idName: "academicFeeCommunityCollegeId",
  },
});

export const handleCreateAcademicFee = async (data, expensePart) => {
  try {
    let academicFeePeriodId = null;
    const period = expensePart.period ? expensePart.period : null;
    const periodFormated = handleFormatPeriod(data, period);
    const periodFormatedValues = Object.values(periodFormated);

    const notNull = (x) => x; //null should return as false
    if (periodFormatedValues.some(notNull)) {
      academicFeePeriodId = await handleCreatePeriod(periodFormated);
    }
    const academicFeePreformated = handleFormatAcademicFee(data, expensePart);

    const academicFeeFormated = {
      ...academicFeePreformated,
      academicFeePeriodId,
    };

    const result = await API.graphql(
      graphqlOperation(createAcademicFee, { input: { ...academicFeeFormated } })
    );

    return result.data.createAcademicFee;
  } catch (error) {
    console.error("handle create academic fee", error);
  }
};

export const handleDeleteAcademicFee = async (expensePart) => {
  try {
    const { id } = expensePart;
    if (expensePart.period) {
      const periodId = expensePart.period.id;
      await handleDeletePeriod(periodId);
    }

    const result = await API.graphql(
      graphqlOperation(deleteAcademicFee, { input: { id } })
    );

    return result.data.deleteAcademicFee.id;
  } catch (error) {
    console.error("handle delete academic fee", error);
  }
};

export const handleUpdateAcademicFee = async (data, expensePart) => {
  try {
    const period = expensePart.period ? expensePart.period : null;

    const periodFormated = handleFormatPeriod(data, period);

    const periodFormatedValues = Object.values(periodFormated);
    const notNull = (x) => x; // null return false

    let academicFeePeriodId = periodFormated.id ? periodFormated.id : null;

    if (periodFormatedValues.some(notNull)) {
      if (academicFeePeriodId) {
        await handleUpdatePeriod(periodFormated);
      } else {
        academicFeePeriodId = await handleCreatePeriod(periodFormated);
      }
    }

    const academicFeePreFormated = handleFormatAcademicFee(data, expensePart);

    const academicFeeFormated = {
      ...academicFeePreFormated,
      academicFeePeriodId,
    };

    const result = await API.graphql(
      graphqlOperation(updateAcademicFee, { input: { ...academicFeeFormated } })
    );

    return result.data.updateAcademicFee;
  } catch (error) {
    console.error("handle update academic fee", error);
  }
};

export const handleFormatAcademicFee = (data, expensePart) => {
  try {
    const academicFeeStructure = {
      ...includeObjectProps(data, [
        "tuitionAndFees",
        "booksAndSupplies",
        "roomAndBoard",
        "transportation",
        "personal",
      ]),
    };

    const newProduct = {
      ...replacePropEmptyString(academicFeeStructure),
      // the needed prop's name (academicFeeCollegeId OR academicFeeCommunityCollegeId)
      // depend of the nature value (COLLEGE or COMMUNITYCOLLEGE)
      // and the idName is a prop of the academicFeeAsEnum for the type COLLEGE OR COMMUNITYCOLLEGE
      [academicFeeAsEnum.fromValue(expensePart.nature.toUpperCase())
        .idName]: expensePart.natureId ? expensePart.natureId : null,
      academicFeePeriodId: expensePart.period ? expensePart.period.id : null,
    };

    if (expensePart.id) {
      const updatedProduct = {
        ...includeObjectProps(expensePart, [
          "id",
          "tuitionAndFees",
          "booksAndSupplies",
          "roomAndBoard",
          "transportation",
          "personal",
        ]),
        ...newProduct,
      };

      return updatedProduct;
    }

    return newProduct;
  } catch (error) {
    console.error("handle format academic fee", error);
  }
};

export const handleListAcademicFee = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listAcademicFees, { input: {} })
    );

    return result.data.listAcademicFees.items;
  } catch (error) {
    console.error("handle list academis fee", error);
  }
};

export const handleGetAcademicFee = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getAcademicFee, { input: { id } })
    );

    return result.data.getAcademicFee;
  } catch (error) {
    console.error("handle get academic fee", error);
  }
};
