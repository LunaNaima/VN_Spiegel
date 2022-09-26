namespace Spiegel_VN {
  export async function Chp08_ArrivalOtherSide(): ƒS.SceneReturn {
    ƒS.Sound.fade(music.theme_mirrorworld_whary, 0, 0, false);
    ƒS.Sound.fade(music.theme_mirrorworld_factory, 0.8, 1, true);
    ƒS.update();

    // ** RANDOM TEXT ***
    let randomTextChp08ArrivalOtherSide = ƒ.Random.default.getRangeFloored(1,3);
    switch (randomTextChp08ArrivalOtherSide) {
      case 1:
        await ƒS.Speech.tell(characters.Flynn, '"Sollen wir los?"');
        break;

      case 2:
        await ƒS.Speech.tell(characters.Flynn, '"Schau mal, am Turm bewegt sich was …"');
        break;

      case 3:
        await ƒS.Speech.tell(characters.Flynn, '"Jetzt trödle nicht so!"');
        break;

      default:
        await ƒS.Speech.tell(characters.maincharacter, "Du hast ein mulmiges Gefühl im Bauch.");
        break;
    }

    let Chp08ArrivalOtherSideElementAnswers = {
      iSayDiscoverTower: "(Erkunden) Turm anschauen",
      iSaySearchForHidingPlace: "Nach Versteck suchen",
    };

    let Chp08ArrivalOtherSideElement = await ƒS.Menu.getInput(Chp08ArrivalOtherSideElementAnswers,"choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp08ArrivalOtherSideElement) {
      case Chp08ArrivalOtherSideElementAnswers.iSayDiscoverTower:
        await ƒS.Speech.tell(characters.maincharacter, "Du beugst den Kopf in den Nacken und starrst hinauf zur Spitze. Der Turm ist deutlich höher als alle anderen Gebäude in diesem Dorf. Das orange ist beinahe unheimlich grell, im Vergleich zu den farblosen Häusern. Wozu ist dieser Turm? Du verspürst ein mulmiges Gefühl im Bauch.");
        ƒS.Speech.clear();
        return "08_Arrival other side"; 
        break;

      case Chp08ArrivalOtherSideElementAnswers.iSaySearchForHidingPlace:
        await ƒS.Speech.tell(characters.maincharacter, '"Gut, suchen wir nach etwas, wo wir bleiben können. Einen so schönen Gasthof wie in Whary wird es wohl nicht geben!"');
        ƒS.Speech.clear();
        return "08_Search hiding place"; 
        break;

    }
  }
}
