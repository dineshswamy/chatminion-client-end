// Generated by CoffeeScript 1.6.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.MessagesViewContainer = (function(_super) {

    __extends(MessagesViewContainer, _super);

    function MessagesViewContainer() {
      return MessagesViewContainer.__super__.constructor.apply(this, arguments);
    }

    MessagesViewContainer.prototype.events = {
      "click button#submit_custom_message": "send_message"
    };

    MessagesViewContainer.prototype.render = function() {
      this.$el.html(HAML["messages_container_view"]);
      return this;
    };

    MessagesViewContainer.prototype.send_message = function(event) {
      var custom_message;
      event.preventDefault();
      custom_message = $("#custom_message").val();
      if (custom_message.length > 0) {
        console.log(custom_message);
        chrome.extension.getBackgroundPage().is_custom_message = true;
        chrome.extension.getBackgroundPage().custom_message = custom_message;
        chrome.extension.getBackgroundPage().sendMessage();
        return window.close();
      }
    };

    return MessagesViewContainer;

  })(Backbone.View);

}).call(this);
