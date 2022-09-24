namespace Spiegel_VN {
  export async function Chp02_021_TestMirrorE(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Speech.tell(characters.maincharacter, '"Komm’, Evarius, testen wir das neue Ding!"');
        ƒS.Character.hide(characters.Kailani);
        ƒS.Character.hide(characters.Evarius);
        await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos2_laugh, ƒS.positionPercent(45, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Evarius, '"Auja!"');
        await ƒS.Speech.tell(characters.maincharacter, "Er packt den Spiegel und hebt ihn sich vors Gesicht.");
        await ƒS.Speech.tell(characters.maincharacter, '"Vorsicht, Evarius! Der ist Muttis und war teuer. Also, wie ging der Spruch nochmal?"');
        ƒS.Speech.clear();
        break;
    

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
    
    if (dataForSave.pickedChp02_TestWithKailani) {
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
          await ƒS.Location(locations.chp02)
          await ƒS.Speech.tell(characters.maincharacter, '"Das war’s! Probier’ den Spruch mal."');
      }
    }
  }
  }
