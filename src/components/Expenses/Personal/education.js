import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
  asEnumeration,
} from "../../helpers/utilities";

import {
  createCommunityCollege,
  deleteCommunityCollege,
  updateCommunityCollege,
  createBootcamp,
  deleteBootcamp,
  updateBootcamp,
  createCollege,
  deleteCollege,
  updateCollege,
  createOnlineCourse,
  deleteOnlineCourse,
  updateOnlineCourse,
  createTraining,
  deleteTraining,
  updateTraining,
  createEducationExpense,
  deleteEducationExpense,
  updateEducationExpense,
} from "../../../graphql/mutations";

import {
  getCollege,
  listColleges,
  getOnlineCourse,
  listOnlineCourses,
  getCommunityCollege,
  listCommunityColleges,
  getTraining,
  listTrainings,
  getBootcamp,
  listBootcamps,
  getEducationExpense,
  listEducationExpenses,
} from "../../../graphql/queries";

import {
  handleCreatePeriod,
  handleFormatPeriod,
  handleUpdatePeriod,
  handleDeletePeriod,
} from "./period";

// College

export const handleFormatCollege = (data, college) => {
  try {
    //TODO have to add images field
    const collegeStructure = {
      program: data.edProgram ? data.edProgram : null,
      university: data.edUniversity ? data.edUniversity : null,
      school: data.edSchool ? data.edSchool : null,
      title: data.edTitle ? data.edTitle : null,
      notes: data.edNotes ? data.edNotes : null,
    };

    const newCollege = {
      ...replacePropEmptyString(collegeStructure),
    };

    if (college) {
      const updatedCollege = {
        ...includeObjectProps(college, [
          "id",
          "program",
          "university",
          "school",
          "title",
          "notes",
        ]),
        ...newCollege,
      };

      return updatedCollege;
    }

    return newCollege;
  } catch (error) {
    console.error("handle format college", error);
  }
};

export const handleCreateCollege = async (data) => {
  try {
    const formattedCollege = handleFormatCollege(data, null);

    const result = await API.graphql(
      graphqlOperation(createCollege, { input: { ...formattedCollege } })
    );
    return result.data.createCollege;
  } catch (error) {
    console.error("handle create college", error);
  }
};

export const handleUpdateCollege = async (data, college) => {
  try {
    const formattedCollege = handleFormatCollege(data, college);
    const result = await API.graphql(
      graphqlOperation(updateCollege, { input: { ...formattedCollege } })
    );
    return result.data.updateCollege;
  } catch (error) {
    console.error("handle update college", error);
  }
};

export const handleDeleteCollege = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteCollege, { input: { id } })
    );
    return result.data.deleteCollege;
  } catch (error) {
    console.error("handle delete college", error);
  }
};

export const handleListCollege = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listColleges, { input: {} })
    );
    return result.data.listBootcamps.items;
  } catch (error) {
    console.error("handle list college", error);
  }
};

export const handleGetCollege = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getCollege, { input: { id } })
    );
    return result.data.getCollege;
  } catch (error) {
    console.error("handle get college", error);
  }
};

//Online Course
export const handleFormatOnlineCourse = (data, onlineCourse) => {
  try {
    //TODO have to add images field and batch instructor CRUDL
    const onlineCourseStructure = {
      title: data.edTitle ? data.edTitle : null,
      university: data.edUniversity ? data.edUniversity : null,
      school: data.edSchool ? data.edSchool : null,
      description: data.edOnlineDesc ? data.edOnlineDesc : null,
      notes: data.edNotes ? data.edNotes : null,
      platform: data.edOnlinePlatf ? data.edOnlinePlatf : null,
      url: data.url ? data.url : null,
      onlineCoursePeriodId: null,
    };

    const newOnlineCourse = {
      ...replacePropEmptyString(onlineCourseStructure),
    };
    if (onlineCourse) {
      const onlineCoursePeriodId = onlineCourse.period
        ? onlineCourse.period.id
        : null;
      const updatedOnlineCourse = {
        ...includeObjectProps(onlineCourse, [
          "id",
          "title",
          "university",
          "school",
          "description",
          "notes",
          "platform",
          "url",
        ]),
        ...newOnlineCourse,
        onlineCoursePeriodId,
      };

      return updatedOnlineCourse;
    }

    return newOnlineCourse;
  } catch (error) {
    console.error("handle format online course", error);
  }
};

