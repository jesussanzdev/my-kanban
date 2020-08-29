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
/* harmony import */ var _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main-view/main-view.component */ "./src/app/pages/main-view/main-view.component.ts");




const routes = [
    { path: '', component: _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__["MainViewComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'My Kanban';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main-view/main-view.component */ "./src/app/pages/main-view/main-view.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/board.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/board.model.ts ***!
  \***************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
class Board {
    constructor(name, columns) {
        this.name = name;
        this.columns = columns;
    }
}


/***/ }),

/***/ "./src/app/models/column.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/column.model.ts ***!
  \****************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
class Column {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
}


/***/ }),

/***/ "./src/app/pages/main-view/main-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-view/main-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root\">\n    <div class=\"navbar has-background-dark\">\n        <div class=\"navbar-brand\">\n            <div class=\"navbar-item\">\n                <h1 class=\"app-name has-gradient-text\">My kanban</h1>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"board\">\n        <div class=\"board-bar\">\n            <p class=\"board-subtitle\"></p>\n        </div>\n\n        <div class=\"board-wrapper\">\n            <div class=\"board-columns\" cdkDropListGroup>\n                <div class=\"board-column\" *ngFor=\"let column of board.columns\">\n\n                    \n                    <div class=\"column-title\">\n                        {{ column.name }}\n                    </div>\n\n\n                    <div class=\"tasks-container\"\n                    cdkDropList\n                    [cdkDropListData]=\"column.tasks\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                        <div class=\"task\" *ngFor=\"let item of column.tasks\" cdkDrag>\n                            {{ item }}\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/pages/main-view/main-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-view/main-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.app-name {\n  font-size: 28px;\n  font-family: 'Lato', sans-serif;\n  font-weight: bold; }\n\n.has-gradient-text {\n  background: -webkit-linear-gradient(#00fac4, #68fcfc);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; }\n\n.board {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0; }\n\n.board .board-bar {\n    min-width: 2.5%;\n    background: rgba(128, 128, 128, 0.5);\n    padding: 8px 15px; }\n\n.board .board-bar .board-subtitle {\n      font-size: 20px;\n      font-weight: bold;\n      color: white; }\n\n.board .board-wrapper {\n    display: flex;\n    flex-grow: 1;\n    overflow-x: auto; }\n\n.board .board-wrapper .board-columns {\n      display: flex;\n      flex-grow: 1; }\n\n@media (min-width: 300px) and (max-width: 1500px) {\n        .board .board-wrapper .board-columns {\n          display: block; } }\n\n.board .board-wrapper .board-columns .board-column {\n        display: flex;\n        flex-direction: column;\n        flex-grow: 1;\n        flex-basis: 0;\n        overflow: hidden;\n        overflow-y: auto;\n        min-width: 300px;\n        margin: 50px;\n        padding: 25px;\n        border-radius: 4px;\n        background: rgba(255, 255, 255, 0.5); }\n\n@media (min-width: 1500px) {\n          .board .board-wrapper .board-columns .board-column:not(:first-child) {\n            margin-left: 0; } }\n\n.board .board-wrapper .board-columns .board-column .column-title {\n          font-size: 20px;\n          font-weight: 800;\n          font-family: 'Lato', sans-serif;\n          text-transform: uppercase;\n          margin-bottom: 20px; }\n\n.tasks-container {\n  flex-grow: 1; }\n\n.task {\n  display: flex;\n  padding: 15px 12px;\n  background: white;\n  border-bottom: solid 1px #ddd;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05), 0 3px 14px 2px rgba(0, 0, 0, 0.05); }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi12aWV3L0M6XFxVc2Vyc1xcSlNfemdcXERvY3VtZW50c1xcV2ViIERldmVsb3BtZW50IFByb2plY3RzXFxrYW5iYW4vc3JjXFxhcHBcXHBhZ2VzXFxtYWluLXZpZXdcXG1haW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kscURBQXFEO0VBQ3JELDZCQUE2QjtFQUM3QixvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUxqQjtJQVFRLGVBQWU7SUFDZixvQ0FBcUI7SUFDckIsaUJBQWlCLEVBQUE7O0FBVnpCO01BY1ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7O0FBaEJ4QjtJQXFCUSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQXZCeEI7TUEwQlksYUFBYTtNQUNiLFlBQVksRUFBQTs7QUFFWjtRQTdCWjtVQThCZ0IsY0FBYyxFQUFBLEVBZ0NyQjs7QUE5RFQ7UUFrQ2dCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYTtRQUViLGtCQUFrQjtRQUVsQixvQ0FBc0IsRUFBQTs7QUFFdEI7VUFoRGhCO1lBa0R3QixjQUFjLEVBQUEsRUFDakI7O0FBbkRyQjtVQXVEb0IsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQiwrQkFBK0I7VUFDL0IseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBOztBQVF2QztFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBRWxCLG1CQUFtQjtFQUVuQixrRkFBa0YsRUFBQTs7QUFHdEY7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFIQUU4QyxFQUFBOztBQUdsRDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHNEQUFzRCxFQUFBOztBQUcxRDtFQUNJLHNEQUFzRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi12aWV3L21haW4tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hcHAtbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhhcy1ncmFkaWVudC10ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwMGZhYzQsICM2OGZjZmMpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcblxyXG4gICAgLmJvYXJkLWJhciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyLjUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoZ3JheSwgMC41KTtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib2FyZC1zdWJ0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm9hcmQtd3JhcHBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxuICAgICAgICAuYm9hcmQtY29sdW1uc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJvYXJkLWNvbHVtbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMDsgLy9hbGwgY29sdW1ucyBmcm9tIHRoZSBzYW1lIHNpemVcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEod2hpdGUsIDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbHVtbi10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4udGFza3MtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLnRhc2tzLWNvbnRhaW5lci5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC50YXNrOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main-view/main-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-view/main-view.component.ts ***!
  \********************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var src_app_models_board_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/board.model */ "./src/app/models/board.model.ts");
/* harmony import */ var src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/column.model */ "./src/app/models/column.model.ts");





let MainViewComponent = class MainViewComponent {
    constructor() {
        this.board = new src_app_models_board_model__WEBPACK_IMPORTED_MODULE_3__["Board"]("Best Board Ever", [
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]("Ideas", [
                "Play RISK",
                "Listen to Nirvana",
                "Build a CRUD application"
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('To do', [
                "Email Sara",
                "Cook dinner",
                'Take a shower'
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('On hold', [
                'Get to work',
                'Pick up groceries',
                'Go home',
                'Fall asleep'
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('Done', [
                'Get up',
                'Brush teeth',
                'Check e-mail',
                'Walk dog'
            ])
        ]);
    }
    ngOnInit() {
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
};
MainViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-view',
        template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/pages/main-view/main-view.component.html"),
        styles: [__webpack_require__(/*! ./main-view.component.scss */ "./src/app/pages/main-view/main-view.component.scss")]
    })
], MainViewComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JS_zg\Documents\Web Development Projects\kanban\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map