
// Après le chargement du DOM, la fonction() est exécutée.
$(document).ready(function(){
  // Créer une logique qui prend les valeurs d'entrée de [score de langue, score d'anglais, 
  //core de mathématiques, score de sciences, score d'études sociales] et donne un score total et moyen.

  function score_indicate(){
     // Dans la variable "subject_points
    // Remplacer l'ensemble [notes de langues, notes d'anglais, notes de mathématiques, 
    //notes de sciences, notes d'études sociales].
    

    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
     // Dans la variable "somme
    // Ajouter les [notes de langues, d'anglais, de mathématiques, de sciences et d'études sociales].
    // Indice ! Prenez les tableaux un par un et additionnez-les.
     
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    
    // La variable "sum" (total des points) dans "Total des points :" (class="sum_indicate") de sortie.
    $("#sum_indicate").text(sum);
    

     // Dans la variable "average = moyenne

     let average = sum / subject_points.length;

     $("#average_indicate").text(average);
    
    // Trouvez la valeur moyenne et substituez-la dans. (Nombre total de points dont vous voulez prendre 
    //la moyenne pour (somme) / Nombre total d'articles)
    // Indice ! Utilisez la méthode de la longueur pour trouver le nombre total de pièces. (méthode de la longueur : 
    //méthode pour obtenir la longueur de la chaîne, le nombre d'éléments dans le tableau, etc.)
  };
  
   //La note moyenne est obtenue, et les classements ("A", "B", "C", "D") sont divisés par la note moyenne obtenue. 
  //La logique pour ce faire est créée.
  function get_achievement(){
    // Dans la variable "averageIndicate
    // Obtenez la note moyenne à partir du HTML class="average_indicate" et Substitution.
    let averageIndicate = $("#average_indicate").text();
    //console.log(averageIndicate)
// Si "averageIndicate" est supérieur ou égal à 80, renvoyer "A".

let rankTable = ["A","B","C","D"];
    if ( averageIndicate >= 80){
      return rankTable[0];
   // Renvoie un "B" si la "moyenneIndiquer" est supérieure ou égale à 60.
    } else if ( averageIndicate >= 60) {
      return rankTable[1];
      
       //voie un "C" si la "moyenneIndiquer" est supérieure ou égale à 40 
      // Si la "moyenneIndiquer" est supérieure ou égale à 40, renvoie un "C".
      // renvoie un "D" si moyenneIndiquer" est une autre note.
    }else if(averageIndicate >=40){
      return rankTable[2];
    }
     else {
      return rankTable[3];
    }

   };

  // Obtenir la valeur moyenne, puis classer ("A", "B", "C", "D") à partir de la note moyenne obtenue. 
  //La logique pour ce faire est créée.
  function get_pass_or_failure(){
    let subject_points = [ Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                           ];

    //Attribuez le nombre de sujets entrés dans la variable
    let number = subject_points.length;
   
    // Assignez "pass" à la variable "juges".
    let judge = "Succè";
      // Si le score de chaque sujet inscrit est inférieur à 60, la variable "juges" sera à nouveau réglée 
        for(let i=0;i<number;i++){
          if (subject_points[i] <60){
            return judge = "Echec"
          }else{
            return judge
          }
        }                  
      
    //sur "échec". Affecter et rendre les "juges".
    // Conseil ! Essayez de rechercher "javascript scores, pass, fail, logic
 
    return judge;
  };
 // Créer la logique du juge final.
  function judgement(){

       // Assignez "return value of get_achievement()" à la variable "achievement".
    let achievement = get_achievement();

     // Assignez "return value of get_achievement()" à la variable "achievement".
    let pass_or_failure = get_pass_or_failure();

    // Lorsque vous appuyez sur le bouton "juge final" (id="alerte-indication"), vous verrez "votre Le résultat e
    //st ${réalisation} et ${pass_ou_échec}. processus.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Votre Rang est: ${achievement} "Et" Votre résultat est!!! :${pass_or_failure}</label>`);
  };

  // La fonction "score_indicate()" sera déclenchée lorsque l'un des scores de [score de langue, score d'anglais, 
  //score de mathématiques, score de sciences, score d'études sociales] est modifié.
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  // Lorsque vous appuyez sur le bouton "rank" (class="évaluation"), "get_". C'est le processus par lequel 
  //la "réalisation()" est produite.
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });

  // Lorsque vous appuyez sur le bouton "rank" (class="évaluation"), "get_". C'est le processus par l
  //equel la "réalisation()" est produite. $('#btn-judge').click(function() {
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });

  // Lorsque vous appuyez sur le bouton "juge final" (class="btn-declaration") C'est le processus par 
  //lequel la fonction judgement() est produite.
  $('#btn-declaration').click(function() {
    $('#declaration').text(judgement());
    $('#btn-declaration').click(function() {
      $('#declaration').empty();
      $('#declaration').text(judgement());
    });
  });
});
