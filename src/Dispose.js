import database from "./firebase/firebaseConfig";
async function Dispose(user) {
    const removeUser = async () => {
        database.ref(`/users/${user.uid}`).remove();
        database.ref(`/rooms/${user.room.rid}`).set(database.ref(`/rooms/${user.room.rid}`).get()-1);
    }
    removeUser();
}

export default Dispose;