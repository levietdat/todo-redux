"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodo = void 0;

var _TodoModel = require("../models/TodoModel.js");

var getTodo = function getTodo(req, res) {
  var todo;
  return regeneratorRuntime.async(function getTodo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_TodoModel.TodoModel.find());

        case 3:
          todo = _context.sent;
          res.status(200).json(todo);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getTodo = getTodo;

var createTodo = function createTodo(req, res) {
  var todoText, todo;
  return regeneratorRuntime.async(function createTodo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          todoText = req.body;
          _context2.next = 4;
          return regeneratorRuntime.awrap((0, _TodoModel.TodoModel)(todoText));

        case 4:
          todo = _context2.sent;
          res.status(200).json(todo);
          todo.save();
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.createTodo = createTodo;

var updateTodo = function updateTodo(req, res) {
  var id, todo;
  return regeneratorRuntime.async(function updateTodo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.slug;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_TodoModel.TodoModel.findOneAndUpdate({
            id: id
          }, req.body, {
            "new": true
          }));

        case 4:
          todo = _context3.sent;
          res.status(200).json(todo);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.updateTodo = updateTodo;

var deleteTodo = function deleteTodo(req, res) {
  var id, todo;
  return regeneratorRuntime.async(function deleteTodo$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_TodoModel.TodoModel.findOneAndDelete({
            id: id
          }, {
            "new": true
          }));

        case 4:
          todo = _context4.sent;
          res.status(200).json(todo);
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.deleteTodo = deleteTodo;