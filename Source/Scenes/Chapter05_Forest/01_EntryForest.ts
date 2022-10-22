namespace Spiegel_VN {
  export async function Chp04_CS_EntryForest(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.black);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Location.show(locations.Chp05_Forestpath);
    ƒS.Sound.fade(soundeffects.forest, 0.3,1,true)
    await ƒS.update();

    await ƒS.Speech.tell(characters.maincharacter, "Du betrittst den dunkeln Wald. Du gehst in die Richtung deines alten ‘Spielplatzes’.");
    await ƒS.Speech.tell(characters.maincharacter, "Als Kind hast du dir jeden Tag zwischen den hohen Bäumen Szenen ausgedacht und die nachgespielt. Dabei bist du kreuz und quer durch das ganze Waldstück gerannt. Doch du bist nie weiter hineingegangen. Erinnerst du dich?");

    await ƒS.Location.show(locations.Chp05_Trees);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "An der Stelle angekommen, schaust du hoch in die schwarzen Baumkronen. Auch wenn die Sonne erst untergeht, ist es hier schon Nacht. Du trittst über die Schwelle. Die Bäume rascheln, als würden sie vor dir, dem Eindringling, warnen.");
    await ƒS.Speech.tell(characters.maincharacter, "Du läufst weiter und weiter, bis die Bäume so eng zusammenstehen, dass du kaum durchkommst. An was denkst du?");


    let Chp05PickSceneElementAnswers = {
      iSaySave: "Ich muss Kailani retten!",
      iSayTired: "Ich kann bald nicht mehr …",
      iSayMistake: "War das alles ein Fehler?",
    };

    let Chp05PickSceneElement = await ƒS.Menu.getInput(Chp05PickSceneElementAnswers, "choicesCSSclass");

    await ƒS.Speech.tell(characters.maincharacter, "Schnaufend schleppst du dich von Stamm zu Stamm, über Wurzeln und Gebüsch. Plötzlich stehst du inmitten einer Lichtung.");
    await ƒS.Location.show(locations.Chp05_Wishtree);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        
    await ƒS.Speech.tell(characters.wishtree, '"Willkommen, Kind."');
    await ƒS.Speech.tell(characters.maincharacter, "Was war das? Wer hat da gesprochen?");
    await ƒS.Speech.tell(characters.wishtree, '"Komm’ nur näher."');
    await ƒS.Speech.tell(characters.maincharacter, "Ist das etwa der Baum? Ungläubig und fasziniert zugleich näherst du dich dem beträchtlichen Stamm. Hier ist es schon fast Nacht.");
    await ƒS.Speech.tell(characters.wishtree, '"Ich weiß, wieso du hier bist. Und ich weiß auch, wo deine Schwester ist. "');
    await ƒS.Speech.tell(characters.maincharacter, "Also ist es wahr: es gibt einen echten Baum der Wünsche? Deine Stimme ist heiser, als du sprechen willst.");
    await ƒS.Speech.tell(characters.wishtree, '"Das brauchst du nicht. Ich spüre deine Gedanken. Nur, weil dein Herz offen war, habe ich dich zu mir durchgelassen."');
    await ƒS.Speech.tell(characters.maincharacter, "Du nickst stumm und starrst mit offenem Mund zu den dichten Ästen empor.");
    await ƒS.Speech.tell(characters.wishtree, '"Ich weiß, dass du mehr wissen willst. Zuerst musst du dich aber beweisen. Gelingt es dir, erhältst du, was sich dein Herz wünscht. Gelingt es dir nicht, wirst du für immer verbannt."');

    let Chp05PickSceneElementAnswers2 = {
      iSayFear: "Ich habe Angst",
      iSayBest: "Ich gebe mein Bestes",
      iSayKailani: "Ich tue es für Kailani",
    };

    let Chp05PickSceneElement2 = await ƒS.Menu.getInput(Chp05PickSceneElementAnswers2, "choicesCSSclass");
    await ƒS.Speech.tell(characters.wishtree, '"Also gut."');
    // await ƒS.Speech.tell(characters.maincharacter, "Der Baum raschelt und ächzt. Um dich herum säuselt der Wind.");

    return "TextRiddle";

  }
}
