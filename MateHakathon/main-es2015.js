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

module.exports = "<app-header-calendar (nextMonth)=\"nextMonth()\" (prevMonth)=\"prevMonth()\" (curentMonth)=\"currentMonth()\"\r\n                     [month]=\"month\"></app-header-calendar>\r\n<app-month [month]=\"month\" [year]=\"year\"></app-month>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header-calendar/header-calendar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header-calendar/header-calendar.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-3\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"_prevMonth()\">Previous</button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"_currentMonth()\">Today</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"_nextMonth()\">Next</button>\n  </div>\n<div class=\"col-xl-6\" style=\"text-align:center \">\n  <h2>{{monthNames[month]}}</h2>\n</div>\n  <div class=\"col-xl-3\">\n    <button type=\"button\" class=\"btn btn-primary\">Add event</button>\n    <button type=\"button\" class=\"btn btn-danger\">Delete event</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/month-item/month-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/month-item/month-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>month-item works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/month/month.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/month/month.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-month\">\n  <div class=\"wrapper-month__item\" *ngFor=\"let item of calendarArr\">\n      {{item ? item.getDate() : ''}}\n\n    <div *ngIf=\"item\">\n      <div *ngFor=\"let event of getEvents(item)\">\n        {{event.title}}\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n"

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
/*! exports provided: AppComponent, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppComponent = class AppComponent {
    constructor() {
        this.month = new Date().getMonth();
        this.year = new Date().getFullYear();
    }
    nextMonth() {
        this.month++;
    }
    prevMonth() {
        this.month--;
    }
    currentMonth() {
        this.month = (new Date()).getMonth();
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);

class Service {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        return this.http.get('http://192.168.66.219:3000/events');
    }
}
Service.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_month_month_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/month/month.component */ "./src/app/components/month/month.component.ts");
/* harmony import */ var _components_header_calendar_header_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header-calendar/header-calendar.component */ "./src/app/components/header-calendar/header-calendar.component.ts");
/* harmony import */ var _components_month_item_month_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/month-item/month-item.component */ "./src/app/components/month-item/month-item.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_month_month_component__WEBPACK_IMPORTED_MODULE_6__["MonthComponent"], _components_header_calendar_header_calendar_component__WEBPACK_IMPORTED_MODULE_7__["HeaderCalendarComponent"], _components_month_item_month_item_component__WEBPACK_IMPORTED_MODULE_8__["MonthItemComponent"]],
        providers: [_app_component__WEBPACK_IMPORTED_MODULE_5__["Service"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/header-calendar/header-calendar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/header-calendar/header-calendar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding: 20px;\n}\n\nbutton {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItY2FsZW5kYXIvQzpcXFVzZXJzXFxTdGFuMG1lblxcRGVza3RvcFxcZXhlcnNpemVzXFxNYXRlSGFrYXRob24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlci1jYWxlbmRhclxcaGVhZGVyLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci1jYWxlbmRhci9oZWFkZXItY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItY2FsZW5kYXIvaGVhZGVyLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLnJvdyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header-calendar/header-calendar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/header-calendar/header-calendar.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCalendarComponent", function() { return HeaderCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderCalendarComponent = class HeaderCalendarComponent {
    constructor() {
        this.nextMonth = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prevMonth = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.curentMonth = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    }
    _nextMonth() {
        this.nextMonth.emit();
    }
    _prevMonth() {
        this.prevMonth.emit();
    }
    _currentMonth() {
        this.curentMonth.emit();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderCalendarComponent.prototype, "nextMonth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderCalendarComponent.prototype, "prevMonth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderCalendarComponent.prototype, "curentMonth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderCalendarComponent.prototype, "month", void 0);
HeaderCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-calendar',
        template: __webpack_require__(/*! raw-loader!./header-calendar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header-calendar/header-calendar.component.html"),
        styles: [__webpack_require__(/*! ./header-calendar.component.scss */ "./src/app/components/header-calendar/header-calendar.component.scss")]
    })
], HeaderCalendarComponent);



/***/ }),

/***/ "./src/app/components/month-item/month-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/month-item/month-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9udGgtaXRlbS9tb250aC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/month-item/month-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/month-item/month-item.component.ts ***!
  \***************************************************************/
/*! exports provided: MonthItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthItemComponent", function() { return MonthItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MonthItemComponent = class MonthItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
MonthItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-month-item',
        template: __webpack_require__(/*! raw-loader!./month-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/month-item/month-item.component.html"),
        styles: [__webpack_require__(/*! ./month-item.component.scss */ "./src/app/components/month-item/month-item.component.scss")]
    })
], MonthItemComponent);



/***/ }),

/***/ "./src/app/components/month/month.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/month/month.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-month {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.wrapper-month__item {\n  height: 110px;\n  border: 1px solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb250aC9DOlxcVXNlcnNcXFN0YW4wbWVuXFxEZXNrdG9wXFxleGVyc2l6ZXNcXE1hdGVIYWthdGhvbi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9udGhcXG1vbnRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vbnRoL21vbnRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb250aC9tb250aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLW1vbnRoe1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICAmX19pdGVte1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB9XHJcbn1cclxuIiwiLndyYXBwZXItbW9udGgge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xufVxuLndyYXBwZXItbW9udGhfX2l0ZW0ge1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/month/month.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/month/month.component.ts ***!
  \*****************************************************/
/*! exports provided: MonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthComponent", function() { return MonthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



let MonthComponent = class MonthComponent {
    constructor(service) {
        this.service = service;
        this.calendarArr = [];
        this.getCalendar = (month, year) => {
            function getDay(date) {
                let day = date.getDay();
                if (day === 0)
                    day = 7;
                return day - 1;
            }
            const d = new Date(year, month);
            const result = [];
            for (let i = 1; i <= getDay(d); i++) {
                result.push('');
            }
            while (d.getMonth() === month) {
                result.push(new Date(d));
                d.setDate(d.getDate() + 1);
            }
            if (getDay(d) !== 0) {
                for (let i = getDay(d); i < 7; i++) {
                    result.push('');
                }
            }
            return result;
        };
    }
    ngOnChanges() {
        this.calendarArr = this.getCalendar(this.month, this.year);
    }
    ngOnInit() {
        this.service.getEvents()
            .subscribe(data => {
            this.events = data;
        });
    }
    getEvents(date) {
        const key = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        if (this.events) {
            return this.events[key];
        }
    }
};
MonthComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["Service"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MonthComponent.prototype, "month", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MonthComponent.prototype, "year", void 0);
MonthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-month',
        template: __webpack_require__(/*! raw-loader!./month.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/month/month.component.html"),
        styles: [__webpack_require__(/*! ./month.component.scss */ "./src/app/components/month/month.component.scss")]
    })
], MonthComponent);



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

module.exports = __webpack_require__(/*! C:\Users\Stan0men\Desktop\exersizes\MateHakathon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map