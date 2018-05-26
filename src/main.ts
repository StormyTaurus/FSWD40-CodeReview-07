// Data Model of Locations

class locations {
    constructor(public title: string, public city: string, public address: string, public zipcode: number, public img: string, public created: Date) { };

    render() {
        document.getElementById("row1").innerHTML += `
        <div class="card col-lg-3 col-md-6 mt-3">
        <!-- Card image -->
  <div class="view overlay">
            <img class="card-img-top rounded mt-5 d-none d-sm-block" src="${this.img}" alt="">
            <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
            </div>
            <div class="card-body">
                <h4 class="card-title">${this.title}</h4>
                <p class="card-text">
                    <!--Address:--> ${this.address} <br> ${this.city} ${this.zipcode}<br><br>
                    </p>
                    <p class="small"> Created: ${this.created} </p>
            </div>
         </div>
        `
    };
};

// Data Model of Restaurants

class restaurants extends locations {
    constructor(title: string, city: string, address: string, zipcode: number, img: string, public telephoneNumber: string, public type: string, public webAddress: string, created: Date) {
        super(title, city, address, zipcode, img, created);
        this.telephoneNumber = telephoneNumber,
            this.type = type,
            this.webAddress = webAddress
    };
    render() {
        document.getElementById("row2").innerHTML += `
    <div class="card col-lg-3 col-md-6 mt-3">
    <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top rounded mt-5 d-none d-sm-block" src="${this.img}" alt="">
    <a href="#!">
    <div class="mask rgba-white-slight"></div>
  </a>
          </div>
    <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">
            Address: ${this.address} <br> ${this.city} ${this.zipcode}<br>
            Telephone Number: ${this.telephoneNumber}<br>
            Type: ${this.type}<br>
            Website: <a href="http://${this.webAddress}">${this.webAddress}</a><br><br>
            <p class="small">Created: ${this.created}</p>
        </p>
    </div>
 </div>
`

    };
};

// Data Model of Events

class events extends locations {
    constructor(title: string, city: string, address: string, zipcode: number, img: string, public eventDate: string, public eventTime: string, public ticketPrice: number) {

        super(title, city, address, zipcode, img);
        this.eventDate = eventDate,
            this.eventTime = eventTime,
            this.ticketPrice = ticketPrice
    };

    render() {
        document.getElementById("row3").innerHTML += `
        <div class="card col-lg-3 col-md-6 mt-3">
        <div class="view overlay">
        <img class="card-img-top rounded mt-5 d-none d-sm-block" src="${this.img}" alt="">
        <a href="#!">
    <div class="mask rgba-white-slight"></div>
  </a>
          </div>
        
        <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
            <p class="card-text">
                Address: ${this.address} ${this.city} ${this.zipcode}<br>
                Event Date: ${this.eventDate}<br>
                Event Time: ${this.eventTime}<br><br>
                Ticket Price: <strong> ${this.ticketPrice} <i class="fas fa-euro-sign"></i> </strong>

            </p>
        </div>
     </div>
    `
    };
};

//Create Locations

let zoo = new locations("Zoo Schönbrunn <small>The world's oldest Zoo</small>", "Vienna", "Maxingstraße 13b", 1130, "img/zoo.png", new Date("12.June 2016 12:45"));
let schönbrunn = new locations("Schönbrunn Palace", "Vienna", "Schönbrunner Schloßstraße 47", 1130, "img/schönbrunn.png", new Date("05.April 2017 10:45"));
let naturhisto = new locations("Natural History Museum", "Vienna", "Burgring 7", 1010, "img/naturhisto.png", new Date("16.Feb 2001 14:45"));
let stephansdom = new locations("St. Stephen's Cathedral", "Vienna", "Stephansplatz 3", 1010, "img/stephansdom.png", new Date("24.Aug 2014 16:45"))

//Create Restaurants

let vegetasia = new restaurants("Vegetasia", "Vienna", "Ungargasse 57", 1030, "img/vegetasia.png", " 01/7138332", "vegetarian", "www.vegetasia.at", new Date("24.Nov 2007 12:00"));
let lovinghut = new restaurants("Loving Hut", "Vienna", "Neubaugürtel 3 8/5", 1070, "img/lovinghut.png", " 01/2939182", "vegetarian", "www.lovinghut.at", new Date("22.Oct 2011 14:15"));
let xus = new restaurants("Xu's Cooking", "Vienna", "Kaiserstraße 45", 1070, "img/xus.png", " 01/5231091", "vegetarian", "www.xus-cooking.at", new Date("07.Sep 2015 13:30"));
let wok = new restaurants("Wokmeister", "Vienna", "Brünner Str. 330", 1210, "img/wokmeister.png", " 01/9477153", "asian", "www.wokmeister.at", new Date("12.April 2018 12:15"));

//Create Events

let gruber = new events("Monika Gruber <br> <small>Wahnsinn</small>", "Vienna", "Roland-Rainer-Platz 1", 1150, "img/gruber.png", "Fr, 06.07.2018", "20:00", 23.16);
let katy = new events("Katy Perry <br> <small>WITNESS: The Tour</small>", "Vienna", "Roland-Rainer-Platz 1", 1150, "img/katy.png", "Mo, 04.06.2018", "19:30", 65.00);
let lenny = new events("Lenny Kravitz <br> <small>Raise Vibration Tour</small>", "Vienna", "Roland-Rainer-Platz 1", 1150, "img/lenny.png", "Sa, 09.06.2018", "19:30", 69.60);
let phantom = new events("Phantom der Oper<br><small>Deborah Sasson</small>", "Vienna", "Roland-Rainer-Platz 1", 1150, "img/phantom.png", "Tue, 20.02.2018", "20:00", 53.90);

let items: any[] = [zoo, schönbrunn, naturhisto, stephansdom, vegetasia, lovinghut, xus, wok, gruber, katy, lenny, phantom];

function displayItems(arr: any[]) {
    arr.forEach((item: any) => {
        item.render();
    });
};

displayItems(items);