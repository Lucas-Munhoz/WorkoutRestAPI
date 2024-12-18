const usuarioService = require('../services/usuarioService');

exports.getAllUsuarios = async (req, res) => {
    const usuarios = await usuarioService.getAllUsuarios();
    res.status(200).json(usuarios);

    /* 
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Retorna todos os usuarios'
    #swagger.responses[200] = {
        description: 'Usuarios encontrados com sucesso',
        content: {
            "application/json": {
                schema: {
                    type: "array",
                    items: { $ref: '#/components/schemas/Usuario' }
                }
            }
        }
    }
    */
};

exports.getUsuarioById = async (req, res) => {
    const usuario = await usuarioService.getUsuarioById(parseInt(req.params.id, 10));

    if(!usuario) {
        return res.status(404).json({ message: 'Usuario nao encontrado.' });
    }

    res.status(200).json(usuario);

    /* 
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Busca um usuario pelo ID'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do usuario',
        required: true,
        schema: { type: 'integer' }
    }
    #swagger.responses[200] = {
        description: 'Usuario encontrado com sucesso',
        schema: { $ref: '#/components/schemas/Usuario' }
    }
    #swagger.responses[404] = {
        description: 'Usuario nao encontrado.',
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        message: { type: 'string', example: 'Usuario nao encontrado.' }
                    }
                }
            }
        }
    }
    */
};

exports.createUsuario = async (req, res) => {
    const novoUsuario = await usuarioService.createUsuario(req.body);

    if(!novoUsuario) {
        return res.status(400).json({ message: 'Erro ao criar usuario.' });
    }

    res.status(201).json(novoUsuario);

    /* 
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Cria um novo usuario'
    #swagger.parameters['usuario'] = {
        in: 'body',
        description: 'Informacoes do usuario',
        required: true,
        schema: { $ref: '#/components/schemas/Usuario' }
    }
    #swagger.responses[201] = {
        description: 'Usuario criado com sucesso',
        schema: { $ref: '#/components/schemas/Usuario' }
    }
    #swagger.responses[400] = {
        description: 'Erro ao criar usuario.',
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        message: { type: 'string', example: 'Erro ao criar usuario.' }
                    }
                }
            }
        }
    }
    */
};

exports.createAdmin = async (req, res) => {
    const novoAdmin = await usuarioService.createAdmin(req.body);

    if(!novoAdmin) {
        return res.status(400).json({ message: 'Erro ao criar administrador.' });
    }

    res.status(201).json(novoAdmin);

    //                           |
    // PRECISA ARRUMAR ISSO AQUI V
    /* 
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Cria um novo usuario'
    #swagger.parameters['usuario'] = {
        in: 'body',
        description: 'Informacoes do usuario',
        required: true,
        schema: { $ref: '#/components/schemas/Usuario' }
    }
    #swagger.responses[201] = {
        description: 'Usuario criado com sucesso',
        schema: { $ref: '#/components/schemas/Usuario' }
    }
    #swagger.responses[400] = {
        description: 'Erro ao criar usuario.',
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        message: { type: 'string', example: 'Erro ao criar usuario.' }
                    }
                }
            }
        }
    }
    */
};

exports.updateUsuario = async (req, res) => {
    const usuarioAtualizado = await usuarioService.updateUsuario(parseInt(req.params.id, 10), req.body);

    if(!usuarioAtualizado) {
        return res.status(400).json({ message: 'Erro ao atualizar usuario.' });
    }

    res.status(200).json(usuarioAtualizado);

    /* 
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Atualiza um usuario pelo ID'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do usuario',
        required: true,
        schema: { type: 'integer' }
    }
    #swagger.parameters['usuario'] = {
        in: 'body',
        description: 'Novos dados do usuario',
        required: true,
        schema: { $ref: '#/components/schemas/Usuario' }
    }
    #swagger.responses[200] = {
        description: 'Usuario atualizado com sucesso',
        schema: { $ref: '#/components/schemas/Usuario' }
    }
    */
};

exports.deleteUsuario = async (req, res) => {
    const usuarioDeletado = await usuarioService.deleteUsuario(parseInt(req.params.id, 10));

    if(!usuarioDeletado) {
        return res.status(400).json({ message: 'Erro ao deletar usuario.' });
    }

    res.status(200).json({ message: 'Usuario deletado com sucesso.' });

    /* 
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Deleta um usuario pelo ID'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do usuario',
        required: true,
        schema: { type: 'integer' }
    }
    #swagger.responses[200] = {
        description: 'Usuario deletado com sucesso',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string', example: 'Usuario deletado com sucesso.' }
            }
        }
    }
    */
};