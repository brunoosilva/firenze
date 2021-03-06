this["firenze"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).default;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Database = __webpack_require__(2);

	var _Database2 = _interopRequireDefault(_Database);

	var _Adapter = __webpack_require__(12);

	var _Adapter2 = _interopRequireDefault(_Adapter);

	var _Collection = __webpack_require__(5);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _Model = __webpack_require__(11);

	var _Model2 = _interopRequireDefault(_Model);

	var _Behavior = __webpack_require__(18);

	var _Behavior2 = _interopRequireDefault(_Behavior);

	var _Query = __webpack_require__(13);

	var _Query2 = _interopRequireDefault(_Query);

	var _Expression = __webpack_require__(14);

	var _Expression2 = _interopRequireDefault(_Expression);

	var _Functions = __webpack_require__(15);

	var _Functions2 = _interopRequireDefault(_Functions);

	var _Schema = __webpack_require__(16);

	var _Schema2 = _interopRequireDefault(_Schema);

	var _Migration = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Migration\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Migration2 = _interopRequireDefault(_Migration);

	var _Transaction = __webpack_require__(17);

	var _Transaction2 = _interopRequireDefault(_Transaction);

	var _Promise = __webpack_require__(9);

	var _Promise2 = _interopRequireDefault(_Promise);

	var _collectionFactory = __webpack_require__(4);

	var _collectionFactory2 = _interopRequireDefault(_collectionFactory);

	var _modelFactory = __webpack_require__(19);

	var _modelFactory2 = _interopRequireDefault(_modelFactory);

	var _behaviorFactory = __webpack_require__(20);

	var _behaviorFactory2 = _interopRequireDefault(_behaviorFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Database: _Database2.default,
	  Adapter: _Adapter2.default,

	  Collection: _Collection2.default,
	  Model: _Model2.default,
	  Behavior: _Behavior2.default,

	  Query: _Query2.default,
	  Expression: _Expression2.default,
	  Functions: _Functions2.default,

	  Schema: _Schema2.default,
	  Migration: _Migration2.default,
	  Transaction: _Transaction2.default,

	  Promise: _Promise2.default,

	  createCollection: (0, _collectionFactory2.default)(),
	  createModel: (0, _modelFactory2.default)(),
	  createBehavior: (0, _behaviorFactory2.default)()
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _collectionFactory = __webpack_require__(4);

	var _collectionFactory2 = _interopRequireDefault(_collectionFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Database = (function () {
	  function Database() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Database);

	    this.defaultOptions = {
	      adapter: null,
	      host: null,
	      user: null,
	      database: null,
	      password: null,
	      prefix: null
	    };

	    this.options = _lodash2.default.merge(this.defaultOptions, options);

	    var AdapterClass = this.options.adapter;
	    this.adapter = new AdapterClass(_lodash2.default.omit(this.options, 'adapter'));

	    this.createCollection = (0, _collectionFactory2.default)(this);
	  }

	  _createClass(Database, [{
	    key: 'getAdapter',
	    value: function getAdapter() {
	      return this.adapter;
	    }
	  }, {
	    key: 'query',
	    value: function query() {
	      return this.adapter.query();
	    }
	  }, {
	    key: 'schema',
	    value: function schema() {
	      return this.adapter.schema();
	    }
	  }, {
	    key: 'getConnection',
	    value: function getConnection() {
	      return this.getAdapter().getConnection();
	    }
	  }, {
	    key: 'transaction',
	    value: function transaction(func) {
	      return this.getAdapter().transaction(func);
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      return this.getAdapter().closeConnection();
	    }
	  }]);

	  return Database;
	})();

	exports.default = Database;

