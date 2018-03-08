"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_dynamic_dialog_1 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_2 = require("ng2-dynamic-dialog");
var LockedContentComponent = (function () {
    function LockedContentComponent() {
        this.email = null;
        this.password = null;
        this.secondsToUnlock = 0;
        this.setIntervalHandle = null;
        this.enableEmailEntry = true;
        this.enablePasswordEntry = true;
    }
    LockedContentComponent.prototype.getDialogComponentCallbacks = function () {
        var _this = this;
        var componentCallbacks = new ng2_dynamic_dialog_1.Ng2DynamicDialogCallbacks();
        componentCallbacks.onButton1Clicked = function () { return _this.onLockSelected(); };
        componentCallbacks.onButton2Clicked = function (nextOwner) { return _this.onCloseSelected(nextOwner); };
        componentCallbacks.onContentLocking = function () { return _this.onContentLocking(); };
        componentCallbacks.onContentLocked = function () { return _this.onContentLocked(); };
        componentCallbacks.onContentUnlocked = function () { return _this.onContentUnlocked(); };
        return componentCallbacks;
    };
    LockedContentComponent.prototype.setDialogComponent = function (dialogComponent) {
        this.dialogComponent = dialogComponent;
    };
    LockedContentComponent.prototype.onLockSelected = function () {
        this.dialogComponent.lock(false);
        return ng2_dynamic_dialog_2.Ng2DynamicDialogCallbackResult.None;
    };
    LockedContentComponent.prototype.onCloseSelected = function (nextOwner) {
        this.dialogComponent.close();
        return ng2_dynamic_dialog_2.Ng2DynamicDialogCallbackResult.None;
    };
    LockedContentComponent.prototype.onContentLocking = function () {
        this.enableEmailEntry = false;
        this.enablePasswordEntry = false;
        return ng2_dynamic_dialog_2.Ng2DynamicDialogCallbackResult.None;
    };
    LockedContentComponent.prototype.onContentLocked = function () {
        var _this = this;
        this.secondsToUnlock = 3;
        this.setIntervalHandle = setInterval(function () {
            _this.secondsToUnlock -= 1;
            if (_this.secondsToUnlock === 0) {
                _this.dialogComponent.unlock(false);
                clearInterval(_this.setIntervalHandle);
            }
        }, 1000);
        return ng2_dynamic_dialog_2.Ng2DynamicDialogCallbackResult.None;
    };
    LockedContentComponent.prototype.onContentUnlocked = function () {
        this.enableEmailEntry = true;
        this.enablePasswordEntry = true;
        return ng2_dynamic_dialog_2.Ng2DynamicDialogCallbackResult.None;
    };
    LockedContentComponent = __decorate([
        core_1.Component({
            moduleId: __filename,
            selector: 'locked-content',
            templateUrl: 'locked-content.component.html',
            styleUrls: ['locked-content.component.css'],
        })
    ], LockedContentComponent);
    return LockedContentComponent;
}());
exports.LockedContentComponent = LockedContentComponent;
//# sourceMappingURL=locked-content.component.js.map