let DEBUG = true;
let host = "http://127.0.0.1:8000";
let stripePublishKey = "";

if (DEBUG === false) {
  host = "";
  stripePublishKey = "";
}

export { stripePublishKey };

export const APIEndpoint = `${host}/api`


export const fileUploadURL = `${APIEndpoint}/demo/`;
export const facialRecognitionURL = `${APIEndpoint}/upload/`;