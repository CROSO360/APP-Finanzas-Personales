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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const cuenta_bancaria_entity_1 = require("../../cuenta_bancaria/entities/cuenta_bancaria.entity");
const ingreso_entity_1 = require("../../ingreso/entities/ingreso.entity");
const transaccion_entity_1 = require("../../transaccion/entities/transaccion.entity");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Usuario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cuenta_bancaria_entity_1.CuentaBancaria, cuentasBancarias => cuentasBancarias.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "cuentasBancarias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ingreso_entity_1.Ingreso, ingreso => ingreso.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "ingresos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaccion_entity_1.Transaccion, transaccion => transaccion.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "transacciones", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)()
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map