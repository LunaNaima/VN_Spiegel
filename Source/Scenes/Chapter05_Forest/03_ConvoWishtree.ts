namespace Spiegel_VN {
  export async function Chp05_02_ConvoTree(): ƒS.SceneReturn {

  
    let Chp05ConvoTreeElementAnswers = {
      iSayInner: "(Erkunden) Sein Innerstes?",
      iSaySick: "(Erkunden) Wie werden sie krank?",
      iSayFree: "(Erkunden) Wie kann Kailani befreit werden?",
      iSayRiddleWords: "Die Rätselwörter!",
    };

    if (
      !dataForSave.pickedChp05Inner ||
      !dataForSave.pickedChp05Sick ||
      !dataForSave.pickedChp05Free
    ) {
      delete Chp05ConvoTreeElementAnswers.iSayRiddleWords;
    }
    let Chp05ConvoTreeElement = await ƒS.Menu.getInput(Chp05ConvoTreeElementAnswers, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp05ConvoTreeElement) {
      case Chp05ConvoTreeElementAnswers.iSayInner:
        dataForSave.pickedChp05Inner = true;
        await ƒS.Speech.tell(characters.wishtree, '"Ja, sie werden in den Spiegel hineingesogen. In dieser Spiegelwelt werden sie als Sklaven gehalten."');
        ƒS.Speech.clear();
        return "05_02 Convo Tree";
        break;

      case Chp05ConvoTreeElementAnswers.iSaySick:
        dataForSave.pickedChp05Sick = true;
        await ƒS.Speech.tell(characters.wishtree, '"Die Erkrankten zeigen unterschiedliche Symptome. Sie sind bedrückt und: sie verlieren ihre Farbe. Sie werden also grau."');
        ƒS.Speech.clear();
        return "05_02 Convo Tree";
        break;
      
      case Chp05ConvoTreeElementAnswers.iSayFree:
        dataForSave.pickedChp05Free = true;
        await ƒS.Speech.tell(characters.wishtree, '"Die Spiegel haben eine weitere, heute unbekannte Funktion. Sie wurden ursprünglich als Reisemöglichkeit hergestellt. Du kannst mit dem Handspiegel, dem Kailani verfallen ist, in die Spiegelwelt reisen."');
        ƒS.Speech.clear();
        return "05_02 Convo Tree";
        break;
      
      case Chp05ConvoTreeElementAnswers.iSayRiddleWords:
        await ƒS.Speech.tell(characters.wishtree, '"Kannst du erraten, wie du sie retten kannst?"');
        ƒS.Speech.clear();
        break;
    }
  
    await ƒS.Speech.tell(characters.maincharacter, "Ich muss mich um Mitternacht mit dem Spiegel an einen Fluss begeben!");
    await ƒS.Speech.tell(characters.wishtree, '"Das ist richtig. Reisen kannst du nur, wenn du dich in einer dunklen Nacht mit hellem Mondschein um 12 Uhr an ein Gewässer begibst. Sprich den Zauberspruch und halte den Spiegel parallel zum Gewässer, damit sich der Mond darin spiegelt."');
    await ƒS.Speech.tell(characters.maincharacter, "Wie ist denn der Zauberspruch?");
    await ƒS.Speech.tell(characters.wishtree, '"Der Spruch lautet: Spieglein, Spieglein, weise mir mein Weglein. Danach sprichst du dein Reiseziel aus."');
    await ƒS.Speech.tell(characters.wishtree, '"Ich weiß, dass du Angst hast. Um dich bei deiner Reise zu unterstützen …"');

    await ƒS.Sound.fade(soundeffects.birds, 0.1, 1, true);
    await ƒS.Location.show(locations.Chp05_WishtreeBirds);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.wishtree, '"… habe ich einige Freunde gerufen. Sie begleiten dich auf deinem Weg in die andere Welt. Dazu musst du sie aber an dich binden."');
    await ƒS.Speech.tell(characters.maincharacter, "Wie willst du dich mit ihnen verbinden?");

    let Chp05ConvoTreeElementAnswers2 = {
      iSaySing: "Zu Vögeln singen",
      iSayFeed: "Füttern",
    };

    let Chp05ConvoTreeElement2 = await ƒS.Menu.getInput(Chp05ConvoTreeElementAnswers2, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp05ConvoTreeElement2) {
      case Chp05ConvoTreeElementAnswers2.iSaySing:
        await ƒS.Speech.tell(characters.maincharacter, "Du nimmst allen Mut zusammen und beginnst mit wackeliger Stimme das Schlaflied ‘Gute Nacht, kleiner Igel’ zu singen, dass du Kailani und Evarius, als sie noch klein waren, vorgesungen hast.");
        ƒS.Speech.clear();
        break;
      
      case Chp05ConvoTreeElementAnswers2.iSayFeed:
        if (dataForSave.pickedSeeds) {
          await ƒS.Speech.tell(characters.maincharacter, "Du greifst in deine Tasche und wirfst den Vögeln die Sonnenblumenkerne hin. Sie fliegen um dich herum und zirpen fröhlich."); 
        } else {
          await ƒS.Speech.tell(characters.maincharacter, "Leider hast du deine übrigen Sonnenblumenkerne im Garten verpflanzt. "); 

        }
        await ƒS.Speech.tell(characters.maincharacter, "Du nimmst allen Mut zusammen und beginnst mit wackeliger Stimme das Schlaflied ‘Gute Nacht, kleiner Igel’ zu singen, dass du Kailani und Evarius, als sie noch klein waren, vorgesungen hast.");
        ƒS.Speech.clear();
        break;
    }
        await ƒS.Speech.tell(characters.maincharacter, "Das war eine gute, ehrliche Bindung. Sie werden dich nun begleiten und dir stets zur Seite stehen. Die Reise wird nicht einfach. Denke daran, dass in der Spiegelwelt nicht alles so ist, wie es scheint. Ein letzter Hinweis noch: Ehrliches Material führt dein Herz zum Ziel.");
        await ƒS.Speech.tell(characters.maincharacter, "Nun muss ich eine Weile ruhen, bevor ich wieder erwachen kann. Diese Begegnung hat mich sehr viel Kraft gekostet …");
    ƒS.Sound.fade(soundeffects.birds, 0, 0, false);
        ƒS.Sound.fade(soundeffects.forest, 0, 0, false);

    ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Der Wind, der durch die Blätter raschelte, klingt ab. Die Vögel sind verschwunden. Auf einmal ist es sehr ruhig und du bemerkst erst jetzt, welch ungeheure Kraft dir der Baum gab.");

    let Chp05ConvoTreeElementAnswers3 = {
      iSayHello: "Hallo?",
      iSayQuestions: "Ich habe noch so viele Fragen!",
      iSayNeed: "Ich brauche Sie!",
    };

    let Chp05ConvoTreeElement3 = await ƒS.Menu.getInput(Chp05ConvoTreeElementAnswers3, "choicesCSSclass");
      await ƒS.Speech.tell(characters.maincharacter, "Der Wald schweigt. Du seufzt und drehst dich um. Es ist schon spät geworden. Mit einem Blick nach oben registrierst du, dass es Vollmond ist. Was hatte der Baum gesagt? In einer dunklen Nacht bei hellstem Mondlicht? Dir dämmert, dass die Zeit für die Abreise naht.");
      await ƒS.Speech.tell(characters.maincharacter, "Langsam trittst du deinen Heimweg an. Ist Kailani wirklich in dem Spiegel gefangen? Leidet sie? Wie sieht die Welt dort aus? Was muss ich mitnehmen? Wie komme ich zurück? Komme ich jemals zurück … ?");

    return "05_ConvoMother";
  }
}
