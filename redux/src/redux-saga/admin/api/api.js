import axios from "axios";
import {
  BASE_URL,
  DELETE_PRODUCT_API,
  GET_PRODUCT_API,
  POST_PRODUCT_API,
  PUT_PRODUCT_API,
} from "../../constant";

//get api
export async function get_product() {
  return axios
    .get(BASE_URL + GET_PRODUCT_API)
    .then((res) => {
      // console.log(res, "res from api");
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

// post api
export async function post_product(action) {
  return axios
    .post(BASE_URL + POST_PRODUCT_API, action.payload)
    .then((res) => {
      // console.log(res, "res from api");
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

// delete api
export async function delete_product(action) {
  return axios
    .delete(BASE_URL + DELETE_PRODUCT_API + "/"`${action.id}`)
    .then((res) => {
      console.log(res, "res from api");
      const id = action.payload.id;
      const status = res.status;
      return {
        id,
        status,
      };
    })
    .catch((error) => {
      console.log(error,"eweeeeeeeeeeee");
    });
}

// update api
export async function put_product(action){
  return axios.put(BASE_URL + PUT_PRODUCT_API + "/" `${action.id}`).then((res)=>{
    console.log(res,"response from api");
  })
}