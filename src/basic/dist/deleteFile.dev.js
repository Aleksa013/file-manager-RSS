"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFile = void 0;

var _nodeFs = require("node:fs");

var _nodeProcess = require("node:process");

var _utils = require("../utils.js");

var deleteFile = function deleteFile(path) {
  return regeneratorRuntime.async(function deleteFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          (0, _nodeFs.stat)(path, {}, function (err, stats) {
            if (stats.isFile()) {
              (0, _nodeFs.rm)(path, function (err) {
                throw new Error('Operation failed');
              });
              (0, _utils.getLocation)();
            } else {
              throw new Error('Invalid input');
            }
          });
          _context.next = 7;
          break;

        case 4:
          _context.prev = 4;
          _context.t0 = _context["catch"](0);
          throw new Error('Operation failed');

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 4]]);
};

exports.deleteFile = deleteFile;