"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addTodo = exports.deleteTodo = exports.updateTodo = exports.addNewTodos = exports.fetchTodos = void 0;

var _toolkit = require("@reduxjs/toolkit");

var todoSlice = (0, _toolkit.createSlice)({
  name: 'todos',
  initialState: {
    status: 'idle',
    todos: []
  },
  reducers: {// addTodos: (state ,action) =>  {
    //     const newTodo = {
    //         id:Date.now(),
    //         todo:action.payload.todo,
    //         completed:false
    //     }
    //     state.todos.push(newTodo);
    // }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchTodos.pending, function (state, action) {
      state.status = 'loading';
    });
    builder.addCase(fetchTodos.fulfilled, function (state, action) {
      state.status = 'idle';
      state.todos = action.payload;
    });
    builder.addCase(addNewTodos.fulfilled, function (state, action) {
      state.status = 'loading';
      state.todos.push(action.payload);
    });
    builder.addCase(updateTodo.fulfilled, function (state, action) {
      state.status = 'updated';
    });
    builder.addCase(deleteTodo.fulfilled, function (state, action) {
      state.status = 'updated';
    });
  }
});
var fetchTodos = (0, _toolkit.createAsyncThunk)('fetchTodos', function _callee() {
  var res, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('http://localhost:3000/todo'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchTodos = fetchTodos;
var addNewTodos = (0, _toolkit.createAsyncThunk)('addTodos', function _callee2(newTodo) {
  var res, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
          }));

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.addNewTodos = addNewTodos;
var updateTodo = (0, _toolkit.createAsyncThunk)('updateTodo', function _callee3(payload) {
  var res, data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/todo/".concat(payload.id), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }));

        case 2:
          res = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context3.sent;
          return _context3.abrupt("return", data);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.updateTodo = updateTodo;
var deleteTodo = (0, _toolkit.createAsyncThunk)('deleteTodo', function _callee4(payload) {
  var res, data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/todo/".concat(payload.id), {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }));

        case 2:
          res = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context4.sent;
          return _context4.abrupt("return", data);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
});
exports.deleteTodo = deleteTodo;
var addTodo = todoSlice.actions.addTodo;
exports.addTodo = addTodo;
var _default = todoSlice.reducer;
exports["default"] = _default;