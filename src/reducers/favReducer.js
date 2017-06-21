const initialState = {
    arr:[]
}

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAVORITE_REPO':
      return {
        ...state,
        arr: [...state.arr, action.payload]
      };
    case 'DELETE_REPO':
      const repoId = action.payload
      return {
        arr: state.arr.filter((repo) => repo.id !== repoId)
      }
    default:
      return state;
  }
};

export default favReducer;
