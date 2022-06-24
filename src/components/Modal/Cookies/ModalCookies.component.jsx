import React from 'react';
import '../Modal.component.scss';

export default function ModalGdpr({ handleClose }) {
  return (
    <div className="modal padding">
      <div className="container">
        <h1>Politia Cookies</h1>
        <p>
          Pentru a iti imbunatati experienta de navigare online, website-ul
          nostru utilizeaza tehnologia de tip cookie pentru a oferi un serviciu
          web personalizat. Datele stocate de fisierele de tip cookie utilizate
          pe website-ul nostru nu arata niciodata detalii personale in baza
          carora sa poata fi stabilita o identitate individuala.
        </p>
        <h3>Ce sunt si cum sunt folosite cookie-urile</h3>
        <p>
          Un cookie este un fisier de mici dimensiuni, format de regula din
          litere si cifre. Acesta este descarcat in memoria unui calculator sau
          a altui tip de dispozitiv folosit pentru navigarea pe internet
          (smartphone, tableta, etc), atunci cand utilizatorul acceseaza un
          anumit site web. Cookie-ul nu poate accesa informatiile de pe hard
          drive-ul utilizatorului, nu contine programe software sau virusi,
          fiind complet &bdquo;pasiv&rdquo;. De asemenea, fisierele de tip
          cookie fac interactiunea ta cu site-urile web mai sigura si mai
          rapida, deoarece acestea isi pot aminti preferintele tale, trimitand
          informatiile pe care le contin inapoi la site-ul web originar
          (first-party cookie) sau catre alt site web caruia le apartin
          (third-party cookie), atunci cand vizitezi din nou site-ul web
          respectiv utilizand acelasi dispozitiv final.
        </p>
        <h3>Tipurile de cookie-uri folosite de Kineticstudio.ro:</h3>
        <p>
          Cookie-urile esentiale stocheaza date legate de sesiunea curenta a
          utilizatorului. Acest tip de cookie se poate dezactiva, dar site-ul va
          deveni nefunctional. Acestea iti permit sa navighezi pe website si sa
          ii utilizezi functiile de baza. De obicei, acestea sunt instalate doar
          ca raspuns la actiunile efectuate de tine care echivaleaza cu o cerere
          de servicii. Aceste fisiere de tip cookie sunt indispensabile pentru
          utilizarea website-urilor.
        </p>
        <p>&nbsp;</p>
        <p>
          Cookie-urile functionale stocheaza preferintele utilizatorilor si
          permit site-ului sa asigure o experienta imbunatatita in timpul
          navigarii. Astfel, aceste cookie-uri asigura livrarea unui continut
          personalizat pe baza istoricului de navigare, permitand astfel
          recunoasterea utilizatorului. Aceste fisiere de tip cookie colecteaza
          informatii anonime si nu pot urmari navigarile tale pe alte site-uri
          web. Perioada de expirare a acestor fisiere de tip cookie este de
          maximum 2 ani.
        </p>
        <p>&nbsp;</p>
        <p>
          Cookie-urile de performanta retin preferintele utilizatorului si modul
          cum foloseste site-ul, astfel incat nu mai este nevoie de setarea lor
          la fiecare vizitare a site-ului. Acestea nu colecteaza informatii care
          pot identifica utilizatorii, toate datele fiind anonime. Cookie-urile
          de performanta sunt folosite doar pentru a imbunatati modul in care
          functioneaza site-ul. Aceste cookie-uri ne permit sa recunoastem si sa
          numaram utilizatorii si sa colectam informatii despre modul in care
          este utilizat website-ul (de exemplu, paginile pe care un utilizator
          le deschide cel mai des si daca utilizatorul primeste mesaje de eroare
          de la anumite pagini). Aceasta ne ajuta sa imbunatatim modul in care
          functioneaza website-ul nostru. Perioada de expirare a acestor fisiere
          de tip cookie este de maximum 2 ani. In ceea ce priveste third-party
          cookies, perioada de expirare poate sa varieze si in unele cazuri
          poate depasi 2 ani.
        </p>
        <p>&nbsp;</p>
        <p>
          Cookie-urile de sesiune sunt stocate in dispozitivul utilizatorului in
          timpul sesiunii de navigare. Acestea stocheaza un identificator anonim
          de sesiune, permitand utilizatorului sa viziteze un site web fara a fi
          necesar sa introduca in fiecare pagina informatiile de identificare
          (nume de utilizator, parola, etc). Astfel de cookie-uri se folosesc
          frecvent intr-un magazin online. Cookie-urile de sesiune sunt stocate
          in memoria dispozitivului doar pe durata unei sesiuni de navigare pe
          internet si sunt eliminate cand browser-ul este inchis. De asemenea
          pot deveni inaccesibile si daca sesiunea a fost inactiva pentru o
          anumita perioada de timp.
        </p>
        <p>&nbsp;</p>
        <p>
          Cookie-urile pentru retelele sociale permit sa impartasesti pe site-ul
          web activitatea ta pe retele sociale, cum ar fi Facebook si Instagram.
          Aceste fisiere de tip cookie nu sunt controlate de catre noi.
        </p>
        <h3>Cum poti controla fisierele de tip cookie</h3>
        <p>
          Iti poti retrage consimtamantul privind fisierele de tip cookie in
          orice moment. In acest scop, poti bloca sau elimina fisierele cookie
          fie prin intermediul setarilor browserului tau web sau prin utilizarea
          unor software-uri puse la dispoziţie de terti, sau urmand
          instrucţiunile specifice pentru categoriile de cookie din sectiunile
          urmatoare. In orice situatie, pot aparea probleme legate de utilizarea
          anumitor parti ale site-ului web daca dezactivati fisierele de tip
          cookie.
        </p>
        <p>&nbsp;</p>
        <p>
          In cazul in care doresti eliminarea fisierelor de tip cookie stocate
          pe dispozitivele tale si sa configurezi browserul tau web astfel incat
          sa refuze fisiere de tip cookie, poti utiliza setarile privind
          preferintele din browser-ul tau web. Pentru a obtine mai multe
          informaţii, vizitaţi website-ul browserelor dvs.:
        </p>
        <p>&nbsp;</p>
        <p>Setari cookie in Internet Explorer &ndash; Internet Explorer;</p>
        <p>Setari cookie in Firefox &ndash; Firefox;</p>
        <p>Setari cookie in Chrome &ndash; Chrome;</p>
        <p>Setari cookie in Safari &ndash; Safari;</p>
        <p>Setari cookie in Edge &ndash; Edge;</p>
        <p>Setari cookie in Opera &ndash; Opera.</p>
        <p>&nbsp;</p>
        <p>
          Pentru a afla mai multe despre fisierele de tip cookie, poti vizita
          http://www.allaboutcookies.org sau sa vezi
          http://www.youronlinechoices.com/, care contin informatii suplimentare
          privind publicitatea comportamentala si viata privata online.
        </p>
        <h3>
          Tehnologii similare folosite pentru imbunatatirea experientei online
        </h3>
        <p>
          Folosim serviciile Google pentru a colecta informatii despre modul in
          care vizitatorii utilizeaza site-urile si aplicatiile noastre web,
          precum si pentru a primi anunturi publicitare si continut de
          marketing, personalizat in functie de preferintele vizitatorilor.
          Gasiti mai multe detalii despre platforma Google si solutiile acestora
          pe https://support.google.com
        </p>
        <p className="close-modal" onClick={handleClose}>
          am luat la cunostinta
        </p>
      </div>
    </div>
  );
}
