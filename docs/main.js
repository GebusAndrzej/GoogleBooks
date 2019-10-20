(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booklist/booklist.component */ "./src/app/booklist/booklist.component.ts");
/* harmony import */ var _bookitem_bookitem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookitem/bookitem.component */ "./src/app/bookitem/bookitem.component.ts");





var routes = [
    { path: '', component: _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_3__["BooklistComponent"] },
    { path: 'book/:id', component: _bookitem_bookitem_component__WEBPACK_IMPORTED_MODULE_4__["BookitemComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    min-height: 10vh;\r\n    position: relative;\r\n    margin:0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n    <router-outlet></router-outlet>\n</section>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'books';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booklist/booklist.component */ "./src/app/booklist/booklist.component.ts");
/* harmony import */ var _services_animvariable_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/animvariable.service */ "./src/app/services/animvariable.service.ts");
/* harmony import */ var _bookitem_bookitem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bookitem/bookitem.component */ "./src/app/bookitem/bookitem.component.ts");
/* harmony import */ var _pipes_shortdesc_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/shortdesc.pipe */ "./src/app/pipes/shortdesc.pipe.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_8__["BooklistComponent"],
                _bookitem_bookitem_component__WEBPACK_IMPORTED_MODULE_10__["BookitemComponent"],
                _pipes_shortdesc_pipe__WEBPACK_IMPORTED_MODULE_11__["ShortdescPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_services_animvariable_service__WEBPACK_IMPORTED_MODULE_9__["AnimvariableService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookitem/bookitem.component.css":
/*!*************************************************!*\
  !*** ./src/app/bookitem/bookitem.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-left:50%;\r\n    margin-top: 100px;\r\n    transform: translate(-50%);\r\n    margin-bottom: 50px;\r\n    border-radius: 5px;\r\n\r\n    width:100%;\r\n    min-height: 40px;\r\n    background: linear-gradient(rgb(15, 15, 15),rgb(27, 27, 27));\r\n    color: rgb(196, 196, 196);\r\n    overflow-y: auto;\r\n\r\n    -webkit-animation: show_bookitem 1s;\r\n\r\n            animation: show_bookitem 1s;\r\n    text-align: center;\r\n\r\n}\r\n\r\n@-webkit-keyframes show_bookitem {\r\n    0% {\r\n        transform: rotateY(270deg) translateX(-50%);\r\n\t    transform-origin: left;\r\n    }\r\n    100% {\r\n\r\n    }\r\n}\r\n\r\n@keyframes show_bookitem {\r\n    0% {\r\n        transform: rotateY(270deg) translateX(-50%);\r\n\t    transform-origin: left;\r\n    }\r\n    100% {\r\n\r\n    }\r\n}\r\n\r\n.container figure{\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.container figure img {\r\n    max-width: 100%;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-drag: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.container nav{\r\n    height:35px;\r\n    width:100%;\r\n    position: relative;\r\n}\r\n\r\n.container nav button {\r\n    width:100%;\r\n    height:100%;\r\n    background: linear-gradient(rgb(56, 56, 56),rgb(37, 37, 37));\r\n    border-color: #80193a;\r\n    color: #a3a3a3;\r\n    border-radius: 3px 3px 0 0;\r\n}\r\n\r\n.grid figure a{\r\n    text-decoration: none;\r\n    color:rgb(204, 204, 204);\r\n    border-radius: 0px 0px 5px 5px;\r\n    left: 50%;\r\n}\r\n\r\n.grid .desc{\r\n    padding: 20px;\r\n    color: #a3a3a3;\r\n}\r\n\r\n.color-primary{\r\n    color: #8F1D2C;\r\n}\r\n\r\n.color-secondary{\r\n    color:#80193a;\r\n}\r\n\r\nhr{\r\n    border-color: #80193a00;\r\n    box-shadow: 0px 1px 4px #8F1D2C;\r\n}\r\n\r\n.limit{\r\n    width: 100%;\r\n    min-height:30px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    text-shadow: 1px 0px 3px black;\r\n    background: linear-gradient(#DB2B30,#8F1D2C);\r\n    line-height: 30px;\r\n    font-size: 23px;\r\n    padding:2px 0px;\r\n}\r\n\r\n@media (min-width: 568px) {\r\n    .container{\r\n        max-width: 70vw;\r\n    }\r\n\r\n    .container .grid{\r\n        display: grid;\r\n        grid-template-areas: \r\n            \"img info\"\r\n            \"desc desc\";\r\n        grid-template-columns: 200px 1fr;\r\n    }\r\n\r\n    .grid figure {\r\n        grid-area: img;\r\n    }\r\n\r\n    .grid figure img{\r\n        width:128px;\r\n    }\r\n    .grid figure a{\r\n        text-decoration: none;\r\n        color:rgb(204, 204, 204);\r\n        background-color: rgb(15, 46, 185);\r\n        width:120px;\r\n        display:block;\r\n        border-radius: 0px 0px 5px 5px;\r\n    }\r\n\r\n    .grid .info {\r\n        grid-area: info;\r\n        text-align: left;\r\n    }\r\n    \r\n    .grid .authors{\r\n        display:inline-block;\r\n        margin: 5px;\r\n        margin-left: 0px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .grid .desc{\r\n        grid-area: desc;\r\n        word-break: break-word;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2l0ZW0vYm9va2l0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNERBQTREO0lBQzVELHlCQUF5QjtJQUN6QixnQkFBZ0I7O0lBRWhCLG1DQUEyQjs7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztLQUM5QyxzQkFBc0I7SUFDdkI7SUFDQTs7SUFFQTtBQUNKOztBQVJBO0lBQ0k7UUFDSSwyQ0FBMkM7S0FDOUMsc0JBQXNCO0lBQ3ZCO0lBQ0E7O0lBRUE7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCw0REFBNEQ7SUFDNUQscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7UUFDYjs7dUJBRWU7UUFDZixnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLGtDQUFrQztRQUNsQyxXQUFXO1FBQ1gsYUFBYTtRQUNiLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHFCQUFxQjtJQUN6Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpdGVtL2Jvb2tpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OjUwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigxNSwgMTUsIDE1KSxyZ2IoMjcsIDI3LCAyNykpO1xyXG4gICAgY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgYW5pbWF0aW9uOiBzaG93X2Jvb2tpdGVtIDFzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93X2Jvb2tpdGVtIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjcwZGVnKSB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdCAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIGZpZ3VyZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIGZpZ3VyZSBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIG5hdntcclxuICAgIGhlaWdodDozNXB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBuYXYgYnV0dG9uIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoNTYsIDU2LCA1NikscmdiKDM3LCAzNywgMzcpKTtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwMTkzYTtcclxuICAgIGNvbG9yOiAjYTNhM2EzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbn1cclxuLmdyaWQgZmlndXJlIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpyZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuLmdyaWQgLmRlc2N7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbn1cclxuXHJcbi5jb2xvci1wcmltYXJ5e1xyXG4gICAgY29sb3I6ICM4RjFEMkM7XHJcbn1cclxuLmNvbG9yLXNlY29uZGFyeXtcclxuICAgIGNvbG9yOiM4MDE5M2E7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODAxOTNhMDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAjOEYxRDJDO1xyXG59XHJcblxyXG4ubGltaXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6MzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAwcHggM3B4IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNEQjJCMzAsIzhGMUQyQyk7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHBhZGRpbmc6MnB4IDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIC5ncmlke1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgICAgIFwiaW1nIGluZm9cIlxyXG4gICAgICAgICAgICBcImRlc2MgZGVzY1wiO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkIGZpZ3VyZSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBpbWc7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQgZmlndXJlIGltZ3tcclxuICAgICAgICB3aWR0aDoxMjhweDtcclxuICAgIH1cclxuICAgIC5ncmlkIGZpZ3VyZSBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjpyZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCA0NiwgMTg1KTtcclxuICAgICAgICB3aWR0aDoxMjBweDtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZCAuaW5mbyB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBpbmZvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ncmlkIC5hdXRob3Jze1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkIC5kZXNje1xyXG4gICAgICAgIGdyaWQtYXJlYTogZGVzYztcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bookitem/bookitem.component.html":
/*!**************************************************!*\
  !*** ./src/app/bookitem/bookitem.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <nav>\n    <button (click)=\"back()\"><i class=\"fas fa-arrow-left\"></i></button>\n  </nav>\n\n  <div class=\"grid\">\n\n    <figure>\n\n        <ng-container *ngIf=\"this.animvar.book.volumeInfo.imageLinks != undefined; then thenTemplate; else elseTemplate\"></ng-container>\n        <ng-template #thenTemplate>\n          <img src=\"{{this.animvar.book.volumeInfo.imageLinks.thumbnail}}\">\n        </ng-template>\n        <ng-template #elseTemplate>\n            <img src=\"assets/bookcover.png\">\n        </ng-template>\n        \n        <a href=\"{{this.animvar.book.volumeInfo.previewLink}}\"><i class=\"fas fa-external-link-alt\"></i></a>\n    </figure>\n    \n\n    <div class=\"info color-secondary\">\n      <h1 class=\"title color-primary\">\n        {{this.animvar.book.volumeInfo.title}}\n      </h1>\n\n      <h4 class=\"authors \" *ngFor=\"let author of this.animvar.book.volumeInfo.authors\">{{author}}</h4>\n\n      <h3 class=\"date \">{{this.animvar.book.volumeInfo.publishedDate}}</h3>\n      <h4 class=\"publisher \">{{this.animvar.book.volumeInfo.publisher}}</h4>\n    \n      Pages: {{this.animvar.book.volumeInfo.pageCount}}\n    \n    \n    </div>\n\n    \n\n    <div class=\"desc\">\n      <hr/>\n      <span [innerHTML]=\"this.animvar.book.volumeInfo.description\"></span>\n    </div>\n\n</div>\n\n<div class=\"limit\" *ngIf=\"this.animvar.ApiKeyLimit\">\n  Sorry, API demo key reached limit of requests\n</div>\n\n</main>"

/***/ }),

