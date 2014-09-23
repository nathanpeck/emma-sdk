module.exports = function (client) {
  return {
    // http://api.myemma.com/api/external/searches.html#get--#account_id-searches
    list: function () {
      var callback, query = {};
      if (arguments.length >= 2) {
        callback = arguments[1];
        query = arguments[0];
      }
      else {
        callback = arguments[0];
      }

      client.request({verb: 'GET', url: 'searches'}, {query: query}, callback);
    },

    // http://api.myemma.com/api/external/searches.html#post--#account_id-searches
    create: function (details, callback) {
      client.request({verb: 'POST', url: 'searches'}, {body: details}, callback);
    },

    withID: function (id) {
      return {
        // http://api.myemma.com/api/external/searches.html#get--#account_id-searches-#search_id
        details: function () {
          var callback, query = {};
          if (arguments.length >= 2) {
            callback = arguments[1];
            query = arguments[0];
          }
          else {
            callback = arguments[0];
          }

          client.request({verb: 'GET', url: 'searches/' + id}, {query: query}, callback);
        },

        // http://api.myemma.com/api/external/searches.html#put--#account_id-searches-#search_id
        update: function (details, callback) {
          client.request({verb: 'PUT', url: 'searches/' + id}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/searches.html#get--#account_id-searches-#search_id-members
        members: function (callback) {
          client.request({verb: 'GET', url: 'searches/' + id + '/members'}, {}, callback);
        },

        // http://api.myemma.com/api/external/searches.html#delete--#account_id-searches-#search_id
        delete: function (callback) {
          client.request({verb: 'DELETE', url: 'searches/' + id}, {}, callback);
        }
      };
    }
  };
};
