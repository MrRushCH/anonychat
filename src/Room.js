import database from "./firebase/firebaseConfig";

class Room {
    constructor() {
        this.rid = this.getRoomId();
    }
    getRoomId() {
        database.ref("rooms/").get().then((res) => {
            res.val().forEach((item) => {
                if(item["memberCount"] < 10) {
                    return item["rid"];
                }
            })
            this.createNewRoom();
        })
    }
    createNewRoom() {
        database.ref("rooms/").get().then((res) => {
            const rid = res.val()[res.val().length-1]["rid"]+1;
            database.ref(`rooms/${rid}`).set({
                rid: rid,
                messages: []
            })
            return rid
        })
    }
}

export default Room;