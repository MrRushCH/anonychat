import database from "./firebase/firebaseConfig";

async function Room() {
    const getRoomId = async () => {
        const request = database.ref("rooms/").get();
        return await new Promise((resolve, reject) => {
            request.then((res) => {
                res.val().forEach((item) => {
                    if(item["memberCount"] < 10) {
                        resolve(item["rid"]);
                    }
                })
                resolve(createNewRoom());
            }).catch((err) => {
                reject(err)
            })
        })
    }
    const createNewRoom = async () => {
        const request = database.ref("/rooms").get();
        return await new Promise((resolve, reject) => {
            request.then((res) => {
                const rid = res.val()[res.val().length-1]["rid"]+1;
                resolve(setRoom(rid));
            }).catch((err) => {
                reject(err)
            })
        })
    }
    const setRoom = async (rid) => {
        return await new Promise((resolve, reject) => {
            database.ref(`rooms/${rid}`).set({
                rid: rid,
                messages: []
            }).then(() => {
                resolve(rid);
            }).catch((err) => {
                reject(err)
            })
        })
    }
    const rid = await getRoomId();
    return {
        rid: rid
    }
}

export default Room;