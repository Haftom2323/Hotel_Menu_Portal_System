// export let session = {};
let session_User = {};
exports.set = user => {
  session_User = user;

  console.log("session is from session.js", session_User);
};

exports.user = callback => {
  callback(session_User);
};
