//////////////////////////////////////////////
//
// Déclarations liant les variables aux ID's prédéfinies sur la page HTML
// + déclaration d'une liste de paragraphes prédéfinies
//
//////////////////////////////
let paragrapheEntre = document.getElementById('paragrapheEntre')
let paragrapheSelectionne = document.getElementById('paragrapheSelectionne')
let msgErreur = document.getElementById('msgErreur')

const LISTE_PARAGRAPHES = [
  "Historiquement, l'idée d'intelligence artificielle semble émerger dans les années 1950 quand Alan Turing se demande si une machine peut \"penser\". Dans l'article \"Computing Machinery and Intelligence\" (Mind, octobre 1950), Turing explore ce problème et propose une expérience (maintenant dites test de Turing) visant à trouver à partir de quand une machine deviendrait \"consciente\". Il développe ensuite cette idée dans plusieurs forums, dans la conférence \"L'intelligence de la machine, une idée hérétique\", dans la conférence qu'il donne à la BBC 3e programme le 15 mai 1951 \"Les calculateurs numériques peuvent-ils penser ?\" ou la discussion avec M.H.A. Newman, Sir Geoffrey Jefferson et R.B. Braithwaite, les 14 et 23 janvier 1952 sur le thème \"Les ordinateurs peuvent-ils penser ?\".",
  "Si les progrès de l'intelligence artificielle sont récents, ce thème de réflexion est tout à fait ancien, et il apparaît régulièrement au cours de l'histoire. Les premiers signes d'intérêt pour une intelligence artificielle et les principaux précurseurs de cette discipline sont les \"Automates\" et la \"Pensée automatique\".",
  "Automates : Une des plus anciennes traces du thème de \"l'homme dans la machine\" date de 800 avant notre ère, en Egypte. La statue du dieu Amon levait le bras pour désigner le nouveau pharaon parmi les prétendants qui défilaient devant lui, puis elle \"prononçait\" un discours de consécration. Les Egyptiens étaient probablement conscient de la présence d'un prête actionnant un mécanisme et déclarant les paroles sacrées derrière la statue, mais cela ne semblait pas être pour eux contradictoire avec l'incarnation de la divinité. Vers la même époque, Homère, dans L'Iliade (XVIII, 370-421), décrit les automates réalisés par le dieu forgeron Héphaïstos : des trépieds munis de roues en or, capables de porter des objets jusqu'à l'Olympe et de revenir seuls dans la demeure du dieu ; ou encore, deux servantes forgées en or qui l'assistent dans sa tâche. De même, le Géant de bronze Talos, gardien des rivages de la Crète, était parfois considéré comme une oeuvre de dieu.",
  "Pensée automatique : Une des premières tentatives de formalisation de la pensée connue est le \"zairja\", mécanisme qu'utilisaient les astrologues arabe pour générer des idées supposées logiques, dont l'invention est attribuée à Abu al-Abbas as-Sabti au XIIè siècle. Raymon Lulle s'en est probablement inspiré pour mettre au point son Ars Magna. Missionnaire, philosophe et théologien espagnol du XIIIè siècle, il essaya lui aussi de générer des idées grace à un système mécanique. Il combinait aléatoirement des concepts grâce à une sorte de règle à calcul, sur laquelle pivotaient des disques concentriques gravés de lettres et de symboles philosophiques. Il fondait sa méthode sur l'identification de concepts de base, puis leur combinaison mécanique soit entre eux, soit avec des idées connexes. Raymon Lulle l'appliqua à la métaphysique, puis à la morale, à la médecine et à l'astrologie. Mais il n'utilisait que la logique déductive, ce qui ne permettait pas à son système d'acquérir un apprentissage, ni davantage de remettre en cause des principes de départ : seule la logique inductive le permet.",
  "L'intelligence artificielle générail (IAG) comprend tout système informatique capable d'effectuer ou d'apprendre pratiquement n'importe quelle tâche cognitive propre aux humains ou autres animaux. Elle peut alternativement être définie comme un système informatique surpassant les humains dans la plupart des tâches ayant un intérêt économique. L'intelligence artificielle généralE a longtemps été considérée comme une sujet purement spéculatif. Certains travaux de recherche ont déjà décrit GPT-4 comme ayant des \"étincelles\" d'intelligence artificielle générale. Les experts en intelligence artificielle affichent de larges désaccords et incertitudes quant à la date potentielle de conception des premières intelligences artificielles générales (parfois appellées \"intelligences artificielles de niveau humain\", leur impact sur la société, et leur potentiel à déclencher une \"explosion d'intelligence\".",
  "Comparer la capacité de traitement de l'information d'un cerveau humain à celle d'un ordinateur peut aider à comprendre les ordres de grandeur pour estimer la possibilité pratique ou non d'une intelligence artificielle général, de même qu'un simple calcul de puissance en kW permet grosso modo de dire qu'un camion donné pourra espérer transporter commodément telle ou telle charge ou si celui lui sera impossible. L'intelligence artificielle n'avait donné que des résultats mitigés sur les ordinateurs typiques de 1970 effectuant 10 opérations logiques par seconde.",
  "Le cerveau humain, formé de 10 neurones ne pouvant chancun commuter plus de 100 fois par seconde en raison de leur temps de relaxation permettait beaucoup plus de traitements logiques par unité de temps (10 opérations logiques par seconde). Ce handicap technique précis n'existe plus sur les ordinateurs depuis les années 2000, travaillant en 64 bits et avec des horloges cadancées à 4GHz environ, pour des processeurs destinés aux particuliers. Concernant des supercalculateurs comme Summit ou Fugaki 415-PFLOPS, le rapport du nombre de comparaisons par seconde entre ordinateur et cerveau a même complètement changé de sens. Toutefois l'IA souligne la difficulté à expliciter toutes les connaissances utiles à la résolution d'un problème complexe. Certaines connaissances dites implicites sont acquises par l'expérience et mal formalisables. L'apprentissage de ces connaissances implicites par l'expérience est exploitée depuis les années 1980. Néanmoins, un autre type de complexité apparaît : la complexité structurelle. Comment mettre en relation des modules spécialisés pour traiter un certain type d'informations, par exemple un système de reconnaissance des formes visuelles, un système de reconnaissance de la parole, un système lié à la motivation, à la coordination motrice, au langage, etc.",
  "Le concept d'intelligence artificielle forte fait référence à une machine capable non seulement de produire un comportement intelligent, notamment de modéliser des idées abstraites, mais aussi d'éprouver une impression d'une réelle conscience, de \"vrais sentiments\" (quoi qu'on puisse mettre derrière ces mots), et \"une compréhension de ses propres raisonnements\". Contrairement à l'intelligence artificielle général, l'intelligence artificielle forte fait donc le plus souvent intervenir des notions philosophiques de conscience qui font que les capacités de l'intelligence artificielle ne suffisent pas à dire si elle est \"forte\". Cela dit, aucune définition de la conscience pour une IA ne fait consensus. Les termes \"intelligence artificielle forte\" et \"intelligence artificielle générale\" sont parfois en pratique utilisés de manière interchageable. En partant du principe que la conscience a un support biologique et donc matériel, les scientifiques ne voient généralement pas d'obstable théorique à la création d'une intelligence consciente sur un support matériel autre que biologique. Selon les tenants de l'IA forte, si à l'heure actuelle il n'y a pas d'ordinateurs ou d'algorithmes aussi intelligents que l'être humain, ce n'est pas un problème d'outil mais de conception. Il n'y aurait aucune limite fonctionnelle (un ordinateur est une machine de Turing universelle avec pour seules limites celles de la calculabitité), seulement des limites liées à l'aptitude humaine à concevoir des logiciels appropriés (programme, bases de données...).",
  "La notion d'intelligence artificielle faible constitue une approche pragmatique d'ingénieur : chercher à construire des systèmes de plus en plus autonomes (pour réduire le coût de leur supervision), des algorithmes capables de résoudre des problèmes d'une certaine classe, etc. Mais, cette fois, la machine simule l'intelligence, elle semble agir comme si elle était intelligente. On en voit des exemples concrets avec les programmes conversationnels qui tentent de passer le test de Turing, comme ELIZA. Ces logiciels parviennent à imiter de façon grossière le comportement d'humains face à d'autres humains lors d'un dialogue. Joseph Weizenbaum, créateur du programme ELIZA, met en garde le public dans son ouvrage \"Computer Power and Human Reason\" : si ces programmes \"semblent\" intelligents, ils ne le sont pas : ELIZA simule très grossièrement un psychologue en relevant immédiatement toute mention du père ou de la mère, en demandant des détails sur tel élément de phrase et en écrivant de temps en temps \"Je comprends.\", mais son auteur rappelle qu'il s'agit d'une simple mystification : le programme ne comprend en réalité rien.",
  "Si le terme intelligence artificielle peut désigner un système capable de résoudre plusieurs problèmes de façon relativement autonome tout en ne faisant que simuler le principe d'intelligence, il peut aussi désigner des systèmes capables de résoudre uniquement un type de problème pour un jeu de données prédéfini. On peut donner pour exemple un système entrainé à reconnaître des chiffres écrits à la main, comme ceux utilisés par La Poste, qui malgré sa grande performance sur sa tâche, serait incapable de fonctionner sur un problème sortant de ce pour quoi il a été conçu. Ces intelligences artificielles, nommées \"narrow AI\" (intelligence artificielle étroite), sont conçues spécifiquement sur une tâche, sans développement particulier pour la généraliser comme le ferait une intelligence artificielle générale. Elle n'en gardent pas moins leur utilité, et restent très utilisées dans l'industrie, étant les seuls systèmes d'IA utilisables jusqu'à ce qu'une intelligence artificielle générale soit accessible et commercialisée.",
  "Au fil du temps, certains langages de programmation se sont avérés plus commodes que d'autres pour écrire des applications d'intelligence artificielle. Parmi ceux-ci, Lisp et Prolog furent sans doute les plus médiatisés. ELIZA (le premier agent conversationnel, donc pas de la véritable intelligence artificielle) tenait en trois page de SNOBOL. On utilise aussi, plus pour des raisons de disponibilité et de performance que de commodité, des langages classiques tels que C ou C++. Lisp a eu pour sa part une série de successeur plus ou moins inspirés de lui, dont le langage Scheme et les langages typés de la programmation fonctionnelle comme Haskell ou Ocaml. Aujourd'hui, ce sont Python et R qui fournissent les outils les plus riches dans ce domaine. Des plateformes comme TensorFlow et ses bibliothèques haut niveau ont démocratisé et accéléré le développement d'intelligences artificielles.",
  "Il y a une confusion fréquente dans le débat public entre \"intelligence artificielle\", apprentissage automatique (machine learning) et apprentissage profond (deep learning). Pourtant, ces notions ne sont pas équivalentes, mais sont imbriquées : l'intelligence artificielle englobe le machine learning, qui lui-même englobe le deep learning ; l'intelligence artificielle peut aussi englober plusieurs autres types de briques logicielles, comme les moteurs de règles. L'intelligence articielle a été utilisée (ou intervient dans une variétié de domaines : les finances et banques, le domaine militaire, la médecine, le renseignement policier, le Droit, la logistique et transports, l'industrie, la robotique, les jeux vidéos, l'art et encore pléthore d'autres domaines. Dans chacun de ces domaines spécifique, l'intelligence artificielle est avant tout perçue et utilisée comme un outil. Une visseuse électrique permet de visser une vis plus rapidement que de manière manuelle et permet d'économiser de l'énergie physique de façon considérable. Utiliser une intelligence artificielle, c'est utiliser un outil qui nous permet d'aller plus vite, d'économiser du temps, de l'énergie, de l'argent.", 
  "Midjourney, Dall-E, Stable Diffusion... Les outils de création artistique utilisant l'intelligence artificielle, aujourd'hui, se multiplient. Les craintes augmentent sur un détournement de leur usage : artistes spoliés, deepfakes, manipulation de l'opinion, de plus en plus de voix s'élèvent pour que leur usage soit contrôlé et réglementé. Pourtant, ces outils permettent également à des artistes de trouver de l'inspiration rapidement, comme s'ils consultaient divers livres de décorations, de modes ou d'architectures. De plus, les artistes spoliés, la création de deepfakes (fausses informations) existent déjà depuis des centaines d'années. L'usage d'intelligences artificielles ne fait que mettre en avant des problèmes déjà existants, tout comme l'a fait Internet à l'époque de sa création. Au départ, Internet était un outil permettant de rechercher de l'information et de la partager rapidement dans des circuits fermés, puis plus tard, partout dans le monde. Aujourd'hui, Internet permet la transmission d'informations de manière si rapide qu'il nous arrive de ne plus pouvoir suivre l'actualité."
]


