module.exports = function (client) {
  return {
    // http://api.myemma.com/api/external/triggers.html#get--#account_id-triggers
    list: function (callback) {
      client.request({verb: 'GET', url: 'triggers'}, {}, callback);
    },

    // http://api.myemma.com/api/external/triggers.html#post--#account_id-triggers
    create: function (details, callback) {
      client.request({verb: 'POST', url: 'triggers'}, {body: details}, callback);
    },

    withID: function (id) {
      return {
        // http://api.myemma.com/api/external/triggers.html#get--#account_id-triggers-#trigger_id
        details: function (callback) {
          client.request({verb: 'GET', url: 'triggers/' + id}, {}, callback);
        },

        // http://api.myemma.com/api/external/triggers.html#put--#account_id-triggers-#trigger_id
        update: function (details, callback) {
          client.request({verb: 'PUT', url: 'triggers/' + id}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/triggers.html#delete--#account_id-triggers-#trigger_id
        delete: function (callback) {
          client.request({verb: 'DELETE', url: 'triggers/' + id}, {}, callback);
        },

        // http://api.myemma.com/api/external/triggers.html#get--#account_id-triggers-#trigger_id-mailings
        mailings: function (callback) {
          client.request({verb: 'GET', url: 'triggers/' + id + '/mailings'}, {}, callback);
        }
      };
    }
  };
};
