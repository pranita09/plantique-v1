import addressTypes from "../constants/addressTypes";

const {ADD_NEW_ADDRESS, SHOW_ADDRESS_MODAL} = addressTypes;

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
}

const addressReducer = (state, {type, payload}) =>{
    switch(type){
        case SHOW_ADDRESS_MODAL:
            return {...state, showAddressModal: payload};
        case ADD_NEW_ADDRESS:
            return {...state, addresses: [...state.addresses, payload]}
        default:
            return state;
    }
}

export default addressReducer;