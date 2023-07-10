"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Track = /*#__PURE__*/function () {
  //define properties

  //constructor to initialize all properties
  function Track(id, number, title, lyrics) {
    (0, _classCallCheck2.default)(this, Track);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "number", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "lyrics", "");
    this.id = id;
    this.number = number;
    this.title = title;
    this.lyrics = lyrics;
  }

  //getters and setters to access properties 
  (0, _createClass2.default)(Track, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Number",
    get: function get() {
      return this.number;
    },
    set: function set(number) {
      this.number = number;
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
    key: "Lyrics",
    get: function get() {
      return this.lyrics;
    },
    set: function set(lyrics) {
      this.lyrics = lyrics;
    }
  }]);
  return Track;
}();
exports.Track = Track;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFjayIsImlkIiwibnVtYmVyIiwidGl0bGUiLCJseXJpY3MiLCJfY2xhc3NDYWxsQ2hlY2syIiwiZGVmYXVsdCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwiZ2V0Iiwic2V0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvVHJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRyYWNrXHJcbntcclxuICAgIC8vZGVmaW5lIHByb3BlcnRpZXNcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBudW1iZXI6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgbHlyaWNzOiBzdHJpbmcgPSBcIlwiXHJcblxyXG4gICAgLy9jb25zdHJ1Y3RvciB0byBpbml0aWFsaXplIGFsbCBwcm9wZXJ0aWVzXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBudW1iZXI6IG51bWJlciwgdGl0bGU6IHN0cmluZywgbHlyaWNzOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmx5cmljcyA9IGx5cmljc1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0dGVycyBhbmQgc2V0dGVycyB0byBhY2Nlc3MgcHJvcGVydGllcyBcclxuICAgIGdldCBJZCgpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgc2V0IElkKGlkOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBOdW1iZXIoKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgTnVtYmVyKG51bWJlcjogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUaXRsZSgpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0IFRpdGxlKHRpdGxlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMeXJpY3MoKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5seXJpY3M7XHJcbiAgICB9XHJcbiAgICBzZXQgTHlyaWNzKGx5cmljczogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubHlyaWNzID0gbHlyaWNzO1xyXG4gICAgfVxyXG5cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFhQSxLQUFLO0VBRWQ7O0VBTUE7RUFDQSxTQUFBQSxNQUFZQyxFQUFVLEVBQUVDLE1BQWMsRUFBRUMsS0FBYSxFQUFFQyxNQUFjLEVBQ3JFO0lBQUEsSUFBQUMsZ0JBQUEsQ0FBQUMsT0FBQSxRQUFBTixLQUFBO0lBQUEsSUFBQU8sZ0JBQUEsQ0FBQUQsT0FBQSxjQVBxQixDQUFDLENBQUM7SUFBQSxJQUFBQyxnQkFBQSxDQUFBRCxPQUFBLGtCQUNFLENBQUMsQ0FBQztJQUFBLElBQUFDLGdCQUFBLENBQUFELE9BQUEsaUJBQ0gsRUFBRTtJQUFBLElBQUFDLGdCQUFBLENBQUFELE9BQUEsa0JBQ0QsRUFBRTtJQUt2QixJQUFJLENBQUNMLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3hCOztFQUVBO0VBQUEsSUFBQUksYUFBQSxDQUFBRixPQUFBLEVBQUFOLEtBQUE7SUFBQVMsR0FBQTtJQUFBQyxHQUFBLEVBQ0EsU0FBQUEsSUFBQSxFQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNULEVBQUU7SUFDbEIsQ0FBQztJQUFBVSxHQUFBLEVBQ0QsU0FBQUEsSUFBT1YsRUFBVSxFQUNqQjtNQUNJLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBQ2hCO0VBQUM7SUFBQVEsR0FBQTtJQUFBQyxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNSLE1BQU07SUFDdEIsQ0FBQztJQUFBUyxHQUFBLEVBQ0QsU0FBQUEsSUFBV1QsTUFBYyxFQUN6QjtNQUNJLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3hCO0VBQUM7SUFBQU8sR0FBQTtJQUFBQyxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNQLEtBQUs7SUFDckIsQ0FBQztJQUFBUSxHQUFBLEVBQ0QsU0FBQUEsSUFBVVIsS0FBYSxFQUN2QjtNQUNJLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ3RCO0VBQUM7SUFBQU0sR0FBQTtJQUFBQyxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNOLE1BQU07SUFDdEIsQ0FBQztJQUFBTyxHQUFBLEVBQ0QsU0FBQUEsSUFBV1AsTUFBYyxFQUN6QjtNQUNJLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3hCO0VBQUM7RUFBQSxPQUFBSixLQUFBO0FBQUE7QUFBQVksT0FBQSxDQUFBWixLQUFBLEdBQUFBLEtBQUEifQ==