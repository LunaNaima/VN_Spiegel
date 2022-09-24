namespace Spiegel_VN {
  export async function Chp02_021_TestMirrorK(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    
    await ƒS.Speech.tell(characters.maincharacter, '"Komm’, Kailani, testen wir das neue Ding!"');
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit2_dress1_happy, ƒS.positionPercent(45, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Kailani, '"Auja!"');
    await ƒS.Speech.tell(characters.maincharacter, "Sie packt den Spiegel und hebt ihn sich vors Gesicht.");
    await ƒS.Speech.tell(characters.maincharacter, '"Vorsicht, Kailani! Der ist Muttis und war teuer. Also, wie ging der Spruch nochmal?"');
   

    do {
      let Chp02TestMirrorElementAnswersOptions2 = {
        iSayAnswer1: "Spieglein, Spieglein, zeige mir das Träumelein.",
        iSayAnswer2: "Spieglein, Spieglein, weise mir das Wünschlein",
        iSayAnswer3: "Spieglein, Spieglein, weise mir das Träumlein",
      };

      let Chp02TestMirrorElementOptions = await ƒS.Menu.getInput(Chp02TestMirrorElementAnswersOptions2, "choicesCSSclass"
      );
      switch (Chp02TestMirrorElementOptions) {
        case Chp02TestMirrorElementAnswersOptions2.iSayAnswer1:
          await ƒS.Speech.tell(characters.maincharacter, '"Ich glaube, es war etwas anderes!"');
          ƒS.Speech.clear();
          break;
            
        case Chp02TestMirrorElementAnswersOptions2.iSayAnswer2:
          await ƒS.Speech.tell(characters.maincharacter, '"Nicht ganz … Wie hat sich der Spiegelhändler nochmal ausgedrückt?"');
          ƒS.Speech.clear();
          break;
            
        case Chp02TestMirrorElementAnswersOptions2.iSayAnswer3:
          dataForSave.pickedRightChoiceMirror = true;
          await ƒS.Speech.tell(characters.maincharacter, '"Das war’s! Probier’ den Spruch mal."');
          ƒS.Speech.clear();
          break;
      }
    }
    while (!dataForSave.pickedRightChoiceMirror);

    await ƒS.Speech.tell(characters.maincharacter, '"Was wünschen wir uns denn nun?"');
    
    let Chp02TestMirrorScenesOptions = {
      iSayAnswer1: "Strand.",
      iSayAnswer2: "Bergsee",
      iSayAnswer3: "Palmen",
      iSayAnswer4: "Fliegen",
      iSayAnswer5: "Tauchen",
    };

    let Chp02TestMirrorScenes = await ƒS.Menu.getInput(Chp02TestMirrorScenesOptions, "choicesCSSclass"
    );
    switch (Chp02TestMirrorScenes) {
      case Chp02TestMirrorScenesOptions.iSayAnswer1:
        await ƒS.Location.show(locations.Chp02_TestSceneFBeach)
        await ƒS.Speech.tell(characters.Kailani, '"Schau mal, wie schön meine Haare glänzen!"');

        case Chp02TestMirrorScenesOptions.iSayAnswer2:
        await ƒS.Location.show(locations.Chp02_TestSceneFWater)
        await ƒS.Speech.tell(characters.Kailani, '"Ach, was für ein tolles Kleid."');

        case Chp02TestMirrorScenesOptions.iSayAnswer3:
        await ƒS.Location.show(locations.Chp02_TestSceneFTrees)
        await ƒS.Speech.tell(characters.Kailani, '"Das sind aber tolle Farben, findest du nicht auch?"');

        case Chp02TestMirrorScenesOptions.iSayAnswer4:
        await ƒS.Location.show(locations.Chp02_TestSceneFFly)
        await ƒS.Speech.tell(characters.Kailani, '"Juchu! Ich wollte schon immer mal fliegen."');

        case Chp02TestMirrorScenesOptions.iSayAnswer5:
        await ƒS.Location.show(locations.Chp02_TestSceneFCoral)
        await ƒS.Speech.tell(characters.Kailani, '"Ich war noch nie so weit unter Wasser, wie aufregend!"');
    }
    await ƒS.Location.show(locations.Chp02_02_LivingRoom)

    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_angry, ƒS.positionPercent(80, 100));
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit2_dress1_shrug, ƒS.positionPercent(45, 100));
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_smirk, ƒS.positionPercent(55, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mutti, '"‘So, jetzt ab auf eure Zimmer! Versucht bitte, so früh wie möglich schlafen zu gehen. Ich weiß, es graut euch schon davor, aber nächste Woche geht die Schule wieder los."');
    await ƒS.Speech.tell(characters.Mama, '"Also nicht wieder die ganze Nacht wachbleiben! Evarius, dich meine ich. Gute Nacht"');

    await ƒS.Location.show(locations.Chp02_E_DiscoverBedroom)
    ƒS.update();
    
  }
}