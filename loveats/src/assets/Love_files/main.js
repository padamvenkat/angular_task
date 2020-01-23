(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-body></app-body>\n<app-topic2></app-topic2>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/body.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/body.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row row1\">\n        <div class=\"col\"></div>\n        <div class=\"col\"></div>\n        <div class=\"col hai\">\n                <strong>Electronics</strong>\n        </div>\n        <div class=\"col hai\">\n            <strong>TVs&Appliance</strong>\n        </div>\n        <div class=\"col hai\">\n            <strong>Men</strong>\n        </div>\n        <div class=\"col hai\">\n            <strong>Women</strong>\n        </div>\n        <div class=\"col hai\">\n            <strong>Baby&Kids</strong>\n        </div>\n        <div class=\"col hai\">\n            <strong>Home&Furniture</strong>\n        </div>\n        <div class=\"col hai\">\n            <strong>Sports&Books&More</strong>\n        </div>\n        <div class=\"col hai\">\n           <strong>OfferZone</strong> \n        </div>\n        <div class=\"col\"></div>\n        <div class=\"col\"></div>\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row row1\">\n        <div class=\"col-4 d-flex justify-content-start\">\n            <img class=\"img1\"src=\"assets/images/tv1.jpg\">\n        </div>\n        <div class=\"col-8 d-flex justify-content-start\">\n        <input class=\"search1\"type=\"text\">\n        <i class=\"material-icons search-icon\">search</i>\n        <div class=\"cart-image\">\n                <i class=\"material-icons icon-color\">apps</i>\n                <i class=\"material-icons icon-color\">shopping_cart</i>\n                <i class=\"material-icons icon-color\">perm_identity</i>\n            </div>\n        <!-- <button (click)=\"action2()\">-</button>\n\n         <button (click)=\"action1()\">+<span *ngIf=\"count>=0\">{{count}}</span></button> -->\n         \n         </div>\n       \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>notfound works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topic/topic.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topic/topic.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>topic works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topic2/topic2.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topic2/topic2.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-3 text-center\">\n    <input type=\"text\" [(ngModel)]=\"searchtext\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 mt-5 pt-4\" *ngFor=\"let item of items|filter:searchtext\">\n                <a href=\"#\">\n                    <img [src]=\"item['image']\" class=\"imag images\">\n                </a>\n                <p>\n                    {{item['item_name']}}\n                </p>\n                <strong>₹{{item['price']}}</strong>\n                <button (click)=\"action2()\">-</button>Add\n                <button (click)=\"action1()\">+<span *ngIf=\"count>0\">{{count}}</span></button>\n            </div>\n        </div>\n    </div>\n    \n    <!------Social------>\n    <!-- <div class=\"jumbotron bg-light text-center\">\n        <p>\n            <a href=\"#\">Facebook</a><br /><br />\n            <a href=\"#\">Twitter</a> <br />\n            <br /><a href=\"#\">Youtube</a>\n        </p>\n    </div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topic3/topic3.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topic3/topic3.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>topic3 works!</p>\n"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");




const routes = [
    { path: "**", component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'love';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/topic/topic.component.ts");
/* harmony import */ var _topic2_topic2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topic2/topic2.component */ "./src/app/topic2/topic2.component.ts");
/* harmony import */ var _topic3_topic3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topic3/topic3.component */ "./src/app/topic3/topic3.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _body_body_component__WEBPACK_IMPORTED_MODULE_9__["BodyComponent"],
            _topic_topic_component__WEBPACK_IMPORTED_MODULE_10__["TopicComponent"],
            _topic2_topic2_component__WEBPACK_IMPORTED_MODULE_11__["Topic2Component"],
            _topic3_topic3_component__WEBPACK_IMPORTED_MODULE_12__["Topic3Component"],
            _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/body/body.component.scss":
/*!******************************************!*\
  !*** ./src/app/body/body.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row1 {\n  max-height: 25px;\n  border: 1px solid #b1b6bb;\n  background-color: #edf7f3;\n  color: #270505;\n}\n\n.hai:hover {\n  color: #ee0b0b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlbmthdC9sb3ZlYXRzL2xvdmUvc3JjL2FwcC9ib2R5L2JvZHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIQTs7QURRQTtFQUNJLGNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5oYWl7XG4gICAgXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbi8vIH1cbi5yb3cxe1xubWF4LWhlaWdodDogMjVweDtcbmJvcmRlcjoxcHggc29saWQgcmdiKDE3NywgMTgyLCAxODcpO1xuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjQ3LCAyNDMpO1xuY29sb3I6cmdiKDM5LCA1LCA1KTtcblxufVxuXG5cbi5oYWk6aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyMzgsIDExLCAxMSk7XG59IiwiLnJvdzEge1xuICBtYXgtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiNmJiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2YzO1xuICBjb2xvcjogIzI3MDUwNTtcbn1cblxuLmhhaTpob3ZlciB7XG4gIGNvbG9yOiAjZWUwYjBiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BodyComponent = class BodyComponent {
    constructor() { }
    ngOnInit() {
    }
};
BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-body',
        template: __webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/body.component.html"),
        styles: [__webpack_require__(/*! ./body.component.scss */ "./src/app/body/body.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BodyComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row1 {\n  background-color: #1f34ee;\n  max-height: 35px;\n}\n\n.img1 {\n  width: 40px;\n  height: 35px;\n}\n\n.search1 {\n  height: 20px;\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlbmthdC9sb3ZlYXRzL2xvdmUvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NBOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdzF7XG5iYWNrZ3JvdW5kLWNvbG9yOnJnYigzMSwgNTIsIDIzOCk7XG5tYXgtaGVpZ2h0OiAzNXB4O1xufVxuLmltZzF7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuLnNlYXJjaDF7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcblxufSIsIi5yb3cxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzRlZTtcbiAgbWF4LWhlaWdodDogMzVweDtcbn1cblxuLmltZzEge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uc2VhcmNoMSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDUwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    // count=0;
    constructor() { }
    // action1(){
    //    this.count+=1;
    //  }
    //  action2(){
    //   this.count-=1;
    // }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/notfound/notfound.component.scss":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: __webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html"),
        styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/notfound/notfound.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotfoundComponent);



/***/ }),

