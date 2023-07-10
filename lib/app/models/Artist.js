"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Artist = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Artist = /*#__PURE__*/function () {
  //properties

  //constructor to initialize constructor
  function Artist(id, name) {
    (0, _classCallCheck2.default)(this, Artist);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "name", "");
    this.id = id;
    this.name = name;
  }

  //getters and setters to access properties
  (0, _createClass2.default)(Artist, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }]);
  return Artist;
}();
exports.Artist = Artist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcnRpc3QiLCJpZCIsIm5hbWUiLCJfY2xhc3NDYWxsQ2hlY2syIiwiZGVmYXVsdCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwiZ2V0Iiwic2V0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvQXJ0aXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcnRpc3Rcclxue1xyXG4gICAgLy9wcm9wZXJ0aWVzXHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAvL2NvbnN0cnVjdG9yIHRvIGluaXRpYWxpemUgY29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9nZXR0ZXJzIGFuZCBzZXR0ZXJzIHRvIGFjY2VzcyBwcm9wZXJ0aWVzXHJcbiAgICBnZXQgSWQoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiAgdGhpcy5pZDtcclxuICAgIH1cclxuICAgIHNldCBJZChpZDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTmFtZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBOYW1lKG5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWFBLE1BQU07RUFFZjs7RUFJQTtFQUNBLFNBQUFBLE9BQVlDLEVBQVUsRUFBRUMsSUFBWSxFQUNwQztJQUFBLElBQUFDLGdCQUFBLENBQUFDLE9BQUEsUUFBQUosTUFBQTtJQUFBLElBQUFLLGdCQUFBLENBQUFELE9BQUEsY0FMcUIsQ0FBQyxDQUFDO0lBQUEsSUFBQUMsZ0JBQUEsQ0FBQUQsT0FBQSxnQkFDQSxFQUFFO0lBS3JCLElBQUksQ0FBQ0gsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7RUFDcEI7O0VBRUE7RUFBQSxJQUFBSSxhQUFBLENBQUFGLE9BQUEsRUFBQUosTUFBQTtJQUFBTyxHQUFBO0lBQUFDLEdBQUEsRUFDQSxTQUFBQSxJQUFBLEVBQ0E7TUFDRSxPQUFRLElBQUksQ0FBQ1AsRUFBRTtJQUNqQixDQUFDO0lBQUFRLEdBQUEsRUFDRCxTQUFBQSxJQUFPUixFQUFVLEVBQ2pCO01BQ0ksSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDaEI7RUFBQztJQUFBTSxHQUFBO0lBQUFDLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQ0E7TUFDSSxPQUFPLElBQUksQ0FBQ04sSUFBSTtJQUNwQixDQUFDO0lBQUFPLEdBQUEsRUFFRCxTQUFBQSxJQUFTUCxJQUFZLEVBQ3JCO01BQ0ksSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFDcEI7RUFBQztFQUFBLE9BQUFGLE1BQUE7QUFBQTtBQUFBVSxPQUFBLENBQUFWLE1BQUEsR0FBQUEsTUFBQSJ9