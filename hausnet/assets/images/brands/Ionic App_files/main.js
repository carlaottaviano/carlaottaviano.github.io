webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_and_conditions__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignUpPage.prototype.goToWelcome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome__["a" /* WelcomePage */]);
    };
    SignUpPage.prototype.goToTermsAndConditions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__terms_and_conditions__["a" /* TermsAndConditionsPage */]);
    };
    SignUpPage.prototype.goToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/sign-up.html"*/'<ion-content class="pages__auth">\n\n  <form class="invalid--form" #form="ngForm">\n    <ion-grid>\n\n      <ion-row>\n        <ion-col class="auth--background">\n          <img src="../../assets/imgs/auth-header.svg" alt="">\n          <button ion-button class="btn__back--black" navPop>\n            <ion-icon name="md-arrow-back"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <p no-margin>Necesitamos que te registres para poder concretar tu reserva.</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <div style="display: flex">\n            <button class="btn--facebook" (click)="facebookLogin()">\n              <img src="../../assets/imgs/icon-facebook.png">\n              <span>Facebook</span>\n            </button>\n            <button class="btn--google" (click)="googleLogin()">\n              <img src="../../assets/imgs/icon-google.png">\n              <span>Google</span>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked>Nombre</ion-label>\n            <ion-input type="text" name="name" placeholder="" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input type="email" name="email" placeholder="" required></ion-input>\n          </ion-item>\n          <ion-item class="invalid--input">\n            <ion-label stacked>Contraseña</ion-label>\n            <ion-input type="password" name="password" placeholder="" clearInput required></ion-input>\n          </ion-item>\n          <div class="invalid--feedback">\n            Contraseña incorrecta\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button block [disabled]="form.invalid" (click)="goToWelcome()">Registrarse</button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <small>Al registrarte estás aceptando nuestros <a color="primary" (click)="goToTermsAndConditions()">Términos y Condiciones</a></small>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p no-margin>¿Ya tenés una cuenta? <a color="primary" (click)="goToSignIn()">Ingresá acá.</a></p>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_recover__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignInPage.prototype.goToPasswordRecover = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__password_recover__["a" /* PasswordRecoverPage */]);
    };
    SignInPage.prototype.goToServices = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesPage */]);
    };
    SignInPage.prototype.goToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_up__["a" /* SignUpPage */]);
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/sign-in.html"*/'<ion-content class="pages__auth">\n\n  <form #form="ngForm">\n    <ion-grid>\n\n      <ion-row>\n        <ion-col class="auth--background">\n          <img src="../../assets/imgs/auth-header.svg" alt="">\n          <button ion-button class="btn__back--black" navPop>\n            <ion-icon name="md-arrow-back"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <h1>¡Bienvienida de vuelta!</h1>\n          <p>Por favor, ingresá tus datos</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input type="email" name="email" placeholder="" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>Contraseña</ion-label>\n            <ion-input type="password" name="password" placeholder="" clearInput required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="signin__btn--clear">\n        <ion-col col-12 text-right>\n          <a color="primary" (click)="goToPasswordRecover()">Olvidé mi contraseña</a>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="auth--padding-top">\n          <button ion-button block [disabled]="form.invalid" (click)="goToServices()">Ingresar</button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <p>¿No tenés una cuenta? <a color="primary" (click)="goToSignUp()">Creáte una.</a></p>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_playment__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingLocationPage = /** @class */ (function () {
    function BookingLocationPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BookingLocationPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    BookingLocationPage.prototype.goToBookingPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_playment__["a" /* BookingPaymentPage */]);
    };
    BookingLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking-location',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/booking/booking-location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Ubicación (2/3)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <!-- Versión nombre de la dirección guardada strat -->\n      <!-- <div class="header__select">\n        <ion-item>\n          <ion-label>Zona</ion-label>\n          <ion-select>\n            <ion-option value="Save">Nombre de la dirección guardada</ion-option>\n          </ion-select>\n        </ion-item>\n      </div> -->\n      <!-- Versión nombre de la dirección guardada end -->\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <ion-item>\n              <ion-label>Zona</ion-label>\n              <ion-select>\n                <ion-option value="Palermo">Palermo</ion-option>\n                <ion-option value="Recoleta">Recoleta</ion-option>\n                <ion-option value="Null">Ninguna de las anteriores</ion-option>\n                <ion-option value="Save">Nombre de la dirección guardada</ion-option>\n              </ion-select>\n            </ion-item>\n            <!-- Versión común strat -->\n            <ion-item>\n              <ion-label stacked>Dirección</ion-label>\n              <ion-input type="text" name="location" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Piso, Departamento</ion-label>\n              <ion-input type="text" name="depto" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>¿Algo más que quieras aclarar?</ion-label>\n              <ion-textarea placeholder="Indicanos acá si es oficina, etc."></ion-textarea>\n            </ion-item>\n            <!-- Versión común end -->\n          </ion-col>\n          <!-- Versión ninguna de las anteriores strat -->\n          <!-- <ion-col col-12 text-center>\n            <img src="../../assets/imgs/location-null.svg" alt="">\n          </ion-col>\n          <ion-col col-12>\n            <p>Todavía no llegamos a tu ubicación. Cuando lo hagamos, te vamos a avisar y a regalar un servicio gratis.</p>\n            <p no-margin>Mientras tanto, podés probar otra ubicación o compartirlo con alguien.</p>\n          </ion-col>\n          <ion-col col-12 text-center>\n            <button ion-button outline small color="dark" (click)="goToBookingPayment()">Compartir reserva</button>\n          </ion-col> -->\n          <!-- Versión ninguna de las anteriores end -->\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <button ion-button block (click)="goToBookingPayment()">Confirmar ubicación</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/booking/booking-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], BookingLocationPage);
    return BookingLocationPage;
}());

