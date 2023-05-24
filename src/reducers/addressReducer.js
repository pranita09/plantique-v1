import addressTypes from "../constants/addressTypes";

const {ADD_NEW_ADDRESS, SHOW_ADDRESS_MODAL, DELETE_ADDRESS, IS_ABLE_TO_EDIT, EDIT_ADDRESS} = addressTypes;

const addressList = [
    {
        _id: "2354drtgf4d-7555-49cb--4b09711abcd",
        name: "Monika Shah",
        street: "5, IndiraNagar",
        city: "Pune",
        state: "Maharashtra",
        zipcode: '411005',
        country: 'India',
        mobile: '3524652340',
      },
]

export const initialAddressState ={
    addresses: [...addressList],
    showAddressModal: false,
    isAbleToEdit: false,
}

const addressReducer = (state, {type, payload}) =>{
    switch(type){
        case SHOW_ADDRESS_MODAL:
            return {...state, showAddressModal: payload};
        case ADD_NEW_ADDRESS:
            return {...state, addresses: [...state.addresses, payload]};
        case DELETE_ADDRESS:
            return {...state, addresses: state.addresses.filter((address)=> address._id !== payload)};
        case IS_ABLE_TO_EDIT:
            return {...state, isAbleToEdit: payload};
        case EDIT_ADDRESS: {
            console.log(state.addresses);
            return {...state}
        }
        default:
            return state;
    }
}

export default addressReducer;