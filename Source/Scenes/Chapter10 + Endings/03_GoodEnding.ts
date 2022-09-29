namespace Spiegel_VN {
  export async function GoodEnding(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp10_Mirrorroom);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Du hast es geschafft! Der Dämon war ein paar Mal knapp dran, dich zu fangen, doch du bist ihm entwischt. Jetzt bist du in dem Spiegelzimmer angelangt, das die Vögel von außen gesehen haben. Tatsächlich stehen sechs große Spiegel aneinandergereiht in dem runden Raum.");
    await ƒS.Speech.tell(characters.maincharacter, "Instinktiv greifst du zu dem Hammer. Was für ein Glück, dass du ihn eingesteckt hast! Du schwingst ihn und triffst damit den ersten Spiegel.");
    
    await ƒS.Location.show(locations.Chp10_Mirrorroom);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "– ein Krachen ertönt, so laut, dass du dir die Ohren zuhalten musst –");

    await ƒS.Location.show(locations.Chp10_Mirrorroom);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "– noch ein Spiegel kaputt! –");

    await ƒS.Location.show(locations.Chp10_Mirrorroom);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "– schon die Hälfte zerstört! –");

    await ƒS.Location.show(locations.Chp10_Mirrorroom);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "– der vierte Spiegel geht zu Bruch –");

    await ƒS.Location.show(locations.Chp10_Mirrorroom);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "– fast geschafft –");

    await ƒS.Location.show(locations.Chp10_Mirrorroom);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Alle Spiegel sind zerstört! Du schnappst nach Luft – das war anstrengender, als gedacht. Um dich herum liegen die Überreste der Spiegel. Sie glitzern nicht mehr. Du hoffst, dass die böse Magie der Spiegel nun ein Ende hat.");

    ƒS.Character.hideAll();
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_confused_sad, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Du hast alle kaputt gemacht!?"');
    await ƒS.Speech.tell(characters.maincharacter, "Flynn erscheint und schaut sich entsetzt um.");
    await ƒS.Speech.tell(characters.Flynn, '"Alle sechs Spiegel? Musste das wirklich sein?"');
    await ƒS.Speech.tell(characters.maincharacter, "Flynn, bist du verrückt! Die Spiegel haben böse Magie durchgelassen. Natürlich musste ich sie zerstören. Wo warst du denn eigentlich?");
    await ƒS.Speech.tell(characters.Flynn, '"Ach, nirgends … "');
    await ƒS.Speech.tell(characters.maincharacter, "Er bückt sich und schaut die Splitter genauer an. Für ihn hast du jetzt aber keine Zeit mehr. Du gehst vorsichtig um die Splitter herum und trittst auf den Balkon, um herunterzuschauen.");
    
    await ƒS.Speech.tell(characters.maincharacter, "Die Welt hat den kleinen Rest an Farbe, den sie noch besaß, verloren. Was dich aber mehr erschreckt, ist der weite Blick. Du kannst sogar bis ganz über den See nach Whary schauen. Offensichtlich wollte der Dämon seine Augen überall haben. Der See, der vorher ein tiefes Blau war, ist nun – grau. Soweit dein Auge reicht, siehst du keine Farben. Whary hat seine bunten Fassaden durch trübe Hauswände eingetauscht. Die Zerstörung der Spiegel muss die Verbindungen zur Farbwelt gekappt haben!");
    await ƒS.Speech.tell(characters.Flynn, '"Das ist ja Wahnsinn! So schlimm sieht es gar nicht aus, finde ich …"');
    await ƒS.Speech.tell(characters.maincharacter, "Flynn ist, aus unerfindlichen Gründen, ziemlich heiter. Er strahlt und schaut herunter.");

    ƒS.Character.hideAll();
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_happy, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Schau mal, dort unten versammeln sich Leute! Die sehen ziemlich verwirrt aus."');
    await ƒS.Speech.tell(characters.maincharacter, "Und tatsächlich ist ein kleiner Kreis von Menschen auf dem Platz vor dem Turm zusammengekommen. Ratlos stehen sie beieinander und beraten sich. Manche schütteln sich oder schauen sich um, wie wenn sie aus einer Trance erwacht sind.");
    await ƒS.Speech.tell(characters.maincharacter, '"Flynn, das sind die Sklaven! Sie sind wieder wach! Schnell, vielleicht is Kailani unter ihnen?"');

    await ƒS.Location.show(locations.Chp10_Demontunnel);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, '"Du hetzt zurück durch den leeren Tunnel zurück nach unten."');

    await ƒS.Location.show(locations.Chp10_GroundFloorTower);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, '"Vorbei an den Portraits, deren tote Augen dich im Halbdunklen verfolgen."');
    
    await ƒS.Location.show(locations.Chp10_TowerOutsideSlaves);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_happy, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Wo ist Kailani? Ist sie vielleicht noch in der Fabrik? Die Spiegelzerstörung hat sie hoffentlich aus ihrem Dämmerzustand ge –"');

    ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_smile, ƒS.positionPercent(40, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Kailani! KAILANI! Du bist wieder da! Ich kann es kaum fassen… Wie geht’s dir? Was ist passiert? Ich bin so erleichtert!"');
    await ƒS.Speech.tell(characters.maincharacter, "Unter Kailanis Augen zeichnen sich Ringe ab, die vor ihrem Verschwinden nicht da waren. Trotzdem leuchten ihre Augen etwas auf, als sie dich anlächelt.");

    await ƒS.Speech.tell(characters.Kailani, '"Oh! Ich bin ja so erleichtert! Wie schön, dich zu sehen … Hast du wirklich nach mir gesucht? Das hätte ich dir echt nicht zugetraut … und wer ist das?"');
    await ƒS.Speech.tell(characters.maincharacter, '"So ein Blödsinn, klar suche ich nach dir! Ich bin durch die halbe Spiegelwelt gereist, um dich zu finden! Dabei habe ich Flynn getroffen und er hat sich mir angeschlossen. Aber erzähl’ doch mal. Wie geht’s dir?"');
        
    ƒS.Character.hide(characters.Kailani);
    ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(40, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Kailani, '"Ich bin dir so unendlich dankbar. Wirklich! Die Zeit hier war richtig schlimm. Also, wo fange ich an. Jetzt geht’s mir besser, nachdem ich befreit wurde. Aber vorher, puh, das war nicht einfach."');
    await ƒS.Speech.tell(characters.Kailani, '"Eigentlich war alles gut, bis ich diesen bescheuerten Spiegel gekriegt hab’. Ich fand den so toll, wirklich. Der hat mir alles gezeigt, was ich wollte. Daheim ist halt alles so trist und langweilig, weißt du."');
    await ƒS.Speech.tell(characters.maincharacter, '"Ich weiß doch! Aber warum hast du mir nichts gesagt? Oder Mutti oder Evarius?"');

    ƒS.Character.hideAll();
    ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(40, 100));
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_sad, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Kailani, '"Ich weiß auch nicht, war irgendwie peinlich, weißt. Weil ich doch so schön war im Spiegel und in echt nicht. Im Spiegel hatte ich ganz lange Haare, die haben toll geglänzt! Und eine schmale Taille. Große Brüste und einen super Hintern."');
    await ƒS.Speech.tell(characters.Kailani, '"So sehe ich ja gar nicht in echt aus. Aber im Spiegel fand’ ich das einfach schön. Und deshalb konnte ich nicht aufhören, zu schauen! Aber wie soll ich euch das erklären? Ihr sagt ja bloß, ich bin in echt hübsch. Aber das hat mir nicht wirklich was gebracht."');

    do {
      let Chp10GoodEndingElementAnswers1 = {
        iSayNoticed: "(Erkunden) Hast du denn nicht bemerkt, dass …",
        iSayGrey: "(Erkunden) Dann bist du ganz grau geworden …",
        iSayContinue: "Und dann?",
      };
      let Chp10GoodEndingElement1 = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers1, "choicesCSSclass");

      switch (Chp10GoodEndingElement1) {
        case Chp10GoodEndingElementAnswers1.iSayNoticed:
          await ƒS.Speech.tell(characters.maincharacter, '"Hast du denn nicht bemerkt, dass es gar nicht du im Spiegelbild warst, sondern jemand ganz anderes?"');
          await ƒS.Speech.tell(characters.Kailani, '"Ich hab’ das überhaupt nicht gemerkt, wie denn auch! Ich fand’s nur toll, mit dem Spiegel zu träumen. Aber nach einer Weile konnte ich nicht mehr schlafen. Und habe mich dauernd schlecht gefühlt. Warum konnte ich nicht so aussehen, wie in dem Spiegel."');
          ƒS.Speech.clear();
          break;
        
        case Chp10GoodEndingElementAnswers1.iSayGrey:
          await ƒS.Speech.tell(characters.maincharacter, '"Und dann bist du ganz grau geworden, weißt du noch? Ich dachte, dein Kleid wäre verwaschen, aber es war gar nicht so!"');
          ƒS.Character.hide(characters.Kailani);
          ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(40, 100));
          ƒS.update();
          
          await ƒS.Speech.tell(characters.Kailani, '"Nee, das habe ich gar nicht gemerkt. Ich hab’ mich tagelang schlecht gefühlt, bis ich dann eines Tages den Spiegel in die Hand genommen hab’, wie immer, und der hat schon so komisch geblitzt. Da hätte ich was merken sollen."');
          await ƒS.Speech.tell(characters.Kailani, '"Aber er hat nur mehr und mehr geblinkt, ich konnte gar nicht wegschauen, dann wurde alles schwarz. Aufgewacht bin ich dann in diesem Haus da drüben. Dort war alles grau und alle hatten große Angst. Wir haben gar nicht verstanden, was mit uns passiert."');

        case Chp10GoodEndingElementAnswers1.iSayContinue:
          dataForSave.pickedChp10GoodEndingContinue1 = true;
          await ƒS.Speech.tell(characters.Kailani, '"Dann kam eine, die hat uns, wie soll ich sagen? betäubt. Sie hat mit den Armen gewedelt, dann sind wir alle schläfrig geworden. Mir war alles egal, was um mich herum passiert. Mitgekriegt haben wir das natürlich trotzdem."');
          ƒS.Speech.clear();
          break;
          
      }
      
    } while (!dataForSave.pickedChp10GoodEndingContinue1);
    
    await ƒS.Speech.tell(characters.maincharacter, '"Musstest du dann in die Fabrik?"');
    
    ƒS.Character.hide(characters.Kailani);
    ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Kailani, '"Ja, wir haben dann gearbeitet. Das war das Verrückteste: Die Bilder, die ich daheim im Spiegel gesehen hab’, die musste ich dann selbst produzieren! Ich musste Perücken anziehen und mich in ein Korsett einschnüren. Dann hab’ ich Polster um Brüste und Hintern bekommen. Tagein, tagaus, standen wir in diesen Kabinen. Die Jungs haben sich Sixpack- und Schulterpolster umgeschnürt. Ich weiß aber einfach nicht, wieso …"');

    ƒS.Character.hide(characters.Flynn);
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Und du hast das alles mitgekriegt?"');
    await ƒS.Speech.tell(characters.maincharacter, "Flynn, der sich bis jetzt bei diesem Familientreffen zurückgehalten hat, mischt sich in das Gespräch ein. Als er sich euch zuwendet, siehst du etwas aus seiner Tasche aufblitzen. Das war vorher nicht da, da bist du dir sicher! Stellst du ihn zur Rede?");

    
    let Chp10GoodEndingElementAnswers2 = {
      iSayCareful: "Vorsichtig",
      iSayAccusing: "Vorwurfsvoll",
      iSayIgnore: "Ignorieren",
    };
    let Chp10GoodEndingElement2 = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers2, "choicesCSSclass");

    switch (Chp10GoodEndingElement2) {
      case Chp10GoodEndingElementAnswers2.iSayCareful:
        await ƒS.Speech.tell(characters.maincharacter, '"Flynn, kann es sein, dass du etwas in deiner Tasche herumträgst?"');
        ƒS.Speech.clear();
        break;
        
      case Chp10GoodEndingElementAnswers2.iSayAccusing:
        await ƒS.Speech.tell(characters.maincharacter, '"Flynn, was ist in deiner Tasche? Zeig es mir, sofort!"');
        ƒS.Speech.clear();
        break;
        
      case Chp10GoodEndingElementAnswers2.iSayIgnore:
        await ƒS.Speech.tell(characters.maincharacter, "Du beschließt, es zu ignorieren. Schließlich geht es dich nichts an, was er mit sich herumträgt. Doch Kailani scheint das anders zu sehen.");
        await ƒS.Speech.tell(characters.Kailani, '"Da glitzert etwas in deiner Tasche. Sag bloß …"');
        ƒS.Speech.clear();
        break;
    }
    ƒS.Character.hide(characters.Flynn);
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_shocked, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Naja, es ist ein Splitter aus dem Spiegelzimmer. Ich fand die so schön und –"');
    await ƒS.Speech.tell(characters.maincharacter, '"Flynn, was für ein Blödsinn! Seit Tagen verhältst du dich komisch. Ich hatte immer den Eindruck, als wärst du eher an den Spiegeln interessiert, statt an Kailani. Und du hast dich so schnell bereitwillig erklärt, mir zu helfen, statt deine Ausbildung zu beginnen. Was ist denn mit dir los?"');
    await ƒS.Speech.tell(characters.Flynn, '"Natürlich wollte ich Kailani auch retten! Nur haben mich die Spiegel auch interessiert und –"');
    await ƒS.Speech.tell(characters.maincharacter, '"Lüg’ mich ja nicht an! Rück’ schon raus damit! Wir kennen uns zwar nicht lange, aber trotzdem haben wir einiges zusammen hinter uns. Ist dir unsere Freundschaft nichts wert?"');

    ƒS.Character.hide(characters.Flynn);
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_sad, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Okay, ich geb’s auf. Ich war deshalb an den Spiegeln interessiert, weil –"');
    await ƒS.Speech.tell(characters.Flynn, '"– weil ich von meiner Heimat geschickt wurde, um die Spiegeltechnologie zu stehlen."');
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
          ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
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
          ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
          ƒS.update();

          await ƒS.Speech.tell(characters.Flynn, '"Mir wurde beauftragt, die Technologie mitzubringen. Damit wir in Varunomo, meiner Stadt, die Farbe benutzen können"');
          await ƒS.Speech.tell(characters.maincharacter, "Dein Kopf schwirrt. Es gibt mehr Welten als nur deine und die Spiegelwelt? Flynn scheint deine Frage schon zu ahnen.");
          await ƒS.Speech.tell(characters.Flynn, '"Es gibt nämlich sieben verschiedene Welten! Erinnerst du dich an die sechs Spiegel im Spiegelzimmer? Das waren die Verbindungen zu den Welten."');
          ƒS.Speech.clear();
          break;
      }
    } while (!dataForSave.pickedChp10GoodEndingContinue2)
    

    await ƒS.Speech.tell(characters.maincharacter, "Aber bevor du mehr fragen kannst, erzählt Flynn weiter. Die Worte sprudeln nur so aus ihm heraus, und du hast den Eindruck, ihm fällt eine große Last von den Schultern.");

    ƒS.Character.hide(characters.Flynn);
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_confused_sad, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Weißt du, ich wurde meinen Eltern als Kind weggenommen und in einem Trainingscamp zum Spion erzogen. Ich war in einem Lager mit lauter Jungs wie mich, die auch aufgekauft wurden. Und als ich diese Mission erhielt, war das für mich wie ein Ritterschlag! Ich durfte mich das erste Mal beweisen! Wie soll ich denn mit leeren Händen zurück? Das müsst ihr doch verstehen."');

    ƒS.Character.hide(characters.Kailani);
    ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_angry, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Kailani, '"Du kannst doch nicht einfach diese Technologie mitnehmen? Hast du denn nicht verstanden, wie viel Leid diese Spiegel mit sich bringen? Ich musste mich komplett verstellen! Und vorher, da war ich todunglücklich. Wegen dieser blöden Bilder; nur, weil ich auch so aussehen wollte. Ich bin einem Vorbild hinterhergejagt, das es gar nicht gab! Die Spiegelbilder sind nicht echt! Und dadurch wurde ich krank."');

    ƒS.Character.hide(characters.Kailani);
    ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_shrug_eyeroll, ƒS.positionPercent(40, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Kailani, '"Schau dich um, Flynn. Ich kenne dich zwar nicht und weiß auch nicht, was deine Leute mit dem Spiegel vorhaben. Aber ich muss dir wirklich sagen: wenn du diese Technologie mitnimmst und in deinem Land weiterführst, werden nur noch mehr Menschen verzweifeln. Ich wurde in eine Fabrik gesteckt und musste Bilder erzeugen, die anderen krank machten. Willst du das wirklich? Ich hab’ gelernt: Wir sollten mit uns selbst zufrieden sein, so wie wir aussehen. Das macht uns doch Besonders, diese kleinen Macken."');
    await ƒS.Speech.tell(characters.maincharacter, "Wow, was für eine Rede! Du bist unglaublich stolz auf deine kleine Schwester. Nicht nur die Tortur hat sie überstanden, sondern auch verstanden, was es mit ihr gemacht hat. Offensichtlich kämpft Flynn mit unterschiedlichen Gefühlen. Er ist sichtlich betroffen von unseren Reaktionen.");

    ƒS.Character.hide(characters.Flynn);
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Da, wo ich herkomme, ist so vieles so anders und doch gleich. Die Überheblichkeit der Leute, das Verurteilen wegen Äußeren, ich dachte das wäre normal! Aber jetzt habe ich dich kennengelernt, und du warst die erste Person, die mir gezeigt hat, dass es auch anders geht."');
    await ƒS.Speech.tell(characters.Flynn, '"Deshalb hatte ich auch immer diese Polster an."');

    ƒS.Character.hide(characters.Flynn);
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_I_skeptical, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Und natürlich hat Kailani Recht. Der Spiegel bringt nur Leid! Die Regierung in Varunomo will die Farbe aus den anderen Welten saugen und verkaufen. So wird nämlich die Farbe übertragen, mit Gefühlen, versteht ihr? Von der Person, die auf der anderen Seite des Spiegels ist, kann nur Farbe entnommen werden, wenn sie sich schlecht fühlt."');
    
    ƒS.Character.hide(characters.Flynn);
    ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_II_skeptical, ƒS.positionPercent(70, 100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.Flynn, '"Deshalb funktioniert die Technologie so, dass zuerst die Menschen traurig werden, wenn sie in den Spiegel schauen. Gleichzeitig sollen sie aber immer öfter reinschauen, damit nach und nach die Farbe entzogen werden kann. So gelangt die Farbe über den Spiegel zu den Menschen und die können sich dann bunt anziehen, wie wir in Whary gesehen haben."');
    await ƒS.Speech.tell(characters.maincharacter, "Du erinnerst dich an die Worte des Wünschebaums: ‘Die Magie verstärkt sich bei schlechten Gefühlen’ … das hatte er also damit gemeint!");
    await ƒS.Speech.tell(characters.maincharacter, '"Flynn, das kannst du nicht machen! Komm, lass die Splitter hier. Deine Mission war es, mir bei der Suche nach meiner Schwester zu helfen. Und das ist dir gelungen! Das ist doch alles, was zählt."');

    let Chp10GoodEndingElementAnswers4 = {
      iSayTakeFlynn: '"Flynn mitnehmen"',
      iSayNotTakeFlynn: "Flynn wegbringen",
    };
    let Chp10GoodEndingElement4 = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers4, "choicesCSSclass");

    switch (Chp10GoodEndingElement4) {
      case Chp10GoodEndingElementAnswers4.iSayTakeFlynn:
        await ƒS.Speech.tell(characters.maincharacter, '"Willst du mit uns nach Hause kommen? Mama und Mutti nehmen dich sicher gerne auf! Und dort kannst du deine Ausbildung fertig machen, oder auch Tischlern, Gartenarbeit oder sonst was lernen. Was meinst du?"');

        ƒS.Character.hide(characters.Flynn);
        ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_shocked, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Flynn, '"Oh … ich weiß gar nicht, was ich sagen soll! Meint ihr, meine Regierung findet mich dort nicht?"');
        await ƒS.Speech.tell(characters.maincharacter, '"Auf keinen Fall!"');

        ƒS.Character.hide(characters.Kailani);
        ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(40, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Kailani, '"Du hast geholfen, mich zu retten, Jetzt sind wir dran mit retten!"');
        await ƒS.Speech.tell(characters.maincharacter, '"Kommt mit, wir reisen nach Hause. Ich habe dieses Grau einfach satt."');
        ƒS.Character.hide(characters.Flynn);
        ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_wo_skeptical, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Kailani, '"Ich bin so froh, wieder heimzugehen. Dort ist zwar alles langweilig und niemand hat schicke Klamotten an. Dafür lieben wir uns, so wie wir sind!"');

        await ƒS.Location.show(locations.Chp08_ArrivalFactory);
        await ƒS.Speech.tell(characters.maincharacter, "Die Mittagssonne strahlt vom Himmel. Du fragst dich, ob ein Reisen mit dem Handspiegel auch bei Mittag, statt bei Mitternacht möglich ist. Schließlich ist in dieser Welt – wie hat Flynn sie nochmal genannt, Norovia? – alles Andersherum.");
          
        let Chp10GoodEndingElementAnswers5 = {
          iSayOption1: "Spieglein, Spieglein, weise mir mein Routlein",
          iSayOption2: "Spieglein, Spieglein, weise mir mein Sträßlein",
          iSayOption3: "Spieglein, Spieglein, weise mir mein Weglein",

        };
        let Chp10GoodEndingElement5 = await ƒS.Menu.getInput(Chp10GoodEndingElementAnswers5, "choicesCSSclass");

        await ƒS.Location.show(locations.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge,);

        await ƒS.Location.show(locations.Chp01_CS_ArrivalHome);
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

    }
  }
}
