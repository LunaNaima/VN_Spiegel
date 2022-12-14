namespace Spiegel_VN {
  export async function Chp06_Inn(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp06_Inn_ext);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Flynn führt dich durch kleine Gassen zu einem pinken Gasthof, der an der Ecke einer Kreuzung steht. So viel ist in den letzten Tagen passiert, dass du einfach kurz die Augen schließen und die Welt ausblenden möchtest.");

    await ƒS.Location.show(locations.Chp06_Inn_int);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Character.show(characters.Innkeeper, characters.Innkeeper.pose.pos1_neutral, ƒS.positionPercent(70, 100));
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_neutral2, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Innkeeper, '"Kann ich helfen?"');

    let Chp06InnElementAnswers = {
      iSayRoom: '"Haben Sie noch ein Zimmer frei?"'
    };

    // let Chp06InnElement =
    await ƒS.Menu.getInput(Chp06InnElementAnswers, "choicesCSSclass");

    // if (dataForSave.pickedChp06TrustFlynn) {
    //   await ƒS.Speech.tell(characters.maincharacter, "Ich vertraue Flynn.");
    // }
    // if (!dataForSave.pickedChp06TrustFlynn) {
    //   await ƒS.Speech.tell(characters.maincharacter, "Ich vertraue ihm nicht. So kann ich ein Auge auf ihn haben.");
    // }
    ƒS.Character.hide(characters.Innkeeper);
    await ƒS.Character.show(characters.Innkeeper, characters.Innkeeper.pose.pos2_laugh, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Innkeeper, '"Ja, tatsächlich. Ist noch eins da. Ihr habt Glück. Pro Nacht zahlt ihr zehn Schilling und Abendessen gibt’s um acht. Das Essen is’ mit drin. Alles klar?"');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_neutral, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Danke! Ich war schon mal hier, da hat’s mir sehr gefallen. Nur die Gemüsesuppe war etwas dünn."');
    await ƒS.Speech.tell(characters.maincharacter, "Du verdrehst die Augen.");

    await ƒS.Location.show(locations.Chp06_Inn_room);
    ƒS.Character.hide(characters.Innkeeper);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.Flynn, '"Das ist ja gemütlich! Viel besser, als das letzte Mal. Da musste ich mir ein Zimmer mit einem teilen, der hat ganz schlimm nach Fisch gestunken."');
    await ƒS.Speech.tell(characters.maincharacter, "Der Fisch-Mann war sicherlich auch von Flynns Redeschwall genervt, denkst du dir. Du darfst aber auch nicht zu streng sein: schließlich hatte dir Flynn in einem Anfall von Gutmenschlichkeit seine Hilfe angeboten.");

    await ƒS.Speech.tell(characters.maincharacter, "Und wenn du ehrlich bist, bist du darüber ziemlich erleichtert. Du beschließt, dir später weitere Gedanken über deinen neuen Gefährten zu machen. Du musst dich kurz hinlegen ...");

    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.black);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Location.show(locations.Chp06_Inn_room);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Du blinzelst. Wo bist du denn? Panik macht sich in deiner Brust breit, bis dir einfällt, dass du in der Spiegelwelt bist.");
    await ƒS.Speech.tell(characters.maincharacter, "So richtig traust du dich noch nicht, darüber nachzudenken. Das ist hier also die Welt, in der die Menschen hineingesaugt werden. Aber wo gehen sie dann hin?");
    await ƒS.Speech.tell(characters.maincharacter, "Flynn hast du auch noch nichts Genaueres erzählt. Vielleicht würde er dir aber sowieso nicht glauben.");
    await ƒS.Speech.tell(characters.maincharacter, "Einerseits hat er dich hier willkommen geheißen, auch wenn auf eine spezielle Art. Andererseits kennst du ihn und seine Motivationen kaum. Er spielt gern den Unterhalter und lässt nicht viel von seinem Inneren durchblicken.");
    await ƒS.Speech.tell(characters.maincharacter, "Du beschließt, nach unten zu gehen. Vielleicht ist es bald Zeit für das Abendessen?");

    await ƒS.Location.show(locations.Chp06_Inn_int);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Als du unten ankommst, flutet eine helle Sonne das Zimmer. Du schaust genauer hin und entdeckst, dass die Gäste frühstücken. Hast du etwa den ganzen Tag verschlafen?");

    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_confused, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"' + dataForSave.nameProtagonist + ', da bist du ja! Schlafmütze. Ich dachte schon, du wachst gar nicht mehr auf."');
    await ƒS.Speech.tell(characters.maincharacter, '"Ich habe viel zu lange geschlafen! Ich muss doch Kailani suchen!"');
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_neutral, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Okay, ganz ruhig. Wie wär’s, wenn wir erst mal eine Runde Recherche betreiben? Wir fragen einfach mal die Leute, ob sie etwas wissen. Was meinst du?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Das ist wohl ein Anfang …"');
    await ƒS.Speech.tell(characters.maincharacter, "Du hast gerade, ehrlich gesagt, sowieso keine besseren Ideen.");

    return "06_new day";
  }
}
