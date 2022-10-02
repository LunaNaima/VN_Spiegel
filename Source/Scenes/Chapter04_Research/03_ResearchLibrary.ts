namespace Spiegel_VN {
  export async function Chp04_03_ResearchLibrary(): ƒS.SceneReturn {
    dataForSave.pickedChp04ResearchLibrary = true;
    await ƒS.Location.show(locations.Chp03_E_DiscoverLibrary);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Etwas ratlos stehst du vor der Bücherei. Wie sollen dir diese alten, staubigen Bücher helfen?");
 
    await ƒS.Location.show(locations.Chp04_Library_Interior);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);   

    await ƒS.Speech.tell(characters.maincharacter, "In der Bücherei ist es ganz still. Du schaust dich um und gehst zielstrebig zu der etwas versteckten Ecke, in dem die uralten Bücher stehen.");

    await ƒS.Location.show(locations.Chp04_Library_Bookshelf);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);  

    await ƒS.Speech.tell(characters.maincharacter, "Dein Blick schweift über die aneinandergereihten Buchrücken. Bei manchen sind die Titel so alt, dass du sie kaum noch entziffern kannst. Welches ziehst du dir heraus?");

    let Chp04ResearchLibraryElementAnswers = {
            iSayOption1: "Die Leys--gegend und ihre m-gischen Eigen–aften",
            iSayOption2: "W-ld und Wiese – eine –stische Analyse",
            iSayOption3: "Das in–fizielle Mag–kum der Leysenwäl–",
        };
    
     let Chp04ResearchLibraryElement = await ƒS.Menu.getInput(Chp04ResearchLibraryElementAnswers, "choicesCSSclass");

        // *** RESPONSES ***
    switch (Chp04ResearchLibraryElement) {
      case Chp04ResearchLibraryElementAnswers.iSayOption1:
        await ƒS.Speech.tell(characters.maincharacter, "Das heißt wohl die Leysengegend, deine Heimat. Und das nächste vielleicht: magische Eigenschaften? Du probierst es damit.");
        ƒS.Speech.clear();
        break;
      
      case Chp04ResearchLibraryElementAnswers.iSayOption2:
        await ƒS.Speech.tell(characters.maincharacter, "Wald und Wiese, ganz klar. Aber welche Analyse? Du ziehst es heraus und hoffst, dass es für ‘mystisch’ steht.");
        ƒS.Speech.clear();
        break;
      
       case Chp04ResearchLibraryElementAnswers.iSayOption3:
        await ƒS.Speech.tell(characters.maincharacter, "Inoffiziell? Für inoffizielle Informationen hast du eigentlich keine Zeit. Aber ‘Mag-kum’ könnte Magikum bedeuten! Und das klingt vielversprechend. Du probierst es mal.");
        ƒS.Speech.clear();
        break;
    }   

    await ƒS.Location.show(locations.Chp04_Bookshelf_Book);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Du blätterst durch und seufzt. Die Seiten sind beinahe unlesbar. Manche fallen sogar auseinander. Damit hattest du gerechnet. Doch halt – hier hinten, da ist eine Ecke eingeknickt. Du streichst die Seite glatt und kneifst die Augen zusammen. Du kannst gerade so einen gezeichneten Baum und etwas Text daneben erkennen.");
    await ƒS.Speech.tell(characters.maincharacter, '"In … tiefen Wald … Baum der Wünsche. …, werden Wünsche … Beweisen … sonst verbannt."');

    await ƒS.Speech.tell(characters.maincharacter, "Steht da Baum der Wünsche? Ein Baum, der sich in den Tiefen des Waldes verbirgt? Mehr kannst du aber auf der Seite nicht erkennen. Du klappst das Buch zu. Staub wirbelt auf und verteilt sich in alle Richtungen. Bevor er sich gelegt hat, bist du schon weg. Endlich eine Spur!");

    return "04_00_Research Options";
  }
}
