import {GET_ALL_USER_INFO_REQUEST} from './actions';

const initialState = {
  id: null,
  name: null,
  email: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_INFO_REQUEST: {
      const {id, name, email} = action.payload;
      return {
        id,
        name,
        email,
      };
    }
    default:
      return state;
  }
};

export {reducer};
