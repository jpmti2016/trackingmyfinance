/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPeriod = /* GraphQL */ `
  query GetPeriod($id: ID!) {
    getPeriod(id: $id) {
      id
      billingStart
      billingEnd

      owner
    }
  }
`;
export const listPeriods = /* GraphQL */ `
  query ListPeriods(
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
export const getUtility = /* GraphQL */ `
  query GetUtility($id: ID!) {
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
export const listUtilitys = /* GraphQL */ `
  query ListUtilitys(
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
export const getSupply = /* GraphQL */ `
  query GetSupply($id: ID!) {
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
export const listSupplys = /* GraphQL */ `
  query ListSupplys(
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
export const getHome = /* GraphQL */ `
  query GetHome($id: ID!) {
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
export const listHomes = /* GraphQL */ `
  query ListHomes(
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
export const getRepair = /* GraphQL */ `
  query GetRepair($id: ID!) {
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
export const listRepairs = /* GraphQL */ `
  query ListRepairs(
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
export const getOtherHousing = /* GraphQL */ `
  query GetOtherHousing($id: ID!) {
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
export const listOtherHousings = /* GraphQL */ `
  query ListOtherHousings(
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
export const getHousingExpense = /* GraphQL */ `
  query GetHousingExpense($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listHousingExpenses = /* GraphQL */ `
  query ListHousingExpenses(
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
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
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
export const listPlans = /* GraphQL */ `
  query ListPlans(
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
export const getAdditional = /* GraphQL */ `
  query GetAdditional($id: ID!) {
    getAdditional(id: $id) {
      id
      title
      notes

      owner
    }
  }
`;
export const listAdditionals = /* GraphQL */ `
  query ListAdditionals(
    $filter: ModelAdditionalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdditionals(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getPhoneExpense = /* GraphQL */ `
  query GetPhoneExpense($id: ID!) {
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
      additional {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listPhoneExpenses = /* GraphQL */ `
  query ListPhoneExpenses(
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
        additional {
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
export const getBeneficiary = /* GraphQL */ `
  query GetBeneficiary($id: ID!) {
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

          owner
        }
        beneficiaries {
          nextToken
        }

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

      owner
    }
  }
`;
export const listBeneficiarys = /* GraphQL */ `
  query ListBeneficiarys(
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

          tags
          owner
        }

        owner
      }
      nextToken
    }
  }
`;
export const getInsuranceExpense = /* GraphQL */ `
  query GetInsuranceExpense($id: ID!) {
    getInsuranceExpense(id: $id) {
      __typename
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
          __typename
          id
          name
          lastName

          owner
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listInsuranceExpenses = /* GraphQL */ `
  query ListInsuranceExpenses(
    $filter: ModelInsuranceExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInsuranceExpenses(
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
export const getLawyer = /* GraphQL */ `
  query GetLawyer($id: ID!) {
    getLawyer(id: $id) {
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
export const listLawyers = /* GraphQL */ `
  query ListLawyers(
    $filter: ModelLawyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLawyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const getLegalExpense = /* GraphQL */ `
  query GetLegalExpense($id: ID!) {
    getLegalExpense(id: $id) {
      __typename
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
          __typename
          id
          phone
          name
          lastName
          email
          fee
          firm
          address {
            __typename
            id
            number
            street
            postCode
            country
            state
            region
            county
          }

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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listLegalExpenses = /* GraphQL */ `
  query ListLegalExpenses(
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
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
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
export const getGrocery = /* GraphQL */ `
  query GetGrocery($id: ID!) {
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
export const listGrocerys = /* GraphQL */ `
  query ListGrocerys(
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
export const getDinningOut = /* GraphQL */ `
  query GetDinningOut($id: ID!) {
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
export const listDinningOuts = /* GraphQL */ `
  query ListDinningOuts(
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
export const getFoodExpense = /* GraphQL */ `
  query GetFoodExpense($id: ID!) {
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
          items {
            __typename
            id
            name
            price
            quantity
            frequency
          }
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listFoodExpenses = /* GraphQL */ `
  query ListFoodExpenses(
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
export const getCommuteExpense = /* GraphQL */ `
  query GetCommuteExpense($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listCommuteExpenses = /* GraphQL */ `
  query ListCommuteExpenses(
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
export const getAcademicFee = /* GraphQL */ `
  query GetAcademicFee($id: ID!) {
    getAcademicFee(id: $id) {
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
export const listAcademicFees = /* GraphQL */ `
  query ListAcademicFees(
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

          owner
        }
        communityCollege {
          id
          program
          university
          school
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
export const getCollege = /* GraphQL */ `
  query GetCollege($id: ID!) {
    getCollege(id: $id) {
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
export const listColleges = /* GraphQL */ `
  query ListColleges(
    $filter: ModelCollegeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColleges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCommunityCollege = /* GraphQL */ `
  query GetCommunityCollege($id: ID!) {
    getCommunityCollege(id: $id) {
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
export const listCommunityColleges = /* GraphQL */ `
  query ListCommunityColleges(
    $filter: ModelCommunityCollegeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityColleges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
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
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
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

          owner
        }

        owner
      }
      nextToken
    }
  }
`;
export const getOnlineCourse = /* GraphQL */ `
  query GetOnlineCourse($id: ID!) {
    getOnlineCourse(id: $id) {
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
export const listOnlineCourses = /* GraphQL */ `
  query ListOnlineCourses(
    $filter: ModelOnlineCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOnlineCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
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
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
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
export const getBootcamp = /* GraphQL */ `
  query GetBootcamp($id: ID!) {
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
export const listBootcamps = /* GraphQL */ `
  query ListBootcamps(
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
export const getEducationExpense = /* GraphQL */ `
  query GetEducationExpense($id: ID!) {
    getEducationExpense(id: $id) {
      __typename
      id
      kind
      amount
      dueDate
      category
      nature
      college {
        __typename
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
          items {
            __typename
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
            }
          }
        }

        owner
      }
      onlineCourse {
        __typename
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
          items {
            __typename
            id
            phone
            tweeter
            name
            lastName
            email
            webPage
          }
        }

        owner
      }
      communityCollege {
        __typename
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
          items {
            __typename
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
            }
          }
        }

        owner
      }
      training {
        __typename
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
        __typename
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listEducationExpenses = /* GraphQL */ `
  query ListEducationExpenses(
    $filter: ModelEducationExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducationExpenses(
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
        college {
          id
          program
          university
          school
          title
          notes

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

          owner
        }
        communityCollege {
          id
          program
          university
          school
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
export const getPersonalCareExpense = /* GraphQL */ `
  query GetPersonalCareExpense($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listPersonalCareExpenses = /* GraphQL */ `
  query ListPersonalCareExpenses(
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
export const getPetExpense = /* GraphQL */ `
  query GetPetExpense($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listPetExpenses = /* GraphQL */ `
  query ListPetExpenses(
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
export const getEntertainmentExpense = /* GraphQL */ `
  query GetEntertainmentExpense($id: ID!) {
    getEntertainmentExpense(id: $id) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listEntertainmentExpenses = /* GraphQL */ `
  query ListEntertainmentExpenses(
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
export const getLoanExpense = /* GraphQL */ `
  query GetLoanExpense($id: ID!) {
    getLoanExpense(id: $id) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listLoanExpenses = /* GraphQL */ `
  query ListLoanExpenses(
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
export const getW2Summary = /* GraphQL */ `
  query GetW2Summary($id: ID!) {
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
export const listW2Summarys = /* GraphQL */ `
  query ListW2Summarys(
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
export const getTaxExpense = /* GraphQL */ `
  query GetTaxExpense($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listTaxExpenses = /* GraphQL */ `
  query ListTaxExpenses(
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
export const getInvestmentExpense = /* GraphQL */ `
  query GetInvestmentExpense($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listInvestmentExpenses = /* GraphQL */ `
  query ListInvestmentExpenses(
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
export const getRecipient = /* GraphQL */ `
  query GetRecipient($id: ID!) {
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
export const listRecipients = /* GraphQL */ `
  query ListRecipients(
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
export const getGyftExpense = /* GraphQL */ `
  query GetGyftExpense($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listGyftExpenses = /* GraphQL */ `
  query ListGyftExpenses(
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
export const getBudget = /* GraphQL */ `
  query GetBudget($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listBudgets = /* GraphQL */ `
  query ListBudgets(
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
export const getIncome = /* GraphQL */ `
  query GetIncome($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listIncomes = /* GraphQL */ `
  query ListIncomes(
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
export const getCreditCardDetail = /* GraphQL */ `
  query GetCreditCardDetail($id: ID!) {
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
export const listCreditCardDetails = /* GraphQL */ `
  query ListCreditCardDetails(
    $filter: ModelCreditCardDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreditCardDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getDebitCardDetail = /* GraphQL */ `
  query GetDebitCardDetail($id: ID!) {
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
export const listDebitCardDetails = /* GraphQL */ `
  query ListDebitCardDetails(
    $filter: ModelDebitCardDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDebitCardDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listCards = /* GraphQL */ `
  query ListCards(
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
export const getCreditReport = /* GraphQL */ `
  query GetCreditReport($id: ID!) {
    getCreditReport(id: $id) {
      id
      issuer
      creditScore

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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listCreditReports = /* GraphQL */ `
  query ListCreditReports(
    $filter: ModelCreditReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreditReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        issuer
        creditScore

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
export const getPriorityPayment = /* GraphQL */ `
  query GetPriorityPayment($id: ID!) {
    getPriorityPayment(id: $id) {
      id
      percent

      owner
    }
  }
`;
export const listPriorityPayments = /* GraphQL */ `
  query ListPriorityPayments(
    $filter: ModelPriorityPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPriorityPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        percent

        owner
      }
      nextToken
    }
  }
`;
export const getFinancialIndependence = /* GraphQL */ `
  query GetFinancialIndependence($id: ID!) {
    getFinancialIndependence(id: $id) {
      id
      targetAmount
      targetYears

      projectedExpenseByYear
      owner
    }
  }
`;
export const listFinancialIndependences = /* GraphQL */ `
  query ListFinancialIndependences(
    $filter: ModelFinancialIndependenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFinancialIndependences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        targetAmount
        targetYears

        projectedExpenseByYear
        owner
      }
      nextToken
    }
  }
`;
export const getInvestment = /* GraphQL */ `
  query GetInvestment($id: ID!) {
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
      beneficiaries {
        items {
          id
          name
          lastName

          owner
        }
        nextToken
      }

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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listInvestments = /* GraphQL */ `
  query ListInvestments(
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
        beneficiaries {
          nextToken
        }

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
export const getLoan = /* GraphQL */ `
  query GetLoan($id: ID!) {
    getLoan(id: $id) {
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
export const listLoans = /* GraphQL */ `
  query ListLoans(
    $filter: ModelLoanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
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
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
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
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
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
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
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

          onTimePayments
          creditUsage
          creditInquiries
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

        owner
      }
      fi {
        id
        targetAmount
        targetYears

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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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

          owner
        }
        fi {
          id
          targetAmount
          targetYears

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
          items {
            __typename
            id
            kind
            amount
            category
            dueDate
            nature
            supply {
              id
              supplyFor
              title
              notes
              brand
              model
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
              }
            }
            repair {
              id
              title
              notes
            }
            otherHousing {
              id
              title
              notes
            }
            utility {
              id
              selection
              company
              title
              notes
              reading
              period {
                id
                billingStart
                billingEnd
              }
            }
          }
        }
        phoneExpenses {
          nextToken
          items {
            __typename
            id
            kind
            dueDate
            amount
            category
            phonePlan
            additional {
              id
              title
              notes
            }
            plan {
              id
              title
              notes
              billing {
                id
                billingStart
                billingEnd
              }
            }
          }
        }
        insuranceExpenses {
          nextToken
          items {
            __typename
            id
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
            beneficiaries {
              items {
                id
                name
                lastName
                address {
                  id
                  number
                  street
                  postCode
                  county
                  state
                  region
                  county
                }
              }
            }
          }
        }
        legalExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            nature
            title
            notes
            lawyers {
              items {
                __typename
                id
                phone
                name
                lastName
                email
                fee
                firm
                address {
                  id
                }
              }
            }
          }
        }
        foodExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            nature
            dinningOut {
              id
              place
              title
              notes
            }
            grocery {
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
                }
              }
            }
          }
        }
        commuteExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            service
            event
            title
            notes
          }
        }
        educationExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            nature
            communityCollege {
              id
              program
              university
              school
              title
              notes
              fees {
                nextToken
                items {
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
                  }
                }
              }
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
              period {
                id
                billingStart
                billingEnd
              }
            }
            training {
              id
              title
              notes
              school
              period {
                id
                billingStart
                billingEnd
              }
            }
            bootcamp {
              id
              title
              notes
              costDeferred
              period {
                id
                billingStart
                billingEnd
              }
            }
            college {
              id
              program
              university
              school
              title
              notes
              fees {
                nextToken
                items {
                  id
                  tuitionAndFees
                  booksAndSupplies
                  roomAndBoard
                  transportation
                  personal
                }
              }
            }
          }
        }
        personalCareExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            nature
            title
            notes
          }
        }
        petExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            nature
            title
            notes
          }
        }
        entertainmentExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            nature
            title
            notes
          }
        }
        loanExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            nature
            title
            notes
          }
        }
        taxExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            category
            taxDebt
            fee
            title
            notes
            w2 {
              id
              year
              grossPay
              federal
              state
              local
            }
          }
        }
        investmentExpenses {
          nextToken
          items {
            __typename
            id
            kind
            account
            dueDate
            category
            title
            notes
            amount
          }
        }
        gyftExpenses {
          nextToken
          items {
            __typename
            id
            kind
            amount
            dueDate
            event
            title
            notes
            recipient {
              id
              name
            }
          }
        }

        owner
      }
      nextToken
    }
  }
`;
