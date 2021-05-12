import database from "./firebase/firebaseConfig";
import Room from "./Room";

class Client {
    constructor() {
        this.room = new Room();
        this.uid = this.createNewUser();

        window.onbeforeunload = () => {
            database.ref("users/").child(this.uid).remove();
        }
    }
    createNewUser() {
        database.ref("users/").get().then((res) => {
            const uid = res.val()[res.val().length-1]["uid"]+1;
            database.ref(`users/${uid}`).set({
                uid: uid,
                rid: this.room.rid
            })
            return uid;
        })
    }
}

export default Client;