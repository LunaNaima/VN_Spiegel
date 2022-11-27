namespace Spiegel_VN {
  export async function GoodEnding(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp10_Mirrorroom);
    ƒS.Sound.fade(music.theme_DemonMinigame, 0, 0, false);

    ƒS.Sound.fade(music.theme_mirrorworld_factory, 0.8, 1, true);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Du hast es geschafft! Der Dämon war ein paar Mal knapp dran, dich zu fangen, doch du bist ihm entwischt. Jetzt bist du in dem Spiegelzimmer angelangt.");

    if (!dataForSave.pickedIron) {
      return "Semi Good Ending";
    }

    await ƒS.Speech.tell(characters.maincharacter, "Instinktiv greifst du zu dem Eisen, das du eingesteckt hast. Du schwingst ihn und triffst damit den ersten Spiegel.");

    ƒS.Sound.fade(soundeffects.glass, 0.5, 1, true);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "– ein Krachen ertönt, so laut, dass du dir die Ohren zuhalten musst –");

    await ƒS.Speech.tell(characters.maincharacter, "– noch ein Spiegel kaputt! –");

    await ƒS.Speech.tell(characters.maincharacter, "– schon die Hälfte zerstört! –");

    await ƒS.Speech.tell(characters.maincharacter, "– der vierte Spiegel geht zu Bruch –");

    await ƒS.Speech.tell(characters.maincharacter, "– fast geschafft –");

    await ƒS.Sound.fade(soundeffects.glass, 0, 0, false);
    await ƒS.Location.show(locations.Chp10_MirrorroomGrey);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Um dich herum liegen die Überreste der Spiegel. Sie glitzern nicht mehr. Du hoffst, dass die böse Magie der Spiegel nun ein Ende hat.");

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_confused_sad, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Du hast alle kaputt gemacht!?"');
    await ƒS.Speech.tell(characters.maincharacter, "Flynn erscheint und schaut sich entsetzt um.");
    await ƒS.Speech.tell(characters.Flynn, '"Alle sechs Spiegel? Musste das wirklich sein?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Flynn, bist du verrückt! Die Spiegel haben doch böse Magie durchgelassen. Wo warst du denn eigentlich?"');
    await ƒS.Speech.tell(characters.Flynn, '"Ach, nirgends … "');
    await ƒS.Speech.tell(characters.maincharacter, "Er bückt sich und schaut die Splitter genauer an.");

    await ƒS.Speech.tell(characters.maincharacter, "Dir fällt auf, dass hier drin nun auch alles grau ist. Die Zerstörung der Spiegel muss die Verbindungen zur Farbwelt gekappt haben!");
    // await ƒS.Speech.tell(characters.Flynn, '"Das ist ja Wahnsinn! So schlimm sieht es gar nicht aus, finde ich …"');
    await ƒS.Speech.tell(characters.maincharacter, "Flynn ist, aus unerfindlichen Gründen, ziemlich heiter. Er strahlt und schaut aus dem Fenster");

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_happy, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Schau mal, dort unten versammeln sich Leute! Die sehen ziemlich verwirrt aus."');
    await ƒS.Speech.tell(characters.maincharacter, "Und tatsächlich ist ein kleiner Kreis von Menschen auf dem Platz vor dem Turm zusammengekommen. Ratlos stehen sie beieinander und beraten sich. Manche schütteln sich oder schauen sich um, wie wenn sie aus einer Trance erwacht sind.");
    await ƒS.Speech.tell(characters.maincharacter, '"Flynn, das sind die Sklaven! Sie sind wieder wach! Schnell, vielleicht is Kailani unter ihnen?"');

    await ƒS.Location.show(locations.Chp10_DemontunnelGrey);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Du hetzt zurück durch den leeren Tunnel zurück nach unten.");

    await ƒS.Location.show(locations.Chp10_GroundFloorTowerGrey);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Vorbei an den Portraits, deren tote Augen dich im Halbdunklen verfolgen.");

    await ƒS.Location.show(locations.Chp10_TowerOutsideSlavesGrey);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_happy, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Wo ist Kailani? Ist sie vielleicht noch in der Fabrik? Die Spiegelzerstörung hat sie hoffentlich aus ihrem Dämmerzustand ge –"');

    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_smile, ƒS.positionPercent(40, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Kailani! KAILANI! Du bist wieder da! Ich kann es kaum fassen… Wie geht’s dir? Was ist passiert? Ich bin so erleichtert!"');
    await ƒS.Speech.tell(characters.maincharacter, "Unter Kailanis Augen zeichnen sich Ringe ab, die vor ihrem Verschwinden nicht da waren. Trotzdem leuchten ihre Augen etwas auf, als sie dich anlächelt.");
    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(40, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Kailani, '"Oh! Ich bin ja so erleichtert! Wie schön, dich zu sehen … Hast du wirklich nach mir gesucht? Das hätte ich dir echt nicht zugetraut … und wer ist das?"');
    await ƒS.Speech.tell(characters.maincharacter, '"So ein Blödsinn, klar suche ich nach dir! Ich bin durch die halbe Spiegelwelt gereist, um dich zu finden! Dabei habe ich Flynn getroffen und er hat sich mir angeschlossen. Aber erzähl’ doch mal!"');

    await ƒS.Speech.tell(characters.Kailani, '"Ich bin dir so unendlich dankbar. Wirklich! Die Zeit hier war richtig schlimm. Also, wo fange ich an. Jetzt geht’s mir besser, nachdem ich befreit wurde. Aber vorher, puh, das war nicht einfach."');

    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_angry, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Kailani, '"Eigentlich war alles gut, bis ich diesen bescheuerten Spiegel gekriegt hab’. Ich fand den so toll, wirklich."');
    // await ƒS.Speech.tell(characters.maincharacter, '"Ich weiß doch! Aber warum hast du mir nichts gesagt? Oder Mutti oder Evarius?"');

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(40, 100));
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_sad, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Kailani, '"Aber der tat mir nicht gut. War mir echt peinlich. Weil ich doch so schön war im Spiegel und in echt nicht. Im Spiegel hatte ich ganz lange Haare, die haben toll geglänzt! Und eine schmale Taille. Große Brüste und einen super Hintern."');
    await ƒS.Speech.tell(characters.Kailani, '"So sehe ich ja gar nicht in echt aus. Aber im Spiegel fand’ ich das einfach schön. Und deshalb konnte ich nicht aufhören, zu schauen! Aber wie soll ich euch das erklären? Ihr sagt ja bloß, ich bin in echt hübsch. Aber das hat mir nicht wirklich was gebracht."');

    do {
      let Chp10GoodEndingElementAnswers1 = {
        iSayNoticed: "(Erkunden) Hast du denn nicht bemerkt, dass …",
        iSayGrey: "(Erkunden) Dann bist du ganz grau geworden …",
        iSayContinue: "Und dann?"
      };
      let Chp10GoodEndingElement1 = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers1, "choicesCSSclass");

      switch (Chp10GoodEndingElement1) {
        case Chp10GoodEndingElementAnswers1.iSayNoticed:
          await ƒS.Speech.tell(characters.maincharacter, '"Hast du denn nicht bemerkt, dass es gar nicht du im Spiegelbild warst, sondern jemand ganz anderes?"');
          await ƒS.Speech.tell(characters.Kailani, '"Ich hab’ das überhaupt nicht gemerkt, wie denn auch! Ich fand’s nur toll, mit dem Spiegel zu träumen. Aber nach einer Weile konnte ich nicht mehr schlafen. Und habe mich dauernd schlecht gefühlt."');
          ƒS.Speech.clear();
          break;

        case Chp10GoodEndingElementAnswers1.iSayGrey:
          await ƒS.Speech.tell(characters.maincharacter, '"Und dann bist du ganz grau geworden, weißt du noch? Ich dachte, dein Kleid wäre verwaschen, aber es war gar nicht so!"');
          ƒS.Character.hide(characters.Kailani);
          await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(40, 100));
          ƒS.update();

          await ƒS.Speech.tell(characters.Kailani, '"Nee, das habe ich gar nicht gemerkt. Ich hab’ mich tagelang schlecht gefühlt, bis ich dann eines Tages den Spiegel in die Hand genommen hab’, wie immer, und der hat schon so komisch geblitzt. Da hätte ich was merken sollen."');
          await ƒS.Speech.tell(characters.Kailani, '"Dann hat er mehr und mehr geblinkt, ich konnte gar nicht wegschauen, dann wurde alles schwarz. Aufgewacht bin ich dann in diesem Haus da drüben. Dort war alles grau und alle hatten große Angst. Wir haben gar nicht verstanden, was mit uns passiert."');

        case Chp10GoodEndingElementAnswers1.iSayContinue:
          dataForSave.pickedChp10GoodEndingContinue1 = true;
          await ƒS.Speech.tell(characters.Kailani, '"Dann kam eine, die hat uns, wie soll ich sagen? betäubt. Mir war dann alles egal, was um mich herum passiert. Mitgekriegt haben wir das natürlich trotzdem."');
          ƒS.Speech.clear();
          break;

      }

    } while (!dataForSave.pickedChp10GoodEndingContinue1);

    await ƒS.Speech.tell(characters.maincharacter, '"Musstest du dann in die Fabrik?"');

    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Kailani, '"Ja, wir haben dann gearbeitet. Das war das Verrückteste: Die Bilder, die ich daheim im Spiegel gesehen hab’, die musste ich dann selbst produzieren! Ich musste Perücken anziehen und mich in ein Korsett einschnüren. Dann hab’ ich Polster um Brüste und Hintern bekommen. Tagein, tagaus, standen wir in diesen Kabinen. Die Jungs haben sich Sixpack- und Schulterpolster umgeschnürt. Ich weiß aber einfach nicht, wieso …"');
    await ƒS.Speech.tell(characters.maincharacter, "Du erklärst ihr, dass es irgendwie mit den Farben zusammenhängt. Bis Flynn dich unterbricht.");

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Und du hast das alles mitgekriegt?"');
    await ƒS.Speech.tell(characters.maincharacter, "Als er sich euch zuwendet, siehst du etwas aus seiner Tasche aufblitzen. Das war vorher nicht da, da bist du dir sicher! Stellst du ihn zur Rede?");


    let Chp10GoodEndingElementAnswers2 = {
      iSayCareful: "Vorsichtig",
      iSayAccusing: "Vorwurfsvoll",
      iSayIgnore: "Ignorieren"
    };
    let Chp10GoodEndingElement2 = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers2, "choicesCSSclass");

    switch (Chp10GoodEndingElement2) {
      case Chp10GoodEndingElementAnswers2.iSayCareful:
        await ƒS.Speech.tell(characters.maincharacter, '"Flynn, kann es sein, dass du etwas in deiner Tasche herumträgst?"');
        ƒS.Speech.clear();
        break;

      case Chp10GoodEndingElementAnswers2.iSayAccusing:
        await ƒS.Speech.tell(characters.maincharacter, '"Flynn, was ist in deiner Tasche? Zeig´ es mir, sofort!"');
        ƒS.Speech.clear();
        break;

      case Chp10GoodEndingElementAnswers2.iSayIgnore:
        await ƒS.Speech.tell(characters.maincharacter, "Du beschließt, es zu ignorieren. Doch Kailani scheint das anders zu sehen.");
        await ƒS.Speech.tell(characters.Kailani, '"Da glitzert etwas in deiner Tasche. Sag bloß …"');
        ƒS.Speech.clear();
        break;
    }
    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_shocked, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Naja, es ist ein Splitter aus dem Spiegelzimmer. Ich fand die so schön und –"');
    await ƒS.Speech.tell(characters.maincharacter, '"Seit Tagen verhältst du dich komisch! Ich hatte immer den Eindruck, als wärst du eher an den Spiegeln interessiert, statt an Kailani. Und du hast dich so schnell bereitwillig erklärt, mir zu helfen, statt deine Ausbildung zu beginnen. Was ist denn mit dir los?"');
    await ƒS.Speech.tell(characters.Flynn, '"Natürlich wollte ich Kailani auch retten! Nur haben mich die Spiegel auch interessiert und –"');
    await ƒS.Speech.tell(characters.maincharacter, '"Rück’ schon raus damit! Wir kennen uns zwar nicht lange, aber trotzdem haben wir einiges zusammen hinter uns. Ist dir unsere Freundschaft nichts wert?"');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_sad, ƒS.positionPercent(70, 100));
    ƒS.update();

    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Okay, ich geb’s auf. Ich war deshalb an den Spiegeln interessiert, weil –"');
    await ƒS.Speech.tell(characters.Flynn, '"– weil ich von meiner Heimat geschickt wurde, um die Spiegeltechnologie zu stehlen."');
    await ƒS.Speech.tell(characters.maincharacter, "Flynns Stimme wird leise. Du starrst ihn schockiert an.");

    do {
      let Chp10GoodEndingElementAnswers3 = {
        iSayUsed: '"(Erkunden) Du hast mich also nur benutzt?"',
        iSayHome: "(Erkunden) Wo ist deine Heimat?",
        iSayTechnology: "(Erkunden) Wozu die Technologie stehlen?",
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
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
          ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Ich komme von einer Welt namens Valde. Dort lebe ich in einer großen Stadt und habe die Mission erhalten, die Spiegeltechnologie von dieser Welt, Norovia, zu klauen."');
          await ƒS.Speech.tell(characters.maincharacter, "Dein Kopf schwirrt. Es gibt mehr Welten als nur deine und die Spiegelwelt? Flynn scheint deine Frage schon zu ahnen.");
          await ƒS.Speech.tell(characters.Flynn, '"Es gibt nämlich sieben verschiedene Welten! Erinnerst du dich an die sechs Spiegel im Spiegelzimmer? Das waren die Verbindungen zu den Welten. Sie haben die Farben durchgelassen, von denen sich der Dämon ernährt hat. Den Rest hat er an das Volk weitergegeben."');
          ƒS.Speech.clear();
          break;

        case Chp10GoodEndingElementAnswers3.iSayTechnology:
          await ƒS.Speech.tell(characters.maincharacter, '"Und die Spiegeltechnologie willst du klauen, weil …?"');
          ƒS.Character.hide(characters.Flynn);
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
          ƒS.update();

          await ƒS.Speech.tell(characters.Flynn, '"Mir wurde beauftragt, die Technologie mitzubringen. Damit wir in Varunomo, meiner Stadt, auch Farbe haben können. Dort ist nämlich auch alles grau ..."');
          ƒS.Speech.clear();
          break;

        case Chp10GoodEndingElementAnswers3.iSayContinue:
          dataForSave.pickedChp10GoodEndingContinue2 = true;
          break;

      }
    } while (!dataForSave.pickedChp10GoodEndingContinue2);


    await ƒS.Speech.tell(characters.maincharacter, "Aber bevor du mehr fragen kannst, erzählt Flynn weiter. Die Worte sprudeln nur so aus ihm heraus, und du hast den Eindruck, ihm fällt eine große Last von den Schultern.");

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_confused_sad, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Weißt du, ich wurde meinen Eltern als Kind weggenommen und in einem Trainingscamp zum Spion erzogen. Ich war in einem Lager mit lauter Jungs wie mich, die auch aufgekauft wurden. Und als ich diese Mission erhielt, war das für mich wie ein Ritterschlag! Ich durfte mich das erste Mal beweisen! Wie soll ich denn mit leeren Händen zurück? Das müsst ihr doch verstehen."');

    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_angry, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Kailani, '"Du kannst doch nicht einfach diese Technologie mitnehmen? Hast du denn nicht verstanden, wie viel Leid diese Spiegel mit sich bringen? Ich musste mich komplett verstellen! Und vorher, da war ich todunglücklich. Wegen dieser blöden Bilder; nur, weil ich auch so aussehen wollte. Ich bin einem Vorbild hinterhergejagt, das es gar nicht gab! Die Spiegelbilder sind nicht echt! Und dadurch wurde ich krank."');

    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_shrug_eyeroll, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Kailani, '"Schau dich um, Flynn. Ich kenne dich zwar nicht und weiß auch nicht, was deine Leute mit dem Spiegel vorhaben. Aber ich muss dir wirklich sagen: wenn du diese Technologie mitnimmst und in deinem Land weiterführst, werden nur noch mehr Menschen verzweifeln. Ich hab’ gelernt: Wir sollten mit uns selbst zufrieden sein, so wie wir aussehen. Das macht uns doch besonders, diese kleinen Macken."');
    await ƒS.Speech.tell(characters.maincharacter, "Du bist unglaublich stolz auf deine kleine Schwester. Nicht nur die Tortur hat sie überstanden, sondern auch verstanden, was es mit ihr gemacht hat. Offensichtlich kämpft Flynn mit unterschiedlichen Gefühlen. Er ist sichtlich betroffen von euren Reaktionen.");

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Da, wo ich herkomme, ist so vieles so anders und doch gleich. Die Überheblichkeit der Leute, das Verurteilen wegen Äußeren, ich dachte das wäre normal!"');
    await ƒS.Speech.tell(characters.Flynn, '"Deshalb hatte ich auch immer diese Polster an. Aber nun kann ich die auch ablegen."');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_I_skeptical, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Und natürlich hat Kailani Recht. Der Spiegel bringt nur Leid! Die Regierung in Varunomo will die Farbe aus den anderen Welten saugen und verkaufen. So wird nämlich die Farbe übertragen, mit Gefühlen, versteht ihr? Von der Person, die auf der anderen Seite des Spiegels ist, kann nur Farbe entnommen werden, wenn sie sich schlecht fühlt."');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_II_skeptical, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Deshalb funktioniert die Technologie so, dass zuerst die Menschen traurig werden, wenn sie in den Spiegel schauen. Gleichzeitig sollen sie aber immer öfter reinschauen, damit nach und nach die Farbe entzogen werden kann. So gelangt die Farbe über den Spiegel zu den Menschen und die können sich dann bunt anziehen, wie wir in Whary gesehen haben."');
    await ƒS.Speech.tell(characters.maincharacter, "Du erinnerst dich an die Worte des Wünschebaums: 'Die dunkle Magie' ... das hatte er also damit gemeint!");
    await ƒS.Speech.tell(characters.maincharacter, '"Flynn, das kannst du nicht machen! Komm, lass die Splitter hier. Deine Mission war es, mir bei der Suche nach meiner Schwester zu helfen. Und das ist dir gelungen! Das ist doch alles, was zählt. Die Spiegel sind nun ein für alle mal zerstört. Wir können endlich nach Hause!"');

    let Chp10GoodEndingElementAnswers4 = {
      iSayTakeFlynn: "Flynn mitnehmen",
      iSayNotTakeFlynn: "Flynn wegbringen"
    };
    let Chp10GoodEndingElement4 = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers4, "choicesCSSclass");

    switch (Chp10GoodEndingElement4) {
      case Chp10GoodEndingElementAnswers4.iSayTakeFlynn:
        await ƒS.Speech.tell(characters.maincharacter, '"Willst du mit uns nach Hause kommen? Mama und Mutti nehmen dich sicher gerne auf! Und dort kannst du deine Ausbildung fertig machen, oder auch Tischlern, Gartenarbeit oder sonst was lernen. Was meinst du?"');

        ƒS.Character.hide(characters.Flynn);
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_shocked, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Flynn, '"Oh … ich weiß gar nicht, was ich sagen soll! Meint ihr, meine Regierung findet mich dort nicht?"');
        await ƒS.Speech.tell(characters.maincharacter, '"Auf keinen Fall!"');

        ƒS.Character.hide(characters.Kailani);
        await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(40, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Kailani, '"Du hast geholfen, mich zu retten, Jetzt sind wir dran mit retten!"');
        await ƒS.Speech.tell(characters.maincharacter, '"Kommt mit, wir reisen nach Hause. Ich habe dieses Grau einfach satt."');
        ƒS.Character.hide(characters.Flynn);
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_skeptical, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Kailani, '"Ich bin so froh, wieder heimzugehen. Dort ist zwar alles langweilig und niemand hat schicke Klamotten an. Dafür lieben wir uns, so wie wir sind!"');

        await ƒS.Location.show(locations.Chp08_ArrivalFactory);
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Die Mittagssonne strahlt vom Himmel. Du fragst dich, ob ein Reisen mit dem Handspiegel auch bei Mittag, statt bei Mitternacht möglich ist. Schließlich ist in dieser Welt – wie hat Flynn sie nochmal genannt, Norovia? – alles Andersherum.");

        let Chp10GoodEndingElementAnswers5 = {
          iSayOption1: "Spieglein, Spieglein, weise mir mein Routlein",
          iSayOption2: "Spieglein, Spieglein, weise mir mein Sträßlein",
          iSayOption3: "Spieglein, Spieglein, weise mir mein Weglein"

        };
        await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers5, "choicesCSSclass");

        await ƒS.Location.show(locations.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Location.show(locations.Chp01_CS_ArrivalHome);
        ƒS.Sound.fade(music.theme_mirrorworld_factory, 0, 0, false);
        ƒS.Sound.fade(music.theme_ordinaryworld, 0.8, 1, true);
        ƒS.Character.hideAll();
        ƒS.update();

        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_I_skeptical, ƒS.positionPercent(70, 100));
        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(80, 100));
        await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit1_neutral_happy, ƒS.positionPercent(45, 100));
        await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_laugh, ƒS.positionPercent(10, 100));
        await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_laugh, ƒS.positionPercent(55, 100));
        ƒS.update();
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Speech.tell(characters.maincharacter, "Endlich zuhause! Kailani ruft schon nach euren Eltern. Mama und Mutti kommen aus dem Haus gestürmt, dicht gefolgt von Evarius. Alle strahlen über das ganze Gesicht und umarmen sich. Geschnatter von allen Seiten prasselt auf dich und Kailani ein. Flynn wird einfach mit umarmt. Er strahlt auch. Du schaust in die Gesichter deiner Familie und siehst dort Liebe, Akzeptanz und Glück.");
        ƒS.Speech.clear();
        return "End";
        break;

      case Chp10GoodEndingElementAnswers4.iSayNotTakeFlynn:
        await ƒS.Speech.tell(characters.maincharacter, '"Sollen wir dich über den See begleiten? In Whary können Kailani und ich heimreisen, und du kannst weiterreisen?"');

        ƒS.Character.hide(characters.Flynn);
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_I_skeptical, ƒS.positionPercent(70, 100));
        ƒS.Character.hide(characters.Kailani);
        await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_smile, ƒS.positionPercent(40, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.Flynn, '"Das ist eine gute Idee! Vielleicht kann ich beim Gasthof als Kellner anheuern. Mal etwas anderes, als nur kämpfen."');
        await ƒS.Location.show(locations.Chp08_ArrivalFactory);
        ƒS.update();

        await ƒS.Speech.tell(characters.maincharacter, "Du und Kailani plaudert losgelöst über alles Mögliche. Nur Flynn steht am Bug und schaut melancholisch in die Ferne. Es muss schwer sein, Befehle zu ignorieren! Vor allem, wenn er nichts anderes kennt.");

        ƒS.Character.hide(characters.Kailani);
        await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(40, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.maincharacter, '"Hier sind wir! Vielen Dank für deine Hilfe, Flynn. Vielleicht komm’ ich dich mal besuchen! Und halte die Ohren steif!"');

        ƒS.Character.hide(characters.Flynn);
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_shocked, ƒS.positionPercent(70, 100));

        await ƒS.Speech.tell(characters.Flynn, '"Das wäre schön! Ich versuche es. Ich sehe die Welt nun mit anderen Augen. Alles wird gut! Bis bald!"');

        ƒS.Character.hide(characters.Flynn);
        ƒS.update();

        await ƒS.Speech.tell(characters.Kailani, '"Ich bin so froh, wieder heimzugehen. Dort ist zwar alles langweilig und niemand hat schicke Klamotten an. Dafür lieben wir uns, so wie wir sind!"');

        await ƒS.Location.show(locations.Chp08_ArrivalFactory);
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Die Mittagssonne strahlt vom Himmel. Du fragst dich, ob ein Reisen mit dem Handspiegel auch bei Mittag, statt bei Mitternacht möglich ist. Schließlich ist in dieser Welt – wie hat Flynn sie nochmal genannt, Norovia? – alles Andersherum.");

        do {
          let Chp10GoodEndingElementAnswers6 = {
            iSayOption1: "Spieglein, Spieglein, weise mir mein Routlein",
            iSayOption2: "Spieglein, Spieglein, weise mir mein Sträßlein",
            iSayOption3: "Spieglein, Spieglein, weise mir mein Weglein"

          };
          let Chp10GoodEndingElement = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers6, "choicesCSSclass");

          switch (Chp10GoodEndingElement) {
            case Chp10GoodEndingElementAnswers6.iSayOption1:
              await ƒS.Speech.tell(characters.narrator, "Nicht ganz ...");
              ƒS.Speech.clear();
              break;

            case Chp10GoodEndingElementAnswers6.iSayOption2:
              await ƒS.Speech.tell(characters.narrator, "Probier's nochmal!");
              ƒS.Speech.clear();
              break;

            case Chp10GoodEndingElementAnswers6.iSayOption3:
              dataForSave.pickedChp10GoodEndingContinue3 = true;
              await ƒS.Speech.tell(characters.narrator, "Das war´s!");
              ƒS.Speech.clear();
              break;
          }
        } while (!dataForSave.pickedChp10GoodEndingContinue3);

        ƒS.Speech.clear();
        await ƒS.Location.show(locations.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Location.show(locations.Chp01_CS_ArrivalHome);
        ƒS.Sound.fade(music.theme_mirrorworld_factory, 0, 0, false);
        ƒS.Sound.fade(music.theme_ordinaryworld, 0.8, 1, true);
        ƒS.Character.hideAll();
        ƒS.update();

        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(80, 100));
        await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit1_neutral_happy, ƒS.positionPercent(45, 100));
        await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_laugh, ƒS.positionPercent(10, 100));
        await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_laugh, ƒS.positionPercent(55, 100));
        ƒS.update();
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Speech.tell(characters.maincharacter, "Endlich zuhause! Kailani ruft schon nach euren Eltern. Mama und Mutti kommen aus dem Haus gestürmt, dicht gefolgt von Evarius. Alle strahlen über das ganze Gesicht und umarmen sich. Geschnatter von allen Seiten prasselt auf dich und Kailani ein. Du schaust in die Gesichter deiner Familie und siehst dort Liebe, Akzeptanz und Glück.");
        ƒS.Speech.clear();
        ƒS.Character.hideAll();
        ƒS.update();
        return "End";
        break;

    }
  }
}
