import { criarAtividade, buscarAtividades } from '../services/atividadeServices.js'


export function criarAtividadeController(req, res){
    try{
    const atividade = req.body;
    criarAtividade(atividade);
    res.status(201).send('Atividade criada com sucesso!');
}catch (error){
    console.log(error)
    res.status(500).send('Erro ao criar atividade')
}
}
export async function buscarAtividadesController(req, res){
    try{
    const atividades = await buscarAtividades()
    res.status(200).json(atividades)
    }catch (error){
    console.log(error)
    res.status(500).send('Erro buscar ao buscar atividades')
}
}