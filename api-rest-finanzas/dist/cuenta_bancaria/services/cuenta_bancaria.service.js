"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancariaService = void 0;
const common_1 = require("@nestjs/common");
const service_commons_1 = require("../../commons/service.commons");
const cuenta_bancaria_entity_1 = require("../entities/cuenta_bancaria.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CuentaBancariaService = class CuentaBancariaService extends service_commons_1.BaseService {
    constructor(cuentaBancariaRepo) {
        super();
        this.cuentaBancariaRepo = cuentaBancariaRepo;
    }
    getRepository() {
        return this.cuentaBancariaRepo;
    }
    async getAll() {
        const entities = await this.findAll();
        const query = entities.filter(item => item.estado === true);
        return query;
    }
    async delete(id) {
        const entity = await this.getRepository().findOne({ where: id });
        if (entity) {
            entity.estado = false;
            await this.getRepository().save(entity);
        }
    }
};
CuentaBancariaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cuenta_bancaria_entity_1.CuentaBancaria)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CuentaBancariaService);
exports.CuentaBancariaService = CuentaBancariaService;
//# sourceMappingURL=cuenta_bancaria.service.js.map