//# sourceMappingURL=booking-location.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_summary__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingPaymentPage = /** @class */ (function () {
    function BookingPaymentPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BookingPaymentPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    BookingPaymentPage.prototype.goToSummary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__summary_summary__["a" /* SummaryPage */]);
    };
    BookingPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking-playment',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/booking/booking-playment.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Tarjeta (3/3)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <!-- Versión nombre de la tarjeta guardada strat -->\n      <!-- <div class="header__select">\n        <ion-item>\n          <ion-label>Tarjeta guardada</ion-label>\n          <ion-select>\n            <ion-option value="Save">MasterCard **** **** **** 9876</ion-option>\n          </ion-select>\n        </ion-item>\n      </div> -->\n      <!-- Versión nombre de la tarjeta guardada end -->\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <ion-item>\n              <ion-label>Tarjeta guardada</ion-label>\n              <ion-select>\n                <ion-option value="Palermo">MasterCard  **** **** **** 9876</ion-option>\n                <ion-option value="Null">Ninguna de las anteriores</ion-option>\n              </ion-select>\n            </ion-item>\n            <!-- Versión común strat -->\n            <ion-item>\n              <ion-label stacked>Número</ion-label>\n              <ion-input type="number" name="number" placeholder="" required></ion-input>\n            </ion-item>\n            <div class="row" justify-content-between>\n              <ion-item col-6>\n                <ion-label stacked>Fecha de expiración</ion-label>\n                <ion-input type="date" name="date" placeholder="" required></ion-input>\n              </ion-item>\n              <ion-item col-5>\n                <ion-label stacked>CVV</ion-label>\n                <ion-input type="password" name="cvv" placeholder="" required></ion-input>\n              </ion-item>\n            </div>\n            <ion-item>\n              <ion-label stacked>Nombre</ion-label>\n              <ion-input type="text" name="name" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>DNI</ion-label>\n              <ion-input type="number" name="dni" placeholder="" required></ion-input>\n            </ion-item>\n            <!-- Versión común end -->\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <button ion-button block (click)="goToSummary()">Confirmar tarjeta</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/booking/booking-playment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], BookingPaymentPage);
    return BookingPaymentPage;
}());

//# sourceMappingURL=booking-playment.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locations_edit__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationsPage = /** @class */ (function () {
    function LocationsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    LocationsPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    LocationsPage.prototype.goToLocationsEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__locations_edit__["a" /* LocationsEditPage */]);
    };
    LocationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locations',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/locations/locations.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Mis direcciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <ion-grid>\n\n      <ion-row>\n        <!-- Versión sin direcciones strat -->\n        <!-- <ion-col col-12 margin-top text-center>\n          <img src="../../assets/imgs/profile-location-null.svg" alt="">\n          <h1>Nada por aquí...</h1>\n          <p no-margin>Todavía no tenés ninguna dirección.</p>\n        </ion-col> -->\n        <!-- Versión sin direcciones end -->\n        <ion-col col-12>\n          <ion-card (click)="goToLocationsEdit()">\n            <ion-card-content>\n              <div class="card__icon">\n                <img src="../../assets/imgs/icon-location.svg" alt="">\n              </div>\n              <div class="card__text">\n                <h1>Casa</h1>\n                <p>Av. Santa Fe 2102 1 D, Palermo</p>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <button ion-button block (click)="goToLocationsEdit()">Agregar nueva</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/locations/locations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], LocationsPage);
    return LocationsPage;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playments_edit__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaymentsPage = /** @class */ (function () {
    function PlaymentsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PlaymentsPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    PlaymentsPage.prototype.goToPlaymentsEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__playments_edit__["a" /* PlaymentsEditPage */]);
    };
    PlaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playments',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/playments/playments.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Mis tarjetas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <ion-grid>\n\n      <ion-row>\n        <!-- Versión sin direcciones strat -->\n        <!-- <ion-col col-12 margin-top text-center>\n          <img src="../../assets/imgs/profile-playment-null.svg" alt="">\n          <h1>Nada por aquí...</h1>\n          <p no-margin>Todavía no tenés ninguna tarjeta.</p>\n        </ion-col> -->\n        <!-- Versión sin direcciones end -->\n        <ion-col col-12>\n          <ion-card (click)="goToPlaymentsEdit()">\n            <ion-card-content>\n              <div class="card__icon">\n                <img src="../../assets/imgs/icon-playment.svg" alt="">\n              </div>\n              <div class="card__text">\n                <h1>MasterCard</h1>\n                <p>**** **** **** 1428</p>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <button ion-button block (click)="goToPlaymentsEdit()">Agregar nueva</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/playments/playments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], PlaymentsPage);
    return PlaymentsPage;
}());

//# sourceMappingURL=playments.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupon_copied__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CouponsPage = /** @class */ (function () {
    function CouponsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    CouponsPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    CouponsPage.prototype.goToCouponCopied = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__coupon_copied__["a" /* CouponCopiedPage */]);
    };
    CouponsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coupons',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/coupons/coupons.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Mis descuentos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <ion-grid>\n\n      <ion-row>\n        <!-- Versión sin descuentos strat -->\n        <!-- <ion-col col-12 margin-top text-center>\n          <img src="../../assets/imgs/profile-coupon-null.svg" alt="">\n          <h1>Nada por aquí...</h1>\n          <p no-margin>Todavía no tenés ningún descuento.</p>\n        </ion-col> -->\n        <!-- Versión sin descuentos end -->\n        <ion-col col-12>\n            <p no-margin>Para usar un descuento, copiálo y luego pegálo al momento de hacer tu reserva.</p>\n        </ion-col>\n        <ion-col col-12>\n          <ion-card (click)="goToCouponCopied()">\n            <ion-card-content>\n              <div class="card__icon">\n                <img src="../../assets/imgs/icon-coupon.svg" alt="">\n              </div>\n              <div class="card__text">\n                <h1>50% de descuento</h1>\n                <p>En la contratación de un servicio</p>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <button ion-button block (click)="goToCouponsEdit()">Agregar nuevo</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/coupons/coupons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], CouponsPage);
    return CouponsPage;
}());

