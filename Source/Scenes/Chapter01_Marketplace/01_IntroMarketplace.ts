namespace Spiegel_VN {
  export async function Chp01_01_IntroMarketplace(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
    ƒS.Sound.fade(music.theme_ordinaryworld, 0.8, 0.1, true);

    // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );
    
    // ***TEST-INVENTORY***
    // ƒS.Inventory.add(inventory.apple);
    // await ƒS.Inventory.open;
    //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene

    // ***TEST-DIALOGE***
    // console.log(characters.monologue.name); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser. Am ende der Sache kann ich den Namen der jeweiligen Szene eingeben, is nur für mich & für Prof
    // await ƒS.Speech.tell("Bab", "Hallo, ich bin Bab."); //fs = ich greife auf die library zu, was jmdn anders schon für die library programmiert hat.
    // await ƒS.Speech.tell("Xenoi", "Hallo, ich bin Xeni.");

    // await ƒS.Speech.tell(
    //   characters.maincharacter.name,
    //   "Hallo, ich bin Dein Name."
    // );

    // ***BEGINN SZENE***
    await ƒS.Character.show(characters.Mama,characters.Mama.pose.dress_34_neutral, ƒS.positionPercent(70,115));
    ƒS.update();

    let randomTextChp01Marketplace = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
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

    // await ƒS.Speech.tell(
    //   characters.maincharacter.name,
    //   dlg_scn_01.maincharacter.T0000
    // );
    // await ƒS.Speech.tell(characters.Mama.name, dlg_scn_01.Mama.T0000);

    // await ƒS.update(
    //   transition.puzzle.duration,
    //   transition.puzzle.alpha,
    //   transition.puzzle.edge //edge ist der Härtegrad
    // );

    // await ƒS.Character.show(
    //   characters.Mama,
    //   characters.Mama.pose.angry, // pose muss in der main sein
    //   ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
    //   // ƒS.positionPercent(70,100)
    // );

    // *** SCENE OPTIONS ***
    let Chp01PickSceneElementAnswers = {
      PickSceneConvoMother: "Rede mit Mama.",
      PickSceneMirrorMerchant: "Was glitzert so da hinten?",
      PickSceneExploreFlowerMerchant:
        "(Erkunden) Was gibt es Neues beim Blumenhändler?",
      PickSceneExploreLeatherMerchant:
        "(Erkunden) Was gibt es Neues beim Lederhändler?",
      PickSceneContinue: "Weiter",
    };
    console.log("boolean Mama gesprochen: ");
    console.log(dataForSave.pickedChp01_ConvoMother);

    console.log("boolean Mirrormerhant besucht: ");
    console.log(dataForSave.pickedChp01_MirrorMerchant);

    if (
      !dataForSave.pickedChp01_ConvoMother || 
      !dataForSave.pickedChp01_MirrorMerchant
    ) {
      delete Chp01PickSceneElementAnswers.PickSceneContinue;
      // return Chp01_CS_ArrivalHome();
    }

    // let pickediSayTalkToMama: boolean;
    // let pickediSayTalkToMirrorMerchant: boolean;

    // do {
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
        await ƒS.Speech.tell(characters.maincharacter.name,'"Warte kurz, Mama!"');
        // dataForSave.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "01_02 Conversation Mama";
        break;

      case Chp01PickSceneElementAnswers.PickSceneMirrorMerchant:
        await ƒS.Speech.tell(characters.maincharacter.name,'"Ich schau mir noch schnell etwas an!"');
        ƒS.Speech.clear();
        ƒS.Character.hide(characters.Mama);
        return "01_03 MirrorMerchant";
        break;

      case Chp01PickSceneElementAnswers.PickSceneExploreFlowerMerchant:
        await ƒS.Speech.tell(characters.maincharacter, 'Mal schauen, was der Blumenhändler so im Angebot hat');
        ƒS.Character.hide(characters.Mama);
        ƒS.Speech.clear();
        return "01_E_FlowerMerchant";
        break;

      case Chp01PickSceneElementAnswers.PickSceneExploreLeatherMerchant:
        await ƒS.Speech.tell(characters.Mama, 'Da wollte ich schon lange mal vorbei.');
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
    // } while (dataForSave.pickedChoice);
  }
}