/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() { module.exports = this["_"]; }());

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Collection = __webpack_require__(5);

	var _Collection2 = _interopRequireDefault(_Collection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = function () {
	  var db = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	  return function () {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var Collection = (function (_C) {
	      _inherits(Collection, _C);

	      function Collection() {
	        var _extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, Collection);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this, extend));

	        if (!_this.getDatabase() && db) {
	          _this.setDatabase(db);
	        }

	        _lodash2.default.merge(_this, _extend);
	        return _this;
	      }

	      return Collection;
	    })(_Collection2.default);

	    return Collection;
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /* eslint-disable new-cap, no-shadow */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _async = __webpack_require__(6);

	var _async2 = _interopRequireDefault(_async);

	var _validator = __webpack_require__(7);

	var _validator2 = _interopRequireDefault(_validator);

	var _getParams = __webpack_require__(8);

	var _getParams2 = _interopRequireDefault(_getParams);

	var _Promise = __webpack_require__(9);

	var _Promise2 = _interopRequireDefault(_Promise);

	var _Model = __webpack_require__(11);

	var _Model2 = _interopRequireDefault(_Model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Collection = (function () {
	  function Collection() {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Collection);

	    this.modelClass = _Model2.default;
	    this.table = null;
	    this.schema = {};
	    this.primaryKey = 'id';
	    this.displayField = null;
	    this.validationRules = {};
	    this.behaviors = [];
	    this.loadedBehaviors = [];

	    _lodash2.default.merge(this, extend);

	    if (!this.alias) {
	      this.alias = this.table;
	    }

	    this.loadBehaviors();
	    this.callBehavedMethod(this, 'collectionInitialize');
	  }

	  _createClass(Collection, [{
	    key: 'model',
	    value: function model() {
	      var attributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      _lodash2.default.merge(extend, {
	        collection: this
	      });

	      return new this.modelClass(attributes, extend);
	    }
	  }, {
	    key: 'getDatabase',
	    value: function getDatabase() {
	      return this.db;
	    }
	  }, {
	    key: 'setDatabase',
	    value: function setDatabase(db) {
	      this.db = db;
	    }
	  }, {
	    key: 'getAdapter',
	    value: function getAdapter() {
	      return this.getDatabase().getAdapter();
	    }
	  }, {
	    key: 'query',
	    value: function query() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return this.getAdapter().query(_extends({}, options, {
	        collection: this
	      }));
	    }
	  }, {
	    key: 'find',
	    value: function find() {
	      return this.query().from(this.table, this.alias);
	    }
	  }, {
	    key: 'findBy',
	    value: function findBy(field, value) {
	      return this.find().where(_defineProperty({}, field, value)).first();
	    }
	  }, {
	    key: 'findAllBy',
	    value: function findAllBy(field, value) {
	      return this.find().where(_defineProperty({}, field, value)).all();
	    }
	  }, {
	    key: 'findById',
	    value: function findById(value) {
	      return this.findBy(this.primaryKey, value);
	    }
	  }, {
	    key: 'findByKey',
	    value: function findByKey(value) {
	      return this.findById(value);
	    }
	  }, {
	    key: 'validate',
	    value: function validate(model) {
	      var _this //eslint-disable-line
	      = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var callbacks = _lodash2.default.isUndefined(options.callbacks) || options.callbacks;

	      return new _Promise2.default(function (resolve, reject) {
	        return _async2.default.waterfall([function (cb) {
	          if (!callbacks) {
	            return cb(null, true);
	          }

	          return _this.callBehavedMethod(model, 'beforeValidate').then(function (proceed) {
	            return cb(null, proceed);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }, function (proceed, cb) {
	          return _this._validate(model).then(function (res) {
	            if (res === true) {
	              return cb(null, true);
	            }

	            return cb(res);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }, function (res, cb) {
	          if (!callbacks) {
	            return cb(null, res);
	          }

	          return _this.callBehavedMethod(model, 'afterValidate').then(function () {
	            return cb(null, res);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }], function (err, result) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(result);
	        });
	      });
	    }
	  }, {
	    key: '_validate',
	    value: function _validate(model) {
	      var _this2 = this;

	      //eslint-disable-line
	      var fields = [];
	      _lodash2.default.each(model.toObject(), function (v, field) {
	        if (!_lodash2.default.isObject(v)) {
	          fields.push(field);
	        }
	      });

	      _lodash2.default.each(this.schema, function (schema, field) {
	        if (_lodash2.default.isUndefined(schema.validate)) {
	          return;
	        }

	        if (_lodash2.default.isObject(schema.validate) && schema.validate.required) {
	          fields.push(field);
	          return;
	        }

	        if (!_lodash2.default.isArray(schema.validate)) {
	          return;
	        }

	        _lodash2.default.each(schema.validate, function (ruleObj) {
	          if (ruleObj.required) {
	            fields.push(field);
	          }
	        });
	      });

	      fields = _lodash2.default.uniq(fields);
	      var list = {};

	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.mapSeries(fields, function (field, cb) {
	          _this2.validateField(model, field).catch(function (error) {
	            list[field] = error;
	          }).finally(function () {
	            cb();
	          });
	        }, function (err) {
	          if (err) {
	            return reject(err);
	          }

	          if (_lodash2.default.isEmpty(list)) {
	            return resolve(true);
	          }

	          return reject(list);
	        });
	      });
	    }
	  }, {
	    key: 'validateField',
	    value: function validateField(model, field) {
	      var _this3 = this;

	      var givenValue = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	      var value = !givenValue ? model.get(field) : givenValue;

	      var fieldSchema = this.schema[field];
	      if (!_lodash2.default.isObject(fieldSchema) || !fieldSchema.validate) {
	        return new _Promise2.default.resolve(true); //eslint-disable-line
	      }

	      var validate = fieldSchema.validate;
	      if (!_lodash2.default.isArray(validate)) {
	        validate = [validate];
	      }

	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.eachSeries(validate, function (ruleObj, cb) {
	          var rule = ruleObj.rule;
	          var ruleName = undefined;
	          var ruleOptions = [];
	          var message = ruleObj.message;

	          var validatorFunc = undefined;
	          var validatorOptions = undefined;

	          if (_lodash2.default.isString(rule)) {
	            ruleName = rule;
	          } else if (_lodash2.default.isArray(rule)) {
	            ruleName = _lodash2.default.first(rule);
	            ruleOptions = _lodash2.default.rest(rule);
	          }

	          if (_lodash2.default.isFunction(rule)) {
	            // rule is a direct function
	            validatorFunc = rule;
	            validatorOptions = [field, value];
	          } else if (ruleName && _lodash2.default.isFunction(_this3.validationRules[ruleName])) {
	            // rule is an pre-defined function
	            validatorFunc = _this3.validationRules[ruleName];
	            validatorOptions = [field, value];
	          } else if (_lodash2.default.isFunction(_validator2.default[ruleName])) {
	            // validator.js
	            validatorFunc = _validator2.default[ruleName];
	            validatorOptions = [value].concat(ruleOptions);
	          } else {
	            // no rule found
	            return cb(message);
	          }

	          var params = (0, _getParams2.default)(validatorFunc);
	          if (_lodash2.default.last(params) === 'done') {
	            // async
	            validatorOptions.push(function (passed) {
	              if (!passed) {
	                return cb(message);
	              }

	              cb();
	            });

	            validatorFunc.apply(model, validatorOptions);
	          } else {
	            // sync
	            var passed = validatorFunc.apply(model, validatorOptions);

	            if (!passed) {
	              return cb(message);
	            }

	            cb();
	          }
	        }, function (err) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(true);
	        });
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(model) {
	      var _this4 //eslint-disable-line
	      = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var callbacks = _lodash2.default.isUndefined(options.callbacks) || options.callbacks;

	      return new _Promise2.default(function (resolve, reject) {
	        return _async2.default.waterfall([function (cb) {
	          if (!callbacks) {
	            return cb(null, true);
	          }

	          return _this4.callBehavedMethod(model, 'beforeSave').then(function (proceed) {
	            if (proceed === true) {
	              return cb(null, proceed);
	            }

	            return cb(proceed);
	          });
	        }, function (proceed, cb) {
	          if (!_lodash2.default.isUndefined(options.validate) && options.validate === false) {
	            return _this4._save(model, options).then(function (model) {
	              return cb(null, model);
	            }).catch(function (error) {
	              return cb(error);
	            });
	          }

	          return _this4.validate(model).then(function () {
	            _this4._save(model, options) // eslint-disable-line
	            .then(function (model) {
	              cb(null, model);
	            }).catch(function (error) {
	              cb(error);
	            });
	          }).catch(function (error) {
	            cb({
	              validationErrors: error
	            });
	          });
	        }, function (result, cb) {
	          if (!callbacks) {
	            return cb(null, model);
	          }

	          return _this4.callBehavedMethod(model, 'afterSave').then(function () {
	            return cb(null, model);
	          });
	        }], function (err, result) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(result);
	        });
	      });
	    }
	  }, {
	    key: '_save',
	    value: function _save(model) {
	      var _this5 = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var obj = model.toObject();
	      return new _Promise2.default(function (resolve, reject) {
	        var q = null;

	        if (model.isNew()) {
	          q = _this5.query().create(obj);
	        } else {
	          obj = _lodash2.default.omit(obj, model.primaryKey);
	          if (_lodash2.default.isArray(options.fields)) {
	            obj = _lodash2.default.pick(obj, options.fields);
	          }

	          q = _this5.query().where(_defineProperty({}, _this5.primaryKey, model.getId())).update(obj);
	        }

	        if (options.transact) {
	          q.transact(options.transact);
	        }

	        q.run().then(function (ids) {
	          var id = null;
	          if (_lodash2.default.isArray(ids) && ids.length === 0 || !ids) {
	            return resolve(id);
	          } else if (_lodash2.default.isArray(ids)) {
	            id = ids[0];
	          } else {
	            id = ids;
	          }

	          return _this5.model({ id: id }).fetch().then(function (m) {
	            resolve(m);
	          }).catch(function (error) {
	            reject(error);
	          });
	        }).catch(reject);
	      });
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(model) {
	      var _this6 //eslint-disable-line
	      = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var callbacks = _lodash2.default.isUndefined(options.callbacks) || options.callbacks;

	      return new _Promise2.default(function (resolve, reject) {
	        return _async2.default.waterfall([function (cb) {
	          if (!callbacks) {
	            return cb(null, true);
	          }

	          return _this6.callBehavedMethod(model, 'beforeDelete').then(function (proceed) {
	            return cb(null, proceed);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }, function (proceed, cb) {
	          return _this6._delete(model, options).then(function (res) {
	            return cb(null, res);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }, function (result, cb) {
	          return _this6.callBehavedMethod(model, 'afterDelete').then(function () {
	            return cb(null, result);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }], function (err, result) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(result);
	        });
	      });
	    }
	  }, {
	    key: '_delete',
	    value: function _delete(model) {
	      var _this7 = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      return new _Promise2.default(function (resolve, reject) {
	        if (model.isNew()) {
	          var error = new Error('Cannot delete a model without ID');
	          return reject(error);
	        }

	        var query = _this7.query().delete().where(_defineProperty({}, _this7.primaryKey, model.getId()));

	        if (options.transact) {
	          query.transact(options.transact);
	        }

	        query.run().then(resolve).catch(reject);
	      });
	    }
	  }, {
	    key: 'loadBehaviors',
	    value: function loadBehaviors() {
	      var _this8 = this;

	      this.behaviors.forEach(function (behaviorItem) {
	        var behaviorClass = behaviorItem;
	        var behaviorOptions = {};

	        if (_lodash2.default.isObject(behaviorItem) && _lodash2.default.isObject(behaviorItem.options)) {
	          behaviorClass = behaviorItem.class;
	          behaviorOptions = behaviorItem.options;
	        }

	        var behavior = new behaviorClass({
	          collection: _this8,
	          options: behaviorOptions
	        });
	        _this8.loadedBehaviors.push(behavior);
	      });
	    }
	  }, {
	    key: 'callBehavedMethod',
	    value: function callBehavedMethod(context, methodName) {
	      var _this9 = this;

	      if (methodName.indexOf('after') === -1 && methodName.indexOf('before') === -1) {
	        // sync
	        this.loadedBehaviors.forEach(function (behavior) {
	          behavior[methodName](context);
	        });

	        return true;
	      }

	      // async
	      return new _Promise2.default(function (resolve, reject) {
	        return _async2.default.eachSeries(_this9.loadedBehaviors, function (behavior, callback) {
	          behavior[methodName](context).then(function (res) {
	            return callback(null, res);
	          }).catch(function (error) {
	            return callback(error);
	          });
	        }, function (error) {
	          if (error) {
	            return reject(error);
	          }

	          return _this9[methodName](context).then(function (res) {
	            return resolve(res);
	          }).catch(function (error) {
	            return reject(error);
	          });
	        });
	      });
	    }
	  }, {
	    key: 'modelInitialize',
	    value: function modelInitialize(model) {
	      //eslint-disable-line
	      return true;
	    }
	  }, {
	    key: 'beforeSave',
	    value: function beforeSave(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'afterSave',
	    value: function afterSave(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'beforeValidate',
	    value: function beforeValidate(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'afterValidate',
	    value: function afterValidate(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'beforeDelete',
	    value: function beforeDelete(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'afterDelete',
	    value: function afterDelete(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }]);

	  return Collection;
	})();

	exports.default = Collection;

/***/ },
/* 6 */
/***/ function(module, exports) {

	(function() { module.exports = this["async"]; }());

/***/ },
/* 7 */
/***/ function(module, exports) {

	(function() { module.exports = this["validator"]; }());

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* global window */
	var GetParams = function (func) {
		'use strict';

		if (typeof func !== 'function') {
			return [];
		}

		var patternComments = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
		var patternArguments = /([^\s,]+)/g;

		var funcString = func
			.toString()
			.replace(patternComments, '');

		var result = funcString
			.slice(
				funcString.indexOf('(') + 1,
				funcString.indexOf(')')
			)
			.match(patternArguments);

		if (result === null) {
			return [];
		}

		return result;
	};

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = GetParams;
	}

	if (typeof window !== 'undefined') {
		window.GetParams = GetParams;
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bluebird = __webpack_require__(10);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _bluebird2.default;

/***/ },
/* 10 */
/***/ function(module, exports) {

	(function() { module.exports = this["P"]; }());

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /* eslint-disable new-cap */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Promise = __webpack_require__(9);

	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = (function () {
	  function Model() {
	    var attributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Model);

	    this.attributes = attributes ? attributes : {};
	    this.id = null;

	    _lodash2.default.merge(this, extend);

	    var id = this.get(this.collection.primaryKey);
	    if (id) {
	      this.id = id;
	    }

	    this.collection.callBehavedMethod(this, 'modelInitialize');
	  }

	  _createClass(Model, [{
	    key: 'get',
	    value: function get(field) {
	      var obj = this.toObject();
	      return _lodash2.default.get(obj, field);
	    }
	  }, {
	    key: 'set',
	    value: function set(field, value) {
	      if (_lodash2.default.isObject(field)) {
	        return _lodash2.default.merge(this.attributes, field);
	      }

	      return _lodash2.default.set(this.attributes, field, value);
	    }
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      return this.attributes;
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return this.toObject();
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this = this;

	      var id = this.getId();
	      if (!id) {
	        throw new Error('No ID found');
	      }

	      return new _Promise2.default(function (resolve, reject) {
	        return _this.collection.findById(id).then(function (model) {
	          resolve(model);
	        }).catch(reject);
	      });
	    }
	  }, {
	    key: 'getId',
	    value: function getId() {
	      var id = this.id || this.get(this.collection.primaryKey);
	      if (!_lodash2.default.isUndefined(id)) {
	        return id;
	      }

	      return null;
	    }
	  }, {
	    key: 'isNew',
	    value: function isNew() {
	      return this.getId() ? false : true; // eslint-disable-line
	    }
	  }, {
	    key: 'resetTransact',
	    value: function resetTransact() {
	      this._transact = null;

	      return this;
	    }
	  }, {
	    key: 'transact',
	    value: function transact(t) {
	      this._transact = t;

	      return this;
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var givenOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var options = _extends({
	        transact: this._transact ? this._transact : null
	      }, givenOptions);

	      return this.resetTransact().collection.save(this, options);
	    }
	  }, {
	    key: 'saveField',
	    value: function saveField(field, value) {
	      this.set(field, value);

	      return this.save({
	        fields: [field]
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.id = null;
	      this.attributes = {};
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var givenOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var options = _extends({
	        transact: this._transact ? this._transact : null
	      }, givenOptions);

	      return this.resetTransact().collection.delete(this, options);
	    }
	  }, {
	    key: 'validate',
	    value: function validate() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return this.collection.validate(this, options);
	    }
	  }, {
	    key: 'validateField',
	    value: function validateField(field) {
	      var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	      return this.collection.validateField(this, field, value);
	    }
	  }]);

	  return Model;
	})();

	exports.default = Model;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _async = __webpack_require__(6);

	var _async2 = _interopRequireDefault(_async);

	var _Promise = __webpack_require__(9);

	var _Promise2 = _interopRequireDefault(_Promise);

	var _Query = __webpack_require__(13);

	var _Query2 = _interopRequireDefault(_Query);

	var _Schema = __webpack_require__(16);

	var _Schema2 = _interopRequireDefault(_Schema);

	var _Transaction = __webpack_require__(17);

	var _Transaction2 = _interopRequireDefault(_Transaction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Adapter = (function () {
	  function Adapter() {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Adapter);

	    //eslint-disable-line
	    this.queryClass = _Query2.default;
	    this.schemaClass = _Schema2.default;
	    this.transactionClass = _Transaction2.default;

	    _lodash2.default.merge(this, extend);
	  }

	  _createClass(Adapter, [{
	    key: 'getConnection',
	    value: function getConnection() {
	      return null;
	    }
	  }, {
	    key: 'closeConnection',
	    value: function closeConnection() {
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'query',
	    value: function query() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return new this.queryClass(_extends({}, options, {
	        adapter: this
	      }));
	    }
	  }, {
	    key: 'transaction',
	    value: function transaction(func) {
	      var _this = this;

	      return new _Promise2.default(function (resolve, reject) {
	        func.apply(_this, [_this.transactionClass()]).then(resolve).catch(reject);
	      });
	    }
	  }, {
	    key: 'schema',
	    value: function schema() {
	      return new this.schemaClass(this);
	    }
	  }, {
	    key: 'populateTable',
	    value: function populateTable(collection, rows) {
	      var _this2 = this;

	      return new _Promise2.default(function (resolve, reject) {
	        _this2.query().table(collection.table).create(rows).run().then(resolve).catch(reject);
	      });
	    }
	  }, {
	    key: 'loadFixture',
	    value: function loadFixture(collection, rows) {
	      var _this3 = this;

	      //eslint-disable-line
	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.series([function (callback) {
	          _this3.schema().dropTableOfCollection(collection).then(function (response) {
	            callback(null, response);
	          }).catch(function (error) {
	            callback(error);
	          });
	        }, function (callback) {
	          _this3.schema().createTableFromCollection(collection).then(function (response) {
	            callback(null, response);
	          }).catch(function (error) {
	            callback(error);
	          });
	        }, function (callback) {
	          _this3.populateTable(collection, rows).then(function (response) {
	            callback(null, response);
	          }).catch(function (error) {
	            callback(error);
	          });
	        }], function (err, results) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(results);
	        });
	      });
	    }
	  }, {
	    key: 'loadAllFixtures',
	    value: function loadAllFixtures(arr) {
	      var _this4 = this;

	      //eslint-disable-line
	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.map(arr, function (fixture, callback) {
	          _this4.loadFixture(fixture.collection, fixture.rows).then(function (results) {
	            callback(null, results);
	          }).catch(function (error) {
	            callback(error);
	          });
	        }, function (err, results) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(results);
	        });
	      });
	    }
	  }]);

	  return Adapter;
	})();

	exports.default = Adapter;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Promise = __webpack_require__(9);

	var _Promise2 = _interopRequireDefault(_Promise);

	var _Expression = __webpack_require__(14);

	var _Expression2 = _interopRequireDefault(_Expression);

	var _Functions = __webpack_require__(15);

	var _Functions2 = _interopRequireDefault(_Functions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Query = (function () {
	  function Query() {
	    var givenOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Query);

	    var options = _extends({
	      expressionClass: _Expression2.default,
	      functionsClass: _Functions2.default
	    }, givenOptions);

	    this.adapter = null;
	    this.collection = null;

	    if (options.adapter) {
	      this.setAdapter(options.adapter);
	    }

	    if (options.collection) {
	      this.setCollection(options.collection);
	    }

	    this.options = _lodash2.default.omit(options, 'adapter', 'collection');
	  }

	  _createClass(Query, [{
	    key: 'setAdapter',
	    value: function setAdapter(adapter) {
	      this.adapter = adapter;

	      return this;
	    }
	  }, {
	    key: 'getAdapter',
	    value: function getAdapter() {
	      return this.adapter;
	    }
	  }, {
	    key: 'setCollection',
	    value: function setCollection(collection) {
	      this.collection = collection;

	      return this;
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      return this;
	    }
	  }, {
	    key: 'distinct',
	    value: function distinct() {
	      return this;
	    }
	  }, {
	    key: 'from',
	    value: function from() {
	      return this;
	    }
	  }, {
	    key: 'where',
	    value: function where() {
	      return this;
	    }
	  }, {
	    key: 'andWhere',
	    value: function andWhere() {
	      return this;
	    }
	  }, {
	    key: 'orWhere',
	    value: function orWhere() {
	      return this;
	    }
	  }, {
	    key: 'notWhere',
	    value: function notWhere() {
	      return this;
	    }
	  }, {
	    key: 'groupBy',
	    value: function groupBy() {
	      return this;
	    }
	  }, {
	    key: 'orderBy',
	    value: function orderBy() {
	      return this;
	    }
	  }, {
	    key: 'offset',
	    value: function offset() {
	      return this;
	    }
	  }, {
	    key: 'limit',
	    value: function limit() {
	      return this;
	    }
	  }, {
	    key: 'page',
	    value: function page() {
	      return this;
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      return this;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      return this;
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      return this;
	    }
	  }, {
	    key: 'table',
	    value: function table() {
	      return this;
	    }
	  }, {
	    key: 'expr',
	    value: function expr() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return new (Function.prototype.bind.apply(this.options.expressionClass, [null].concat([this], args)))();
	    }
	  }, {
	    key: 'func',
	    value: function func() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return new (Function.prototype.bind.apply(this.options.functionsClass, [null].concat([this], args)))();
	    }
	  }, {
	    key: 'count',
	    value: function count() {
	      return this;
	    }
	  }, {
	    key: 'truncate',
	    value: function truncate() {
	      return this;
	    }
	  }, {
	    key: 'join',
	    value: function join() {
	      return this;
	    }
	  }, {
	    key: 'innerJoin',
	    value: function innerJoin() {
	      return this;
	    }
	  }, {
	    key: 'leftJoin',
	    value: function leftJoin() {
	      return this;
	    }
	  }, {
	    key: 'leftOuterJoin',
	    value: function leftOuterJoin() {
	      return this;
	    }
	  }, {
	    key: 'rightJoin',
	    value: function rightJoin() {
	      return this;
	    }
	  }, {
	    key: 'rightOuterJoin',
	    value: function rightOuterJoin() {
	      return this;
	    }
	  }, {
	    key: 'outerJoin',
	    value: function outerJoin() {
	      return this;
	    }
	  }, {
	    key: 'fullOuterJoin',
	    value: function fullOuterJoin() {
	      return this;
	    }
	  }, {
	    key: 'crossJoin',
	    value: function crossJoin() {
	      return this;
	    }
	  }, {
	    key: 'transact',
	    value: function transact() {
	      return this;
	    }
	  }, {
	    key: 'all',
	    value: function all() {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'first',
	    value: function first() {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'toModels',
	    value: function toModels(results) {
	      var _this = this;

	      if (!results || !this.collection) {
	        return results;
	      }

	      if (_lodash2.default.isArray(results)) {
	        var _ret = (function () {
	          var models = [];
	          results.forEach(function (model) {
	            models.push(_this.collection.model(model));
	          });

	          return {
	            v: models
	          };
	        })();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }

	      if (_lodash2.default.isObject(results)) {
	        return this.collection.model(results);
	      }

	      return results;
	    }
	  }, {
	    key: 'toModel',
	    value: function toModel() {
	      return this.toModels.apply(this, arguments);
	    }
	  }, {
	    key: 'debug',
	    value: function debug() {
	      return this;
	    }
	  }, {
	    key: 'tap',
	    value: function tap(func) {
	      func.bind(this)();

	      return this;
	    }
	  }]);

	  return Query;
	})();

	exports.default = Query;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Expression = (function () {
	  function Expression(query) {
	    _classCallCheck(this, Expression);

	    this.query = query;
	  }

	  _createClass(Expression, [{
	    key: "eq",
	    value: function eq() {
	      return this;
	    }
	  }, {
	    key: "notEq",
	    value: function notEq() {
	      return this;
	    }
	  }, {
	    key: "lt",
	    value: function lt() {
	      return this;
	    }
	  }, {
	    key: "lte",
	    value: function lte() {
	      return this;
	    }
	  }, {
	    key: "gt",
	    value: function gt() {
	      return this;
	    }
	  }, {
	    key: "gte",
	    value: function gte() {
	      return this;
	    }
	  }, {
	    key: "isNull",
	    value: function isNull() {
	      return this;
	    }
	  }, {
	    key: "isNotNull",
	    value: function isNotNull() {
	      return this;
	    }
	  }, {
	    key: "in",
	    value: function _in() {
	      return this;
	    }
	  }, {
	    key: "notIn",
	    value: function notIn() {
	      return this;
	    }
	  }, {
	    key: "like",
	    value: function like() {
	      return this;
	    }
	  }, {
	    key: "notLike",
	    value: function notLike() {
	      return this;
	    }
	  }, {
	    key: "between",
	    value: function between() {
	      return this;
	    }
	  }, {
	    key: "notBetween",
	    value: function notBetween() {
	      return this;
	    }
	  }, {
	    key: "count",
	    value: function count() {
	      return this;
	    }
	  }, {
	    key: "and",
	    value: function and() {
	      return this;
	    }
	  }, {
	    key: "or",
	    value: function or() {
	      return this;
	    }
	  }, {
	    key: "not",
	    value: function not() {
	      return this;
	    }
	  }]);

	  return Expression;
	})();

	exports.default = Expression;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Functions = (function () {
	  function Functions() {
	    _classCallCheck(this, Functions);

	    this.query = arguments.length <= 0 ? undefined : arguments[0];
	    this.column = arguments.length <= 1 ? undefined : arguments[1];
	    this.funcs = [];
	  }

	  _createClass(Functions, [{
	    key: "addFunction",
	    value: function addFunction(funcName) {
	      this.funcs.push(funcName);

	      return this;
	    }
	  }, {
	    key: "getFunctions",
	    value: function getFunctions() {
	      return this.funcs;
	    }
	  }, {
	    key: "setColumn",
	    value: function setColumn(column) {
	      this.column = column;

	      return this;
	    }
	  }, {
	    key: "getColumn",
	    value: function getColumn() {
	      return this.column;
	    }
	  }, {
	    key: "upper",
	    value: function upper() {
	      return this;
	    }
	  }, {
	    key: "lower",
	    value: function lower() {
	      return this;
	    }
	  }, {
	    key: "concat",
	    value: function concat() {
	      return null;
	    }
	  }, {
	    key: "sum",
	    value: function sum() {
	      return this;
	    }
	  }, {
	    key: "avg",
	    value: function avg() {
	      return this;
	    }
	  }, {
	    key: "min",
	    value: function min() {
	      return this;
	    }
	  }, {
	    key: "max",
	    value: function max() {
	      return this;
	    }
	  }, {
	    key: "count",
	    value: function count() {
	      return this;
	    }
	  }, {
	    key: "now",
	    value: function now() {
	      return null;
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return null;
	    }
	  }]);

	  return Functions;
	})();

	exports.default = Functions;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /* eslint-disable no-unused-vars */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _async = __webpack_require__(6);

	var _async2 = _interopRequireDefault(_async);

	var _Promise = __webpack_require__(9);

	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Schema = (function () {
	  function Schema(adapter) {
	    _classCallCheck(this, Schema);

	    this.adapter = adapter;
	  }

	  _createClass(Schema, [{
	    key: 'getConnection',
	    value: function getConnection() {
	      return this.adapter.getConnection();
	    }
	  }, {
	    key: 'dropTableOfCollection',
	    value: function dropTableOfCollection(collection) {
	      var _this = this;

	      var table = collection.table;

	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.waterfall([
	        // check if exists
	        function (callback) {
	          _this.tableExists(table).then(function (exists) {
	            return callback(null, exists);
	          }).catch(function (error) {
	            return callback(error);
	          });
	        },

	        // drop it if exists
	        function (exists, callback) {
	          if (!exists) {
	            return callback(null, true);
	          }

	          _this.dropTable(table).then(function (result) {
	            return callback(null, result);
	          }).catch(function (error) {
	            return callback(error);
	          });
	        }], function (error, result) {
	          if (error) {
	            return reject(error);
	          }

	          resolve(result);
	        });
	      });
	    }
	  }, {
	    key: 'createTableFromCollection',
	    value: function createTableFromCollection(collection) {
	      var table = collection.table;
	      var collectionSchema = collection.schema;

	      return this.createTable(table, collectionSchema);
	    }
	  }, {
	    key: 'dropTable',
	    value: function dropTable(tableName) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'tableExists',
	    value: function tableExists(tableName) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'renameTable',
	    value: function renameTable(from, to) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'createTable',
	    value: function createTable(tableName, collectionSchema) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'columnExists',
	    value: function columnExists(tableName, columnName) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'dropColumn',
	    value: function dropColumn(tableName, columnName) {
	      return this.dropColumns(tableName, [columnName]);
	    }
	  }, {
	    key: 'dropColumns',
	    value: function dropColumns(tableName, columnNames) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'createColumn',
	    value: function createColumn(tableName, columnName, fieldSchema) {
	      return this.createColumns(tableName, _defineProperty({}, columnName, fieldSchema));
	    }
	  }, {
	    key: 'createColumns',
	    value: function createColumns(tableName, collectionSchema) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'renameColumn',
	    value: function renameColumn(tableName, from, to) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'alterColumn',
	    value: function alterColumn(tableName, columnName, toName, fieldSchema) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'createIndex',
	    value: function createIndex(tableName, columns, indexName, indexType) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'dropIndex',
	    value: function dropIndex(tableName, columns, indexName) {
	      return new _Promise2.default.resolve(true);
	    }
	  }]);

	  return Schema;
	})();

	exports.default = Schema;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Promise = __webpack_require__(9);

	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transaction = (function () {
	  function Transaction() {
	    var reference = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Transaction);

	    this.reference = reference;
	    this.options = options;
	  }

	  _createClass(Transaction, [{
	    key: 'set',
	    value: function set(reference) {
	      this.reference = reference;

	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      return this.reference;
	    }
	  }, {
	    key: 'commit',
	    value: function commit() {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'rollback',
	    value: function rollback() {
	      return new _Promise2.default.reject(true);
	    }
	  }]);

	  return Transaction;
	})();

	exports.default = Transaction;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Promise = __webpack_require__(9);

	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Behavior = (function () {
	  function Behavior() {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Behavior);

	    this.collection = null;
	    this.options = {};

	    _lodash2.default.merge(this, extend);
	  }

	  _createClass(Behavior, [{
	    key: 'collectionInitialize',
	    value: function collectionInitialize(collection) {//eslint-disable-line

	    }
	  }, {
	    key: 'modelInitialize',
	    value: function modelInitialize(model) {//eslint-disable-line

	    }
	  }, {
	    key: 'beforeSave',
	    value: function beforeSave(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'afterSave',
	    value: function afterSave(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'beforeValidate',
	    value: function beforeValidate(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'afterValidate',
	    value: function afterValidate(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'beforeDelete',
	    value: function beforeDelete(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'afterDelete',
	    value: function afterDelete(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }]);

	  return Behavior;
	})();

	exports.default = Behavior;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Model = __webpack_require__(11);

	var _Model2 = _interopRequireDefault(_Model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = function () {
	  return function () {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var Model = (function (_M) {
	      _inherits(Model, _M);

	      function Model() {
	        var attributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        _classCallCheck(this, Model);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Model).call(this, attributes, _extend));

	        _lodash2.default.merge(_this, extend);
	        return _this;
	      }

	      return Model;
	    })(_Model2.default);

	    return Model;
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Behavior = __webpack_require__(18);

	var _Behavior2 = _interopRequireDefault(_Behavior);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = function () {
	  return function () {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var Behavior = (function (_B) {
	      _inherits(Behavior, _B);

	      function Behavior() {
	        var _extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, Behavior);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Behavior).call(this, _extend));

	        _lodash2.default.merge(_this, extend);
	        return _this;
	      }

	      return Behavior;
	    })(_Behavior2.default);

	    return Behavior;
	  };
	};

/***/ }
/******/ ]);