//////////////////////////////////////////////
//
// Déclaration d'une paragraphe aléatoire par un nombre entre 0 et la longueur de la liste de paragraphes prédéfinies
// Déclaration disant que la paragraphe sélectionnée aléatoirement qui doit s'afficher dans la page HTML (frontend) est égale à la paragraphe sélectionnée aléatoirement dans la liste de paragraphes prédéfinies
// Déclaration disant que la valeur de la paragraphe sélectionnée aléatoirement est égale à la paragraphe sélectionnée aléatoirement dans la liste de paragraphes prédéfinies
//
//////////////////////////////
let paragrapheAleatoire = Math.floor(Math.random() * LISTE_PARAGRAPHES.length)
paragrapheSelectionne.innerHTML = LISTE_PARAGRAPHES[paragrapheAleatoire]
paragrapheSelectionne.value = LISTE_PARAGRAPHES[paragrapheAleatoire]



//////////////////////////////////////////////
//
// Lecture d'un événement du formulaire à chaque envoi de donnée (submit), afin de bloquer cet envoi par une fonction d'événement
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
  } else if (e.code == 'NumpadEnter') {
    return e.preventDefault()
  } else if (e.code == 'ShiftRight') {
    return e.preventDefault()
  }
})


//////////////////////////////////////////////
//
// Lecture d'un événement du formulaire à chaque touche du clavier levée, utilisant la fonction de vérification de concordance des mots entrés et selectionnés
//
//////////////////////////////
form.addEventListener('keyup', function(e) {
  if (paragrapheSelectionne.value === paragrapheEntre.value) {
    document.getElementById("paragrapheSelectionne").style.color = "green"
  } else {
    document.getElementById("paragrapheSelectionne").style.color = "red"
  }

  if (e.code !== 'Enter') {
    return
  }
  
  checkSentence()
})


//////////////////////////////////////////////
//
// Fonction de vérification de concordance des paragraphes entrés par l'utilisateur et des mots sélectionnés aléatoirement dans une liste de mots prédéfinies
//
//////////////////////////////
function checkSentence() {
  if (paragrapheSelectionne.value === paragrapheEntre.value) {
    form.submit()
  }
}


//////////////////////////////////////////////
//
// Focus l'input lorsque la page se recharge, permet d'éviter à l'apprenant de devoir cliquer
//
//////////////////////////////
document.getElementById("paragrapheEntre").addEventListener("click", () => {
  document.getElementById("paragrapheEntre").focus()
})


//////////////////////////////////////////////
//
// Si correct     = vert
// Si incorrect   = rouge
//
//////////////////////////////

