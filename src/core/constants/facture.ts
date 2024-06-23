interface Ifactures{
    numeroFacture: string;
    date: string;
    client?: string;
    typeDePayement: string;
    articles: object;
}

const factures: Ifactures[] =
[
    {
    "numeroFacture": "F2022001",
    "date": "2022-10-15",
    "client": "zetzu",
    "typeDePayement": "cash",
    "articles": [
      {
        "nom": "pioche",
        "quantite": 3,
        "prixUnitaire": 6000
      },
      {
        "nom": "brouhette",
        "quantite": 2,
        "prixUnitaire": 15000
      },
      {
        "nom": "sifflet",
        "quantite": 1,
        "prixUnitaire": 100
      }
     
    ]
  },
  {
    "numeroFacture": "F202202",
    "date": "2022-10-15",
    "client": "hinata",
    "typeDePayement": "carte",
    "articles": [
     
      {
        "nom": "Feuilles",
        "quantite": 1,
        "prixUnitaire": 2.50
      },
      {
        "nom": "Trombones",
        "quantite": 1,
        "prixUnitaire": 1.00
      }
    ]
  },
  {
    "numeroFacture": "F2022003",
    "date": "2022-10-15",
    "client": "sasuke",
    "typeDePayement": "cash",
    "articles": [
      {
        "nom": "foulard",
        "quantite": 1,
        "prixUnitaire": 500
      },
      {
        "nom": "veste",
        "quantite": 1,
        "prixUnitaire": 5000
      },
      {
        "nom": "Crayon",
        "quantite": 5,
        "prixUnitaire": 0.75
      }
      
    ]
  },
  {
    "numeroFacture": "F2022004",
    "date": "2022-10-15",
    "client": "konane",
    "typeDePayement": "carte",
    "articles": [
      {
        "nom": "geant",
        "quantite": 3,
        "prixUnitaire": 500
      },
      {
        "nom": "trançoneuse",
        "quantite": 2,
        "prixUnitaire": 30000
      }
     
    ]
  },
  {
    "numeroFacture": "F2022005",
    "date": "2022-10-15",
    "client": "tobi",
    "typeDePayement": "cash",
    "articles": [
      {
        "nom": "moto",
        "quantite": 1,
        "prixUnitaire": 5000000
      }
      
    ]
  }
]
export default factures