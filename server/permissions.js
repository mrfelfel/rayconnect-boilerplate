/**
 * List of permissions
 * add permissions to this array in rayconnect scope :)
 */
module.exports = [
  {
    mode: "add",
    uid: "guest",
    address: "messages/subscribe",
    method: "SUBSCRIBE",
    scope: "messages",
  },
];
