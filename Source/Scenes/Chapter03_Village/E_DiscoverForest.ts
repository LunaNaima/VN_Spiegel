namespace Spiegel_VN {
  export async function Chp03_E_DiscoverForest(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp05_Forestpath)
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Der Wald hinter eurem Haus ist trotz der fahlen Sonne noch dunkel. Ein leichter Wind fegt durch die Blätter und lässt die Zweige wie winkende Arme hin und her streifen. Deine Eltern haben euch Kinder jeden Tag im Wald spielen lassen. Ihr durftet immer so weit rausgehen, wie ihr wolltet.");
    await ƒS.Speech.tell(characters.maincharacter, "Aber eine natürliche Grenze gab es doch: an einer bestimmten Stelle im Wald wachsen die Bäume so dicht zusammen, dass man gar nicht durchschauen kann. Als kleines Kind standest du davor, hast angestrengt versucht, in das Dunkle hineinzuschauen und dich gefragt, was dahinter wohl verborgen ist ...");
    await ƒS.Speech.tell(characters.maincharacter, "Denn schon damals hattest du den Eindruck, als behüten die Bäume ein Geheimnis, einen verwunschenen Ort, den sie beschützen müssen. Deshalb stellen sie sich wie Wächter davor auf. ");

    return "03_00 New day";
  }
}