/***/ "./src/app/topic/topic.component.scss":
/*!********************************************!*\
  !*** ./src/app/topic/topic.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljL3RvcGljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/topic/topic.component.ts":
/*!******************************************!*\
  !*** ./src/app/topic/topic.component.ts ***!
  \******************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopicComponent = class TopicComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/index.js!./src/app/topic/topic.component.html"),
        styles: [__webpack_require__(/*! ./topic.component.scss */ "./src/app/topic/topic.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TopicComponent);



/***/ }),

/***/ "./src/app/topic2/topic2.component.scss":
/*!**********************************************!*\
  !*** ./src/app/topic2/topic2.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".images {\n  max-width: 10c;\n  max-height: 8pc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlbmthdC9sb3ZlYXRzL2xvdmUvc3JjL2FwcC90b3BpYzIvdG9waWMyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b3BpYzIvdG9waWMyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RvcGljMi90b3BpYzIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Vze1xuICAgIG1heC13aWR0aDoxMGM7XG4gICAgbWF4LWhlaWdodDo4cGM7XG59IiwiLmltYWdlcyB7XG4gIG1heC13aWR0aDogMTBjO1xuICBtYXgtaGVpZ2h0OiA4cGM7XG59Il19 */"

/***/ }),

/***/ "./src/app/topic2/topic2.component.ts":
/*!********************************************!*\
  !*** ./src/app/topic2/topic2.component.ts ***!
  \********************************************/
/*! exports provided: Topic2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic2Component", function() { return Topic2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Topic2Component = class Topic2Component {
    constructor() {
        this.count = 0;
        this.items = [
            {
                "item_name": "Mi",
                "image": "assets/images/tv1.jpg",
                "price": 12499
            },
            {
                "item_name": "Samsung ",
                "image": "assets/images/i1.jpg",
                "price": 17000
            },
            {
                "item_name": "LG",
                "image": "assets/images/lap.jpeg",
                "price": 37000
            },
            {
                "item_name": " LED Smart TV",
                "image": "assets/images/logo.png",
                "price": 7000
            },
            {
                "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
                "image": "assets/images/mb.jpeg",
                "price": 37000
            },
            {
                "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
                "image": "assets/images/mb1.jpeg",
                "price": 17000
            },
            {
                "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
                "image": "assets/images/mb2.jpeg",
                "price": 27000
            },
            {
                "item_name": "micromax",
                "image": "assets/images/mb3.jpeg",
                "price": 5000
            },
            {
                "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
                "image": "assets/images/mb4.jpg",
                "price": 7000
            },
            {
                "item_name": " Smart TV",
                "image": "assets/images/tv1.jpg",
                "price": 70000
            },
            {
                "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
                "image": "assets/images/tv1.jpg",
                "price": 70000
            },
            {
                "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
                "image": "assets/images/tv1.jpg",
                "price": 70000
            },
            {
                "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
                "image": "assets/images/tv1.jpg",
                "price": 70000
            }
        ];
    }
    action1() {
        this.count += 1;
    }
    action2() {
        this.count -= 1;
    }
    ngOnInit() {
    }
};
Topic2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic2',
        template: __webpack_require__(/*! raw-loader!./topic2.component.html */ "./node_modules/raw-loader/index.js!./src/app/topic2/topic2.component.html"),
        styles: [__webpack_require__(/*! ./topic2.component.scss */ "./src/app/topic2/topic2.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Topic2Component);



/***/ }),

/***/ "./src/app/topic3/topic3.component.scss":
/*!**********************************************!*\
  !*** ./src/app/topic3/topic3.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljMy90b3BpYzMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/topic3/topic3.component.ts":
/*!********************************************!*\
  !*** ./src/app/topic3/topic3.component.ts ***!
  \********************************************/
/*! exports provided: Topic3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic3Component", function() { return Topic3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Topic3Component = class Topic3Component {
    constructor() { }
    ngOnInit() {
    }
};
Topic3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic3',
        template: __webpack_require__(/*! raw-loader!./topic3.component.html */ "./node_modules/raw-loader/index.js!./src/app/topic3/topic3.component.html"),
        styles: [__webpack_require__(/*! ./topic3.component.scss */ "./src/app/topic3/topic3.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Topic3Component);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/venkat/loveats/love/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /home/venkat/loveats/love/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map