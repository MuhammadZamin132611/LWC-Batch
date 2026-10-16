({
  handleChanged: function (cmp, message, helper) {
    // Read the message argument to get the values in the message payload
    if (message != null && message.getParam("record") != null) {
      let record = message.getParam("record")
      cmp.set("v.recordValue", JSON.stringify(record, null, 2));
    }
  },
});