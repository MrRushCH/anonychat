import database from "./firebase/firebaseConfig";
import Room from "./Room";

async function User() {
    const createNewUser = async () => {
        return await new Promise((resolve, reject) => {
            database.ref("users/").get().then((res) => {
                const uid = res.val()[res.val().length-1]["uid"]+1;
                resolve(setUser(uid));
            }).catch((err) => {
                reject(err)
            })
        })
    }
    const setUser = async (uid) => {
        return await new Promise((resolve, reject) => {
            database.ref(`users/${uid}`).set({
                uid: uid,
                rid: room.rid
            }).then(() => {
                resolve(uid);
            }).catch((err) => {
                reject(err)
            })
        })
    }
    const room = await Room();
    const uid = await createNewUser();
    return {
        room: room,
        uid: uid
    }
}

export default User;