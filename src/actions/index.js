export const searchTerm = search => ({
  type: 'SEARCH_TERM',
  payload: search
});

export const favRepo = repo => ({
  type: 'FAVORITE_REPO',
  payload: repo
});

export const delRepo = repo => ({
  type: 'DELETE_REPO',
  payload: repo
})
