module.exports = function (client) {
  return {
    // http://api.myemma.com/api/external/webhooks.html#get--#account_id-webhooks
    list: function (callback) {
      client.request({verb: 'GET', url: 'webhooks'}, {}, callback);
    },

    // http://api.myemma.com/api/external/webhooks.html#get--#account_id-webhooks-events
    events: function (callback) {
      client.request({verb: 'GET', url: 'webhooks/events'}, {}, callback);
    },

    // http://api.myemma.com/api/external/webhooks.html#post--#account_id-webhooks
    create: function (details, callback) {
      client.request({verb: 'POST', url: 'webhooks'}, {body: details}, callback);
    },

    withID: function (id) {
      return {
        // http://api.myemma.com/api/external/webhooks.html#get--#account_id-webhooks-#webhook_id
        details: function (callback) {
          client.request({verb: 'GET', url: 'webhooks/' + id}, {}, callback);
        },

        // http://api.myemma.com/api/external/webhooks.html#put--#account_id-webhooks-#webhook_id
        update: function (details, callback) {
          client.request({verb: 'PUT', url: 'webhooks/' + id}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/webhooks.html#delete--#account_id-webhooks-#webhook_id
        delete: function (callback) {
          client.request({verb: 'DELETE', url: 'webhooks/' + id}, {}, callback);
        }
      };
    },

    // http://api.myemma.com/api/external/webhooks.html#delete--#account_id-webhooks
    deleteAll: function (callback) {
      client.request({verb: 'DELETE', url: 'webhooks'}, {}, callback);
    }
  };
};
