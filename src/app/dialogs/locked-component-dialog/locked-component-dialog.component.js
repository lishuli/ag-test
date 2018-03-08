"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_dynamic_dialog_1 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_2 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_3 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_4 = require("ng2-dynamic-dialog");
var locked_content_component_1 = require("./locked-content/locked-content.component");
var LockedComponentDialogComponent = (function () {
    function LockedComponentDialogComponent() {
    }
    LockedComponentDialogComponent.prototype.ngOnInit = function () {
        this.setDialogStyles();
        this.setDialogCallbacks();
    };
    LockedComponentDialogComponent.prototype.show = function () {
        var dialogContent = new ng2_dynamic_dialog_2.Ng2DynamicDialogContent();
        dialogContent.title = 'Locking Dialogs Manually';
        dialogContent.button1 = 'Lock Me';
        dialogContent.button2 = 'Close Me';
        dialogContent.height = 410;
        dialogContent.width = 430;
        dialogContent.componentContent = locked_content_component_1.LockedContentComponent;
        this.modalDialog.show(dialogContent);
    };
    LockedComponentDialogComponent.prototype.setDialogStyles = function () {
        var dialogStyle = new ng2_dynamic_dialog_3.Ng2DynamicDialogStyle();
        dialogStyle.background = 'ng2-dynamic-dialog-samples-locked-component-background';
        dialogStyle.dialog = 'ng2-dynamic-dialog-samples-locked-component-dialog';
        dialogStyle.title = 'ng2-dynamic-dialog-samples-locked-component-title';
        dialogStyle.buttonClose.image = 'assets/close.png';
        dialogStyle.iconLocked.image = 'assets/locked-icon.gif';
        dialogStyle.button.general.idle = 'ng2-dynamic-dialog-samples-locked-component-button';
        dialogStyle.button.general.hover = 'ng2-dynamic-dialog-samples-locked-component-button:hover';
        this.modalDialog.setStyle(dialogStyle);
    };
    LockedComponentDialogComponent.prototype.setDialogCallbacks = function () {
        var dialogCallbacks = new ng2_dynamic_dialog_4.Ng2DynamicDialogCallbacks();
        dialogCallbacks.owner = this;
        this.modalDialog.setCallbacks(dialogCallbacks);
    };
    __decorate([
        core_1.ViewChild(ng2_dynamic_dialog_1.Ng2DynamicDialogComponent),
        __metadata("design:type", typeof (_a = typeof ng2_dynamic_dialog_1.Ng2DynamicDialogComponent !== "undefined" && ng2_dynamic_dialog_1.Ng2DynamicDialogComponent) === "function" && _a || Object)
    ], LockedComponentDialogComponent.prototype, "modalDialog", void 0);
    LockedComponentDialogComponent = __decorate([
        core_1.Component({
            moduleId: __filename,
            selector: 'locked-component-dialog',
            templateUrl: 'locked-component-dialog.component.html',
            styleUrls: ['locked-component-dialog.component.css'],
        })
    ], LockedComponentDialogComponent);
    return LockedComponentDialogComponent;
    var _a;
}());
exports.LockedComponentDialogComponent = LockedComponentDialogComponent;
//# sourceMappingURL=locked-component-dialog.component.js.map