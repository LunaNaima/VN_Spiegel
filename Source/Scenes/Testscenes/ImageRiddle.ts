namespace Spiegel_VN {
  export async function imageRiddle(): ƒS.SceneReturn {
    let locLake = {
      name: "Lake",
      background: "./Assets/Backgrounds/Chapter08/CrossLake.png"
    };
        ƒS.Sound.fade(music.theme_ordinaryworld, 0.8, 0.1, true);



    await ƒS.Location.show(locLake);
    ƒS.update(0);

    createHitbox(0);
    createHitbox(1);
    createHitbox(2);
    createHitbox(3);
    createHitbox(4);
    createHitbox(5);
    createHitbox(6);
    createHitbox(7);

    await ƒS.getKeypress(ƒ.KEYBOARD_CODE.SPACE);


    // -------------------
    function createHitbox(_number: number): HTMLSpanElement {
      let scene: HTMLElement = document.querySelector("scene");
      let hitbox: HTMLSpanElement = document.createElement("span");
      hitbox.id = "hit" + _number;
      hitbox.className = "lake";
      scene.appendChild(hitbox);
      hitbox.addEventListener("click", hndClick);
      return hitbox;
    }

    function hndClick(_event: MouseEvent): void {
      switch ((<HTMLSpanElement>_event.target).id) {
        case "hit0":
          console.log("Leuchtturm");
          ƒS.Speech.tell("", "Auf dem Leuchtturm könnten wir Ausschau nach Schiffen halten? Aber wie kommen wir dahin?");
          break;
        case "hit1":
          console.log("Steine");
          ƒS.Speech.tell("", "Ich weiß nicht, ob über die Steine hüpfen so eine gute Idee ist.");
          break;
        case "hit2":
          console.log("Wasser");
          ƒS.Speech.tell("", "Willst du wirklich rüber schwimmen? Das würde ich mir nochmal überlegen!");
          break;
        case "hit3":
          console.log("Schildkröten");
          ƒS.Speech.tell("", "Die Schildkröten lassen uns sicher nicht auf ihnen reiten!");
          break;
        case "hit4":
          console.log("Schilf");
          ƒS.Speech.tell("", "Perfekt. Hinter dem Schilf liegt ein Boot.");
          dataForSave.pickedBoat = true;
          // return Chp01_01_IntroMarketplace
          break;
        case "hit5":
          console.log("Vögel");
          ƒS.Speech.tell("", "Ich würde auch sofort rüber fliegen! Aber das klappt nicht.");
          break;
        case "hit6":
          console.log("Wald");
          ƒS.Speech.tell("", "Ein Floß bauen könntet ihr auch. Wo kriegt ihr aber das Werkzeug her?");
          break;
      }
    }
    // if (dataForSave.pickedBoat = true) {
      return "01_01 Intro Marketplace";
    // }
  }
}
