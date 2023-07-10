"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Album = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Album = /*#__PURE__*/function () {
  //properties

  //initialize properties
  function Album(id, title, artist, description, year, image, tracks) {
    (0, _classCallCheck2.default)(this, Album);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "artist", "");
    (0, _defineProperty2.default)(this, "description", "");
    (0, _defineProperty2.default)(this, "year", -1);
    (0, _defineProperty2.default)(this, "image", "");
    (0, _defineProperty2.default)(this, "tracks", []);
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.year = year;
    this.image = image;
    this.tracks = tracks;
  }

  //getters and setters
  (0, _createClass2.default)(Album, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Title",
    get: function get() {
      return this.title;
    },
    set: function set(title) {
      this.title = title;
    }
  }, {
    key: "Artist",
    get: function get() {
      return this.artist;
    },
    set: function set(artist) {
      this.artist = artist;
    }
  }, {
    key: "Description",
    get: function get() {
      return this.description;
    },
    set: function set(description) {
      this.description = description;
    }
  }, {
    key: "Year",
    get: function get() {
      return this.year;
    },
    set: function set(year) {
      this.year = year;
    }
  }, {
    key: "Image",
    get: function get() {
      return this.image;
    },
    set: function set(image) {
      this.image = image;
    }
  }, {
    key: "Tracks",
    get: function get() {
      return this.tracks;
    },
    set: function set(tracks) {
      this.tracks = tracks;
    }
  }]);
  return Album;
}();
exports.Album = Album;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbGJ1bSIsImlkIiwidGl0bGUiLCJhcnRpc3QiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJpbWFnZSIsInRyYWNrcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJkZWZhdWx0IiwiX2RlZmluZVByb3BlcnR5MiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJnZXQiLCJzZXQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL21vZGVscy9BbGJ1bS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL1RyYWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWxidW1cclxue1xyXG4gICAgLy9wcm9wZXJ0aWVzXHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGFydGlzdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgZGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHllYXI6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBpbWFnZTogc3RyaW5nID1cIlwiXHJcbiAgICBwcml2YXRlIHRyYWNrczogVHJhY2tbXSA9IFtdO1xyXG5cclxuICAgIC8vaW5pdGlhbGl6ZSBwcm9wZXJ0aWVzXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBhcnRpc3Q6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgeWVhcjogbnVtYmVyLCBpbWFnZTogc3RyaW5nLCB0cmFja3M6IFRyYWNrW10pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmFydGlzdCA9IGFydGlzdDtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2VcclxuICAgICAgICB0aGlzLnRyYWNrcyA9IHRyYWNrcztcclxuICAgIH1cclxuXHJcbiAgICAvL2dldHRlcnMgYW5kIHNldHRlcnNcclxuICAgIGdldCBJZCgpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgc2V0IElkKGlkOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUaXRsZSgpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0IFRpdGxlKHRpdGxlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBBcnRpc3QoKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnRpc3Q7XHJcbiAgICB9XHJcbiAgICBzZXQgQXJ0aXN0KGFydGlzdDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEZXNjcmlwdGlvbigpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBZZWFyKCk6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueWVhcjtcclxuICAgIH1cclxuICAgIHNldCBZZWFyKHllYXI6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgfVxyXG4gICAgZ2V0IEltYWdlKCk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XHJcbiAgICB9XHJcbiAgICBzZXQgSW1hZ2UoaW1hZ2U6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFRyYWNrcygpOlRyYWNrW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFja3M7XHJcbiAgICB9XHJcbiAgICBzZXQgVHJhY2tzKHRyYWNrczogVHJhY2tbXSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyYWNrcyA9IHRyYWNrcztcclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVhQSxLQUFLO0VBRWQ7O0VBU0E7RUFDQSxTQUFBQSxNQUFZQyxFQUFVLEVBQUVDLEtBQWEsRUFBRUMsTUFBYyxFQUFFQyxXQUFtQixFQUFFQyxJQUFZLEVBQUVDLEtBQWEsRUFBRUMsTUFBZSxFQUN4SDtJQUFBLElBQUFDLGdCQUFBLENBQUFDLE9BQUEsUUFBQVQsS0FBQTtJQUFBLElBQUFVLGdCQUFBLENBQUFELE9BQUEsY0FWcUIsQ0FBQyxDQUFDO0lBQUEsSUFBQUMsZ0JBQUEsQ0FBQUQsT0FBQSxpQkFDQyxFQUFFO0lBQUEsSUFBQUMsZ0JBQUEsQ0FBQUQsT0FBQSxrQkFDRCxFQUFFO0lBQUEsSUFBQUMsZ0JBQUEsQ0FBQUQsT0FBQSx1QkFDRyxFQUFFO0lBQUEsSUFBQUMsZ0JBQUEsQ0FBQUQsT0FBQSxnQkFDVCxDQUFDLENBQUM7SUFBQSxJQUFBQyxnQkFBQSxDQUFBRCxPQUFBLGlCQUNGLEVBQUU7SUFBQSxJQUFBQyxnQkFBQSxDQUFBRCxPQUFBLGtCQUNDLEVBQUU7SUFLeEIsSUFBSSxDQUFDUixFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN4Qjs7RUFFQTtFQUFBLElBQUFJLGFBQUEsQ0FBQUYsT0FBQSxFQUFBVCxLQUFBO0lBQUFZLEdBQUE7SUFBQUMsR0FBQSxFQUNBLFNBQUFBLElBQUEsRUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDWixFQUFFO0lBQ2xCLENBQUM7SUFBQWEsR0FBQSxFQUNELFNBQUFBLElBQU9iLEVBQVUsRUFDakI7TUFDSSxJQUFJLENBQUNBLEVBQUUsR0FBR0EsRUFBRTtJQUNoQjtFQUFDO0lBQUFXLEdBQUE7SUFBQUMsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDWCxLQUFLO0lBQ3JCLENBQUM7SUFBQVksR0FBQSxFQUNELFNBQUFBLElBQVVaLEtBQWEsRUFDdkI7TUFDSSxJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztJQUN0QjtFQUFDO0lBQUFVLEdBQUE7SUFBQUMsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDVixNQUFNO0lBQ3RCLENBQUM7SUFBQVcsR0FBQSxFQUNELFNBQUFBLElBQVdYLE1BQWMsRUFDekI7TUFDSSxJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN4QjtFQUFDO0lBQUFTLEdBQUE7SUFBQUMsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDVCxXQUFXO0lBQzNCLENBQUM7SUFBQVUsR0FBQSxFQUNELFNBQUFBLElBQWdCVixXQUFtQixFQUNuQztNQUNJLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQ2xDO0VBQUM7SUFBQVEsR0FBQTtJQUFBQyxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNSLElBQUk7SUFDcEIsQ0FBQztJQUFBUyxHQUFBLEVBQ0QsU0FBQUEsSUFBU1QsSUFBWSxFQUNyQjtNQUNJLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJO0lBQ3BCO0VBQUM7SUFBQU8sR0FBQTtJQUFBQyxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNQLEtBQUs7SUFDckIsQ0FBQztJQUFBUSxHQUFBLEVBQ0QsU0FBQUEsSUFBVVIsS0FBYSxFQUN2QjtNQUNJLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ3RCO0VBQUM7SUFBQU0sR0FBQTtJQUFBQyxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNOLE1BQU07SUFDdEIsQ0FBQztJQUFBTyxHQUFBLEVBQ0QsU0FBQUEsSUFBV1AsTUFBZSxFQUMxQjtNQUNJLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3hCO0VBQUM7RUFBQSxPQUFBUCxLQUFBO0FBQUE7QUFBQWUsT0FBQSxDQUFBZixLQUFBLEdBQUFBLEtBQUEifQ==