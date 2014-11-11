var request = require('superagent');

var Startalk = (function() {
  var botUrl = 'https://startalk-api.trifort.jp/Outer/msg';

  var Startalk = function(roomId, uuid) {
    this.roomId = roomId;
    this.uuid   = uuid;
  };

  Startalk.prototype.post = function(text, callback) {
    var self = this;

    request
      .post(botUrl)
      .send({
        chat_room_id: self.roomId,
        chat_text:    text,
      })
      .set('outer_app_uuid', self.uuid)
      .end(callback);
  };

  return Startalk;
})();

module.exports = Startalk;
