module.exports = function (client) {
  return {
    // http://api.myemma.com/api/external/fields.html#get--#account_id-fields
    list: function () {
      var callback, query = {};
      if (arguments.length >= 2) {
        callback = arguments[1];
        query = arguments[0];
      }
      else {
        callback = arguments[0];
      }

      client.request({verb: 'GET', url: 'fields'}, {query: query}, callback);
    },

    // http://api.myemma.com/api/external/fields.html#post--#account_id-fields
    create: function (details, callback) {
      client.request({verb: 'POST', url: 'fields'}, {body: details}, callback);
    },

    withID: function (id) {
      return {
        // http://api.myemma.com/api/external/fields.html#get--#account_id-fields-#field_id
        details: function () {
          var callback, query = {};
          if (arguments.length >= 2) {
            callback = arguments[1];
            query = arguments[0];
          }
          else {
            callback = arguments[0];
          }

          client.request({verb: 'GET', url: 'fields/' + id}, {query: query}, callback);
        },

        // http://api.myemma.com/api/external/fields.html#delete--#account_id-fields-#field_id
        delete: function (callback) {
          client.request({verb: 'DELETE', url: 'fields/' + id}, {}, callback);
        },

        // http://api.myemma.com/api/external/fields.html#post--#account_id-fields-#field_id-clear
        clear: function (callback) {
          client.request({verb: 'POST', url: 'fields/' + id + '/clear'}, {}, callback);
        },

        // http://api.myemma.com/api/external/fields.html#put--#account_id-fields-#field_id
        update: function (details, callback) {
          client.request({verb: 'PUT', url: 'fields/' + id}, {body: details}, callback);
        },
      };
    }
  };
};