//# sourceMappingURL=coupons.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnboardingPage.prototype.goToServices = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesPage */]);
    };
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onboarding',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/onboarding/onboarding.html"*/'<ion-content class="pages__single pages__single-slides">\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-slides pager>\n          <ion-slide>\n            <img src="../../assets/imgs/onboarding1.svg" alt="">\n            <h1>¡Bienvenida!</h1>\n            <p>¡Gracias por instalar Loviz!<br>Queremos que tu vida sea más fácil, por lo que llegamos como el primer servicio de estética a domicilio.</p>\n          </ion-slide>\n          <ion-slide>\n            <img src="../../assets/imgs/onboarding2.svg" alt="">\n            <h1>Sobre nosotros</h1>\n            <p>Nuestras LOVIZ pasan un exhaustivo proceso de selección, lo que nos permite garantizar cada uno de nuestros servicios.</p>\n          </ion-slide>\n          <ion-slide>\n            <img src="../../assets/imgs/onboarding3.svg" alt="">\n            <h1>Estamos creciendo…</h1>\n            <p>Actualmente nos encontramos únicamente en algunas zonas de capital. Pero no dudes en registrarte, que nuestra expansión tiene premios para vos!</p>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="goToServices()">Omitir</button>\n        <!-- <button ion-button block (click)="goToServices()">Empezar</button> -->\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/onboarding/onboarding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordRecoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_recover_validation__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordRecoverPage = /** @class */ (function () {
    function PasswordRecoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasswordRecoverPage.prototype.goToPasswordRecoverValidation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__password_recover_validation__["a" /* PasswordRecoverValidationPage */]);
    };
    PasswordRecoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-recover',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/password-recover.html"*/'<ion-content class="pages__auth">\n\n  <form #form="ngForm">\n    <ion-grid>\n\n      <ion-row>\n        <ion-col class="auth--background">\n          <img src="../../assets/imgs/auth-header.svg" alt="">\n          <button ion-button class="btn__back--black" navPop>\n            <ion-icon name="md-arrow-back"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <h1>¿Olvidaste tu contraseña?</h1>\n          <p>¡No hay problema!<br>Ingresá tu email así te enviamos un link para que puedas restaurarla.</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input type="email" name="email" placeholder="" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="auth--padding-top">\n          <button ion-button block [disabled]="form.invalid" (click)="goToPasswordRecoverValidation()">Restaurar contraseña</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/password-recover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], PasswordRecoverPage);
    return PasswordRecoverPage;
}());

//# sourceMappingURL=password-recover.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordRecoverValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_change__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordRecoverValidationPage = /** @class */ (function () {
    function PasswordRecoverValidationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasswordRecoverValidationPage.prototype.goToPasswordChange = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__password_change__["a" /* PasswordChangePage */]);
    };
    PasswordRecoverValidationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-recover-validation',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/password-recover-validation.html"*/'<ion-content class="pages__single">\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n          <img src="../../assets/imgs/password-recover-validation.svg" alt="">\n          <h1>¡Revisá tu casilla!</h1>\n          <p>Te enviamos un email con un link para que restaures tu contraseña.</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="goToPasswordChange()">Ir al Inicio</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/password-recover-validation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], PasswordRecoverValidationPage);
    return PasswordRecoverValidationPage;
}());

//# sourceMappingURL=password-recover-validation.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_change_validation__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordChangePage = /** @class */ (function () {
    function PasswordChangePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PasswordChangePage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    PasswordChangePage.prototype.goToPasswordChangeValidation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__password_change_validation__["a" /* PasswordChangeValidationPage */]);
    };
    PasswordChangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-change',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/password-change.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Olvidé mi contraseña</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <p>Por favor completá los siguientes datos para restaurar tu contraseña.</p>\n            <ion-item>\n              <ion-label stacked>Nueva contraseña</ion-label>\n              <ion-input type="password" name="newpassword" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Repetir nueva contraseña</ion-label>\n              <ion-input type="password" name="repeatpassword" placeholder="" required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <button no-margin ion-button block [disabled]="form.invalid" (click)="goToPasswordChangeValidation()">Cambiar contraseña</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/password-change.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], PasswordChangePage);
    return PasswordChangePage;
}());

//# sourceMappingURL=password-change.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangeValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordChangeValidationPage = /** @class */ (function () {
    function PasswordChangeValidationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasswordChangeValidationPage.prototype.goToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]);
    };
    PasswordChangeValidationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-change-validation',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/password-change-validation.html"*/'<ion-content class="pages__single">\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n          <img src="../../assets/imgs/password-change-validation.svg" alt="">\n          <h1>¡Contraseña cambiada!</h1>\n          <p>Tu nueva contraseña fue guardada exitosamente. Ya podés ingresar a tu cuenta con normalidad.</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="goToSignIn()">Ir al Inicio</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/password-change-validation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], PasswordChangeValidationPage);
    return PasswordChangeValidationPage;
}());

