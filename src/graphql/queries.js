/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncPeriods = /* GraphQL */ `
  query SyncPeriods(
    $filter: ModelPeriodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeriods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        billingStart
        billingEnd
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPeriod = /* GraphQL */ `
  query GetPeriod($id: ID!) {
    getPeriod(id: $id) {
      id
      billingStart
      billingEnd
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUtilities = /* GraphQL */ `
  query SyncUtilities(
    $filter: ModelUtilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUtilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSupplies = /* GraphQL */ `
  query SyncSupplies(
    $filter: ModelSupplyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSupplies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHomes = /* GraphQL */ `
  query SyncHomes(
    $filter: ModelHomeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRepairs = /* GraphQL */ `
  query SyncRepairs(
    $filter: ModelRepairFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRepairs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        notes
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOtherHousings = /* GraphQL */ `
  query SyncOtherHousings(
    $filter: ModelOtherHousingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOtherHousings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        notes
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHousingExpenses = /* GraphQL */ `
  query SyncHousingExpenses(
    $filter: ModelHousingExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHousingExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        home {
          id
          mortgage
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        repair {
          id
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        otherHousing {
          id
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        tags
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        home {
          id
          mortgage
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        repair {
          id
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        otherHousing {
          id
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        tags
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlans = /* GraphQL */ `
  query SyncPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        notes
        billing {
          id
          billingStart
          billingEnd
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAdditionals = /* GraphQL */ `
  query SyncAdditionals(
    $filter: ModelAdditionalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdditionals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        notes
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getAdditional = /* GraphQL */ `
  query GetAdditional($id: ID!) {
    getAdditional(id: $id) {
      id
      title
      notes
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPhoneExpenses = /* GraphQL */ `
  query SyncPhoneExpenses(
    $filter: ModelPhoneExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPhoneExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        additional {
          id
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      additional {
        id
        title
        notes
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        additional {
          id
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBeneficiaries = /* GraphQL */ `
  query SyncBeneficiaries(
    $filter: ModelBeneficiaryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBeneficiaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          tags
          _version
          _deleted
          _lastChangedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        beneficiaries {
          nextToken
          startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          tags
          _version
          _deleted
          _lastChangedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInsuranceExpenses = /* GraphQL */ `
  query SyncInsuranceExpenses(
    $filter: ModelInsuranceExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInsuranceExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          startedAt
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getInsuranceExpense = /* GraphQL */ `
  query GetInsuranceExpense($id: ID!) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          startedAt
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLawyers = /* GraphQL */ `
  query SyncLawyers(
    $filter: ModelLawyerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLawyers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLegalExpenses = /* GraphQL */ `
  query SyncLegalExpenses(
    $filter: ModelLegalExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLegalExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          startedAt
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getLegalExpense = /* GraphQL */ `
  query GetLegalExpense($id: ID!) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          startedAt
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGroceries = /* GraphQL */ `
  query SyncGroceries(
    $filter: ModelGroceryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroceries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        store
        title
        notes
        info
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDinningOuts = /* GraphQL */ `
  query SyncDinningOuts(
    $filter: ModelDinningOutFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDinningOuts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFoodExpenses = /* GraphQL */ `
  query SyncFoodExpenses(
    $filter: ModelFoodExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFoodExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        dinningOut {
          id
          place
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        tags
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        dinningOut {
          id
          place
          title
          notes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        tags
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommuteExpenses = /* GraphQL */ `
  query SyncCommuteExpenses(
    $filter: ModelCommuteExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommuteExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAcademicFees = /* GraphQL */ `
  query SyncAcademicFees(
    $filter: ModelAcademicFeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAcademicFees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncColleges = /* GraphQL */ `
  query SyncColleges(
    $filter: ModelCollegeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncColleges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommunityColleges = /* GraphQL */ `
  query SyncCommunityColleges(
    $filter: ModelCommunityCollegeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommunityColleges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInstructors = /* GraphQL */ `
  query SyncInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOnlineCourses = /* GraphQL */ `
  query SyncOnlineCourses(
    $filter: ModelOnlineCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOnlineCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTrainings = /* GraphQL */ `
  query SyncTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBootcamps = /* GraphQL */ `
  query SyncBootcamps(
    $filter: ModelBootcampFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBootcamps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEducationExpenses = /* GraphQL */ `
  query SyncEducationExpenses(
    $filter: ModelEducationExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEducationExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        training {
          id
          title
          notes
          school
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        bootcamp {
          id
          title
          notes
          costDeferred
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        tags
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getEducationExpense = /* GraphQL */ `
  query GetEducationExpense($id: ID!) {
    getEducationExpense(id: $id) {
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        instructors {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        training {
          id
          title
          notes
          school
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        bootcamp {
          id
          title
          notes
          costDeferred
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        tags
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPersonalCareExpenses = /* GraphQL */ `
  query SyncPersonalCareExpenses(
    $filter: ModelPersonalCareExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPersonalCareExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPetExpenses = /* GraphQL */ `
  query SyncPetExpenses(
    $filter: ModelPetExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPetExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEntertainmentExpenses = /* GraphQL */ `
  query SyncEntertainmentExpenses(
    $filter: ModelEntertainmentExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEntertainmentExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLoanExpenses = /* GraphQL */ `
  query SyncLoanExpenses(
    $filter: ModelLoanExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLoanExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncW2Summaries = /* GraphQL */ `
  query SyncW2Summaries(
    $filter: ModelW2SummaryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncW2Summaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTaxExpenses = /* GraphQL */ `
  query SyncTaxExpenses(
    $filter: ModelTaxExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaxExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInvestmentExpenses = /* GraphQL */ `
  query SyncInvestmentExpenses(
    $filter: ModelInvestmentExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInvestmentExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRecipients = /* GraphQL */ `
  query SyncRecipients(
    $filter: ModelRecipientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecipients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGyftExpenses = /* GraphQL */ `
  query SyncGyftExpenses(
    $filter: ModelGyftExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGyftExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        kind
        amount
        dueDate
        event
        recipient {
          id
          name
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBudgets = /* GraphQL */ `
  query SyncBudgets(
    $filter: ModelBudgetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBudgets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        amount
        spent
        period {
          id
          billingStart
          billingEnd
          _version
          _deleted
          _lastChangedAt
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
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncIncomes = /* GraphQL */ `
  query SyncIncomes(
    $filter: ModelIncomeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIncomes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCreditCardDetails = /* GraphQL */ `
  query SyncCreditCardDetails(
    $filter: ModelCreditCardDetailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCreditCardDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDebitCardDetails = /* GraphQL */ `
  query SyncDebitCardDetails(
    $filter: ModelDebitCardDetailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDebitCardDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCards = /* GraphQL */ `
  query SyncCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        debitCardDetail {
          id
          dueDate
          overdraftFee
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        debitCardDetail {
          id
          dueDate
          overdraftFee
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCreditReports = /* GraphQL */ `
  query SyncCreditReports(
    $filter: ModelCreditReportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCreditReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        client {
          id
          username
          name
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCreditReport = /* GraphQL */ `
  query GetCreditReport($id: ID!) {
    getCreditReport(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
          email
          phone
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPriorityPayments = /* GraphQL */ `
  query SyncPriorityPayments(
    $filter: ModelPriorityPaymentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPriorityPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        percent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPriorityPayment = /* GraphQL */ `
  query GetPriorityPayment($id: ID!) {
    getPriorityPayment(id: $id) {
      id
      percent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFinancialIndependences = /* GraphQL */ `
  query SyncFinancialIndependences(
    $filter: ModelFinancialIndependenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFinancialIndependences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getFinancialIndependence = /* GraphQL */ `
  query GetFinancialIndependence($id: ID!) {
    getFinancialIndependence(id: $id) {
      id
      targetAmount
      targetYears
      createdAt
      updatedAt
      projectedExpenseByYear
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        projectedExpenseByYear
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInvestments = /* GraphQL */ `
  query SyncInvestments(
    $filter: ModelInvestmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInvestments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        beneficiaries {
          nextToken
          startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      beneficiaries {
        items {
          id
          name
          lastName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        beneficiaries {
          nextToken
          startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLoans = /* GraphQL */ `
  query SyncLoans(
    $filter: ModelLoanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLoans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        createdAt
        updatedAt
        tags
        period {
          id
          billingStart
          billingEnd
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
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
      createdAt
      updatedAt
      tags
      period {
        id
        billingStart
        billingEnd
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      images {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        tags
        period {
          id
          billingStart
          billingEnd
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        images {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProperties = /* GraphQL */ `
  query SyncProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        number
        street
        postCode
        country
        state
        region
        county
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        housingExpenses {
          nextToken
          startedAt
        }
        phoneExpenses {
          nextToken
          startedAt
        }
        insuranceExpenses {
          nextToken
          startedAt
        }
        legalExpenses {
          nextToken
          startedAt
        }
        foodExpenses {
          nextToken
          startedAt
        }
        commuteExpenses {
          nextToken
          startedAt
        }
        educationExpenses {
          nextToken
          startedAt
        }
        personalCareExpenses {
          nextToken
          startedAt
        }
        petExpenses {
          nextToken
          startedAt
        }
        entertainmentExpenses {
          nextToken
          startedAt
        }
        loanExpenses {
          nextToken
          startedAt
        }
        taxExpenses {
          nextToken
          startedAt
        }
        investmentExpenses {
          nextToken
          startedAt
        }
        gyftExpenses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      priorityPayment {
        id
        percent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      fi {
        id
        targetAmount
        targetYears
        createdAt
        updatedAt
        projectedExpenseByYear
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      cards {
        items {
          id
          nature
          last4Digit
          amount
          tags
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
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
          startedAt
        }
        priorityPayment {
          id
          percent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        fi {
          id
          targetAmount
          targetYears
          createdAt
          updatedAt
          projectedExpenseByYear
          _version
          _deleted
          _lastChangedAt
          owner
        }
        properties {
          nextToken
          startedAt
        }
        investments {
          nextToken
          startedAt
        }
        incomes {
          nextToken
          startedAt
        }
        budgets {
          nextToken
          startedAt
        }
        cards {
          nextToken
          startedAt
        }
        legalExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
            id
            kind
            amount
            dueDate
            category
            nature
            title
            notes
            lawyers(limit: 10) {
              items {
                id
                _version
                phone
                address {
                  id
                  _version
                }
                name
                email
                fee
                firm
                legal {
                  id
                  _version
                }
              }
            }
          }
        }
        foodExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
            id
            kind
            amount
            dueDate
            category
            nature
            dinningOut {
              _version
              id
              place
              title
              notes
            }
            grocery {
              _version
              id
              store
              title
              notes
              info
              products {
                items {
                  _version
                  id
                  name
                  price
                  quantity
                }
              }
            }
          }
        }
        personalCareExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
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
        loanExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
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
        taxExpenses(limit: 30) {
          nextToken
          startedAt
          items {
            __typename
            _version
            id
            kind
            amount
            dueDate
            category
            w2 {
              _version
              id
              year
              grossPay
              federal
              state
              local
            }
            taxDebt
            fee
            title
            notes
          }
        }
        entertainmentExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
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
        petExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
            id
            kind
            amount
            dueDate
            category
            nature
            title
            title
            notes
          }
        }
        educationExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            id
            _version
            kind
            amount
            dueDate
            category
            nature
            communityCollege {
              id
              _version
              program
              university
              school
              title
              notes
              fees {
                items {
                  _version
                  id
                  tuitionAndFees
                  booksAndSupplies
                  roomAndBoard
                  transportation
                  personal
                  period {
                    _version
                    id
                    billingStart
                    billingEnd
                  }
                }
                nextToken
              }
            }
            onlineCourse {
              id
              _version
              title
              university
              school
              description
              notes
              platform
              url
              period {
                id
                _version
                billingStart
                billingEnd
              }
            }
            training {
              _version
              id
              title
              notes
              school
              period {
                _version
                id
                billingStart
                billingEnd
              }
            }
            bootcamp {
              _version
              id
              title
              notes
              costDeferred
              period {
                _version
                id
                billingStart
                billingEnd
              }
            }
            college {
              id
              _version
              program
              university
              school
              title
              notes
              fees {
                items {
                  id
                  _version
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
        commuteExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
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
        investmentExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
            id
            kind
            account
            amount
            dueDate
            category
            title
            notes
            owner
          }
        }
        gyftExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
            id
            kind
            amount
            dueDate
            event
            recipient {
              _version
              id
              name
            }
            title
            notes
            owner
          }
        }
        housingExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
            id
            kind
            amount
            category
            dueDate
            nature
            supply {
              _version
              id
              supplyFor
              title
              notes
              brand
              model
            }
            home {
              _version
              id
              mortgage
              title
              notes
              address {
                _version
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
              _version
              id
              title
              notes
            }
            otherHousing {
              _version
              id
              title
              notes
            }
            utility {
              _version
              id
              selection
              company
              title
              notes
              period {
                _version
                id
                billingStart
                billingEnd
              }
              reading
            }
          }
        }
        insuranceExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
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
                _version
                id
                name
                lastName
                address {
                  id
                  _version
                  number
                  street
                  postCode
                  country
                  state
                  region
                  county
                }
              }
            }
          }
        }
        phoneExpenses(limit: 50) {
          nextToken
          startedAt
          items {
            __typename
            _version
            id
            kind
            dueDate
            amount
            category
            phonePlan
            additional {
              _version
              id
              title
              notes
            }
            plan {
              _version
              id
              title
              notes
              billing {
                _version
                id
                billingStart
                billingEnd
              }
            }
          }
        }

        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
