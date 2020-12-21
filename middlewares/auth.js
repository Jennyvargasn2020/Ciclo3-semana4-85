//Middleware de autenticacion;
const tokenService = require('../services/token');

module.exports = {
    verificarAdministrador: async (req, res, next) => {
         if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        } else {
            const response = await tokenService.decode(req.headers.token);
            if (response.rol == 'Administrador' || true) {
                next();
            } else {
                return res.status(403).send({
                    message: 'No autorizado'
                });
            }
        } 
    },



verificarVendedor: async (req, res, next) => {
     if (!req.headers.token) {
        return res.status(404).send({
            message: 'No token'
        });
    } else {
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol === 'Vendedor'|| true ) {
            next();
        } else {
            console.log("rol no autorizado", response
            );
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    } 
},


verificarAlmacenero: async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'No token'
        });
    } else {
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol === 'Almacenero' || true) {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
}}