/***/ "./src/app/bookitem/bookitem.component.ts":
/*!************************************************!*\
  !*** ./src/app/bookitem/bookitem.component.ts ***!
  \************************************************/
/*! exports provided: BookitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookitemComponent", function() { return BookitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animvariable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/animvariable.service */ "./src/app/services/animvariable.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_getbooks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getbooks.service */ "./src/app/services/getbooks.service.ts");





var BookitemComponent = /** @class */ (function () {
    function BookitemComponent(animvar, router, route, getbooksservice) {
        this.animvar = animvar;
        this.router = router;
        this.route = route;
        this.getbooksservice = getbooksservice;
    }
    BookitemComponent.prototype.ngOnInit = function () {
        this.animvar.navdisplay = 'none';
        var id = this.route.snapshot.paramMap.get('id');
        this.getbook(id);
        this.ret = id;
    };
    BookitemComponent.prototype.getbook = function (id) {
        var _this = this;
        this.getbooksservice.getBook(id).subscribe(function (ret) {
            _this.animvar.book = ret;
        }, function (error) {
            _this.animvar.ApiKeyLimit = true;
        });
    };
    // back button
    BookitemComponent.prototype.back = function () {
        this.animvar.navdisplay = 'flex';
        this.router.navigateByUrl('/');
        //this.router.navigateByUrl('/#' + this.ret);
    };
    BookitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookitem',
            template: __webpack_require__(/*! ./bookitem.component.html */ "./src/app/bookitem/bookitem.component.html"),
            styles: [__webpack_require__(/*! ./bookitem.component.css */ "./src/app/bookitem/bookitem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_animvariable_service__WEBPACK_IMPORTED_MODULE_2__["AnimvariableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_getbooks_service__WEBPACK_IMPORTED_MODULE_4__["GetbooksService"]])
    ], BookitemComponent);
    return BookitemComponent;
}());



