import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  // @ViewChild('myForm') myForm: ElementRef;
  // @ViewChild('nameField') nameField: ElementRef;
  // @ViewChild('emailField') emailField: ElementRef;
  // @ViewChild('messageField') messageField: ElementRef;
  // @ViewChild('sendButton') sendButton: ElementRef;

  // contactForm: FormGroup;

  ngOnInit() {
    // this.contactForm = new FormGroup({
    //   'name': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'message': new FormControl(null),
    // });
    this.displayCheckMark();
    // this.onSubmit();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
    // let nameField = this.nameField.nativeElement;
    // let emailField = this.emailField.nativeElement;
    // let messageField = this.messageField.nativeElement;
    // let sendButton = this.sendButton.nativeElement;
    // nameField.disabled = true;
    // emailField.disabled = true;
    // messageField.disabled = true;
    // sendButton.disabled = true;

    // let fd = new FormData();
    // fd.append('name', nameField.value);
    // fd.append('email', emailField.value);
    // fd.append('message', messageField.value);

    // let response = await fetch('https://nikola-badjevic.developerakademie.net/send_mail/send_mail.php',
    // {
    //   method: 'POST',
    //   body: fd
    // });

    // let result= await response.text();
    // console.log(result);

    // nameField.disabled = false;
    // emailField.disabled = false;
    // messageField.disabled = false;
    // sendButton.disabled = false;
  }

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
