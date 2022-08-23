"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = new _mongoose["default"].Schema({
  id: String,
  todo: String,
  completed: Boolean
}, {
  timestamps: true
});

var TodoModel = _mongoose["default"].model("Post", schema);

exports.TodoModel = TodoModel;