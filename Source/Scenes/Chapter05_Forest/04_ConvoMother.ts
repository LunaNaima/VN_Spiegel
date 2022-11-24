namespace Spiegel_VN {
  export async function Chp05_ConvoMother(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_02_LivingRoomNight);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Du schleichst dich leise herein. Bestimmt schlafen alle schon.");
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_neutral, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mama, '""' + dataForSave.nameProtagonist + '"?"');
    await ƒS.Speech.tell(characters.maincharacter, "Du erschrickst. Mama kommt die Treppe hinunter.");
    await ƒS.Speech.tell(characters.Mama, '"Wo warst du denn? Wir haben uns Sorgen gemacht!"');
    await ƒS.Speech.tell(characters.maincharacter, '"Es tut mir leid … Mama, ich muss gehen. Bitte sag Mutti und Evarius Bescheid."');

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_angry2, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mama, '"Mitten in der Nacht gehst du nirgends hin. Komm, wir besprechen das morgen!"');
    await ƒS.Speech.tell(characters.maincharacter, '"Du verstehst nicht, ich muss Kailani retten!"');
    await ƒS.Speech.tell(characters.Mama, '"Aber du kannst nicht einfach so losziehen!"');

    let Chp05ConvoMotherElementAnswers = {
      iSayLie: "Lügen",
      iSayDistract: "Ablenken",
      iSayExplain: "Erklären"
    };

    let Chp05PickSceneElement = await ƒS.Menu.getInput(Chp05ConvoMotherElementAnswers, "choicesCSSclass");

    switch (Chp05PickSceneElement) {
      case Chp05ConvoMotherElementAnswers.iSayLie:
        await ƒS.Speech.tell(characters.maincharacter, '"Ich habe gehört, Kailani wurde in Ulaser gesehen. Das liegt einige -"');
        await ƒS.Speech.tell(characters.Mama, '"Ich weiß, wo das liegt. Wir fahren morgen zusammen hin und schauen nach, in Ordnung ?"');
        await ƒS.Speech.tell(characters.maincharacter, '"Nein, ich muss allein los!"');
        ƒS.Speech.clear();
        break;

      case Chp05ConvoMotherElementAnswers.iSayDistract:
        await ƒS.Speech.tell(characters.maincharacter, '"Was habt ihr denn im Dorf herausgefunden?"');
        await ƒS.Speech.tell(characters.Mama, '"Nicht viel, niemand hat Kailani gesehen. Komm jetzt ins Bett!"');
        await ƒS.Speech.tell(characters.maincharacter, '"Nein, ich muss jetzt los ..."');
        ƒS.Speech.clear();
        break;

      case Chp05ConvoMotherElementAnswers.iSayExplain:
        await ƒS.Speech.tell(characters.maincharacter, '"Kailani ist in dem Spiegel gefangen! Ich muss dorthin reisen, sie rausholen und –"');
        await ƒS.Speech.tell(characters.Mama, '"Schon wieder dieser Spiegel! Woher willst du das wissen? Wir sind doch nicht im Märchen! Auf ins Bett jetzt."');
        await ƒS.Speech.tell(characters.maincharacter, '"Ich muss aber los, Mama!"');
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Speech.tell(characters.maincharacter, '"Bitte glaub’ und vertrau’ mir doch, Mama! Ich bin kein Kind mehr und weiß, was ich tue. Nur weil du es nicht mitkriegst, heißt es nicht, dass ich nicht erwachsen werde!"');

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_shocked, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.maincharacter, "Mama schweigt und du erkennst, dass du sie verletzt hast.");
    await ƒS.Speech.tell(characters.maincharacter, '"Es tut mir leid, das wollte ich nicht –"');

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_hand_neutral, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mama, '"Du hast recht. Ich sehe dich noch als Kind, und nicht als starke und mutige Person."');
    await ƒS.Speech.tell(characters.Mama, '"Wenn du unbedingt gehen willst, dann tu es. Ich vertraue dir, in Ordnung? Aber bitte komme zurück, Liebling."');
    await ƒS.Speech.tell(characters.Mama, '"Hier, nimm meine Hufeisen-Halskette. Sie wird dir Glück bringen und dir den Weg zeigen, falls du dich heute Nacht verirrst."');

    let Chp05ConvoMotherElementAnswers2 = {
      iSayTake: "Annehmen",
      iSayRefuse: "Nicht annehmen"
    };

    let Chp05PickSceneElement2 = await ƒS.Menu.getInput(Chp05ConvoMotherElementAnswers2, "choicesCSSclass");

    switch (Chp05PickSceneElement2) {
      case Chp05ConvoMotherElementAnswers2.iSayTake:
        dataForSave.pickedIron = true;
        await ƒS.Speech.tell(characters.maincharacter, '"Vielen Dank, Mama. Ich weiß, dass sie dir viel bedeutet."');
        ƒS.Speech.clear();
        break;

      case Chp05ConvoMotherElementAnswers2.iSayRefuse:
        await ƒS.Speech.tell(characters.maincharacter, '"Deine Halskette ist dein Ein und Alles! Die kann ich nicht annehmen."');
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Speech.tell(characters.maincharacter, '"Ich bin bald wieder da und bringe Kailani nach Hause."');
    await ƒS.Speech.tell(characters.Mama, '"Bitte pass’ auf dich auf. Wir warten auf euch!"');
    ƒS.Character.hideAll();
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Ein leiser Schluchzer dringt durch das dunkle Zimmer, als sie die Treppen wieder hinauf geht.");
    await ƒS.Speech.tell(characters.maincharacter, "Das Geräusch tut dir im Herzen weh. Dir kommt das alles surreal vor. Aber packen solltest du trotzdem. Was willst du mitnehmen? Du kannst nur eine Sache einpacken!");


    let Chp05ConvoMotherElementAnswers3 = {
      iSaySeeds: "Sonnenblumenkerne",
      iSayFood: "Vesper",
      iSayCloak: "Dunkler Umhang"

    };

    let Chp05PickSceneElement3 = await ƒS.Menu.getInput(Chp05ConvoMotherElementAnswers3, "choicesCSSclass");

    switch (Chp05PickSceneElement3) {
      case Chp05ConvoMotherElementAnswers3.iSaySeeds:
        dataForSave.pickedChp05Seeds = true;
        await ƒS.Speech.tell(characters.maincharacter, "Mit den Kernen kannst du die Vögel anlocken. Gute Entscheidung!");
        ƒS.Speech.clear();
        break;

      case Chp05ConvoMotherElementAnswers3.iSayFood:
        dataForSave.pickedChp05Food = true;
        await ƒS.Speech.tell(characters.maincharacter, "Etwas zu essen ist immer eine gute Idee.");
        ƒS.Speech.clear();
        break;

      case Chp05ConvoMotherElementAnswers3.iSayCloak:
        dataForSave.pickedChp05Cloak = true;
        await ƒS.Speech.tell(characters.maincharacter, "Vielleicht ist es in der Spiegelwelt kalt, oder du willst unentdeckt bleiben? Eine gute Wahl.");
        ƒS.Speech.clear();
        break;

    }

    await ƒS.Speech.tell(characters.maincharacter, "Die Kirchenglocken im Dorf schlagen 23 Uhr. Bevor du den Mut verlierst, drehst du dich um und verlässt das Haus.");
    await ƒS.Location.show(locations.Chp01_CS_ArrivalHomeNight);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Du schwörst dir, zurückzukommen, zurück nach Hause.");

    await ƒS.Location.show(locations.Chp05_Forestpath);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Der Wald ist still. Das Knacken deiner Schuhe auf Ästen ist das einzige Geräusch, das du hörst.");

    await ƒS.Location.show(locations.Chp05_River);
    ƒS.Sound.fade(soundeffects.water, 0.5, 1, false);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);


    await ƒS.Speech.tell(characters.maincharacter, "Beim Fluss angekommen, hältst du an. Du ziehst den Spiegel aus deiner Tasche und schaust hinein. Er ist immer noch blank.");
    await ƒS.Speech.tell(characters.maincharacter, "Mit dem Spiegel gerüstet kniest du dich an das Flussufer. Du versuchst, das Spiegelbild des Mondes im Wasser damit einzufangen. Wie soll das denn gehen, wenn der Spiegel blank ist?");
    await ƒS.Speech.tell(characters.maincharacter, "Doch plötzlich blitzt es auf: der Mond ist nun auch im Handspiegel zu sehen. Dort glitzert er ebenso so schön wie auf dem Wasser und am Himmel. Wie ging der Spruch nochmal?");

    let Chp05ConvoMotherElementAnswers4 = {
      iSaySpell: "Spieglein, Spieglein, weise mir mein Weglein"
    };

    // let Chp05PickSceneElement4 =
    await ƒS.Menu.getInput(Chp05ConvoMotherElementAnswers4, "choicesCSSclass");

    await ƒS.Speech.tell(characters.maincharacter, '"Ich wünsche mir, in die Spiegelwelt zu reisen!"');
    await ƒS.Location.show(locations.black);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);


    return "06_CS Arrival Meadow";
  }
}
