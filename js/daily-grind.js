
/* Things to add:

Day of Week - day

Coffee Name - name

Coffee Pic - pic

Alt tag - alt

Coffee Description - desc

Color for coffee - color

*/


let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//use query string
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
}else{//use date object
    myDay = myDate.getDay();

}


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee">
    <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>. 
     ${coffee.desc} 
     </br></br><strong id="coffee-highlight" class="feature">${coffee.name} is</strong>  Gluten-free selfies normcore chillwave. Listicle 90's chambray, seitan cold-pressed try-hard Etsy authentic flexitarian vinyl. Meditation bespoke freegan, single-origin coffee cred seitan 90's gentrify brunch Williamsburg squid cold-pressed. Brooklyn readymade Tumblr wayfarers ethical.
     </br></br><strong id="coffee-highlight" class="feature">${coffee.name}</strong> with our  Polaroid iPhone plaid, Pitchfork Shoreditch paleo. Hashtag keytar chia scenester Pinterest, semiotics tousled food truck. YOLO scenester deep v, taxidermy paleo quinoa McSweeney's Carles VHS mustache Williamsburg gluten-free readymade cold-pressed. Truffaut Thundercats Schlitz, listicle organic Brooklyn paleo squid asymmetrical readymade migas gluten-free Austin.
    </p>
    
    `;
    return myReturn;
}

switch(myDay){
    case 0:
        today = "Sunday";
        coffee = {
            color: "brown",
            name: "Frappaccino",
            day: "Sunday",
            pic: "images/frappaccino.jpg",
            alt: "A pic of a frappachino",
            desc: `It's sunny outside, so come grab a cold frap! </br></br> Caramel syrup meets coffee, milk and ice for 
            a rendezvous in the blender, while whipped cream and buttery caramel sauce layer the love on top. To change 
            things up, try it affogato-style with a hot espresso shot poured right over the top.`

        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            color: "DarkSalmon",
            name: "Bubble Tea",
            day: "Monday",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of bubble tea",
            desc: `Everyone loves BOBA!`

        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "Grey",
            name: "Vanilla Latte",
            day: "Tuesday",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of a Vanilla latte",
            desc: `The sweeth tooths love our Vanilla Latte!</br> </br>Extra-smooth Espresso, velvety 
            steamed milk and vanilla syrup come together to create a delightful new twist on a beloved espresso classic. 
            An ideal cup for those who prefer a lighter-roasted coffee.`

        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "SaddleBrown",
            name: "Drip",
            day: "Wednesday",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee",
            desc: `Some days you just need the drip!</br></br> We brew our coffee with the finest roast coffee beans and make sure you are always getting the freshest batch. 
            With just one cup, you'll have your coffee fill for the whole day, but you still might come and get some more. You are always welcome! `

        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color: "RosyBrown",
            name: "Cold Brew",
            day: "Thursday",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a cold brew",
            desc: `Nothing like a cold brew on a sunny Seattle day!</br></br> Handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching 
            heat- Cold Brew is made from our custom blend of beans grown to steep long and cold for a super-smooth flavor.`

        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color: "GoldenRod",
            name: "Pumpkin Spice Latte",
            day: "Friday",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of a pumpkin spice latte",
            desc: `Fall is here! Come get a cozy pumpkin spice latte.</br></br> A scrumptious combination of Espresso Roast, pumpkin pie flavoured sauce, and steamed 
            milk, topped with whipped cream and pumpkin pie spices, cinnamon, nutmeg and cloves, this truly is the pumpkin-g of flavours.`

        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            color: "PeachPuff",
            name: "White Chocolate Mocha",
            day: "Saturday",
            pic: "images/mocha.jpg",
            alt: "A pic of a white chocolate mocha",
            desc: `We can do fancy mocha fancy art that'll look great on your insta!</br></br> Our signature espresso meets white chocolate sauce and steamed milk, 
            and then is finished off with sweetened whipped cream to create this supreme white chocolate delight.`

        };
    break;

}


document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
document.getElementById("coffee-highlight").style.color = coffee.color;



