import database from "./firebase/firebaseConfig";
function Dispose(user) {
    // Delete User from Firebase
    database.ref(`/users/${user.uid}`).remove();

    // Adjust MemberCount
    const ref = database.ref(`/rooms/${user.room.rid}/memberCount`);
    ref.get().then((res) => {
        ref.set(res.val()-1);
        // Remove room if memberCount == 0
        if(res.val()-1 == 0) {
            database.ref(`/rooms/${user.room.rid}`).remove();
        }
    })


}

export default Dispose;