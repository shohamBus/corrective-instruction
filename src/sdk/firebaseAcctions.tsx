import { firestore } from '../services/firebase'; 
import { doc, setDoc, collection, where, query } from 'firebase/firestore';
import { auth, GoogleAuthProvider, signInWithPopup } from '../services/firebase';
import { getFirestore, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const db = getFirestore();

export const getAllUsers = async () => {
  const usersCollection = collection(db, "users");
  const usersSnapshot = await getDocs(usersCollection);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
};

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      // Check if the user's email exists in the Firestore collection
      const usersCollection = collection(firestore, "users");
      const q = query(usersCollection, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        toast(`Welcome ${user.displayName}`, { type: 'success', position: 'top-left' });
      } else {
        toast('No account found with this email. Please register first.', { type: 'info', position: 'top-left' });
      }
    } catch (error) {
      console.error(error);
      toast('Failed to log in with Google', { type: 'error', position: 'top-left' });
    }
  };

export async function loginUser(userData: { userName: string; password: string }) {
    const usersCollection = collection(firestore, "users");
    const q = query(usersCollection, where("userName", "==", userData.userName), where("password", "==", userData.password));
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

export async function addNewUser(userData: { userName: string; password: string; email: string }) {
    const userId = uuidv4();
    const userRef = doc(firestore, "users", userId);
    try {
        await setDoc(userRef, userData);
        toast('userAddedSuccess', { type: 'success', position: 'top-left' });
    } catch (error) {
        toast(error as string, { type: 'error', position: 'top-left' });
    }
}
 
