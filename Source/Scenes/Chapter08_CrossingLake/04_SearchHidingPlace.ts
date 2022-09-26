namespace Spiegel_VN {
    export async function Chp08_SearchHidingPlace(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.Chp08_Village);
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_sad, ƒS.positionPercent(70, 100));
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Speech.tell(characters.maincharacter, "Du und Flynn lauft schweigend und etwas ratlos durch das Dorf. Die Häuschen stehen eng aneinandergereiht und hüllen sich ebenfalls in Schweigen. Eigentlich willst du so schnell wie möglich wieder raus aus dem Dorf.");

        let Chp08HidingPlaceFactoryElementAnswers = {
            iSayExploreVillage: "(Erkunden) Dorf erkunden",
            iSayContinue: "Weiter suchen",
        };
    
        let Chp08HidingPlaceFactoryElement = await ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers, "choicesCSSclass");

        switch (Chp08HidingPlaceFactoryElement) {
            case Chp08HidingPlaceFactoryElementAnswers.iSayExploreVillage:
                await ƒS.Location.show(locations.Chp08_E_FactoryVillage);
                await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
                await ƒS.Speech.tell(characters.maincharacter, "Du wanderst in eine Gasse, um dich genauer umzusehen. Es rührt sich nichts – keine Vögel, Menschen oder andere Lebewesen sind in Sicht. Komisch, wenn die Häuser nicht bewohnt sind, wozu sind sie dann da? Es sieht nicht so aus, als ob ihr hier irgendwo unterkommen könnt.");
                ƒS.Speech.clear();
                return "08_Search hiding place";
                break;
              
            case Chp08HidingPlaceFactoryElementAnswers.iSayContinue:
                await ƒS.Speech.tell(characters.maincharacter, "Ihr lauft weiter. Im Dorf herrscht eine drückende Atmosphäre, die dir nicht geheuer ist. Ist Kailani wirklich hier? Wenn ja, wo kann sie in diesem verlassenen Ort sein? Dein Bauch zieht sich vor Reue zusammen. War es ein Fehler gewesen, hier her zu reisen? Neben dir ist Flynn wohl auch in innerer Aufruhr. In seinem Gesicht sind rote Flecken, und er zuckt hektisch mit den Armen. Was ist denn mit dem los?");
                ƒS.Speech.clear();
                break;
        }
        
        await ƒS.Location.show(locations.Chp08_ForestPath);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Speech.tell(characters.maincharacter, "Überraschend endet das Dorf und die Straße wird zum schmalen Waldweg.");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_confused, ƒS.positionPercent(70, 100));
        ƒS.update();
        

        do {
            let Chp08HidingPlaceFactoryElementAnswers2 = {
                iSayLeft: "Links",
                iSayRight: "Rechts",
                iSayHammer: "Was glänzt da?",
            };
        
            if (!dataForSave.pickedIron) {
                delete Chp08HidingPlaceFactoryElementAnswers2.iSayHammer;
            }

            if (!dataForSave.pickedIron) {
                delete Chp08HidingPlaceFactoryElementAnswers2.iSayHammer;
            }
    
            let Chp08HidingPlaceFactoryElement2 = await ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers2, "choicesCSSclass");

            switch (Chp08HidingPlaceFactoryElement2) {
                case Chp08HidingPlaceFactoryElementAnswers2.iSayLeft:
                    dataForSave.pickedChp08Left = true;
                    await ƒS.Speech.tell(characters.maincharacter, "Du stimmst Flynn zu und ihr wählt den linken Pfad.");
                    ƒS.Speech.clear();
                    break;

                case Chp08HidingPlaceFactoryElementAnswers2.iSayRight:
                    dataForSave.pickedChp08Right = true;
                    await ƒS.Speech.tell(characters.maincharacter, '"Ich finde, wir sollten nach rechts!"');
                    await ƒS.Speech.tell(characters.Flynn, '"Na gut, ist mir egal! Hauptsache wir kommen irgendwo unter. Auf jetzt!"');
                    ƒS.Speech.clear();
                    break;

                case Chp08HidingPlaceFactoryElementAnswers2.iSayHammer:
                    await ƒS.Speech.tell(characters.maincharacter, "Du bückst dich und hebst den Gegenstand auf, der neben dem Waldweg im Grass liegt. Es ist ein Hammer. Komisch, denkst du, was macht der hier mitten im Wald? Er erinnert dich an das Werkzeug von Mama.");
                    ƒS.Speech.clear();
                    break;
            }
        } while (!dataForSave.pickedChp08Left || !dataForSave.pickedChp08Right);
        
