namespace Spiegel_VN {
  export async function Chp02_021_TestMirrorE(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_neutral, ƒS.positionPercent(45, 100));
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Speech.tell(characters.maincharacter, '"Komm’, Evarius, testen wir das neue Ding!"');
        ƒS.Character.hide(characters.Evarius);
        await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos2_laugh, ƒS.positionPercent(45, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Evarius, '"Auja!"');
    await ƒS.Speech.tell(characters.maincharacter, "Er packt den Spiegel und hebt ihn sich vors Gesicht.");

    ƒS.Character.hide(characters.Evarius);
        await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.profile_neutral, ƒS.positionPercent(45, 100));
    ƒS.update();
    
        await ƒS.Speech.tell(characters.maincharacter, '"Vorsicht, Evarius! Der ist Muttis und war teuer. Also, wie ging der Spruch nochmal?"');
        ƒS.Speech.clear();
    

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
    ƒS.Character.hideAll();
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
        await ƒS.Location.show(locations.Chp02_TestSceneMBeach)
          await ƒS.Speech.tell(characters.Evarius, '"Schau mal, wie stark ich aussehe!"');
           break;
          
          case Chp02TestMirrorScenesOptions.iSayAnswer2:
        await ƒS.Location.show(locations.Chp02_TestSceneMWater)
          await ƒS.Speech.tell(characters.Evarius, '"Mit dem Schwert bin ich ein richtiger Prinz"');
          break;
        
        case Chp02TestMirrorScenesOptions.iSayAnswer3:
        await ƒS.Location.show(locations.Chp02_TestSceneMTrees)
          await ƒS.Speech.tell(characters.maincharacter, '"Das sind aber tolle Farben, findest du nicht auch?"');
          break;
        
        case Chp02TestMirrorScenesOptions.iSayAnswer4:
        await ƒS.Location.show(locations.Chp02_TestSceneMFly)
          await ƒS.Speech.tell(characters.maincharacter, '"Ich wollte schon immer mal fliegen! Wie Superman!"');
          break;
        
        case Chp02TestMirrorScenesOptions.iSayAnswer5:
        await ƒS.Location.show(locations.Chp02_TestSceneMCoral)
          await ƒS.Speech.tell(characters.maincharacter, '"Schau mal, wie stark ich aussehe!"');
           break;
      }
    }
    await ƒS.Location.show(locations.Chp02_02_LivingRoom)

    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_angry, ƒS.positionPercent(80, 100));
    await ƒS.Character.show(characters.Kailani, characters.Evarius.pose.pos2_smile, ƒS.positionPercent(45, 100));
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_smirk, ƒS.positionPercent(55, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mutti, '"So, jetzt ab auf eure Zimmer! Versucht bitte, so früh wie möglich schlafen zu gehen. Ich weiß, es graut euch schon davor, aber nächste Woche geht die Schule wieder los."');
    await ƒS.Speech.tell(characters.Mama, '"Also nicht wieder die ganze Nacht wachbleiben! Evarius, dich meine ich. Gute Nacht"');

    await ƒS.Location.show(locations.Chp02_E_DiscoverBedroom)
    ƒS.update();
  }
  }
