import Swal from "sweetalert2";
import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_PROGRESS,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_PROGRESS,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
  POST_PRODUCT_PROGRESS,
  POST_PRODUCT_SUCCESS,
  PUT_PRODUCT_ERROR,
  PUT_PRODUCT_PROGRESS,
  PUT_PRODUCT_SUCCESS,
} from "../action/action";

const initialState = {
  product: [],
  isLoading: false,
  isError: null,
};

const productReducer = (state = initialState, action) => {
  // console.log(action, "from reducer");

  switch (action.type) {
    // get case
    case GET_PRODUCT_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: action.data,
        isError: null,
      };
    }

    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };
    }

    // post case
    case POST_PRODUCT_PROGRESS:{
      return{
        ...state,
        isLoading : true
      }
    }

    case POST_PRODUCT_SUCCESS:{
      return{
        ...state,
        isLoading: false,
        product: state.product.concat(action.data),
        isError: null
      }
    }

    case POST_PRODUCT_ERROR:{
      return{
        ...state,
        isLoading: false,
        isError: action.payload
      }
    }

    // delete case
    case DELETE_PRODUCT_PROGRESS:{
      return{
        ...state,
        isLoading: true
      }
    }

    case DELETE_PRODUCT_SUCCESS:{
      Swal.fire({
        text: "Data deleted successfully!",
        icon: "success"
      });
      return{
        ...state,
        product: state.product.filter(val=>val.id !== action.id),
        isLoading:false,
        isError: null
      }
    }

    case DELETE_PRODUCT_ERROR: {
      return{
        ...state,
        isLoading: false,
        isError: action.payload
      }
    }

    //put product
    case PUT_PRODUCT_PROGRESS: {
      return{
        ...state,
        isLoading: true
      }
    }

    case PUT_PRODUCT_SUCCESS:{
      return {
        ...state,
        isLoading: false,
        product : state.product.map((item)=>{
          if(item.id === action.data.id){
            return{
              ...item,
              ...action.data
            }
          }
          else{
            return{
              item
            }
          }
        }),
        isError: null
      }
    }

    case PUT_PRODUCT_ERROR:{
      return{
        ...state,
        isLoading: false,
        isError : action.data
      }
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default productReducer;