await ƒS.Location.show(locations.Chp08_HidingPlace);
await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
await ƒS.Speech.tell(characters.maincharacter, "Schnaufend kommt ihr oben an einem Überhang an. Der Hügel war doch nicht so mühelos. Dafür habt ihr jetzt eine Aussicht auf das Dorf, die atemberaubend wäre …");
await ƒS.Speech.tell(characters.maincharacter, "… wären da nicht die seltsame Stille und das Fehlen der Farben. Daran kannst du dich immer noch nicht gewöhnen.");

 ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms_happy, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Perfekt! Hier können wir uns auf die Lauer legen und beobachten."');
    await ƒS.Speech.tell(characters.maincharacter, '"Na gut."');
    await ƒS.Speech.tell(characters.maincharacter, "Ihr macht es euch, so gut es geht, auf dem Felsen gemütlich.");

        do {
            let Chp08HidingPlaceFactoryElementAnswers3 = {
                iSayThinkAboutVillage: '"Was denkst du über das Dorf?"',
                iSayThinkAboutTower: '"Wie findest du den Turm?"',
                iSayAskAboutPeople: "Wo sind alle?",
                iSayContinue: "Weiter",
            };
             let Chp08HidingPlaceFactoryElement3 = await ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers3, "choicesCSSclass");

            switch (Chp08HidingPlaceFactoryElement3) {
                case Chp08HidingPlaceFactoryElementAnswers3.iSayThinkAboutVillage:
                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_sad, ƒS.positionPercent(70, 100));
                    ƒS.update();
                    await ƒS.Speech.tell(characters.Flynn, '"Puh, ich weiß nicht. Schon komisch! Und warum es hier keine Farbe gibt, versteh’ ich auch nicht."');
                    await ƒS.Speech.tell(characters.maincharacter, "Du erklärst ihm nochmal, dass es Zeiten gab, als diese Welt komplett farblos war. Dass die Farbe erst nach und nach, zuerst zu den Pflanzen, dann zu den Menschen, kam. Und dass niemand genau weiß, woher sie stammt. Flynn wirkt aber desinteressiert und zupft an einem Grashalm.");
                    ƒS.Speech.clear();
                    break;
                
                case Chp08HidingPlaceFactoryElementAnswers3.iSayThinkAboutTower:
                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms_happy, ƒS.positionPercent(70, 100));
                    ƒS.update();
                    await ƒS.Speech.tell(characters.Flynn, '"Der Turm ist interessant! Da muss etwas drin sein, sonst würde er nicht so strahlen. Vielleicht ein Schatz? Oder andere Kostbarkeiten?"');
                    await ƒS.Speech.tell(characters.maincharacter, '"Oder Kailani?"');
                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms2_sad, ƒS.positionPercent(70, 100));
                    ƒS.update();
                    await ƒS.Speech.tell(characters.Flynn, '"Oh, stimmt. Eh, deine Schwester ist vielleicht da drin gefangen gehalten! Deswegen ist es wichtig, dass wir beobachten, ob sich etwas tut."');
                    await ƒS.Speech.tell(characters.maincharacter, "Kailani scheint nicht seine erste Priorität zu sein. Du bist enttäuscht und fühlst dich allein gelassen. Andererseits hat er dich bis hier hinbegleitet.");
                    ƒS.Speech.clear();
                    break;
                
                case Chp08HidingPlaceFactoryElementAnswers3.iSayAskAboutPeople:
                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms_happy, ƒS.positionPercent(70, 100));
                    ƒS.update();
                    await ƒS.Speech.tell(characters.Flynn, '"Der Turm ist interessant! Da muss etwas drin sein, sonst würde er nicht so strahlen. Vielleicht ein Schatz? Oder andere Kostbarkeiten?"');
                    await ƒS.Speech.tell(characters.maincharacter, '"Oder Kailani?"');
                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms2_sad, ƒS.positionPercent(70, 100));
                    ƒS.update();
                    await ƒS.Speech.tell(characters.Flynn, '"Oh, stimmt. Eh, deine Schwester ist vielleicht da drin gefangen gehalten! Deswegen ist es wichtig, dass wir beobachten, ob sich etwas tut."');
                    await ƒS.Speech.tell(characters.maincharacter, "Kailani scheint nicht seine erste Priorität zu sein. Du bist enttäuscht und fühlst dich allein gelassen. Andererseits hat er dich bis hier hinbegleitet.");
                    ƒS.Speech.clear();
                    break;




            }
}
}
      