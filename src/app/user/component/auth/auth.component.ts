import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {trigger, state, style, transition, animate} from '@angular/animations';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthService} from "./auth.service";
import {ToastService} from "../../../utility/service/toast.service";
import {Subscription} from "rxjs";

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
  providers: [ToastService]
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


  subscription: any;


  constructor(private store: Store<{ activatedRoute: { activatedRoute: string } }>,
              public authService: AuthService, private toastService: ToastService) {

    setTimeout(() => {
      this.animationChange = 'change'
    }, 5000)


  }


  ngOnInit(): void {
    let formObj: any;
    const authForm = new AuthForm();


   this.subscription = this.store.select('activatedRoute')
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
      this.formDisable = true;
      const formValue = this.formGroup.value;



      this.authService.submitToServer(this.fragment, formValue)
        .then((result: any) => {
          switch (this.fragment) {
            case 'Login':
              if (!result.user.emailVerified) {
                this.authService.signOut()
                  .finally(() => {
                    this.toastService.toast({message: 'Please email verify!', position: 'bottom'})
                  });
                return;
              }

              this.authService.isLoggedIn$.subscribe(authResult => console.log(authResult))
              break;

            case 'Register':
              result.user.sendEmailVerification().then((r: string) => {
                this.toastService.toast({message: 'Successfully registered. Please verify  check in spam of your email.', position: 'bottom'})
              }).catch((error: any) => {
                this.toastService.toast({message: error.message.replace('Firebase:', ''), position: 'bottom'})
              }).finally(() => this.formDisable = false);
              break;

            case 'Rest':
              this.toastService.toast({message: 'Successfully password rest link sent. Please check in spam of your email.', position: 'bottom'})
               break;
          }
        })
        .catch(error => {
          this.toastService.toast({message: error.message.replace('Firebase:', ''),
            position: 'bottom'})
         })
        .finally(() => this.formDisable = false);

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

  ionViewDidLeave(){
    this.subscription.unsubscribe()
    console.log('component leaved')
  }

}
