namespace Spiegel_VN {
  export async function Chp01_CS_ArrivalHome(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.black);
    await ƒS.update(transitions.fade.duration,transitions.fade.alpha,transitions.fade.edge,);

    await ƒS.Location.show(locations.Chp01_CS_ArrivalHome);
    await ƒS.update(transitions.fade.duration,transitions.fade.alpha,transitions.fade.edge);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit2_dress3_smile, ƒS.positionPercent(45, 100));
    await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_laugh, ƒS.positionPercent(10, 100));
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.maincharacter, "Zusammen mit Evarius, Kailani und Mama nimmst du die Abkürzung durch das Feld in Richtung zuhause. Das kleine Häuschen, in dem ihr, seit du denken kannst, lebt, liegt am Rande des Dorfes, dort, wo die Bäume enger zusammenstehen und das Moos schon an den Hauswänden hochkriecht.");
    await ƒS.Speech.tell(characters.maincharacter, "Deine wenigen Freunde leben im Zentrum und finden dein Haus abgeschieden; du aber liebst die Stille und die unendlichen Möglichkeiten, die ein großer Wald zum Spielen anbietet.");
    
    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress4_smile, ƒS.positionPercent(55,100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mutti, '"Da seid ihr ja! Wie war´s auf dem Markt? Habt ihr alles gefunden? Essen ist gleich fertig! Zieht eure Schuhe aus. Ich weiß, ich sage es jeden Tag. Aber ich werde es auch in Zukunft immer sagen, weil ihr sonst alles zermatscht."');
    await ƒS.Speech.tell(characters.maincharacter, "Du tauschst einen Blick mit deinen Geschwistern und schmunzelst. Mutti ist einfach überall mit ihren Gedanken.");
    await ƒS.Speech.tell(characters.Mutti, '"Was habt ihr denn da gekauft? Oh, der ist aber schön!"');
    await ƒS.Speech.tell(characters.maincharacter, "Sie zieht den Spiegel aus der Verpackung und bewundert ihn.");
    
    ƒS.Character.hide(characters.Mama);
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_shocked, ƒS.positionPercent(80, 100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.Mama, '"Du warst wieder zu schnell! Ich wollte ihn dir eigentlich gerade geben, als Geschenk"');
    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress4_laugh, ƒS.positionPercent(55, 100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.Mutti, '"Ein Geschenk für mich? Ihr seid ja süß. Der ist auch hübsch. Ich stelle ihn mir gleich ins Bad."');
    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit2_dress3_happy, ƒS.positionPercent(40, 100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.maincharacter, '"Das ist nicht nur irgendein Spiegel. Er kann dir deine Wünsche zeigen! Oder so ähnlich hat zumindest der Händler auf dem Markt gesagt."');
    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress4_frown, ƒS.positionPercent(55, 100));
    ƒS.update();
    
    ƒS.Character.hide(characters.Mama);
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(80, 100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.Mama, '"Er zeigt dir wohl deine Wünsche! Man sagt einen Spruch auf und wünscht sich etwas, dann kann man es im Spiegel bewundern. Ich dachte, wenn es dir nicht gefällt, hast du trotzdem einen Handspiegel zum Benutzen."');
    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress4_neutral, ƒS.positionPercent(55, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mutti, '"Eure Mama, immer die Pragmatische. Ist eine verrückte Idee, diese Wunsch-Anzeige. Ich kann es kaum erwarten, ihn auszuprobieren."');
    await ƒS.Speech.tell(characters.Mutti, '"Aber erstmal essen wir! Evarius, Kailani, bitte deckt schon mal den Tisch. Du kannst die Einkäufe in die Küche bringen. Und geh doch bitte in den Garten, um ein paar Kräuter für das Abendessen zu pflücken."');

    return "02_00 Arrival Home";
  }
}
