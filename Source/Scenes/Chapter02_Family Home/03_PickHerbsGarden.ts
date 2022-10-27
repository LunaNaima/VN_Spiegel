namespace Spiegel_VN {
  export async function Chp02_03_PickHerbs(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_03_PickHerbs);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    dataForSave.pickedChp02_PickHerbsGarden = true;

    await ƒS.Speech.tell(characters.maincharacter, "Drinnen wird es gerade laut, wie immer um die Essenszeit. Deshalb schlüpfst du schnell in den Garten.");
    await ƒS.Speech.tell(characters.maincharacter, "Du kramst in deiner Hosentasche und findest ein paar übrig gebliebene Sonnenblumenkerne vom Hühnerfüttern gestern. Streust du sie über den Boden oder behältst du sie in der Tasche?");

    let Chp02ElementAnswersPickHerbs = {
      iSaySprinkle: "Streuen",
      iSayKeep: "Behalten",
    };
    
    let Chp02Element = await ƒS.Menu.getInput(
      Chp02ElementAnswersPickHerbs,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02Element) {
      case Chp02ElementAnswersPickHerbs.iSaySprinkle:
        await ƒS.Speech.tell(characters.maincharacter, "Du streust sie über den Boden und freust dich schon auf den kleinen Sonnenblumenwald, der bald entsteht.");
        ƒS.Speech.clear();
        // return "02_03 Pick Herbs";
        break;
          
      case Chp02ElementAnswersPickHerbs.iSayKeep:
        dataForSave.pickedSeeds = true;
        await ƒS.Speech.tell(characters.maincharacter, "Du steckst die Samen wieder in die Tasche. Wer weiß, ob du sie noch für etwas gebrauchen kannst.");
        ƒS.Speech.clear();
        // return "02_03 Pick Herbs";
        break;
    }

        await ƒS.Speech.tell(characters.maincharacter, "Die Kräuter sehen für die Jahreszeit schon gut aus. Du bückst dich, um ein paar Basilikumblätter abzuzupfen, als du eine Tür knallen hörst.");
        await ƒS.Location.show(locations.Chp02_04_FightNeighborNeighbors);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        
        await ƒS.Speech.tell("Nachbar", '"Henri! Henri, bleib’ doch hier!"');
        await ƒS.Speech.tell("Nachbarin", '"Mir reichts, Balduin! Den ganzen Tag starrst du schon auf das Ding!"');
        await ƒS.Speech.tell(characters.maincharacter, "Ach, die Nachbarn streiten schon wieder.");

        await ƒS.Speech.tell("Nachbar", '"Es tut mir ja leid! Aber Henri, der Spiegel ist doch so schön."');
        await ƒS.Speech.tell(characters.maincharacter, "Der Spiegel? Redet Balduin etwa von dem magischen Spiegel, den es heute auf dem Markt zu kaufen gab?");
        await ƒS.Speech.tell("Nachbarin", '"Ja, der ist schön. Das ist doch das Problem. Seit heute Morgen sitzt du davor und tust nichts anderes, als den schönen Spiegel anzustarren."');
        await ƒS.Speech.tell("Nachbarin", '"Was ist mit dem Holz? Der Karren sollte repariert werden? Und das Essen gekocht? Das waren heute alles deine Aufgaben!"');
        await ƒS.Speech.tell("Nachbar", '"Henri, ich weiß, tut mir leid! Hör mir doch zu. Ich tu ihn schon weg! Bitte, komm herein. Die Nachbarn schauen doch schon."');
        await ƒS.Speech.tell(characters.maincharacter, "Nanu, was war denn da los? Balduin kann sich von dem Spiegel nicht losreißen? Sah er auch anders aus als sonst? Vielleicht frage ich Mutti, ob er krank ist. Sie wartet bestimmt schon lange auf die Kräuter, ups.");

        let Chp02PickHerbsAnswersContinue = {
          iSayContinue: "Zurück ins Wohnzimmer",
        };
    
        let Chp02PickHerbsContinue = await ƒS.Menu.getInput(
          Chp02PickHerbsAnswersContinue,
          "choicesCSSclass"
        );

        switch (Chp02PickHerbsContinue) {
          case Chp02PickHerbsAnswersContinue.iSayContinue:
            return "02_00 Arrival Home";
            break;
      
        }
    }
  }

