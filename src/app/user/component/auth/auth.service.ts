import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$ : Observable<Boolean>
  isLoggedOut$: Observable<Boolean>

  constructor(private afAuth: AngularFireAuth) {

    this.isLoggedIn$ = afAuth.authState.pipe(map(user => !!user))
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn))

  }


    async submitToServer(fragment: any, formValue: any){

      const email = formValue.email;
      const password = formValue.password;
      const passwordConfirm = formValue.passwordConfirm;
      let resultMessage = null;
      let errorMessage = null


      switch (fragment) {
      case 'Login':
        // errorMessage = 'Please email verify'
        return this.afAuth.signInWithEmailAndPassword(email, password)
      case 'Register':
        // if (password !== passwordConfirm) {
        //   console.log('Password does not match!');
        //   return;
        // }
        // resultMessage = 'Successfully registered. Please verify  check in spam of your email.'
        return this.afAuth.createUserWithEmailAndPassword(email, password)
      case 'Rest':
        // resultMessage = 'Successfully password rest link sent. Please check in spam of your email.'
        return this.afAuth.sendPasswordResetEmail(email)

    }
  }

   signOut() {
   return   this.afAuth.signOut()
  }
}