/***/ }),

/***/ "./src/app/booklist/booklist.component.css":
/*!*************************************************!*\
  !*** ./src/app/booklist/booklist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\r\n    width: 100%;\r\n\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    margin:auto;\r\n    margin-top: 150px;\r\n    margin-bottom: 150px;\r\n    background: linear-gradient(rgb(15, 15, 15),rgb(27, 27, 27));\r\n    color: rgb(209, 209, 209);\r\n\r\n\r\n    visibility: visible;\r\n    opacity: 1;\r\n\r\n    -webkit-animation: show 1s .5s;\r\n\r\n            animation: show 1s .5s;\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in; \r\n    -webkit-animation-fill-mode: both; \r\n            animation-fill-mode: both;\r\n\r\n}\r\n\r\nmain .bookshelf {\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 5px;\r\n}\r\n\r\n@-webkit-keyframes show {\r\n    0% {\r\n        display:none;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n        visibility: visible;\r\n        display:grid;\r\n    }\r\n}\r\n\r\n@keyframes show {\r\n    0% {\r\n        display:none;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n        visibility: visible;\r\n        display:grid;\r\n    }\r\n}\r\n\r\n.no-results {\r\n    width: 100%;\r\n    height: 36x;\r\n    background: linear-gradient(rgb(54, 102, 233),rgb(29, 71, 189));\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 5px 0px;\r\n}\r\n\r\n.load-more {\r\n    width: 100%;\r\n    height: 36x;\r\n    background: linear-gradient(rgb(54, 102, 233),rgb(29, 71, 189));\r\n    border-color: rgb(25, 64, 172);\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 5px 0px;\r\n    margin-top:3px;\r\n}\r\n\r\n.bookitem{\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    width: 99%;\r\n    box-shadow: 0px 0px 3px rgb(44, 44, 44);\r\n    margin: 5px;\r\n    display:inline-block;\r\n}\r\n\r\n.bookitem figure{\r\n    max-width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.bookitem figure img{\r\n    width:100%;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-drag: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.bookitem .desc {\r\n    position: absolute;\r\n    left: 0;\r\n    top:0;\r\n}\r\n\r\n.bookitem .desc *{\r\n    display: none;\r\n}\r\n\r\n.bookitem .desc h3{\r\n    display:inline-block;\r\n    color: #8F1D2C;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    opacity: .9;\r\n    text-shadow: 1px 1px 2px black;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.966),rgba(0, 0, 0, 0));\r\n    cursor: pointer;\r\n}\r\n\r\n.limit{\r\n    width: 100%;\r\n    min-height:30px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    text-shadow: 1px 0px 3px black;\r\n    background: linear-gradient(#DB2B30,#8F1D2C);\r\n    line-height: 30px;\r\n    font-size: 23px;\r\n    padding:2px 0px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    main{\r\n        \r\n        max-width: 70vw;\r\n        \r\n        border-radius: 5px;\r\n        overflow-y: auto;\r\n    }\r\n\r\n    main .bookshelf {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .bookitem:hover{\r\n        box-shadow: 0px 0px 10px gray;\r\n    }\r\n    .bookitem .desc{\r\n        position: relative;\r\n        width: calc(100% - 220px);\r\n    }\r\n    .bookitem .desc *{\r\n        display: block;\r\n    }\r\n\r\n    .bookitem .desc h3{\r\n        display:inline-block;\r\n        width: calc(100% - 110px);\r\n        opacity:1;\r\n        margin-bottom: 5px;\r\n        background: none;\r\n    }\r\n    .bookitem .desc h4{\r\n        position: absolute;\r\n        display:inline-block;\r\n        top:0px;\r\n        float:right;\r\n        right: 20px;\r\n        color:#80193a;\r\n    }\r\n\r\n    .bookitem .desc .authors{\r\n        display:block;\r\n        position: relative;\r\n    }\r\n    .bookitem .desc h5 {\r\n        display:inline-block;\r\n        position: relative;\r\n        margin-bottom: 3px;\r\n        margin-right: 10px;\r\n        color: #80193a;\r\n    }\r\n\r\n    .bookitem .desc span{\r\n        padding-bottom: 5px;\r\n        color: #a3a3a3;\r\n    }\r\n    \r\n\r\n    .bookitem figure img{\r\n        width: 128px;\r\n    }\r\n    .bookitem figure{\r\n       display: inline-block;\r\n       max-width: 200px;\r\n       float: left;\r\n    }\r\n    .bookitem .desc {\r\n        display: inline-block;\r\n        float: right;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2xpc3QvYm9va2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiw0REFBNEQ7SUFDNUQseUJBQXlCOzs7SUFHekIsbUJBQW1CO0lBQ25CLFVBQVU7O0lBRVYsOEJBQXNCOztZQUF0QixzQkFBc0I7SUFDdEIsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxpQ0FBeUI7WUFBekIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjtBQUNKOztBQVhBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLCtEQUErRDtJQUMvRCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLCtEQUErRDtJQUMvRCw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLEtBQUs7QUFDVDs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixrRUFBa0U7SUFDbEUsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFHQTs7SUFFSTs7UUFFSSxlQUFlOztRQUVmLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLE9BQU87UUFDUCxXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixjQUFjO0lBQ2xCOzs7SUFHQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtPQUNHLHFCQUFxQjtPQUNyQixnQkFBZ0I7T0FDaEIsV0FBVztJQUNkO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYm9va2xpc3QvYm9va2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigxNSwgMTUsIDE1KSxyZ2IoMjcsIDI3LCAyNykpO1xyXG4gICAgY29sb3I6IHJnYigyMDksIDIwOSwgMjA5KTtcclxuXHJcblxyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBzaG93IDFzIC41cztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47IFxyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuXHJcbn1cclxuXHJcbm1haW4gLmJvb2tzaGVsZiB7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogNXB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3cge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIH1cclxufVxyXG5cclxuLm5vLXJlc3VsdHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM2eDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoNTQsIDEwMiwgMjMzKSxyZ2IoMjksIDcxLCAxODkpKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG5cclxuLmxvYWQtbW9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzZ4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig1NCwgMTAyLCAyMzMpLHJnYigyOSwgNzEsIDE4OSkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjUsIDY0LCAxNzIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgbWFyZ2luLXRvcDozcHg7XHJcbn1cclxuXHJcbi5ib29raXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiKDQ0LCA0NCwgNDQpO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJvb2tpdGVtIGZpZ3VyZXtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvb2tpdGVtIGZpZ3VyZSBpbWd7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uYm9va2l0ZW0gLmRlc2Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDowO1xyXG59XHJcbi5ib29raXRlbSAuZGVzYyAqe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYm9va2l0ZW0gLmRlc2MgaDN7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjOEYxRDJDO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjk2NikscmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saW1pdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDozMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDBweCAzcHggYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0RCMkIzMCwjOEYxRDJDKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgcGFkZGluZzoycHggMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgbWFpbntcclxuICAgICAgICBcclxuICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbiAuYm9va3NoZWxmIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuYm9va2l0ZW06aG92ZXJ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGdyYXk7XHJcbiAgICB9XHJcbiAgICAuYm9va2l0ZW0gLmRlc2N7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7XHJcbiAgICB9XHJcbiAgICAuYm9va2l0ZW0gLmRlc2MgKntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuYm9va2l0ZW0gLmRlc2MgaDN7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMHB4KTtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYm9va2l0ZW0gLmRlc2MgaDR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IzgwMTkzYTtcclxuICAgIH1cclxuXHJcbiAgICAuYm9va2l0ZW0gLmRlc2MgLmF1dGhvcnN7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuYm9va2l0ZW0gLmRlc2MgaDUge1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjODAxOTNhO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib29raXRlbSAuZGVzYyBzcGFue1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuYm9va2l0ZW0gZmlndXJlIGltZ3tcclxuICAgICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICB9XHJcbiAgICAuYm9va2l0ZW0gZmlndXJle1xyXG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmJvb2tpdGVtIC5kZXNjIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/booklist/booklist.component.html":
/*!**************************************************!*\
  !*** ./src/app/booklist/booklist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [ngStyle]=\"{'animation-play-state': this.animvar.booklistanim}\">\n\n    <div class=\"no-results\" *ngIf=\"this.animvar.books.totalItems == 0\">No Results</div>\n    \n    <div class=\"bookshelf\">\n\n        <div *ngFor=\"let i of this.animvar.books.items;\" class=\"bookitem\" id=\"{{i.id}}\">\n            <figure (click)=\"click(i.id)\">\n                <ng-container *ngIf=\"i.volumeInfo.imageLinks!= undefined; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                        <img src=\"{{i.volumeInfo.imageLinks.thumbnail}}\">\n                </ng-template>\n                <ng-template #elseTemplate>\n                    <img src=\"assets/bookcover.png\">\n                </ng-template>\n                \n            </figure>\n\n            <div class=\"desc\">\n                <h3 (click)=\"click(i.id)\">{{i.volumeInfo.title}}</h3>\n                <h4>{{i.volumeInfo.publishedDate}}</h4>\n\n                <div class=\"authors\" >\n                    <h5 *ngFor=\"let aut of i.volumeInfo.authors\">{{aut}}</h5>\n                </div>\n\n                <span *ngIf=\"i.volumeInfo.description != undefined\">{{i.volumeInfo.description | shortdesc}}</span>\n            </div>\n        </div>\n    \n    \n   \n\n    </div>\n\n    <button *ngIf=\"(this.animvar.offset*10) < this.animvar.books.totalItems-1\" class=\"load-more\" (click)=\"getMoreBooks()\">\n        Load More \n    </button>\n\n    <div class=\"limit\" *ngIf=\"this.animvar.ApiKeyLimit\">\n        Sorry, API demo key reached limit of requests\n    </div>\n      \n\n\n\n</main>"

/***/ }),