//# sourceMappingURL=password-change-validation.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    TermsAndConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/terms-and-conditions.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Términos y condiciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <p>When it comes to looking your best, there are some standard tools of the trade. You will want to find the right makeup for your complexion. You’ll want to find the best clothes and the right hair stylist. You’ll also want to be sure that you have the right products for styling your hair – shampoo and conditioner, gels or mousse or other products, a great blow dryer and, of course, the right curling iron.</p>\n            <p>Some people seem to think that curling irons are all the same. They don’t understand that the inexpensive curling irons like the ones that can be bought in discount stores aren’t built to last the same way that curling irons from a beauty supply store are. They don’t understand that, even when it comes to curling irons from a beauty supply store, there can be big differences between one curling iron and the next.</p>\n            <p>Some curling irons work in a way that is similar to a styling brush and a hair dryer – using hot air to style your hair. Some are made with narrow wands for tighter curls; others are made with a wider wand meant to provide long flowing waves in your hair. You can find a curling iron to create spiral curls, spring curls and even curling irons that don’t really do much curling per se — curling irons that are used to straighten hair.</p>\n            <p>However, even once you’ve found the right curling iron to keep up your hair style, you may be confused about which type of curling iron is best for your hair. In addition to the hot air curling brush, you’ll find that there are a number of other options: ceramic, steam, metal. There are traditional curling irons that you’ll plug into the wall, and then there are butane curling irons and propane fueled curling irons that you’ll be able to use anywhere.</p>\n            <p>Butane and propane fueled curling irons are a great asset for getting ready on the go. Running late to head to the office? Take your curling iron with you and squeeze in a few minutes in the restroom before you make it to your desk. Going out after work? Take your butane curling iron with you to the office, heat it up, style your hair before you leave the office and you won’t have to make a trip back home.</p>\n            <p>More importantly, though, if you do much traveling, you’ll find that a butane or propane fueled curling iron is an ideal option. Why is a gas-powered iron such a great choice? There are three reasons that rise above the rest:</p>\n            <p>1. Once you’re accustomed to using a butane curling iron, you won’t want to switch back to another style.</p>\n            <p>2. Propane fueled curling irons can easily be taken with you wherever you go. Not only is it easy to take one along with you to the office, but it is easy to slip one into your carry-on bag or suitcase when you travel.</p>\n            <p>3. When you travel with a butane curling iron or propane fueled curling iron, you won’t have to worry about finding the right adapter when you travel out of the United States, because you don’t have to plug in your curling iron.</p>\n            <p>Still not sure that this style of curling iron is right for you – or, for that matter, right for travel? Try talking over the choice with your stylist or with others who use them. You are bound to hear stories about how convenient it is to not have to worry about remembering to unplug your curling iron before you leave home. Similarly, you won’t have to worry about tripping over the cord, having someone else trip over the cord or having the family pet decide that chewing on the electrical cord is a good idea.</p>\n            <p no-margin>After all, your curling iron should be an asset, not a liability. Your curling iron – once you find the one that is right for your hair and hair style – should also be something that you don’t need to replace on a fairly regular basis. Therefore, it makes sense to consider more than just “any” curling iron; consider finding a curling iron that will meet your needs wherever you are – whether you’re traveling across town or traveling around the world.</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/terms-and-conditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking_date__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToBookingDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking_date__["a" /* BookingDatePage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/welcome.html"*/'<ion-content class="pages__single">\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n          <img src="../../assets/imgs/welcome.svg" alt="">\n          <h1>¡Bienvenida Paula!</h1>\n          <p>¡Te damos la bienvenida al mundo Loviz!<br>Ya podés seguir con tu reserva, la cual ya tiene premio ;)</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="goToBookingDate()">Seguir con la reserva</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/auth/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_booking_date__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booking_booking_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booking_booking_playment__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__booking_booking_people__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmation_error__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SummaryPage = /** @class */ (function () {
    function SummaryPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SummaryPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    SummaryPage.prototype.goToServices = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesPage */]);
    };
    SummaryPage.prototype.goToBookingDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__booking_booking_date__["a" /* BookingDatePage */]);
    };
    SummaryPage.prototype.goToBookingLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__booking_booking_location__["a" /* BookingLocationPage */]);
    };
    SummaryPage.prototype.goToBookingPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__booking_booking_playment__["a" /* BookingPaymentPage */]);
    };
    SummaryPage.prototype.goToBookingPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__booking_booking_people__["a" /* BookingPeoplePage */]);
    };
    // goToConfirmationSuccess(){
    //   this.navCtrl.push(ConfirmationSuccessPage);
    // }
    SummaryPage.prototype.goToConfirmationError = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__confirmation_error__["a" /* ConfirmationErrorPage */]);
    };
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/summary/summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Resumen</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <p>Por favor verificá los datos.</p>\n          </ion-col>\n          <ion-col col-12>\n            <ion-list>\n              <button ion-item (click)="goToServices(item)">\n                <ion-icon name="leaf" item-start></ion-icon>\n                Servicio\n                <p item-end>Manicura</p>\n              </button>\n              <button ion-item (click)="goToBookingDate(item)">\n                <ion-icon name="calendar" item-start></ion-icon>\n                Cuándo\n                <p item-end>12/09/2019 09:30AM</p>\n              </button>\n              <button ion-item (click)="goToBookingLocation(item)">\n                <ion-icon name="pin" item-start></ion-icon>\n                Dónde\n                <p item-end>Av. Santa Fe 4569 1D</p>\n              </button>\n              <button ion-item (click)="goToBookingPayment(item)">\n                <ion-icon name="card" item-start></ion-icon>\n                Tarjeta\n                <p item-end>**** **** **** 1234</p>\n              </button>\n              <button ion-item (click)="goToBookingPeople(item)">\n                Cantidad de personas\n                <p item-end>1</p>\n              </button>\n              <ion-item (click)="itemSelected(item)">\n                Duracián aproximada\n                <p item-end>30min</p>\n              </ion-item>\n              <button ion-item (click)="presentPrompt(item)">\n                Descuento\n                <p item-end>ADAASD123456</p>\n              </button>\n              <button ion-item (click)="itemSelected(item)">\n                LOVIZ\n                <p item-end>Romina Perez</p>\n              </button>\n              <ion-item (click)="itemSelected(item)">\n                Precio\n                <p item-end><span>$300</span> $150</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <!-- <button ion-button block (click)="goToConfirmationSuccess()">Pagar</button> -->\n            <button ion-button block (click)="goToConfirmationError()">Pagar</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/summary/summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], SummaryPage);
    return SummaryPage;
}());

//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationErrorPage = /** @class */ (function () {
    function ConfirmationErrorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmationErrorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    ConfirmationErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmation-error',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/summary/confirmation-error.html"*/'<ion-content class="pages__single">\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n          <img src="../../assets/imgs/confirmation-error.svg" alt="">\n          <h1>Algo salió mal...</h1>\n          <p>No pudimos realizar la transacción.<br>Por favor intentá nuevamente o probá usar otra tarjeta.</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="goToChecked()">Revisar</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/summary/confirmation-error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ConfirmationErrorPage);
    return ConfirmationErrorPage;
}());

//# sourceMappingURL=confirmation-error.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManiPediPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking_people__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_booking_date__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceManiPediPage = /** @class */ (function () {
    function ServiceManiPediPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ServiceManiPediPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    ServiceManiPediPage.prototype.goToBookingPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking_people__["a" /* BookingPeoplePage */]);
    };
    ServiceManiPediPage.prototype.goToBookingDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__booking_booking_date__["a" /* BookingDatePage */]);
    };
    ServiceManiPediPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-mani-pedi',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/services/service-mani-pedi.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Mani-Pedi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12 no-padding style="height: 200px;">\n            <img src="assets/imgs/maxresdefault.jpg" alt="" class="services__img--cover">\n          </ion-col>\n          <ion-col col-12>\n            <p>Una de nuestras profesionales va a ir a tu domicilio con todo lo necesario para el tratamiento.\n            <p>El tratamiento no incluye nail art.</p>\n          </ion-col>\n          <ion-col col-12>\n            <p>Si no es solo para vos, <a color="primary" (click)="goToBookingPeople()">hacé click acá.</a></p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="container__duration">\n              <h1>60min</h1>\n              <small>Duración</small>\n            </div>\n            <div class="container__price">\n              <h1>$600</h1>\n              <small>Precio</small>\n            </div>\n          </ion-col>\n          <!-- <ion-col col-12 text-center>\n            <button ion-button block (click)="goToBookingDate()">Configurar reserva</button>\n            <small><i>Toda reserva requiere 2 horas de anticipación.</i></small>\n          </ion-col> -->\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n    <div class="card--float">\n        <form>\n            <button ion-button block (click)="goToBookingDate()">Configurar reserva</button>\n            <small><i>Toda reserva requiere 2 horas de anticipación.</i></small>\n        </form>\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/services/service-mani-pedi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], ServiceManiPediPage);
    return ServiceManiPediPage;
}());

