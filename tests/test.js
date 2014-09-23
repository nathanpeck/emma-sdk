var expect = require('chai').expect;

var Emma = require('../lib/emma.js');

var emma;

describe('Instantiating an Emma client', function () {
  it('should be successful', function () {
    emma = new Emma({
      publicKey: "bc4d4a8a30a2e339a735",
      privateKey: "dc91f5b20042fe5e7e34",
      accountID: 1741758
    });
  });
});

describe.skip('Fields', function () {
  it('should list fields', function (done) {
    emma.field.list(function (err, response) {
      expect(err).to.equal(null);
      expect(response).to.be.an('array');
      done();
    });
  });

  var createdFieldID;

  it('should create field', function (done) {
    emma.field.create(
      {
        shortcut_name: 'testField' + Date.now(),
        display_name: 'Test Field',
        field_type: 'text',
        widget_type: 'text',
        column_order: 99
      },
      function (err, fieldID) {
        expect(err).to.equal(null);
        createdFieldID = fieldID;
        done();
      }
    );
  });

  it('should return details of field', function (done) {
    emma.field.withID(createdFieldID).details(
      function (err, response) {
        expect(err).to.equal(null);
        expect(response).to.be.an('object');
        done();
      }
    );
  });

  it('should clear data for field', function (done) {
    emma.field.withID(createdFieldID).clear(
      function (err, response) {
        expect(err).to.equal(null);
        expect(response).to.equal(true);
        done();
      }
    );
  });

  it('should update field', function (done) {
    emma.field.withID(createdFieldID).update(
      {
        display_name: 'Test Field Updated'
      },
      function (err, response) {
        expect(err).to.equal(null);
        expect(response).to.equal(createdFieldID);
        done();
      }
    );
  });

  it('should delete field', function (done) {
    emma.field.withID(createdFieldID).delete(
      function (err, response) {
        expect(err).to.equal(null);
        expect(response).to.equal(true);
        done();
      }
    );
  });
});

describe.skip('Groups', function () {
  it('should list groups', function (done) {
    emma.group.list(function (err, response) {
      expect(err).to.equal(null);
      expect(response).to.be.an('array');
      done();
    });
  });

  var newGroupID;

  it('should create group', function (done) {
    emma.group.create(
      {
        groups: [
          {
            group_name: "Foo Bar"
          }
        ]
      },
      function (err, response) {
        expect(err).to.equal(null);
        expect(response).to.be.an('array');
        expect(response[0]).to.be.an('object');
        expect(response[0]).to.have.property('member_group_id');
        newGroupID = response[0].member_group_id;
        done();
      }
    );
  });

  it('should get details of group', function (done) {
    emma.group.withID(newGroupID).details(function (err, response) {
      expect(err).to.equal(null);
      expect(response).to.be.an('object');
      done();
    });
  });

  it('should update group', function (done) {
    emma.group.withID(newGroupID).update(
      {
        group_name: 'Foo Bar Updated'
      },
      function (err, response) {
        expect(err).to.equal(null);
        expect(response).to.equal(true);
        done();
      }
    );
  });

  it('should delete group', function (done) {
    emma.group.withID(newGroupID).delete(
      function (err, response) {
        expect(err).to.equal(null);
        expect(response).to.equal(true);
        done();
      }
    );
  });
});

describe('Members', function () {

});
