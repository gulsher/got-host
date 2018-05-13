webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import http client to make the request



var ApiHttpService = /** @class */ (function () {
    function ApiHttpService(_http) {
        this._http = _http;
        // from documentation taking the base url's for each.
        this.charApi = 'https://www.anapioficeandfire.com/api/characters';
        this.bookApi = 'https://www.anapioficeandfire.com/api/books';
        this.houseApi = 'https://www.anapioficeandfire.com/api/houses';
    }
    ApiHttpService.prototype.getAllCharacters = function () {
        var myResponse = this._http.get(this.charApi);
        // observable response
        return myResponse;
    };
    ApiHttpService.prototype.getAllBooks = function () {
        var myResponse2 = this._http.get(this.bookApi);
        return myResponse2;
    };
    ApiHttpService.prototype.getAllHouses = function () {
        var myResponse = this._http.get(this.houseApi);
        return myResponse;
    };
    // getting responses for all single characters, books, houses here.....
    ApiHttpService.prototype.getSingleCharacter = function (id) {
        var myResponse = this._http.get(this.charApi + '/' + id);
        return myResponse;
    };
    ApiHttpService.prototype.getSingleBook = function (id) {
        var myResponse = this._http.get(this.bookApi + '/' + id);
        return myResponse;
    };
    ApiHttpService.prototype.getSingleHouse = function (id) {
        var myResponse = this._http.get(this.houseApi + '/' + id);
        return myResponse;
    };
    ApiHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiHttpService);
    return ApiHttpService;
}()); // end of class



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n  <img src=\"../assets/img.jpg\" alt=\"\" class=\"img-fluid\">\n  <router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_view_book_view_component__ = __webpack_require__("./src/app/book-view/book-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__character_view_character_view_component__ = __webpack_require__("./src/app/character-view/character-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__house_view_house_view_component__ = __webpack_require__("./src/app/house-view/house-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_http_service__ = __webpack_require__("./src/app/api-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sort_pipe__ = __webpack_require__("./src/app/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__select_pipe__ = __webpack_require__("./src/app/select.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// importing the services and router module







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__book_view_book_view_component__["a" /* BookViewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__character_view_character_view_component__["a" /* CharacterViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__house_view_house_view_component__["a" /* HouseViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_14__select_pipe__["a" /* SelectPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot([{
                        path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: '', redirectTo: 'home', pathMatch: 'full'
                    },
                    {
                        path: 'books/:id', component: __WEBPACK_IMPORTED_MODULE_4__book_view_book_view_component__["a" /* BookViewComponent */]
                    },
                    {
                        path: 'houses/:id', component: __WEBPACK_IMPORTED_MODULE_6__house_view_house_view_component__["a" /* HouseViewComponent */]
                    },
                    {
                        path: 'character/:id', component: __WEBPACK_IMPORTED_MODULE_5__character_view_character_view_component__["a" /* CharacterViewComponent */]
                    },
                    {
                        path: '**', component: __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__api_http_service__["a" /* ApiHttpService */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-view/book-view.component.css":
/***/ (function(module, exports) {

module.exports = "root{\r\n    font-size: 16px;\r\n}\r\n.nice{\r\n    padding-left: 5vw;\r\n}\r\n.size{\r\n    font-size: 1.8rem;\r\n    font-weight: 500;\r\n    \r\n    \r\n}\r\n.small{\r\n    font-size: 1.6rem;\r\n    color:#337ab7;\r\n    font-weight: 700;\r\n    \r\n}\r\n.book{\r\n    color:#337ab7;\r\n    font-weight: 600;\r\n    font-size:1.5rem;\r\n\r\n}\r\n.margin{\r\n    margin-bottom: 5vh;\r\n}"

/***/ }),

/***/ "./src/app/book-view/book-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row p-5\" *ngIf=\"book\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<h3>Name: </h3>\n\t\t\t<h5>{{book.name}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<h3>ISBN: </h3>\n\t\t\t<h5>{{book.isbn}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"book.numberOfPages\">\n\t\t\t<h3>Number OF Pages: </h3>\n\t\t\t<h5>{{book.numberOfPages}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"book.publisher\">\n\t\t\t<h3>Publisher: </h3>\n\t\t\t<h5>{{book.publisher}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"book.country\">\n\t\t\t<h3>Country: </h3>\n\t\t\t<h5>{{book.country}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"book.mediaType\">\n\t\t\t<h3>Media Type: </h3>\n\t\t\t<h5>{{book.mediaType}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"book.released\">\n\t\t\t<h3>Released: </h3>\n\t\t\t<h5>{{book.released | date}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"book.authors[0]\">\n\t\t\t<h3>Authors: </h3>\n\t\t\t<h5 *ngFor=\"let author of book.authors\">{{author}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"book.characters[0]\">\n\t\t\t<h3>Characters: </h3>\n\t\t\t<h5 *ngFor=\"let character of book.characters\">\n\t\t\t\t<a [routerLink]=\"['/character',character.split('/').pop()]\">{{character}}</a>\n\t\t\t</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"book.povCharacters[0]\">\n\t\t\t<h3>PovCharacters: </h3>\n\t\t\t<h5 *ngFor=\"let character of book.povCharacters\">\n\t\t\t\t<a [routerLink]=\"['/character',character.split('/').pop()]\">{{character}}</a>\n\t\t\t</h5>\n\t\t</div>\n\t</div>\n\t<br>\n\t<div class=\"col-md-12\"><button class=\"btn btn-primary\" [routerLink]=\"['/home']\">Go back</button></div>\n\n</div>"

/***/ }),

/***/ "./src/app/book-view/book-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_http_service__ = __webpack_require__("./src/app/api-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookViewComponent = /** @class */ (function () {
    function BookViewComponent(_route, router, gotHttpService) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
    }
    BookViewComponent.prototype.ngOnInit = function () {
        this.id = this._route.snapshot.paramMap.get('id');
        this.getBookDetails(this.id);
    };
    BookViewComponent.prototype.getBookDetails = function (id) {
        var _this = this;
        this.gotHttpService.getSingleBook(id).subscribe(function (data) {
            _this.book = data;
            console.log(data);
        }, function (error) {
            console.log('error');
        });
    };
    BookViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-view',
            template: __webpack_require__("./src/app/book-view/book-view.component.html"),
            styles: [__webpack_require__("./src/app/book-view/book-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__api_http_service__["a" /* ApiHttpService */]])
    ], BookViewComponent);
    return BookViewComponent;
}());



/***/ }),

