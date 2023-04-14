import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  email: string;
  @ViewChild('myForm') myForm: NgForm;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

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
   * `async onSubmit() {` is a method that is triggered when the submit 
   * button of the contact form is clicked. It disables the form fields and 
   * the submit button, creates a new FormData object with the values of the form 
   * fields, sends a POST request to a PHP script on the server with the FormData 
   * object as the request body, and waits for the response. Once the response is 
   * received, it logs the response to the console and enables the form fields and
   * the submit button again. The `async` keyword indicates that this method 
   * contains asynchronous code and will return a Promise.
   * 
   * @async
   * @method
   * @name onSubmit
   * @kind method
   * @memberof ContactFormComponent
   * @returns {Promise<void>}
   */
  async onSubmit(myForm: NgForm) {
    let nameField = this.nameField.nativeElement;
    let emailInput = this.emailInput.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailInput.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailInput.value);
    fd.append('message', messageField.value);

    let response = await fetch('https://nikola-badjevic.developerakademie.net/send_mail/send_mail.php',
    {
      method: 'POST',
      body: fd
    });

    let result= await response.text();
    console.log(result);

    nameField.disabled = false;
    emailInput.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

    myForm.reset();
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
}
