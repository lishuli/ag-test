import { Component } from '@angular/core';

import { UserDetailsService } from '../user-details/user-details.service';

@Component({

    selector: 'custom-component-dialog-signup-content',

    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
})
export class SignUpComponent {

    // Constructor
    constructor(private userDetails: UserDetailsService) {
    }
}
