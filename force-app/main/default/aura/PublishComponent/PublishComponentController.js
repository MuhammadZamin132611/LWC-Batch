({
  handleClick: function (cmp, event, helper) {
    let message = {
      recordName: 'Salesforce.com Aura',
      recordId: '887564 Aura',
      record: {
        recordName: 'Salesforce.com Aura',
        recordId: '887564 Aura',
      }
    };

    cmp.find("sampleMessageChannel").publish(message);
  },
});