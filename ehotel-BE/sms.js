const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "97028512",
  apiSecret: "elJk1AqaergYKEy8"
});

const from = "+251989845176";
const to = "+251989845176";
const text = "Hello from Nexmo";

nexmo.message.sendSms(
  from,
  to,
  text,
  {
    type: "unicode"
  },
  (err, res) => {
    if (err) {
      console.log(" SMS sent");
      console.log(err);
    } else {
      console.log("succed", res);
    }
  }
);
