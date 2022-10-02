namespace Spiegel_VN {
  export async function Chp03_00_NewDay(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Location.show(locations.Chp02_02_LivingRoom)
    ƒS.Character.hideAll();
    await ƒS.update();
      
      // ** RANDOM TEXT ***
    let randomTextChp03NewDay = ƒ.Random.default.getRangeFloored(1, 4);
    switch (randomTextChp03NewDay) {
      case 1:
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_smile, ƒS.positionPercent(55, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mutti, "Hallo, Schatz!");
        ƒS.Character.hideAll();
        break;

      case 2:
        await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_smile, ƒS.positionPercent(55, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mutti, '"Denkst du an deine Aufgaben?"');
        ƒS.Character.hideAll();
        break;

      case 3:
        await ƒS.Speech.tell(characters.maincharacter, "Schule ging so ewig ...");
        break;

      case 4:
        await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_smile, ƒS.positionPercent(55, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Ich hab' noch so viel zu erledigen!");
        break;

      default:
        await ƒS.Speech.tell(characters.maincharacter, "Endlich Wochenende.");
        break;
    }

    let Chp03PickSceneElementAnswers = {
      // PickSceneDressmaker: "Jacken abholen",
      PickSceneChoresWithKailani: "Mit Kailani Hausarbeiten machen",
      PickSceneDiscoverForest: "(Erkunden) Im Wald rumgucken",
      PickSceneDiscoverLibrary: "(Erkunden) Die Bücherei erkunden",
      PickSceneContinue: "Weiter",
    };

    if (
      // !dataForSave.pickedChp03_Dressmaker ||
      !dataForSave.pickedChp03_ChoresWithKailani
    ) {
      delete Chp03PickSceneElementAnswers.PickSceneContinue;
    }

    // if (dataForSave.pickedChp03_Dressmaker) {
    //   delete Chp03PickSceneElementAnswers.PickSceneDressmaker;
    // }
    if (dataForSave.pickedChp03_ChoresWithKailani) {
      delete Chp03PickSceneElementAnswers.PickSceneChoresWithKailani;
    }

    let Chp03PickSceneElement = await ƒS.Menu.getInput(
      Chp03PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp03PickSceneElement) {
      // case Chp03PickSceneElementAnswers.PickSceneDressmaker:
      //   await ƒS.Speech.tell(characters.maincharacter, '"Gut, dann geh` ich mal zum Schneider!"');
      //   ƒS.Speech.clear();
      //   return "03_01 Dressmaker"; 
      //   break;

      case Chp03PickSceneElementAnswers.PickSceneChoresWithKailani:
        await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_shrug_eyeroll, ƒS.positionPercent(45, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, '"Komm Kailani, gehen wir!"');
        ƒS.Speech.clear();
        ƒS.Character.hideAll();
        return "03_021 Chores with Kailani";
        break;

      case Chp03PickSceneElementAnswers.PickSceneDiscoverForest:
        await ƒS.Speech.tell("", "");
        ƒS.Speech.clear();
        return "03_E Discover Forest";
        break;

      case Chp03PickSceneElementAnswers.PickSceneDiscoverLibrary:
        await ƒS.Speech.tell("", "");
        ƒS.Speech.clear();
        return "03_E Discover Library";
        break;

      case Chp03PickSceneElementAnswers.PickSceneContinue:
        await ƒS.Speech.tell("","");
        ƒS.Speech.clear();
        return "03_CS Kailani is missing";
        break;
    }
  }
}