/***/ "./src/app/booklist/booklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/booklist/booklist.component.ts ***!
  \************************************************/
/*! exports provided: BooklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooklistComponent", function() { return BooklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animvariable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/animvariable.service */ "./src/app/services/animvariable.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_getbooks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getbooks.service */ "./src/app/services/getbooks.service.ts");





var BooklistComponent = /** @class */ (function () {
    function BooklistComponent(animvar, router, getbooksservice) {
        this.animvar = animvar;
        this.router = router;
        this.getbooksservice = getbooksservice;
    }
    BooklistComponent.prototype.ngOnInit = function () {
        this.animvar.navdisplay = 'flex';
    };
    //  get books from service    //called from navcomponent
    BooklistComponent.prototype.getbooks = function () {
        var _this = this;
        this.getbooksservice.getBooks().subscribe(function (ret) {
            _this.animvar.books = ret;
            _this.animvar.offset = 1;
            window.scroll(0, 0);
        }, function (error) {
            _this.animvar.ApiKeyLimit = true;
        });
    };
    BooklistComponent.prototype.getMoreBooks = function () {
        var _this = this;
        this.getbooksservice.getMoreBooks().subscribe(function (ret) {
            for (var i = 0; i < ret.items.length; i++) {
                _this.animvar.books.items.push(ret.items[i]);
            }
            _this.animvar.offset++;
        }, function (error) {
            _this.animvar.ApiKeyLimit = true;
        });
    };
    // click on book
    BooklistComponent.prototype.click = function (id) {
        this.router.navigateByUrl('/book/' + id);
        this.animvar.navdisplay = 'none';
    };
    BooklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booklist',
            template: __webpack_require__(/*! ./booklist.component.html */ "./src/app/booklist/booklist.component.html"),
            styles: [__webpack_require__(/*! ./booklist.component.css */ "./src/app/booklist/booklist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_animvariable_service__WEBPACK_IMPORTED_MODULE_2__["AnimvariableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_getbooks_service__WEBPACK_IMPORTED_MODULE_4__["GetbooksService"]])
    ], BooklistComponent);
    return BooklistComponent;
}());



