namespace Spiegel_VN {
  export async function Chp01_01_IntroMarketplace(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_01_IntroMarketplace);
    await ƒS.Sound.fade(soundeffects.cracklingfire, 0, 0, false);

    await ƒS.Sound.fade(music.theme_ordinaryworld, 0.5, 1, true);


    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    // ***BEGINN SZENE***
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_34_neutral, ƒS.positionPercent(70, 115));
    ƒS.update();

    let randomTextChp01Marketplace = ƒ.Random.default.getRangeFloored(1, 5);
    switch (randomTextChp01Marketplace) {
      case 1:
        await ƒS.Speech.tell(
          characters.Mama.name,
          '"Hör auf zu träumen und komm’. Wir haben noch einiges vor dem Essen zu erledigen."'
        );
        break;

      case 2:
        await ƒS.Speech.tell(
          characters.Mama.name,
          '"Da bist du ja! Bleibe nah bei mir, okay? Heute ist was los …"'
        );
        break;

      case 3:
        await ƒS.Speech.tell(
          characters.Mama.name,
          '"Erinnerst du mich daran, dass wir nachher Salat und Zucker holen?"'
        );
        break;

      case 4:
        await ƒS.Speech.tell(
          characters.Mama.name,
          '"Letzte Woche haben wir doch Kartoffeln vergessen, da war Mutti ziemlich böse …"'
        );
        break;

      case 5:
        await ƒS.Speech.tell(
          characters.Mama.name,
          '"Ich renn’ schon den ganzen Tag Kailani und Evarius hinterher, die machen mich wahnsinnig!"'
        );
        break;

      default:
        await ƒS.Speech.tell(
          characters.Mama.name,
          '"Kommst du?"'
        );
        break;
    }

    // *** SCENE OPTIONS ***
    let Chp01PickSceneElementAnswers = {
      PickSceneConvoMother: "Rede mit Mama.",
      PickSceneMirrorMerchant: "Was glitzert so da hinten?",
      PickSceneExploreFlowerMerchant: "(Erkunden) Was gibt es Neues beim Blumenhändler?",
      PickSceneExploreLeatherMerchant: "(Erkunden) Was gibt es Neues beim Lederhändler?",
      PickSceneContinue: "Weiter"
    };

    if (
      !dataForSave.pickedChp01_ConvoMother ||
      !dataForSave.pickedChp01_MirrorMerchant
    ) {
      delete Chp01PickSceneElementAnswers.PickSceneContinue;
    }

    if (dataForSave.pickedChp01_ConvoMother) {
      delete Chp01PickSceneElementAnswers.PickSceneConvoMother;
    }
    if (dataForSave.pickedChp01_MirrorMerchant) {
      delete Chp01PickSceneElementAnswers.PickSceneMirrorMerchant;
    }

    let Chp01SceneElement = await ƒS.Menu.getInput(
      Chp01PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp01SceneElement) {
      case Chp01PickSceneElementAnswers.PickSceneConvoMother:
        await ƒS.Speech.tell(characters.maincharacter.name, '"Warte kurz, Mama!"');
        ƒS.Speech.clear();
        return "01_02 Conversation Mama";
        break;

      case Chp01PickSceneElementAnswers.PickSceneMirrorMerchant:
        await ƒS.Speech.tell(characters.maincharacter.name, '"Ich schau´ mir noch schnell etwas an!"');
        ƒS.Speech.clear();
        ƒS.Character.hide(characters.Mama);
        return "01_03 MirrorMerchant";
        break;

      case Chp01PickSceneElementAnswers.PickSceneExploreFlowerMerchant:
        await ƒS.Speech.tell(characters.maincharacter, 'Mal schauen, was der Blumenhändler so im Angebot hat.');
        ƒS.Character.hide(characters.Mama);
        ƒS.Speech.clear();
        return "01_E_FlowerMerchant";
        break;

      case Chp01PickSceneElementAnswers.PickSceneExploreLeatherMerchant:
        await ƒS.Speech.tell(characters.maincharacter, 'Da wollte ich schon lange mal vorbei.');
        ƒS.Character.hide(characters.Mama);
        ƒS.Speech.clear();
        return "01_E_LeatherMerchant";
        break;

      case Chp01PickSceneElementAnswers.PickSceneContinue:
        await ƒS.Speech.tell(characters.Mama, '"Okay, gehen wir weiter."');
        ƒS.Character.hide(characters.Mama);
        ƒS.Speech.clear();
        return "01_CS PerchaseMirror";
        break;
    }
  }
}
