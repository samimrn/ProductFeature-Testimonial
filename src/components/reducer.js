export const initialState = {
    basket: [],
}
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.prices + amount, 0);

const reducer = (state, action) => {
    console.log(action);

    if( action.type === "INCREMENT"){
        let updatedCart = state.item.map((item) => {
            if(item.id === action.id){
                return{...state, quantity: item.quantity + 1}
            }
            return item;
        })
        return {...state, item: updatedCart}
    }

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state, 
                basket: [...state.basket, action.item],
            };

            case "REMOVE_FROM_BASKET":
            return {
                ...state, 
                basket: state.basket.filter(item => item.id !==action.id)
            };
            default:
                return state;
        }

      

    };

export default reducer