/***/ }),

/***/ "./src/app/class/bookshelf.ts":
/*!************************************!*\
  !*** ./src/app/class/bookshelf.ts ***!
  \************************************/
/*! exports provided: Bookshelf, Item, Volinfo, Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookshelf", function() { return Bookshelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volinfo", function() { return Volinfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
var Bookshelf = /** @class */ (function () {
    function Bookshelf() {
        this.items = new Array();
    }
    return Bookshelf;
}());

var Item = /** @class */ (function () {
    function Item() {
        this.volumeInfo = new Volinfo();
    }
    return Item;
}());

var Volinfo = /** @class */ (function () {
    function Volinfo() {
        this.authors = new Array();
        this.categories = new Array();
        this.imageLinks = new Img();
    }
    return Volinfo;
}());

var Img = /** @class */ (function () {
    function Img() {
    }
    return Img;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    top:0;\r\n    position: fixed;\r\n    background: linear-gradient(rgb(53, 53, 53) 0%,rgb(15, 15, 15) 10%, rgb(53, 53, 53) 90%);\r\n    height:56px;\r\n    box-shadow: 0 0 5px rgb(53, 53, 53);\r\n    line-height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    width:370px;\r\n    left: calc(50% - 185px);\r\n    z-index: 99;\r\n    \r\n    \r\n    -webkit-animation: searchanim .9s,searchwidth 1s .9s;\r\n    \r\n    \r\n            animation: searchanim .9s,searchwidth 1s .9s;\r\n    -webkit-animation-play-state: paused;\r\n            animation-play-state: paused;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n}\r\n\r\n.search{\r\n    min-width: 10px;\r\n    line-height: 55px;\r\n    font-size: 2em;\r\n    display:flex;\r\n    color:rgb(143, 143, 143);\r\n    \r\n}\r\n\r\n.search-btn{\r\n    color:rgb(73, 73, 73);\r\n    border-style: inset;\r\n    background: linear-gradient(rgb(228, 228, 228),rgb(163, 102, 102));\r\n    border-radius: 0px 3px 3px 0px;\r\n    border-left: none;\r\n    border-color: #d80346;\r\n    \r\n}\r\n\r\n.search input{\r\n    font-size: 30px;\r\n    background: linear-gradient(rgb(228, 228, 228),rgb(163, 102, 102));\r\n    border-color: #d80346;\r\n    border-right: 0px;\r\n    border-radius: 3px 0px 0px 3px;\r\n    width:320px;\r\n}\r\n\r\n@-webkit-keyframes searchanim{\r\n    0% {\r\n        \r\n        \r\n        margin-top: calc(30% - 23px);\r\n        border-radius: 5px;\r\n    }\r\n    100% {\r\n        \r\n        \r\n        margin-top:0;\r\n        border-radius: 0;\r\n    }\r\n}\r\n\r\n@keyframes searchanim{\r\n    0% {\r\n        \r\n        \r\n        margin-top: calc(30% - 23px);\r\n        border-radius: 5px;\r\n    }\r\n    100% {\r\n        \r\n        \r\n        margin-top:0;\r\n        border-radius: 0;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes searchwidth{\r\n    0% {\r\n        width:420px;\r\n        left: calc(50% - 210px);\r\n    }\r\n    100% {\r\n        width:100%;\r\n        left: 0;\r\n    }\r\n}\r\n\r\n@keyframes searchwidth{\r\n    0% {\r\n        width:420px;\r\n        left: calc(50% - 210px);\r\n    }\r\n    100% {\r\n        width:100%;\r\n        left: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksS0FBSztJQUNMLGVBQWU7SUFDZix3RkFBd0Y7SUFDeEYsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsV0FBVzs7O0lBR1gsb0RBQTRDOzs7WUFBNUMsNENBQTRDO0lBQzVDLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHdCQUF3Qjs7QUFFNUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtFQUFrRTtJQUNsRSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7QUFFekI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0VBQWtFO0lBQ2xFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFJQTtJQUNJOzs7UUFHSSw0QkFBNEI7UUFDNUIsa0JBQWtCO0lBQ3RCO0lBQ0E7OztRQUdJLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFiQTtJQUNJOzs7UUFHSSw0QkFBNEI7UUFDNUIsa0JBQWtCO0lBQ3RCO0lBQ0E7OztRQUdJLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLE9BQU87SUFDWDtBQUNKOztBQVRBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsT0FBTztJQUNYO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgICB0b3A6MDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoNTMsIDUzLCA1MykgMCUscmdiKDE1LCAxNSwgMTUpIDEwJSwgcmdiKDUzLCA1MywgNTMpIDkwJSk7XHJcbiAgICBoZWlnaHQ6NTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiKDUzLCA1MywgNTMpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOjM3MHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxODVweCk7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBhbmltYXRpb246IHNlYXJjaGFuaW0gLjlzLHNlYXJjaHdpZHRoIDFzIC45cztcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gICAgbWluLXdpZHRoOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGNvbG9yOnJnYigxNDMsIDE0MywgMTQzKTtcclxuICAgIFxyXG59XHJcbi5zZWFyY2gtYnRue1xyXG4gICAgY29sb3I6cmdiKDczLCA3MywgNzMpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjI4LCAyMjgsIDIyOCkscmdiKDE2MywgMTAyLCAxMDIpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAzcHggM3B4IDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDgwMzQ2O1xyXG4gICAgXHJcbn1cclxuLnNlYXJjaCBpbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjI4LCAyMjgsIDIyOCkscmdiKDE2MywgMTAyLCAxMDIpKTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q4MDM0NjtcclxuICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDBweCAwcHggM3B4O1xyXG4gICAgd2lkdGg6MzIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBzZWFyY2hhbmlte1xyXG4gICAgMCUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMzAlIC0gMjNweCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDowO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzZWFyY2h3aWR0aHtcclxuICAgIDAlIHtcclxuICAgICAgICB3aWR0aDo0MjBweDtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDIxMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #navbox [ngStyle]=\"\n{'animation-play-state': this.animvar.navanim,\n 'display': this.animvar.navdisplay}\n \">\n  <div class=\"search\">\n\n    <input  type=\"text\" [(ngModel)]=\"text\"  (change)=\"search()\" placeholder=\"Search book\">\n\n    <button class=search-btn (click)=\"search()\" >\n      <i class=\"fas fa-search\"></i>\n    </button>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animvariable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/animvariable.service */ "./src/app/services/animvariable.service.ts");
/* harmony import */ var _services_getbooks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getbooks.service */ "./src/app/services/getbooks.service.ts");
/* harmony import */ var _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booklist/booklist.component */ "./src/app/booklist/booklist.component.ts");





