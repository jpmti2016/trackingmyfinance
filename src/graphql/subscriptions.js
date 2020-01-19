/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePeriod = `subscription OnCreatePeriod($owner: String!) {
  onCreatePeriod(owner: $owner) {
    id
    billingStart
    billingEnd
    owner
  }
}
`;
export const onUpdatePeriod = `subscription OnUpdatePeriod($owner: String!) {
  onUpdatePeriod(owner: $owner) {
    id
    billingStart
    billingEnd
    owner
  }
}
`;
export const onDeletePeriod = `subscription OnDeletePeriod($owner: String!) {
  onDeletePeriod(owner: $owner) {
    id
    billingStart
    billingEnd
    owner
  }
}
`;
export const onCreateUtility = `subscription OnCreateUtility($owner: String!) {
  onCreateUtility(owner: $owner) {
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
export const onUpdateUtility = `subscription OnUpdateUtility($owner: String!) {
  onUpdateUtility(owner: $owner) {
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
export const onDeleteUtility = `subscription OnDeleteUtility($owner: String!) {
  onDeleteUtility(owner: $owner) {
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
export const onCreateSupply = `subscription OnCreateSupply($owner: String!) {
  onCreateSupply(owner: $owner) {
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
export const onUpdateSupply = `subscription OnUpdateSupply($owner: String!) {
  onUpdateSupply(owner: $owner) {
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
export const onDeleteSupply = `subscription OnDeleteSupply($owner: String!) {
  onDeleteSupply(owner: $owner) {
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
export const onCreateHome = `subscription OnCreateHome($owner: String!) {
  onCreateHome(owner: $owner) {
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
export const onUpdateHome = `subscription OnUpdateHome($owner: String!) {
  onUpdateHome(owner: $owner) {
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
export const onDeleteHome = `subscription OnDeleteHome($owner: String!) {
  onDeleteHome(owner: $owner) {
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
export const onCreateRepair = `subscription OnCreateRepair($owner: String!) {
  onCreateRepair(owner: $owner) {
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
export const onUpdateRepair = `subscription OnUpdateRepair($owner: String!) {
  onUpdateRepair(owner: $owner) {
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
export const onDeleteRepair = `subscription OnDeleteRepair($owner: String!) {
  onDeleteRepair(owner: $owner) {
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
export const onCreateOtherHousing = `subscription OnCreateOtherHousing($owner: String!) {
  onCreateOtherHousing(owner: $owner) {
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
export const onUpdateOtherHousing = `subscription OnUpdateOtherHousing($owner: String!) {
  onUpdateOtherHousing(owner: $owner) {
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
export const onDeleteOtherHousing = `subscription OnDeleteOtherHousing($owner: String!) {
  onDeleteOtherHousing(owner: $owner) {
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
export const onCreateHousingExpense = `subscription OnCreateHousingExpense($owner: String!) {
  onCreateHousingExpense(owner: $owner) {
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
export const onUpdateHousingExpense = `subscription OnUpdateHousingExpense($owner: String!) {
  onUpdateHousingExpense(owner: $owner) {
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
export const onDeleteHousingExpense = `subscription OnDeleteHousingExpense($owner: String!) {
  onDeleteHousingExpense(owner: $owner) {
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
export const onCreatePlan = `subscription OnCreatePlan($owner: String!) {
  onCreatePlan(owner: $owner) {
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
export const onUpdatePlan = `subscription OnUpdatePlan($owner: String!) {
  onUpdatePlan(owner: $owner) {
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
export const onDeletePlan = `subscription OnDeletePlan($owner: String!) {
  onDeletePlan(owner: $owner) {
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
export const onCreateAditional = `subscription OnCreateAditional($owner: String!) {
  onCreateAditional(owner: $owner) {
    id
    title
    notes
    owner
  }
}
`;
export const onUpdateAditional = `subscription OnUpdateAditional($owner: String!) {
  onUpdateAditional(owner: $owner) {
    id
    title
    notes
    owner
  }
}
`;
export const onDeleteAditional = `subscription OnDeleteAditional($owner: String!) {
  onDeleteAditional(owner: $owner) {
    id
    title
    notes
    owner
  }
}
`;
export const onCreatePhoneExpense = `subscription OnCreatePhoneExpense($owner: String!) {
  onCreatePhoneExpense(owner: $owner) {
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
export const onUpdatePhoneExpense = `subscription OnUpdatePhoneExpense($owner: String!) {
  onUpdatePhoneExpense(owner: $owner) {
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
export const onDeletePhoneExpense = `subscription OnDeletePhoneExpense($owner: String!) {
  onDeletePhoneExpense(owner: $owner) {
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
export const onCreateBeneficiary = `subscription OnCreateBeneficiary($owner: String!) {
  onCreateBeneficiary(owner: $owner) {
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
export const onUpdateBeneficiary = `subscription OnUpdateBeneficiary($owner: String!) {
  onUpdateBeneficiary(owner: $owner) {
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
export const onDeleteBeneficiary = `subscription OnDeleteBeneficiary($owner: String!) {
  onDeleteBeneficiary(owner: $owner) {
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
export const onCreateInsuranceExpense = `subscription OnCreateInsuranceExpense($owner: String!) {
  onCreateInsuranceExpense(owner: $owner) {
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
export const onUpdateInsuranceExpense = `subscription OnUpdateInsuranceExpense($owner: String!) {
  onUpdateInsuranceExpense(owner: $owner) {
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
export const onDeleteInsuranceExpense = `subscription OnDeleteInsuranceExpense($owner: String!) {
  onDeleteInsuranceExpense(owner: $owner) {
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
export const onCreateLawyer = `subscription OnCreateLawyer($owner: String!) {
  onCreateLawyer(owner: $owner) {
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
export const onUpdateLawyer = `subscription OnUpdateLawyer($owner: String!) {
  onUpdateLawyer(owner: $owner) {
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
export const onDeleteLawyer = `subscription OnDeleteLawyer($owner: String!) {
  onDeleteLawyer(owner: $owner) {
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
export const onCreateLegalExpense = `subscription OnCreateLegalExpense($owner: String!) {
  onCreateLegalExpense(owner: $owner) {
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
export const onUpdateLegalExpense = `subscription OnUpdateLegalExpense($owner: String!) {
  onUpdateLegalExpense(owner: $owner) {
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
export const onDeleteLegalExpense = `subscription OnDeleteLegalExpense($owner: String!) {
  onDeleteLegalExpense(owner: $owner) {
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
export const onCreateProduct = `subscription OnCreateProduct($owner: String!) {
  onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = `subscription OnUpdateProduct($owner: String!) {
  onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = `subscription OnDeleteProduct($owner: String!) {
  onDeleteProduct(owner: $owner) {
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
export const onCreateGrocery = `subscription OnCreateGrocery($owner: String!) {
  onCreateGrocery(owner: $owner) {
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
export const onUpdateGrocery = `subscription OnUpdateGrocery($owner: String!) {
  onUpdateGrocery(owner: $owner) {
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
export const onDeleteGrocery = `subscription OnDeleteGrocery($owner: String!) {
  onDeleteGrocery(owner: $owner) {
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
export const onCreateDinningOut = `subscription OnCreateDinningOut($owner: String!) {
  onCreateDinningOut(owner: $owner) {
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
export const onUpdateDinningOut = `subscription OnUpdateDinningOut($owner: String!) {
  onUpdateDinningOut(owner: $owner) {
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
export const onDeleteDinningOut = `subscription OnDeleteDinningOut($owner: String!) {
  onDeleteDinningOut(owner: $owner) {
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
export const onCreateFoodExpense = `subscription OnCreateFoodExpense($owner: String!) {
  onCreateFoodExpense(owner: $owner) {
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
export const onUpdateFoodExpense = `subscription OnUpdateFoodExpense($owner: String!) {
  onUpdateFoodExpense(owner: $owner) {
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
export const onDeleteFoodExpense = `subscription OnDeleteFoodExpense($owner: String!) {
  onDeleteFoodExpense(owner: $owner) {
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
export const onCreateCommuteExpense = `subscription OnCreateCommuteExpense($owner: String!) {
  onCreateCommuteExpense(owner: $owner) {
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
export const onUpdateCommuteExpense = `subscription OnUpdateCommuteExpense($owner: String!) {
  onUpdateCommuteExpense(owner: $owner) {
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
export const onDeleteCommuteExpense = `subscription OnDeleteCommuteExpense($owner: String!) {
  onDeleteCommuteExpense(owner: $owner) {
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
export const onCreateAcademicFee = `subscription OnCreateAcademicFee($owner: String!) {
  onCreateAcademicFee(owner: $owner) {
    id
    tuitionAndFees
    booksAndSupplies
    roomAndBoard
    transportation
    personal
    college {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const onUpdateAcademicFee = `subscription OnUpdateAcademicFee($owner: String!) {
  onUpdateAcademicFee(owner: $owner) {
    id
    tuitionAndFees
    booksAndSupplies
    roomAndBoard
    transportation
    personal
    college {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const onDeleteAcademicFee = `subscription OnDeleteAcademicFee($owner: String!) {
  onDeleteAcademicFee(owner: $owner) {
    id
    tuitionAndFees
    booksAndSupplies
    roomAndBoard
    transportation
    personal
    college {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    communityCollege {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const onCreateCollege = `subscription OnCreateCollege($owner: String!) {
  onCreateCollege(owner: $owner) {
    id
    program
    title
    notes
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
export const onUpdateCollege = `subscription OnUpdateCollege($owner: String!) {
  onUpdateCollege(owner: $owner) {
    id
    program
    title
    notes
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
export const onDeleteCollege = `subscription OnDeleteCollege($owner: String!) {
  onDeleteCollege(owner: $owner) {
    id
    program
    title
    notes
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
export const onCreateCommunityCollege = `subscription OnCreateCommunityCollege($owner: String!) {
  onCreateCommunityCollege(owner: $owner) {
    id
    program
    title
    notes
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
export const onUpdateCommunityCollege = `subscription OnUpdateCommunityCollege($owner: String!) {
  onUpdateCommunityCollege(owner: $owner) {
    id
    program
    title
    notes
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
export const onDeleteCommunityCollege = `subscription OnDeleteCommunityCollege($owner: String!) {
  onDeleteCommunityCollege(owner: $owner) {
    id
    program
    title
    notes
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
export const onCreateInstructor = `subscription OnCreateInstructor($owner: String!) {
  onCreateInstructor(owner: $owner) {
    id
    phone
    tweeter
    name
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
export const onUpdateInstructor = `subscription OnUpdateInstructor($owner: String!) {
  onUpdateInstructor(owner: $owner) {
    id
    phone
    tweeter
    name
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
export const onDeleteInstructor = `subscription OnDeleteInstructor($owner: String!) {
  onDeleteInstructor(owner: $owner) {
    id
    phone
    tweeter
    name
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
export const onCreateOnlineCourse = `subscription OnCreateOnlineCourse($owner: String!) {
  onCreateOnlineCourse(owner: $owner) {
    id
    title
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
export const onUpdateOnlineCourse = `subscription OnUpdateOnlineCourse($owner: String!) {
  onUpdateOnlineCourse(owner: $owner) {
    id
    title
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
export const onDeleteOnlineCourse = `subscription OnDeleteOnlineCourse($owner: String!) {
  onDeleteOnlineCourse(owner: $owner) {
    id
    title
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
export const onCreateTraining = `subscription OnCreateTraining($owner: String!) {
  onCreateTraining(owner: $owner) {
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
export const onUpdateTraining = `subscription OnUpdateTraining($owner: String!) {
  onUpdateTraining(owner: $owner) {
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
export const onDeleteTraining = `subscription OnDeleteTraining($owner: String!) {
  onDeleteTraining(owner: $owner) {
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
export const onCreateBootcamp = `subscription OnCreateBootcamp($owner: String!) {
  onCreateBootcamp(owner: $owner) {
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
export const onUpdateBootcamp = `subscription OnUpdateBootcamp($owner: String!) {
  onUpdateBootcamp(owner: $owner) {
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
export const onDeleteBootcamp = `subscription OnDeleteBootcamp($owner: String!) {
  onDeleteBootcamp(owner: $owner) {
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
export const onCreateEducationExpense = `subscription OnCreateEducationExpense($owner: String!) {
  onCreateEducationExpense(owner: $owner) {
    id
    kind
    amount
    classification
    dueDate
    category
    nature
    college {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    onlineCourse {
      id
      title
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
      title
      notes
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
export const onUpdateEducationExpense = `subscription OnUpdateEducationExpense($owner: String!) {
  onUpdateEducationExpense(owner: $owner) {
    id
    kind
    amount
    classification
    dueDate
    category
    nature
    college {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    onlineCourse {
      id
      title
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
      title
      notes
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
export const onDeleteEducationExpense = `subscription OnDeleteEducationExpense($owner: String!) {
  onDeleteEducationExpense(owner: $owner) {
    id
    kind
    amount
    classification
    dueDate
    category
    nature
    college {
      id
      program
      title
      notes
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
      fees {
        nextToken
      }
      owner
    }
    onlineCourse {
      id
      title
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
      title
      notes
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
export const onCreatePersonalCareExpense = `subscription OnCreatePersonalCareExpense($owner: String!) {
  onCreatePersonalCareExpense(owner: $owner) {
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
export const onUpdatePersonalCareExpense = `subscription OnUpdatePersonalCareExpense($owner: String!) {
  onUpdatePersonalCareExpense(owner: $owner) {
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
export const onDeletePersonalCareExpense = `subscription OnDeletePersonalCareExpense($owner: String!) {
  onDeletePersonalCareExpense(owner: $owner) {
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
export const onCreatePetExpense = `subscription OnCreatePetExpense($owner: String!) {
  onCreatePetExpense(owner: $owner) {
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
export const onUpdatePetExpense = `subscription OnUpdatePetExpense($owner: String!) {
  onUpdatePetExpense(owner: $owner) {
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
export const onDeletePetExpense = `subscription OnDeletePetExpense($owner: String!) {
  onDeletePetExpense(owner: $owner) {
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
export const onCreateEntertainmentExpense = `subscription OnCreateEntertainmentExpense($owner: String!) {
  onCreateEntertainmentExpense(owner: $owner) {
    id
    kind
    amount
    dueDate
    category
    natute
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
export const onUpdateEntertainmentExpense = `subscription OnUpdateEntertainmentExpense($owner: String!) {
  onUpdateEntertainmentExpense(owner: $owner) {
    id
    kind
    amount
    dueDate
    category
    natute
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
export const onDeleteEntertainmentExpense = `subscription OnDeleteEntertainmentExpense($owner: String!) {
  onDeleteEntertainmentExpense(owner: $owner) {
    id
    kind
    amount
    dueDate
    category
    natute
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
export const onCreateLoanExpense = `subscription OnCreateLoanExpense($owner: String!) {
  onCreateLoanExpense(owner: $owner) {
    id
    kind
    amount
    dueDate
    category
    natute
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
export const onUpdateLoanExpense = `subscription OnUpdateLoanExpense($owner: String!) {
  onUpdateLoanExpense(owner: $owner) {
    id
    kind
    amount
    dueDate
    category
    natute
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
export const onDeleteLoanExpense = `subscription OnDeleteLoanExpense($owner: String!) {
  onDeleteLoanExpense(owner: $owner) {
    id
    kind
    amount
    dueDate
    category
    natute
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
export const onCreateW2Summary = `subscription OnCreateW2Summary($owner: String!) {
  onCreateW2Summary(owner: $owner) {
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
export const onUpdateW2Summary = `subscription OnUpdateW2Summary($owner: String!) {
  onUpdateW2Summary(owner: $owner) {
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
export const onDeleteW2Summary = `subscription OnDeleteW2Summary($owner: String!) {
  onDeleteW2Summary(owner: $owner) {
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
export const onCreateTaxExpense = `subscription OnCreateTaxExpense($owner: String!) {
  onCreateTaxExpense(owner: $owner) {
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
export const onUpdateTaxExpense = `subscription OnUpdateTaxExpense($owner: String!) {
  onUpdateTaxExpense(owner: $owner) {
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
export const onDeleteTaxExpense = `subscription OnDeleteTaxExpense($owner: String!) {
  onDeleteTaxExpense(owner: $owner) {
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
export const onCreateInvestmentExpense = `subscription OnCreateInvestmentExpense($owner: String!) {
  onCreateInvestmentExpense(owner: $owner) {
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
export const onUpdateInvestmentExpense = `subscription OnUpdateInvestmentExpense($owner: String!) {
  onUpdateInvestmentExpense(owner: $owner) {
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
export const onDeleteInvestmentExpense = `subscription OnDeleteInvestmentExpense($owner: String!) {
  onDeleteInvestmentExpense(owner: $owner) {
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
export const onCreateRecipient = `subscription OnCreateRecipient($owner: String!) {
  onCreateRecipient(owner: $owner) {
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
export const onUpdateRecipient = `subscription OnUpdateRecipient($owner: String!) {
  onUpdateRecipient(owner: $owner) {
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
export const onDeleteRecipient = `subscription OnDeleteRecipient($owner: String!) {
  onDeleteRecipient(owner: $owner) {
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
export const onCreateGyftExpense = `subscription OnCreateGyftExpense($owner: String!) {
  onCreateGyftExpense(owner: $owner) {
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
export const onUpdateGyftExpense = `subscription OnUpdateGyftExpense($owner: String!) {
  onUpdateGyftExpense(owner: $owner) {
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
export const onDeleteGyftExpense = `subscription OnDeleteGyftExpense($owner: String!) {
  onDeleteGyftExpense(owner: $owner) {
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
export const onCreateBudget = `subscription OnCreateBudget($owner: String!) {
  onCreateBudget(owner: $owner) {
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
export const onUpdateBudget = `subscription OnUpdateBudget($owner: String!) {
  onUpdateBudget(owner: $owner) {
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
export const onDeleteBudget = `subscription OnDeleteBudget($owner: String!) {
  onDeleteBudget(owner: $owner) {
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
export const onCreateIncome = `subscription OnCreateIncome($owner: String!) {
  onCreateIncome(owner: $owner) {
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
export const onUpdateIncome = `subscription OnUpdateIncome($owner: String!) {
  onUpdateIncome(owner: $owner) {
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
export const onDeleteIncome = `subscription OnDeleteIncome($owner: String!) {
  onDeleteIncome(owner: $owner) {
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
export const onCreateCreditCardDetail = `subscription OnCreateCreditCardDetail($owner: String!) {
  onCreateCreditCardDetail(owner: $owner) {
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
export const onUpdateCreditCardDetail = `subscription OnUpdateCreditCardDetail($owner: String!) {
  onUpdateCreditCardDetail(owner: $owner) {
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
export const onDeleteCreditCardDetail = `subscription OnDeleteCreditCardDetail($owner: String!) {
  onDeleteCreditCardDetail(owner: $owner) {
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
export const onCreateDebitCardDetail = `subscription OnCreateDebitCardDetail($owner: String!) {
  onCreateDebitCardDetail(owner: $owner) {
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
export const onUpdateDebitCardDetail = `subscription OnUpdateDebitCardDetail($owner: String!) {
  onUpdateDebitCardDetail(owner: $owner) {
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
export const onDeleteDebitCardDetail = `subscription OnDeleteDebitCardDetail($owner: String!) {
  onDeleteDebitCardDetail(owner: $owner) {
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
export const onCreateCard = `subscription OnCreateCard($owner: String!) {
  onCreateCard(owner: $owner) {
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
export const onUpdateCard = `subscription OnUpdateCard($owner: String!) {
  onUpdateCard(owner: $owner) {
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
export const onDeleteCard = `subscription OnDeleteCard($owner: String!) {
  onDeleteCard(owner: $owner) {
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
export const onCreateCreditReport = `subscription OnCreateCreditReport($owner: String!) {
  onCreateCreditReport(owner: $owner) {
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
export const onUpdateCreditReport = `subscription OnUpdateCreditReport($owner: String!) {
  onUpdateCreditReport(owner: $owner) {
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
export const onDeleteCreditReport = `subscription OnDeleteCreditReport($owner: String!) {
  onDeleteCreditReport(owner: $owner) {
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
export const onCreatePriorityPayment = `subscription OnCreatePriorityPayment($owner: String!) {
  onCreatePriorityPayment(owner: $owner) {
    id
    percent
    createdAt
    updatedAt
    owner
  }
}
`;
export const onUpdatePriorityPayment = `subscription OnUpdatePriorityPayment($owner: String!) {
  onUpdatePriorityPayment(owner: $owner) {
    id
    percent
    createdAt
    updatedAt
    owner
  }
}
`;
export const onDeletePriorityPayment = `subscription OnDeletePriorityPayment($owner: String!) {
  onDeletePriorityPayment(owner: $owner) {
    id
    percent
    createdAt
    updatedAt
    owner
  }
}
`;
export const onCreateFinantialIndependence = `subscription OnCreateFinantialIndependence($owner: String!) {
  onCreateFinantialIndependence(owner: $owner) {
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
export const onUpdateFinantialIndependence = `subscription OnUpdateFinantialIndependence($owner: String!) {
  onUpdateFinantialIndependence(owner: $owner) {
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
export const onDeleteFinantialIndependence = `subscription OnDeleteFinantialIndependence($owner: String!) {
  onDeleteFinantialIndependence(owner: $owner) {
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
export const onCreateInvestment = `subscription OnCreateInvestment($owner: String!) {
  onCreateInvestment(owner: $owner) {
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
export const onUpdateInvestment = `subscription OnUpdateInvestment($owner: String!) {
  onUpdateInvestment(owner: $owner) {
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
export const onDeleteInvestment = `subscription OnDeleteInvestment($owner: String!) {
  onDeleteInvestment(owner: $owner) {
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
export const onCreateLoan = `subscription OnCreateLoan($owner: String!) {
  onCreateLoan(owner: $owner) {
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
export const onUpdateLoan = `subscription OnUpdateLoan($owner: String!) {
  onUpdateLoan(owner: $owner) {
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
export const onDeleteLoan = `subscription OnDeleteLoan($owner: String!) {
  onDeleteLoan(owner: $owner) {
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
export const onCreateProperty = `subscription OnCreateProperty($owner: String!) {
  onCreateProperty(owner: $owner) {
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
export const onUpdateProperty = `subscription OnUpdateProperty($owner: String!) {
  onUpdateProperty(owner: $owner) {
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
export const onDeleteProperty = `subscription OnDeleteProperty($owner: String!) {
  onDeleteProperty(owner: $owner) {
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
export const onCreateAddress = `subscription OnCreateAddress($owner: String!) {
  onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = `subscription OnUpdateAddress($owner: String!) {
  onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = `subscription OnDeleteAddress($owner: String!) {
  onDeleteAddress(owner: $owner) {
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
export const onCreateClient = `subscription OnCreateClient($owner: String!) {
  onCreateClient(owner: $owner) {
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
        classification
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
        natute
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
        natute
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
export const onUpdateClient = `subscription OnUpdateClient($owner: String!) {
  onUpdateClient(owner: $owner) {
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
        classification
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
        natute
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
        natute
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
export const onDeleteClient = `subscription OnDeleteClient($owner: String!) {
  onDeleteClient(owner: $owner) {
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
        classification
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
        natute
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
        natute
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
