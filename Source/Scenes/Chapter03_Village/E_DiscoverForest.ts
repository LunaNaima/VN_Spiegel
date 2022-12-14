namespace Spiegel_VN {
  export async function Chp03_E_DiscoverForest(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp05_Forestpath);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Ein leichter Wind fegt durch die Blätter und lässt die Zweige wie winkende Arme hin und her streifen. Deine Eltern haben euch Kinder jeden Tag im Wald spielen lassen. Ihr durftet immer so weit rausgehen, wie ihr wolltet.");
    await ƒS.Speech.tell(characters.maincharacter, "Aber eine natürliche Grenze gab es doch: an einer bestimmten Stelle im Wald wachsen die Bäume so dicht zusammen, dass man gar nicht durchschauen kann. Als kleines Kind hast du dich gefragt, was dahinter wohl verborgen ist ...");
    return "03_00 New day";
  }
}
