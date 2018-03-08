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
var platform_browser_1 = require("@angular/platform-browser");
var ng2_dynamic_dialog_1 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_2 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_3 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_4 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_5 = require("ng2-dynamic-dialog");
var ng2_dynamic_dialog_6 = require("ng2-dynamic-dialog");
var StyledWithHtmlDialogComponent = (function () {
    function StyledWithHtmlDialogComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.defaultHtmlContent = "<br>Material-like dialog with a highly customised style constructed using\n        'Ng2DynamicDialogStyle'.<br><br>\n\n        Callbacks are also used for the all three buttons to alter the contents on the fly.  This is\n        provided by specifying dialog-level callbacks in 'Ng2DynamicDialogCallbacks'.<br><br>\n\n        The ability to close the dialog by clicking outside the dialog has also been disabled\n        using 'Ng2DynamicDialogBehaviour'";
        this.switchedToHtmlContent = "<br>Dynamic content is presented by showing the\n        dialog again with different content.<br><br>\n\n        This dialog also uses general and individual button layouts to specify the size,\n        location and style of the buttons available.<br><br>\n\n        This is all done with 'Ng2DynamicDialogStyle'";
    }
    StyledWithHtmlDialogComponent.prototype.ngOnInit = function () {
        this.setDialogStyles();
        this.setDialogCallbacks();
        this.setDialogBehaviour();
    };
    StyledWithHtmlDialogComponent.prototype.show = function () {
        this.showDefaultDialogContent();
    };
    StyledWithHtmlDialogComponent.prototype.showDefaultDialogContent = function () {
        var dialogContent = new ng2_dynamic_dialog_2.Ng2DynamicDialogContent();
        dialogContent.height = 320;
        dialogContent.width = 450;
        dialogContent.title = 'Custom Style Dialog';
        dialogContent.button3 = 'Show More Content';
        dialogContent.safeHtmlContent = this._sanitizer.bypassSecurityTrustHtml(this.defaultHtmlContent);
        this.modalDialog.show(dialogContent);
    };
    StyledWithHtmlDialogComponent.prototype.showSwitchedDialogContent = function () {
        var dialogContent = new ng2_dynamic_dialog_2.Ng2DynamicDialogContent();
        dialogContent.height = 270;
        dialogContent.width = 450;
        dialogContent.title = 'Custom Style Dialog';
        dialogContent.button2 = 'Go Back';
        dialogContent.button1 = 'Exit';
        dialogContent.safeHtmlContent = this._sanitizer.bypassSecurityTrustHtml(this.switchedToHtmlContent);
        this.modalDialog.show(dialogContent);
    };
    StyledWithHtmlDialogComponent.prototype.setDialogStyles = function () {
        var dialogStyle = new ng2_dynamic_dialog_3.Ng2DynamicDialogStyle();
        dialogStyle.background = 'ng2-dynamic-dialog-samples-custom-style-background';
        dialogStyle.dialog = 'ng2-dynamic-dialog-samples-custom-style-dialog';
        dialogStyle.title = 'ng2-dynamic-dialog-samples-custom-style-title';
        dialogStyle.buttonClose.image = 'assets/close.png';
        dialogStyle.button.general.idle = 'ng2-dynamic-dialog-samples-custom-style-button';
        dialogStyle.button.general.hover = 'ng2-dynamic-dialog-samples-custom-style-button:hover';
        dialogStyle.button.individial[0].idle = 'ng2-dynamic-dialog-samples-custom-style-button-0';
        dialogStyle.button.individial[1].idle = 'ng2-dynamic-dialog-samples-custom-style-button-1';
        this.modalDialog.setStyle(dialogStyle);
    };
    StyledWithHtmlDialogComponent.prototype.setDialogCallbacks = function () {
        var _this = this;
        var dialogCallbacks = new ng2_dynamic_dialog_4.Ng2DynamicDialogCallbacks();
        dialogCallbacks.onButton1Clicked = function () { return _this.onButton1Selected(); };
        dialogCallbacks.onButton2Clicked = function () { return _this.onButton2Selected(); };
        dialogCallbacks.onButton3Clicked = function () { return _this.onButton3Selected(); };
        this.modalDialog.setCallbacks(dialogCallbacks);
    };
    StyledWithHtmlDialogComponent.prototype.setDialogBehaviour = function () {
        var dialogBehaviour = new ng2_dynamic_dialog_5.Ng2DynamicDialogBehaviour();
        dialogBehaviour.exitOnOffDialogClick = false;
        this.modalDialog.setBehaviour(dialogBehaviour);
    };
    StyledWithHtmlDialogComponent.prototype.onButton1Selected = function () {
        this.modalDialog.close();
        return ng2_dynamic_dialog_6.Ng2DynamicDialogCallbackResult.None;
    };
    StyledWithHtmlDialogComponent.prototype.onButton2Selected = function () {
        this.showDefaultDialogContent();
        return ng2_dynamic_dialog_6.Ng2DynamicDialogCallbackResult.None;
    };
    StyledWithHtmlDialogComponent.prototype.onButton3Selected = function () {
        this.showSwitchedDialogContent();
        return ng2_dynamic_dialog_6.Ng2DynamicDialogCallbackResult.None;
    };
    __decorate([
        core_1.ViewChild(ng2_dynamic_dialog_1.Ng2DynamicDialogComponent),
        __metadata("design:type", typeof (_a = typeof ng2_dynamic_dialog_1.Ng2DynamicDialogComponent !== "undefined" && ng2_dynamic_dialog_1.Ng2DynamicDialogComponent) === "function" && _a || Object)
    ], StyledWithHtmlDialogComponent.prototype, "modalDialog", void 0);
    StyledWithHtmlDialogComponent = __decorate([
        core_1.Component({
            moduleId: __filename,
            selector: 'styled-with-html-dialog',
            templateUrl: 'styled-with-html-dialog.component.html',
            styleUrls: ['styled-with-html-dialog.component.css'],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _b || Object])
    ], StyledWithHtmlDialogComponent);
    return StyledWithHtmlDialogComponent;
    var _a, _b;
}());
exports.StyledWithHtmlDialogComponent = StyledWithHtmlDialogComponent;
//# sourceMappingURL=styled-with-html-dialog.component.js.map