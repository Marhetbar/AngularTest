"use strict";
var AuthorService = (function () {
    function AuthorService() {
    }
    AuthorService.prototype.getAuthors = function () {
        return ["Bob", "Frank", "Jill", "Kaitlyn"];
    };
    return AuthorService;
}());
exports.AuthorService = AuthorService;
//# sourceMappingURL=authors.service.js.map