namespace Spiegel_VN {
  export async function Chp03_01_Dressmaker(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp05_Forestpath);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    dataForSave.pickedChp03_Dressmaker = true;

    if (!dataForSave.pickedChp03_ChoresWithKailani) {
      await ƒS.Speech.tell(characters.maincharacter, "Du machst dich auf den Weg zum Schneider. Kailani musstest du zuhause lassen, weil sie sich strikt geweigert hat, mitzukommen. Sie ist sofort auf ihr Zimmer, nachdem ihr wieder zurück wart. Bestimmt wünscht sie sich mit dem Spiegel weit, weit weg von hier.");
      await ƒS.Speech.tell(characters.maincharacter, "Einerseits verstehst du ihr Bedürfnis, sich schöne Dinge anzuschauen. Trotzdem machst du dir Sorgen. Dass sie in letzter Zeit öfter schlecht gelaunt ist, ist normal in dem Alter. Jetzt wo du aber darüber nachdenkst, fällt dir auf, dass sie seit dem Marktbesuch letzten Samstag besonders bedrückt ist. Hat das etwa mit dem Spiegel zu tun?");
    }

    if (dataForSave.pickedChp03_ChoresWithKailani) {
      await ƒS.Speech.tell(characters.maincharacter, "Du machst dich auf den Weg zum Schneider. Kailani musstest du zuhause lassen, weil sie sich strikt geweigert hat, mitzukommen.");
      await ƒS.Speech.tell(characters.maincharacter, "Euer Gespräch vorhin ist nicht so gelaufen, wie du es dir vorgestellt hast. Irgendetwas bedrückt sie doch, aber sie will es nicht erzählen!");
    }

    await ƒS.Location.show(locations.Chp03_01_Dressmaker);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Location.show(locations.Chp03_01_DressmakerMan);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Hallo! Ich wurde geschickt, um unsere Jacken abzuholen. Meine Mutti hat gesagt, sie wären heute fertig?"');
    await ƒS.Speech.tell("Schneider", '"Guten Tag! Ah, die drei Winterjacken. Die sollten ausgelassen werden? Ja, ausgelassen. Ich hatte sie doch neulich herumliegen, Moment …"');
    await ƒS.Speech.tell(characters.maincharacter, "Während du wartest, bemerkst du das zarte Hellgrün, dass sich schon an den Spitzen der Bäume zeigt. Der Frühling kommt!");
    await ƒS.Speech.tell("Schneider", '"Ähem. Ja, genau. Deine Mutti hat sie vorbeigebracht, richtig. Also, es ist so. Ich habe sie noch nicht ganz fertig. Etwas kam dazwischen, weißt du."');
    await ƒS.Speech.tell("Schneider", '"Ich habe einfach so viel zu tun. Ich will mich doch nicht hetzen. Du möchtest sicher, dass sie auch hübsch sind, nicht wahr?"');

    let Chp03DressmakerElementAnswers = {
      iSayNo: "Hauptsache, warm.",
      iSayYes: "Das Aussehen zählt.",
    };

    let Chp03DressmakerElement = await ƒS.Menu.getInput(Chp03DressmakerElementAnswers, "choicesCSSclass");
    switch (Chp03DressmakerElement) {
      case Chp03DressmakerElementAnswers.iSayNo:
        await ƒS.Speech.tell(characters.maincharacter, '"Mir ist das eigentlich egal, wie die Jacke aussieht. Hauptsache, sie ist wieder warm!"');
        break;
      
      case Chp03DressmakerElementAnswers.iSayYes:
        await ƒS.Speech.tell(characters.maincharacter, '"Mir ist das eigentlich egal, wie die Jacke aussieht. Aber für Kailani ist es sicherlich wichtig, dass ihre Winterjacke nicht verfranzt ist."');
        await ƒS.Speech.tell("Schneider", '"Ah, sehr gut! Gut aussehen ist sehr wichtig, ja ja."');
        break;
    }

        await ƒS.Speech.tell("Schneider", '"Dann sind wir uns einig. So viele Aufträge! Und so viele Ablenkungen, ja ja. Ich bin auch nicht mehr so jung wie du!"');
    await ƒS.Speech.tell(characters.maincharacter, '"Das ist in Ordnung. Kann ich sie nächste Woche abholen?"');
      await ƒS.Speech.tell("Schneider", '"Ja, ja ja. Nächste Woche. Bis dahin sind sie auf jeden Fall fertig. Ich rasche, ich rasche! Auf bald!"');

    await ƒS.Location.show(locations.Chp03_01_Dressmaker);
    ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Was für ein komischer Kauz. Es gibt zwar eine andere Schneiderin im Dorf, aber Mutti kennt ihn noch von früher. Was macht er denn den ganzen Tag? So viel kann er gar nicht zu tun haben, weil die meisten Leute ihre Kleider woanders hinbringen. Wirklich seltsam.");

    return "03_00 New day";
  }
}
