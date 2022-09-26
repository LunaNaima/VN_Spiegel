namespace Spiegel_VN {
  export async function Chp03_E_DiscoverLibrary(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp03_E_DiscoverLibrary);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Dein Lieblingsort in diesem Dorf: die Bücherei. Hier versteckst du dich gerne, wenn es draußen zu laut wird. In der Bücherei ist es warm und gemütlich, und niemanden stört es, wenn du dich stundenlang darin aufhältst.");
    await ƒS.Speech.tell(characters.maincharacter, " Das Besondere ist das Bücherregal der Alten Zeit. Da stehen die wenigen Bücher, die von früher überlebt haben. Die Schrift kannst du kaum noch lesen, trotzdem blätterst du gerne durch, weil dich die Alte Welt fasziniert. Die Alte Welt war viel größer als deine heute.");
    await ƒS.Speech.tell(characters.maincharacter, "Früher wurden die Erdteile durch unsichtbare Kräfte zusammengehalten, bis die Kraft zerstört wurde und sie auseinanderbrachen. Mehr kannst du von den zerfallenen Seiten jedoch nicht erfahren.");

    return "02_CS New day";
    }
  }
