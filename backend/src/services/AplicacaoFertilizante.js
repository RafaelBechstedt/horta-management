import AplicacaoFertilizanteModel from "../database/models/AplicacaoFertilizanteModel";

const createAplicacao = async (data) => {
    const aplicacao = await AplicacaoFertilizanteModel.create(data);
    return aplicacao;
};

const getAllAplicacoes = async () => {
    const aplicacoes = await AplicacaoFertilizanteModel.findAll();
    return aplicacoes;
};

const getAplicacaoById = async (id) => {
    const aplicacao = await AplicacaoFertilizanteModel.findByPk(id);
    return aplicacao;
};

const updateAplicacao = async (id, data) => {
    const [updated] = await AplicacaoFertilizanteModel.update(data, {
        where: { id }
    });
    return updated;
};

const deleteAplicacao = async (id) => {
    const deleted = await AplicacaoFertilizanteModel.destroy({
        where: { id }
    });
    return deleted;
};

export default {
    createAplicacao,
    getAllAplicacoes,
    getAplicacaoById,
    updateAplicacao,
    deleteAplicacao
}