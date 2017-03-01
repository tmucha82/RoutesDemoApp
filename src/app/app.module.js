"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var router_1 = require("@angular/router");
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var contact_component_1 = require('./contact/contact.component');
var common_1 = require("@angular/common");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'contactus', redirectTo: 'contact' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.RoutesDemoApp,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes)
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ],
            bootstrap: [app_component_1.RoutesDemoApp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
