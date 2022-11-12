namespace Spiegel_VN {
  export async function Chp01_E_FlowerMerchant(): ƒS.SceneReturn {
    //   await ƒS.Location.show(locations.black);
    await ƒS.Location.show(locations.Chp01_E_FlowerMerchant);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    let randomTextChp01FlowerMerchant = ƒ.Random.default.getRangeFloored(1, 4); //gerundet
    switch (randomTextChp01FlowerMerchant) {
      case 1:
        await ƒS.Speech.tell(characters.maincharacter, 'Du schnupperst an den Blüten und merkst, wie sehr du dich auf den Frühling freust.');
        break;

      case 2:
        await ƒS.Speech.tell(characters.flowerMerchant, '"Kann ich dir helfen?"');
        break;

      case 3:
        await ƒS.Speech.tell(characters.flowerMerchant, '"Die Margeriten hier verschönern das Zuhause gerade vorzüglich!"');
        break;

      case 4:
        await ƒS.Speech.tell(characters.flowerMerchant, '"Du siehst aus, als könntest du etwas Verschönerung zuhause gebrauchen!"');
        break;

      default:
        await ƒS.Speech.tell(characters.flowerMerchant, '"Willkommen!"');
        break;
    }

    // *** DIALOGUE OPTIONS ***
    let chp01FlowerMerchantDialogueElementAnswers = {
      iSayAskAboutTrip: "(Erkunden) Nach Reise fragen",
      iSayAskAboutFlowers: "(Erkunden) Nach Blumen fragen",
      iSayBuyFlowers: "(Erkunden) Blumen kaufen",
      iSayLeave: '"Auf Wiedersehen!"'
    };

    if (!dataForSave.pickedChp01_ConvoMother) {
      delete chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers;
    }

    let chp01FlowerMerchantDialogueElement = await ƒS.Menu.getInput(
      chp01FlowerMerchantDialogueElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (chp01FlowerMerchantDialogueElement) {
      case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip:
        await ƒS.Speech.tell(characters.flowerMerchant.name, '"Wie war denn die Reise hierher?"');
        await ƒS.Speech.tell(characters.flowerMerchant.name, '"Ich weiß nicht, ob du, mein liebes Kind, davon etwas gehört hast, aber derzeit lauern überall Banditen auf den Königswegen! Einmal wären wir beinahe mitten in eine Bande hineingefahren."');
        await ƒS.Speech.tell(characters.flowerMerchant.name, '"Zum Glück habe ich so ein feines Näschen. Damit konnte ich das Gesindel meilenweit voraus riechen! Schau nicht so zweifelnd, jedes Wort, das ich gesprochen habe, ist wahr, jaja!."');
        ƒS.Speech.clear();
        return "01_E_FlowerMerchant";
        break;

      case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutFlowers:
        await ƒS.Speech.tell(characters.maincharacter.name, '"Haben Sie normalerweise nicht mehr Blumen im Vorrat?"');
        await ƒS.Speech.tell(characters.flowerMerchant.name, '"Ach die Blumen! Dieses Jahr werden sie mir förmlich aus den Händen gerissen. Es scheint so, als würden sich immer mehr Leute meine wunderschönen Kreationen zuhause aufstellen."');
        await ƒS.Speech.tell(characters.flowerMerchant.name, '"Seltsamerweise kaufen die grauesten Mäuse die buntesten Blumen …"');
        ƒS.Speech.clear();
        return "01_E_FlowerMerchant";
        break;

      case chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers:
        await ƒS.Speech.tell(characters.maincharacter.name, '"Ich nehme gerne die Nelken hier, darüber freut sich meine Mutti bestimmt. Gelb ist nämlich ihre Lieblingsfarbe."');
        await ƒS.Speech.tell(characters.flowerMerchant.name, '"Sehr gerne, liebes Kind, ich packe sie dir fest ein. Nicht, dass sie dir auf dem Heimweg etwa verloren gehen!"');
        await ƒS.Speech.tell(characters.maincharacter.name, "Du lächelst den Händler an, bist aber etwas irritiert. Wieso denkt er, du kannst nicht auf die Blumen aufpassen? Du überreichst dem Händler das Geld von Mama, das er sofort in eine Tasche unter den Rock verstaut.");
        ƒS.Speech.clear();
        return "01_E_FlowerMerchant";
        break;

      case chp01FlowerMerchantDialogueElementAnswers.iSayLeave:
        dataForSave.pickedChoice = true;
        await ƒS.Speech.tell(characters.maincharacter, '"Auf Wiedersehen, Blumenhändler!"');
        await ƒS.Speech.tell(characters.flowerMerchant.name, '"Auf Wiedersehen, Kind!"');
        ƒS.Speech.clear();
        return "01_01 Intro Marketplace";
        break;
    }
  }
}
