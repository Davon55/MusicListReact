"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MusicDAO = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Artist = require("../models/Artist");
var _Album = require("../models/Album");
var _Track = require("../models/Track");
var mysql = _interopRequireWildcard(require("mysql"));
var util = _interopRequireWildcard(require("util"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var MusicDAO = /*#__PURE__*/function () {
  /**
   * non-default constructor
   * @param host Database Hostname
   * @param username Database Username
   * @param password Database password 
   */

  function MusicDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, MusicDAO);
    (0, _defineProperty2.default)(this, "host", "localhost");
    (0, _defineProperty2.default)(this, "username", "root");
    (0, _defineProperty2.default)(this, "port", 3306);
    (0, _defineProperty2.default)(this, "password", "root");
    (0, _defineProperty2.default)(this, "schema", "music");
    (0, _defineProperty2.default)(this, "pool", this.initDbConnection());
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = this.initDbConnection();
  }

  // create a connection pool 
  (0, _createClass2.default)(MusicDAO, [{
    key: "initDbConnection",
    value: function initDbConnection() {
      return mysql.createPool({
        host: this.host,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.schema,
        connectionLimit: 10
      });
    }

    /**
    *CRUD method to return all Artists
    *
    * 
    * @param callback callback function with an Array of type artist
    */
  }, {
    key: "findArtists",
    value: function findArtists(callback) {
      //List of Artist to return
      var artists = [];

      //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var result1, x;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!err) {
                  _context.next = 2;
                  break;
                }
                throw err;
              case 2:
                //function (err: any, rows: any, fields:any
                connection.query = util.promisify(connection.query);
                _context.next = 5;
                return connection.query('SELECT distinct ARTIST FROM album');
              case 5:
                result1 = _context.sent;
                if (!err) {
                  _context.next = 8;
                  break;
                }
                throw err;
              case 8:
                //Loop over result set and save the Artist Name in the List of Artists
                for (x = 0; x < result1.length; ++x) {
                  artists.push(new _Artist.Artist(x, result1[x].ARTIST));
                }

                //Do a callback to return the results
                callback(artists);
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
    *CRUD method to return an album
    *
    * 
    */
  }, {
    key: "findAlbums",
    value: function findAlbums(artist, callback) {
      //return an album
      var albums = [];
      //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!err) {
                  _context2.next = 2;
                  break;
                }
                throw err;
              case 2:
                //user promisfy util to make an async function and run the query to get all albums for a specific artist
                connection.query = util.promisify(connection.query);
                _context2.next = 5;
                return connection.query('SELECT * FROM ALBUM WHERE ARTIST=?', [artist]);
              case 5:
                result1 = _context2.sent;
                x = 0;
              case 7:
                if (!(x < result1.length)) {
                  _context2.next = 19;
                  break;
                }
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                albumId = result1[x].ID;
                tracks = [];
                _context2.next = 12;
                return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
              case 12:
                result2 = _context2.sent;
                console.log(result2);
                for (y = 0; y < result2.length; ++y) {
                  tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
                albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
              case 16:
                ++x;
                _context2.next = 7;
                break;
              case 19:
                //callback to return the albums
                callback(albums);
              case 20:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    //CRUD method to find all albums
  }, {
    key: "findAllAlbums",
    value: function findAllAlbums(callback) {
      //return an album
      var albums = [];
      //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!err) {
                  _context3.next = 2;
                  break;
                }
                throw err;
              case 2:
                //user promisfy util to make an async function and run the query to get all albums for a specific artist
                connection.query = util.promisify(connection.query);
                _context3.next = 5;
                return connection.query('SELECT * FROM ALBUM');
              case 5:
                result1 = _context3.sent;
                x = 0;
              case 7:
                if (!(x < result1.length)) {
                  _context3.next = 18;
                  break;
                }
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                albumId = result1[x].ID;
                tracks = [];
                _context3.next = 12;
                return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
              case 12:
                result2 = _context3.sent;
                for (y = 0; y < result2.length; ++y) {
                  tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
                albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
              case 15:
                ++x;
                _context3.next = 7;
                break;
              case 18:
                //callback
                callback(albums);
              case 19:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
    //CRUD method to find album by ID
  }, {
    key: "findAlbumById",
    value: function findAlbumById(albumId, callback) {
      //return an album
      var albums = [];
      //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, connection) {
          var result1, x, _albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!err) {
                  _context4.next = 2;
                  break;
                }
                throw err;
              case 2:
                //user promisfy util to make an async function and run the query to get all albums for a specific artist
                connection.query = util.promisify(connection.query);
                _context4.next = 5;
                return connection.query('SELECT * FROM ALBUM WHERE ID=?', [albumId]);
              case 5:
                result1 = _context4.sent;
                x = 0;
              case 7:
                if (!(x < result1.length)) {
                  _context4.next = 18;
                  break;
                }
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                _albumId = result1[x].ID;
                tracks = [];
                _context4.next = 12;
                return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [_albumId]);
              case 12:
                result2 = _context4.sent;
                for (y = 0; y < result2.length; ++y) {
                  tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
                albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
              case 15:
                ++x;
                _context4.next = 7;
                break;
              case 18:
                //callback
                callback(albums);
              case 19:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    //CRUD method to find album by Artist 
  }, {
    key: "findAlbumByArtist",
    value: function findAlbumByArtist(search, callback) {
      //return an album
      var albums = [];
      //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (!err) {
                  _context5.next = 2;
                  break;
                }
                throw err;
              case 2:
                //user promisfy util to make an async function and run the query to get all albums for a specific artist
                connection.query = util.promisify(connection.query);
                _context5.next = 5;
                return connection.query('SELECT * FROM ALBUM WHERE ARTIST LIKE "%%" ', [search]);
              case 5:
                result1 = _context5.sent;
                x = 0;
              case 7:
                if (!(x < result1.length)) {
                  _context5.next = 18;
                  break;
                }
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                albumId = result1[x].ID;
                tracks = [];
                _context5.next = 12;
                return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
              case 12:
                result2 = _context5.sent;
                for (y = 0; y < result2.length; ++y) {
                  tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
                albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
              case 15:
                ++x;
                _context5.next = 7;
                break;
              case 18:
                callback(albums);
              case 19:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    //CRUD method to find album by Description 
  }, {
    key: "findAlbumByDescription",
    value: function findAlbumByDescription(search, callback) {
      //return an album
      var albums = [];
      //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                if (!err) {
                  _context6.next = 2;
                  break;
                }
                throw err;
              case 2:
                connection.query = util.promisify(connection.query);
                _context6.next = 5;
                return connection.query('SELECT * FROM ALBUM WHERE DESCRIPTION LIKE "%%" ', [search]);
              case 5:
                result1 = _context6.sent;
                x = 0;
              case 7:
                if (!(x < result1.length)) {
                  _context6.next = 18;
                  break;
                }
                //use promisfy util to make an async function and run the query to get all tracks for this Album
                albumId = result1[x].ID;
                tracks = [];
                _context6.next = 12;
                return connection.query('SELECT * FROM TRACK WHERE ALBUM_ID=?', [albumId]);
              case 12:
                result2 = _context6.sent;
                for (y = 0; y < result2.length; ++y) {
                  tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                //Add Album and its tracks to the list
                albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
              case 15:
                ++x;
                _context6.next = 7;
                break;
              case 18:
                //callback
                callback(albums);
              case 19:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
    }

    //CRUD method to create a new album
  }, {
    key: "create",
    value: function create(album, callback) {
      var albums = [];
      //Get a pooled connection to the database, run the query to get all the distinct Artists, and return
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                if (!err) {
                  _context7.next = 2;
                  break;
                }
                throw err;
              case 2:
                //use promisfy util to make an async function and insert Album
                connection.query = util.promisify(connection.query);
                _context7.next = 5;
                return connection.query('INSERT INTO ALBUM (TITLE, ARTIST, YEAR, DESCRIPTION) VALUES(?,?,?,?)', [album.Title, album.Artist, album.Year, album.Description]);
              case 5:
                result1 = _context7.sent;
                x = 0;
              case 7:
                if (!(x < result1.length)) {
                  _context7.next = 19;
                  break;
                }
                if (result1.affectedRows != 1) callback(-1);
                //use promisfy util to make an async function and insert tracks for the Album
                albumId = result1.insertId;
                tracks = [];
                _context7.next = 13;
                return connection.query('INSERT INTO TRACK (ALBUM_ID, TITLE, NUMBER, LYRICS) VALUES(?,?,?,?)', [albumId, album.Tracks[x].Id, album.Tracks[x].Title, album.Tracks[x].Number]);
              case 13:
                result2 = _context7.sent;
                for (y = 0; y < result2.length; ++y) {
                  tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
              case 16:
                ++x;
                _context7.next = 7;
                break;
              case 19:
                callback(albums);
              case 20:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function (_x13, _x14) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    //CRUD method to update the albume
  }, {
    key: "update",
    value: function update(album, callback) {
      var albums = [];
      //Get a pooled connection to the database, run the query to update th album
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(err, connection) {
          var result1, x, albumId, tracks, result2, y;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                if (!err) {
                  _context8.next = 2;
                  break;
                }
                throw err;
              case 2:
                //use promisfy util to make an async function and update an Album
                connection.query = util.promisify(connection.query);
                _context8.next = 5;
                return connection.query("UPDATE ALBUM SET TITLE=?, ARTIST=?, DESCRIPTION=?, YEAR=? WHERE id=?", [album.Title, album.Artist, album.Description, album.Year, album.Id]);
              case 5:
                result1 = _context8.sent;
                x = 0;
              case 7:
                if (!(x < result1.length)) {
                  _context8.next = 19;
                  break;
                }
                if (result1.affectedRows != 1) callback(-1);
                //use promisfy util to make an async function and insert tracks for the Album
                albumId = result1.insertId;
                tracks = [];
                _context8.next = 13;
                return connection.query('UPDATE TRACK SET ALBUM_ID=?, TITLE=?, NUMBER=?, LYRICS=?', [albumId, album.Tracks[x].Title, album.Tracks[x].Number]);
              case 13:
                result2 = _context8.sent;
                for (y = 0; y < album.Tracks.length; ++y) {
                  tracks.push(new _Track.Track(result2[y].ID, result2[y].NUMBER, result2[y].TITLE, result2[y].LYRICS));
                }
                albums.push(new _Album.Album(result1[x].ID, result1[x].TITLE, result1[x].ARTIST, result1[x].DESCRIPTION, result1[x].YEAR, result1[x].IMAGE_NAME, tracks));
              case 16:
                ++x;
                _context8.next = 7;
                break;
              case 19:
                callback(albums);
              case 20:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }));
        return function (_x15, _x16) {
          return _ref8.apply(this, arguments);
        };
      }());
    }
    //CRUD method to delete an album
  }, {
    key: "delete",
    value: function _delete(albumId, callback) {
      //Get a pooled connection to the database, run the query to delete an album
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(err, connection) {
          var result1;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                if (!err) {
                  _context9.next = 2;
                  break;
                }
                throw err;
              case 2:
                //use promisfy util to make an async function to delete an Album
                connection.query = util.promisify(connection.query);
                _context9.next = 5;
                return connection.query('DELETE FROM ALBUM WHERE ID=?', [albumId]);
              case 5:
                result1 = _context9.sent;
                if (result1.affectedRows != 1) callback(-1);
              case 7:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }));
        return function (_x17, _x18) {
          return _ref9.apply(this, arguments);
        };
      }());
      callback(albumId);
    }
  }]);
  return MusicDAO;
}();
exports.MusicDAO = MusicDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfQXJ0aXN0IiwicmVxdWlyZSIsIl9BbGJ1bSIsIl9UcmFjayIsIm15c3FsIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJ1dGlsIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwib2JqIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJkZWZhdWx0IiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiaGFzT3duIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsInJldHVybiIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJNdXNpY0RBTyIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIl9jbGFzc0NhbGxDaGVjazIiLCJfZGVmaW5lUHJvcGVydHkyIiwiaW5pdERiQ29ubmVjdGlvbiIsInBvb2wiLCJfY3JlYXRlQ2xhc3MyIiwiY3JlYXRlUG9vbCIsInVzZXIiLCJkYXRhYmFzZSIsInNjaGVtYSIsImNvbm5lY3Rpb25MaW1pdCIsImZpbmRBcnRpc3RzIiwiY2FsbGJhY2siLCJhcnRpc3RzIiwiZ2V0Q29ubmVjdGlvbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfY2FsbGVlIiwiY29ubmVjdGlvbiIsInJlc3VsdDEiLCJ4IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInF1ZXJ5IiwicHJvbWlzaWZ5IiwiQXJ0aXN0IiwiQVJUSVNUIiwiX3giLCJfeDIiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpbmRBbGJ1bXMiLCJhcnRpc3QiLCJhbGJ1bXMiLCJfcmVmMiIsIl9jYWxsZWUyIiwiYWxidW1JZCIsInRyYWNrcyIsInJlc3VsdDIiLCJ5IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiSUQiLCJjb25zb2xlIiwibG9nIiwiVHJhY2siLCJOVU1CRVIiLCJUSVRMRSIsIkxZUklDUyIsIkFsYnVtIiwiREVTQ1JJUFRJT04iLCJZRUFSIiwiSU1BR0VfTkFNRSIsIl94MyIsIl94NCIsImZpbmRBbGxBbGJ1bXMiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3g1IiwiX3g2IiwiZmluZEFsYnVtQnlJZCIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfYWxidW1JZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl94NyIsIl94OCIsImZpbmRBbGJ1bUJ5QXJ0aXN0Iiwic2VhcmNoIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl94OSIsIl94MTAiLCJmaW5kQWxidW1CeURlc2NyaXB0aW9uIiwiX3JlZjYiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsIl94MTEiLCJfeDEyIiwiYWxidW0iLCJfcmVmNyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiVGl0bGUiLCJZZWFyIiwiRGVzY3JpcHRpb24iLCJhZmZlY3RlZFJvd3MiLCJpbnNlcnRJZCIsIlRyYWNrcyIsIklkIiwiTnVtYmVyIiwiX3gxMyIsIl94MTQiLCJ1cGRhdGUiLCJfcmVmOCIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiX3gxNSIsIl94MTYiLCJfZGVsZXRlIiwiX3JlZjkiLCJfY2FsbGVlOSIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsIl94MTciLCJfeDE4Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2RhdGFiYXNlL011c2ljREFPLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vT2JqZWN0IE1vZGVsIGRlcGVuZGVuY2llc1xyXG5pbXBvcnQge0FydGlzdH0gZnJvbSBcIi4uL21vZGVscy9BcnRpc3RcIjtcclxuaW1wb3J0IHtBbGJ1bX0gZnJvbSBcIi4uL21vZGVscy9BbGJ1bVwiO1xyXG5pbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuLi9tb2RlbHMvVHJhY2tcIjtcclxuXHJcbi8vTXlTUUwgTW9kdWxlIGRlcGVuZGVuY3lcclxuaW1wb3J0ICogYXMgbXlzcWwgZnJvbSBcIm15c3FsXCI7XHJcblxyXG4vL3V0aWwgTW9kdWxlIGRlcGVuZGVuY3kgKGZvciBwcm9taXNmeSlcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE11c2ljREFPXHJcbntcclxuICAgIHByaXZhdGUgaG9zdDogc3RyaW5nID0gXCJsb2NhbGhvc3RcIjtcclxuICAgIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZyA9IFwicm9vdFwiO1xyXG4gICAgcHJpdmF0ZSBwb3J0OiBudW1iZXIgPSAzMzA2O1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nID0gXCJyb290XCI7XHJcbiAgICBwcml2YXRlIHNjaGVtYTogc3RyaW5nID0gXCJtdXNpY1wiO1xyXG4gICAgcHJpdmF0ZSBwb29sID0gdGhpcy5pbml0RGJDb25uZWN0aW9uKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBub24tZGVmYXVsdCBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIGhvc3QgRGF0YWJhc2UgSG9zdG5hbWVcclxuICAgICAqIEBwYXJhbSB1c2VybmFtZSBEYXRhYmFzZSBVc2VybmFtZVxyXG4gICAgICogQHBhcmFtIHBhc3N3b3JkIERhdGFiYXNlIHBhc3N3b3JkIFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdDogc3RyaW5nLCBwb3J0OiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLnBvcnQgPSBwb3J0O1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5wb29sID0gdGhpcy5pbml0RGJDb25uZWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4vLyBjcmVhdGUgYSBjb25uZWN0aW9uIHBvb2wgXHJcbiAgICBwcml2YXRlIGluaXREYkNvbm5lY3Rpb24oKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG15c3FsLmNyZWF0ZVBvb2woe2hvc3Q6IHRoaXMuaG9zdCwgcG9ydDogdGhpcy5wb3J0LCB1c2VyOiB0aGlzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgXHJcbiAgICAgICAgICAgIGRhdGFiYXNlOiB0aGlzLnNjaGVtYSwgY29ubmVjdGlvbkxpbWl0OiAxMH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICpDUlVEIG1ldGhvZCB0byByZXR1cm4gYWxsIEFydGlzdHNcclxuICpcclxuICogXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGFuIEFycmF5IG9mIHR5cGUgYXJ0aXN0XHJcbiAqL1xyXG5cclxuIHB1YmxpYyBmaW5kQXJ0aXN0cyhjYWxsYmFjazogYW55KVxyXG4ge1xyXG4gICAgLy9MaXN0IG9mIEFydGlzdCB0byByZXR1cm5cclxuICAgIGxldCBhcnRpc3RzOkFydGlzdFtdID0gW107XHJcblxyXG4gICAgLy9HZXQgYSBwb29sZWQgY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2UsIHJ1biB0aGUgcXVlcnkgdG8gZ2V0IGFsbCB0aGUgZGlzdGluY3QgQXJ0aXN0cywgYW5kIHJldHVyblxyXG4gICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSlcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICAvL3Rocm93IGFuIGVycm9yIGlmIGFuIGVycm9yXHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnJcclxuLy9mdW5jdGlvbiAoZXJyOiBhbnksIHJvd3M6IGFueSwgZmllbGRzOmFueVxyXG4gICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSAgdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgZGlzdGluY3QgQVJUSVNUIEZST00gYWxidW0nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgIC8vUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXHJcbiAgICAgICAgICAgIC8vIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9UaHJvdyBlcnJvciBpZiBhbiBlcnJvclxyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnJcclxuXHJcbiAgICAgICAgICAgIC8vTG9vcCBvdmVyIHJlc3VsdCBzZXQgYW5kIHNhdmUgdGhlIEFydGlzdCBOYW1lIGluIHRoZSBMaXN0IG9mIEFydGlzdHNcclxuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHJlc3VsdDEubGVuZ3RoOyArK3gpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFydGlzdHMucHVzaChuZXcgQXJ0aXN0KHgsIHJlc3VsdDFbeF0uQVJUSVNUKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcclxuICAgICAgICAgICAgY2FsbGJhY2soYXJ0aXN0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuIH1cclxuICAgIC8qKlxyXG4gKkNSVUQgbWV0aG9kIHRvIHJldHVybiBhbiBhbGJ1bVxyXG4gKlxyXG4gKiBcclxuICovXHJcbiBcclxuICAgIHB1YmxpYyBmaW5kQWxidW1zKGFydGlzdDogc3RyaW5nLCBjYWxsYmFjazogYW55KVxyXG4gICAge1xyXG4gICAgICAgIC8vcmV0dXJuIGFuIGFsYnVtXHJcbiAgICAgICAgbGV0IGFsYnVtczogQWxidW1bXSA9IFtdO1xyXG4gICAgICAgIC8vR2V0IGEgcG9vbGVkIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlLCBydW4gdGhlIHF1ZXJ5IHRvIGdldCBhbGwgdGhlIGRpc3RpbmN0IEFydGlzdHMsIGFuZCByZXR1cm5cclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy90aG93IGFuIGVycm9yIGlmIGFuIGVycm9yXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAvL3VzZXIgcHJvbWlzZnkgdXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gdGhlIHF1ZXJ5IHRvIGdldCBhbGwgYWxidW1zIGZvciBhIHNwZWNpZmljIGFydGlzdFxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gIHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gQUxCVU0gV0hFUkUgQVJUSVNUPT8nLFthcnRpc3RdKVxyXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgcmVzdWx0MS5sZW5ndGg7ICsreClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy91c2UgcHJvbWlzZnkgdXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gdGhlIHF1ZXJ5IHRvIGdldCBhbGwgdHJhY2tzIGZvciB0aGlzIEFsYnVtXHJcbiAgICAgICAgICAgICAgICBsZXQgYWxidW1JZCA9IHJlc3VsdDFbeF0uSURcclxuICAgICAgICAgICAgICAgIGxldCB0cmFja3M6IFRyYWNrW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQyID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBUUkFDSyBXSEVSRSBBTEJVTV9JRD0/JywgW2FsYnVtSWRdKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdDIpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHJlc3VsdDIubGVuZ3RoOyArK3kpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tzLnB1c2gobmV3IFRyYWNrKHJlc3VsdDJbeV0uSUQsIHJlc3VsdDJbeV0uTlVNQkVSLCByZXN1bHQyW3ldLlRJVExFLCByZXN1bHQyW3ldLkxZUklDUykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9BZGQgQWxidW0gYW5kIGl0cyB0cmFja3MgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgYWxidW1zLnB1c2gobmV3IEFsYnVtKHJlc3VsdDFbeF0uSUQsIHJlc3VsdDFbeF0uVElUTEUsIHJlc3VsdDFbeF0uQVJUSVNULCByZXN1bHQxW3hdLkRFU0NSSVBUSU9OLCByZXN1bHQxW3hdLllFQVIsIHJlc3VsdDFbeF0uSU1BR0VfTkFNRSwgdHJhY2tzKSlcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NhbGxiYWNrIHRvIHJldHVybiB0aGUgYWxidW1zXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL0NSVUQgbWV0aG9kIHRvIGZpbmQgYWxsIGFsYnVtc1xyXG4gICAgcHVibGljIGZpbmRBbGxBbGJ1bXMoY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICAvL3JldHVybiBhbiBhbGJ1bVxyXG4gICAgICAgIGxldCBhbGJ1bXM6IEFsYnVtW10gPSBbXTtcclxuICAgICAgICAvL0dldCBhIHBvb2xlZCBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSwgcnVuIHRoZSBxdWVyeSB0byBnZXQgYWxsIHRoZSBkaXN0aW5jdCBBcnRpc3RzLCBhbmQgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29ubmVjdGlvbi5yZWxlYXNlO1xyXG4gICAgICAgICAgICAvL3Rob3cgYW4gZXJyb3IgaWYgYW4gZXJyb3JcclxuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIC8vdXNlciBwcm9taXNmeSB1dGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biB0aGUgcXVlcnkgdG8gZ2V0IGFsbCBhbGJ1bXMgZm9yIGEgc3BlY2lmaWMgYXJ0aXN0XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSAgdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBBTEJVTScpXHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL3VzZSBwcm9taXNmeSB1dGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biB0aGUgcXVlcnkgdG8gZ2V0IGFsbCB0cmFja3MgZm9yIHRoaXMgQWxidW1cclxuICAgICAgICAgICAgICAgIGxldCBhbGJ1bUlkID0gcmVzdWx0MVt4XS5JRFxyXG4gICAgICAgICAgICAgICAgbGV0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLCBbYWxidW1JZF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHJlc3VsdDIubGVuZ3RoOyArK3kpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tzLnB1c2gobmV3IFRyYWNrKHJlc3VsdDJbeV0uSUQsIHJlc3VsdDJbeV0uTlVNQkVSLCByZXN1bHQyW3ldLlRJVExFLCByZXN1bHQyW3ldLkxZUklDUykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9BZGQgQWxidW0gYW5kIGl0cyB0cmFja3MgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgYWxidW1zLnB1c2gobmV3IEFsYnVtKHJlc3VsdDFbeF0uSUQsIHJlc3VsdDFbeF0uVElUTEUsIHJlc3VsdDFbeF0uQVJUSVNULCByZXN1bHQxW3hdLkRFU0NSSVBUSU9OLCByZXN1bHQxW3hdLllFQVIsIHJlc3VsdDFbeF0uSU1BR0VfTkFNRSwgdHJhY2tzKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jYWxsYmFja1xyXG4gICAgICAgICAgICBjYWxsYmFjayhhbGJ1bXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL0NSVUQgbWV0aG9kIHRvIGZpbmQgYWxidW0gYnkgSURcclxuICAgIHB1YmxpYyBmaW5kQWxidW1CeUlkKGFsYnVtSWQ6IG51bWJlciwgY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICAvL3JldHVybiBhbiBhbGJ1bVxyXG4gICAgICAgIGxldCBhbGJ1bXM6IEFsYnVtW10gPSBbXTtcclxuICAgICAgICAvL0dldCBhIHBvb2xlZCBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSwgcnVuIHRoZSBxdWVyeSB0byBnZXQgYWxsIHRoZSBkaXN0aW5jdCBBcnRpc3RzLCBhbmQgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIC8vdGhvdyBhbiBlcnJvciBpZiBhbiBlcnJvclxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgLy91c2VyIHByb21pc2Z5IHV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgcnVuIHRoZSBxdWVyeSB0byBnZXQgYWxsIGFsYnVtcyBmb3IgYSBzcGVjaWZpYyBhcnRpc3RcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9ICB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEFMQlVNIFdIRVJFIElEPT8nLCBbYWxidW1JZF0pXHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL3VzZSBwcm9taXNmeSB1dGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biB0aGUgcXVlcnkgdG8gZ2V0IGFsbCB0cmFja3MgZm9yIHRoaXMgQWxidW1cclxuICAgICAgICAgICAgICAgIGxldCBhbGJ1bUlkID0gcmVzdWx0MVt4XS5JRFxyXG4gICAgICAgICAgICAgICAgbGV0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLCBbYWxidW1JZF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHJlc3VsdDIubGVuZ3RoOyArK3kpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tzLnB1c2gobmV3IFRyYWNrKHJlc3VsdDJbeV0uSUQsIHJlc3VsdDJbeV0uTlVNQkVSLCByZXN1bHQyW3ldLlRJVExFLCByZXN1bHQyW3ldLkxZUklDUykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9BZGQgQWxidW0gYW5kIGl0cyB0cmFja3MgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgYWxidW1zLnB1c2gobmV3IEFsYnVtKHJlc3VsdDFbeF0uSUQsIHJlc3VsdDFbeF0uVElUTEUsIHJlc3VsdDFbeF0uQVJUSVNULCByZXN1bHQxW3hdLkRFU0NSSVBUSU9OLCByZXN1bHQxW3hdLllFQVIsIHJlc3VsdDFbeF0uSU1BR0VfTkFNRSwgdHJhY2tzKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jYWxsYmFja1xyXG4gICAgICAgICAgICBjYWxsYmFjayhhbGJ1bXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL0NSVUQgbWV0aG9kIHRvIGZpbmQgYWxidW0gYnkgQXJ0aXN0IFxyXG4gICAgcHVibGljIGZpbmRBbGJ1bUJ5QXJ0aXN0KHNlYXJjaDogc3RyaW5nLCBjYWxsYmFjazogYW55KVxyXG4gICAge1xyXG4gICAgICAgIC8vcmV0dXJuIGFuIGFsYnVtXHJcbiAgICAgICAgbGV0IGFsYnVtczogQWxidW1bXSA9IFtdO1xyXG4gICAgICAgIC8vR2V0IGEgcG9vbGVkIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlLCBydW4gdGhlIHF1ZXJ5IHRvIGdldCBhbGwgdGhlIGRpc3RpbmN0IEFydGlzdHMsIGFuZCByZXR1cm5cclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25uZWN0aW9uLnJlbGVhc2U7XHJcbiAgICAgICAgICAgIC8vdGhvdyBhbiBlcnJvciBpZiBhbiBlcnJvclxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgLy91c2VyIHByb21pc2Z5IHV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgcnVuIHRoZSBxdWVyeSB0byBnZXQgYWxsIGFsYnVtcyBmb3IgYSBzcGVjaWZpYyBhcnRpc3RcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9ICB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEFMQlVNIFdIRVJFIEFSVElTVCBMSUtFIFwiJSVcIiAnLFtzZWFyY2hdKVxyXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgcmVzdWx0MS5sZW5ndGg7ICsreClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy91c2UgcHJvbWlzZnkgdXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gdGhlIHF1ZXJ5IHRvIGdldCBhbGwgdHJhY2tzIGZvciB0aGlzIEFsYnVtXHJcbiAgICAgICAgICAgICAgICBsZXQgYWxidW1JZCA9IHJlc3VsdDFbeF0uSURcclxuICAgICAgICAgICAgICAgIGxldCB0cmFja3M6IFRyYWNrW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQyID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBUUkFDSyBXSEVSRSBBTEJVTV9JRD0/JywgW2FsYnVtSWRdKTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCByZXN1bHQyLmxlbmd0aDsgKyt5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKG5ldyBUcmFjayhyZXN1bHQyW3ldLklELCByZXN1bHQyW3ldLk5VTUJFUiwgcmVzdWx0Mlt5XS5USVRMRSwgcmVzdWx0Mlt5XS5MWVJJQ1MpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vQWRkIEFsYnVtIGFuZCBpdHMgdHJhY2tzIHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGFsYnVtcy5wdXNoKG5ldyBBbGJ1bShyZXN1bHQxW3hdLklELCByZXN1bHQxW3hdLlRJVExFLCByZXN1bHQxW3hdLkFSVElTVCwgcmVzdWx0MVt4XS5ERVNDUklQVElPTiwgcmVzdWx0MVt4XS5ZRUFSLCByZXN1bHQxW3hdLklNQUdFX05BTUUsIHRyYWNrcykpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICAvL0NSVUQgbWV0aG9kIHRvIGZpbmQgYWxidW0gYnkgRGVzY3JpcHRpb24gXHJcbiAgICAgcHVibGljIGZpbmRBbGJ1bUJ5RGVzY3JpcHRpb24oc2VhcmNoOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpXHJcbiAgICAge1xyXG4gICAgICAgICAvL3JldHVybiBhbiBhbGJ1bVxyXG4gICAgICAgICBsZXQgYWxidW1zOiBBbGJ1bVtdID0gW107XHJcbiAgICAgICAgIC8vR2V0IGEgcG9vbGVkIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlLCBydW4gdGhlIHF1ZXJ5IHRvIGdldCBhbGwgdGhlIGRpc3RpbmN0IEFydGlzdHMsIGFuZCByZXR1cm5cclxuICAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSlcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Nvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAvL3Rob3cgYW4gZXJyb3IgaWYgYW4gZXJyb3JcclxuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gIHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gQUxCVU0gV0hFUkUgREVTQ1JJUFRJT04gTElLRSBcIiUlXCIgJywgW3NlYXJjaF0pXHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL3VzZSBwcm9taXNmeSB1dGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biB0aGUgcXVlcnkgdG8gZ2V0IGFsbCB0cmFja3MgZm9yIHRoaXMgQWxidW1cclxuICAgICAgICAgICAgICAgIGxldCBhbGJ1bUlkID0gcmVzdWx0MVt4XS5JRFxyXG4gICAgICAgICAgICAgICAgbGV0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLCBbYWxidW1JZF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHJlc3VsdDIubGVuZ3RoOyArK3kpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tzLnB1c2gobmV3IFRyYWNrKHJlc3VsdDJbeV0uSUQsIHJlc3VsdDJbeV0uTlVNQkVSLCByZXN1bHQyW3ldLlRJVExFLCByZXN1bHQyW3ldLkxZUklDUykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9BZGQgQWxidW0gYW5kIGl0cyB0cmFja3MgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgYWxidW1zLnB1c2gobmV3IEFsYnVtKHJlc3VsdDFbeF0uSUQsIHJlc3VsdDFbeF0uVElUTEUsIHJlc3VsdDFbeF0uQVJUSVNULCByZXN1bHQxW3hdLkRFU0NSSVBUSU9OLCByZXN1bHQxW3hdLllFQVIsIHJlc3VsdDFbeF0uSU1BR0VfTkFNRSwgdHJhY2tzKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC8vY2FsbGJhY2tcclxuICAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgfVxyXG5cclxuICAgICAvL0NSVUQgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBhbGJ1bVxyXG4gICAgIHB1YmxpYyBjcmVhdGUoYWxidW06IEFsYnVtLCBjYWxsYmFjazogYW55KVxyXG4gICAgIHtcclxuICAgICAgICBsZXQgYWxidW1zOiBBbGJ1bVtdID0gW107XHJcbiAgICAgICAgLy9HZXQgYSBwb29sZWQgY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2UsIHJ1biB0aGUgcXVlcnkgdG8gZ2V0IGFsbCB0aGUgZGlzdGluY3QgQXJ0aXN0cywgYW5kIHJldHVyblxyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIC8vIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAvL3Rob3cgYW4gZXJyb3IgaWYgYW4gZXJyb3JcclxuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgICAvL3VzZSBwcm9taXNmeSB1dGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGluc2VydCBBbGJ1bVxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gIHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIEFMQlVNIChUSVRMRSwgQVJUSVNULCBZRUFSLCBERVNDUklQVElPTikgVkFMVUVTKD8sPyw/LD8pJywgW2FsYnVtLlRpdGxlLCBhbGJ1bS5BcnRpc3QsIGFsYnVtLlllYXIsIGFsYnVtLkRlc2NyaXB0aW9uXSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCByZXN1bHQxLmFmZmVjdGVkUm93cyAhPSAxKVxyXG4gICAgICAgICAgICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAgICAvL3VzZSBwcm9taXNmeSB1dGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGluc2VydCB0cmFja3MgZm9yIHRoZSBBbGJ1bVxyXG4gICAgICAgICAgICAgbGV0IGFsYnVtSWQgPSByZXN1bHQxLmluc2VydElkO1xyXG4gICAgICAgICAgICAgbGV0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xyXG4gICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdJTlNFUlQgSU5UTyBUUkFDSyAoQUxCVU1fSUQsIFRJVExFLCBOVU1CRVIsIExZUklDUykgVkFMVUVTKD8sPyw/LD8pJywgW2FsYnVtSWQsIGFsYnVtLlRyYWNrc1t4XS5JZCwgYWxidW0uVHJhY2tzW3hdLlRpdGxlLCBhbGJ1bS5UcmFja3NbeF0uTnVtYmVyXSApO1xyXG4gICAgICAgICAgICAgZm9yKGxldCB5ID0wOyB5IDwgcmVzdWx0Mi5sZW5ndGg7ICsreSlcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdHJhY2tzLnB1c2gobmV3IFRyYWNrKHJlc3VsdDJbeV0uSUQsIHJlc3VsdDJbeV0uTlVNQkVSLCByZXN1bHQyW3ldLlRJVExFLCByZXN1bHQyW3ldLkxZUklDUykpO1xyXG4gICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgIGFsYnVtcy5wdXNoKG5ldyBBbGJ1bShyZXN1bHQxW3hdLklELCByZXN1bHQxW3hdLlRJVExFLCByZXN1bHQxW3hdLkFSVElTVCwgcmVzdWx0MVt4XS5ERVNDUklQVElPTiwgcmVzdWx0MVt4XS5ZRUFSLCByZXN1bHQxW3hdLklNQUdFX05BTUUsIHRyYWNrcykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcylcclxuICAgICAgICB9KVxyXG4gICAgIH1cclxuXHJcbiAgICAgLy9DUlVEIG1ldGhvZCB0byB1cGRhdGUgdGhlIGFsYnVtZVxyXG4gICAgIHB1YmxpYyB1cGRhdGUoYWxidW06QWxidW0sIGNhbGxiYWNrOiBhbnkpXHJcbiAgICAge1xyXG4gICAgICAgIGxldCBhbGJ1bXM6IEFsYnVtW10gPSBbXTtcclxuICAgICAgICAvL0dldCBhIHBvb2xlZCBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSwgcnVuIHRoZSBxdWVyeSB0byB1cGRhdGUgdGggYWxidW1cclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAvLyBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy90aG93IGFuIGVycm9yIGlmIGFuIGVycm9yXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgLy91c2UgcHJvbWlzZnkgdXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCB1cGRhdGUgYW4gQWxidW1cclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9ICB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KGBVUERBVEUgQUxCVU0gU0VUIFRJVExFPT8sIEFSVElTVD0/LCBERVNDUklQVElPTj0/LCBZRUFSPT8gV0hFUkUgaWQ9P2AsIFthbGJ1bS5UaXRsZSwgYWxidW0uQXJ0aXN0LCBhbGJ1bS5EZXNjcmlwdGlvbiwgYWxidW0uWWVhcixhbGJ1bS5JZF0pXHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCByZXN1bHQxLmFmZmVjdGVkUm93cyAhPSAxKVxyXG4gICAgICAgICAgICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAgICAvL3VzZSBwcm9taXNmeSB1dGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGluc2VydCB0cmFja3MgZm9yIHRoZSBBbGJ1bVxyXG4gICAgICAgICAgICAgbGV0IGFsYnVtSWQgPSByZXN1bHQxLmluc2VydElkO1xyXG4gICAgICAgICAgICAgbGV0IHRyYWNrczogVHJhY2tbXSA9IFtdO1xyXG4gICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdVUERBVEUgVFJBQ0sgU0VUIEFMQlVNX0lEPT8sIFRJVExFPT8sIE5VTUJFUj0/LCBMWVJJQ1M9PycsIFthbGJ1bUlkLCBhbGJ1bS5UcmFja3NbeF0uVGl0bGUsIGFsYnVtLlRyYWNrc1t4XS5OdW1iZXJdKTtcclxuICAgICAgICAgICAgZm9yKGxldCB5ID0wOyB5IDwgYWxidW0uVHJhY2tzLmxlbmd0aDsgKyt5KVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0cmFja3MucHVzaChuZXcgVHJhY2socmVzdWx0Mlt5XS5JRCwgcmVzdWx0Mlt5XS5OVU1CRVIsIHJlc3VsdDJbeV0uVElUTEUsIHJlc3VsdDJbeV0uTFlSSUNTKSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBhbGJ1bXMucHVzaChuZXcgQWxidW0ocmVzdWx0MVt4XS5JRCwgcmVzdWx0MVt4XS5USVRMRSwgcmVzdWx0MVt4XS5BUlRJU1QsIHJlc3VsdDFbeF0uREVTQ1JJUFRJT04sIHJlc3VsdDFbeF0uWUVBUiwgcmVzdWx0MVt4XS5JTUFHRV9OQU1FLCB0cmFja3MpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBjYWxsYmFjayhhbGJ1bXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL0NSVUQgbWV0aG9kIHRvIGRlbGV0ZSBhbiBhbGJ1bVxyXG4gICAgcHVibGljIGRlbGV0ZShhbGJ1bUlkOiBudW1iZXIsIGNhbGxiYWNrOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9HZXQgYSBwb29sZWQgY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2UsIHJ1biB0aGUgcXVlcnkgdG8gZGVsZXRlIGFuIGFsYnVtXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyAgY29ubmVjdGlvbi5yZWxlYXNlO1xyXG4gICAgICAgICAgICAvL3Rob3cgYW4gZXJyb3IgaWYgYW4gZXJyb3JcclxuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgICAvL3VzZSBwcm9taXNmeSB1dGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gdG8gZGVsZXRlIGFuIEFsYnVtXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSAgdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnREVMRVRFIEZST00gQUxCVU0gV0hFUkUgSUQ9PycsIFthbGJ1bUlkXSlcclxuICAgICAgICAgICAgaWYocmVzdWx0MS5hZmZlY3RlZFJvd3MgIT0gMSlcclxuICAgICAgICAgICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNhbGxiYWNrKGFsYnVtSWQpXHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtBQUNB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