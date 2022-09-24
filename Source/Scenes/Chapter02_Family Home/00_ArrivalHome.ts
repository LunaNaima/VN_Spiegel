namespace Spiegel_VN {
    export async function Chp02_00_ArrivalHome(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.Chp02_02_LivingRoom);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        // ** RANDOM TEXT ***
        let randomTextChp02FamilyHome = ƒ.Random.default.getRangeFloored(1, 4); //gerundet
        switch (randomTextChp02FamilyHome) {
            case 1:
                await ƒS.Speech.tell(characters.maincharacter, "Zuhause ist es einfach so gemütlich.");
                break;

            case 2:
                await ƒS.Speech.tell(characters.maincharacter, '"Was gibt es denn zu essen?"');
                break;

            case 3:
                await ƒS.Speech.tell(characters.maincharacter, '"Wie das duftet!"');
                break;

            case 4:
                await ƒS.Speech.tell(characters.maincharacter, '"Du überlegst, wann du hoch in dein Zimmer kannst."');
                break;

            default:
                await ƒS.Speech.tell(characters.maincharacter, '"Endlich daheim"');
                break;
        }

        let Chp02PickSceneElementAnswers = {
            PickScenePickHerbs: "Kräuter pflücken",
            PickSceneKitchen: "Einkäufe wegbringen",
            PickSceneDiscoverBedroom: "(Erkunden) Mein Schlafzimmer anschauen", 
            PickSceneContinue: "Weiter",
        };
        
// doesnt work yet
        if (
            !dataForSave.pickedChp02_PickHerbsGarden ||
            !dataForSave.pickedChp02_Kitchen
        ) {
            delete Chp02PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }

        if (dataForSave.pickedChp02_PickHerbsGarden) {
      delete Chp02PickSceneElementAnswers.PickScenePickHerbs;
    }
    if (dataForSave.pickedChp02_Kitchen) {
      delete Chp02PickSceneElementAnswers.PickSceneKitchen;
    }

        let Chp01PickSceneElement = await ƒS.Menu.getInput(
            Chp02PickSceneElementAnswers,
            "choicesCSSclass"
        );

        // *** RESPONSES ***
        switch (Chp01PickSceneElement) {
            case Chp02PickSceneElementAnswers.PickScenePickHerbs:
                await ƒS.Speech.tell(characters.maincharacter, "Ich geh' kurz die Kräuter holen, Mutti!");
                ƒS.Speech.clear();
                return "02_03 Pick Herbs";
                break;
            
            case Chp02PickSceneElementAnswers.PickSceneKitchen:
                // continue path here
                await ƒS.Speech.tell(characters.maincharacter, "Zuerst schnell die Einkäufe wegbringen.");
                ƒS.Speech.clear();
                return "02_Kitchen";
                break;

            case Chp02PickSceneElementAnswers.PickSceneDiscoverBedroom:
                // continue path here
                await ƒS.Speech.tell(characters.maincharacter, "");
                ƒS.Speech.clear();
                return "02_E Discover bedroom";
                break;

            
            case Chp02PickSceneElementAnswers.PickSceneContinue:
                await ƒS.Speech.tell(characters.maincharacter, "Jetzt gibt's Essen!");
                ƒS.Speech.clear();
                return "02_01 Dinner at home";
                break;
        }
    }
}