export const handleCreateOnlineCourse = async (data) => {
  try {
    const onlineCoursePreFormatted = handleFormatOnlineCourse(data, null);

    let { onlineCoursePeriodId } = onlineCoursePreFormatted;

    const periodFormatted = handleFormatPeriod({
      billingStart: data.edPeriodStart,
      billingEnd: data.edPeriodEnd,
    });

    const periodFormatedValues = Object.values(periodFormatted);
    const notNull = (x) => x; //null return true

    if (periodFormatedValues.some(notNull)) {
      onlineCoursePeriodId = await handleCreatePeriod(periodFormatted);
    }

    const onlineCourseFormatted = {
      ...onlineCoursePreFormatted,
      onlineCoursePeriodId,
    };

    const result = await API.graphql(
      graphqlOperation(createOnlineCourse, {
        input: { ...onlineCourseFormatted },
      })
    );

    return result.data.createOnlineCourse;
  } catch (error) {
    console.error("handle create online course", error);
  }
};

export const handleUpdateOnlineCourse = async (data, onlineCourse) => {
  try {
    const onlineCoursePreFormatted = handleFormatOnlineCourse(
      data,
      onlineCourse
    );

    let { onlineCoursePeriodId } = onlineCoursePreFormatted;

    const period = onlineCourse.period ? onlineCourse.period : null;

    const periodFormatted = handleFormatPeriod(
      {
        billingStart: data.edPeriodStart,
        billingEnd: data.edPeriodEnd,
      },
      period
    );
    const periodFormatedValues = Object.values(periodFormatted);
    const notNull = (x) => x; //null return true

    if (periodFormatedValues.some(notNull)) {
      if (onlineCoursePeriodId) {
        await handleUpdatePeriod(periodFormatted);
      } else {
        onlineCoursePeriodId = await handleCreatePeriod(periodFormatted);
      }
    }

    const onlineCourseFormatted = {
      ...onlineCoursePreFormatted,
      onlineCoursePeriodId,
    };

    const result = await API.graphql(
      graphqlOperation(updateOnlineCourse, {
        input: { ...onlineCourseFormatted },
      })
    );

    return result.data.updateOnlineCourse;
  } catch (error) {
    console.error("handle update online course", error);
  }
};

export const handleDeleteOnlineCourse = async (onlineCourse) => {
  try {
    if (onlineCourse.period) {
      await handleDeletePeriod(onlineCourse.period.id);
    }

    const { id } = onlineCourse;
    const result = await API.graphql(
      graphqlOperation(deleteOnlineCourse, { input: { id } })
    );

    return result.data.deleteOnlineCourse;
  } catch (error) {
    console.error("handle delete online course", error);
  }
};

export const handleListOnlineCourse = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listOnlineCourses, { input: {} })
    );

    return result.data.listOnlineCourses.items;
  } catch (error) {
    console.error("handle list online course", error);
  }
};

export const handleGetOnlineCourse = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getOnlineCourse, { input: { id } })
    );
    return result.data.getOnlineCourse;
  } catch (error) {
    console.error("handle get online course", error);
  }
};

// Community College
export const handleFormatCommunityCollege = (data, communityCollege) => {
  try {
    //TODO have to add images field
    const communityCollegeStructure = {
      program: data.edProgram ? data.edProgram : null,
      university: data.edUniversity ? data.edUniversity : null,
      school: data.edSchool ? data.edSchool : null,
      title: data.edTitle ? data.edTitle : null,
      notes: data.edNotes ? data.edNotes : null,
    };

    const newCommunityCollege = {
      ...replacePropEmptyString(communityCollegeStructure),
    };

    if (communityCollege) {
      const updatedCommunityCollege = {
        ...includeObjectProps(communityCollege, [
          "id",
          "program",
          "university",
          "school",
          "title",
          "notes",
        ]),
        ...newCommunityCollege,
      };

      return updatedCommunityCollege;
    }

    return newCommunityCollege;
  } catch (error) {
    console.error("handle format community college", error);
  }
};

