namespace Spiegel_VN {
  export async function Chp07_ImageRiddle(): ƒS.SceneReturn {
    let locLake = {
      name: "Lake",
      background: "./Assets/Backgrounds/Chapter08/CrossLake.png"
    };


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
          console.log("result abfrage", dataForSave.pickedBoat)
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

    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_smile2, ƒS.positionPercent(70, 100));
        ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Da ist ein Boot! Hat das jemand hier liegenlassen? Wie perfekt! Ich wusste übrigens die ganze Zeit, dass sich etwas hinter dem Schilf versteckt."');
        await ƒS.Speech.tell(characters.maincharacter, "Du verdrehst die Augen und hüpfst hinter Flynn ins Boot hinein. Zum Glück ist es trocken und nicht morsch. Ihr stoßt euch mit dem Paddel, das im Boot lag, vom Ufer ab und fahrt los.");

    
    
    
    // await ƒS.Speech.tell(characters.maincharacter, "Und wie kommt ihr über den See?")
    // do {
    //   let Chp08HowToCrossElementAnswers = {
    //     iSayLighthouse: "Leuchtturm",
    //     iSayStones: "Steine",
    //     iSaySwim: "Schwimmen",
    //     iSayTurtles: "Schildkröten",
    //     iSayBoat: "Boot",
    //     iSayBirds: "Vögel",
    //     iSayRaft: "Floß bauen",
    //   };
     
    //   let Chp08HowToCrossElement = await ƒS.Menu.getInput(
    //     Chp08HowToCrossElementAnswers,
    //     "choicesCSSclass"
    //   );
    //   switch (Chp08HowToCrossElement) {
    //     case Chp08HowToCrossElementAnswers.iSayLighthouse:
    //       await ƒS.Speech.tell(characters.maincharacter, "Sicher?")
    //       ƒS.Speech.clear();
    //       break;
        
    //     case Chp08HowToCrossElementAnswers.iSayStones:
    //       await ƒS.Speech.tell(characters.maincharacter, "Sicher?")
    //       ƒS.Speech.clear();
    //       break;
        
    //     case Chp08HowToCrossElementAnswers.iSaySwim:
    //       await ƒS.Speech.tell(characters.maincharacter, "Sicher?")
    //       ƒS.Speech.clear();
    //       break;
        
    //     case Chp08HowToCrossElementAnswers.iSayTurtles:
    //       await ƒS.Speech.tell(characters.maincharacter, "Sicher?")
    //       ƒS.Speech.clear();
    //       break;
        
    //     case Chp08HowToCrossElementAnswers.iSayBoat:
    //       dataForSave.pickedBoat
    //       await ƒS.Speech.tell(characters.maincharacter, "Mit dem Boot kannst du nichts falsch machen.")
    //       ƒS.Speech.clear();
    //       return "08_OnLake";
    //       break;
        
    //     case Chp08HowToCrossElementAnswers.iSayBirds:
    //       await ƒS.Speech.tell(characters.maincharacter, "Sicher?")
    //       ƒS.Speech.clear();
    //       break;
        
    //     case Chp08HowToCrossElementAnswers.iSayRaft:
    //       await ƒS.Speech.tell(characters.maincharacter, "Sicher?")
    //       ƒS.Speech.clear();
    //       break;
    //   }
    // } while (!dataForSave.pickedBoat)
  }
}