//# sourceMappingURL=service-mani-pedi.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking_people__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_booking_date__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceManiPage = /** @class */ (function () {
    function ServiceManiPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ServiceManiPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    ServiceManiPage.prototype.goToBookingPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking_people__["a" /* BookingPeoplePage */]);
    };
    ServiceManiPage.prototype.goToBookingDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__booking_booking_date__["a" /* BookingDatePage */]);
    };
    ServiceManiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-mani',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/services/service-mani.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Manicura</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12 no-padding style="height: 200px;">\n            <img src="assets/imgs/maxresdefault.jpg" alt="" class="services__img--cover">\n          </ion-col>\n          <ion-col col-12>\n            <p>Una de nuestras profesionales va a ir a tu domicilio con todo lo necesario para el tratamiento.\n            <p>El tratamiento no incluye nail art.</p>\n          </ion-col>\n          <ion-col col-12>\n            <p>Si no es solo para vos, <a color="primary" (click)="goToBookingPeople()">hacé click acá.</a></p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="container__duration">\n              <h1>30min</h1>\n              <small>Duración</small>\n            </div>\n            <div class="container__price">\n              <h1>$300</h1>\n              <small>Precio</small>\n            </div>\n          </ion-col>\n          <ion-col col-12 text-center>\n            <button ion-button block (click)="goToBookingDate()">Configurar reserva</button>\n            <small><i>Toda reserva requiere 2 horas de anticipación.</i></small>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/services/service-mani.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], ServiceManiPage);
    return ServiceManiPage;
}());

//# sourceMappingURL=service-mani.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePediPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking_people__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_booking_date__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicePediPage = /** @class */ (function () {
    function ServicePediPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ServicePediPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    ServicePediPage.prototype.goToBookingPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking_people__["a" /* BookingPeoplePage */]);
    };
    ServicePediPage.prototype.goToBookingDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__booking_booking_date__["a" /* BookingDatePage */]);
    };
    ServicePediPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-pedi',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/services/service-pedi.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Pedicura</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12 no-padding style="height: 200px;">\n            <img src="assets/imgs/maxresdefault.jpg" alt="" class="services__img--cover">\n          </ion-col>\n          <ion-col col-12>\n            <p>Una de nuestras profesionales va a ir a tu domicilio con todo lo necesario para el tratamiento.\n            <p>El tratamiento no incluye nail art.</p>\n          </ion-col>\n          <ion-col col-12>\n            <p>Si no es solo para vos, <a color="primary" (click)="goToBookingPeople()">hacé click acá.</a></p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="container__duration">\n              <h1>30min</h1>\n              <small>Duración</small>\n            </div>\n            <div class="container__price">\n              <h1>$300</h1>\n              <small>Precio</small>\n            </div>\n          </ion-col>\n          <ion-col col-12 text-center>\n            <button ion-button block (click)="goToBookingDate()">Configurar reserva</button>\n            <small><i>Toda reserva requiere 2 horas de anticipación.</i></small>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/services/service-pedi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], ServicePediPage);
    return ServicePediPage;
}());

//# sourceMappingURL=service-pedi.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportProblemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportProblemPage = /** @class */ (function () {
    function ReportProblemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportProblemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportProblemPage');
    };
    ReportProblemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-problem',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/report-problem/report-problem.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reportar problema</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <p>Si tuviste algún problema no dudes en escribirnos. Detallá lo que pasó y nos pondremos en contacto a la brevedad.</p>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>Contános de qué se trata</ion-label>\n              <ion-textarea placeholder=""></ion-textarea>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 text-center>\n            <small>También podés escribirnos a info@loviz.com.ar</small>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <button ion-button block disabled (click)="goToConfirmationError()">Enviar</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/report-problem/report-problem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ReportProblemPage);
    return ReportProblemPage;
}());

//# sourceMappingURL=report-problem.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_edit__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locations_locations__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playments_playments__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coupons_coupons__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.goToProfileEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_edit__["a" /* ProfileEditPage */]);
    };
    ProfilePage.prototype.goToLocations = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__locations_locations__["a" /* LocationsPage */]);
    };
    ProfilePage.prototype.goToPlayments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__playments_playments__["a" /* PlaymentsPage */]);
    };
    ProfilePage.prototype.goToCoupons = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__coupons_coupons__["a" /* CouponsPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>Tu perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h1>Paula Garcia</h1>\n        <p>paula.garcia@gmail.com</p>\n        <ion-icon name="md-create" (click)="goToProfileEdit()"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <button ion-button outline>¡Ganaste un premio!</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 (click)="goToLocations()">\n        <div>\n          <ion-icon name="pin"></ion-icon>\n          Mis direcciones\n        </div>\n      </ion-col>\n      <ion-col col-4 (click)="goToPlayments()">\n        <div>\n          <ion-icon name="pin"></ion-icon>\n          Mis tarjetas\n        </div>\n      </ion-col>\n      <ion-col col-4 (click)="goToCoupons()">\n        <div>\n          <ion-icon name="pin"></ion-icon>\n          Mis descuentos\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <div>\n          <ion-icon name="logo-instagram"></ion-icon>\n          #lovizApp\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div>\n          <ion-icon name="mail"></ion-icon>\n          info@loviz.com.ar\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div>\n          <ion-icon name="logo-facebook"></ion-icon>\n          lovizApp\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button outline large icon-start>\n          <ion-icon name="log-out"></ion-icon>\n          Cerrar sesión\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileEditPage = /** @class */ (function () {
    function ProfileEditPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ProfileEditPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    ProfileEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-edit',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/profile/profile-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Editar perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n                <ion-label stacked>Nombre</ion-label>\n                <ion-input type="text" name="name" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input type="email" name="mail" placeholder="" required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <button ion-button block disabled>Guardar cambios</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/profile/profile-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], ProfileEditPage);
    return ProfileEditPage;
}());

//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locations__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationsEditPage = /** @class */ (function () {
    function LocationsEditPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    LocationsEditPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    LocationsEditPage.prototype.goToLocations = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__locations__["a" /* LocationsPage */]);
    };
    LocationsEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locations-edit',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/locations/locations-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Mis direcciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>Nombre</ion-label>\n              <ion-input type="text" name="name" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Zona</ion-label>\n              <ion-select>\n                <ion-option value="Palermo">Palermo</ion-option>\n                <ion-option value="Recoleta">Recoleta</ion-option>\n                <ion-option value="Null">Ninguna de las anteriores</ion-option>\n                <ion-option value="Save">Nombre de la dirección guardada</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Dirección</ion-label>\n              <ion-input type="text" name="location" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Piso, Departamento</ion-label>\n              <ion-input type="text" name="depto" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>¿Algo más que quieras aclarar?</ion-label>\n              <ion-textarea placeholder="Indicanos acá si es oficina, etc."></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <button ion-button block margin-bottom (click)="goToLocations()">Guardar</button>\n            <button ion-button outline block color="dark" (click)="goToLocations()">Eliminar</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/locations/locations-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], LocationsEditPage);
    return LocationsEditPage;
}());

