// Generated by CoffeeScript 1.6.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.ThreadsCollectionView = (function(_super) {

    __extends(ThreadsCollectionView, _super);

    function ThreadsCollectionView() {
      return ThreadsCollectionView.__super__.constructor.apply(this, arguments);
    }

    ThreadsCollectionView.prototype.tagName = "div";

    ThreadsCollectionView.prototype.className = "list-group";

    ThreadsCollectionView.prototype.initialize = function(attributes) {
      if (attributes !== null || attributes !== void 0) {
        return this.collection = attributes.collection;
      }
    };

    ThreadsCollectionView.prototype.render = function() {
      var message, _i, _len, _ref;
      console.log("Collection");
      console.log(this.collection);
      _ref = this.collection;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        message = _ref[_i];
        this.$el.append("<li>" + message + "</li>");
      }
      return this;
    };

    return ThreadsCollectionView;

  })(Backbone.Collection);

}).call(this);
