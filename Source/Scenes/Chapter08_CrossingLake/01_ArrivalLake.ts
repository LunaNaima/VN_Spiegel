namespace Spiegel_VN {
  export async function Chp08_ArrivalLake(): ƒS.SceneReturn {
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.black);

    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Location.show(locations.Chp08_Lake);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Der Weg zum See war nicht weit. Als ihr dort ankommt, ist der See tiefblau und gefühlt endlos.");
    await ƒS.Speech.tell(characters.Flynn, '"Der ist ja riesig! So nahe war ich noch nie. Jetzt müssen wir nur noch rüberkommen."');
    await ƒS.Speech.tell(characters.narrator, "Suche im Bild nach Möglichkeiten zur Überfahrt! Klicke dabei auf die Stellen, bei denen sich der Mauszeiger ändert. Wenn du einen Weg gefunden hast, tippe auf die Leertaste.");

    ƒS.Speech.clear();
    return "08_ImageRiddle";
  }
}

