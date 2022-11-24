namespace Spiegel_VN {
  export async function Chp01_E_LeatherMerchant(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_E_LeatherMerchant);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    let randomTextChp01LeatherMerchant = ƒ.Random.default.getRangeFloored(1, 3);
    switch (randomTextChp01LeatherMerchant) {
      case 1:
        await ƒS.Speech.tell(characters.leatherMerchant, '"Suchst du etwas Bestimmtes?"');
        break;

      case 2:
        await ƒS.Speech.tell(characters.maincharacter, 'Die Felle der Lederhändler sind immer so schön weich.');
        break;

      case 3:
        await ƒS.Speech.tell(characters.leatherMerchant, '"Heute im Angebot: Gelb getönte Schafswolle!"');
        break;

      default:
        await ƒS.Speech.tell(characters.leatherMerchant, '"Willkommen!"');
        break;
    }

    // ***BEGIN DIALOGUE ***

    // *** DIALOGUE OPTIONS ***
    let Chp01LeatherMerchantDialogueElementAnswers = {
      iSayAskAboutTrip: "(Erkunden) Was gibt es denn Neues in der Welt?",
      iSayAskAboutClothes: "(Erkunden) Eure Ware sieht so anders aus...",
      iSayBuyShoeCream: "Schuhcreme kaufen",
      iSayLeave: "'Auf Wiedersehen!'"
    };

    if (!dataForSave.pickedChp01_ConvoMother) {
      delete Chp01LeatherMerchantDialogueElementAnswers.iSayBuyShoeCream;
    }

    let Chp01LeatherMerchantDialogueElement = await ƒS.Menu.getInput(
      Chp01LeatherMerchantDialogueElementAnswers,
      "choicesCSSclass"
    );

    // *** SWITCHCASE DIALOGUE OPTIONS ***
    switch (Chp01LeatherMerchantDialogueElement) {
      case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutTrip:
        await ƒS.Speech.tell(characters.maincharacter, '"Ihr habt auf der Reise hier her bestimmt Interessantes erlebt!"');
        await ƒS.Speech.tell(characters.leatherMerchant, '"Oh, aber wie! Die Leute haben uns mitten auf der Straße angehalten und wollten unsere Ware kaufen. Das ist uns noch nie passiert."');
        await ƒS.Speech.tell(characters.leatherMerchant, '"Etwas ungewöhnlich, das Ganze. Ganz gesund sahen sie nicht aus."');
        ƒS.Speech.clear();
        return Chp01_E_LeatherMerchant();
        break;

      case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutClothes:
        await ƒS.Speech.tell(characters.maincharacter, '"Letztes Jahr hattet Ihr andere Ware dabei, oder?"');
        await ƒS.Speech.tell(characters.leatherMerchant, '"Tatsächlich haben viele nach den neuen Modetönen aus der Hauptstadt gefragt. Normalerweise benötigen wir für das Färben einige Monate, aber die Nachfrage war so stark, dass wir unser Verfahren kurzerhand umstellen mussten."');
        await ƒS.Speech.tell(characters.leatherMerchant, '"Die Farben sind dafür schön satt, halten aber leider nicht lange."');
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "01_E_LeatherMerchant";
        break;

      case Chp01LeatherMerchantDialogueElementAnswers.iSayBuyShoeCream:
        await ƒS.Speech.tell(characters.maincharacter, '"Ich würde gerne diese Schuhcreme für meine Lederstiefel kaufen."');
        await ƒS.Speech.tell(characters.leatherMerchant, '"Die können es wirklich gebrauchen! Das macht 30 Pfennig."');
        await ƒS.Speech.tell(characters.maincharacter, "Du nimmst die Schuhcreme an und lächelst. Du liebst deine alten Schuhe, egal was andere sagen.");
        ƒS.Speech.clear();
        return "01_E_LeatherMerchant";
        break;

      case Chp01LeatherMerchantDialogueElementAnswers.iSayLeave:
        await ƒS.Speech.tell(characters.maincharacter, '"Wiedersehen!"');
        await ƒS.Speech.tell(characters.leatherMerchant, '"Auf bald!"');
        ƒS.Speech.clear();
        return "01_01 Intro Marketplace";
        break;
    }
  }
}
