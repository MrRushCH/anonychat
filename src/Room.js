import firebase from "firebase";
import config from "./firebase/firebaseConfig";

firebase.initializeApp(config);
const database = firebase.database();

class Room {
    constructor() {
        this.rid = this.getRoomId();
    }
    getRoomId() {
        database.ref("rooms/").limitToLast(1).once("value").then((val) => {
            if(val.val()[0]["memberCount"] > 10) {
                this.createNewRoom();
            } else {
                this.rid = val.val()[0]["rid"];
                this.messages = val.val()[0]["messages"];
                database.ref(`rooms/${this.rid}/memberCount`).set(database.ref(`rooms/${this.rid}/memberCount`).get()+1)
            }
        })
    }
    createNewRoom() {
        database.ref("rooms/").limitToLast(1).once("value").then((val) => {
            const rid = val.val()[0]["rid"]+1;
            database.ref(`rooms/${rid}`).set({
                rid: rid,
                messages: []
            })
        })
    }
}