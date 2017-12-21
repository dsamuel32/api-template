const defaultResponse = (data, statusCode = 200) => ({
    data,
    statusCode
});
  
const erroResponse = (message, statusCode = 400) => defaultResponse({
    error: message
}, statusCode);


export { defaultResponse, erroResponse }