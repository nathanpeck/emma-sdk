# emma-sdk

Node.js wrapper for the [Emma](http://myemma.com/) API.

## Usage

```js
var Emma = require('emma-sdk');

var emma = new Emma({
  publicKey: "your public key",
  privateKey: "private key",
  accountID: 1234567
});
```

You will need to generate your own API access tokens using the settings panel within Emma.

## To Do

* Enhance documentation with extra details and links to the official Emma API documentation
* Add more tests.

## Supported Methods

### Fields

* emma.field.list([params], callback);
* emma.field.create(details, callback);
* emma.field.withID(id).details([params], callback);
* emma.field.withID(id).delete(callback);
* emma.field.withID(id).clear(callback);
* emma.field.withID(id).update(details, callback);

### Groups

* emma.group.list([params], callback);
* emma.group.create(details, callback);
* emma.group.withID(id).details(callback);
* emma.group.withID(id).delete(callback);
* emma.group.withID(id).members(details, callback);
* emma.group.withID(id).addMembers(details, callback);
* emma.group.withID(id).removeMembers(details, callback);
* emma.group.withID(id).emptySync(details, callback);
* emma.group.withID(id).empty(details, callback);
* emma.group.withID(id).copyAllMembersTo(groupID, callback);
* emma.group.withID(id).addMembersByStatus(details, callback);
* emma.group.withID(id).update(details, callback);

### Imports

* emma.import.list(callback);
* emma.import.withID(id).details(callback);
* emma.import.withID(id).listMembers(callback);

### Mailings

* emma.mailing.list([params], callback);
* emma.mailing.create(details, callback);
* emma.mailing.validate(details, callback);
* emma.mailing.withID(id).details(callback);
* emma.mailing.withID(id).resend(details, callback);
* emma.mailing.withID(id).update(details, callback);
* emma.mailing.withID(id).members(callback);
* emma.mailing.withID(id).delete(callback);
* emma.mailing.withID(id).cancel(callback);
* emma.mailing.withID(id).getMessageToMember(id).all(callback);
* emma.mailing.withID(id).getMessageToMember(id).html(callback);
* emma.mailing.withID(id).getMessageToMember(id).plaintext(callback);
* emma.mailing.withID(id).getMessageToMember(id).subject(callback);
* emma.mailing.withID(id).forwardToMembers(memberID, details, callback);
* emma.mailing.withID(id).groups(callback);
* emma.mailing.withID(id).searches(callback);
* emma.mailing.withID(id).headsup(callback);

### Members

* emma.member.list([params], callback);
* emma.member.bulkAdd(details, callback);
* emma.member.addOne(details, callback);
* emma.member.signup(details, callback);
* emma.member.bulkDelete(details, callback);
* emma.member.bulkUpdatingStatus(details, callback);
* emma.member.multiRemoveFromGroups(details, callback);
* emma.member.deleteAll([params], callback);
* emma.member.withID(id).details([params], callback);
* emma.member.withID(id).update(details, callback);
* emma.member.withID(id).getOptOut(callback);
* emma.member.withID(id).getMailings(callback);
* emma.member.withID(id).delete(callback);
* emma.member.withID(id).groups.list(callback);
* emma.member.withID(id).groups.add(details, callback);
* emma.member.withID(id).groups.remove(details, callback);
* emma.member.withID(id).groups.removeAll(callback);
* emma.member.withEmail(email).details([params], callback);
* emma.member.withEmail(email).optOut(callback);
* emma.member.changeStatusFrom(fromStatus).to(toStatus, callback);
* emma.member.changeStatusFrom(fromStatus).to(toStatus).withConditions(details, callback);

### Responses

* emma.response.list([params], callback);
* emma.response.fromMailingID(id).list(callback);
* emma.response.fromMailingID(id).sends(callback);
* emma.response.fromMailingID(id).inProgress(callback);
* emma.response.fromMailingID(id).deliveries(callback);
* emma.response.fromMailingID(id).opens(callback);
* emma.response.fromMailingID(id).links(callback);
* emma.response.fromMailingID(id).clicks(callback);
* emma.response.fromMailingID(id).forwards(callback);
* emma.response.fromMailingID(id).optouts(callback);
* emma.response.fromMailingID(id).signups(callback);
* emma.response.fromMailingID(id).shares(callback);
* emma.response.fromMailingID(id).customerShares(callback);
* emma.response.fromMailingID(id).customerShareClicks(callback);
* emma.response.fromMailingID(id).shareOverview(callback);
* emma.response.share(shareID).details(callback);

### Searches

* emma.search.list(callback);
* emma.search.create(details, callback);
* emma.search.withID(id).details(callback);
* emma.search.withID(id).update(details, callback);
* emma.search.withID(id).members(callback);
* emma.search.withID(id).delete(callback);

### Webhooks

* emma.webhook.list(callback);
* emma.webhook.events(callback);
* emma.webhook.create(details, callback);
* emma.webhook.withID(id).details(callback);
* emma.webhook.withID(id).update(details, callback);
* emma.webhook.withID(id).delete(callback);
* emma.webhook.deleteAll(callback);

### Triggers

* emma.trigger.list(callback);
* emma.trigger.create(details, callback);
* emma.trigger.withID(id).details(callback);
* emma.trigger.withID(id).update(details, callback);
* emma.trigger.withID(id).delete(callback);
* emma.trigger.withID(id).mailings(callback);

