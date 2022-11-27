namespace Spiegel_VN {
  export async function Chp07_TalkToInnkeeper(): ƒS.SceneReturn {
    dataForSave.pickedChp07TalkToInnkeeper = true;

    let Chp07InnkeeperElementAnswers = {
      iSayBeg: "Bettelnd",
      iSayAngry: "Verärgert",
      iSayDesperate: "Verzweifelt"
    };

    let Chp07InnkeeperElement = await ƒS.Menu.getInput(Chp07InnkeeperElementAnswers, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp07InnkeeperElement) {
      case Chp07InnkeeperElementAnswers.iSayBeg:

        await ƒS.Speech.tell(characters.maincharacter, '"Bitte hören Sie mir zu! Meine Schwester ist weg! Ich brauche dringend Ihre Hilfe! Haben Sie sie gesehen?"');
        await ƒS.Speech.tell(characters.Innkeeper, '"Sorry, gerade is’ es echt schlecht. Komm’ doch später nochmal runter."');
        ƒS.Speech.clear();
        return "07_TalkToInnkeeper";
        break;

      case Chp07InnkeeperElementAnswers.iSayAngry:
        await ƒS.Speech.tell(characters.maincharacter, '"Dafür nehmen Sie sich jetzt Zeit! Ich bin auf der Suche nach meiner Schwester. Stellen Sie sich mal vor, eines Ihrer Familienmitglieder wäre einfach weg. Wie würden Sie reagieren?"');

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Innkeeper, characters.Innkeeper.pose.pos2_smile, ƒS.positionPercent(70, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.Innkeeper, '"Ist ja gut. Also. Ich seh’ hier jeden Tag viele Mädchen. Beschreib’ sie doch mal genauer."');

        await ƒS.Speech.tell(characters.maincharacter, "Froh, endlich Gehör bei der Wirtin gefunden zu haben, erzählst du ihr (beinahe) die ganze Geschichte. Von Kailanis komischen Stimmungen und dem Spiegel. Als du bei der Farblosigkeit angekommen bist, unterbricht sie dich.");

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Innkeeper, characters.Innkeeper.pose.pos1_worried, ƒS.positionPercent(70, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.Innkeeper, '"Sie war grau? Bis’ du dir da sicher? Hm, …"');
        await ƒS.Speech.tell(characters.Innkeeper, '"Hör’ zu. Es is’ nämlich so, dass wir hier ein kleines Farbenproblem haben, Vielleicht is’ dir das auch schon aufgefallen?"');
        // await ƒS.Speech.tell(characters.maincharacter, "Du nickst schnell und holst tief Luft, um weiterzusprechen. Die Wirtin unterbricht dich.");

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Innkeeper, characters.Innkeeper.pose.pos2_neutral, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Innkeeper, '"Das mit den Farben … is’ alles nich’ so einfach, ne. Wir waren früher alle grau. Das kannste dir jetzt gar nicht vorstellen. Aber so war’s! Dann kam, so nach und nach, ein bisschen Farbe in die Pflanzen. Wie schön das war, die farbigen Blumen das erste Mal zu sehen!"');
        await ƒS.Speech.tell(characters.Innkeeper, '"Naja, dann hat sich etwas im Palast getan. Auf einmal gab’ es auch Menschen, die farbig waren! Wie wir alle gestaunt haben, kannste dir nich’ vorstellen. Die trugen gelben Hemden und rosa Haare und sonstigen Schnickschnack. Zuerst hatten die Reichen die meisten Farben. Dann sickerte es irgendwie zu uns ‘runter."');
        await ƒS.Speech.tell(characters.Innkeeper, '"Wie du siehst, mach’ ich da mittlerweile nich’ mehr so mit. Mir gefällt’s, wenn’s bisschen natürlicher is’. Aber diese ganze Farbe, die muss  ja von irgendwo herkommen, ne? Das darf man nich’ so laut fragen. Die haben das gar nich’ gern, wenn man danach fragt."');

        ƒS.Speech.clear();
        break;


      case Chp07InnkeeperElementAnswers.iSayDesperate:
        await ƒS.Speech.tell(characters.maincharacter, '"Ich bin völlig verzweifelt … ich suche meine Schwester und weiß einfach nicht mehr weiter ... können Sie mir helfen?"');
        await ƒS.Speech.tell(characters.Innkeeper, '"Ich werd’ gerade vom Koch gerufen.  Komm’ doch später nochmal runter."');
        ƒS.Speech.clear();
        return "07_TalkToInnkeeper";
        break;
    }

    do {
      let Chp07InnkeeperElementAnswers2 = {
        iSayColor: '"(Erkunden) Woher kommt die Farbe?"',
        iSayGrey: '"(Erkunden)  Kailani war auch grau"',
        iSayWhatHappened: '"(Erkunden) Was, denken Sie, ist mit Kailani geschehen?"',
        iSayContinue: "Weiter"
      };

      let Chp07InnkeeperElement2 = await ƒS.Menu.getInput(Chp07InnkeeperElementAnswers2, "choicesCSSclass");

      // *** RESPONSES ***
      switch (Chp07InnkeeperElement2) {
        case Chp07InnkeeperElementAnswers2.iSayColor:
          dataForSave.pickedChp07pickedColor = true;
          await ƒS.Speech.tell(characters.Innkeeper, '"Sach’ ich doch gerade, darf man nich’ sagen! Ich hab’ so meine Vermutungen. Vielleicht wird die Farbe von anderen Menschen geklaut, das weiß ich wirklich nich."');
          ƒS.Speech.clear();
          break;

        case Chp07InnkeeperElementAnswers2.iSayGrey:
          dataForSave.pickedChp07pickedGrey = true;
          await ƒS.Speech.tell(characters.maincharacter, '"Kailani war auch so farblos, bevor sie verschwunden ist!"');
          await ƒS.Speech.tell(characters.Innkeeper, '"Deshalb mein’ ich ja, es kann sein, dass ihr Verschwinden mit der Farbe zu tun hat. Weil dann is’ sie auf jeden Fall hier in der Stadt. Weil von hier aus verbreitet sich die Farbe."');
          ƒS.Speech.clear();
          break;

        case Chp07InnkeeperElementAnswers2.iSayWhatHappened:
          dataForSave.pickedChp07pickedWhatHappened = true;
          await ƒS.Speech.tell(characters.Innkeeper, '"Ich weiß es doch nich’ … ich denk’, sie is’ hier. Du bis’ schon am richtigen Ort zum Suchen. Aber mehr weiß ich leider nich´."');
          ƒS.Speech.clear();
          break;

        case Chp07InnkeeperElementAnswers2.iSayContinue:
          dataForSave.pickedChp07Continue = true;
          await ƒS.Speech.tell(characters.Innkeeper, '"Vielen Dank, dass Sie sich Zeit genommen haben!"');
          ƒS.Speech.clear();
          break;
      }
    } while (!dataForSave.pickedChp07Continue);

    ƒS.Character.hideAll();
    return "06_new day";
  }
}
