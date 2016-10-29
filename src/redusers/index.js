export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_CITY':
      return ['Kiev'];
    case 'DELETE_CITY':
      return [];
    default:
      return state;
  }
};