var NavComponent = /** @class */ (function () {
    function NavComponent(animvar, getbooksservice, booklist) {
        this.animvar = animvar;
        this.getbooksservice = getbooksservice;
        this.booklist = booklist;
        this.anim = false;
        this.text = '';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.search = function () {
        if (this.anim == false) {
            this.anim = true;
            this.animvar.navanim = 'running';
            this.animvar.booklistanim = 'running';
        }
        // call a function in booklist component
        this.getbooksservice.text = this.text;
        this.booklist.getbooks();
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_booklist_booklist_component__WEBPACK_IMPORTED_MODULE_4__["BooklistComponent"]],
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_animvariable_service__WEBPACK_IMPORTED_MODULE_2__["AnimvariableService"],
            _services_getbooks_service__WEBPACK_IMPORTED_MODULE_3__["GetbooksService"],
            _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_4__["BooklistComponent"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pipes/shortdesc.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/shortdesc.pipe.ts ***!
  \*****************************************/
/*! exports provided: ShortdescPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortdescPipe", function() { return ShortdescPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortdescPipe = /** @class */ (function () {
    function ShortdescPipe() {
    }
    ShortdescPipe.prototype.transform = function (value, args) {
        if (value.length > 0) {
            return value.length > 550 ? value.substr(0, 550) + '...' : value;
        }
        return value;
    };
    ShortdescPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'shortdesc'
        })
    ], ShortdescPipe);
    return ShortdescPipe;
}());



