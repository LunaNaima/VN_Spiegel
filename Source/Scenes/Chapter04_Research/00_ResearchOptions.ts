namespace Spiegel_VN {
    export async function Chp04_00_ResearchOptions(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.Chp02_02_LivingRoom);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        // ** RANDOM TEXT ***
        let randomTextChp04KailaniMissing = ƒ.Random.default.getRangeFloored(1, 4); //gerundet
        switch (randomTextChp04KailaniMissing) {
            case 1:
                await ƒS.Speech.tell(characters.maincharacter, "Was ist nur passiert?");
                break;

            case 2:
                await ƒS.Speech.tell(characters.maincharacter, "Wo ist Kailani?");
                break;

            case 3:
                await ƒS.Speech.tell(characters.maincharacter, '"Kailani? Wo bist du!"');
                break;

            case 4:
                await ƒS.Speech.tell(characters.maincharacter, "Da ist etwas nicht in Ordnung ...");
                break;

            default:
                await ƒS.Speech.tell(characters.maincharacter, '"Kaili?"');
                break;
        }

        let Chp04PickSceneElementAnswers = {
            PickSceneTalkToFamily: "Mit Mutti sprechen",
            PickSceneResearchLibrary: "Zur Bücherei",
            PickSceneExamineMirror: "Nochmal in Kailanis Schlafzimmer",
            PickSceneContinue: "Weiter",
        };

        if (
            !dataForSave.pickedChp04TalkToFamily ||
            !dataForSave.pickedChp04ResearchLibrary ||
            !dataForSave.pickedChp04ExamineMirror
        ) {
            delete Chp04PickSceneElementAnswers.PickSceneContinue;
        }
        if (dataForSave.pickedChp04TalkToFamily) {
      delete Chp04PickSceneElementAnswers.PickSceneTalkToFamily;
    }
    if (dataForSave.pickedChp04ResearchLibrary) {
      delete Chp04PickSceneElementAnswers.PickSceneResearchLibrary;
        }
        if (dataForSave.pickedChp04ExamineMirror) {
      delete Chp04PickSceneElementAnswers.PickSceneExamineMirror;
    }

        let Chp04PickSceneElement = await ƒS.Menu.getInput(Chp04PickSceneElementAnswers, "choicesCSSclass");

        // *** RESPONSES ***
        switch (Chp04PickSceneElement) {
            case Chp04PickSceneElementAnswers.PickSceneTalkToFamily:
                await ƒS.Speech.tell(characters.maincharacter, '"Hallo? Könnt ihr alle mal herkommen?"');
                ƒS.Speech.clear();
                return "04_01 Talk with family";
                break;

            case Chp04PickSceneElementAnswers.PickSceneResearchLibrary:
                await ƒS.Speech.tell(characters.maincharacter, "Die alten Bücher in der Bücherei!");
                ƒS.Speech.clear();
                return "04_03 Research library";
                break;

            case Chp04PickSceneElementAnswers.PickSceneExamineMirror:
                await ƒS.Speech.tell(characters.maincharacter, "Ich muss mir nochmal den Spiegel anschauen.");
                ƒS.Speech.clear();
                return "04_E_Examine mirror";
                break;

            case Chp04PickSceneElementAnswers.PickSceneContinue:
                await ƒS.Speech.tell(characters.maincharacter, "Nun gut, ab in den Wald ...");
                ƒS.Speech.clear();
                return "04_CS Entry forest";
                break;
        }
    }
}