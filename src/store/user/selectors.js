import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getAuthorizationError = (state) => {
  return state[NAME_SPACE].authorizationError;
};

export const getUserInfo = (state) => {
  return state[NAME_SPACE].userInfo;
};
