import React, { useState, useEffect, useReducer } from 'react'

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return { ...state, isLoading: true, isError: false };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

const useDataApi = (operation, client, initialData) => {
    const { API, graphqlOperation } = client;
    const { crudl, input } = operation;
    const [localOperation, setLocalOperation] = useState(operation);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: FETCH_INIT });

            try {
                const result = await API.graphql(graphqlOperation(crudl.list, { nextToken: input.hasNextToken }));
                if (!didCancel) {
                    dispatch({ type: FETCH_SUCCESS, payload: result.data.items })
                }
            } catch (error) {

            }
        }
    })
}
