namespace Spiegel_VN {
  export async function imageRiddle(): ƒS.SceneReturn {
    let locLake = {
      name: "Lake",
      background: "./Assets/Backgrounds/CrossLake.png"
    };


    await ƒS.Location.show(locLake);
    ƒS.update(0);

    createHitbox(0);
    createHitbox(1);

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
          break;
        case "hit1":
          console.log("Nicht Leuchtturm");
          break;
      }
    }
  }
}
