namespace Spiegel_VN {
  export async function Chp10_IntoTower(): ƒS.SceneReturn {


    await ƒS.Speech.tell(characters.maincharacter, "Es ist soweit! Du zitterst vor Angst. Was ist, wenn du den Dämon nicht besiegen kannst? Welcher Mensch kann schließlich einfach so Dämonen besiegen?");
    await ƒS.Speech.tell(characters.maincharacter, "Hättest du einen Plan machen sollen, wie Flynn es vorgeschlagen hat? Mit leeren Händen und nur deinem ‘offenen Herzen’, wie es der Wünschebaum sagen würde, trittst du nun dem Bösen entgegen. Ob das reicht?.");

    await ƒS.Location.show(locations.Chp10_GroundFloorTower);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Gemeinsam mit Flynn schleichst du dich durch eine unscheinbare Tür und stehst am Ende eines Tunnels. Obwohl der Turm von außen schmal und rund war, scheint der Tunnel unendlich lange zu sein. Du merkst sofort, dass hier etwas Magisches in der Luft liegt.");

    do {
      let Chp10InTowerElementAnswers = {
        iSayPortrait: "(Erkunden) Portrait anschauen",
        // iSayWindow: '"(Erkunden) Fenster"',
        iSayContinue: "Weiter"
      };
      let Chp10InTowerElement = await ƒS.Menu.getInput(Chp10InTowerElementAnswers, "choicesCSSclass");

      switch (Chp10InTowerElement) {
        case Chp10InTowerElementAnswers.iSayPortrait:
          await ƒS.Location.show(locations.Chp10_ExplorePortrait);
          ƒS.Character.hideAll();
          await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
          await ƒS.Speech.tell(characters.maincharacter, "Du schaust dir die lange Reihe Portraits an, die an der Wand hängen. Die meisten davon sind sehr alt; die Ölfarbe blättert bei einigen sogar ab. Dir fällt ein neues Portrait, das weiter vorne hängt, auf. Eine junge Frau mit bunten Haaren blickt dich amüsiert an. Auf einer goldenen Tafel am Bildrand steht: “Königin Annabelle II, *1347”. Die verstorbene Königin! Aber es ist kein Sterbedatum vermerkt? Vielleicht hat sie den Dämon doch überlebt?");
          ƒS.Speech.clear();
          break;

        // case Chp10InTowerElementAnswers.iSayWindow:
        //   await ƒS.Location.show(locations.Chp10_GroundFloorTower);
        //   ƒS.update();
        //   await ƒS.Speech.tell(characters.maincharacter, "Du schaust aus dem Fenster und erschrickst. Obwohl du und Flynn erst in den Turm eingetreten seid, liegt der Boden plötzlich etliche Meter unter euch. Du blickst auf die graue Welt hinaus und erschauerst. Der Turm soll ungebetene Besucher wohl in die Irre führen. Du schüttelst den Kopf und blickst wieder nach vorne. Bloß nicht ablenken lassen.");
        //   ƒS.Speech.clear();
        //   break;

        case Chp10InTowerElementAnswers.iSayContinue:
          dataForSave.pickedChp10IntoTowerContinue = true;
          await ƒS.Location.show(locations.Chp10_GroundFloorTower);
          ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Wie schön es hier ist! Schau mal, wie das glitzert! Von außen sah der Turm gar nicht so breit aus? Der Dämon ist sicherlich ein Klacks."');
          await ƒS.Speech.tell(characters.maincharacter, "Schön kommt dir der Turm ganz und gar nicht vor, eher unheimlich und ziemlich bedrohlich. Ihr bewegt euch auf leisen Sohlen nach vorne, bis ihr eine kleine Wendeltreppe am Ende des Gangs seht. Vorsichtig schleicht ihr euch hoch.");
          await ƒS.Location.show(locations.black);
          await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

          await ƒS.Location.show(locations.Chp10_MinigameInstructions);
          await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
          await ƒS.Speech.tell(characters.maincharacter, "Was ist das?");

          await ƒS.Location.show(locations.Chp10_Demontunnel);
          await ƒS.Character.show(characters.Demon, characters.Demon.pose.pos2_angry, ƒS.positionPercent(100, 100));
          await ƒS.update();
          await ƒS.Speech.tell(characters.Demon, "Wer wagt es, mich zu stören!");
          return "10_MinigameDemon";
          break;

      }
    } while (!dataForSave.pickedChp10IntoTowerContinue);


  }
}
