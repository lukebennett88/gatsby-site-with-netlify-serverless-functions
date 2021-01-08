/*
  This function would send the contact data to a CRM, but hes been excluded to
  keep this example simple.
 */

// const fetch = require('node-fetch');

exports.handler = async function (event) {
  console.log({ formBody: event.body });
  /*
    This will show the content of the form submission correctly:

    {
      formBody: '{"formName":"top","top-first_name":"Luke","top-last_name":"Bennett","top-email":"hello@lukebennett.com.au"}'
    }
  */

  // console.log({ formName: event.body.formName });
  /*
    This will return undefined:

    { formName: undefined }

    This is because `event.body` is not an abject
    it is a string and needs to be parsed as JSON
  */

  console.log({ formName: JSON.parse(event.body).formName });
  /*
   This will return undefined:

   { formName: "top" }
 */

  return {
    statusCode: 200,
    body: JSON.stringify(event.body, null, 2),
  };
};
