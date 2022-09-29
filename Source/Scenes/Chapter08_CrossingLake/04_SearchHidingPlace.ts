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
        await ƒS.Speech.tell(characters.maincharacter, "Ich würde nach links! Links ist immer richtig.");

        

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
                iSayThinkAboutVillage: '"(Erkunden) Was denkst du über das Dorf?"',
                iSayThinkAboutTower: '"(Erkunden) Wie findest du den Turm?"',
                iSayAskAboutPeople: "(Erkunden) Wo sind alle?",
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
                    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_confused, ƒS.positionPercent(70, 100));
                    ƒS.update();
                    await ƒS.Speech.tell(characters.Flynn, '"Das ist eine gute Frage. Von hier oben sehe ich noch immer keine einzige Bewegung, du etwa?"');
                    await ƒS.Speech.tell(characters.maincharacter, "Als du den Kopf schüttelst, überlegt er weiter.");
                    await ƒS.Speech.tell(characters.Flynn, '"Vielleicht sind die Häuser alle verlassen, außer dem Turm? Deshalb hat nur er noch die Farbe?"');
                    await ƒS.Speech.tell(characters.maincharacter, "Das kann sein … Aber wo sind die Menschen hin? Irgendetwas muss sie doch fortgetrieben haben.");

                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_angry, ƒS.positionPercent(70, 100));
                    ƒS.update();

                    await ƒS.Speech.tell(characters.Flynn, '"Das ganze Dorf kann auch verlassen sein."');
                    await ƒS.Speech.tell(characters.maincharacter, '"Ich glaube nicht! Hier scheint sich etwas zu verbergen …"');
                    await ƒS.Speech.tell(characters.maincharacter, "Flynn schweigt und zerrupft ein Blatt zwischen den Fingern.");
                    ƒS.Speech.clear();
                    break;

                case Chp08HidingPlaceFactoryElementAnswers3.iSayContinue:
                    dataForSave.pickedChp08HidingPlaceContinue = true;
                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_shocked, ƒS.positionPercent(70, 100));
                    ƒS.update();

                    await ƒS.Speech.tell(characters.Flynn, '"Schau! Da war was!"');
                    await ƒS.Location.show(locations.Chp08_HidingPlaceSlaves);
                    ƒS.update();
                    ƒS.Speech.clear();
                    break;
            }
            } while (!dataForSave.pickedChp08HidingPlaceContinue);

                    await ƒS.Speech.tell(characters.maincharacter, "Flynn zeigt aufgeregt in die Tiefe. Weit unten, neben dem Turm, strömen Menschen aus einem großen Gebäude. Du kneifst die Augen zusammen, um besser zu sehen.");
                    await ƒS.Speech.tell(characters.maincharacter, '"Die sind auch alle grau! Guck mal, wie viele da herauskommen. Was haben die da drin wohl gemacht?"');
                    await ƒS.Speech.tell(characters.maincharacter, "Du und Flynn schaut verwundert zu, wie immer mehr graue Menschen aus dem Bau kommen.");
                    await ƒS.Speech.tell(characters.maincharacter, '"Die gehen alle in die Häuser! Siehst du das auch?"');
                    await ƒS.Speech.tell(characters.maincharacter, "Tatsächlich verschwinden die kleinen Figuren, eine nach der anderen, in den Häuschen, die vorhin so still und leer wirkten.");
                    await ƒS.Speech.tell(characters.Flynn, '"Da wohnen sie also! Schau, ist doch alles in Ordnung. In den Turm ist aber niemand gegangen …"');
                    await ƒS.Speech.tell(characters.maincharacter, '"Viel interessanter ist doch, dass Kailani vielleicht unter diesen Menschen war! Sie ist womöglich jetzt in einem der Häuser? Ich muss sofort von hier runter!"');
                    await ƒS.Speech.tell(characters.Flynn, '"Okay, warte mal. Wir sind doch erst hier hochgekrochen und haben uns ein Lager gemacht. Außerdem wird es gleich dunkel, und nachts will ich eigentlich nicht durch das Geisterdorf streichen, auch wenn wir nun wissen, dass es Menschen gibt."');
                    await ƒS.Speech.tell(characters.Flynn, '"Wer weiß, wie die drauf sind? Lieber legen wir uns etwas hin und ruhen uns aus. Morgen können wir gestärkt nach Kailani suchen."');

                    let Chp08HidingPlaceFactoryElementAnswers4 = {
                        iSayDefiant: "Trotzig",
                        iSayGiveIn: "Einlenken",
                        iSaySilent: "Schweigen",
            };
                        let Chp08HidingPlaceFactoryElement4 = await ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers4, "choicesCSSclass");

                    switch (Chp08HidingPlaceFactoryElement4) {
                        case Chp08HidingPlaceFactoryElementAnswers4.iSayDefiant:
                            await ƒS.Speech.tell(characters.maincharacter, '"Meine Schwester ist da unten! Und ich soll sie nicht suchen gehen? Das ist doch Blödsinn!"');
                            ƒS.Speech.clear();
                            break;
                        
                        case Chp08HidingPlaceFactoryElementAnswers4.iSayGiveIn:
                            await ƒS.Speech.tell(characters.maincharacter, '"Hast ja recht … müde bin ich schon. Und ganz geheuer ist mir das Dorf immer noch nicht."');
                            ƒS.Speech.clear();
                            break;
                        
                        case Chp08HidingPlaceFactoryElementAnswers4.iSaySilent:
                            await ƒS.Speech.tell(characters.maincharacter, "Du schweigst. Natürlich hat er recht. Trotzdem würdest du ohne ihn sofort, ohne eine Sekunde zu zögern, zurück in das Dorf und nach Kailani suchen. Müde bist du aber auch.");
                            ƒS.Speech.clear();
                            break;
                     
                    }
        ƒS.Character.hideAll();
                    await ƒS.Speech.tell(characters.maincharacter, "Es ist schon fast dunkel. Du schaust hinunter und bemerkst etwas Seltsames. Du kommst nicht sofort darauf, aber dann fällt dir auf: wo normalerweise Licht hinter den Fenstern glänzt, ist es stockdunkel. Die Menschen haben keine Kerzen angezündet. Vielleicht gehen alle nur früh ins Bett? Aber dein Instinkt sagt dir, dass etwas nicht stimmt.");
                    await ƒS.Speech.tell(characters.maincharacter, "Du hättest es beinahe vergessen – deine alten Klamotten sind noch in deiner Tasche! Du ziehst dich um und fühlst sofort wohler. Die Polster lässt du unter dem Baum liegen. Dass die Menschen sich in Whary so fehlerhaft finden, dass sie sich einpolstern müssen, lässt dich etwas traurig werden.");
                    await ƒS.Speech.tell(characters.maincharacter, "Aber Whary ist weit weg. Du bist dir sicher, Kailani hier, auf der anderen Seite des Sees, näher zu sein. Du kannst es spüren! Mit diesen tröstenden Gedanken drehst du dich um und kuschelst dich in das Lager ein, dass Flynn gebaut hat.");

            await ƒS.Location.show(locations.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        return "09_Enter factory";
        } 
    }


      