const initialState = [
  {
    intiuleDiplome: "Baccalaurear",
    nomEtablissement: "Lycee A Farabi",
  },
  {
    intiuleDiplome: "Technicien Specialise",
    nomEtablissement: "OFPPT",
  },
];
export const ajt = (data) => {
  return {
    type: "AJT",
    payload: data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AJT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