export const handleCreateCommunityCollege = async (data) => {
  try {
    const communityCollegeFormatted = handleFormatCommunityCollege(data, null);

    const result = await API.graphql(
      graphqlOperation(createCommunityCollege, {
        input: { ...communityCollegeFormatted },
      })
    );

    return result.data.createCommunityCollege;
  } catch (error) {
    console.error("handle create community college", error);
  }
};

export const handleUpdateCommunityCollege = async (data, communityCollege) => {
  try {
    const communityCollegeFormatted = handleFormatCommunityCollege(
      data,
      communityCollege
    );

    const result = await API.graphql(
      graphqlOperation(updateCommunityCollege, {
        input: { ...communityCollegeFormatted },
      })
    );

    return result.data.updateCommunityCollege;
  } catch (error) {
    console.error("handle update community college", error);
  }
};

export const handleDeleteCommunityCollege = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteCommunityCollege, { input: { id } })
    );
    return result.data.deleteCommunityCollege;
  } catch (error) {
    console.error("handle delete community college", error);
  }
};

export const handleListCommunityCollege = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listCommunityColleges, { input: {} })
    );
    return result.data.listCommunityColleges.items;
  } catch (error) {
    console.error("handle list community college", error);
  }
};

export const handleGetCommunityCollege = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getCommunityCollege, { input: { id } })
    );
    return result.data.getCommunityCollege;
  } catch (error) {
    console.error("handle get community college", error);
  }
};

//Training

export const handleFormatTraining = (data, training) => {
  try {
    const trainingStructure = {
      title: data.edTitle ? data.edTitle : null,
      notes: data.edNotes ? data.edNotes : null,
      school: data.edTrainingSchool ? data.edTrainingSchool : null,
    };

    const newTraining = {
      ...replacePropEmptyString(trainingStructure),
      trainingPeriodId: null,
    };

    if (training) {
      const trainingPeriodId = training.period ? training.period.id : null;

      const updatedTraining = {
        ...includeObjectProps(training, ["id", "title", "notes", "school"]),
        ...newTraining,
        trainingPeriodId,
      };

      return updatedTraining;
    }

    return newTraining;
  } catch (error) {
    console.error("handle format training", error);
  }
};

export const handleCreateTraining = async (data) => {
  try {
    const trainingPreFormatted = handleFormatTraining(data, null);

    let { trainingPeriodId } = trainingPreFormatted;

    const periodFormatted = handleFormatPeriod({
      billingStart: data.edPeriodStart,
      billingEnd: data.edPeriodEnd,
    });
    const periodFormattedValues = Object.values(periodFormatted);
    const notNull = (x) => x; //null return true

    if (periodFormattedValues.some(notNull)) {
      trainingPeriodId = await handleCreatePeriod(periodFormatted);
    }

    const trainingFormatted = {
      ...trainingPreFormatted,
      trainingPeriodId,
    };

    const result = await API.graphql(
      graphqlOperation(createTraining, { input: { ...trainingFormatted } })
    );

    return result.data.createTraining;
  } catch (error) {
    console.error("handle create training", error);
  }
};

export const handleUpdateTraining = async (data, training) => {
  try {
    const trainingPreFormatted = handleFormatTraining(data, training);

    let { trainingPeriodId } = trainingPreFormatted;

    const period = training.period ? training.period : null;

    const periodFormatted = handleFormatPeriod(
      {
        billingStart: data.edPeriodStart,
        billingEnd: data.edPeriodEnd,
      },
      period
    );
    const periodFormattedValues = Object.values(periodFormatted);
    const notNull = (x) => x; // Null return true

    if (periodFormattedValues.some(notNull)) {
      if (trainingPeriodId) {
        await handleUpdatePeriod(periodFormatted);
      } else {
        trainingPeriodId = await handleCreatePeriod(periodFormatted);
      }
    }

    const trainingFormatted = {
      ...trainingPreFormatted,
      trainingPeriodId,
    };

    const result = await API.graphql(
      graphqlOperation(updateTraining, { input: { ...trainingFormatted } })
    );

    return result.data.updateTraining;
  } catch (error) {
    console.error("handle update training", error);
  }
};

