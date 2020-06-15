/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePeriod = /* GraphQL */ `
  subscription OnCreatePeriod($owner: String!) {
    onCreatePeriod(owner: $owner) {
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
export const onUpdatePeriod = /* GraphQL */ `
  subscription OnUpdatePeriod($owner: String!) {
    onUpdatePeriod(owner: $owner) {
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
export const onDeletePeriod = /* GraphQL */ `
  subscription OnDeletePeriod($owner: String!) {
    onDeletePeriod(owner: $owner) {
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
export const onCreateUtility = /* GraphQL */ `
  subscription OnCreateUtility($owner: String!) {
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
export const onUpdateUtility = /* GraphQL */ `
  subscription OnUpdateUtility($owner: String!) {
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
export const onDeleteUtility = /* GraphQL */ `
  subscription OnDeleteUtility($owner: String!) {
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
export const onCreateSupply = /* GraphQL */ `
  subscription OnCreateSupply($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSupply = /* GraphQL */ `
  subscription OnUpdateSupply($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSupply = /* GraphQL */ `
  subscription OnDeleteSupply($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateHome = /* GraphQL */ `
  subscription OnCreateHome($owner: String!) {
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
export const onUpdateHome = /* GraphQL */ `
  subscription OnUpdateHome($owner: String!) {
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
export const onDeleteHome = /* GraphQL */ `
  subscription OnDeleteHome($owner: String!) {
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
export const onCreateRepair = /* GraphQL */ `
  subscription OnCreateRepair($owner: String!) {
    onCreateRepair(owner: $owner) {
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
export const onUpdateRepair = /* GraphQL */ `
  subscription OnUpdateRepair($owner: String!) {
    onUpdateRepair(owner: $owner) {
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
export const onDeleteRepair = /* GraphQL */ `
  subscription OnDeleteRepair($owner: String!) {
    onDeleteRepair(owner: $owner) {
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
export const onCreateOtherHousing = /* GraphQL */ `
  subscription OnCreateOtherHousing($owner: String!) {
    onCreateOtherHousing(owner: $owner) {
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
export const onUpdateOtherHousing = /* GraphQL */ `
  subscription OnUpdateOtherHousing($owner: String!) {
    onUpdateOtherHousing(owner: $owner) {
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
export const onDeleteOtherHousing = /* GraphQL */ `
  subscription OnDeleteOtherHousing($owner: String!) {
    onDeleteOtherHousing(owner: $owner) {
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
export const onCreateHousingExpense = /* GraphQL */ `
  subscription OnCreateHousingExpense($owner: String!) {
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
export const onUpdateHousingExpense = /* GraphQL */ `
  subscription OnUpdateHousingExpense($owner: String!) {
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
export const onDeleteHousingExpense = /* GraphQL */ `
  subscription OnDeleteHousingExpense($owner: String!) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($owner: String!) {
    onCreatePlan(owner: $owner) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($owner: String!) {
    onUpdatePlan(owner: $owner) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($owner: String!) {
    onDeletePlan(owner: $owner) {
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
export const onCreateAdditional = /* GraphQL */ `
  subscription OnCreateAdditional($owner: String!) {
    onCreateAdditional(owner: $owner) {
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
export const onUpdateAdditional = /* GraphQL */ `
  subscription OnUpdateAdditional($owner: String!) {
    onUpdateAdditional(owner: $owner) {
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
export const onDeleteAdditional = /* GraphQL */ `
  subscription OnDeleteAdditional($owner: String!) {
    onDeleteAdditional(owner: $owner) {
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
export const onCreatePhoneExpense = /* GraphQL */ `
  subscription OnCreatePhoneExpense($owner: String!) {
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
export const onUpdatePhoneExpense = /* GraphQL */ `
  subscription OnUpdatePhoneExpense($owner: String!) {
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
export const onDeletePhoneExpense = /* GraphQL */ `
  subscription OnDeletePhoneExpense($owner: String!) {
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
export const onCreateBeneficiary = /* GraphQL */ `
  subscription OnCreateBeneficiary($owner: String!) {
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
export const onUpdateBeneficiary = /* GraphQL */ `
  subscription OnUpdateBeneficiary($owner: String!) {
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
export const onDeleteBeneficiary = /* GraphQL */ `
  subscription OnDeleteBeneficiary($owner: String!) {
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
export const onCreateInsuranceExpense = /* GraphQL */ `
  subscription OnCreateInsuranceExpense($owner: String!) {
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
export const onUpdateInsuranceExpense = /* GraphQL */ `
  subscription OnUpdateInsuranceExpense($owner: String!) {
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
export const onDeleteInsuranceExpense = /* GraphQL */ `
  subscription OnDeleteInsuranceExpense($owner: String!) {
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
export const onCreateLawyer = /* GraphQL */ `
  subscription OnCreateLawyer($owner: String!) {
    onCreateLawyer(owner: $owner) {
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
export const onUpdateLawyer = /* GraphQL */ `
  subscription OnUpdateLawyer($owner: String!) {
    onUpdateLawyer(owner: $owner) {
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
export const onDeleteLawyer = /* GraphQL */ `
  subscription OnDeleteLawyer($owner: String!) {
    onDeleteLawyer(owner: $owner) {
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
export const onCreateLegalExpense = /* GraphQL */ `
  subscription OnCreateLegalExpense($owner: String!) {
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
export const onUpdateLegalExpense = /* GraphQL */ `
  subscription OnUpdateLegalExpense($owner: String!) {
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
export const onDeleteLegalExpense = /* GraphQL */ `
  subscription OnDeleteLegalExpense($owner: String!) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String!) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String!) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String!) {
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
export const onCreateGrocery = /* GraphQL */ `
  subscription OnCreateGrocery($owner: String!) {
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
export const onUpdateGrocery = /* GraphQL */ `
  subscription OnUpdateGrocery($owner: String!) {
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
export const onDeleteGrocery = /* GraphQL */ `
  subscription OnDeleteGrocery($owner: String!) {
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
export const onCreateDinningOut = /* GraphQL */ `
  subscription OnCreateDinningOut($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDinningOut = /* GraphQL */ `
  subscription OnUpdateDinningOut($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDinningOut = /* GraphQL */ `
  subscription OnDeleteDinningOut($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFoodExpense = /* GraphQL */ `
  subscription OnCreateFoodExpense($owner: String!) {
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
export const onUpdateFoodExpense = /* GraphQL */ `
  subscription OnUpdateFoodExpense($owner: String!) {
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
export const onDeleteFoodExpense = /* GraphQL */ `
  subscription OnDeleteFoodExpense($owner: String!) {
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
export const onCreateCommuteExpense = /* GraphQL */ `
  subscription OnCreateCommuteExpense($owner: String!) {
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
export const onUpdateCommuteExpense = /* GraphQL */ `
  subscription OnUpdateCommuteExpense($owner: String!) {
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
export const onDeleteCommuteExpense = /* GraphQL */ `
  subscription OnDeleteCommuteExpense($owner: String!) {
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
export const onCreateAcademicFee = /* GraphQL */ `
  subscription OnCreateAcademicFee($owner: String!) {
    onCreateAcademicFee(owner: $owner) {
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
export const onUpdateAcademicFee = /* GraphQL */ `
  subscription OnUpdateAcademicFee($owner: String!) {
    onUpdateAcademicFee(owner: $owner) {
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
export const onDeleteAcademicFee = /* GraphQL */ `
  subscription OnDeleteAcademicFee($owner: String!) {
    onDeleteAcademicFee(owner: $owner) {
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
export const onCreateCollege = /* GraphQL */ `
  subscription OnCreateCollege($owner: String!) {
    onCreateCollege(owner: $owner) {
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
export const onUpdateCollege = /* GraphQL */ `
  subscription OnUpdateCollege($owner: String!) {
    onUpdateCollege(owner: $owner) {
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
export const onDeleteCollege = /* GraphQL */ `
  subscription OnDeleteCollege($owner: String!) {
    onDeleteCollege(owner: $owner) {
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
export const onCreateCommunityCollege = /* GraphQL */ `
  subscription OnCreateCommunityCollege($owner: String!) {
    onCreateCommunityCollege(owner: $owner) {
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
export const onUpdateCommunityCollege = /* GraphQL */ `
  subscription OnUpdateCommunityCollege($owner: String!) {
    onUpdateCommunityCollege(owner: $owner) {
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
export const onDeleteCommunityCollege = /* GraphQL */ `
  subscription OnDeleteCommunityCollege($owner: String!) {
    onDeleteCommunityCollege(owner: $owner) {
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
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor($owner: String!) {
    onCreateInstructor(owner: $owner) {
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
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor($owner: String!) {
    onUpdateInstructor(owner: $owner) {
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
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor($owner: String!) {
    onDeleteInstructor(owner: $owner) {
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
export const onCreateOnlineCourse = /* GraphQL */ `
  subscription OnCreateOnlineCourse($owner: String!) {
    onCreateOnlineCourse(owner: $owner) {
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
export const onUpdateOnlineCourse = /* GraphQL */ `
  subscription OnUpdateOnlineCourse($owner: String!) {
    onUpdateOnlineCourse(owner: $owner) {
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
export const onDeleteOnlineCourse = /* GraphQL */ `
  subscription OnDeleteOnlineCourse($owner: String!) {
    onDeleteOnlineCourse(owner: $owner) {
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
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining($owner: String!) {
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
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining($owner: String!) {
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
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining($owner: String!) {
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
export const onCreateBootcamp = /* GraphQL */ `
  subscription OnCreateBootcamp($owner: String!) {
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
export const onUpdateBootcamp = /* GraphQL */ `
  subscription OnUpdateBootcamp($owner: String!) {
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
export const onDeleteBootcamp = /* GraphQL */ `
  subscription OnDeleteBootcamp($owner: String!) {
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
export const onCreateEducationExpense = /* GraphQL */ `
  subscription OnCreateEducationExpense($owner: String!) {
    onCreateEducationExpense(owner: $owner) {
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
export const onUpdateEducationExpense = /* GraphQL */ `
  subscription OnUpdateEducationExpense($owner: String!) {
    onUpdateEducationExpense(owner: $owner) {
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
export const onDeleteEducationExpense = /* GraphQL */ `
  subscription OnDeleteEducationExpense($owner: String!) {
    onDeleteEducationExpense(owner: $owner) {
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
export const onCreatePersonalCareExpense = /* GraphQL */ `
  subscription OnCreatePersonalCareExpense($owner: String!) {
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
export const onUpdatePersonalCareExpense = /* GraphQL */ `
  subscription OnUpdatePersonalCareExpense($owner: String!) {
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
export const onDeletePersonalCareExpense = /* GraphQL */ `
  subscription OnDeletePersonalCareExpense($owner: String!) {
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
export const onCreatePetExpense = /* GraphQL */ `
  subscription OnCreatePetExpense($owner: String!) {
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
export const onUpdatePetExpense = /* GraphQL */ `
  subscription OnUpdatePetExpense($owner: String!) {
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
export const onDeletePetExpense = /* GraphQL */ `
  subscription OnDeletePetExpense($owner: String!) {
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
export const onCreateEntertainmentExpense = /* GraphQL */ `
  subscription OnCreateEntertainmentExpense($owner: String!) {
    onCreateEntertainmentExpense(owner: $owner) {
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
export const onUpdateEntertainmentExpense = /* GraphQL */ `
  subscription OnUpdateEntertainmentExpense($owner: String!) {
    onUpdateEntertainmentExpense(owner: $owner) {
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
export const onDeleteEntertainmentExpense = /* GraphQL */ `
  subscription OnDeleteEntertainmentExpense($owner: String!) {
    onDeleteEntertainmentExpense(owner: $owner) {
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
export const onCreateLoanExpense = /* GraphQL */ `
  subscription OnCreateLoanExpense($owner: String!) {
    onCreateLoanExpense(owner: $owner) {
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
export const onUpdateLoanExpense = /* GraphQL */ `
  subscription OnUpdateLoanExpense($owner: String!) {
    onUpdateLoanExpense(owner: $owner) {
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
export const onDeleteLoanExpense = /* GraphQL */ `
  subscription OnDeleteLoanExpense($owner: String!) {
    onDeleteLoanExpense(owner: $owner) {
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
export const onCreateW2Summary = /* GraphQL */ `
  subscription OnCreateW2Summary($owner: String!) {
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
export const onUpdateW2Summary = /* GraphQL */ `
  subscription OnUpdateW2Summary($owner: String!) {
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
export const onDeleteW2Summary = /* GraphQL */ `
  subscription OnDeleteW2Summary($owner: String!) {
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
export const onCreateTaxExpense = /* GraphQL */ `
  subscription OnCreateTaxExpense($owner: String!) {
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
export const onUpdateTaxExpense = /* GraphQL */ `
  subscription OnUpdateTaxExpense($owner: String!) {
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
export const onDeleteTaxExpense = /* GraphQL */ `
  subscription OnDeleteTaxExpense($owner: String!) {
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
export const onCreateInvestmentExpense = /* GraphQL */ `
  subscription OnCreateInvestmentExpense($owner: String!) {
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
export const onUpdateInvestmentExpense = /* GraphQL */ `
  subscription OnUpdateInvestmentExpense($owner: String!) {
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
export const onDeleteInvestmentExpense = /* GraphQL */ `
  subscription OnDeleteInvestmentExpense($owner: String!) {
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
export const onCreateRecipient = /* GraphQL */ `
  subscription OnCreateRecipient($owner: String!) {
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
export const onUpdateRecipient = /* GraphQL */ `
  subscription OnUpdateRecipient($owner: String!) {
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
export const onDeleteRecipient = /* GraphQL */ `
  subscription OnDeleteRecipient($owner: String!) {
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
export const onCreateGyftExpense = /* GraphQL */ `
  subscription OnCreateGyftExpense($owner: String!) {
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
export const onUpdateGyftExpense = /* GraphQL */ `
  subscription OnUpdateGyftExpense($owner: String!) {
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
export const onDeleteGyftExpense = /* GraphQL */ `
  subscription OnDeleteGyftExpense($owner: String!) {
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
export const onCreateBudget = /* GraphQL */ `
  subscription OnCreateBudget($owner: String!) {
    onCreateBudget(owner: $owner) {
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
export const onUpdateBudget = /* GraphQL */ `
  subscription OnUpdateBudget($owner: String!) {
    onUpdateBudget(owner: $owner) {
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
export const onDeleteBudget = /* GraphQL */ `
  subscription OnDeleteBudget($owner: String!) {
    onDeleteBudget(owner: $owner) {
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
export const onCreateIncome = /* GraphQL */ `
  subscription OnCreateIncome($owner: String!) {
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
export const onUpdateIncome = /* GraphQL */ `
  subscription OnUpdateIncome($owner: String!) {
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
export const onDeleteIncome = /* GraphQL */ `
  subscription OnDeleteIncome($owner: String!) {
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
export const onCreateCreditCardDetail = /* GraphQL */ `
  subscription OnCreateCreditCardDetail($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCreditCardDetail = /* GraphQL */ `
  subscription OnUpdateCreditCardDetail($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCreditCardDetail = /* GraphQL */ `
  subscription OnDeleteCreditCardDetail($owner: String!) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateDebitCardDetail = /* GraphQL */ `
  subscription OnCreateDebitCardDetail($owner: String!) {
    onCreateDebitCardDetail(owner: $owner) {
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
export const onUpdateDebitCardDetail = /* GraphQL */ `
  subscription OnUpdateDebitCardDetail($owner: String!) {
    onUpdateDebitCardDetail(owner: $owner) {
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
export const onDeleteDebitCardDetail = /* GraphQL */ `
  subscription OnDeleteDebitCardDetail($owner: String!) {
    onDeleteDebitCardDetail(owner: $owner) {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard($owner: String!) {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard($owner: String!) {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard($owner: String!) {
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
export const onCreateCreditReport = /* GraphQL */ `
  subscription OnCreateCreditReport($owner: String!) {
    onCreateCreditReport(owner: $owner) {
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
export const onUpdateCreditReport = /* GraphQL */ `
  subscription OnUpdateCreditReport($owner: String!) {
    onUpdateCreditReport(owner: $owner) {
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
export const onDeleteCreditReport = /* GraphQL */ `
  subscription OnDeleteCreditReport($owner: String!) {
    onDeleteCreditReport(owner: $owner) {
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
export const onCreatePriorityPayment = /* GraphQL */ `
  subscription OnCreatePriorityPayment($owner: String!) {
    onCreatePriorityPayment(owner: $owner) {
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
export const onUpdatePriorityPayment = /* GraphQL */ `
  subscription OnUpdatePriorityPayment($owner: String!) {
    onUpdatePriorityPayment(owner: $owner) {
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
export const onDeletePriorityPayment = /* GraphQL */ `
  subscription OnDeletePriorityPayment($owner: String!) {
    onDeletePriorityPayment(owner: $owner) {
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
export const onCreateFinancialIndependence = /* GraphQL */ `
  subscription OnCreateFinancialIndependence($owner: String!) {
    onCreateFinancialIndependence(owner: $owner) {
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
export const onUpdateFinancialIndependence = /* GraphQL */ `
  subscription OnUpdateFinancialIndependence($owner: String!) {
    onUpdateFinancialIndependence(owner: $owner) {
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
export const onDeleteFinancialIndependence = /* GraphQL */ `
  subscription OnDeleteFinancialIndependence($owner: String!) {
    onDeleteFinancialIndependence(owner: $owner) {
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
export const onCreateInvestment = /* GraphQL */ `
  subscription OnCreateInvestment($owner: String!) {
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
export const onUpdateInvestment = /* GraphQL */ `
  subscription OnUpdateInvestment($owner: String!) {
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
export const onDeleteInvestment = /* GraphQL */ `
  subscription OnDeleteInvestment($owner: String!) {
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
export const onCreateLoan = /* GraphQL */ `
  subscription OnCreateLoan($owner: String!) {
    onCreateLoan(owner: $owner) {
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
export const onUpdateLoan = /* GraphQL */ `
  subscription OnUpdateLoan($owner: String!) {
    onUpdateLoan(owner: $owner) {
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
export const onDeleteLoan = /* GraphQL */ `
  subscription OnDeleteLoan($owner: String!) {
    onDeleteLoan(owner: $owner) {
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
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty($owner: String!) {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty($owner: String!) {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty($owner: String!) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String!) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String!) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String!) {
    onDeleteAddress(owner: $owner) {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($owner: String!) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($owner: String!) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($owner: String!) {
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
