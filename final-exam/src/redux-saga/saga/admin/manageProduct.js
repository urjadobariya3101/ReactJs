import { call, put } from "redux-saga/effects";
import { get_product, post_product } from "../../admin/api/api";

import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
  POST_PRODUCT_SUCCESS,
} from "../../admin/action/action";

// get product data
export function* handle_get_product_api(action) {
    // console.log("[][][][][]");
  try {
    const { data, status } = yield call(get_product, action.payload);

    if (status === 200 || status === 201) {
      yield put({ type: GET_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: GET_PRODUCT_ERROR, error: "Failed to get product data" });
    }
  } catch (error) {
    console.error("Error in handle_get_product_api:", error);
    yield put({ type: GET_PRODUCT_ERROR, error: error.message || "An error occurred" });
  }
}

// post product data
export function* handle_post_product_api(action) {
  try {
    const { data, status } = yield call(post_product, action.payload);
    // console.log(action.payload,"{{}{}{}{}{}{}{}}");

    if (status === 200 || status === 201) {
      yield put({ type: POST_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: POST_PRODUCT_ERROR, error: "Failed to post product data" });
    }
  } catch (error) {
    console.error("Error in handle_post_product_api:", error);
    yield put({ type: POST_PRODUCT_ERROR, error: error.message || "An error occurred" });
  }
}
