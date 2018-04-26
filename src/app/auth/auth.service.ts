import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((resolve) => {
                console.log('User Signed Up');
            })
            .catch(
                error => {
                    console.log(error)
                }
            )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        );
                        return this.token;
                })
            .catch(
                error => {
                    console.log('error')
                }
            )
    }

    logOut() {
        firebase.auth().signOut()
        this.token = null;
    }

    getToken() {
        return firebase.auth().currentUser.getIdToken()
    }

    isAuthenticated() {
        return this.token != null;
    }
}