import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.V1_APIKEY,
  authDomain: process.env.V1_AUTH_DOMAIN,
  projectId: process.env.V1_PROJECT_ID,
  storageBucket: process.env.V1_STORAGE_BUCKET,
  messagingSenderId: process.env.V1_MESSAGING_SENDER_ID,
  appId: process.env.V1_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// export const storageRef = ref(storage);
