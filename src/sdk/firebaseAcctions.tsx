import { firestore } from '../services/firebase';
import { doc, setDoc, collection, where, query } from 'firebase/firestore';
// import { auth, GoogleAuthProvider, signInWithPopup } from '../services/firebase';
import { getFirestore, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const db = getFirestore();

export const getAllTeachers = async () => {
  const teachersCollection = collection(db, "teachers");
  try {
    const teachersSnapshot = await getDocs(teachersCollection);
    const teachersList = teachersSnapshot.docs.map(doc => doc.data());
    return teachersList;
  } catch (error) {
    console.error("Error fetching teachers: ", error);
    toast('Error fetching teachers!', { type: 'error', position: 'top-left' });
    return [];
  }
};

export const getAllStudents = async () => {
  const usersCollection = collection(db, "students");
  try {
    const adminsSnapshot = await getDocs(usersCollection);
    const adminsList = adminsSnapshot.docs.map(doc => doc.data());
    return adminsList;
  } catch (error) {
    console.error("Error fetching users: ", error);
    toast('Error fetching students!', { type: 'error', position: 'top-left' });
    return [];
  }
};

// export const loginWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;

//     // Check if the user's email exists in the Firestore collection
//     const usersCollection = collection(firestore, "users");
//     const q = query(usersCollection, where("email", "==", user.email));
//     const querySnapshot = await getDocs(q);

//     if (!querySnapshot.empty) {
//       toast(`Welcome ${user.displayName}`, { type: 'success', position: 'top-left' });
//     } else {
//       toast('No account found with this email. Please register first.', { type: 'info', position: 'top-left' });
//     }
//   } catch (error) {
//     console.error(error);
//     toast('Failed to log in with Google', { type: 'error', position: 'top-left' });
//   }
// };

export async function loginUser(userData: { name: string; id: string }) {
  const usersCollection = collection(firestore, "users");
  const q = query(usersCollection, where("name", "==", userData.name), where("id", "==", userData.id));
  try {
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      if (userDoc.exists()) {
        toast('you can go next!', { type: 'success', position: 'top-left' });
      } else {
        toast('no user yet!', { type: 'info', position: 'top-left' });
      }
    } else {
      toast('no user yet!', { type: 'info', position: 'top-left' });
    }
  } catch (error) {
    console.log(error);
    toast('Error checking user existence!', { type: 'error', position: 'top-left' });
  }
}

export async function addNewUser(userData: { name: string; id: string }) {
  const userId = uuidv4();
  const userRef = doc(firestore, "users", userId);
  try {
    await setDoc(userRef, userData);
    toast('userAddedSuccess', { type: 'success', position: 'top-left' });
  } catch (error) {
    toast(error as string, { type: 'error', position: 'top-left' });
  }
}