export const handleDeleteTraining = async (training) => {
  try {
    if (training.period) {
      await handleDeletePeriod(training.period.id);
    }

    const { id } = training;
    const result = await API.graphql(
      graphqlOperation(deleteTraining, { input: { id } })
    );
    return result.data.deleteTraining;
  } catch (error) {
    console.error("handle delete training", error);
  }
};

export const handleListTraining = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listTrainings, { input: {} })
    );
    return result.data.listTrainings.items;
  } catch (error) {
    console.error("handle list training", error);
  }
};

export const handleGetTraining = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getTraining, { input: { id } })
    );
    return result.data.getTraining;
  } catch (error) {
    console.error("handle get training", error);
  }
};

// Bootcamp
export const handleFormatBootcamp = (data, bootcamp) => {
  try {
    const bootcampStructure = {
      title: data.edTitle ? data.edTitle : null,
      notes: data.edNotes ? data.edNotes : null,
      costDeferred: data.bCampPriceDeferred
        ? data.bCampPriceDeferred
          ? "YES"
          : "NO"
        : "NO",
    };

    const newBootcamp = {
      ...replacePropEmptyString(bootcampStructure),
      bootcampPeriodId: null,
    };

    if (bootcamp) {
      const updatedBootcamp = {
        ...includeObjectProps(bootcamp, [
          "id",
          "title",
          "notes",
          "costDeferred",
        ]),
        ...newBootcamp,
      };

      return updatedBootcamp;
    }

    return newBootcamp;
  } catch (error) {
    console.error("handle format bootcamp", error);
  }
};

export const handleCreateBootcamp = async (data) => {
  try {
    const bootcampPreFormatted = handleFormatBootcamp(data, null);

    const periodFormatted = handleFormatPeriod({
      billingStart: data.edPeriodStart,
      billingEnd: data.edPeriodEnd,
    });
    const periodId = await handleCreatePeriod(periodFormatted);

    const bootcampFormatted = {
      ...bootcampPreFormatted,
      bootcampPeriodId: periodId,
    };

    const result = await API.graphql(
      graphqlOperation(createBootcamp, { input: { ...bootcampFormatted } })
    );

    return result.data.createBootcamp;
  } catch (error) {
    console.error("handle create bootcamp", error);
  }
};

export const handleUpdateBootcamp = async (data, bootcamp) => {
  try {
    const bootcampPreFormatted = handleFormatBootcamp(data, bootcamp);

    const period = bootcamp.period ? bootcamp.period : null;
    const periodFormatted = handleFormatPeriod(
      {
        billingStart: data.edPeriodStart,
        billingEnd: data.edPeriodEnd,
      },
      period
    );
    const periodId = await handleUpdatePeriod(periodFormatted);

    const bootcampFormatted = {
      ...bootcampPreFormatted,
      bootcampPeriodId: periodId,
    };

    const result = await API.graphql(
      graphqlOperation(updateBootcamp, { input: { ...bootcampFormatted } })
    );

    return result.data.updateBootcamp;
  } catch (error) {
    console.error("handle update update bootcamp", error);
  }
};

export const handleDeleteBootcamp = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteBootcamp, { input: { id } })
    );
    return result.data.deleteBootcamp;
  } catch (error) {
    console.error("handle delete bootcamp", error);
  }
};

export const handleListBootcamp = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listBootcamps, { input: {} })
    );

    return result.data.listBootcamps.items;
  } catch (error) {
    console.error("handle list bootcamp", error);
  }
};

export const handleGetBootcamp = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getBootcamp, { input: { id } })
    );
    return result.data.getBootcamp;
  } catch (error) {
    console.error("hadle get bootcamp", error);
  }
};

