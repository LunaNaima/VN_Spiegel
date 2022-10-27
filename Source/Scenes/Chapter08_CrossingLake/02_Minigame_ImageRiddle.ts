namespace Spiegel_VN {
  export async function Chp07_ImageRiddle(): ƒS.SceneReturn {
    let locLake = {
      name: "Lake",
      background: "./Assets/Backgrounds/Chapter08/CrossLake.png"
    };


    await ƒS.Location.show(locLake);
    ƒS.update(0);
    let hitboxes: HTMLSpanElement[] = // Von Jonas Plotzky programmiert
      [
        createHitbox(0),
        createHitbox(1),
        createHitbox(2),
        createHitbox(3),
        createHitbox(4),
        createHitbox(5),
        createHitbox(6),
        createHitbox(7),
      ];

    await ƒS.getKeypress(ƒ.KEYBOARD_CODE.SPACE);
    for (const hitbox of hitboxes) { // Von Jonas Plotzky programmiert
      hitbox.remove();
    }


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
          ƒS.Speech.tell(characters.maincharacter, "Auf dem Leuchtturm könntet wir Ausschau nach Schiffen halten? Aber wie kommen wir dahin?");
          break;
        case "hit1":
          console.log("Steine");
          ƒS.Speech.tell(characters.narrator, "Ich weiß nicht, ob über die Steine hüpfen so eine gute Idee ist.");
          break;
        case "hit2":
          console.log("Wasser");
          ƒS.Speech.tell(characters.narrator, "Willst du wirklich rüber schwimmen? Das würde ich mir nochmal überlegen!");
          break;
        case "hit3":
          console.log("Schildkröten");
          ƒS.Speech.tell(characters.maincharacter, "Die Schildkröten lassen uns sicher nicht auf ihnen reiten!");
          break;
        case "hit4":
          console.log("Schilf");
          ƒS.Speech.tell(characters.narrator, "Perfekt. Hinter dem Schilf liegt ein Boot. Drücke die Leertaste.");
          break;
        case "hit5":
          console.log("Vögel");
          ƒS.Speech.tell(characters.narrator, "Ich würde auch sofort rüber fliegen! Aber das klappt nicht.");
          break;
        case "hit6":
          console.log("Wald");
          ƒS.Speech.tell(characters.narrator, "Ein Floß bauen könntet ihr auch. Wo kriegt ihr aber das Werkzeug her?");
          break;
      }
    }


    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_smile2, ƒS.positionPercent(70, 100));
        ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Da ist ein Boot! Hat das jemand hier liegenlassen? Wie perfekt! Ich wusste übrigens die ganze Zeit, dass sich etwas hinter dem Schilf versteckt."');
        await ƒS.Speech.tell(characters.maincharacter, "Du verdrehst die Augen und hüpfst hinter Flynn ins Boot hinein. Zum Glück ist es trocken und nicht morsch. Ihr stoßt euch mit dem Paddel, das im Boot lag, vom Ufer ab und fahrt los.");

    

  }
}
