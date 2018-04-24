import * as firebase from 'firebase';

export class AuthService {

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
}