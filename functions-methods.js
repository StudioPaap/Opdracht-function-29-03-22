// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


/* stap 1 placeholder voor resultaat maken = domeinnaam uit email.
   Stap 2 functie die checkt: achter @ weergeeft string ;
   Stap 3 Het resultaat van dit weglaten wordt weergeven in onze placeholder domeinnaam
 */



let domeinnaam = 0;
let emails=["n.eeken@novi-education.nl", "t.mellink@novi.nl","a.wiersma@outlook.com"
];

// functie gedeclareerd

function getEmailDomain(email) {
    let domeinNaam = email.substring(email.indexOf("@") + 1);
    console.log(domeinNaam);
}

//for loop met functie

for (let i = 0; i < emails.length; i++) {
    getEmailDomain(emails[i]);

}








/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

/* Stap 1 : Array opmaken emails
   Stap 2 Functie declareren
   stap 3: een variabelen die de uitkomst weergeeft.
   Stap 4 : statements opschrijven die checkt of het een medewerker is. met de stringmethode
       if : -Loop door de array met emailadressen en check of novi-education erin staat om de boolean Student op true te laten komen
            -Als boolean true is, geef bericht Student.
       if: - emailadressen check op @novi.nl erin staat
            - Als boolean true is: output Medewerker

       if: - emailadressen check op @novi.nl erin staat
            - Als boolean true is: output : extern
       else: extern output
 */


let emailAdress = ["n.eeken@novi-education.nl", "t.mellink@novi.nl", "novi.nlaapjesk@outlook.com", "a.wiersma@outlook.com"];


function typeOfEmail (email) {
    for (let i = 0; i < emailAdress.length; i++) {
        if (emailAdress[i].includes("@novi-education")) {
            console.log("Dit is een student emailadres");
        }

        if (emailAdress[i].includes("@novi.nl")) {
            console.log("Dit is een medewerker emailadres");
        }

        if (emailAdress[i].includes("@outlook.com")) {
            console.log("Dit is een extern emailadres");
        }
    }

}

typeOfEmail(emailAdress);



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

/*
Stap 1: array maken van emails
stap 2 : functie declareren=
         - check of @ er in voorkomt
         - check of er geen "," voorkomt
         - check of . laatste zin is. index- length ===.
stap 3 : for loop opmaken

 */

let emailCheck = ["n.eeken@novi.nl","tessmellink@novi.nl", "n.eekenanovi.nl", "tessmellink@novi,nl." ]

function checkEmailValidity(emailCheck){
if (emailCheck.includes("@")){
    console.log("Email bevat @")
}
if (emailCheck.includes(",")){
    console.log("email bevat een ,")
}
if (emailCheck.charAt(emailCheck.length-1) === ".")
console.log("dit is een email met een .");

}


for (let i = 0; i < emailAdress.length; i++) {
    checkEmailValidity(emailCheck[i])
}

