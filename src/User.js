import config from "./firebase/firebaseConfig";
import firebase from "firebase";

import Room from "./Room";

firebase.initializeApp(config);
const database = firebase.database();

class Client {
    constructor() {
        this.uid = this.createNewUser();

        window.onbeforeunload = () => {
            database.ref("users/").child(this.uid).remove();
        }
    }
    createNewUser() {
        database.ref("users/").limitToLast(1).once("value").then((val) => {
            this.uid = val.val()[0]["uid"]+1;
            database.ref(`users/${this.uid}`).set({
                uid: this.uid,
                rid: this.rid
            })
        })
    }
    createNewRoom() {
        database.ref("rooms/").limitToLast(1).once("value").then((val) => {
            this.rid = val.val()[0]["rid"]+1;
            database.ref(`users/${this.rid}`).set({
                rid: this.rid,
                messages: []
            })
        })
    }
}

export default Client;