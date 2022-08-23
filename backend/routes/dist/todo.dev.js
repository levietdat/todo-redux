"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _todo = require("../controller/todo.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", _todo.getTodo);
router.get("/:slug", _todo.getTodo);
router.post("/", _todo.createTodo);
router.put("/:slug", _todo.updateTodo);
router["delete"]("/:id", _todo.deleteTodo);
var _default = router;
exports["default"] = _default;