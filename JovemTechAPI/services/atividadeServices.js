import { firebaseConfig } from './firebaseCredenciais.js'
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, collection } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function criarAtividade(data){

const atividade = doc(collection(db, "atividades"));
return setDoc(atividade, data);
}