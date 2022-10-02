namespace Spiegel_VN {
  export async function Chp09_InFactory(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp09_InFactory);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Ihr steht in der Ecke einer gewaltigen Halle, in der es nur so vor Beschäftigten wuselt. In einzelnen Kammern stehen Menschen mit farbigen Klamotten vor großen Spiegeln, während viele in grauen Kutten geschäftig hin und her laufen. Trotzdem herrscht eine angespannte Stille.");
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_shocked, ƒS.positionPercent(85, 100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.maincharacter, '"Das ist … die Fabrik! Von der die Bettlerin gesprochen hat! Was ist hier los?"');
    await ƒS.Speech.tell(characters.Flynn, '"Es sieht aus, als ob sie etwas vorführen …"');
    await ƒS.Speech.tell(characters.maincharacter, "Tatsächlich: Die Menschen drehen und wenden sich in den Spiegelkammern. Sie flattern mit den Armen oder schwingen ihre Hüften, zeigen ihre Muskeln oder fahren sich durch glänzende Haare. Die Bewegungen kommen dir bekannt vor, aber du kannst es gerade nicht zuordnen. Plötzlich –");

    await ƒS.Location.show(locations.Chp09_InFactoryWK);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Kailani!!! Da ist sie! KAILANI!"');
    await ƒS.Speech.tell(characters.maincharacter, "Deine Schwester steht in der Schlange mit den anderen Kuttentragenden. Sie sieht nicht auf, als du ihren Namen rufst. Sie sieht erschöpft und fast gebrochen aus, Zustände, in denen du sie noch nie gesehen hast. Du willst losrennen und sie holen, doch Flynn hält deinen Ärmel fest.");
    
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_sad, ƒS.positionPercent(85, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Shh! Siehst du nicht die Wachen da drüben? Du kannst hier nicht einfach so durchrennen! Wir brauchen einen Plan."');
    await ƒS.Speech.tell(characters.maincharacter, '"Ich will keinen Plan! Meine Schwester ist dort drüben!"');
    await ƒS.Speech.tell(characters.Flynn, '"Aber siehst du denn nicht, wie gefährlich das ist? Was ist, wenn wir gefasst werden? Wenn wir hier ins Gefängnis geworfen werden? Dann kannst du deiner Schwester erst recht nicht helfen!"');
    await ƒS.Speech.tell(characters.maincharacter, "Verzweifelt siehst du zu, wie sich Kailani in der Schlange vorwärtsbewegt und in einem Tunnel verschwindet.");

    await ƒS.Location.show(locations.Chp09_InFactory);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Tränen laufen dir über das Gesicht. Trotzdem hat Flynn Recht; es wäre unsinnig gewesen, euch in Gefahr zu bringen. Trotzdem kannst du es nicht fassen, dass du Kailani einfach so hast gehen lassen.");

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(85, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Sie ist wieder da!"');
    await ƒS.Speech.tell(characters.maincharacter, "Du schaust ungläubig auf. Kailani steht wieder im Raum. Nur: sie sieht komplett anders aus. Eine lange Perücke bedeckt ihre schulterlangen, braunen Haare. Sie trägt ein pinkes Kleid und – es kann nicht anders sein – ein ausgestopftes Hinterteil. Sie geht in eine der Kabinen und beginnt, sich ebenfalls hin und her zu wiegen.");
    await ƒS.Speech.tell(characters.maincharacter, '"Was macht sie denn? Das ist doch so komisch! Ihr geht es nicht gut! Warum muss sie sich hier anziehen und –"');

    await ƒS.Speech.tell(characters.maincharacter, "Und da fällt es dir wie Schuppen von den Augen: Sie ist das Spiegelbild! Das Spiegelbild, das man sich mit dem Handspiegel wünschen kann! In deinem Kopf schwirrt es.");
    await ƒS.Speech.tell(characters.maincharacter, '"Sie gibt vor, jemand anderes zu sein. Eine Person, die jetzt, in diesem Moment, auf der anderen Seite des Spiegels sitzt und sich wünscht, zu fliegen."');
    await ƒS.Speech.tell(characters.maincharacter, '"Kailani hat diesen Szenen zugeschaut, jeden Tag! Sie hat sich selbst im Spiegel gesehen – aber warte, das war nicht sie. Sondern jemand, der sie imitiert und getäuscht hat. Der Spiegel hat diese Kabine gezeigt!"');

    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_confused, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Meinst du, das Spiegelbild in deinem Handspiegel? Diese Halle ist also eine Spiegelbild-Fabrik?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Genau, in dem magischen Spiegel! Warte mal – woher weißt du denn, dass ich einen Handspiegel habe?"');
    await ƒS.Speech.tell(characters.maincharacter, "Flynn tut so, als hätte er dich nicht gehört und schaut weiter angestrengt den Arbeitenden zu. Er kann gar nichts von deinem Spiegel wissen! Das Misstrauen, das heute Morgen erwacht ist, wächst.");

    
    do {
      let Chp09InFactoryElementAnswers = {
        iSayListenToGuards: '"(Erkunden) Wachen zuhören"',
        iSayCubicle: '"(Erkunden) Kabine anschauen"',
        iSayContinue: "Weiter",
      };
      let Chp09InFactoryElement = await ƒS.Menu.getInput(Chp09InFactoryElementAnswers, "choicesCSSclass");

      switch (Chp09InFactoryElement) {
        case Chp09InFactoryElementAnswers.iSayListenToGuards:
          await ƒS.Speech.tell(characters.maincharacter, "Geduckt schleichst du dich näher an die Wachen heran. Vielleicht kannst du ein paar Informationen heraushören?");
          await ƒS.Speech.tell("Wache 1", '"... und da meinte sie zu mir, der nächste Schwung komme wohl morgen. Platz hat’s hier noch genug."');
          await ƒS.Speech.tell("Wache 2", '"Die Neuen können in den rechten Tunnel. Hauptsache, ich kann am Wochenende wieder ‘rüber und der Mann im Turm ist glücklich. Hast gehört, was Getliw neulich passiert ist?"');
          await ƒS.Speech.tell("Wache 1", '"Nee! Ich war doch im Urlaub. Was ist passiert?"');
          await ƒS.Speech.tell("Wache 2", '"Naja, Getliw hatte schon immer ein zu weiches Herz, weißt ja. Er wollte wohl einem Sklaven das Sixpack-Polster zubinden, weil er das nicht richtig gemacht hatte. Aber Kontakt mit den Sklaven ist ja verboten, dann wurde der Alarm ausgelöst. Er wurde erwischt und musste hoch in den Turm. Seitdem hat ihn niemand mehr gesehen …"');
          await ƒS.Speech.tell("Wache 1", '"Das ist ja was! Würde ich niemals tun. Hätte er doch …"');
          await ƒS.Speech.tell(characters.maincharacter, "Du überlegst fieberhaft. Mit den Sklaven darf man also nicht sprechen! Gut, dass du vorhin nicht Kailani holen wolltest. Und im Turm sitzt ein Mann. Vielleicht der Dämon, von dem der Koch gesprochen hatte?");
          ƒS.Speech.clear();
          break;
        
        case Chp09InFactoryElementAnswers.iSayCubicle:
          await ƒS.Speech.tell(characters.maincharacter, "Du willst dir diese Kabine genauer anschauen. Ein großer Spiegel hängt an der Wand. Als du zuschaust, blitzt eine Landschaft darauf auf. Ein Strand? Auf einmal tritt ein Sklave davor und spannt seine Muskeln an.");
          await ƒS.Speech.tell(characters.maincharacter, "Seine Schultern sind breit. Als er sich dreht, siehst du, dass er vorne ein Polster trägt. Ein Sixpack-Polster umspannt seinen Bauch und lässt ihn gleichzeitig stark und schlank aussehen. Du denkst an die Dorfbewohner daheim.");
          await ƒS.Speech.tell(characters.maincharacter, "Keiner von denen hat ein Sixpack und sicherlich nicht so breite Schultern. Dort achtet auch niemand auf das Äußere. Wichtig ist, dass sich jede Person in die Gemeinschaft integriert und freundlich zu Anderen ist. Die Menschen hier haben wohl jeglichen Bezug zur Gemeinschaft verloren, wenn ihnen das Äußere das Wichtigste ist.");
          ƒS.Speech.clear();
          break;
        
        case Chp09InFactoryElementAnswers.iSayContinue:
          dataForSave.pickedChp09InFactoryContinue = true;
          await ƒS.Speech.tell(characters.maincharacter, '"Flynn, gehen wir. Ich habe genug gesehen. Diese armen Sklaven …"');
          ƒS.Speech.clear();
          ƒS.Character.hideAll();
          return "09_Scout Tower";
      }
    } while (!dataForSave.pickedChp09InFactoryContinue);
  }
}
