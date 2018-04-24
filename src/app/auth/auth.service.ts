import * as firebase from 'firebase';

export class AuthService {

    token: string;

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

    getToken() {
        return firebase.auth().currentUser.getIdToken()
    }
}