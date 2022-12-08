import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {trigger, state, style, transition, animate} from '@angular/animations';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Store} from "@ngrx/store";

class AuthForm {
  forgot = {
    email: new FormControl(null, [Validators.required, Validators.email]),
  };

  login = {
    ...this.forgot,
    password: new FormControl(null, [Validators.required])
  };

  register = {
    name: new FormControl(null, Validators.required),
    ...this.login,
    passwordConfirm: new FormControl(null, Validators.required),
  };

}


@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterModule],
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('formState' ,
      [
      state('normal', style({
        background: 'blue'
      })),
      state('change', style({
        background: 'red',
        transform: 'translateX(100px)'
      })),
      transition('normal => change', animate(500))
    ])
  ]
})

export class AuthComponent implements OnInit {
  formGroup: FormGroup = new FormGroup<any>({})
  fragment = 'Login';
  state = 'normal';
  formDisable = false;
  showAuth = false
  authHeight = '50vh'
  authTitle = 'Authentication'

  authFormAnimation = 'normal'

  animationChange = 'normal'


  constructor(private store: Store<{ activatedRoute: { activatedRoute: string } }>) {

    setTimeout(() => {
      this.animationChange = 'change'
    }, 5000)


  }

  // toastHelper = (message: string, position: 'top' | 'bottom' | 'middle', cancelBtnText: string, hasBtn?: boolean) => {
  //   this.toastService.toastStart(message, position, cancelBtnText, hasBtn).then()
  // };


  ngOnInit(): void {
    let formObj: any;
    const authForm = new AuthForm();


    this.store.select('activatedRoute')
      .subscribe(fragment => {
        console.log(fragment)

        this.fragment = fragment.activatedRoute


        switch (this.fragment) {
          case 'Register':
            formObj = authForm.register;
            break;
          case 'Rest':
            formObj = authForm.forgot;
            break;
          default:
            formObj = authForm.login;
        }

        this.formGroup = new FormGroup(formObj);

        console.log(this.formGroup)


      })


    // setTimeout(() => {
    //   this.state = 'animated';
    // });
    // this.toastService.toastEnd().then()
  }

  async authenticationSubmitting() {
    //
    //   await this.toastService.toastEnd().then()
    //
    //   this.formDisable = true;
    //   const formValue = this.formGroup.value;
    //   const email = formValue.email;
    //   const password = formValue.password;
    //   const passwordConfirm = formValue.passwordConfirm;
    //   let resultMessage = null;
    //   let errorMessage = null

    //   const submitToServer = () => {
    //     switch (this.fragment) {
    //       case 'Login':
    //         errorMessage = 'Please email verify'
    //         return this.afa.signInWithEmailAndPassword(email, password)
    //       case 'Register':
    //         if (password !== passwordConfirm) {
    //           console.log('Password does not match!');
    //           return;
    //         }
    //         resultMessage = 'Successfully registered. Please verify  check in spam of your email.'
    //         return this.afa.createUserWithEmailAndPassword(email, password)
    //       case 'Rest':
    //         resultMessage = 'Successfully password rest link sent. Please check in spam of your email.'
    //         return this.afa.sendPasswordResetEmail(email)
    //
    //     }
    //   }
    //
    //   submitToServer()
    //     .then(result => {
    //       switch (this.fragment) {
    //         case 'Login':
    //           if (!result.user.emailVerified) {
    //             this.afa.signOut().then(t => {
    //               this.toastHelper(errorMessage, 'bottom', 'Close', true)
    //             });
    //             return;
    //           }
    //           break;
    //
    //         case 'Register':
    //           result.user.sendEmailVerification().then(r => {
    //             this.toastHelper(resultMessage, 'bottom', 'Close', true)
    //           }).catch(error => {
    //             this.toastHelper(error.message.replace('Firebase:', ''), 'bottom', 'Close', true)
    //           })
    //             .finally(() => this.formDisable = false);
    //           break;
    //
    //         case 'Rest':
    //           this.toastHelper(resultMessage, 'bottom', 'Close', true)
    //           break;
    //       }
    //     })
    //     .catch(error => {
    //       this.toastHelper(error.message.replace('Firebase:', ''), 'bottom', 'Close', true)
    //     })
    //     .finally(() => this.formDisable = false);
    //
    //
  }


  showAuthButton() {

    this.authFormAnimation = this.authFormAnimation === 'normal' ? 'show' : 'normal'

    console.log(this.authFormAnimation)

    this.showAuth = !this.showAuth

    if (this.showAuth && this.fragment === 'Login') {
      this.authTitle = 'Login'
      this.authHeight = '40vh'
    }

    if (this.showAuth && this.fragment === 'Register') {
      this.authTitle = 'Register'
      this.authHeight = '70vh'
    }

    if (this.showAuth && this.fragment === 'Rest') {
      this.authTitle = 'Rest'
      this.authHeight = '20'
    }

    if (!this.showAuth) {
      this.authTitle = 'Authentication'
      // this.authHeight = '12vh'
    }

  }

}
