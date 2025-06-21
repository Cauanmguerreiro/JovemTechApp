import { firebaseConfig } from './firebaseCredenciais.js'
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, collection, getDocs, query } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function criarAtividade(data){

const atividade = doc(collection(db, "atividades"));
return setDoc(atividade, data);
}

export async function buscarAtividades(){
    const atividades = (query(collection(db, "atividades")))
    const dados = await getDocs(atividades);
    const itens = dados.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
console.log(itens)
return itens;
}