//# sourceMappingURL=locations-edit.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaymentsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playments__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaymentsEditPage = /** @class */ (function () {
    function PlaymentsEditPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PlaymentsEditPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    PlaymentsEditPage.prototype.goToPlayments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__playments__["a" /* PlaymentsPage */]);
    };
    PlaymentsEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playments-edit',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/playments/playments-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Mis tarjetas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>Nombre</ion-label>\n              <ion-input type="text" name="name" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Número</ion-label>\n              <ion-input type="number" name="number" placeholder="" required></ion-input>\n            </ion-item>\n            <div class="row" justify-content-between>\n              <ion-item col-6>\n                <ion-label stacked>Fecha de expiración</ion-label>\n                <ion-input type="date" name="date" placeholder="" required></ion-input>\n              </ion-item>\n              <ion-item col-5>\n                <ion-label stacked>CVV</ion-label>\n                <ion-input type="password" name="cvv" placeholder="" required></ion-input>\n              </ion-item>\n            </div>\n            <ion-item>\n              <ion-label stacked>Nombre</ion-label>\n              <ion-input type="text" name="name" placeholder="" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>DNI</ion-label>\n              <ion-input type="number" name="dni" placeholder="" required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <button ion-button block margin-bottom (click)="goToPlayments()">Guardar</button>\n            <button ion-button outline block color="dark" (click)="goToPlayments()">Eliminar</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/playments/playments-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], PlaymentsEditPage);
    return PlaymentsEditPage;
}());

//# sourceMappingURL=playments-edit.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponCopiedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupons__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CouponCopiedPage = /** @class */ (function () {
    function CouponCopiedPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    CouponCopiedPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    CouponCopiedPage.prototype.goToCoupons = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__coupons__["a" /* CouponsPage */]);
    };
    CouponCopiedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coupon-copied',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/coupons/coupon-copied.html"*/'<ion-content class="page_type-modal">\n\n    <ion-grid class="mdl_container">\n\n        <ion-row class="mdl_body">\n            <ion-col col-12>\n                <h5>Descuento copiado</h5>\n                <p>Se copió el código del descuento para que lo uses al momento de hacer tu reserva. Este es <b>ADAASD123456</b>.</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="mdl_footer">\n            <ion-col>\n                <button ion-button block margin-bottom (click)="goToCoupons()">Canjear</button>\n                <button ion-button outline block color="dark" (click)="goToCoupons()">Cancelar</button>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/coupons/coupon-copied.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], CouponCopiedPage);
    return CouponCopiedPage;
}());

//# sourceMappingURL=coupon-copied.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemCouponsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking_date__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedeemCouponsPage = /** @class */ (function () {
    function RedeemCouponsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    RedeemCouponsPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    RedeemCouponsPage.prototype.goToBookingDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking_date__["a" /* BookingDatePage */]);
    };
    RedeemCouponsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-redeem-coupons',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/coupons/redeem-coupons.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Canjear cupón</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n        <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <p no-margin>Seleccioná el servicio que quieras.</p>\n          </ion-col>\n            <ion-col col-12>\n                <ion-card style="background-color: red; height: 158px; border-radius: 6px; position: relative; cursor: pointer;" (click)="goToBookingDate()">\n                <!-- <img src="assets/imgs/maxresdefault.jpg"/> -->\n                <div style="background-color: rgba(0,0,0,0.4); border-radius: 0 0 5px 5px; width: 100%; height: 32px; position: absolute; bottom: 0; left: 0;">\n                    <ion-grid>\n                    <ion-row>\n                        <ion-col text-left>\n                        <ion-icon name="md-time"></ion-icon>\n                        60min\n                        </ion-col>\n                        <ion-col text-center style="color: #ffffff;">\n                        Mani-Pedi\n                        </ion-col>\n                        <ion-col text-right>\n                        $600\n                        </ion-col>\n                    </ion-row>\n                    </ion-grid>\n                </div>\n                </ion-card>\n                <ion-card style="background-color: blue; height: 158px; border-radius: 6px; position: relative; cursor: pointer;" (click)="goToBookingDate()">\n                <!-- <img src="assets/imgs/maxresdefault.jpg"/> -->\n                <div style="background-color: rgba(0,0,0,0.4); border-radius: 0 0 5px 5px; width: 100%; height: 32px; position: absolute; bottom: 0; left: 0;">\n                    <ion-grid>\n                    <ion-row>\n                        <ion-col text-left>\n                        <ion-icon name="md-time"></ion-icon>\n                        30min\n                        </ion-col>\n                        <ion-col text-center style="color: #ffffff;">\n                        Manicura\n                        </ion-col>\n                        <ion-col text-right>\n                        $300\n                        </ion-col>\n                    </ion-row>\n                    </ion-grid>\n                </div>\n                </ion-card>\n                <ion-card style="background-color: green; height: 158px; border-radius: 6px; position: relative; cursor: pointer;" (click)="goToBookingDate()">\n                <!-- <img src="assets/imgs/maxresdefault.jpg"/> -->\n                <div style="background-color: rgba(0,0,0,0.4); border-radius: 0 0 5px 5px; width: 100%; height: 32px; position: absolute; bottom: 0; left: 0;">\n                    <ion-grid>\n                    <ion-row>\n                        <ion-col text-left>\n                        <ion-icon name="md-time"></ion-icon>\n                        30min\n                        </ion-col>\n                        <ion-col text-center style="color: #ffffff;">\n                        Pedicura\n                        </ion-col>\n                        <ion-col text-right>\n                        $300\n                        </ion-col>\n                    </ion-row>\n                    </ion-grid>\n                </div>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-12 text-center>\n            <button ion-button block (click)="goToCouponsEdit()">Confirmar servicio</button>\n            </ion-col>\n        </ion-row>\n\n        </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/coupons/redeem-coupons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], RedeemCouponsPage);
    return RedeemCouponsPage;
}());

