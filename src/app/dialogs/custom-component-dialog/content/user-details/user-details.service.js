"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserDetailsService = (function () {
    function UserDetailsService() {
        this.email = null;
        this.password = null;
        this.confirmedPassword = null;
        this.firstName = null;
        this.lastName = null;
    }
    UserDetailsService.prototype.clear = function () {
        this.email = null;
        this.password = null;
        this.confirmedPassword = null;
        this.firstName = null;
        this.lastName = null;
    };
    UserDetailsService = __decorate([
        core_1.Injectable()
    ], UserDetailsService);
    return UserDetailsService;
}());
exports.UserDetailsService = UserDetailsService;
//# sourceMappingURL=user-details.service.js.map