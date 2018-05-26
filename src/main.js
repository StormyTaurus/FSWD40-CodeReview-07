// Data Model of Locations
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(title, city, address, zipcode, img, created) {
        this.title = title;
        this.city = city;
        this.address = address;
        this.zipcode = zipcode;
        this.img = img;
        this.created = created;
    }
    ;
    locations.prototype.render = function () {
        document.getElementById("row1").innerHTML += "\n        <div class=\"card col-lg-3 col-md-6 mt-3\">\n        <!-- Card image -->\n  <div class=\"view overlay\">\n            <img class=\"card-img-top rounded mt-5 d-none d-sm-block\" src=\"" + this.img + "\" alt=\"\">\n            <a href=\"#!\">\n      <div class=\"mask rgba-white-slight\"></div>\n    </a>\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">" + this.title + "</h4>\n                <p class=\"card-text\">\n                    <!--Address:--> " + this.address + " <br> " + this.city + " " + this.zipcode + "<br><br>\n                    </p>\n                    <p class=\"small\"> Created: " + this.created + " </p>\n            </div>\n         </div>\n        ";
    };
    ;
    return locations;
}());
;
// Data Model of Restaurants
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(title, city, address, zipcode, img, telephoneNumber, type, webAddress, created) {
        var _this = _super.call(this, title, city, address, zipcode, img, created) || this;
        _this.telephoneNumber = telephoneNumber;
        _this.type = type;
        _this.webAddress = webAddress;
        _this.telephoneNumber = telephoneNumber,
            _this.type = type,
            _this.webAddress = webAddress;
        return _this;
    }
    ;
    restaurants.prototype.render = function () {
        document.getElementById("row2").innerHTML += "\n    <div class=\"card col-lg-3 col-md-6 mt-3\">\n    <!-- Card image -->\n  <div class=\"view overlay\">\n    <img class=\"card-img-top rounded mt-5 d-none d-sm-block\" src=\"" + this.img + "\" alt=\"\">\n    <a href=\"#!\">\n    <div class=\"mask rgba-white-slight\"></div>\n  </a>\n          </div>\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">" + this.title + "</h4>\n        <p class=\"card-text\">\n            Address: " + this.address + " <br> " + this.city + " " + this.zipcode + "<br>\n            Telephone Number: " + this.telephoneNumber + "<br>\n            Type: " + this.type + "<br>\n            Website: <a href=\"http://" + this.webAddress + "\">" + this.webAddress + "</a><br><br>\n            <p class=\"small\">Created: " + this.created + "</p>\n        </p>\n    </div>\n </div>\n";
    };
    ;
    return restaurants;
}(locations));
;
// Data Model of Events
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(title, city, address, zipcode, img, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, title, city, address, zipcode, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        _this.eventDate = eventDate,
            _this.eventTime = eventTime,
            _this.ticketPrice = ticketPrice;
        return _this;
    }
    ;
    events.prototype.render = function () {
        document.getElementById("row3").innerHTML += "\n        <div class=\"card col-lg-3 col-md-6 mt-3\">\n        <div class=\"view overlay\">\n        <img class=\"card-img-top rounded mt-5 d-none d-sm-block\" src=\"" + this.img + "\" alt=\"\">\n        <a href=\"#!\">\n    <div class=\"mask rgba-white-slight\"></div>\n  </a>\n          </div>\n        \n        <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.title + "</h4>\n            <p class=\"card-text\">\n                Address: " + this.address + " " + this.city + " " + this.zipcode + "<br>\n                Event Date: " + this.eventDate + "<br>\n                Event Time: " + this.eventTime + "<br><br>\n                Ticket Price: <strong> " + this.ticketPrice + " <i class=\"fas fa-euro-sign\"></i> </strong>\n\n            </p>\n        </div>\n     </div>\n    ";
    };
    ;
    return events;
}(locations));
;
//Create Locations
var zoo = new locations("Zoo Schönbrunn <small>The world's oldest Zoo</small>", "Vienna", "Maxingstraße 13b", 1130, "img/zoo.png", new Date("24.May 2018 12:45"));
var schönbrunn = new locations("Schönbrunn Palace", "Vienna", "Schönbrunner Schloßstraße 47", 1130, "img/schönbrunn.png", new Date("24.May 2018 12:45"));
var naturhisto = new locations("Natural History Museum", "Vienna", "Burgring 7", 1010, "img/naturhisto.png", new Date("24.May 2018 12:45"));
var stephansdom = new locations("St. Stephen's Cathedral", "Vienna", "Stephansplatz 3", 1010, "img/stephansdom.png", new Date("24.May 2018 12:45"));
//Create Restaurants
var vegetasia = new restaurants("Vegetasia", "Vienna", "Ungargasse 57", 1030, "img/vegetasia.png", " 01/7138332", "vegetarian", "www.vegetasia.at", new Date("24.May 2018 12:45"));
var lovinghut = new restaurants("Loving Hut", "Vienna", "Neubaugürtel 3 8/5", 1070, "img/lovinghut.png", " 01/2939182", "vegetarian", "www.lovinghut.at", new Date("24.May 2018 12:45"));
var xus = new restaurants("Xu's Cooking", "Vienna", "Kaiserstraße 45", 1070, "img/xus.png", " 01/5231091", "vegetarian", "www.xus-cooking.at", new Date("24.May 2018 12:45"));
var wok = new restaurants("Wokmeister", "Vienna", "Brünner Str. 330", 1210, "img/wokmeister.png", " 01/9477153", "asian", "www.wokmeister.at", new Date("24.May 2018 12:45"));
//Create Events
var gruber = new events("Monika Gruber <br> <small>Wahnsinn</small>", "Vienna", "Roland-Rainer-Platz 1", 1150, "img/gruber.png", "Fr, 06.07.2018", "20:00", 23.16);
var katy = new events("Katy Perry <br> <small>WITNESS: The Tour</small>", "Vienna", "Roland-Rainer-Platz 1", 1150, "img/katy.png", "Mo, 04.06.2018", "19:30", 65.00);
var lenny = new events("Lenny Kravitz <br> <small>Raise Vibration Tour</small>", "Vienna", "Roland-Rainer-Platz 1", 1150, "img/lenny.png", "Sa, 09.06.2018", "19:30", 69.60);
var phantom = new events("Phantom der Oper<br><small>Deborah Sasson</small>", "Vienna", "Roland-Rainer-Platz 1", 1150, "img/phantom.png", "Tue, 20.02.2018", "20:00", 53.90);
var items = [zoo, schönbrunn, naturhisto, stephansdom, vegetasia, lovinghut, xus, wok, gruber, katy, lenny, phantom];
function displayItems(arr) {
    arr.forEach(function (item) {
        item.render();
    });
}
;
displayItems(items);
