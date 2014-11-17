var request = require('request');

request = request.defaults({json: true});

/* Constructor for creating an Emma client.
   {
      publicKey: 'your api public key',
      privateKey: 'your api private key',
      accountID: 12345678,
   }
*/
module.exports = function (parameters) {
  this.settings = {
    baseURL: "https://api.e2ma.net" || parameters.baseURL,
    publicKey: null || parameters.publicKey,
    privateKey: null || parameters.privateKey,
    accountID: null || parameters.accountID,
    accessToken: null || parameters.accessToken
  };

  /* Attach internal method for sending a request off to the Emma API.

     requestDetails:
       verb: the HTTP verb (GET, PUT, POST, DELETE)
       url: the URL to send the request to
     parameters:
       body: optional JS object to send as the body of a POST request
       query: optional query parameters to put on a GET request
     callback: a function to return the response to
  */
  this.request = function (requestDetails, parameters, callback) {
    requestDetails.url = requestDetails.url || '';
    requestDetails.verb = requestDetails.verb || 'GET';

    var requestOptions = {
      url: this.settings.baseURL + '/' + this.settings.accountID + '/' + requestDetails.url,
      method: requestDetails.verb
    };

    // If authentication is required for this request then attach it.
    if (this.settings.publicKey && this.settings.privateKey)
      requestOptions.auth = {
        username: this.settings.publicKey,
        password: this.settings.privateKey,
        sendImmediately: true
      };
    else if (this.settings.accessToken)
      requestOptions.auth = {
        bearer: this.settings.accessToken,
        sendImmediately: true
      };
    else
      throw new Error('Must specify valid public and private key or access token for Emma API when creating the client.');

    // If the verb is PUT or POST check for a body and attach it.
    if (requestDetails.verb == 'POST' | requestDetails.verb == 'PUT')
      requestOptions.body = parameters.body;
    else if (requestDetails.verb == 'GET')
      requestOptions.qs = parameters.query;

    // Actually execute the request.
    request(
      requestOptions,
      function (err, response, body) {
        if (err)
          callback(err);
        else
        {
          if (typeof body != 'undefined') {
            // Check for an error code in the body of the response
            if (typeof body.error != 'undefined')
              callback(body);
            else
              callback(null, body);
          }
          else
          {
            callback('SERVICE ERROR:\n' + JSON.stringify(response, null, 2) + '\n');
          }
        }
      }
    );
  };

  // Attach all the API methods to this object.
  var categories = ['field', 'group', 'mailing', 'member', 'response', 'search', 'trigger', 'webhook', 'import'];
  var self = this;

  categories.forEach(function (category) {
    self[category] = require(__dirname + '/categories/' + category + '.js')(self);
  });
};
