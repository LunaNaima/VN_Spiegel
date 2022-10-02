namespace Spiegel_VN {
  export async function Chp01_CS_PerchaseMirror(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_03_IntroMirror);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_34_neutral, ƒS.positionPercent(70, 100));
    ƒS.update();
    
    //*** BEGIN DIALOGUE */
    await ƒS.Speech.tell(characters.mirrorMerchant, '"Ah, Sie sind bestimmt die Schwester!"');
    ƒS.update();
    await ƒS.Speech.tell(characters.Mama, '"Ach, lassen Sie das Geschmeichlel! Ich wollte nur mein Kind abholen."');
    await ƒS.Speech.tell(characters.mirrorMerchant, '"Lassen Sie sich doch für einen kurzen Moment aus Ihrem stressigen Alltag entführen … in eine Welt, die aus Ihren Träumen gebaut ist."');
    ƒS.update();
    await ƒS.Speech.tell(characters.mirrorMerchant, '"Darf ich Ihnen den magischen Spiegel vorführen? Es funktioniert so: Sie halten sich den Spiegel vor das Gesicht und sagen “Spieglein, Spieglein, weise mir mein Träumlein” hinein, und dann dürfen Sie sich etwas wünschen."');
    await ƒS.Speech.tell(characters.mirrorMerchant, '"Hier, ich zeige es Ihnen: Spieglein, Spieglein, weise mir mein Träumlein! Ich wünschte, ich wäre ein König vor einem wunderschönen Strand!"');
    await ƒS.Location.show(locations.Chp01_03_MirrorDemo);
    ƒS.Character.hideAll();
    ƒS.update();
    await ƒS.Speech.tell(characters.mirrorMerchant, '"Schauen Sie, wie brillant die Farben sind! Was meinen Sie, für nur zwei Goldstücke?"');
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_34_neutral, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mama, '"Für mich ist so eine Spielerei nichts! Aber vielleicht für Mutti …?"');
    await ƒS.Location.show(locations.Chp01_03_IntroMirror);
    ƒS.update();
    await ƒS.Speech.tell(characters.mirrorMerchant, '"Die Spiegel eignen sich wunderbar als Geschenk für Ihre Frau!"');
    await ƒS.Speech.tell(characters.Mama, '"Sie ist Künstlerin, wissen Sie; mit diesem Spiegel könnte sie vielleicht ihre Gedanken besser visualisieren, manchmal fehlt ihr das."');
    await ƒS.Speech.tell(characters.mirrorMerchant, '"Das denke ich doch auch! Als Inspiration dient der Spiegel geradezu vorzüglich!"');
    await ƒS.Speech.tell(characters.Mama, '"Na gut, wir probieren es mal aus! Dann nehmen wir diesen hier."');
    await ƒS.Speech.tell(characters.maincharacter, "Mama überreicht dem Händler die Goldstücke aus ihrer Geldbörse. Der strahlende Händler packt den Spiegel vorsichtig in glitzerndes Papier und steckt ihn Mama in die Tasche. Du hast ein komisches Gefühl dabei, schüttelst es aber ab und denkst, es ist bestimmt nur dein knurrender Magen.");
    await ƒS.Speech.tell(characters.Mama, '"So, alles erledigt, ab nach Hause!"');
    ƒS.Character.hideAll();
    return "01_CS Arrival Home";
  }
}
