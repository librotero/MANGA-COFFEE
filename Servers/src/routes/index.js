"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./Mangas/GetByName/index"));
const index_2 = __importDefault(require("./Mangas/PostManga/index"));
const index_3 = __importDefault(require("./Mangas/GetFindAll/index"));
const index_4 = __importDefault(require("./Mangas/GetById/index"));
const index_5 = __importDefault(require("./Mangas/DeleteById/index"));
const index_6 = __importDefault(require("./Mangas/FilterByGenre/index"));
const index_7 = __importDefault(require("./Users/PostUserCreated/index"));
const index_8 = __importDefault(require("./Users/PostUserinit/index"));
//<<<<<<< ConfiEmailVerificate
const index_9 = __importDefault(require("./Users/GetByIdUser/index"));
const index_10 = __importDefault(require("./Users/PutByIdUser/index"));
const index_11 = __importDefault(require("./Users/PutByIdUserFav/index"));
const index_12 = __importDefault(require("./Users/GetMangaFavoUser/index"));
const index_13 = __importDefault(require("./Users/DeleteUsers/index"));
const index_14 = __importDefault(require("./Users/GetConfirmarCuenta/index"));
const index_15 = __importDefault(require("./Products/DeleteByIdProducts/index"));
const index_16 = __importDefault(require("./Products/FilterByIdProducts/index"));
const index_17 = __importDefault(require("./Products/FilterByNameProducts/index"));
const index_18 = __importDefault(require("./Products/GetFindAllProducts/index"));
const index_19 = __importDefault(require("./Products/PostProducts/index"));
const index_20 = __importDefault(require("./Products/FilterByCategory/index"));
const index_21 = __importDefault(require("./Products/PutProducts/index"));
const index_22 = __importDefault(require("./Products/PostCommentsProducts/index"));
//>>>>>>> development
const router = (0, express_1.Router)();
router.use('/manga', index_6.default);
router.use('/manga', index_3.default);
router.use('/manga', index_1.default);
router.use('/manga', index_4.default);
router.use('/manga', index_2.default);
router.use('/manga', index_5.default);
router.use('/user', index_13.default);
router.use('/user', index_7.default);
router.use('/user', index_8.default);
router.use('/user', index_9.default);
router.use('/user', index_10.default);
router.use('/user', index_11.default);
router.use('/user', index_12.default);
router.use('/user', index_14.default);
router.use('/products', index_15.default);
router.use('/products', index_16.default);
router.use('/products', index_17.default);
router.use('/products', index_18.default);
router.use('/products', index_19.default);
router.use('/products', index_20.default);
//<<<<<<< ConfiEmailVerificate
router.use('/products', index_21.default);
//=======
router.use('/products', index_21.default);
router.use('/products', index_22.default);
//>>>>>>> development
exports.default = router;
