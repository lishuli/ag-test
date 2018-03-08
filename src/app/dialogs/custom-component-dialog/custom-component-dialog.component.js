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
var ng2_dynamic_dialog_5 = require("ng2-dynamic-dialog");
var user_details_service_1 = require("./content/user-details/user-details.service");
var login_component_1 = require("./content/login/login.component");
var signup_component_1 = require("./content/signup/signup.component");
var CustomComponentDialogComponent = (function () {
    function CustomComponentDialogComponent(userDetails) {
        this.userDetails = userDetails;
    }
    CustomComponentDialogComponent.prototype.ngOnInit = function () {
        this.setDialogStyles();
        this.setDialogCallbacks();
    };
    CustomComponentDialogComponent.prototype.requestUserSignIn = function () {
        this.userDetails.clear();
        var dialogContent = new ng2_dynamic_dialog_2.Ng2DynamicDialogContent();
        dialogContent.title = 'Log In or Sign Up';
        dialogContent.button1 = 'Log In';
        dialogContent.button2 = 'Sign Up';
        dialogContent.height = 320;
        dialogContent.width = 300;
        dialogContent.componentContent = login_component_1.LogInComponent;
        this.modalDialog.show(dialogContent);
    };
    CustomComponentDialogComponent.prototype.onSignUpSelected = function () {
        var dialogContent = new ng2_dynamic_dialog_2.Ng2DynamicDialogContent();
        dialogContent.title = 'Sign Up for an Account';
        dialogContent.button3 = 'Sign Up';
        dialogContent.height = 670;
        dialogContent.width = 430;
        dialogContent.componentContent = signup_component_1.SignUpComponent;
        this.modalDialog.show(dialogContent);
    };
    CustomComponentDialogComponent.prototype.setDialogStyles = function () {
        var dialogStyle = new ng2_dynamic_dialog_3.Ng2DynamicDialogStyle();
        dialogStyle.dialog = 'ng2-dynamic-dialog-samples-custom-component-dialog';
        dialogStyle.title = 'ng2-dynamic-dialog-samples-custom-component-title';
        dialogStyle.buttonClose.image = 'assets/close.png';
        dialogStyle.button.general.idle = 'ng2-dynamic-dialog-samples-custom-component-button';
        dialogStyle.button.general.hover = 'ng2-dynamic-dialog-samples-custom-component-button:hover';
        this.modalDialog.setStyle(dialogStyle);
    };
    CustomComponentDialogComponent.prototype.setDialogCallbacks = function () {
        var _this = this;
        var dialogCallbacks = new ng2_dynamic_dialog_4.Ng2DynamicDialogCallbacks();
        dialogCallbacks.onButton1Clicked = function () { return _this.onLogInSelected(); };
        dialogCallbacks.onButton2Clicked = function () { return _this.onSignInNeededSelected(); };
        dialogCallbacks.onButton3Clicked = function () { return _this.onSignInSelcted(); };
        this.modalDialog.setCallbacks(dialogCallbacks);
    };
    CustomComponentDialogComponent.prototype.guessUsernameFromEmail = function () {
        if (this.userDetails.email !== null) {
            var emailSplit = this.userDetails.email.split('@');
            if (emailSplit.length === 2) {
                var usernameSplit = emailSplit[0].split('.');
                if (usernameSplit.length === 2) {
                    this.userDetails.firstName = usernameSplit[0];
                    this.userDetails.lastName = usernameSplit[1];
                    this.userDetails.firstName = this.userDetails.firstName[0].toUpperCase() + this.userDetails.firstName.substring(1);
                    this.userDetails.lastName = this.userDetails.lastName[0].toUpperCase() + this.userDetails.lastName.substring(1);
                }
            }
        }
    };
    CustomComponentDialogComponent.prototype.onLogInSelected = function () {
        this.modalDialog.close();
        return ng2_dynamic_dialog_5.Ng2DynamicDialogCallbackResult.None;
    };
    CustomComponentDialogComponent.prototype.onSignInNeededSelected = function () {
        this.guessUsernameFromEmail();
        this.onSignUpSelected();
        return ng2_dynamic_dialog_5.Ng2DynamicDialogCallbackResult.None;
    };
    CustomComponentDialogComponent.prototype.onSignInSelcted = function () {
        this.modalDialog.close();
        return ng2_dynamic_dialog_5.Ng2DynamicDialogCallbackResult.None;
    };
    __decorate([
        core_1.ViewChild(ng2_dynamic_dialog_1.Ng2DynamicDialogComponent),
        __metadata("design:type", typeof (_a = typeof ng2_dynamic_dialog_1.Ng2DynamicDialogComponent !== "undefined" && ng2_dynamic_dialog_1.Ng2DynamicDialogComponent) === "function" && _a || Object)
    ], CustomComponentDialogComponent.prototype, "modalDialog", void 0);
    CustomComponentDialogComponent = __decorate([
        core_1.Component({
            moduleId: __filename,
            selector: 'custom-component-dialog',
            templateUrl: 'custom-component-dialog.component.html',
            styleUrls: ['custom-component-dialog.component.css'],
        }),
        __metadata("design:paramtypes", [user_details_service_1.UserDetailsService])
    ], CustomComponentDialogComponent);
    return CustomComponentDialogComponent;
    var _a;
}());
exports.CustomComponentDialogComponent = CustomComponentDialogComponent;
//# sourceMappingURL=custom-component-dialog.component.js.map