export const OPEN_LOGIN = "OPEN_LOGIN";
export const OPEN_SIGNUP = "OPEN_SIGNUP";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_FILTER = "OPEN_FILTER";
export const FETCHING = "FETCHING";
export const FETCHING_COMPLETE = "FETCHING_COMPLETE";
export const UPDATE_EDIT_ID = "UPDATE_EDIT_ID";


export const openLogin = () => ({
  type: OPEN_LOGIN
});

export const openSignup = () => ({
  type: OPEN_SIGNUP
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});


export const openFilter = (filterType) => ({
  type: OPEN_FILTER,
  filterType
});

export const fetching = () => ({
  type: FETCHING
});

export const fetchingComplete = () => ({
  type: FETCHING_COMPLETE
});

export const updateEditId = (id) => ({
  type: UPDATE_EDIT_ID,
  editId: id
});