//# sourceMappingURL=redeem-coupons.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_onboarding_onboarding__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_services_services__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_services_service_mani_pedi__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_services_service_mani__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_services_service_pedi__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking_people__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_auth_sign_in__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_auth_sign_up__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_auth_welcome__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_auth_password_recover__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_auth_password_recover_validation__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_auth_password_change__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_auth_password_change_validation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_auth_terms_and_conditions__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_booking_booking_date__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_booking_booking_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_booking_booking_playment__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_summary_summary__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_summary_confirmation_error__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_summary_confirmation_success__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_report_problem_report_problem__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile_edit__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_locations_locations__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_locations_locations_edit__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_playments_playments__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_playments_playments_edit__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_coupons_coupons__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_coupons_coupon_copied__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_coupons_redeem_coupons__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_tabs_tabs__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// ONBOARDING

// ANONYMOUS





// AUTH








// AUTHORIZED



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // ONBOARDING
                __WEBPACK_IMPORTED_MODULE_5__pages_onboarding_onboarding__["a" /* OnboardingPage */],
                // ANONYMOUS
                __WEBPACK_IMPORTED_MODULE_6__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_services_service_mani_pedi__["a" /* ServiceManiPediPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_services_service_mani__["a" /* ServiceManiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_services_service_pedi__["a" /* ServicePediPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking_people__["a" /* BookingPeoplePage */],
                // AUTH
                __WEBPACK_IMPORTED_MODULE_11__pages_auth_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_auth_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_auth_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_auth_password_recover__["a" /* PasswordRecoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_password_recover_validation__["a" /* PasswordRecoverValidationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_auth_password_change__["a" /* PasswordChangePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_auth_password_change_validation__["a" /* PasswordChangeValidationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_auth_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                // AUTHORIZED
                __WEBPACK_IMPORTED_MODULE_19__pages_booking_booking_date__["a" /* BookingDatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_booking_booking_location__["a" /* BookingLocationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_booking_booking_playment__["a" /* BookingPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_summary_confirmation_error__["a" /* ConfirmationErrorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_summary_confirmation_success__["a" /* ConfirmationSuccessPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_report_problem_report_problem__["a" /* ReportProblemPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile_edit__["a" /* ProfileEditPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_locations_locations__["a" /* LocationsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_locations_locations_edit__["a" /* LocationsEditPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_playments_playments__["a" /* PlaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_playments_playments_edit__["a" /* PlaymentsEditPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_coupons_coupons__["a" /* CouponsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_coupons_coupon_copied__["a" /* CouponCopiedPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_coupons_redeem_coupons__["a" /* RedeemCouponsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // ONBOARDING
                __WEBPACK_IMPORTED_MODULE_5__pages_onboarding_onboarding__["a" /* OnboardingPage */],
                // ANONYMOUS
                __WEBPACK_IMPORTED_MODULE_6__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_services_service_mani_pedi__["a" /* ServiceManiPediPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_services_service_mani__["a" /* ServiceManiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_services_service_pedi__["a" /* ServicePediPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking_people__["a" /* BookingPeoplePage */],
                // AUTH
                __WEBPACK_IMPORTED_MODULE_11__pages_auth_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_auth_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_auth_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_auth_password_recover__["a" /* PasswordRecoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_password_recover_validation__["a" /* PasswordRecoverValidationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_auth_password_change__["a" /* PasswordChangePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_auth_password_change_validation__["a" /* PasswordChangeValidationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_auth_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                // AUTHORIZED
                __WEBPACK_IMPORTED_MODULE_19__pages_booking_booking_date__["a" /* BookingDatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_booking_booking_location__["a" /* BookingLocationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_booking_booking_playment__["a" /* BookingPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_summary_confirmation_error__["a" /* ConfirmationErrorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_summary_confirmation_success__["a" /* ConfirmationSuccessPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_report_problem_report_problem__["a" /* ReportProblemPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile_edit__["a" /* ProfileEditPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_locations_locations__["a" /* LocationsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_locations_locations_edit__["a" /* LocationsEditPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_playments_playments__["a" /* PlaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_playments_playments_edit__["a" /* PlaymentsEditPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_coupons_coupons__["a" /* CouponsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_coupons_coupon_copied__["a" /* CouponCopiedPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_coupons_redeem_coupons__["a" /* RedeemCouponsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_location__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingDatePage = /** @class */ (function () {
    function BookingDatePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BookingDatePage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    BookingDatePage.prototype.goToBookingLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_location__["a" /* BookingLocationPage */]);
    };
    BookingDatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking-date',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/booking/booking-date.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Fecha y hora (1/3)</ion-title>\n    <!-- Versión Canjear descuento start -->\n    <!-- <ion-title>Canjear cupón (1/2)</ion-title> -->\n    <!-- Versión Canjear descuento end -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            COMENTARIO PLUGIN FECHA Y HORA\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 text-center>\n            <button ion-button block (click)="goToBookingLocation()">Confirmar fecha y hora</button>\n            <small><i>Toda reserva requiere 2 horas de anticipación.</i></small>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/booking/booking-date.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], BookingDatePage);
    return BookingDatePage;
}());

