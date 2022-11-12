namespace Spiegel_VN {
    export async function Chp02_Kitchen(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.Chp02_E_DiscoverKitchen);
        ƒS.Character.hideAll();
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        dataForSave.pickedChp02_Kitchen = true;

        await ƒS.Speech.tell(characters.maincharacter, "Du schleppst die Lebensmittel in die Küche und atmest erstmal tief ein. Es duftet nach Knoblauch und Tomaten. Mutti kann so gut kochen!");

        let Chp02PickSceneElementAnswersKitchen = {
            PickScenePantry: "(Erkunden) In die Speisekammer",
            PickSceneOven: "(Erkunden) Ofen beheizen",
            PickSceneContinue: "Zurück ins Wohnzimmer"
        };

        let Chp02PickSceneElementAnswers = await ƒS.Menu.getInput(Chp02PickSceneElementAnswersKitchen, "choicesCSSclass");

        switch (Chp02PickSceneElementAnswers) {
            case Chp02PickSceneElementAnswersKitchen.PickScenePantry:
                await ƒS.Location.show(locations.Chp02_E_DiscoverKitchenPantry);
                await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
                await ƒS.Speech.tell(characters.maincharacter, "Die trockenen Lebensmittel kannst du alle in die Speisekammer einräumen. Hier ist es immer ziemlich voll, weil Mutti gerne viele Lebensmittel auf Vorrat bunkert. Für alle Notfälle, sagt sie.");
                ƒS.Speech.clear();
                return "02_Kitchen";
                break;

            case Chp02PickSceneElementAnswersKitchen.PickSceneOven:
                await ƒS.Sound.fade(soundeffects.cracklingfire, 0.1, 1, true);
                ƒS.update();
                await ƒS.Location.show(locations.Chp02_E_DiscoverKitchenOven);
                await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
                await ƒS.Speech.tell(characters.maincharacter, "Das Holz muss nachgelegt werden.");
                ƒS.Speech.clear();
                ƒS.Sound.fade(soundeffects.cracklingfire, 0, 0, false);
                return "02_Kitchen";
                break;

            case Chp02PickSceneElementAnswersKitchen.PickSceneContinue:
                await ƒS.Speech.tell(characters.maincharacter, "So, fertig.");
                ƒS.Speech.clear();
                return "02_00 Arrival Home";
                break;
        }
    }
}