export const educationAsEnum = asEnumeration({
  COLLEGE: {
    name: "college",
    idName: "educationExpenseCollegeId",
    format: handleFormatCollege,
    create: handleCreateCollege,
    delete: handleDeleteCollege,
    update: handleUpdateCollege,
    list: handleListCollege,
    get: handleGetCollege,
  },
  ONLINECOURSE: {
    name: "onlineCourse",
    idName: "educationExpenseOnlineCourseId",
    format: handleFormatOnlineCourse,
    create: handleCreateOnlineCourse,
    delete: handleDeleteOnlineCourse,
    update: handleUpdateOnlineCourse,
    list: handleListOnlineCourse,
    get: handleGetOnlineCourse,
  },
  COMUNITYCOLLEGE: {
    name: "communityCollege",
    idName: "educationExpenseCommunityCollegeId",
    format: handleFormatCommunityCollege,
    create: handleCreateCommunityCollege,
    delete: handleDeleteCommunityCollege,
    update: handleUpdateCommunityCollege,
    list: handleListCommunityCollege,
    get: handleGetCommunityCollege,
  },
  TRAINING: {
    name: "training",
    idName: "educationExpenseTrainingId",
    format: handleFormatTraining,
    create: handleCreateTraining,
    delete: handleDeleteTraining,
    update: handleUpdateTraining,
    list: handleListTraining,
    get: handleGetTraining,
  },
  BOOTCAMP: {
    name: "bootcamp",
    idName: "educationExpenseBootcampId",
    format: handleFormatBootcamp,
    create: handleCreateBootcamp,
    delete: handleDeleteBootcamp,
    update: handleUpdateBootcamp,
    list: handleListBootcamp,
    get: handleGetBootcamp,
  },
});

//Education expense
export const handleFormatEducation = (data, expense, clientId = null) => {
  try {
    // must add tags fields by AI
    // expense should have an id
    // some fields are not included in the array cause
    // need special treatment or it's  name in the form not match
    // the the name on the entity

    const educationStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : 0,
      // TODO Bootcamp cost deferred admit empty value, so dueDate should be optional
      // to address that I going to set and arbitrary value very far away
      dueDate: data.dueDate
        ? dayjs(data.dueDate).format("YYYY-MM-DD")
        : dayjs("5000-12-31").format("YYYY-MM-DD"),
      category: data.personal ? data.personal : null,
      nature: data.nature ? data.nature : null,
      educationExpenseClientId: clientId,
    };

    const newEducation = {
      ...replacePropEmptyString(educationStructure),
    };

    if (expense) {
      const updatedEducation = {
        ...includeObjectProps(expense, [
          "id",
          "amount",
          "dueDate",
          "category",
          "nature",
        ]),
        ...omitObjectProps(newEducation, ["educationExpenseClientId"]),
      };
      return updatedEducation;
    }
    return newEducation;
  } catch (error) {
    console.error("handle format education", error);
  }
};

export const handleCreateEducation = async (data, clientId = null) => {
  try {
    const educationPreformatted = handleFormatEducation(data, null, clientId);
    //create college, communityCollege, onlineCourse, training or bootcamp return an object
    const { id } = await educationAsEnum.fromValue(data.nature).create(data);

    const formattedEducation = {
      ...educationPreformatted,
      [educationAsEnum.fromValue(data.nature).idName]: id,
    };

    const result = await API.graphql(
      graphqlOperation(createEducationExpense, {
        input: { ...formattedEducation },
      })
    );

    return result.data.createEducationExpense;
  } catch (error) {
    console.error("handle create education", error);
  }
};

export const handleUpdateEducation = async (data, expense) => {
  try {
    const prop = educationAsEnum.fromValue(data.nature).name;
    await educationAsEnum.fromValue(data.nature).update(data, expense[prop]);

    const educationFormatted = handleFormatEducation(data, expense);

    const result = await API.graphql(
      graphqlOperation(updateEducationExpense, {
        input: { ...educationFormatted },
      })
    );

    return result.data.updateEducationExpense;
  } catch (error) {
    console.error("handle update education", error);
  }
};

export const handleDeleteEducation = async (expense) => {
  try {
    const prop = educationAsEnum.fromValue(expense.nature).name;

    await educationAsEnum.fromValue(expense.nature).delete(expense[prop]);

    const { id } = expense;

    const result = await API.graphql(
      graphqlOperation(deleteEducationExpense, { input: { id } })
    );

    return result.data.deleteEducationExpense;
  } catch (error) {
    console.error("handle delete education", error);
  }
};

export const handleListEducation = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listEducationExpenses, { input: {} })
    );
    return result.data.listEducationExpenses.items;
  } catch (error) {
    console.error("handle list education", error);
  }
};

export const handleGetEducation = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getEducationExpense, { input: { id } })
    );
    return result.data.getEducationExpense;
  } catch (error) {
    console.error("handle get education", error);
  }
};
