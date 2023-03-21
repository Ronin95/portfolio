import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('myForm') myForm: any;

  contactForm: FormGroup;

  ngOnInit() {
    // this.contactForm = new FormGroup({
    //   'name': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'message': new FormControl(null),
    // });
  }

  onSubmit() {
    console.log(this.contactForm);
    this.contactForm.reset();

    // action="https://nikola-badjevic.developerakademie.net/send_mail/send_mail.php" method="post"
  }
}
