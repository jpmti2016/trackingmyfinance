/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchAddBeneficiaries = `mutation BatchAddBeneficiaries($beneficiaries: [CreateBeneficiaryInput]) {
  batchAddBeneficiaries(beneficiaries: $beneficiaries) {
    id
    name
    lastName
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    images {
      bucket
      region
      key
    }
    insurance {
      id
      kind
      amount
      dueDate
      category
      nature
      startDate
      title
      notes
      tags
      coverage
      yearDeductions
      company
      images {
        bucket
        region
        key
      }
      beneficiaries {
        nextToken
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const createPeriod = `mutation CreatePeriod(
  $input: CreatePeriodInput!
  $condition: ModelPeriodConditionInput
) {
  createPeriod(input: $input, condition: $condition) {
    id
    billingStart
    billingEnd
    owner
  }
}
`;
export const updatePeriod = `mutation UpdatePeriod(
  $input: UpdatePeriodInput!
  $condition: ModelPeriodConditionInput
) {
  updatePeriod(input: $input, condition: $condition) {
    id
    billingStart
    billingEnd
    owner
  }
}
`;
export const deletePeriod = `mutation DeletePeriod(
  $input: DeletePeriodInput!
  $condition: ModelPeriodConditionInput
) {
  deletePeriod(input: $input, condition: $condition) {
    id
    billingStart
    billingEnd
    owner
  }
}
`;
export const createUtility = `mutation CreateUtility(
  $input: CreateUtilityInput!
  $condition: ModelUtilityConditionInput
) {
  createUtility(input: $input, condition: $condition) {
    id
    selection
    company
    title
    notes
    period {
      id
      billingStart
      billingEnd
      owner
    }
    reading
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateUtility = `mutation UpdateUtility(
  $input: UpdateUtilityInput!
  $condition: ModelUtilityConditionInput
) {
  updateUtility(input: $input, condition: $condition) {
    id
    selection
    company
    title
    notes
    period {
      id
      billingStart
      billingEnd
      owner
    }
    reading
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteUtility = `mutation DeleteUtility(
  $input: DeleteUtilityInput!
  $condition: ModelUtilityConditionInput
) {
  deleteUtility(input: $input, condition: $condition) {
    id
    selection
    company
    title
    notes
    period {
      id
      billingStart
      billingEnd
      owner
    }
    reading
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createSupply = `mutation CreateSupply(
  $input: CreateSupplyInput!
  $condition: ModelSupplyConditionInput
) {
  createSupply(input: $input, condition: $condition) {
    id
    supplyFor
    title
    notes
    brand
    model
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateSupply = `mutation UpdateSupply(
  $input: UpdateSupplyInput!
  $condition: ModelSupplyConditionInput
) {
  updateSupply(input: $input, condition: $condition) {
    id
    supplyFor
    title
    notes
    brand
    model
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteSupply = `mutation DeleteSupply(
  $input: DeleteSupplyInput!
  $condition: ModelSupplyConditionInput
) {
  deleteSupply(input: $input, condition: $condition) {
    id
    supplyFor
    title
    notes
    brand
    model
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createHome = `mutation CreateHome(
  $input: CreateHomeInput!
  $condition: ModelHomeConditionInput
) {
  createHome(input: $input, condition: $condition) {
    id
    mortgage
    title
    notes
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateHome = `mutation UpdateHome(
  $input: UpdateHomeInput!
  $condition: ModelHomeConditionInput
) {
  updateHome(input: $input, condition: $condition) {
    id
    mortgage
    title
    notes
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteHome = `mutation DeleteHome(
  $input: DeleteHomeInput!
  $condition: ModelHomeConditionInput
) {
  deleteHome(input: $input, condition: $condition) {
    id
    mortgage
    title
    notes
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createRepair = `mutation CreateRepair(
  $input: CreateRepairInput!
  $condition: ModelRepairConditionInput
) {
  createRepair(input: $input, condition: $condition) {
    id
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateRepair = `mutation UpdateRepair(
  $input: UpdateRepairInput!
  $condition: ModelRepairConditionInput
) {
  updateRepair(input: $input, condition: $condition) {
    id
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteRepair = `mutation DeleteRepair(
  $input: DeleteRepairInput!
  $condition: ModelRepairConditionInput
) {
  deleteRepair(input: $input, condition: $condition) {
    id
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createOtherHousing = `mutation CreateOtherHousing(
  $input: CreateOtherHousingInput!
  $condition: ModelOtherHousingConditionInput
) {
  createOtherHousing(input: $input, condition: $condition) {
    id
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateOtherHousing = `mutation UpdateOtherHousing(
  $input: UpdateOtherHousingInput!
  $condition: ModelOtherHousingConditionInput
) {
  updateOtherHousing(input: $input, condition: $condition) {
    id
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteOtherHousing = `mutation DeleteOtherHousing(
  $input: DeleteOtherHousingInput!
  $condition: ModelOtherHousingConditionInput
) {
  deleteOtherHousing(input: $input, condition: $condition) {
    id
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createHousingExpense = `mutation CreateHousingExpense(
  $input: CreateHousingExpenseInput!
  $condition: ModelHousingExpenseConditionInput
) {
  createHousingExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    category
    dueDate
    nature
    utility {
      id
      selection
      company
      title
      notes
      period {
        id
        billingStart
        billingEnd
        owner
      }
      reading
      images {
        bucket
        region
        key
      }
      owner
    }
    supply {
      id
      supplyFor
      title
      notes
      brand
      model
      images {
        bucket
        region
        key
      }
      owner
    }
    home {
      id
      mortgage
      title
      notes
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      images {
        bucket
        region
        key
      }
      owner
    }
    repair {
      id
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    otherHousing {
      id
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateHousingExpense = `mutation UpdateHousingExpense(
  $input: UpdateHousingExpenseInput!
  $condition: ModelHousingExpenseConditionInput
) {
  updateHousingExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    category
    dueDate
    nature
    utility {
      id
      selection
      company
      title
      notes
      period {
        id
        billingStart
        billingEnd
        owner
      }
      reading
      images {
        bucket
        region
        key
      }
      owner
    }
    supply {
      id
      supplyFor
      title
      notes
      brand
      model
      images {
        bucket
        region
        key
      }
      owner
    }
    home {
      id
      mortgage
      title
      notes
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      images {
        bucket
        region
        key
      }
      owner
    }
    repair {
      id
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    otherHousing {
      id
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteHousingExpense = `mutation DeleteHousingExpense(
  $input: DeleteHousingExpenseInput!
  $condition: ModelHousingExpenseConditionInput
) {
  deleteHousingExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    category
    dueDate
    nature
    utility {
      id
      selection
      company
      title
      notes
      period {
        id
        billingStart
        billingEnd
        owner
      }
      reading
      images {
        bucket
        region
        key
      }
      owner
    }
    supply {
      id
      supplyFor
      title
      notes
      brand
      model
      images {
        bucket
        region
        key
      }
      owner
    }
    home {
      id
      mortgage
      title
      notes
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      images {
        bucket
        region
        key
      }
      owner
    }
    repair {
      id
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    otherHousing {
      id
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createPlan = `mutation CreatePlan(
  $input: CreatePlanInput!
  $condition: ModelPlanConditionInput
) {
  createPlan(input: $input, condition: $condition) {
    id
    title
    notes
    billing {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const updatePlan = `mutation UpdatePlan(
  $input: UpdatePlanInput!
  $condition: ModelPlanConditionInput
) {
  updatePlan(input: $input, condition: $condition) {
    id
    title
    notes
    billing {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const deletePlan = `mutation DeletePlan(
  $input: DeletePlanInput!
  $condition: ModelPlanConditionInput
) {
  deletePlan(input: $input, condition: $condition) {
    id
    title
    notes
    billing {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const createAditional = `mutation CreateAditional(
  $input: CreateAditionalInput!
  $condition: ModelAditionalConditionInput
) {
  createAditional(input: $input, condition: $condition) {
    id
    title
    notes
    owner
  }
}
`;
export const updateAditional = `mutation UpdateAditional(
  $input: UpdateAditionalInput!
  $condition: ModelAditionalConditionInput
) {
  updateAditional(input: $input, condition: $condition) {
    id
    title
    notes
    owner
  }
}
`;
export const deleteAditional = `mutation DeleteAditional(
  $input: DeleteAditionalInput!
  $condition: ModelAditionalConditionInput
) {
  deleteAditional(input: $input, condition: $condition) {
    id
    title
    notes
    owner
  }
}
`;
export const createPhoneExpense = `mutation CreatePhoneExpense(
  $input: CreatePhoneExpenseInput!
  $condition: ModelPhoneExpenseConditionInput
) {
  createPhoneExpense(input: $input, condition: $condition) {
    id
    kind
    dueDate
    amount
    category
    phonePlan
    tags
    images {
      bucket
      region
      key
    }
    plan {
      id
      title
      notes
      billing {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    aditional {
      id
      title
      notes
      owner
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updatePhoneExpense = `mutation UpdatePhoneExpense(
  $input: UpdatePhoneExpenseInput!
  $condition: ModelPhoneExpenseConditionInput
) {
  updatePhoneExpense(input: $input, condition: $condition) {
    id
    kind
    dueDate
    amount
    category
    phonePlan
    tags
    images {
      bucket
      region
      key
    }
    plan {
      id
      title
      notes
      billing {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    aditional {
      id
      title
      notes
      owner
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deletePhoneExpense = `mutation DeletePhoneExpense(
  $input: DeletePhoneExpenseInput!
  $condition: ModelPhoneExpenseConditionInput
) {
  deletePhoneExpense(input: $input, condition: $condition) {
    id
    kind
    dueDate
    amount
    category
    phonePlan
    tags
    images {
      bucket
      region
      key
    }
    plan {
      id
      title
      notes
      billing {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    aditional {
      id
      title
      notes
      owner
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createBeneficiary = `mutation CreateBeneficiary(
  $input: CreateBeneficiaryInput!
  $condition: ModelBeneficiaryConditionInput
) {
  createBeneficiary(input: $input, condition: $condition) {
    id
    name
    lastName
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    images {
      bucket
      region
      key
    }
    insurance {
      id
      kind
      amount
      dueDate
      category
      nature
      startDate
      title
      notes
      tags
      coverage
      yearDeductions
      company
      images {
        bucket
        region
        key
      }
      beneficiaries {
        nextToken
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const updateBeneficiary = `mutation UpdateBeneficiary(
  $input: UpdateBeneficiaryInput!
  $condition: ModelBeneficiaryConditionInput
) {
  updateBeneficiary(input: $input, condition: $condition) {
    id
    name
    lastName
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    images {
      bucket
      region
      key
    }
    insurance {
      id
      kind
      amount
      dueDate
      category
      nature
      startDate
      title
      notes
      tags
      coverage
      yearDeductions
      company
      images {
        bucket
        region
        key
      }
      beneficiaries {
        nextToken
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const deleteBeneficiary = `mutation DeleteBeneficiary(
  $input: DeleteBeneficiaryInput!
  $condition: ModelBeneficiaryConditionInput
) {
  deleteBeneficiary(input: $input, condition: $condition) {
    id
    name
    lastName
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    images {
      bucket
      region
      key
    }
    insurance {
      id
      kind
      amount
      dueDate
      category
      nature
      startDate
      title
      notes
      tags
      coverage
      yearDeductions
      company
      images {
        bucket
        region
        key
      }
      beneficiaries {
        nextToken
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const createInsuranceExpense = `mutation CreateInsuranceExpense(
  $input: CreateInsuranceExpenseInput!
  $condition: ModelInsuranceExpenseConditionInput
) {
  createInsuranceExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    startDate
    title
    notes
    tags
    coverage
    yearDeductions
    company
    images {
      bucket
      region
      key
    }
    beneficiaries {
      items {
        id
        name
        lastName
        owner
      }
      nextToken
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateInsuranceExpense = `mutation UpdateInsuranceExpense(
  $input: UpdateInsuranceExpenseInput!
  $condition: ModelInsuranceExpenseConditionInput
) {
  updateInsuranceExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    startDate
    title
    notes
    tags
    coverage
    yearDeductions
    company
    images {
      bucket
      region
      key
    }
    beneficiaries {
      items {
        id
        name
        lastName
        owner
      }
      nextToken
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteInsuranceExpense = `mutation DeleteInsuranceExpense(
  $input: DeleteInsuranceExpenseInput!
  $condition: ModelInsuranceExpenseConditionInput
) {
  deleteInsuranceExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    startDate
    title
    notes
    tags
    coverage
    yearDeductions
    company
    images {
      bucket
      region
      key
    }
    beneficiaries {
      items {
        id
        name
        lastName
        owner
      }
      nextToken
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createLawyer = `mutation CreateLawyer(
  $input: CreateLawyerInput!
  $condition: ModelLawyerConditionInput
) {
  createLawyer(input: $input, condition: $condition) {
    id
    phone
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    name
    lastName
    email
    fee
    firm
    legal {
      id
      kind
      amount
      dueDate
      category
      nature
      title
      notes
      tags
      images {
        bucket
        region
        key
      }
      lawyers {
        nextToken
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const updateLawyer = `mutation UpdateLawyer(
  $input: UpdateLawyerInput!
  $condition: ModelLawyerConditionInput
) {
  updateLawyer(input: $input, condition: $condition) {
    id
    phone
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    name
    lastName
    email
    fee
    firm
    legal {
      id
      kind
      amount
      dueDate
      category
      nature
      title
      notes
      tags
      images {
        bucket
        region
        key
      }
      lawyers {
        nextToken
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const deleteLawyer = `mutation DeleteLawyer(
  $input: DeleteLawyerInput!
  $condition: ModelLawyerConditionInput
) {
  deleteLawyer(input: $input, condition: $condition) {
    id
    phone
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    name
    lastName
    email
    fee
    firm
    legal {
      id
      kind
      amount
      dueDate
      category
      nature
      title
      notes
      tags
      images {
        bucket
        region
        key
      }
      lawyers {
        nextToken
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const createLegalExpense = `mutation CreateLegalExpense(
  $input: CreateLegalExpenseInput!
  $condition: ModelLegalExpenseConditionInput
) {
  createLegalExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    notes
    tags
    images {
      bucket
      region
      key
    }
    lawyers {
      items {
        id
        phone
        name
        lastName
        email
        fee
        firm
        owner
      }
      nextToken
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateLegalExpense = `mutation UpdateLegalExpense(
  $input: UpdateLegalExpenseInput!
  $condition: ModelLegalExpenseConditionInput
) {
  updateLegalExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    notes
    tags
    images {
      bucket
      region
      key
    }
    lawyers {
      items {
        id
        phone
        name
        lastName
        email
        fee
        firm
        owner
      }
      nextToken
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteLegalExpense = `mutation DeleteLegalExpense(
  $input: DeleteLegalExpenseInput!
  $condition: ModelLegalExpenseConditionInput
) {
  deleteLegalExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    notes
    tags
    images {
      bucket
      region
      key
    }
    lawyers {
      items {
        id
        phone
        name
        lastName
        email
        fee
        firm
        owner
      }
      nextToken
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createProduct = `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    name
    price
    quantity
    frequency
    tags
    grocery {
      id
      store
      title
      notes
      info
      products {
        nextToken
      }
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateProduct = `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    name
    price
    quantity
    frequency
    tags
    grocery {
      id
      store
      title
      notes
      info
      products {
        nextToken
      }
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteProduct = `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    name
    price
    quantity
    frequency
    tags
    grocery {
      id
      store
      title
      notes
      info
      products {
        nextToken
      }
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createGrocery = `mutation CreateGrocery(
  $input: CreateGroceryInput!
  $condition: ModelGroceryConditionInput
) {
  createGrocery(input: $input, condition: $condition) {
    id
    store
    title
    notes
    info
    products {
      items {
        id
        name
        price
        quantity
        frequency
        tags
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateGrocery = `mutation UpdateGrocery(
  $input: UpdateGroceryInput!
  $condition: ModelGroceryConditionInput
) {
  updateGrocery(input: $input, condition: $condition) {
    id
    store
    title
    notes
    info
    products {
      items {
        id
        name
        price
        quantity
        frequency
        tags
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteGrocery = `mutation DeleteGrocery(
  $input: DeleteGroceryInput!
  $condition: ModelGroceryConditionInput
) {
  deleteGrocery(input: $input, condition: $condition) {
    id
    store
    title
    notes
    info
    products {
      items {
        id
        name
        price
        quantity
        frequency
        tags
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createDinningOut = `mutation CreateDinningOut(
  $input: CreateDinningOutInput!
  $condition: ModelDinningOutConditionInput
) {
  createDinningOut(input: $input, condition: $condition) {
    id
    place
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateDinningOut = `mutation UpdateDinningOut(
  $input: UpdateDinningOutInput!
  $condition: ModelDinningOutConditionInput
) {
  updateDinningOut(input: $input, condition: $condition) {
    id
    place
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteDinningOut = `mutation DeleteDinningOut(
  $input: DeleteDinningOutInput!
  $condition: ModelDinningOutConditionInput
) {
  deleteDinningOut(input: $input, condition: $condition) {
    id
    place
    title
    notes
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createFoodExpense = `mutation CreateFoodExpense(
  $input: CreateFoodExpenseInput!
  $condition: ModelFoodExpenseConditionInput
) {
  createFoodExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    grocery {
      id
      store
      title
      notes
      info
      products {
        nextToken
      }
      owner
    }
    dinningOut {
      id
      place
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateFoodExpense = `mutation UpdateFoodExpense(
  $input: UpdateFoodExpenseInput!
  $condition: ModelFoodExpenseConditionInput
) {
  updateFoodExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    grocery {
      id
      store
      title
      notes
      info
      products {
        nextToken
      }
      owner
    }
    dinningOut {
      id
      place
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteFoodExpense = `mutation DeleteFoodExpense(
  $input: DeleteFoodExpenseInput!
  $condition: ModelFoodExpenseConditionInput
) {
  deleteFoodExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    grocery {
      id
      store
      title
      notes
      info
      products {
        nextToken
      }
      owner
    }
    dinningOut {
      id
      place
      title
      notes
      images {
        bucket
        region
        key
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createCommuteExpense = `mutation CreateCommuteExpense(
  $input: CreateCommuteExpenseInput!
  $condition: ModelCommuteExpenseConditionInput
) {
  createCommuteExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    service
    event
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateCommuteExpense = `mutation UpdateCommuteExpense(
  $input: UpdateCommuteExpenseInput!
  $condition: ModelCommuteExpenseConditionInput
) {
  updateCommuteExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    service
    event
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteCommuteExpense = `mutation DeleteCommuteExpense(
  $input: DeleteCommuteExpenseInput!
  $condition: ModelCommuteExpenseConditionInput
) {
  deleteCommuteExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    service
    event
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createAcademicFee = `mutation CreateAcademicFee(
  $input: CreateAcademicFeeInput!
  $condition: ModelAcademicFeeConditionInput
) {
  createAcademicFee(input: $input, condition: $condition) {
    id
    tuitionAndFees
    booksAndSupplies
    roomAndBoard
    transportation
    personal
    period {
      id
      billingStart
      billingEnd
      owner
    }
    college {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateAcademicFee = `mutation UpdateAcademicFee(
  $input: UpdateAcademicFeeInput!
  $condition: ModelAcademicFeeConditionInput
) {
  updateAcademicFee(input: $input, condition: $condition) {
    id
    tuitionAndFees
    booksAndSupplies
    roomAndBoard
    transportation
    personal
    period {
      id
      billingStart
      billingEnd
      owner
    }
    college {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteAcademicFee = `mutation DeleteAcademicFee(
  $input: DeleteAcademicFeeInput!
  $condition: ModelAcademicFeeConditionInput
) {
  deleteAcademicFee(input: $input, condition: $condition) {
    id
    tuitionAndFees
    booksAndSupplies
    roomAndBoard
    transportation
    personal
    period {
      id
      billingStart
      billingEnd
      owner
    }
    college {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createCollege = `mutation CreateCollege(
  $input: CreateCollegeInput!
  $condition: ModelCollegeConditionInput
) {
  createCollege(input: $input, condition: $condition) {
    id
    program
    university
    school
    title
    notes
    images {
      bucket
      region
      key
    }
    fees {
      items {
        id
        tuitionAndFees
        booksAndSupplies
        roomAndBoard
        transportation
        personal
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateCollege = `mutation UpdateCollege(
  $input: UpdateCollegeInput!
  $condition: ModelCollegeConditionInput
) {
  updateCollege(input: $input, condition: $condition) {
    id
    program
    university
    school
    title
    notes
    images {
      bucket
      region
      key
    }
    fees {
      items {
        id
        tuitionAndFees
        booksAndSupplies
        roomAndBoard
        transportation
        personal
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteCollege = `mutation DeleteCollege(
  $input: DeleteCollegeInput!
  $condition: ModelCollegeConditionInput
) {
  deleteCollege(input: $input, condition: $condition) {
    id
    program
    university
    school
    title
    notes
    images {
      bucket
      region
      key
    }
    fees {
      items {
        id
        tuitionAndFees
        booksAndSupplies
        roomAndBoard
        transportation
        personal
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createCommunityCollege = `mutation CreateCommunityCollege(
  $input: CreateCommunityCollegeInput!
  $condition: ModelCommunityCollegeConditionInput
) {
  createCommunityCollege(input: $input, condition: $condition) {
    id
    program
    university
    school
    title
    notes
    images {
      bucket
      region
      key
    }
    fees {
      items {
        id
        tuitionAndFees
        booksAndSupplies
        roomAndBoard
        transportation
        personal
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateCommunityCollege = `mutation UpdateCommunityCollege(
  $input: UpdateCommunityCollegeInput!
  $condition: ModelCommunityCollegeConditionInput
) {
  updateCommunityCollege(input: $input, condition: $condition) {
    id
    program
    university
    school
    title
    notes
    images {
      bucket
      region
      key
    }
    fees {
      items {
        id
        tuitionAndFees
        booksAndSupplies
        roomAndBoard
        transportation
        personal
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteCommunityCollege = `mutation DeleteCommunityCollege(
  $input: DeleteCommunityCollegeInput!
  $condition: ModelCommunityCollegeConditionInput
) {
  deleteCommunityCollege(input: $input, condition: $condition) {
    id
    program
    university
    school
    title
    notes
    images {
      bucket
      region
      key
    }
    fees {
      items {
        id
        tuitionAndFees
        booksAndSupplies
        roomAndBoard
        transportation
        personal
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createInstructor = `mutation CreateInstructor(
  $input: CreateInstructorInput!
  $condition: ModelInstructorConditionInput
) {
  createInstructor(input: $input, condition: $condition) {
    id
    phone
    tweeter
    name
    lastName
    email
    webPage
    images {
      bucket
      region
      key
    }
    teachOn {
      id
      title
      university
      school
      description
      notes
      platform
      url
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      instructors {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateInstructor = `mutation UpdateInstructor(
  $input: UpdateInstructorInput!
  $condition: ModelInstructorConditionInput
) {
  updateInstructor(input: $input, condition: $condition) {
    id
    phone
    tweeter
    name
    lastName
    email
    webPage
    images {
      bucket
      region
      key
    }
    teachOn {
      id
      title
      university
      school
      description
      notes
      platform
      url
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      instructors {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteInstructor = `mutation DeleteInstructor(
  $input: DeleteInstructorInput!
  $condition: ModelInstructorConditionInput
) {
  deleteInstructor(input: $input, condition: $condition) {
    id
    phone
    tweeter
    name
    lastName
    email
    webPage
    images {
      bucket
      region
      key
    }
    teachOn {
      id
      title
      university
      school
      description
      notes
      platform
      url
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      instructors {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createOnlineCourse = `mutation CreateOnlineCourse(
  $input: CreateOnlineCourseInput!
  $condition: ModelOnlineCourseConditionInput
) {
  createOnlineCourse(input: $input, condition: $condition) {
    id
    title
    university
    school
    description
    notes
    platform
    url
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    instructors {
      items {
        id
        phone
        tweeter
        name
        lastName
        email
        webPage
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateOnlineCourse = `mutation UpdateOnlineCourse(
  $input: UpdateOnlineCourseInput!
  $condition: ModelOnlineCourseConditionInput
) {
  updateOnlineCourse(input: $input, condition: $condition) {
    id
    title
    university
    school
    description
    notes
    platform
    url
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    instructors {
      items {
        id
        phone
        tweeter
        name
        lastName
        email
        webPage
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteOnlineCourse = `mutation DeleteOnlineCourse(
  $input: DeleteOnlineCourseInput!
  $condition: ModelOnlineCourseConditionInput
) {
  deleteOnlineCourse(input: $input, condition: $condition) {
    id
    title
    university
    school
    description
    notes
    platform
    url
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    instructors {
      items {
        id
        phone
        tweeter
        name
        lastName
        email
        webPage
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createTraining = `mutation CreateTraining(
  $input: CreateTrainingInput!
  $condition: ModelTrainingConditionInput
) {
  createTraining(input: $input, condition: $condition) {
    id
    title
    notes
    school
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const updateTraining = `mutation UpdateTraining(
  $input: UpdateTrainingInput!
  $condition: ModelTrainingConditionInput
) {
  updateTraining(input: $input, condition: $condition) {
    id
    title
    notes
    school
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const deleteTraining = `mutation DeleteTraining(
  $input: DeleteTrainingInput!
  $condition: ModelTrainingConditionInput
) {
  deleteTraining(input: $input, condition: $condition) {
    id
    title
    notes
    school
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const createBootcamp = `mutation CreateBootcamp(
  $input: CreateBootcampInput!
  $condition: ModelBootcampConditionInput
) {
  createBootcamp(input: $input, condition: $condition) {
    id
    title
    notes
    costDeferred
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const updateBootcamp = `mutation UpdateBootcamp(
  $input: UpdateBootcampInput!
  $condition: ModelBootcampConditionInput
) {
  updateBootcamp(input: $input, condition: $condition) {
    id
    title
    notes
    costDeferred
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const deleteBootcamp = `mutation DeleteBootcamp(
  $input: DeleteBootcampInput!
  $condition: ModelBootcampConditionInput
) {
  deleteBootcamp(input: $input, condition: $condition) {
    id
    title
    notes
    costDeferred
    images {
      bucket
      region
      key
    }
    period {
      id
      billingStart
      billingEnd
      owner
    }
    owner
  }
}
`;
export const createEducationExpense = `mutation CreateEducationExpense(
  $input: CreateEducationExpenseInput!
  $condition: ModelEducationExpenseConditionInput
) {
  createEducationExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    college {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    onlineCourse {
      id
      title
      university
      school
      description
      notes
      platform
      url
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      instructors {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    training {
      id
      title
      notes
      school
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    bootcamp {
      id
      title
      notes
      costDeferred
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateEducationExpense = `mutation UpdateEducationExpense(
  $input: UpdateEducationExpenseInput!
  $condition: ModelEducationExpenseConditionInput
) {
  updateEducationExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    college {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    onlineCourse {
      id
      title
      university
      school
      description
      notes
      platform
      url
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      instructors {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    training {
      id
      title
      notes
      school
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    bootcamp {
      id
      title
      notes
      costDeferred
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteEducationExpense = `mutation DeleteEducationExpense(
  $input: DeleteEducationExpenseInput!
  $condition: ModelEducationExpenseConditionInput
) {
  deleteEducationExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    college {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    onlineCourse {
      id
      title
      university
      school
      description
      notes
      platform
      url
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      instructors {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      university
      school
      title
      notes
      images {
        bucket
        region
        key
      }
      fees {
        nextToken
      }
      owner
    }
    training {
      id
      title
      notes
      school
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    bootcamp {
      id
      title
      notes
      costDeferred
      images {
        bucket
        region
        key
      }
      period {
        id
        billingStart
        billingEnd
        owner
      }
      owner
    }
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createPersonalCareExpense = `mutation CreatePersonalCareExpense(
  $input: CreatePersonalCareExpenseInput!
  $condition: ModelPersonalCareExpenseConditionInput
) {
  createPersonalCareExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updatePersonalCareExpense = `mutation UpdatePersonalCareExpense(
  $input: UpdatePersonalCareExpenseInput!
  $condition: ModelPersonalCareExpenseConditionInput
) {
  updatePersonalCareExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deletePersonalCareExpense = `mutation DeletePersonalCareExpense(
  $input: DeletePersonalCareExpenseInput!
  $condition: ModelPersonalCareExpenseConditionInput
) {
  deletePersonalCareExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createPetExpense = `mutation CreatePetExpense(
  $input: CreatePetExpenseInput!
  $condition: ModelPetExpenseConditionInput
) {
  createPetExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updatePetExpense = `mutation UpdatePetExpense(
  $input: UpdatePetExpenseInput!
  $condition: ModelPetExpenseConditionInput
) {
  updatePetExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deletePetExpense = `mutation DeletePetExpense(
  $input: DeletePetExpenseInput!
  $condition: ModelPetExpenseConditionInput
) {
  deletePetExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createEntertainmentExpense = `mutation CreateEntertainmentExpense(
  $input: CreateEntertainmentExpenseInput!
  $condition: ModelEntertainmentExpenseConditionInput
) {
  createEntertainmentExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateEntertainmentExpense = `mutation UpdateEntertainmentExpense(
  $input: UpdateEntertainmentExpenseInput!
  $condition: ModelEntertainmentExpenseConditionInput
) {
  updateEntertainmentExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteEntertainmentExpense = `mutation DeleteEntertainmentExpense(
  $input: DeleteEntertainmentExpenseInput!
  $condition: ModelEntertainmentExpenseConditionInput
) {
  deleteEntertainmentExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createLoanExpense = `mutation CreateLoanExpense(
  $input: CreateLoanExpenseInput!
  $condition: ModelLoanExpenseConditionInput
) {
  createLoanExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateLoanExpense = `mutation UpdateLoanExpense(
  $input: UpdateLoanExpenseInput!
  $condition: ModelLoanExpenseConditionInput
) {
  updateLoanExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteLoanExpense = `mutation DeleteLoanExpense(
  $input: DeleteLoanExpenseInput!
  $condition: ModelLoanExpenseConditionInput
) {
  deleteLoanExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    nature
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createW2Summary = `mutation CreateW2Summary(
  $input: CreateW2SummaryInput!
  $condition: ModelW2SummaryConditionInput
) {
  createW2Summary(input: $input, condition: $condition) {
    id
    year
    grossPay
    federal
    state
    local
    tax {
      id
      kind
      amount
      dueDate
      category
      w2 {
        id
        year
        grossPay
        federal
        state
        local
        owner
      }
      taxDebt
      fee
      title
      tags
      notes
      images {
        bucket
        region
        key
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const updateW2Summary = `mutation UpdateW2Summary(
  $input: UpdateW2SummaryInput!
  $condition: ModelW2SummaryConditionInput
) {
  updateW2Summary(input: $input, condition: $condition) {
    id
    year
    grossPay
    federal
    state
    local
    tax {
      id
      kind
      amount
      dueDate
      category
      w2 {
        id
        year
        grossPay
        federal
        state
        local
        owner
      }
      taxDebt
      fee
      title
      tags
      notes
      images {
        bucket
        region
        key
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const deleteW2Summary = `mutation DeleteW2Summary(
  $input: DeleteW2SummaryInput!
  $condition: ModelW2SummaryConditionInput
) {
  deleteW2Summary(input: $input, condition: $condition) {
    id
    year
    grossPay
    federal
    state
    local
    tax {
      id
      kind
      amount
      dueDate
      category
      w2 {
        id
        year
        grossPay
        federal
        state
        local
        owner
      }
      taxDebt
      fee
      title
      tags
      notes
      images {
        bucket
        region
        key
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const createTaxExpense = `mutation CreateTaxExpense(
  $input: CreateTaxExpenseInput!
  $condition: ModelTaxExpenseConditionInput
) {
  createTaxExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    w2 {
      id
      year
      grossPay
      federal
      state
      local
      tax {
        id
        kind
        amount
        dueDate
        category
        taxDebt
        fee
        title
        tags
        notes
        owner
      }
      owner
    }
    taxDebt
    fee
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateTaxExpense = `mutation UpdateTaxExpense(
  $input: UpdateTaxExpenseInput!
  $condition: ModelTaxExpenseConditionInput
) {
  updateTaxExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    w2 {
      id
      year
      grossPay
      federal
      state
      local
      tax {
        id
        kind
        amount
        dueDate
        category
        taxDebt
        fee
        title
        tags
        notes
        owner
      }
      owner
    }
    taxDebt
    fee
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteTaxExpense = `mutation DeleteTaxExpense(
  $input: DeleteTaxExpenseInput!
  $condition: ModelTaxExpenseConditionInput
) {
  deleteTaxExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    category
    w2 {
      id
      year
      grossPay
      federal
      state
      local
      tax {
        id
        kind
        amount
        dueDate
        category
        taxDebt
        fee
        title
        tags
        notes
        owner
      }
      owner
    }
    taxDebt
    fee
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createInvestmentExpense = `mutation CreateInvestmentExpense(
  $input: CreateInvestmentExpenseInput!
  $condition: ModelInvestmentExpenseConditionInput
) {
  createInvestmentExpense(input: $input, condition: $condition) {
    id
    kind
    account
    amount
    dueDate
    category
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateInvestmentExpense = `mutation UpdateInvestmentExpense(
  $input: UpdateInvestmentExpenseInput!
  $condition: ModelInvestmentExpenseConditionInput
) {
  updateInvestmentExpense(input: $input, condition: $condition) {
    id
    kind
    account
    amount
    dueDate
    category
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteInvestmentExpense = `mutation DeleteInvestmentExpense(
  $input: DeleteInvestmentExpenseInput!
  $condition: ModelInvestmentExpenseConditionInput
) {
  deleteInvestmentExpense(input: $input, condition: $condition) {
    id
    kind
    account
    amount
    dueDate
    category
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createRecipient = `mutation CreateRecipient(
  $input: CreateRecipientInput!
  $condition: ModelRecipientConditionInput
) {
  createRecipient(input: $input, condition: $condition) {
    id
    name
    images {
      bucket
      region
      key
    }
    gyft {
      id
      kind
      amount
      dueDate
      event
      recipient {
        id
        name
        owner
      }
      title
      tags
      notes
      images {
        bucket
        region
        key
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const updateRecipient = `mutation UpdateRecipient(
  $input: UpdateRecipientInput!
  $condition: ModelRecipientConditionInput
) {
  updateRecipient(input: $input, condition: $condition) {
    id
    name
    images {
      bucket
      region
      key
    }
    gyft {
      id
      kind
      amount
      dueDate
      event
      recipient {
        id
        name
        owner
      }
      title
      tags
      notes
      images {
        bucket
        region
        key
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const deleteRecipient = `mutation DeleteRecipient(
  $input: DeleteRecipientInput!
  $condition: ModelRecipientConditionInput
) {
  deleteRecipient(input: $input, condition: $condition) {
    id
    name
    images {
      bucket
      region
      key
    }
    gyft {
      id
      kind
      amount
      dueDate
      event
      recipient {
        id
        name
        owner
      }
      title
      tags
      notes
      images {
        bucket
        region
        key
      }
      client {
        id
        username
        name
        email
        phone
        owner
      }
      owner
    }
    owner
  }
}
`;
export const createGyftExpense = `mutation CreateGyftExpense(
  $input: CreateGyftExpenseInput!
  $condition: ModelGyftExpenseConditionInput
) {
  createGyftExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    event
    recipient {
      id
      name
      images {
        bucket
        region
        key
      }
      gyft {
        id
        kind
        amount
        dueDate
        event
        title
        tags
        notes
        owner
      }
      owner
    }
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateGyftExpense = `mutation UpdateGyftExpense(
  $input: UpdateGyftExpenseInput!
  $condition: ModelGyftExpenseConditionInput
) {
  updateGyftExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    event
    recipient {
      id
      name
      images {
        bucket
        region
        key
      }
      gyft {
        id
        kind
        amount
        dueDate
        event
        title
        tags
        notes
        owner
      }
      owner
    }
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteGyftExpense = `mutation DeleteGyftExpense(
  $input: DeleteGyftExpenseInput!
  $condition: ModelGyftExpenseConditionInput
) {
  deleteGyftExpense(input: $input, condition: $condition) {
    id
    kind
    amount
    dueDate
    event
    recipient {
      id
      name
      images {
        bucket
        region
        key
      }
      gyft {
        id
        kind
        amount
        dueDate
        event
        title
        tags
        notes
        owner
      }
      owner
    }
    title
    tags
    notes
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createBudget = `mutation CreateBudget(
  $input: CreateBudgetInput!
  $condition: ModelBudgetConditionInput
) {
  createBudget(input: $input, condition: $condition) {
    id
    amount
    spent
    period {
      id
      billingStart
      billingEnd
      owner
    }
    createdAt
    updatedAt
    category
    title
    tags
    notes
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateBudget = `mutation UpdateBudget(
  $input: UpdateBudgetInput!
  $condition: ModelBudgetConditionInput
) {
  updateBudget(input: $input, condition: $condition) {
    id
    amount
    spent
    period {
      id
      billingStart
      billingEnd
      owner
    }
    createdAt
    updatedAt
    category
    title
    tags
    notes
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteBudget = `mutation DeleteBudget(
  $input: DeleteBudgetInput!
  $condition: ModelBudgetConditionInput
) {
  deleteBudget(input: $input, condition: $condition) {
    id
    amount
    spent
    period {
      id
      billingStart
      billingEnd
      owner
    }
    createdAt
    updatedAt
    category
    title
    tags
    notes
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createIncome = `mutation CreateIncome(
  $input: CreateIncomeInput!
  $condition: ModelIncomeConditionInput
) {
  createIncome(input: $input, condition: $condition) {
    id
    amount
    dueDate
    nature
    frequency
    title
    notes
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateIncome = `mutation UpdateIncome(
  $input: UpdateIncomeInput!
  $condition: ModelIncomeConditionInput
) {
  updateIncome(input: $input, condition: $condition) {
    id
    amount
    dueDate
    nature
    frequency
    title
    notes
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteIncome = `mutation DeleteIncome(
  $input: DeleteIncomeInput!
  $condition: ModelIncomeConditionInput
) {
  deleteIncome(input: $input, condition: $condition) {
    id
    amount
    dueDate
    nature
    frequency
    title
    notes
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createCreditCardDetail = `mutation CreateCreditCardDetail(
  $input: CreateCreditCardDetailInput!
  $condition: ModelCreditCardDetailConditionInput
) {
  createCreditCardDetail(input: $input, condition: $condition) {
    id
    limit
    dueDate
    interestRate
    interestFee
    minPayment
    currentPurchaseAPR
    currentAdvanceAPR
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateCreditCardDetail = `mutation UpdateCreditCardDetail(
  $input: UpdateCreditCardDetailInput!
  $condition: ModelCreditCardDetailConditionInput
) {
  updateCreditCardDetail(input: $input, condition: $condition) {
    id
    limit
    dueDate
    interestRate
    interestFee
    minPayment
    currentPurchaseAPR
    currentAdvanceAPR
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteCreditCardDetail = `mutation DeleteCreditCardDetail(
  $input: DeleteCreditCardDetailInput!
  $condition: ModelCreditCardDetailConditionInput
) {
  deleteCreditCardDetail(input: $input, condition: $condition) {
    id
    limit
    dueDate
    interestRate
    interestFee
    minPayment
    currentPurchaseAPR
    currentAdvanceAPR
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createDebitCardDetail = `mutation CreateDebitCardDetail(
  $input: CreateDebitCardDetailInput!
  $condition: ModelDebitCardDetailConditionInput
) {
  createDebitCardDetail(input: $input, condition: $condition) {
    id
    dueDate
    overdraftFee
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateDebitCardDetail = `mutation UpdateDebitCardDetail(
  $input: UpdateDebitCardDetailInput!
  $condition: ModelDebitCardDetailConditionInput
) {
  updateDebitCardDetail(input: $input, condition: $condition) {
    id
    dueDate
    overdraftFee
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteDebitCardDetail = `mutation DeleteDebitCardDetail(
  $input: DeleteDebitCardDetailInput!
  $condition: ModelDebitCardDetailConditionInput
) {
  deleteDebitCardDetail(input: $input, condition: $condition) {
    id
    dueDate
    overdraftFee
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createCard = `mutation CreateCard(
  $input: CreateCardInput!
  $condition: ModelCardConditionInput
) {
  createCard(input: $input, condition: $condition) {
    id
    nature
    last4Digit
    amount
    tags
    creditCardDetail {
      id
      limit
      dueDate
      interestRate
      interestFee
      minPayment
      currentPurchaseAPR
      currentAdvanceAPR
      images {
        bucket
        region
        key
      }
      owner
    }
    debitCardDetail {
      id
      dueDate
      overdraftFee
      images {
        bucket
        region
        key
      }
      owner
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateCard = `mutation UpdateCard(
  $input: UpdateCardInput!
  $condition: ModelCardConditionInput
) {
  updateCard(input: $input, condition: $condition) {
    id
    nature
    last4Digit
    amount
    tags
    creditCardDetail {
      id
      limit
      dueDate
      interestRate
      interestFee
      minPayment
      currentPurchaseAPR
      currentAdvanceAPR
      images {
        bucket
        region
        key
      }
      owner
    }
    debitCardDetail {
      id
      dueDate
      overdraftFee
      images {
        bucket
        region
        key
      }
      owner
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteCard = `mutation DeleteCard(
  $input: DeleteCardInput!
  $condition: ModelCardConditionInput
) {
  deleteCard(input: $input, condition: $condition) {
    id
    nature
    last4Digit
    amount
    tags
    creditCardDetail {
      id
      limit
      dueDate
      interestRate
      interestFee
      minPayment
      currentPurchaseAPR
      currentAdvanceAPR
      images {
        bucket
        region
        key
      }
      owner
    }
    debitCardDetail {
      id
      dueDate
      overdraftFee
      images {
        bucket
        region
        key
      }
      owner
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createCreditReport = `mutation CreateCreditReport(
  $input: CreateCreditReportInput!
  $condition: ModelCreditReportConditionInput
) {
  createCreditReport(input: $input, condition: $condition) {
    id
    issuer
    creditScore
    createdAt
    onTimePayments
    creditUsage
    creditInqueries
    derogatoryMarks
    accounts
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateCreditReport = `mutation UpdateCreditReport(
  $input: UpdateCreditReportInput!
  $condition: ModelCreditReportConditionInput
) {
  updateCreditReport(input: $input, condition: $condition) {
    id
    issuer
    creditScore
    createdAt
    onTimePayments
    creditUsage
    creditInqueries
    derogatoryMarks
    accounts
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteCreditReport = `mutation DeleteCreditReport(
  $input: DeleteCreditReportInput!
  $condition: ModelCreditReportConditionInput
) {
  deleteCreditReport(input: $input, condition: $condition) {
    id
    issuer
    creditScore
    createdAt
    onTimePayments
    creditUsage
    creditInqueries
    derogatoryMarks
    accounts
    tags
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createPriorityPayment = `mutation CreatePriorityPayment(
  $input: CreatePriorityPaymentInput!
  $condition: ModelPriorityPaymentConditionInput
) {
  createPriorityPayment(input: $input, condition: $condition) {
    id
    percent
    createdAt
    updatedAt
    owner
  }
}
`;
export const updatePriorityPayment = `mutation UpdatePriorityPayment(
  $input: UpdatePriorityPaymentInput!
  $condition: ModelPriorityPaymentConditionInput
) {
  updatePriorityPayment(input: $input, condition: $condition) {
    id
    percent
    createdAt
    updatedAt
    owner
  }
}
`;
export const deletePriorityPayment = `mutation DeletePriorityPayment(
  $input: DeletePriorityPaymentInput!
  $condition: ModelPriorityPaymentConditionInput
) {
  deletePriorityPayment(input: $input, condition: $condition) {
    id
    percent
    createdAt
    updatedAt
    owner
  }
}
`;
export const createFinantialIndependence = `mutation CreateFinantialIndependence(
  $input: CreateFinantialIndependenceInput!
  $condition: ModelFinantialIndependenceConditionInput
) {
  createFinantialIndependence(input: $input, condition: $condition) {
    id
    targetAmount
    targetYears
    createdAt
    updatedAt
    projectedExpenseByYear
    owner
  }
}
`;
export const updateFinantialIndependence = `mutation UpdateFinantialIndependence(
  $input: UpdateFinantialIndependenceInput!
  $condition: ModelFinantialIndependenceConditionInput
) {
  updateFinantialIndependence(input: $input, condition: $condition) {
    id
    targetAmount
    targetYears
    createdAt
    updatedAt
    projectedExpenseByYear
    owner
  }
}
`;
export const deleteFinantialIndependence = `mutation DeleteFinantialIndependence(
  $input: DeleteFinantialIndependenceInput!
  $condition: ModelFinantialIndependenceConditionInput
) {
  deleteFinantialIndependence(input: $input, condition: $condition) {
    id
    targetAmount
    targetYears
    createdAt
    updatedAt
    projectedExpenseByYear
    owner
  }
}
`;
export const createInvestment = `mutation CreateInvestment(
  $input: CreateInvestmentInput!
  $condition: ModelInvestmentConditionInput
) {
  createInvestment(input: $input, condition: $condition) {
    id
    account
    title
    notes
    roi
    fee
    value
    gain
    loss
    target
    period {
      id
      billingStart
      billingEnd
      owner
    }
    createdAt
    updatedAt
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateInvestment = `mutation UpdateInvestment(
  $input: UpdateInvestmentInput!
  $condition: ModelInvestmentConditionInput
) {
  updateInvestment(input: $input, condition: $condition) {
    id
    account
    title
    notes
    roi
    fee
    value
    gain
    loss
    target
    period {
      id
      billingStart
      billingEnd
      owner
    }
    createdAt
    updatedAt
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteInvestment = `mutation DeleteInvestment(
  $input: DeleteInvestmentInput!
  $condition: ModelInvestmentConditionInput
) {
  deleteInvestment(input: $input, condition: $condition) {
    id
    account
    title
    notes
    roi
    fee
    value
    gain
    loss
    target
    period {
      id
      billingStart
      billingEnd
      owner
    }
    createdAt
    updatedAt
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createLoan = `mutation CreateLoan(
  $input: CreateLoanInput!
  $condition: ModelLoanConditionInput
) {
  createLoan(input: $input, condition: $condition) {
    id
    amount
    terms
    natute
    apr
    interest
    monthPay
    dueDate
    title
    notes
    createdAt
    updatedAt
    tags
    period {
      id
      billingStart
      billingEnd
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const updateLoan = `mutation UpdateLoan(
  $input: UpdateLoanInput!
  $condition: ModelLoanConditionInput
) {
  updateLoan(input: $input, condition: $condition) {
    id
    amount
    terms
    natute
    apr
    interest
    monthPay
    dueDate
    title
    notes
    createdAt
    updatedAt
    tags
    period {
      id
      billingStart
      billingEnd
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const deleteLoan = `mutation DeleteLoan(
  $input: DeleteLoanInput!
  $condition: ModelLoanConditionInput
) {
  deleteLoan(input: $input, condition: $condition) {
    id
    amount
    terms
    natute
    apr
    interest
    monthPay
    dueDate
    title
    notes
    createdAt
    updatedAt
    tags
    period {
      id
      billingStart
      billingEnd
      owner
    }
    images {
      bucket
      region
      key
    }
    owner
  }
}
`;
export const createProperty = `mutation CreateProperty(
  $input: CreatePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  createProperty(input: $input, condition: $condition) {
    id
    amount
    title
    notes
    purchaseDate
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateProperty = `mutation UpdateProperty(
  $input: UpdatePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  updateProperty(input: $input, condition: $condition) {
    id
    amount
    title
    notes
    purchaseDate
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteProperty = `mutation DeleteProperty(
  $input: DeletePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  deleteProperty(input: $input, condition: $condition) {
    id
    amount
    title
    notes
    purchaseDate
    tags
    images {
      bucket
      region
      key
    }
    client {
      id
      username
      name
      address {
        id
        number
        street
        postCode
        country
        state
        region
        county
        owner
      }
      email
      phone
      avatar {
        bucket
        region
        key
      }
      images {
        bucket
        region
        key
      }
      creditReports {
        nextToken
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        owner
      }
      properties {
        nextToken
      }
      investments {
        nextToken
      }
      incomes {
        nextToken
      }
      budgets {
        nextToken
      }
      cards {
        nextToken
      }
      housingExpenses {
        nextToken
      }
      phoneExpenses {
        nextToken
      }
      insuranceExpenses {
        nextToken
      }
      legalExpenses {
        nextToken
      }
      foodExpenses {
        nextToken
      }
      commuteExpenses {
        nextToken
      }
      educationExpenses {
        nextToken
      }
      personalCareExpenses {
        nextToken
      }
      petExpenses {
        nextToken
      }
      entertainmentExpenses {
        nextToken
      }
      loanExpenses {
        nextToken
      }
      taxExpenses {
        nextToken
      }
      investmentExpenses {
        nextToken
      }
      gyftExpenses {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const createAddress = `mutation CreateAddress(
  $input: CreateAddressInput!
  $condition: ModelAddressConditionInput
) {
  createAddress(input: $input, condition: $condition) {
    id
    number
    street
    postCode
    country
    state
    region
    county
    owner
  }
}
`;
export const updateAddress = `mutation UpdateAddress(
  $input: UpdateAddressInput!
  $condition: ModelAddressConditionInput
) {
  updateAddress(input: $input, condition: $condition) {
    id
    number
    street
    postCode
    country
    state
    region
    county
    owner
  }
}
`;
export const deleteAddress = `mutation DeleteAddress(
  $input: DeleteAddressInput!
  $condition: ModelAddressConditionInput
) {
  deleteAddress(input: $input, condition: $condition) {
    id
    number
    street
    postCode
    country
    state
    region
    county
    owner
  }
}
`;
export const createClient = `mutation CreateClient(
  $input: CreateClientInput!
  $condition: ModelClientConditionInput
) {
  createClient(input: $input, condition: $condition) {
    id
    username
    name
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    email
    phone
    avatar {
      bucket
      region
      key
    }
    images {
      bucket
      region
      key
    }
    creditReports {
      items {
        id
        issuer
        creditScore
        createdAt
        onTimePayments
        creditUsage
        creditInqueries
        derogatoryMarks
        accounts
        tags
        owner
      }
      nextToken
    }
    priorityPayment {
      id
      percent
      createdAt
      updatedAt
      owner
    }
    fi {
      id
      targetAmount
      targetYears
      createdAt
      updatedAt
      projectedExpenseByYear
      owner
    }
    properties {
      items {
        id
        amount
        title
        notes
        purchaseDate
        tags
        owner
      }
      nextToken
    }
    investments {
      items {
        id
        account
        title
        notes
        roi
        fee
        value
        gain
        loss
        target
        createdAt
        updatedAt
        tags
        owner
      }
      nextToken
    }
    incomes {
      items {
        id
        amount
        dueDate
        nature
        frequency
        title
        notes
        tags
        owner
      }
      nextToken
    }
    budgets {
      items {
        id
        amount
        spent
        createdAt
        updatedAt
        category
        title
        tags
        notes
        owner
      }
      nextToken
    }
    cards {
      items {
        id
        nature
        last4Digit
        amount
        tags
        owner
      }
      nextToken
    }
    housingExpenses {
      items {
        id
        kind
        amount
        category
        dueDate
        nature
        tags
        owner
      }
      nextToken
    }
    phoneExpenses {
      items {
        id
        kind
        dueDate
        amount
        category
        phonePlan
        tags
        owner
      }
      nextToken
    }
    insuranceExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        startDate
        title
        notes
        tags
        coverage
        yearDeductions
        company
        owner
      }
      nextToken
    }
    legalExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        notes
        tags
        owner
      }
      nextToken
    }
    foodExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        tags
        owner
      }
      nextToken
    }
    commuteExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        service
        event
        title
        tags
        notes
        owner
      }
      nextToken
    }
    educationExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        tags
        owner
      }
      nextToken
    }
    personalCareExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    petExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    entertainmentExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    loanExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    taxExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        taxDebt
        fee
        title
        tags
        notes
        owner
      }
      nextToken
    }
    investmentExpenses {
      items {
        id
        kind
        account
        amount
        dueDate
        category
        title
        tags
        notes
        owner
      }
      nextToken
    }
    gyftExpenses {
      items {
        id
        kind
        amount
        dueDate
        event
        title
        tags
        notes
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateClient = `mutation UpdateClient(
  $input: UpdateClientInput!
  $condition: ModelClientConditionInput
) {
  updateClient(input: $input, condition: $condition) {
    id
    username
    name
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    email
    phone
    avatar {
      bucket
      region
      key
    }
    images {
      bucket
      region
      key
    }
    creditReports {
      items {
        id
        issuer
        creditScore
        createdAt
        onTimePayments
        creditUsage
        creditInqueries
        derogatoryMarks
        accounts
        tags
        owner
      }
      nextToken
    }
    priorityPayment {
      id
      percent
      createdAt
      updatedAt
      owner
    }
    fi {
      id
      targetAmount
      targetYears
      createdAt
      updatedAt
      projectedExpenseByYear
      owner
    }
    properties {
      items {
        id
        amount
        title
        notes
        purchaseDate
        tags
        owner
      }
      nextToken
    }
    investments {
      items {
        id
        account
        title
        notes
        roi
        fee
        value
        gain
        loss
        target
        createdAt
        updatedAt
        tags
        owner
      }
      nextToken
    }
    incomes {
      items {
        id
        amount
        dueDate
        nature
        frequency
        title
        notes
        tags
        owner
      }
      nextToken
    }
    budgets {
      items {
        id
        amount
        spent
        createdAt
        updatedAt
        category
        title
        tags
        notes
        owner
      }
      nextToken
    }
    cards {
      items {
        id
        nature
        last4Digit
        amount
        tags
        owner
      }
      nextToken
    }
    housingExpenses {
      items {
        id
        kind
        amount
        category
        dueDate
        nature
        tags
        owner
      }
      nextToken
    }
    phoneExpenses {
      items {
        id
        kind
        dueDate
        amount
        category
        phonePlan
        tags
        owner
      }
      nextToken
    }
    insuranceExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        startDate
        title
        notes
        tags
        coverage
        yearDeductions
        company
        owner
      }
      nextToken
    }
    legalExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        notes
        tags
        owner
      }
      nextToken
    }
    foodExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        tags
        owner
      }
      nextToken
    }
    commuteExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        service
        event
        title
        tags
        notes
        owner
      }
      nextToken
    }
    educationExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        tags
        owner
      }
      nextToken
    }
    personalCareExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    petExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    entertainmentExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    loanExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    taxExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        taxDebt
        fee
        title
        tags
        notes
        owner
      }
      nextToken
    }
    investmentExpenses {
      items {
        id
        kind
        account
        amount
        dueDate
        category
        title
        tags
        notes
        owner
      }
      nextToken
    }
    gyftExpenses {
      items {
        id
        kind
        amount
        dueDate
        event
        title
        tags
        notes
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteClient = `mutation DeleteClient(
  $input: DeleteClientInput!
  $condition: ModelClientConditionInput
) {
  deleteClient(input: $input, condition: $condition) {
    id
    username
    name
    address {
      id
      number
      street
      postCode
      country
      state
      region
      county
      owner
    }
    email
    phone
    avatar {
      bucket
      region
      key
    }
    images {
      bucket
      region
      key
    }
    creditReports {
      items {
        id
        issuer
        creditScore
        createdAt
        onTimePayments
        creditUsage
        creditInqueries
        derogatoryMarks
        accounts
        tags
        owner
      }
      nextToken
    }
    priorityPayment {
      id
      percent
      createdAt
      updatedAt
      owner
    }
    fi {
      id
      targetAmount
      targetYears
      createdAt
      updatedAt
      projectedExpenseByYear
      owner
    }
    properties {
      items {
        id
        amount
        title
        notes
        purchaseDate
        tags
        owner
      }
      nextToken
    }
    investments {
      items {
        id
        account
        title
        notes
        roi
        fee
        value
        gain
        loss
        target
        createdAt
        updatedAt
        tags
        owner
      }
      nextToken
    }
    incomes {
      items {
        id
        amount
        dueDate
        nature
        frequency
        title
        notes
        tags
        owner
      }
      nextToken
    }
    budgets {
      items {
        id
        amount
        spent
        createdAt
        updatedAt
        category
        title
        tags
        notes
        owner
      }
      nextToken
    }
    cards {
      items {
        id
        nature
        last4Digit
        amount
        tags
        owner
      }
      nextToken
    }
    housingExpenses {
      items {
        id
        kind
        amount
        category
        dueDate
        nature
        tags
        owner
      }
      nextToken
    }
    phoneExpenses {
      items {
        id
        kind
        dueDate
        amount
        category
        phonePlan
        tags
        owner
      }
      nextToken
    }
    insuranceExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        startDate
        title
        notes
        tags
        coverage
        yearDeductions
        company
        owner
      }
      nextToken
    }
    legalExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        notes
        tags
        owner
      }
      nextToken
    }
    foodExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        tags
        owner
      }
      nextToken
    }
    commuteExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        service
        event
        title
        tags
        notes
        owner
      }
      nextToken
    }
    educationExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        tags
        owner
      }
      nextToken
    }
    personalCareExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    petExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    entertainmentExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    loanExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        nature
        title
        tags
        notes
        owner
      }
      nextToken
    }
    taxExpenses {
      items {
        id
        kind
        amount
        dueDate
        category
        taxDebt
        fee
        title
        tags
        notes
        owner
      }
      nextToken
    }
    investmentExpenses {
      items {
        id
        kind
        account
        amount
        dueDate
        category
        title
        tags
        notes
        owner
      }
      nextToken
    }
    gyftExpenses {
      items {
        id
        kind
        amount
        dueDate
        event
        title
        tags
        notes
        owner
      }
      nextToken
    }
    owner
  }
}
`;
