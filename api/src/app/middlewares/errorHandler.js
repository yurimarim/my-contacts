module.exports = (error, request, response, next) => {
  // eslint-disable-next-line no-console
  console.log('#### TESTE ERROR HANDLER');
  // eslint-disable-next-line no-console
  console.log(error);
  response.sendStatus(500);
};
