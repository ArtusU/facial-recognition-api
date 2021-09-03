let DEBUG = true;
let host = "http://127.0.0.1:8000";
let stripePublishKey = "pk_test_51HVHJwGjLUpjNrZJDqvwOaunx2iEyXPdWmePrvoXFBbr8qDXcp9csZyVXNkxOYZCAfcDWWbFXo8QE7teREJEAaTC00yl1qLyO4";

if (DEBUG === false) {
  host = "";
  stripePublishKey = "";
}

export { stripePublishKey };

export const APIEndpoint = `${host}/api`


export const fileUploadURL = `${APIEndpoint}/demo/`;
export const facialRecognitionURL = `${APIEndpoint}/upload/`;
export const emailURL = `${APIEndpoint}/email/`;
export const changeEmailURL = `${APIEndpoint}/change-email/`;
export const changePasswordURL = `${APIEndpoint}/change-password/`;
export const billingURL = `${APIEndpoint}/billing/`;
export const subscribeURL = `${APIEndpoint}/subscribe/`;
export const APIkeyURL = `${APIEndpoint}/api-key/`;




