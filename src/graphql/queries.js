/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPeriod = `query GetPeriod($id: ID!) {
  getPeriod(id: $id) {
    id
    billingStart
    billingEnd
    owner
  }
}
`;
export const listPeriods = `query ListPeriods(
  $filter: ModelPeriodFilterInput
  $limit: Int
  $nextToken: String
) {
  listPeriods(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      billingStart
      billingEnd
      owner
    }
    nextToken
  }
}
`;
export const getUtility = `query GetUtility($id: ID!) {
  getUtility(id: $id) {
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
export const listUtilitys = `query ListUtilitys(
  $filter: ModelUtilityFilterInput
  $limit: Int
  $nextToken: String
) {
  listUtilitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getSupply = `query GetSupply($id: ID!) {
  getSupply(id: $id) {
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
export const listSupplys = `query ListSupplys(
  $filter: ModelSupplyFilterInput
  $limit: Int
  $nextToken: String
) {
  listSupplys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getHome = `query GetHome($id: ID!) {
  getHome(id: $id) {
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
export const listHomes = `query ListHomes(
  $filter: ModelHomeFilterInput
  $limit: Int
  $nextToken: String
) {
  listHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getRepair = `query GetRepair($id: ID!) {
  getRepair(id: $id) {
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
export const listRepairs = `query ListRepairs(
  $filter: ModelRepairFilterInput
  $limit: Int
  $nextToken: String
) {
  listRepairs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getOtherHousing = `query GetOtherHousing($id: ID!) {
  getOtherHousing(id: $id) {
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
export const listOtherHousings = `query ListOtherHousings(
  $filter: ModelOtherHousingFilterInput
  $limit: Int
  $nextToken: String
) {
  listOtherHousings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getHousingExpense = `query GetHousingExpense($id: ID!) {
  getHousingExpense(id: $id) {
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
export const listHousingExpenses = `query ListHousingExpenses(
  $filter: ModelHousingExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listHousingExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        reading
        owner
      }
      supply {
        id
        supplyFor
        title
        notes
        brand
        model
        owner
      }
      home {
        id
        mortgage
        title
        notes
        owner
      }
      repair {
        id
        title
        notes
        owner
      }
      otherHousing {
        id
        title
        notes
        owner
      }
      tags
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
    nextToken
  }
}
`;
export const getPlan = `query GetPlan($id: ID!) {
  getPlan(id: $id) {
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
export const listPlans = `query ListPlans(
  $filter: ModelPlanFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getAditional = `query GetAditional($id: ID!) {
  getAditional(id: $id) {
    id
    title
    notes
    owner
  }
}
`;
export const listAditionals = `query ListAditionals(
  $filter: ModelAditionalFilterInput
  $limit: Int
  $nextToken: String
) {
  listAditionals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      notes
      owner
    }
    nextToken
  }
}
`;
export const getPhoneExpense = `query GetPhoneExpense($id: ID!) {
  getPhoneExpense(id: $id) {
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
export const listPhoneExpenses = `query ListPhoneExpenses(
  $filter: ModelPhoneExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhoneExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        email
        phone
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getBeneficiary = `query GetBeneficiary($id: ID!) {
  getBeneficiary(id: $id) {
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
export const listBeneficiarys = `query ListBeneficiarys(
  $filter: ModelBeneficiaryFilterInput
  $limit: Int
  $nextToken: String
) {
  listBeneficiarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getInsuranceExpense = `query GetInsuranceExpense($id: ID!) {
  getInsuranceExpense(id: $id) {
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
export const listInsuranceExpenses = `query ListInsuranceExpenses(
  $filter: ModelInsuranceExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listInsuranceExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
  }
}
`;
export const getLawyer = `query GetLawyer($id: ID!) {
  getLawyer(id: $id) {
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
export const listLawyers = `query ListLawyers(
  $filter: ModelLawyerFilterInput
  $limit: Int
  $nextToken: String
) {
  listLawyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getLegalExpense = `query GetLegalExpense($id: ID!) {
  getLegalExpense(id: $id) {
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
export const listLegalExpenses = `query ListLegalExpenses(
  $filter: ModelLegalExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listLegalExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
  }
}
`;
export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      images {
        bucket
        region
        key
      }
      owner
    }
    nextToken
  }
}
`;
export const getGrocery = `query GetGrocery($id: ID!) {
  getGrocery(id: $id) {
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
export const listGrocerys = `query ListGrocerys(
  $filter: ModelGroceryFilterInput
  $limit: Int
  $nextToken: String
) {
  listGrocerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getDinningOut = `query GetDinningOut($id: ID!) {
  getDinningOut(id: $id) {
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
export const listDinningOuts = `query ListDinningOuts(
  $filter: ModelDinningOutFilterInput
  $limit: Int
  $nextToken: String
) {
  listDinningOuts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getFoodExpense = `query GetFoodExpense($id: ID!) {
  getFoodExpense(id: $id) {
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
export const listFoodExpenses = `query ListFoodExpenses(
  $filter: ModelFoodExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listFoodExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      dinningOut {
        id
        place
        title
        notes
        owner
      }
      tags
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
    nextToken
  }
}
`;
export const getCommuteExpense = `query GetCommuteExpense($id: ID!) {
  getCommuteExpense(id: $id) {
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
export const listCommuteExpenses = `query ListCommuteExpenses(
  $filter: ModelCommuteExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommuteExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
  }
}
`;
export const getAcademicFee = `query GetAcademicFee($id: ID!) {
  getAcademicFee(id: $id) {
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
export const listAcademicFees = `query ListAcademicFees(
  $filter: ModelAcademicFeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listAcademicFees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      communityCollege {
        id
        program
        title
        notes
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getCollege = `query GetCollege($id: ID!) {
  getCollege(id: $id) {
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
export const listColleges = `query ListColleges(
  $filter: ModelCollegeFilterInput
  $limit: Int
  $nextToken: String
) {
  listColleges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCommunityCollege = `query GetCommunityCollege($id: ID!) {
  getCommunityCollege(id: $id) {
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
export const listCommunityColleges = `query ListCommunityColleges(
  $filter: ModelCommunityCollegeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommunityColleges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getInstructor = `query GetInstructor($id: ID!) {
  getInstructor(id: $id) {
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
export const listInstructors = `query ListInstructors(
  $filter: ModelInstructorFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getOnlineCourse = `query GetOnlineCourse($id: ID!) {
  getOnlineCourse(id: $id) {
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
export const listOnlineCourses = `query ListOnlineCourses(
  $filter: ModelOnlineCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listOnlineCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTraining = `query GetTraining($id: ID!) {
  getTraining(id: $id) {
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
export const listTrainings = `query ListTrainings(
  $filter: ModelTrainingFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getBootcamp = `query GetBootcamp($id: ID!) {
  getBootcamp(id: $id) {
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
export const listBootcamps = `query ListBootcamps(
  $filter: ModelBootcampFilterInput
  $limit: Int
  $nextToken: String
) {
  listBootcamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getEducationExpense = `query GetEducationExpense($id: ID!) {
  getEducationExpense(id: $id) {
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
export const listEducationExpenses = `query ListEducationExpenses(
  $filter: ModelEducationExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducationExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      onlineCourse {
        id
        title
        description
        notes
        platform
        url
        owner
      }
      communityCollege {
        id
        program
        title
        notes
        owner
      }
      training {
        id
        title
        notes
        school
        owner
      }
      bootcamp {
        id
        title
        notes
        costDeferred
        owner
      }
      tags
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
    nextToken
  }
}
`;
export const getPersonalCareExpense = `query GetPersonalCareExpense($id: ID!) {
  getPersonalCareExpense(id: $id) {
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
export const listPersonalCareExpenses = `query ListPersonalCareExpenses(
  $filter: ModelPersonalCareExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPersonalCareExpenses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
  }
}
`;
export const getPetExpense = `query GetPetExpense($id: ID!) {
  getPetExpense(id: $id) {
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
export const listPetExpenses = `query ListPetExpenses(
  $filter: ModelPetExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPetExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
  }
}
`;
export const getEntertainmentExpense = `query GetEntertainmentExpense($id: ID!) {
  getEntertainmentExpense(id: $id) {
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
export const listEntertainmentExpenses = `query ListEntertainmentExpenses(
  $filter: ModelEntertainmentExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntertainmentExpenses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
  }
}
`;
export const getLoanExpense = `query GetLoanExpense($id: ID!) {
  getLoanExpense(id: $id) {
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
export const listLoanExpenses = `query ListLoanExpenses(
  $filter: ModelLoanExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listLoanExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
  }
}
`;
export const getW2Summary = `query GetW2Summary($id: ID!) {
  getW2Summary(id: $id) {
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
export const listW2Summarys = `query ListW2Summarys(
  $filter: ModelW2SummaryFilterInput
  $limit: Int
  $nextToken: String
) {
  listW2Summarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTaxExpense = `query GetTaxExpense($id: ID!) {
  getTaxExpense(id: $id) {
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
export const listTaxExpenses = `query ListTaxExpenses(
  $filter: ModelTaxExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listTaxExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getInvestmentExpense = `query GetInvestmentExpense($id: ID!) {
  getInvestmentExpense(id: $id) {
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
export const listInvestmentExpenses = `query ListInvestmentExpenses(
  $filter: ModelInvestmentExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvestmentExpenses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
  }
}
`;
export const getRecipient = `query GetRecipient($id: ID!) {
  getRecipient(id: $id) {
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
export const listRecipients = `query ListRecipients(
  $filter: ModelRecipientFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getGyftExpense = `query GetGyftExpense($id: ID!) {
  getGyftExpense(id: $id) {
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
export const listGyftExpenses = `query ListGyftExpenses(
  $filter: ModelGyftExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listGyftExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getBudget = `query GetBudget($id: ID!) {
  getBudget(id: $id) {
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
export const listBudgets = `query ListBudgets(
  $filter: ModelBudgetFilterInput
  $limit: Int
  $nextToken: String
) {
  listBudgets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        email
        phone
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getIncome = `query GetIncome($id: ID!) {
  getIncome(id: $id) {
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
export const listIncomes = `query ListIncomes(
  $filter: ModelIncomeFilterInput
  $limit: Int
  $nextToken: String
) {
  listIncomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        email
        phone
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getCreditCardDetail = `query GetCreditCardDetail($id: ID!) {
  getCreditCardDetail(id: $id) {
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
export const listCreditCardDetails = `query ListCreditCardDetails(
  $filter: ModelCreditCardDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreditCardDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getDebitCardDetail = `query GetDebitCardDetail($id: ID!) {
  getDebitCardDetail(id: $id) {
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
export const listDebitCardDetails = `query ListDebitCardDetails(
  $filter: ModelDebitCardDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listDebitCardDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCard = `query GetCard($id: ID!) {
  getCard(id: $id) {
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
export const listCards = `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      debitCardDetail {
        id
        dueDate
        overdraftFee
        owner
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
    nextToken
  }
}
`;
export const getCreditReport = `query GetCreditReport($id: ID!) {
  getCreditReport(id: $id) {
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
export const listCreditReports = `query ListCreditReports(
  $filter: ModelCreditReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreditReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
  }
}
`;
export const getPriorityPayment = `query GetPriorityPayment($id: ID!) {
  getPriorityPayment(id: $id) {
    id
    percent
    createdAt
    updatedAt
    owner
  }
}
`;
export const listPriorityPayments = `query ListPriorityPayments(
  $filter: ModelPriorityPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPriorityPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      percent
      createdAt
      updatedAt
      owner
    }
    nextToken
  }
}
`;
export const getFinantialIndependence = `query GetFinantialIndependence($id: ID!) {
  getFinantialIndependence(id: $id) {
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
export const listFinantialIndependences = `query ListFinantialIndependences(
  $filter: ModelFinantialIndependenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listFinantialIndependences(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      targetAmount
      targetYears
      createdAt
      updatedAt
      projectedExpenseByYear
      owner
    }
    nextToken
  }
}
`;
export const getInvestment = `query GetInvestment($id: ID!) {
  getInvestment(id: $id) {
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
export const listInvestments = `query ListInvestments(
  $filter: ModelInvestmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvestments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        email
        phone
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getLoan = `query GetLoan($id: ID!) {
  getLoan(id: $id) {
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
export const listLoans = `query ListLoans(
  $filter: ModelLoanFilterInput
  $limit: Int
  $nextToken: String
) {
  listLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getProperty = `query GetProperty($id: ID!) {
  getProperty(id: $id) {
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
export const listPropertys = `query ListPropertys(
  $filter: ModelPropertyFilterInput
  $limit: Int
  $nextToken: String
) {
  listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        email
        phone
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getAddress = `query GetAddress($id: ID!) {
  getAddress(id: $id) {
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
export const listAddresss = `query ListAddresss(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getClient = `query GetClient($id: ID!) {
  getClient(id: $id) {
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
export const listClients = `query ListClients(
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
) {
  listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items{
      id
      username
      name
      owner
      address{
        id
      }
      phone
      
      creditReports(limit: 10){
        items{
          id
          creditScore
        }
        nextToken
      }
      
      priorityPayment{
        id
        percent
      }
      
      fi{
        id
        targetAmount
        targetYears
      }
      
      properties (limit: 10){
        items{
          id
          title
          amount
        }
        nextToken
      }
      
      incomes (limit: 10){
        items{
          id
          amount
          dueDate
          frequency
        }
        nextToken
      }
      
      budgets (limit: 10){
        items{
          id
          amount
          title
          period{
            id
            billingStart
            billingEnd
          }
        }
        nextToken
      }
      
      cards (limit: 10){
        items{
          id
          nature
          last4Digit
          amount
          creditCardDetail{
            id
            dueDate
            minPayment
            currentPurchaseAPR
            currentAdvanceAPR
          }
        }
        nextToken
      }
      
      housingExpenses (limit: 50){
        items{
          id
          __typename
          amount
          dueDate
          category
          utility{
            id
            selection
            company
            title
            notes
            period{
              id
              billingStart
              billingEnd
            }
            reading
            images{
              bucket
              region
              key
            }
          }
          supply{
            id
            supplyFor
            title
            notes
            brand
            model
          }
          home{
            id
            mortgage
            title
            notes
            address{
              id
            }
          }
          repair{
            id
            title
            notes
          }
          otherHousing{
            id
            title
            notes
          }
        }
        nextToken
      }
      
      phoneExpenses (limit: 10){
        items{
          id
          __typename
          amount
          dueDate
          category
          phonePlan
          plan{
            id
            title
            notes
            billing{
              billingStart
              billingEnd
            }
          }
          aditional{
            id
            title
            notes
          }
        }
        nextToken
      }
      
      insuranceExpenses (limit: 10){
         items{
          id
          __typename
          kind
          amount
          dueDate
          category
          nature
          startDate
          title
          notes
          coverage
          yearDeductions
          company
          beneficiaries{
            items{
              name
              lastName
              address{
                id
              }
            }
          }
        }
      }
      
      legalExpenses (limit: 10){
        items{
          id
          __typename
          kind
          amount
          dueDate
          category
          nature
          title
          notes
          lawyers{
            items{
              id
              phone
              name
              lastName
              email
              fee
              firm
              address{
                id
              }
            }
          }
        }
        nextToken
      }
      
      foodExpenses (limit: 10){
        items{
          id
          __typename
          kind
          amount
          dueDate
          category
          nature
          grocery{
            id
            store
            title
            notes
            info
            products{
              items{
                id
                name
                price
                quantity
                frequency
              }
            }
          }
          dinningOut{
            id
            place
            title
            notes
          }
        }
        nextToken
      }
      
      commuteExpenses (limit: 10){
        items{
          id
          __typename
          amount
          category
          dueDate
          title
          notes
        }
        nextToken
      }
      
      educationExpenses (limit: 10){
        items{
          id
          __typename
          amount
          dueDate
          category
          college{
            id
            title
            notes
          }
          onlineCourse{
            id
            title
            notes
          }
          communityCollege{
            id
            title
            notes
          }
          training{
            id
            title
            notes
          }
          bootcamp{
            id
            title
            notes
          }
        }
        nextToken
      }
      personalCareExpenses (limit: 10){
        items{
          id
          __typename
          amount
          dueDate
          category
          title
          notes
        }
        nextToken
      }
      petExpenses (limit:10){
        items{
          id
          __typename
          amount
          dueDate
          category
          title
          notes
        }
        nextToken
      }
      entertainmentExpenses (limit: 10){
        items{
          id
          __typename
          amount
          dueDate
          category
          title
          notes
        }
        nextToken
      }
      loanExpenses (limit: 10){
        items{
          id
          __typename
          amount
          dueDate
          category
          title
          notes
        }
        nextToken
      }
      taxExpenses (limit: 10){
        items{
          id
          __typename
          amount
          dueDate
          category
          title
          notes
        }
        nextToken
      }
      investmentExpenses (limit: 10){
        items{
          id
          __typename
          amount
          dueDate
          category
          title
          notes
        }
        nextToken
      }
      gyftExpenses (limit: 10){
        items{
          id
          __typename
          amount
          dueDate
          event
          title
          notes
          event
          recipient{
            id
            name
          }
        }
        nextToken
      }
    }
    nextToken
  }
}

`;
