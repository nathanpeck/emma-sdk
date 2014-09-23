module.exports = function (client) {
  return {
    // http://api.myemma.com/api/external/response.html#get--#account_id-response
    list: function () {
      var callback, query = {};
      if (arguments.length >= 2) {
        callback = arguments[1];
        query = arguments[0];
      }
      else {
        callback = arguments[0];
      }

      client.request({verb: 'GET', url: 'response'}, {query: query}, callback);
    },

    fromMailingID: function (mailingID) {
      return {
        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id
        list: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-sends
        sends: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/sends'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-in_progress
        inProgress: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/in_progress'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-deliveries
        deliveries: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/deliveries'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-opens
        opens: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/opens'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-links
        links: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/links'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-clicks
        clicks: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/clicks'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-forwards
        forwards: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/forwards'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-optouts
        optouts: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/optouts'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-signups
        signups: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/signups'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-shares
        shares: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/shares'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-customer_shares
        customerShares: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/customer_shares'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-customer_share_clicks
        customerShareClicks: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/customer_share_clicks'}, {}, callback);
        },

        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-shares-overview
        shareOverview: function (callback) {
          client.request({verb: 'GET', url: 'response/' + mailingID + '/shares/overview'}, {}, callback);
        }
      };
    },

    share: function (shareID) {
      return {
        // http://api.myemma.com/api/external/response.html#get--#account_id-response-#share_id-customer_share
        details: function (callback) {
          client.request({verb: 'GET', url: 'response/' + shareID + '/customer_share'}, {}, callback);
        }
      };
    }
  };
};
