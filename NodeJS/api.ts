import express, { Request, Response } from "express";
import bodyParser from "body-parser";

// Definisco l'interfaccia Prodotti
export interface Prodotti {
    id: number;
    nome: string;
    categoria: string;
    prezzo: number;
    taglie_disponibili: string[];
    colori_disponibili: string[];
    descrizione: string;
    immagine: string;
    nuovo_arrivi: boolean;
    best_seller: number;
}

// Creo l'app express
const app = express();

// Imposto il middleware body-parser
app.use(bodyParser.json());

let prodotti: Prodotti[] = [
    {
        "id": 1,
        "nome": "Nike Air Max 270",
        "categoria": "Sneakers",
        "prezzo": 129.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Grigio", "Blu", "Rosso"],
        "descrizione": "Le Nike Air Max 270 offrono un comfort incredibile grazie all'ammortizzazione Air Max. Ideali per l'uso quotidiano e l'attività sportiva.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237252/1_airmax270_kgxn1q.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 2,
        "nome": "Nike React Infinity Run 4",
        "categoria": "Running",
        "prezzo": 159.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero/Giallo", "Grigio/Blu", "Bianco/Rosso", "Verde", "Blu"],
        "descrizione": "Le Nike React Infinity Run 4 sono progettate per la massima ammortizzazione e stabilità durante la corsa. Con tomaia in Flyknit per un comfort superiore.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237252/2_reactinfinityrn4_pjvqsx.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 3,
        "nome": "Nike Air Force 1",
        "categoria": "Sneakers",
        "prezzo": 109.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Bianco", "Nero", "Rosso", "Blu", "Grigio"],
        "descrizione": "Le Nike Air Force 1 sono un'icona streetwear, caratterizzate da un design classico e un comfort eccezionale.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237252/3_airforce1_rzzav9.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
      },
      {
        "id": 4,
        "nome": "Nike Pegasus 41",
        "categoria": "Running",
        "prezzo": 139.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Grigio/Arancione", "Bianco/Nero", "Blu/Verde", "Rosso", "Nero"],
        "descrizione": "Le Nike Pegasus 41 offrono una corsa reattiva e ammortizzata grazie all'unità Zoom Air. Ideali per runner di tutti i livelli.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237252/4_pegasus41_dvjnrw.webp",
        "nuovo_arrivi": true,
        "best_seller": 4
      },
      {
        "id": 5,
        "nome": "Nike Air Force 1 '07 Mid",
        "categoria": "Basket",
        "prezzo": 139.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero/Rosso", "Bianco/Nero", "Blu/Rosso", "Verde", "Rosso/Bianco"],
        "descrizione": "Nike Air Force 1 '07 Mid sono scarpe da basket iconiche, ispirate al modello originale del 1985. Confortevoli e dal look distintivo.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237253/5_airforce107mid_jhuaqk.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 6,
        "nome": "Nike Revolution 7",
        "categoria": "Running",
        "prezzo": 64.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Grigio", "Blu", "Rosso"],
        "descrizione": "Le Nike Revolution 7 sono scarpe leggere e traspiranti, ideali per correre o per l'uso quotidiano. Ottimo rapporto qualità-prezzo.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237252/6_revolution7_tkr9ne.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 7,
        "nome": "Nike Air Zoom Structure 25",
        "categoria": "Running",
        "prezzo": 129.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero/Grigio", "Bianco/Nero", "Blu", "Rosso", "Verde"],
        "descrizione": "Le Nike Air Zoom Structure 25 sono scarpe da corsa stabili e ammortizzate, ideali per runner che cercano supporto e comfort.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237253/7_structure25_iom1gv.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
      },
      {
        "id": 8,
        "nome": "Nike Air Max 97",
        "categoria": "Sneakers",
        "prezzo": 189.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Argento", "Nero", "Oro", "Rosso", "Bianco"],
        "descrizione": "Le Nike Air Max 97 sono sneakers iconiche caratterizzate da un design futuristico e un'ammortizzazione leggendaria.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237253/8_airmax97_nw7hgh.jpg",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 9,
        "nome": "Nike Air Zoom Terra Kiger 9",
        "categoria": "Trail Running",
        "prezzo": 149.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero/Grigio", "Blu", "Verde", "Rosso", "Arancione"],
        "descrizione": "Le Nike Air Zoom Terra Kiger 9 sono progettate per il trail running, offrendo trazione e stabilità su terreni accidentati.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237254/9_airzoomterrakiger9_hnq6u0.jpg",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 10,
        "nome": "Nike Air VaporMax Plus",
        "categoria": "Sneakers",
        "prezzo": 157.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Verde"],
        "descrizione": "Le Nike Air VaporMax Plus offrono un'esperienza di corsa leggera e reattiva grazie all'unità VaporMax a tutta lunghezza.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237255/10_airvapormaxplus_ndaq1t.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 11,
        "nome": "Nike Air Max 90",
        "categoria": "Sneakers",
        "prezzo": 119.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max 90 sono sneakers classiche con dettagli iconici, offrendo comfort e stile per tutti i giorni.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237255/11_airmax90_kwdevk.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
      },
      {
        "id": 12,
        "nome": "Nike Air Zoom Vomero 17",
        "categoria": "Running",
        "prezzo": 159.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Verde"],
        "descrizione": "Le Nike Air Zoom Vomero 17 sono scarpe da corsa ammortizzate e reattive, ideali per lunghe distanze e allenamenti intensi.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237256/12_airzoomvomero17_oqxeb5.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 13,
        "nome": "Nike P-6000 Retro",
        "categoria": "Basket",
        "prezzo": 149.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero/Rosso", "Bianco/Nero", "Blu/Rosso", "Grigio", "Verde"],
        "descrizione": "Le Nike P6000 Retro sono scarpe da basket iconiche con dettagli classici e comfort eccezionale.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237256/13_p6000retro_dz0qii.webp",
        "nuovo_arrivi": false,
        "best_seller": 2
      },
      {
        "id": 14,
        "nome": "Nike Blazer Mid '77 Vintage",
        "categoria": "Sneakers",
        "prezzo": 99.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Bianco", "Nero", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Blazer Mid '77 Vintage sono sneakers retrò con uno stile distintivo e una tomaia in pelle premium.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237257/14_blazermid77vintage_fjxdqw.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 15,
        "nome": "Nike Air Max Excee",
        "categoria": "Sneakers",
        "prezzo": 59.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Bianco", "Nero", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max Excee sono ispirate alle iconiche Air Max 90, offrendo comfort e stile in un design moderno.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237257/15_airmaxexcee_y1xqoj.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 16,
        "nome": "Nike Air Zoom SuperRep 4",
        "categoria": "Training",
        "prezzo": 129.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Verde"],
        "descrizione": "Le Nike Air Zoom SuperRep 4 sono scarpe da training con ammortizzazione reattiva e supporto per gli allenamenti più intensi.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237258/16_airzoomsuperrep4_ghwls6.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
      },
      {
        "id": 17,
        "nome": "Nike Giannis Freak 5",
        "categoria": "Basket",
        "prezzo": 87.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero/Bianco", "Rosso/Nero", "Blu", "Grigio", "Verde"],
        "descrizione": "Le Nike Giannis Freak 5 sono scarpe da basket progettate per la potenza e la velocità di Giannis Antetokounmpo. Massima trazione e stabilità.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237258/17_giannisfreak5_qqjvff.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 18,
        "nome": "Nike Zegama Trail 2",
        "categoria": "Running",
        "prezzo": 179.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Verde"],
        "descrizione": "Le Nike Zegama Trail 2 sono scarpe da corsa ammortizzate e leggere, ideali per corridori di tutti i livelli.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237259/18_zegamatrail2_z0hm5o.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
      },
      {
        "id": 19,
        "nome": "Nike Air Max SC",
        "categoria": "Sneakers",
        "prezzo": 89.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max SC sono scarpe da corsa comode e versatili, ideali per l'uso quotidiano o l'allenamento leggero.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237259/19_airmaxsc_n6qgay.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 20,
        "nome": "Nike Air Max Dn",
        "categoria": "Sneakers",
        "prezzo": 134.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max Dn sono ispirate all'iconica Air Max 90, con un design futuristico e un'ammortizzazione avanzata.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237259/20_airmaxdn_tar6d7.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      
      {
        "id": 21,
        "nome": "Nike Flyknit Haven",
        "categoria": "Running",
        "prezzo": 159.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Flyknit Haven offrono un'esperienza di corsa rivoluzionaria grazie alla tecnologia di ammortizzazione a microsfere.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237261/21_flyknithaven_hpr1kf.jpg",
        "nuovo_arrivi": false,
        "best_seller": 5
      },
      {
        "id": 22,
        "nome": "Nike Air Max Furiosa",
        "categoria": "Sneakers",
        "prezzo": 129.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max Furiosa sono scarpe da running retrò con un'ammortizzazione Air Max e uno stile distintivo.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237262/22_airmaxfuriosa_trlf8o.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 23,
        "nome": "Nike Air Zoom Structure 25.2",
        "categoria": "Running",
        "prezzo": 129.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Zoom Structure 25.2 offrono supporto e stabilità per i runner, con un'ammortizzazione reattiva e una tomaia traspirante.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237262/23_structure25.2_phfehd.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 24,
        "nome": "Nike Air Max 270 React",
        "categoria": "Sneakers",
        "prezzo": 159.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max 270 React uniscono il comfort dell'unità Air Max con la reattività della tecnologia React.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237262/24_airmax270react_qminci.jpg",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 25,
        "nome": "Nike Wildhorse 8",
        "categoria": "Trail Running",
        "prezzo": 139.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Wildhorse 8 sono scarpe da trail running progettate per la massima trazione e stabilità su terreni accidentati.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237263/25_wildhorse8_w7v8h4.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
      },
      {
        "id": 26,
        "nome": "Nike InfinityRN 4 GORE-TEX",
        "categoria": "Running",
        "prezzo": 189.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike InfinityRN 4 GORE-TEX sono scarpe da corsa con una tomaia in Flyknit e un'ammortizzazione reattiva per una corsa fluida.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237264/26_infinityrn4goretex_z6dugr.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 27,
        "nome": "Nike Zoom SuperRep 4 Next Nature",
        "categoria": "Running",
        "prezzo": 139.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike Zoom SuperRep 4 Next Nature sono scarpe da training con un'ammortizzazione reattiva e una suola stabile per gli esercizi in palestra.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237265/27_zoomsuperrep4nextnature_tn01nr.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 28,
        "nome": "Nike Giannis Immortality 3",
        "categoria": "Basket",
        "prezzo": 119.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Giannis Immortality 3 sono scarpe da basket con un'ammortizzazione reattiva e un design ispirato a Giannis Antetokounmpo.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237266/28_giannisimmortslity3_w63ib1.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 29,
        "nome": "Nike Metcon 9",
        "categoria": "Training",
        "prezzo": 90.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Metcon 9 sono scarpe da training progettate per la stabilità e la resistenza, ideali per gli allenamenti più intensi.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237267/29_metcon9_etfhuj.webp",
        "nuovo_arrivi": false,
        "best_seller": 1
      },
      {
        "id": 30,
        "nome": "Nike Court Legacy Lift",
        "categoria": "Sneakers",
        "prezzo": 84.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike Court Legacy Lift sono sneakers confortevoli e leggere, ideali per lo stile quotidiano.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237268/30_courtlegacylift_hykmc8.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 31,
        "nome": "Nike Air Max 95",
        "categoria": "Sneakers",
        "prezzo": 189.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45", "46"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max 95 sono scarpe iconiche con un design distintivo e un'ammortizzazione Air Max visibile.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237267/31_airmax95_le0tkh.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
      },
      {
        "id": 32,
        "nome": "Nike Winflo 11",
        "categoria": "Running",
        "prezzo": 87.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike Winflo 11 8 sono scarpe da corsa leggere e reattive, ideali per allenamenti e gare su strada.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237269/32_winflo11_zmv5uy.jpg",
        "nuovo_arrivi": false,
        "best_seller": 4
      },
      {
        "id": 33,
        "nome": "Nike Force 1 LV8 2",
        "categoria": "Sneakers",
        "prezzo": 71.49,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike Force 1 LV8 2 uniscono il classico stile delle Air Force 1 con la reattività della tecnologia React.",
       "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237270/33_force1lv82_srzgoc.webp",
        "nuovo_arrivi": false,
        "best_seller": 3
      },
      {
        "id": 34,
        "nome": "Nike Zoom Bella 6",
        "categoria": "Training",
        "prezzo": 89.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike Zoom Bella 6 sono scarpe da training leggere e flessibili, ideali per gli allenamenti in palestra o all'aperto.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237270/34_zoombella6_krfzdz.webp",
        "nuovo_arrivi": true,
        "best_seller": 4
      },
      
      
      {
        "id": 35,
        "nome": "Nike Air Max Plus",
        "categoria": "Sneakers",
        "prezzo": 189.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max Plus sono sneakers iconiche con un design audace e un'ammortizzazione Max Air per il massimo comfort.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237272/35_airmaxplus_xojhe7.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
      },

      {
        "id": 36,
        "nome": "Nike Dunk Low Next Nature",
        "categoria": "Running",
        "prezzo": 199.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike Dunk Low Next Nature sono scarpe iconiche confortevoli e leggere, ideali per la vita di tutti i giorni.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237272/36_dunklownextnature_hzssed.webp",
        "nuovo_arrivi": false,
        "best_seller": 2
    },
    {
        "id": 37,
        "nome": "Nike Air Force 1 Sage Low",
        "categoria": "Sneakers",
        "prezzo": 129.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike Air Force 1 Sage Low sono un classico intramontabile, ideali per un look casual e confortevole.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237285/37_airforce1sagelow_esvv8v.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
    },
    {
        "id": 38,
        "nome": "Nike Alphafly 3 Electric",
        "categoria": "Running",
        "prezzo": 324.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Nike Alphafly 3 Electric sono le scarpe da maratona più avanzate mai realizzate, progettate per la massima prestazione.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237273/38_alphafly3eletric_ckrhwh.webp",
        "nuovo_arrivi": true,
        "best_seller": 5
    },
    {
        "id": 39,
        "nome": "Nike Air Max 1",
        "categoria": "Sneakers",
        "prezzo": 129.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max 1 sono le iconiche scarpe da corsa che hanno rivoluzionato il mondo delle sneaker, con un design unico e confortevole.",
       "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237273/39_airmax1_kvo8gi.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
    },
    {
        "id": 40,
        "nome": "Nike Air Max Plus 2",
        "categoria": "Sneakers",
        "prezzo": 189.99,
        "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
        "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
        "descrizione": "Le Nike Air Max Plus 2 sono il rinnovamento delle iconiche Air Max Plus, con un'ammortizzazione Max Air e uno stile unico.",
        "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237274/40_airmaxplus2_zr1vd5.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
    },
    {
      "id": 41,
      "nome": "Nike Air Max Plus Utility",
      "categoria": "Sneakers",
      "prezzo": 199.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Nike Air Max Plus Utility offrono un'ammortizzazione Air Max a tutta lunghezza, per un comfort e uno stile senza precedenti.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237277/41_airmaxplusutility_cxgio5.webp",
        "nuovo_arrivi": true,
        "best_seller": 5
  },
  {
      "id": 42,
      "nome": "Nike Air Zoom Victory Tour 3 NRG",
      "categoria": "Running",
      "prezzo": 249.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Le Nike Air Zoom Victory Tour 3 NRG sono scarpe da corsa progettate per la velocità e il comfort, ideali per le gare su strada.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237274/42_airzoomvictorytour3nrg_zmwqwj.webp",
        "nuovo_arrivi": true,
        "best_seller": 5
  },
  {
      "id": 43,
      "nome": "Nike Lunar Force 1",
      "categoria": "Sneakers",
      "prezzo": 179.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Nike Lunar Force 1 sono un'icona dello stile urbano, con un'ammortizzazione Air-Sole per il massimo comfort.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237277/43_lunarforce1_truxim.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
  },
  {
      "id": 44,
      "nome": "Nike Free RN NN",
      "categoria": "Running",
      "prezzo": 83.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Le Nike Free RN NN sono scarpe da corsa leggere e flessibili, ideali per allenamenti e percorsi naturali.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237277/44_freernnn_mgnfag.jpg",
        "nuovo_arrivi": false,
        "best_seller": 3
  },
  {
      "id": 45,
      "nome": "Nike Air Max 90 LTR",
      "categoria": "Sneakers",
      "prezzo": 129.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Nike Air Max 90 LTR sono scarpe da corsa comode e versatili, con un'ammortizzazione reattiva per prestazioni ottimali.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237281/45_airmax90ltr_kqx6nu.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
  },
  {
      "id": 46,
      "nome": "Nike Giannis Immortality 4",
      "categoria": "Basket",
      "prezzo": 89.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Le Nike Giannis Immortality 4 sono scarpe da basket con un'ammortizzazione reattiva e un supporto ottimale, per massima performance in campo.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237277/46_giannisimmortslity4_i8glaf.webp",
        "nuovo_arrivi": false,
        "best_seller": 2
  },
  {
      "id": 47,
      "nome": "Nike Air Max Plus Drift",
      "categoria": "Sneakers",
      "prezzo": 129.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Nike Air Max Plus Drift sono scarpe da corsa con un design audace e un'ammortizzazione Air Max a tutta lunghezza.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237280/47_airmaxplusdrift_ha39uv.webp",
        "nuovo_arrivi": false,
        "best_seller": 4
  },
  {
      "id": 48,
      "nome": "Nike Air Zoom Spiridon Cage 2",
      "categoria": "Basket",
      "prezzo": 169.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Le Nike Zoom Freak 2 sono scarpe da basket con un'ammortizzazione reattiva e un design ispirato alla potenza di Giannis Antetokounmpo.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237280/48_airzoomspiridoncage2_tiiwd3.jpg",
        "nuovo_arrivi": false,
        "best_seller": 5
  },
  {
      "id": 49,
      "nome": "Nike ISPA Link Axis",
      "categoria": "Sneakers",
      "prezzo": 299.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Le Nike ISPA Link Axis sono scarpe che guardano al futuro, uniche nel loro stile e un ammortizazzione Air Max",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237281/49_ispalinkaxis_wzhd2k.webp",
        "nuovo_arrivi": false,
        "best_seller": 5
  },
  {
      "id": 50,
      "nome": "Nike Zegama 2",
      "categoria": "Training",
      "prezzo": 143.99,
      "taglie_disponibili": ["38", "39", "40", "41", "42", "43", "44", "45"],
      "colori_disponibili": ["Nero", "Bianco", "Blu", "Rosso", "Grigio"],
      "descrizione": "Le Nike Zegama 2s ono scarpe da corsa leggere e veloci, con una schiuma ZoomX per un'ammortizzazione reattiva.",
      "immagine": "https://res.cloudinary.com/dtdmzhpk4/image/upload/v1724237280/50_zegama2_a0oefj.webp",
        "nuovo_arrivi": false,
        "best_seller": 1
  }
];

// Definiamo la rotta "/prodotti"
app.get("/prodotti", (req: Request, res: Response) => {
    console.log("Qualcuno mi ha contattato...");
    res.send({
        prodotti: prodotti
    });
});

// Faccio partire il server su una porta
app.listen(3000, () => {
    console.log(`API in ascolto sulla porta 3000`);
});
