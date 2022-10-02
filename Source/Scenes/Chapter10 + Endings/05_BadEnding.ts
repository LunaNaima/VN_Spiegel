namespace Spiegel_VN {
  export async function BadEnding(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp10_Demontunnel);
    await ƒS.Character.show(characters.Demon, characters.Demon.pose.pos2_angry, ƒS.positionPercent(100, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Demon, "Haha! Ihr wolltet mich reinlegen. So einfach überlistet mich aber niemand! Nicht den Großen Georigus der Unterwelt! Jetzt hab’ ich euch.");
    await ƒS.Location.show(locations.Chp09_InFactory);
    await ƒS.Speech.tell(characters.maincharacter, "Nein! Der Dämon hat euch gefangen und in die Fabrik gesteckt. Kannst du vielleicht ausbrechen? Oder zuerst Kailani finden?");
    
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_shocked, ƒS.positionPercent(70, 100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.Flynn, '"Ich muss dir etwas gestehen, bevor wir hier bis an unser Lebensende schuften müssen …"');
    await ƒS.Speech.tell(characters.Flynn, '"... ich wurde von meiner Heimat geschickt, um die Spiegeltechnologie zu stehlen."');
    await ƒS.Speech.tell(characters.maincharacter, "Flynns Stimme wird leise. Du starrst ihn schockiert an.");

do {
      let Chp10GoodEndingElementAnswers3 = {
        iSayUsed: '"(Erkunden) Du hast mich also nur benutzt?"',
        iSayHome: "(Erkunden) Wo ist deine Heimat?",
        iSayTechnology: "Wozu die Technologie stehlen?",
        iSayContinue: "Weiter"
      };
      let Chp10GoodEndingElement3 = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers3, "choicesCSSclass");

      switch (Chp10GoodEndingElement3) {
        case Chp10GoodEndingElementAnswers3.iSayUsed:
          await ƒS.Speech.tell(characters.maincharacter, '"Du hast gedacht, ich wäre ein gutes Mittel zum Zweck? Flynn, ich bin so enttäuscht!"');
          await ƒS.Speech.tell(characters.Flynn, '"Es tut mir wirklich leid …"');
          ƒS.Speech.clear();
          break;
        
        case Chp10GoodEndingElementAnswers3.iSayHome:
          await ƒS.Speech.tell(characters.maincharacter, '"Von wo kommst du denn?"');
          ƒS.Character.hide(characters.Flynn);
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_angry, ƒS.positionPercent(70, 100));
          ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Ich komme von einer Welt namens Valde. Dort lebe ich in einer großen Stadt und habe die Mission erhalten, die Spiegeltechnologie von dieser Welt, Norovia, zu klauen."');
          await ƒS.Speech.tell(characters.maincharacter, "Dein Kopf schwirrt. Es gibt mehr Welten als nur deine und die Spiegelwelt? Flynn scheint deine Frage schon zu ahnen.");
          await ƒS.Speech.tell(characters.Flynn, '"Es gibt nämlich sieben verschiedene Welten! Erinnerst du dich an die sechs Spiegel im Spiegelzimmer? Das waren die Verbindungen zu den Welten."');
          ƒS.Speech.clear();
          break;
        
        case Chp10GoodEndingElementAnswers3.iSayTechnology:
          dataForSave.pickedChp10GoodEndingContinue2 = true;
          await ƒS.Speech.tell(characters.maincharacter, '"Und die Spiegeltechnologie willst du klauen, weil …?"');
          ƒS.Character.hide(characters.Flynn);
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_skeptical, ƒS.positionPercent(70, 100));
          ƒS.update();

          await ƒS.Speech.tell(characters.Flynn, '"Mir wurde beauftragt, die Technologie mitzubringen. Damit wir in Varunomo, meiner Stadt, die Farbe benutzen können"');
          await ƒS.Speech.tell(characters.maincharacter, "Dein Kopf schwirrt. Es gibt mehr Welten als nur deine und die Spiegelwelt? Flynn scheint deine Frage schon zu ahnen.");
          await ƒS.Speech.tell(characters.Flynn, '"Es gibt nämlich sieben verschiedene Welten! Erinnerst du dich an die sechs Spiegel im Spiegelzimmer? Das waren die Verbindungen zu den Welten."');
          ƒS.Speech.clear();
          break;
      }
    } while (!dataForSave.pickedChp10BadEndingContinue2)

    await ƒS.Speech.tell(characters.maincharacter, "Aber bevor du mehr fragen kannst, erzählt Flynn weiter. Die Worte sprudeln nur so aus ihm heraus, und du hast den Eindruck, ihm fällt eine große Last von den Schultern.");

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_confused_sad, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Weißt du, ich wurde meinen Eltern als Kind weggenommen und in einem Trainingscamp zum Spion erzogen. Ich war in einem Lager mit lauter Jungs wie mich, die auch aufgekauft wurden. Und als ich diese Mission erhielt, war das für mich wie ein Ritterschlag! Ich durfte mich das erste Mal beweisen! Wie soll ich denn mit leeren Händen zurück? Das müsst ihr doch verstehen."');
    
    await ƒS.Speech.tell(characters.maincharacter, "Offensichtlich kämpft Flynn mit unterschiedlichen Gefühlen. Er ist sichtlich betroffen.");
    await ƒS.Speech.tell(characters.Flynn, '"Der Spiegel bringt nur Leid! Die Regierung in Varunomo will die Farbe aus den anderen Welten saugen und verkaufen. So wird nämlich die Farbe übertragen, mit Gefühlen, versteht ihr? Von der Person, die auf der anderen Seite des Spiegels ist, kann nur Farbe entnommen werden, wenn sie sich schlecht fühlt."');
    await ƒS.Speech.tell(characters.Flynn, '"Deshalb funktioniert die Technologie so, dass zuerst die Menschen traurig werden, wenn sie in den Spiegel schauen. Gleichzeitig sollen sie aber immer öfter reinschauen, damit nach und nach die Farbe entzogen werden kann. So gelangt die Farbe über den Spiegel zu den Menschen und die können sich dann bunt anziehen, wie wir in Whary gesehen haben."');
    await ƒS.Speech.tell(characters.Flynn, '"Da, wo ich herkomme, ist so vieles so anders und doch gleich. Die Überheblichkeit der Leute, das Verurteilen wegen Äußeren, ich dachte das wäre normal! Aber jetzt habe ich dich kennengelernt, und du warst die erste Person, die mir gezeigt hat, dass es auch anders geht."');
    
    await ƒS.Speech.tell(characters.maincharacter, "Bevor du etwas sagen kannst, kommt ein Wächter und schnauzt euch an.");
    await ƒS.Speech.tell("Wache", '"Auseinander jetzt! Ab in den rechten Tunnel!"');
    await ƒS.Speech.tell(characters.maincharacter, "Du hast nur noch einen kurzen Moment Zeit, mit Flynn einen traurigen Blick auszutauschen, bevor du mit anderen Menschen in grauen Kutten in den Tunnel gedrängt wirst. Vielleicht ist Kailani unter ihnen? Und vielleicht steht das Fenster hinten noch offen …");

    return "End";
  }
}
