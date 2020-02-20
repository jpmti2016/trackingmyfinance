import { API, graphqlOperation } from "aws-amplify";
import {
  createAddress,
  updateAddress,
  deleteAddress
} from "../../graphql/mutations";
import { getAddress, listAddresss } from "../../graphql/queries";

import { replacePropEmptyString } from "./utilities";

//asumes all fields come formatted

export const handleCreateAddress = async address => {
  try {
    const result = await API.graphql(
      graphqlOperation(createAddress, { input: { ...address } })
    );

    console.log("new address", result.data.createAddress);
    return result.data.createAddress.id;
  } catch (error) {
    console.error("handle create addres", error);
  }
};

export const handleUpdateAddress = async address => {
  //address should come with id field
  try {
    const result = await API.graphql(
      graphqlOperation(updateAddress, { input: { ...address } })
    );
    console.log("handle update address", result.data.updateAddress);
    return result.data.updateAddress.id;
  } catch (error) {
    console.error("handle update address", error);
  }
};

export const handleDeleteAddress = async id => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteAddress, { input: { id } })
    );
    return result.data.deleteAddress.id;
  } catch (error) {
    console.error("handle delete address", error);
  }
};

export const handleGetAddress = async id => {
  try {
    const result = await API.graphql(
      graphqlOperation(getAddress, { input: { id } })
    );
    return result.data.getAddress; //complete Object
  } catch (error) {
    console.error("handle get address", error);
  }
};

// Are all operation request against the logged user ??
// Returns only the logged in user data ??
export const handleListAddress = async owner => {
  try {
    const result = await API.graphql(
      graphqlOperation(listAddresss, { input: { owner } })
    );
    return result.data.listAddresss.items;
  } catch (error) {
    console.log("handle list address", error);
  }
};

//TODO format address, for that each form tht use it has to put the same fields names

export const handleFormatAddress = data => {
  const address = handleStructureAddress(data);

  const formatedAddress = replacePropEmptyString(address);

  return formatedAddress;
};

export const handleStructureAddress = data => {
  const address = {
    number: data.housingNumber,
    street: data.housingStreet,
    postCode: data.housingPostCode,
    country: data.housingCountry,
    state: data.housingState,
    region: data.housingRegion,
    county: data.housingCounty
  };

  return address;
};
