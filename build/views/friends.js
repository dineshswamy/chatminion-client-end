// Generated by CoffeeScript 1.6.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.FriendsCollectionView = (function(_super) {

    __extends(FriendsCollectionView, _super);

    function FriendsCollectionView() {
      return FriendsCollectionView.__super__.constructor.apply(this, arguments);
    }

    FriendsCollectionView.prototype.tagName = 'ul';

    FriendsCollectionView.prototype.className = 'friends_contacts_container';

    FriendsCollectionView.prototype.render = function() {
      var _this = this;
      this.collection.each(function(model) {
        var new_friend;
        new_friend = new FriendView({
          "model": model
        });
        return _this.$el.append(new_friend.render().$el);
      });
      return this;
    };

    return FriendsCollectionView;

  })(Backbone.View);

}).call(this);
