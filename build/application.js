// Generated by CoffeeScript 1.6.1
(function() {
  'use-strict';
  var initialize_extension,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.InfoView = (function(_super) {

    __extends(InfoView, _super);

    function InfoView() {
      return InfoView.__super__.constructor.apply(this, arguments);
    }

    InfoView.prototype.render = function(message) {
      this.$el.html(HAML["info_view"]({
        "info": message
      }));
      return this;
    };

    return InfoView;

  })(Backbone.View);

  window.loadRelaters = function(user_id) {
    var contacts_view, relater_collection;
    contacts_view = new RelatersViewContainer();
    $(".container").html(contacts_view.render().$el);
    relater_collection = chrome.extension.getBackgroundPage().relater_collection;
    window.relater_collection_view = new RelatersCollectionView({
      "collection": relater_collection
    });
    if (relater_collection.models.length > 0) {
      return $("#contacts_container").html(window.relater_collection_view.render().el);
    } else {
      return $("#contacts_container").html(new InfoView().render("You have no contacts!").$el);
    }
  };

  initialize_extension = function() {
    var logged_in_user, sign_up_view;
    logged_in_user = chrome.extension.getBackgroundPage().logged_in_user;
    chrome.extension.getBackgroundPage().popup_window_opened = true;
    if (logged_in_user === null || logged_in_user.id === null) {
      sign_up_view = new SignupView(loadRelaters);
      return $(".container").html(sign_up_view.render().$el);
    } else {
      return window.loadRelaters(logged_in_user.id);
    }
  };

  document.addEventListener("DOMContentLoaded", initialize_extension);

}).call(this);
