namespace Spiegel_VN {
  export async function Chp06_ClothingStore(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp06_ClothingStore);
    ƒS.Sound.fade(soundeffects.crowd, 0, 0, false);
    ƒS.update();
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Ohne auf deine Widerrede zu hören, zieht dich Flynn in ein Bekleidungsgeschäft.");
    await ƒS.Speech.tell(characters.maincharacter, '"Halt, was tust du?!"');
    await ƒS.Speech.tell(characters.maincharacter, "Du weißt gar nicht, wie dir geschieht. Erst reist du in eine komplett andere Welt, die genauso und gleichzeitig so anders ist als daheim. Dann schwätzt dich dieser Kerl an und will dir nicht von der Seite weichen.");

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_neutral, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Ich will dir ein neues Outfit kaufen, als Willkommensgeschenk!"');
    await ƒS.Speech.tell(characters.maincharacter, "Bevor du widersprechen kannst, kommt eine Verkäuferin auf euch zu. Sie strahlt euch mit brillant-weißen Zähnen an.");
    await ƒS.Character.show(characters.Seller, characters.Seller.pose.pos1, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell("Verkäuferin", '"Ihr wollt ein neues Outfit? Sehr gerne!"');

    ƒS.Character.hide(characters.Flynn);
    ƒS.update();

    await ƒS.Speech.tell(characters.maincharacter, "Sie schiebt dich in eine Ecke des Geschäfts und holt ihr Messband hervor.");
    await ƒS.Speech.tell("Verkäuferin", '"Was soll’s denn werden? Ein hübsches Kleid? Oder Hemd & Hose?"');


    let Chp06ClothesElementAnswers = {
      iSayDress: "Kleid",
      iSayShirt: "Hemd & Hose",
      iSaySkirt: "Hemd & Rock"
    };

    let Chp06ClothesElement = await ƒS.Menu.getInput(
      Chp06ClothesElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp06ClothesElement) {
      case Chp06ClothesElementAnswers.iSayDress:
        await ƒS.Speech.tell(characters.maincharacter, "Du stammelst. Vielleicht ein Kleid?");
        ƒS.Speech.clear();
        break;

      case Chp06ClothesElementAnswers.iSayShirt:
        await ƒS.Speech.tell(characters.maincharacter, "Du stammelst. Vielleicht Hemd und Hose?");
        ƒS.Speech.clear();
        break;

      case Chp06ClothesElementAnswers.iSaySkirt:
        await ƒS.Speech.tell(characters.maincharacter, "Du stammelst. Vielleicht Hemd und Rock?");
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Speech.tell("Verkäuferin", "Kommt sofort!");
    await ƒS.Speech.tell(characters.maincharacter, "Du willst dich gerade nach Flynn umdrehen und ihn anfauchen, als die Dame schon wieder da ist und dir das Kleidungsstück aufdrängt.");

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms2_smile, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Das steht dir wirklich sehr gut!"');
    await ƒS.Speech.tell(characters.maincharacter, "Flynn hat sich in der Zwischenzeit auch etwas ausgesucht. Er steht vor dir und lacht.");
    await ƒS.Speech.tell(characters.Flynn, '"Wunderbar! Jetzt passt du perfekt zu Whary!"');
    await ƒS.Speech.tell(characters.maincharacter, "Du schaffst es gerade so, deine alten Klamotten aufzusammeln. Flynn zahlt und zieht dich wieder nach draußen");

    await ƒS.Location.show(locations.Chp06_InWharyPeople);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Dort wirbelt er dich einmal um deine eigene Achse und strahlt. Das Outfi zwickt und zwängt dich ein. Ein Korsett macht deine Taille schlank und dicke Polster sorgen für ausgefüllte Körperstellen. Du fühlst dich wie eine aufgeblasene Wurst.");

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms_happy, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Du siehst super aus! Wo geht es als nächstes hin?"');
    await ƒS.Speech.tell(characters.maincharacter, "Dein Geduldsfaden reißt.");

    await ƒS.Speech.tell(characters.maincharacter, '"Flynn, ich bin nicht als Tourist hier! Du kannst mich nicht wie eine Puppe behandeln! Mir reichts. Ich muss meine Schwester suchen! Und dazu brauche ich dich nicht. Hast du verstanden?"');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms2_sad, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Oh … das tut mir leid."');
    await ƒS.Speech.tell(characters.maincharacter, '"Ja, das sollte es auch! Du kannst mich nicht zu deiner eigenen Bespaßung rumschleppen. Meine Schwester ist weg, und ich hoffe, dass sie hier irgendwo ist …"');

    await ƒS.Speech.tell(characters.Flynn, '"Deine Schwester? Seit wann ist sie denn weg?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Seit … ich glaube, gestern Mittag."');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_uncertain, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Und du denkst, sie könnte hier sein?"');

    let Chp06ClothesElementAnswers2 = {
      iSayHonest: "Ehrlich sein",
      iSayLie: "Ausflüchten"
    };

    let Chp06ClothesElement2 = await ƒS.Menu.getInput(Chp06ClothesElementAnswers2, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp06ClothesElement2) {
      case Chp06ClothesElementAnswers2.iSayHonest:
        await ƒS.Speech.tell(characters.maincharacter, '"Ich glaube, sie wird hier als Sklavin gefangen gehalten. Von wem oder wo, weiß ich aber nicht …"');
        ƒS.Speech.clear();
        break;
      case Chp06ClothesElementAnswers2.iSayLie:
        await ƒS.Speech.tell(characters.maincharacter, '"Sie ist vermutlich weggelaufen und steckt irgendwo fest. Ich weiß aber nicht, wo …"');
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Speech.tell(characters.maincharacter, '"Ich mache mir solche Sorgen! Sie ist allein und hat bestimmt große Angst."');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_smile2, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Ich helfe dir! Das ist kein Problem. Wir finden deine Schwester!"');
    await ƒS.Speech.tell(characters.maincharacter, '"Warum willst du mir unbedingt dabei helfen? Wir kennen uns kaum. Und das könnte eine lange Suche werden."');
    await ƒS.Speech.tell(characters.Flynn, '"Ich helfe immer gern. Und diese Mission klingt super spann– ich meinte, außergewöhnlich."');
    await ƒS.Speech.tell(characters.maincharacter, "Sein Abenteuergeist geweckt, springt Flynn aufgeregt um dich herum. Du seufzt. Ist das der beste Partner bei der Suche nach Kailani?");

    let Chp06ClothesElementAnswers3 = {
      iSayTrust: "Flynn vertrauen",
      iSayNotTrust: "Flynn nicht vertrauen"
    };

    let Chp06ClothesElement3 = await ƒS.Menu.getInput(Chp06ClothesElementAnswers3, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp06ClothesElement3) {
      case Chp06ClothesElementAnswers3.iSayTrust:
        dataForSave.pickedChp06TrustFlynn = true;
        await ƒS.Speech.tell(characters.maincharacter, "Du kennst dich hier nicht aus und kennst auch niemand anderen in dieser schrillen Stadt. Schließlich hast du keine Wahl. Du musst ihm einfach vertrauen und hoffen, dass er dir wirklich bei der Suche unterstützen kann.");
        ƒS.Speech.clear();
        break;

      case Chp06ClothesElementAnswers3.iSayNotTrust:
        await ƒS.Speech.tell(characters.maincharacter, "Ehrlich gesagt, findest du diesen jungen Mann ziemlich komisch. Du entscheidest, ihm nicht zu vertrauen. Wer weiß, welche Motivationen er hat?");
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Speech.tell(characters.maincharacter, '"Gut. Tut mir leid, dass ich dich gerade so angeschnauzt habe. Vielen Dank für das Angebot."');
    await ƒS.Speech.tell(characters.Flynn, '"Klar doch! Wie starten wir? Sollen wir zuerst an den Markt und dort Leute befragen, oder –"');
    await ƒS.Speech.tell(characters.maincharacter, '"Ich muss mich zuerst irgendwo einquartieren. Bin todmüde …"');
    await ƒS.Speech.tell(characters.Flynn, '"Na dann, auf zum Gasthof! Ich kenne da einen guten."');

    return;

  }
}
