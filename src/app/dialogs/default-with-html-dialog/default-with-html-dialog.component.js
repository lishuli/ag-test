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
var DefaultWithHtmlDialogComponent = (function () {
    function DefaultWithHtmlDialogComponent() {
    }
    DefaultWithHtmlDialogComponent.prototype.show = function () {
        var dialogContent = new ng2_dynamic_dialog_2.Ng2DynamicDialogContent();
        dialogContent.title = 'Default Style Dialog';
        dialogContent.unsafeHtmlContent = "<center>A dialog using out-of-the-box styles.<br><br>\n        The content is specified using 'Ng2DynamicDialogContent'.<br><br>\n\n        By default there is no exit button, and the user needs to click outside the dialog to close it.<br><br><br>\n\n        Note that raw HTML will be sanitized by default.</center>";
        dialogContent.width = 450;
        dialogContent.height = 250;
        this.modalDialog.show(dialogContent);
    };
    __decorate([
        core_1.ViewChild(ng2_dynamic_dialog_1.Ng2DynamicDialogComponent),
        __metadata("design:type", typeof (_a = typeof ng2_dynamic_dialog_1.Ng2DynamicDialogComponent !== "undefined" && ng2_dynamic_dialog_1.Ng2DynamicDialogComponent) === "function" && _a || Object)
    ], DefaultWithHtmlDialogComponent.prototype, "modalDialog", void 0);
    DefaultWithHtmlDialogComponent = __decorate([
        core_1.Component({
            moduleId: __filename,
            selector: 'default-with-html-dialog',
            templateUrl: 'default-with-html-dialog.component.html',
            styleUrls: ['default-with-html-dialog.component.css'],
        })
    ], DefaultWithHtmlDialogComponent);
    return DefaultWithHtmlDialogComponent;
    var _a;
}());
exports.DefaultWithHtmlDialogComponent = DefaultWithHtmlDialogComponent;
//# sourceMappingURL=default-with-html-dialog.component.js.map