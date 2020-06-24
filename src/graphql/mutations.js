/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPeriod = /* GraphQL */ `
  mutation CreatePeriod(
    $input: CreatePeriodInput!
    $condition: ModelPeriodConditionInput
  ) {
    createPeriod(input: $input, condition: $condition) {
      id
      billingStart
      billingEnd
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePeriod = /* GraphQL */ `
  mutation UpdatePeriod(
    $input: UpdatePeriodInput!
    $condition: ModelPeriodConditionInput
  ) {
    updatePeriod(input: $input, condition: $condition) {
      id
      billingStart
      billingEnd
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePeriod = /* GraphQL */ `
  mutation DeletePeriod(
    $input: DeletePeriodInput!
    $condition: ModelPeriodConditionInput
  ) {
    deletePeriod(input: $input, condition: $condition) {
      id
      billingStart
      billingEnd
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUtility = /* GraphQL */ `
  mutation CreateUtility(
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
        createdAt
        updatedAt
        owner
      }
      reading
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUtility = /* GraphQL */ `
  mutation UpdateUtility(
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
        createdAt
        updatedAt
        owner
      }
      reading
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUtility = /* GraphQL */ `
  mutation DeleteUtility(
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
        createdAt
        updatedAt
        owner
      }
      reading
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSupply = /* GraphQL */ `
  mutation CreateSupply(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSupply = /* GraphQL */ `
  mutation UpdateSupply(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSupply = /* GraphQL */ `
  mutation DeleteSupply(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createHome = /* GraphQL */ `
  mutation CreateHome(
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
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateHome = /* GraphQL */ `
  mutation UpdateHome(
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
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteHome = /* GraphQL */ `
  mutation DeleteHome(
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
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createRepair = /* GraphQL */ `
  mutation CreateRepair(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRepair = /* GraphQL */ `
  mutation UpdateRepair(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRepair = /* GraphQL */ `
  mutation DeleteRepair(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOtherHousing = /* GraphQL */ `
  mutation CreateOtherHousing(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOtherHousing = /* GraphQL */ `
  mutation UpdateOtherHousing(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOtherHousing = /* GraphQL */ `
  mutation DeleteOtherHousing(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createHousingExpense = /* GraphQL */ `
  mutation CreateHousingExpense(
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
          createdAt
          updatedAt
          owner
        }
        reading
        images {
          bucket
          region
          key
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateHousingExpense = /* GraphQL */ `
  mutation UpdateHousingExpense(
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
          createdAt
          updatedAt
          owner
        }
        reading
        images {
          bucket
          region
          key
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteHousingExpense = /* GraphQL */ `
  mutation DeleteHousingExpense(
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
          createdAt
          updatedAt
          owner
        }
        reading
        images {
          bucket
          region
          key
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAdditional = /* GraphQL */ `
  mutation CreateAdditional(
    $input: CreateAdditionalInput!
    $condition: ModelAdditionalConditionInput
  ) {
    createAdditional(input: $input, condition: $condition) {
      id
      title
      notes
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAdditional = /* GraphQL */ `
  mutation UpdateAdditional(
    $input: UpdateAdditionalInput!
    $condition: ModelAdditionalConditionInput
  ) {
    updateAdditional(input: $input, condition: $condition) {
      id
      title
      notes
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAdditional = /* GraphQL */ `
  mutation DeleteAdditional(
    $input: DeleteAdditionalInput!
    $condition: ModelAdditionalConditionInput
  ) {
    deleteAdditional(input: $input, condition: $condition) {
      id
      title
      notes
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPhoneExpense = /* GraphQL */ `
  mutation CreatePhoneExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      additional {
        id
        title
        notes
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePhoneExpense = /* GraphQL */ `
  mutation UpdatePhoneExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      additional {
        id
        title
        notes
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePhoneExpense = /* GraphQL */ `
  mutation DeletePhoneExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      additional {
        id
        title
        notes
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBeneficiary = /* GraphQL */ `
  mutation CreateBeneficiary(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      investment {
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
          createdAt
          updatedAt
          owner
        }
        beneficiaries {
          nextToken
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
          email
          phone
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBeneficiary = /* GraphQL */ `
  mutation UpdateBeneficiary(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      investment {
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
          createdAt
          updatedAt
          owner
        }
        beneficiaries {
          nextToken
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
          email
          phone
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBeneficiary = /* GraphQL */ `
  mutation DeleteBeneficiary(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      investment {
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
          createdAt
          updatedAt
          owner
        }
        beneficiaries {
          nextToken
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
          email
          phone
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createInsuranceExpense = /* GraphQL */ `
  mutation CreateInsuranceExpense(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateInsuranceExpense = /* GraphQL */ `
  mutation UpdateInsuranceExpense(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteInsuranceExpense = /* GraphQL */ `
  mutation DeleteInsuranceExpense(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLawyer = /* GraphQL */ `
  mutation CreateLawyer(
    $input: CreateLawyerInput!
    $condition: ModelLawyerConditionInput
  ) {
    createLawyer(input: $input, condition: $condition) {
      id
      avatar {
        bucket
        region
        key
      }
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLawyer = /* GraphQL */ `
  mutation UpdateLawyer(
    $input: UpdateLawyerInput!
    $condition: ModelLawyerConditionInput
  ) {
    updateLawyer(input: $input, condition: $condition) {
      id
      avatar {
        bucket
        region
        key
      }
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLawyer = /* GraphQL */ `
  mutation DeleteLawyer(
    $input: DeleteLawyerInput!
    $condition: ModelLawyerConditionInput
  ) {
    deleteLawyer(input: $input, condition: $condition) {
      id
      avatar {
        bucket
        region
        key
      }
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLegalExpense = /* GraphQL */ `
  mutation CreateLegalExpense(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLegalExpense = /* GraphQL */ `
  mutation UpdateLegalExpense(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLegalExpense = /* GraphQL */ `
  mutation DeleteLegalExpense(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
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
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
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
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
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
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createGrocery = /* GraphQL */ `
  mutation CreateGrocery(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateGrocery = /* GraphQL */ `
  mutation UpdateGrocery(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteGrocery = /* GraphQL */ `
  mutation DeleteGrocery(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDinningOut = /* GraphQL */ `
  mutation CreateDinningOut(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateDinningOut = /* GraphQL */ `
  mutation UpdateDinningOut(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteDinningOut = /* GraphQL */ `
  mutation DeleteDinningOut(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFoodExpense = /* GraphQL */ `
  mutation CreateFoodExpense(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFoodExpense = /* GraphQL */ `
  mutation UpdateFoodExpense(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFoodExpense = /* GraphQL */ `
  mutation DeleteFoodExpense(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCommuteExpense = /* GraphQL */ `
  mutation CreateCommuteExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCommuteExpense = /* GraphQL */ `
  mutation UpdateCommuteExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCommuteExpense = /* GraphQL */ `
  mutation DeleteCommuteExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAcademicFee = /* GraphQL */ `
  mutation CreateAcademicFee(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAcademicFee = /* GraphQL */ `
  mutation UpdateAcademicFee(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAcademicFee = /* GraphQL */ `
  mutation DeleteAcademicFee(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCollege = /* GraphQL */ `
  mutation CreateCollege(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCollege = /* GraphQL */ `
  mutation UpdateCollege(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCollege = /* GraphQL */ `
  mutation DeleteCollege(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCommunityCollege = /* GraphQL */ `
  mutation CreateCommunityCollege(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCommunityCollege = /* GraphQL */ `
  mutation UpdateCommunityCollege(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCommunityCollege = /* GraphQL */ `
  mutation DeleteCommunityCollege(
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
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
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
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
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
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
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOnlineCourse = /* GraphQL */ `
  mutation CreateOnlineCourse(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOnlineCourse = /* GraphQL */ `
  mutation UpdateOnlineCourse(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOnlineCourse = /* GraphQL */ `
  mutation DeleteOnlineCourse(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBootcamp = /* GraphQL */ `
  mutation CreateBootcamp(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBootcamp = /* GraphQL */ `
  mutation UpdateBootcamp(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBootcamp = /* GraphQL */ `
  mutation DeleteBootcamp(
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createEducationExpense = /* GraphQL */ `
  mutation CreateEducationExpense(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateEducationExpense = /* GraphQL */ `
  mutation UpdateEducationExpense(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteEducationExpense = /* GraphQL */ `
  mutation DeleteEducationExpense(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
        }
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPersonalCareExpense = /* GraphQL */ `
  mutation CreatePersonalCareExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePersonalCareExpense = /* GraphQL */ `
  mutation UpdatePersonalCareExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePersonalCareExpense = /* GraphQL */ `
  mutation DeletePersonalCareExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPetExpense = /* GraphQL */ `
  mutation CreatePetExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePetExpense = /* GraphQL */ `
  mutation UpdatePetExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePetExpense = /* GraphQL */ `
  mutation DeletePetExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createEntertainmentExpense = /* GraphQL */ `
  mutation CreateEntertainmentExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateEntertainmentExpense = /* GraphQL */ `
  mutation UpdateEntertainmentExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteEntertainmentExpense = /* GraphQL */ `
  mutation DeleteEntertainmentExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLoanExpense = /* GraphQL */ `
  mutation CreateLoanExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLoanExpense = /* GraphQL */ `
  mutation UpdateLoanExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLoanExpense = /* GraphQL */ `
  mutation DeleteLoanExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createW2Summary = /* GraphQL */ `
  mutation CreateW2Summary(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateW2Summary = /* GraphQL */ `
  mutation UpdateW2Summary(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteW2Summary = /* GraphQL */ `
  mutation DeleteW2Summary(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTaxExpense = /* GraphQL */ `
  mutation CreateTaxExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTaxExpense = /* GraphQL */ `
  mutation UpdateTaxExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTaxExpense = /* GraphQL */ `
  mutation DeleteTaxExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createInvestmentExpense = /* GraphQL */ `
  mutation CreateInvestmentExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateInvestmentExpense = /* GraphQL */ `
  mutation UpdateInvestmentExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteInvestmentExpense = /* GraphQL */ `
  mutation DeleteInvestmentExpense(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createRecipient = /* GraphQL */ `
  mutation CreateRecipient(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRecipient = /* GraphQL */ `
  mutation UpdateRecipient(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRecipient = /* GraphQL */ `
  mutation DeleteRecipient(
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createGyftExpense = /* GraphQL */ `
  mutation CreateGyftExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateGyftExpense = /* GraphQL */ `
  mutation UpdateGyftExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteGyftExpense = /* GraphQL */ `
  mutation DeleteGyftExpense(
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBudget = /* GraphQL */ `
  mutation CreateBudget(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const updateBudget = /* GraphQL */ `
  mutation UpdateBudget(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const deleteBudget = /* GraphQL */ `
  mutation DeleteBudget(
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const createIncome = /* GraphQL */ `
  mutation CreateIncome(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateIncome = /* GraphQL */ `
  mutation UpdateIncome(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteIncome = /* GraphQL */ `
  mutation DeleteIncome(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCreditCardDetail = /* GraphQL */ `
  mutation CreateCreditCardDetail(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCreditCardDetail = /* GraphQL */ `
  mutation UpdateCreditCardDetail(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCreditCardDetail = /* GraphQL */ `
  mutation DeleteCreditCardDetail(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDebitCardDetail = /* GraphQL */ `
  mutation CreateDebitCardDetail(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateDebitCardDetail = /* GraphQL */ `
  mutation UpdateDebitCardDetail(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteDebitCardDetail = /* GraphQL */ `
  mutation DeleteDebitCardDetail(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCard = /* GraphQL */ `
  mutation CreateCard(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCreditReport = /* GraphQL */ `
  mutation CreateCreditReport(
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
      creditInquiries
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const updateCreditReport = /* GraphQL */ `
  mutation UpdateCreditReport(
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
      creditInquiries
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const deleteCreditReport = /* GraphQL */ `
  mutation DeleteCreditReport(
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
      creditInquiries
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const createPriorityPayment = /* GraphQL */ `
  mutation CreatePriorityPayment(
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
export const updatePriorityPayment = /* GraphQL */ `
  mutation UpdatePriorityPayment(
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
export const deletePriorityPayment = /* GraphQL */ `
  mutation DeletePriorityPayment(
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
export const createFinancialIndependence = /* GraphQL */ `
  mutation CreateFinancialIndependence(
    $input: CreateFinancialIndependenceInput!
    $condition: ModelFinancialIndependenceConditionInput
  ) {
    createFinancialIndependence(input: $input, condition: $condition) {
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
export const updateFinancialIndependence = /* GraphQL */ `
  mutation UpdateFinancialIndependence(
    $input: UpdateFinancialIndependenceInput!
    $condition: ModelFinancialIndependenceConditionInput
  ) {
    updateFinancialIndependence(input: $input, condition: $condition) {
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
export const deleteFinancialIndependence = /* GraphQL */ `
  mutation DeleteFinancialIndependence(
    $input: DeleteFinancialIndependenceInput!
    $condition: ModelFinancialIndependenceConditionInput
  ) {
    deleteFinancialIndependence(input: $input, condition: $condition) {
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
export const createInvestment = /* GraphQL */ `
  mutation CreateInvestment(
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
        createdAt
        updatedAt
        owner
      }
      beneficiaries {
        items {
          id
          name
          lastName
          createdAt
          updatedAt
          owner
        }
        nextToken
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const updateInvestment = /* GraphQL */ `
  mutation UpdateInvestment(
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
        createdAt
        updatedAt
        owner
      }
      beneficiaries {
        items {
          id
          name
          lastName
          createdAt
          updatedAt
          owner
        }
        nextToken
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const deleteInvestment = /* GraphQL */ `
  mutation DeleteInvestment(
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
        createdAt
        updatedAt
        owner
      }
      beneficiaries {
        items {
          id
          name
          lastName
          createdAt
          updatedAt
          owner
        }
        nextToken
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const createLoan = /* GraphQL */ `
  mutation CreateLoan(
    $input: CreateLoanInput!
    $condition: ModelLoanConditionInput
  ) {
    createLoan(input: $input, condition: $condition) {
      id
      amount
      terms
      nature
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
        createdAt
        updatedAt
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
export const updateLoan = /* GraphQL */ `
  mutation UpdateLoan(
    $input: UpdateLoanInput!
    $condition: ModelLoanConditionInput
  ) {
    updateLoan(input: $input, condition: $condition) {
      id
      amount
      terms
      nature
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
        createdAt
        updatedAt
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
export const deleteLoan = /* GraphQL */ `
  mutation DeleteLoan(
    $input: DeleteLoanInput!
    $condition: ModelLoanConditionInput
  ) {
    deleteLoan(input: $input, condition: $condition) {
      id
      amount
      terms
      nature
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
        createdAt
        updatedAt
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
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
        createdAt
        updatedAt
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
          creditInquiries
          derogatoryMarks
          accounts
          tags
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
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
        createdAt
        updatedAt
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
          creditInquiries
          derogatoryMarks
          accounts
          tags
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
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
        createdAt
        updatedAt
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
          creditInquiries
          derogatoryMarks
          accounts
          tags
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
