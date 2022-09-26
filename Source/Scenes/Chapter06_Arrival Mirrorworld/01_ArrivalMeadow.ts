namespace Spiegel_VN {
  export async function Chp06_CS_ArrivalMeadow(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp06_ArrivalMeadow);
    ƒS.Character.hideAll();
    ƒS.Sound.fade(music.theme_ordinaryworld, 0, 0, false);
        ƒS.Sound.fade(music.theme_mirrorworld_whary, 0.8, 1, true);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Du öffnest die Augen und blinzelst in der frühen Morgensonne. Rasch setzt du dich auf und kannst deinen Augen nicht trauen. Alles ist so farbig! Du staunst über kräftige Rot-, Grün und Blautöne. Von daheim kennst du so etwas gar nicht.");

    do {
      let Chp06ArrivalMeadowElementAnswers = {
        iSayFlowers: "(Erkunden) Blumen anschauen",
        iSayLeave: "Auf den Weg machen",
      };

      let Chp06ArrivalMeadowElement = await ƒS.Menu.getInput(Chp06ArrivalMeadowElementAnswers, "choicesCSSclass");

      switch (Chp06ArrivalMeadowElement) {
        case Chp06ArrivalMeadowElementAnswers.iSayFlowers:
          await ƒS.Location.show(locations.Chp06_ArrivalMeadowFlowers);
          await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
          await ƒS.Speech.tell(characters.maincharacter, "Diese hübschen Blumen musst du dir genauer anschauen. Aber als du sie anfasst, zerbröseln sie zu Staub. Das ist ja seltsam.");
          await ƒS.Location.show(locations.Chp06_ArrivalMeadow);
          await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
          ƒS.Speech.clear();
          break;
      
        case Chp06ArrivalMeadowElementAnswers.iSayLeave:
          dataForSave.pickedChp06Leave = true;
          await ƒS.Speech.tell(characters.maincharacter, "Du rappelst dich auf. Neben dir liegt ein See, und auf der anderen Seite eine Straße.");
          await ƒS.Location.show(locations.Chp06_StreetToWhary);
          await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
          await ƒS.Speech.tell(characters.maincharacter, "In der Ferne glitzert etwas und du siehst Leute, die sich vor großen Stadttoren bewegen. Die Richtung sieht zumindest richtig aus. Du machst dich auf den Weg. Nebenbei bemerkst du die grellen, saftgrünen Bäume rechts und links. Auch wenn die Welt sonst so aussieht, wie deine eigene: an die satten Farben musst du dich erst gewöhnen.");
      }
    } while (!dataForSave.pickedChp06Leave);

    await ƒS.Location.show(locations.Chp06_CityGates);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Als du vor den Toren ankommst, bildet sich trotz des frühen Morgens davor bereits eine Schlange. Stimmen, Hufgeklapper und das Scheppern von Kisten, die die Leute auf ihren Wägen gestapelt haben, tönen durch die Luft.");
    await ƒS.Speech.tell(characters.maincharacter, "Dir bleibt nichts anderen übrig, als dich auch anzustellen. Während du wartest, beobachtest du die anderen Menschen. Die meisten von ihnen tragen satte, glitzernde Klamotten. Sind hier etwa alle reich? Und wieso sieht es so aus, als wären die Klamotten an manchen Stellen ausgepolstert?");

    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_happy, ƒS.positionPercent(70, 100))
    ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Hi! Du siehst so aus, als hättest du eine weite Reise hinter dir. Von wo kommst du denn?"');

    let Chp06EntryGatesElementAnswers = {
      iSayLie: "Lügen",
      iSayDistract: "Ablenken",
      iSayTruth: "Die Wahrheit sagen",
      iSaySilent: "Schweigen",

    };

    let Chp06EntryGatesElement = await ƒS.Menu.getInput(Chp06EntryGatesElementAnswers, "choicesCSSclass");

    switch (Chp06EntryGatesElement) {
      case Chp06EntryGatesElementAnswers.iSayLie:
        await ƒS.Speech.tell(characters.maincharacter, '"Eh– stimmt gar nicht! Ich wohne hier um die Ecke, in dem Dorf da hinten. Wer bist du überhaupt?"');
        await ƒS.Speech.tell(characters.maincharacter, "Du gestikulierst wage in die rechte Richtung. Der Fremde hebt die Augenbrauen.");
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_smile, ƒS.positionPercent(70, 100))
        ƒS.update();

        await ƒS.Speech.tell(characters.Flynn, '"So so. Du willst es mir nicht sagen. Na gut. Vielleicht erzähle ich erst etwas über mich."');

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_happy2, ƒS.positionPercent(70, 100))
        ƒS.update();

        await ƒS.Speech.tell(characters.Flynn, '"Ich bin Flynn! Und nach Whary gereist, um eine Ausbildung als Glasmacher zu beginnen. Aber jetzt bist du wieder dran."');
        ƒS.Speech.clear();
        break;
      
      case Chp06EntryGatesElementAnswers.iSayDistract:
        await ƒS.Speech.tell(characters.maincharacter, '"Du fragst mich einfach etwas, ohne dich selbst vorzustellen?"');

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_happy2, ƒS.positionPercent(70, 100))
        ƒS.update();

        await ƒS.Speech.tell(characters.Flynn, '"Du hast ja recht! Ich bin Flynn! Und nach Whary gereist, um eine Ausbildung als Glasmacher zu beginnen. Aber jetzt bist du wieder dran."');
        ƒS.Speech.clear();
        break;
      
      case Chp06EntryGatesElementAnswers.iSayTruth:
        await ƒS.Speech.tell(characters.maincharacter, '"Ehrlich gesagt, komme ich sogar von sehr weit weg. Ich bin aus einer anderen Welt hierhergereist, um meine Schwester zu finden."');

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_happy2, ƒS.positionPercent(70, 100))
        ƒS.update();

        await ƒS.Speech.tell(characters.Flynn, '"Aus einer anderen Welt? Ha! So habe ich Whary noch nie gesehen, als ‘andere Welt’. Heißt, du warst noch nie in der großen Stadt! Ui ui ui. Ich kann dir so vieles zeigen!"');
        ƒS.Speech.clear();
        break;
      
      case Chp06EntryGatesElementAnswers.iSaySilent:
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_smile, ƒS.positionPercent(70, 100))
        ƒS.update();

        await ƒS.Speech.tell(characters.Flynn, "So so. Du willst es mir nicht sagen. Na gut. Vielleicht erzähle ich erst etwas über mich.");

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_happy2, ƒS.positionPercent(70, 100))
        ƒS.update();

        await ƒS.Speech.tell(characters.Flynn, '"Ich bin Flynn! Und nach Whary gereist, um eine Ausbildung als Glasmacher zu beginnen. Aber jetzt bist du wieder dran."');
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Speech.tell(characters.Flynn, '"Wie heißt du denn?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Ich bin"' + dataForSave.nameProtagonist);
    await ƒS.Speech.tell(characters.Flynn, '"Freut mich!"');

    await ƒS.Speech.tell(characters.maincharacter, "Während Flynn munter weiter plappert, schaust du ihn leicht irritiert, aber auch neugierig von der Seite an. Eigentlich sieht er aus wie ein normaler Junge. Bist du wirklich am richtigen Ort? Und wieso hat er ausgerechnet dich angequatscht?");
    await ƒS.Speech.tell(characters.maincharacter, "Ihr passiert die Tore ohne Probleme. Die Wachen beobachten die Menge aufmerksam, aber ihr fallt – zum Glück! – nicht auf.");
    await ƒS.Speech.tell(characters.maincharacter, "Allerdings bemerkst du die Blicke der Leute. Ihre Blicke bleiben an deinen alten Stiefeln und dem braunen Hemd, dass du über einer ausgeblichenen Hose trägst, hängen. Wie fühlst du dich?");

    let Chp06EntryGatesElementAnswers2 = {
      iSayShame: "Beschämt",
      iSayDontCare: "Gleichgültig",
      iSayAngry: "Verärgert",
    };

    let Chp06EntryGatesElement2 = await ƒS.Menu.getInput(Chp06EntryGatesElementAnswers2, "choicesCSSclass");

    switch (Chp06EntryGatesElement2) {
      case Chp06EntryGatesElementAnswers2.iSayShame:
    await ƒS.Speech.tell(characters.maincharacter, "Du senkst den Kopf und schaust beschämt zu Boden. Natürlich passt du hier mit deinen Dorfklamotten nicht rein.");
ƒS.Speech.clear();
        break;
      
      case Chp06EntryGatesElementAnswers2.iSayDontCare:
    await ƒS.Speech.tell(characters.maincharacter, "Sollen die Leute schauen, mir doch egal!");
ƒS.Speech.clear();
        break;
      
      case Chp06EntryGatesElementAnswers2.iSayAngry:
    await ƒS.Speech.tell(characters.maincharacter, "Was fällt denen ein? Es sieht eben nicht jede Person gleich aus. Wütend schaust du zurück, bis die Leute sich abwenden.");
ƒS.Speech.clear();
        break;
        
    }

    await ƒS.Location.show(locations.Chp06_InWharyPeople);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.Flynn, '"Ich merke schon, du bist ziemlich abgelenkt. Hast du mir überhaupt zugehört? Echt unhöflich! Aber gut. Wir sind in Whary! Willkommen! Was hast du denn jetzt vor?"');

    
  }
}
