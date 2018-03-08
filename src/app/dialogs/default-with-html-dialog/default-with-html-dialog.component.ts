import { Component, ViewChild } from '@angular/core';

import { Ng2DynamicDialogComponent } from 'ng2-dynamic-dialog';
import { Ng2DynamicDialogContent } from 'ng2-dynamic-dialog';
import { Ng2DynamicDialogStyle } from 'ng2-dynamic-dialog';

@Component({

    selector: 'default-with-html-dialog',

    templateUrl: 'default-with-html-dialog.component.html',
    styleUrls: ['default-with-html-dialog.component.css'],
})
export class DefaultWithHtmlDialogComponent {

    @ViewChild(Ng2DynamicDialogComponent)
    private modalDialog: Ng2DynamicDialogComponent;

    // Shows the dialog
    show(contentComp) {

        let dialogContent = new Ng2DynamicDialogContent();
        let dialogStyle = new Ng2DynamicDialogStyle();

        dialogContent.title = '默认标题';
        dialogContent.unsafeHtmlContent = `
        <center>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</center>`;
        // dialogContent.width = 250;
        dialogContent.height = 250;
        dialogContent.button1 = 'Log In';
        dialogContent.button2 = 'Sign Up';
        // dialogContent.button3 = 'button3';
        dialogContent.componentContent = contentComp;

        dialogStyle.dialog = 'ng2-dynamic-dialog-samples-custom-component-dialog';
        dialogStyle.background = 'ng2-dynamic-dialog-samples-custom-style-background'; // background设置的是dialog的遮罩的父元素，从页面看，长宽是0；
        dialogStyle.title = 'ng2-dynamic-dialog-samples-custom-style-title';
        // dialogStyle.buttonClose.image = 'assets/close.png';
        // dialogStyle.buttonClose.style = 'width: 30px;';
        dialogStyle.buttonClose = {
          style: 'background-color: red;',
          image: 'assets/close.png'
        };
        dialogStyle.button.general.idle = 'ng2-dynamic-dialog-samples-custom-style-button';
        dialogStyle.button.general.hover = 'ng2-dynamic-dialog-samples-custom-style-button:hover';
        dialogStyle.button.individial[0].idle = 'ng2-dynamic-dialog-samples-custom-style-button-0';
        dialogStyle.button.individial[1].idle = 'ng2-dynamic-dialog-samples-custom-style-button-1';

        this.modalDialog.show(dialogContent);
        this.modalDialog.setStyle(dialogStyle);
    }
}