//# sourceMappingURL=booking-date.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_onboarding_onboarding__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { TabsPage } from '../pages/tabs/tabs';
// import { timer } from 'rxjs/observable/timer';
var MyApp = /** @class */ (function () {
    // rootPage:any = TabsPage;
    // showSplash = true;
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_onboarding_onboarding__["a" /* OnboardingPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.show();
            // timer(3500).subscribe(() => this.showSplash = false);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/app/app.html"*/'<!-- <div *ngIf="showSplash" class="splash">\n    <div class="splash__img" @splashscreen></div>\n</div> -->\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/app/app.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* trigger */])('splashscreen', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(50, Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationSuccessPage = /** @class */ (function () {
    function ConfirmationSuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmationSuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    ConfirmationSuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmation-success',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/summary/confirmation-success.html"*/'<ion-content class="pages__single">\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n          <img src="../../assets/imgs/confirmation-success.svg" alt="">\n          <h1>¡Todo listo!</h1>\n          <p>Vas a recibir una notificación cuando una de nuestras Loviz confirme el trabajo y el horario seleccionado.</p>\n      </ion-col>\n      <ion-col col-12>\n            <small>¿Te quedaste con ganas de pedir algo?</small>\n            <button ion-button small (click)="goToChecked()">Agregar otro servicio</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/summary/confirmation-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ConfirmationSuccessPage);
    return ConfirmationSuccessPage;
}());

//# sourceMappingURL=confirmation-success.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    // tab2Root = AboutPage;
    // tab3Root = ContactPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__services_services__["a" /* ServicesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Servicios" tabIcon="services"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Programados" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Hechos" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_sign_up__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_mani_pedi__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_mani__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_pedi__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_problem_report_problem__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__coupons_redeem_coupons__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ServicesPage = /** @class */ (function () {
    function ServicesPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    ServicesPage.prototype.goToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__auth_sign_up__["a" /* SignUpPage */]);
    };
    ServicesPage.prototype.goToReportProblem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__report_problem_report_problem__["a" /* ReportProblemPage */]);
    };
    ServicesPage.prototype.goToRedeemCoupons = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__coupons_redeem_coupons__["a" /* RedeemCouponsPage */]);
    };
    ServicesPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
    };
    ServicesPage.prototype.goToServiceManiPedi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__service_mani_pedi__["a" /* ServiceManiPediPage */]);
    };
    ServicesPage.prototype.goToServiceMani = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__service_mani__["a" /* ServiceManiPage */]);
    };
    ServicesPage.prototype.goToServicePedi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__service_pedi__["a" /* ServicePediPage */]);
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/services/services.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>Servicios</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="heart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content card-background-page>\n  <button ion-button (click)="goToSignUp()">Sign up</button>\n  <button ion-button (click)="goToReportProblem()">Reportar problema</button>\n  <button ion-button (click)="goToProfile()">Perfil</button>\n  <button ion-button (click)="goToRedeemCoupons()">Canjear cupón</button>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col text-center>\n        <h1>¡Hola!</h1>\n        <p>¿Qué tipo de servicio te gustaría hacerte hoy?</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card style="background-color: red; height: 158px; border-radius: 6px; position: relative; cursor: pointer;" (click)="goToServiceManiPedi()">\n          <!-- <img src="assets/imgs/maxresdefault.jpg"/> -->\n          <div style="background-color: rgba(0,0,0,0.4); border-radius: 0 0 5px 5px; width: 100%; height: 32px; position: absolute; bottom: 0; left: 0;">\n            <ion-grid>\n              <ion-row>\n                <ion-col text-left>\n                  <ion-icon name="md-time"></ion-icon>\n                  60min\n                </ion-col>\n                <ion-col text-center style="color: #ffffff;">\n                  Mani-Pedi\n                </ion-col>\n                <ion-col text-right>\n                  $600\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card>\n        <ion-card style="background-color: blue; height: 158px; border-radius: 6px; position: relative; cursor: pointer;" (click)="goToServiceMani()">\n          <!-- <img src="assets/imgs/maxresdefault.jpg"/> -->\n          <div style="background-color: rgba(0,0,0,0.4); border-radius: 0 0 5px 5px; width: 100%; height: 32px; position: absolute; bottom: 0; left: 0;">\n            <ion-grid>\n              <ion-row>\n                <ion-col text-left>\n                  <ion-icon name="md-time"></ion-icon>\n                  30min\n                </ion-col>\n                <ion-col text-center style="color: #ffffff;">\n                  Manicura\n                </ion-col>\n                <ion-col text-right>\n                  $300\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card>\n        <ion-card style="background-color: green; height: 158px; border-radius: 6px; position: relative; cursor: pointer;" (click)="goToServicePedi()">\n          <!-- <img src="assets/imgs/maxresdefault.jpg"/> -->\n          <div style="background-color: rgba(0,0,0,0.4); border-radius: 0 0 5px 5px; width: 100%; height: 32px; position: absolute; bottom: 0; left: 0;">\n            <ion-grid>\n              <ion-row>\n                <ion-col text-left>\n                  <ion-icon name="md-time"></ion-icon>\n                  30min\n                </ion-col>\n                <ion-col text-center style="color: #ffffff;">\n                  Pedicura\n                </ion-col>\n                <ion-col text-right>\n                  $300\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/services/services.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_date__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingPeoplePage = /** @class */ (function () {
    function BookingPeoplePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BookingPeoplePage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.setBackButtonText('');
    };
    BookingPeoplePage.prototype.goToBookingDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_date__["a" /* BookingDatePage */]);
    };
    BookingPeoplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking-people',template:/*ion-inline-start:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/booking/booking-people.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button class="btn__back--black" navPop>\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Selección personas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page__background">\n\n  <div class="card--float">\n    <form #form="ngForm">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-12>\n            <p margin-top>Si van a ser más de una para este servicio, por favor indicalo a continuación.</p>\n            <p no-margin>Tené en cuenta que esto condicionará la duración y el costo total del mismo.</p>\n          </ion-col>\n          <ion-col col-12 text-center>\n            <div class="booking-people__peoples">\n              <div class="booking-people__minus" disabled>\n                <ion-icon name="md-remove"></ion-icon>\n              </div>\n              <div class="booking-people__number">\n                2\n              </div>\n              <div class="booking-people__plus">\n                <ion-icon name="md-add"></ion-icon>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="container__duration">\n              <h1>60min</h1>\n              <small>Duración</small>\n            </div>\n            <div class="container__price">\n              <h1>$600</h1>\n              <small>Precio</small>\n            </div>\n          </ion-col>\n          <ion-col col-12 text-center>\n            <button ion-button block (click)="goToBookingDate()">Configurar reserva</button>\n            <small><i>Toda reserva requiere 2 horas de anticipación.</i></small>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carludenise/Documents/Carli/freelos/loviz/loviz/src/pages/booking/booking-people.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], BookingPeoplePage);
    return BookingPeoplePage;
}());

//# sourceMappingURL=booking-people.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map