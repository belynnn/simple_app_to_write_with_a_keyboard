//////////////////////////////////////////////
//
// Déclarations liant les variables aux ID's prédéfinies sur la page HTML
// + déclaration d'une liste de mots prédéfinies
//
//////////////////////////////
let motSelectionne = document.getElementById('motSelectionne')
let motEntre = document.getElementById('motEntre')
let msgErreur = document.getElementById('msgErreur');
let form = document.getElementById('form')

const LISTE_MOTS = [
  "Aristocratie",
  "Barbapapa",
  "Cristallisant",
  "Dromadaire",
  "Eglantier",
  "Fabuleuse",
  "Gargantuesque",
  "Hirondelle",
  "Instabilité",
  "Jardinière",
  "Kayak",
  "Laitage",
  "Mandragore",
  "Nidifuge",
  "Opérationnelle",
  "Pistache",
  "Quintessence",
  "Ratification",
  "Solfège",
  "Tarentule",
  "Ubuesque",
  "Vélodrome",
  "Wagonnet",
  "Xylophone",
  "Yiddish",
  "Anticonstitutionnellement",
  "Chiropracteur",
  "Contraventionnalisation",
  "Intergouvernementalisation",
  "Interdépartementalisation",
  "Périphore",
  "Mélopée",
  "Syrinx",
  "Alcyonien",
  "Rubéfier",
  "Tératoïde",
  "Hypotypose",
  "Equanimité",
  "Ophiolâtrie",
  "Iatrogène",
  "Chantâmes",
  "Traître",
  "Jeûne",
  "Aïeul",
  "Coïncidence",
  "Paranoïa",
  "Laïque",
  "Faïence",
  "Aussitôt",
  "Cèpe",
  "Mèches",
  "Excès",
  "Barème",
  "Lésènes",
  "Voilà",
  "Déjà",
  "Là-bas",
  "Jusqu'à",
  "Là-dessous",
  "Tête-à-tête",
  "Bric-à-brac",
  "Tête-à-queue",
  "Tout-à-l'égout",
  "Baïonnette",
  "Héroïne",
  "Circonflexe",
  "Gymnastique",
  "Aboyaient",
  "Acronymes",
  "Analyseront",
  "Ankylosaure",
  "Zygomatiques",
  "Intervieweront",
  "Sandwicheries",
  "Taekwondo",
  "Wallaby",
  "Agrammaticaux",
  "Abdominaux",
  "Xylophages",
  "Juxtaposition",
  "Tableautin",
  "Tachycardie",
  "Tâcherons",
  "Tai-chi-chuan",
  "Taille-crayon",
  "Téléostéens",
  "Tenthrèdes",
  "Toboggan",
  "Tyrannosaure",
  "Typographiquement",
  "Tyrosémiophilie",
  "Tzatziki",
  "Déstockage",
  "Folklorique",
  "Kérosène",
  "Subkilotonniques",
  "Psychocinétiques",
  "Choucroute",
  "Rouspéter",
  "Esperluette"
]

//////////////////////////////////////////////
//
// Déclaration d'un mot aléatoire par un nombre entre 0 et la longueur de la liste des mots prédéfinies
// Déclaration disant que le mot sélectionné aléatoirement qui doit s'afficher dans la page HTML (frontend) est égale au mot sélectionné aléatoirement dans la liste de mots prédéfinies
// Déclaration disant que la valeur du mot sélectionné aléatoirement est égale au mot sélectionné aléatoirement dans la liste de mots prédéfinies
//
//////////////////////////////
let motRandom = Math.floor(Math.random() * (LISTE_MOTS.length))
motSelectionne.innerHTML = LISTE_MOTS[motRandom]
motSelectionne.value = LISTE_MOTS[motRandom]


//////////////////////////////////////////////
//
// Lecture d'un événement du formulaire à chaque envoi de donnée, afin de bloquer cet envoi
//
//////////////////////////////
form.addEventListener('submit', function(e) {
  e.preventDefault()
})


//////////////////////////////////////////////
//
// Lire un event du formulaire qui bloque le saut de ligne du textarea quand la touche ENTER est pressée
//
//////////////////////////////
form.addEventListener('keypress', function(e) {
  if (e.code == 'Enter') {
    return e.preventDefault()
  }
})


//////////////////////////////////////////////
//
// Lecture d'un événement du formulaire à chaque touche du clavier levée, utilisant la fonction de vérification de concordance des mots entrés et selectionnés
//
//////////////////////////////
form.addEventListener('keyup', function(e) {
  if (motSelectionne.value === motEntre.value) {
    document.getElementById("motSelectionne").style.color = "green"
  } else {
    document.getElementById("motSelectionne").style.color = "red"
  }

  if (e.code !== 'Enter') {
    return
  }
  
  checkWord()
})


//////////////////////////////////////////////
//
// Fonction de vérification de concordance des mots entrés par l'utilisateur et des mots sélectionnés aléatoirement dans une liste de mots prédéfinies
//
//////////////////////////////
function checkWord() {
  if (motSelectionne.value === motEntre.value) {
    form.submit()
  }
}


//////////////////////////////////////////////
//
// Focus l'input lorsque la page se recharge, permet d'éviter à l'apprenant de devoir cliquer
//
//////////////////////////////
document.getElementById("motEntre").addEventListener("click", () => {
  document.getElementById("motEntre").focus()
})