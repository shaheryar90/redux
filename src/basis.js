import { createStore, combineReducers } from "redux";

//Reducer
//aik se zada reducer ho tou combineReducer IMPORT KRTE HAI
//Dispatch mein jo likha hai woh usko utaaa kr sb reducer mein lekr jata hai jo neeche hai woh reducer hai

//state={} ye default state hai

//mene todos todos ki keys against rakhi hai aur users ke against
//store ka andr default state ye object ahaje ga jo provide kra hai parameter
function Todo(state = { name: "shaheryar" }, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        text: "TODO_ADDED",
      };
    case "DELETE_TODO":
      return {
        ...state,
        text: "TODO_DELETED",
      };
    default:
      return state;

      break;
  }
}

function User(state = { name: "Bilal" }, action) {
  switch (action.type) {
    case "ADD_User":
      return {
        ...state,
        text: "User_ADDED",
      };
    case "User_TODO":
      return {
        ...state,
        text: "User_DELETED",
      };
    default:
      return state;

      break;
  }
}
//store.getState se puraaa redux store laa deta hai but hmne store mein paramteer empty pass kraaa hai that why woh {} ye rturn krrh hai

//store ke parameter mein reducer ,aur default sstore deta hai aur default store ye {} hai default store
//output jo aee ga woh Todos:{....} Users:{...} aee ga
const rootReducer = combineReducers({
  Todo,
  User,
});
const store = createStore(rootReducer, {});

//YE ACTION HAI
//Dispatch hi woh action return krta hai jo jata reducer ke paas
//dispatch ka kaam hai action ko lekr jae reducer ke paas
store.dispatch({
  type: "ADD_TODO",
});

//store.getState() mein puraa redux ka store uth kr ahajata hai

console.log(store.getState());

//hmne console kra tou usne hmhe
// Object name:"shaheryar"
//  text:"TODO_ADDED"

export default store;

//Component=> action => reducer => store =>components

//ACTION AIK PAYLOAD YA OBJECT hai jisko lekr ahta reducer mein dispatch

//reducer aaik aesa function hai jo hmhe piece of state provide krta hai ya mamnge krta hai

//ye output ahrha hai
//{Todo: {…}, User: {…}}
// Todo: {name: "shaheryar", text: "TODO_ADDED"}
// User: {name: "Bilal"}