/***/ }),

/***/ "./src/app/services/animvariable.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/animvariable.service.ts ***!
  \**************************************************/
/*! exports provided: AnimvariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimvariableService", function() { return AnimvariableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_bookshelf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/bookshelf */ "./src/app/class/bookshelf.ts");



var AnimvariableService = /** @class */ (function () {
    function AnimvariableService() {
        this.text = 'marcin';
        this.navanim = 'paused';
        this.navdisplay = 'flex';
        this.booklistanim = 'paused';
        this.books = new _class_bookshelf__WEBPACK_IMPORTED_MODULE_2__["Bookshelf"]();
        this.book = new _class_bookshelf__WEBPACK_IMPORTED_MODULE_2__["Item"]();
        this.ApiKeyLimit = false;
    }
    AnimvariableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimvariableService);
    return AnimvariableService;
}());



/***/ }),

/***/ "./src/app/services/getbooks.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/getbooks.service.ts ***!
  \**********************************************/
/*! exports provided: GetbooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetbooksService", function() { return GetbooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animvariable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animvariable.service */ "./src/app/services/animvariable.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var GetbooksService = /** @class */ (function () {
    function GetbooksService(http, animvar) {
        this.http = http;
        this.animvar = animvar;
        this.url = 'https://www.googleapis.com/books/v1/volumes/';
    }
    GetbooksService.prototype.getBooks = function () {
        this.animvar.ApiKeyLimit = false;
        var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('q', this.text);
        return this.http.get('https://www.googleapis.com/books/v1/volumes/', { params: param })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    };
    GetbooksService.prototype.getMoreBooks = function () {
        this.animvar.ApiKeyLimit = false;
        var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('q', this.text)
            .set('startIndex', (this.animvar.offset * 10) + 1 + '');
        return this.http.get('https://www.googleapis.com/books/v1/volumes/', { params: param })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    };
    GetbooksService.prototype.getBook = function (id) {
        this.animvar.ApiKeyLimit = false;
        return this.http.get('https://www.googleapis.com/books/v1/volumes/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    };
    GetbooksService.prototype.errorHandler = function (error) {
        return error.status === 403 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(true) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(false);
    };
    GetbooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _animvariable_service__WEBPACK_IMPORTED_MODULE_4__["AnimvariableService"]])
    ], GetbooksService);
    return GetbooksService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\strony\books\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map