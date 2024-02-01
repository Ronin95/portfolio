import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
// import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      to_name: 'Nikola',
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  /**
   * `ngOnInit()` is a lifecycle hook method in Angular that is called after 
   * the component has been initialized. In this code, `ngOnInit()` is used to call
   * the `displayCheckMark()` method, which adds an event listener to the send button 
   * of the contact form. When the button is clicked, it displays a check mark image for 3 
   * seconds to indicate that the message has been sent successfully.
   * 
   * @method
   * @name ngOnInit
   * @kind method
   * @memberof ContactFormComponent
   * @returns {void}
   */
  ngOnInit() {
    this.displayCheckMark();
  }

  /**
   * `displayCheckMark()` is a method that adds an event listener to the send button of the contact form.
   * When the button is clicked, it displays a check mark image for 
   * 3 seconds to indicate that the message has been sent successfully. 
   * It does this by adding and removing a CSS class to the parent element of 
   * the check mark image.
   * 
   * @method
   * @name displayCheckMark
   * @kind method
   * @memberof ContactFormComponent
   * @returns {void}
   */
  displayCheckMark() {
    const showImageBtn = document.getElementById('sendButton') as HTMLButtonElement;
    const imageToDisplay = document.getElementById('check-marker') as HTMLElement;

    showImageBtn.addEventListener('click', () => {
        imageToDisplay.parentElement?.classList.add('check-marker-visible');
        setTimeout(() => {
            imageToDisplay.parentElement?.classList.remove('check-marker-visible');
        }, 3000);
    });
  }

  async sendMail() {
    emailjs.init('R3op_yk9Ll1B4Rleb');
    try {
      await emailjs.send("service_vur8ckj", "template_s386prl", {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_mail: this.form.value.from_email,
        message: this.form.value.message,
      });
      alert('Message sent.');
      this.form.reset();
    } catch (error) {
      console.error('Failed to send message', error);
      alert('Failed to send message.');
    }
  }
}
