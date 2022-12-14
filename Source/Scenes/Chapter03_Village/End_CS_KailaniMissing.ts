namespace Spiegel_VN {
  export async function Chp03_CS_KailaniMissing(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_laugh, ƒS.positionPercent(55, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mutti, '"Und, wart ihr erfolgreich?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Naja, unsere Aufgaben haben wir erledigt, aber Kailani war bisschen komisch."');
    await ƒS.Speech.tell(characters.Mutti, '"Ja, gerade ist sie etwas gereizt. Das wird bestimmt wieder. Ich muss noch etwas arbeiten, dann können wir später zusammen kochen, ja? Mama sollte auch bald nach Hause kommen."');
    ƒS.Character.hideAll();
    await ƒS.Speech.tell(characters.maincharacter, "Du willst nur schnell nach Kailani schauen, bevor du dich zurückziehst.");
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Location.show(locations.Chp03_KailaniBedroom);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Kailani? Bist du da?"');
    await ƒS.Speech.tell(characters.maincharacter, "Der Spiegel liegt glitzernd auf dem Bett. Von Kailani fehlt aber jede Spur. Ist sie vielleicht bei Evarius?");

    await ƒS.Speech.tell(characters.maincharacter, '"Evarius?"');
    await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos2_frown, ƒS.positionPercent(30, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.maincharacter, '"Hast du Kailani gesehen?"');
    await ƒS.Speech.tell(characters.Evarius, '"Nö, seit Stunden nicht. Ich dachte, sie wäre mit dir?"');
    ƒS.Character.hideAll();

    await ƒS.Speech.tell(characters.maincharacter, "Komisch. Wo kann sie denn sein? Du suchst mal unten nach ihr.");

    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    let Chp03SearchKailaniElementAnswers = {
      PickSceneSearchGarden: "Im Garten suchen"
    };

    let Chp03SearchKailaniElement = await ƒS.Menu.getInput(Chp03SearchKailaniElementAnswers, "choicesCSSclass");

    switch (Chp03SearchKailaniElement) {
      case Chp03SearchKailaniElementAnswers.PickSceneSearchGarden:
        dataForSave.pickedChp03_SearchGarden = true;
        await ƒS.Location.show(locations.Chp02_03_PickHerbs);
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Sie kann eigentlich nicht hier sein. Schließlich verbringt sie gerade die meiste Zeit in ihrem Zimmer.");
        await ƒS.Speech.tell(characters.maincharacter, "Du schaust in jede Ecke, während die Vögel unschuldig zwitschern. Keine Kailani.");

        ƒS.Speech.clear();
        break;
    }

    await ƒS.Location.show(locations.Chp02_E_DiscoverKitchen);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_smirk, ƒS.positionPercent(55, 100));
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, '"Mutti, hast du Kailani gesehen?"');
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_neutral, ƒS.positionPercent(55, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mutti, '"Ich dachte, sie wäre in ihrem Zimmer?"');

    let Chp03SearchKailaniElementAnswers1 = {
      iSayPanicked: "Panisch",
      iSayWorried: "Besorgt",
      iSaySoothing: "Beschwichtigend"
    };

    let Chp03SearchKailaniElement1 = await ƒS.Menu.getInput(Chp03SearchKailaniElementAnswers1, "choicesCSSclass");

    switch (Chp03SearchKailaniElement1) {
      case Chp03SearchKailaniElementAnswers1.iSayPanicked:
        await ƒS.Speech.tell(characters.maincharacter, '"Sie ist weg! Oh Gott, was ist, wenn sie weggelaufen ist? Vorhin hat irgendetwas hat mit ihr nicht gestimmt."');
        await ƒS.Speech.tell(characters.Mutti, '"Jetzt beruhige dich erst mal. Suchen wir doch zuerst nach ihr!"');
        if (dataForSave.pickedChp03_SearchGarden) {
          await ƒS.Speech.tell(characters.maincharacter, '"Da habe ich schon geschaut! Sie ist einfach weg!"');
        } else {
          await ƒS.Speech.tell(characters.maincharacter, '"Noch nicht, aber ich weiß, dass sie da nicht ist!"');
        }
        await ƒS.Speech.tell(characters.Mutti, '"Gut, ich rufe mal Evarius und frage nach."');
        ƒS.Speech.clear();
        break;

      case Chp03SearchKailaniElementAnswers1.iSayWorried:
        await ƒS.Speech.tell(characters.maincharacter, '"Ich wollte gerade mit ihr reden, aber sie ist nicht in ihrem Zimmer. Evarius hat sie auch nicht gesehen. Ich mache mir etwas Sorgen, Mutti. Weißt du vielleicht, wo sie ist?"');
        await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_frown, ƒS.positionPercent(55, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mutti, '"Nein, ich habe sie heute noch gar nicht gesehen. Sie ist bestimmt nur kurz raus. Willst du nach ihr suchen?"');
        await ƒS.Speech.tell(characters.maincharacter, '"Habe ich schon!"');
        ƒS.Speech.clear();
        break;

      case Chp03SearchKailaniElementAnswers1.iSaySoothing:
        await ƒS.Speech.tell(characters.maincharacter, '"Kailani ist nicht in ihrem Zimmer; ich dachte, vielleicht wäre sie hier unten. Aber sie ist sicher nur schnell raus."');
        await ƒS.Speech.tell(characters.Mutti, '"Bist du dir sicher? Hast du schon im Garten geschaut?"');
        if (dataForSave.pickedChp03_SearchGarden) {
          await ƒS.Speech.tell(characters.maincharacter, '"Da habe ich schon geschaut! Sie ist einfach weg!"');
        } else {
          await ƒS.Speech.tell(characters.maincharacter, '"Noch nicht, aber ich weiß, dass sie da nicht ist!"');
        }
        await ƒS.Speech.tell(characters.Mutti, '"Rufe doch mal Evarius herunter, dann kannst du dich mit ihm besprechen."');
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_neutral2, ƒS.positionPercent(80, 100));
    await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos1_frown, ƒS.positionPercent(30, 100));
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_frown, ƒS.positionPercent(55, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Ich finde Kailani nirgends. Habt ihr sie nicht gesehen?"');
    await ƒS.Speech.tell(characters.Mama, '"Ich komme gerade von der Arbeit! Ist alles in Ordnung?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Vorhin habe ich noch mit ihr Hausarbeiten gemacht. Irgendetwas hat sie gestört, aber sie wollte es mir nicht sagen. Was ist, wenn sie weggelaufen ist?"');
    ƒS.Character.hide(characters.Mama);
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_hand_angry, ƒS.positionPercent(80, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mama, '"Jetzt halte mal die Füße still. Sie treibt sich sicherlich auf dem Grundstück herum."');
    await ƒS.Speech.tell(characters.maincharacter, '"Evarius, bist du dir sicher, dass du sie heute nicht gesehen hast?"');

    ƒS.Character.hide(characters.Evarius);
    await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_frown, ƒS.positionPercent(30, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Evarius, '"Naja, vorhin habe ich gehört, wie sie in ihr Zimmer gegangen ist und die Tür so richtig zugeknallt hat. Danach hab’ ich aber nichts mehr gehört."');
    await ƒS.Speech.tell(characters.Evarius, '"Die ist bestimmt irgendwo! Kann ich jetzt hochgehen?"');

    await ƒS.Speech.tell(characters.Mama, '"Meinetwegen. Nachher gibt es aber Essen!"');
    await ƒS.Speech.tell(characters.maincharacter, '"Aber was mit Kailani?"');

    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_smile, ƒS.positionPercent(55, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mutti, '"Wir warten noch ein bisschen ab. Es kann sein, dass sie nur spazieren gegangen ist, meinst du nicht?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Warum nehmt ihr das nicht ernst?"');
    ƒS.Speech.clear();
    return "04_00_Research Options";

  }
}