/***/ "./src/app/character-view/character-view.component.css":
/***/ (function(module, exports) {

module.exports = ".table{\r\n    margin: auto;\r\n    width: 70%;\r\n}\r\n\r\n.table td{\r\n    padding: 2rem;\r\n    padding-left: 5rem;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n.table tr{\r\n    padding-left: 20px;\r\n}\r\n\r\nbutton{\r\n    display: block;\r\n    margin: 20px auto;\r\n}\r\n\r\n.books{\r\n    text-align: justify;\r\n}"

/***/ }),

/***/ "./src/app/character-view/character-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-5\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h3>Alias: </h3>\n        <h5>{{character.aliases}}</h5>\n      </div>\n      <div class=\"col-md-6\">\n        <h3>Gender: </h3>\n        <h5>{{character.gender}}</h5>\n      </div>\n      <div class=\"col-md-6\" *ngIf = \"character.culture\">\n        <h3>Culture: </h3>\n        <h5>{{character.culture}}</h5>\n      </div>\n      <div class=\"col-md-6\">\n        <h3>Books:</h3>\n        <h5 *ngFor=\"let book of character.books\">\n          <a [routerLink]=\"['/books',book.split('/').pop()]\">{{book}}</a>\n        </h5>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/character-view/character-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_http_service__ = __webpack_require__("./src/app/api-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterViewComponent = /** @class */ (function () {
    function CharacterViewComponent(_route, router, gotHttpService) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
    }
    CharacterViewComponent.prototype.ngOnInit = function () {
        this.id = this._route.snapshot.paramMap.get('id');
        this.getCharDetails(this.id);
    };
    CharacterViewComponent.prototype.getCharDetails = function (id) {
        var _this = this;
        this.gotHttpService.getSingleCharacter(id).subscribe(function (data) {
            _this.character = data;
            console.log(data);
        }, function (error) {
            console.log('error');
        });
    };
    CharacterViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-character-view',
            template: __webpack_require__("./src/app/character-view/character-view.component.html"),
            styles: [__webpack_require__("./src/app/character-view/character-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__api_http_service__["a" /* ApiHttpService */]])
    ], CharacterViewComponent);
    return CharacterViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    width : 18rem;\r\n    margin-top: 35px;\r\n    height: 18rem;\r\n    -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n    \r\n    border-color: #03A9F4;\r\n  }\r\n  \r\n  .card img{\r\n    border: 1px solid lightgrey;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n  \r\n  .card-title{\r\n    font-size:18px;\r\n    font-weight: 800;\r\n    font-family: sans-serif;\r\n    text-align: center;\r\n  }\r\n  \r\n  .card-body{\r\n    text-align: center;\r\n  }\r\n  \r\n  footer{\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n\t\t<div class=\"col col-md-12 col-xs-12\">\n\t\t\t\n\t\t\t\t<div class=\"col-md-3 view-box\">\n\t\t\t\t\tView Categories:\n\t\t\t\t\t<select [(ngModel)]='view'>\n\t\t\t\t\t\t<option value=\"\" [selected]=\"\">All</option>\n\t\t\t\t\t\t<option value=\"characters\">Characters</option>\n\t\t\t\t\t\t<option value=\"houses\">Houses</option>\n\t\t\t\t\t\t<option value=\"books\">Books</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n \n\n  <div class=\"row\" *ngIf=\"allData.length>0\">\n\t\t<div class=\"col-md-4 col-xs-4\" *ngFor=\"let data of allData|sort|select:view\">\n\t\t\t<div class=\"col col-md-12 col-xs-12\" *ngIf=\"data.gender\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<img class=\"card-img-top\" src=\"../../assets/images.jpg\" alt=\"Card image\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\">{{data.aliases}}</h5>\n\n\t\t\t\t\t\t<a [routerLink]=\"['/character',data.url.split('/').pop()]\" class=\"btn btn-primary btn-sm\">Get Details</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      </div>\n      <div class=\"col col-md-12 col-xs-12\" *ngIf=\"data.isbn\">\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"../../assets/books.jpg\" alt=\"Card image \">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{data.name}}</h5>\n              <a [routerLink]=\"['/books',data.url.split('/').pop()]\" class=\"btn btn-primary btn-sm\">Get Details</a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col col-md-12 col-xs-12\" *ngIf=\"data.region\">\n            <div class=\"card\">\n              <img class=\"card-img-top\" src=\"../../assets/house.jpg\" alt=\"Card image \">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{data.name}}</h5>\n                <a [routerLink]=\"['/houses',data.url.split('/').pop()]\" class=\"btn btn-primary btn-sm\">Get Details</a>\n              </div>\n            </div>\n          </div>\n      </div>\n      </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_http_service__ = __webpack_require__("./src/app/api-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiHttpService) {
        var _this = this;
        this.apiHttpService = apiHttpService;
        this.allData = [];
        this.charData = function () {
            // characters
            _this.apiHttpService.getAllCharacters().subscribe(function (data) {
                _this.allData = _this.allData.concat(data);
            });
        };
        this.bookData = function () {
            // books
            _this.apiHttpService.getAllBooks().subscribe(function (data) {
                _this.allData = _this.allData.concat(data);
            });
        };
        this.houseData = function () {
            // houses
            _this.apiHttpService.getAllHouses().subscribe(function (data) {
                _this.allData = _this.allData.concat(data);
                // final composed data array having all the data in one array
            });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.charData();
        this.bookData();
        this.houseData();
        setTimeout(function () {
            console.log(_this.allData);
        }, 10000);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_http_service__["a" /* ApiHttpService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/house-view/house-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/house-view/house-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-5\">\n\t<div class=\"row\" *ngIf=\"house\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<h3>Name: </h3>\n\t\t\t<h5>{{house.name}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<h3>Region: </h3>\n\t\t\t<h5>{{house.region}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.coatOfArms\">\n\t\t\t<h3>Coat Of Arms: </h3>\n\t\t\t<h5>{{house.coatOfArms}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.titles[0]\">\n\t\t\t<h3>Words: </h3>\n\t\t\t<h5 *ngFor=\"let title of house.titles\">{{title}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.seats[0]\">\n\t\t\t<h3>Seats: </h3>\n\t\t\t<h5 *ngFor=\"let seat of house.seats\">{{seat}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.currentLord\">\n\t\t\t<h3>Current Lord: </h3>\n\t\t\t<h5>\n\t\t\t\t<a [routerLink]=\"['/character',house.currentLord.split('/').pop()]\">{{house.currentLord}}</a>\n\t\t\t</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.heir\">\n\t\t\t<h3>Heir: </h3>\n\t\t\t<h5>\n\t\t\t\t<a [routerLink]=\"['/character',house.heir.split('/').pop()]\">{{house.heir}}</a>\n\t\t\t</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.overlord\">\n\t\t\t<h3>Overlord: </h3>\n\t\t\t<h5>\n\t\t\t\t<a [routerLink]=\"['/house',house.overlord.split('/').pop()]\">{{house.overlord}}</a>\n\t\t\t</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.founded\">\n\t\t\t<h3>Founded: </h3>\n\t\t\t<h5>{{house.founded}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.founder\">\n\t\t\t<h3>Founder: </h3>\n\t\t\t<h5>\n\t\t\t\t<a [routerLink]=\"['/character',house.founder.split('/').pop()]\">{{house.founder}}</a>\n\t\t\t</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.diedOut\">\n\t\t\t<h3>Died Out: </h3>\n\t\t\t<h5>{{house.diedOut}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.ancestralWeapons[0]\">\n\t\t\t<h3>Ancestral Weapons: </h3>\n\t\t\t<h5 *ngFor=\"let ancestralWeapon of house.ancestralWeapons\">{{ancestralWeapon}}</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.cadetBranches[0]\">\n\t\t\t<h3>Cadet Branches: </h3>\n\t\t\t<h5 *ngFor=\"let cadetBranch of house.cadetBranches\">\n\t\t\t\t<a [routerLink]=\"['/house',cadetBranch.split('/').pop()]\">{{cadetBranch}}</a>\n\t\t\t</h5>\n\t\t</div>\n\t\t<div class=\"col-md-6\" *ngIf=\"house.swornMembers[0]\">\n\t\t\t<h3>Sworn Members: </h3>\n\t\t\t<h5 *ngFor=\"let swornMember of house.swornMembers\">\n\t\t\t\t<a [routerLink]=\"['/character',swornMember.split('/').pop()]\">{{swornMember}}</a>\n\t\t\t</h5>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-12\"><button class=\"btn btn-primary\" [routerLink] = \"['/home']\">Go back</button></div>\n</div>"

/***/ }),

/***/ "./src/app/house-view/house-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_http_service__ = __webpack_require__("./src/app/api-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HouseViewComponent = /** @class */ (function () {
    function HouseViewComponent(_route, router, gotHttpService) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
    }
    HouseViewComponent.prototype.ngOnInit = function () {
        this.id = this._route.snapshot.paramMap.get('id');
        this.getHouseDetails(this.id);
    };
    HouseViewComponent.prototype.getHouseDetails = function (id) {
        var _this = this;
        this.gotHttpService.getSingleHouse(id).subscribe(function (data) {
            _this.house = data;
            console.log(data);
        }, function (error) {
            console.log('error');
        });
    };
    HouseViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-house-view',
            template: __webpack_require__("./src/app/house-view/house-view.component.html"),
            styles: [__webpack_require__("./src/app/house-view/house-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__api_http_service__["a" /* ApiHttpService */]])
    ], HouseViewComponent);
    return HouseViewComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/select.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectPipe = /** @class */ (function () {
    function SelectPipe() {
    }
    SelectPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        else if (args === 'characters') {
            return value.filter(function (it) {
                if (it.gender) {
                    return it;
                }
            });
        }
        else if (args === 'houses') {
            return value.filter(function (it) {
                if (it.region) {
                    return it;
                }
            });
        }
        else {
            return value.filter(function (it) {
                if (it.isbn) {
                    return it;
                }
            });
        }
    };
    SelectPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'select'
        })
    ], SelectPipe);
    return SelectPipe;
}());



/***/ }),

/***/ "./src/app/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, args) {
        value.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return value;
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map