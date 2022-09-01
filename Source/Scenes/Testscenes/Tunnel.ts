namespace Spiegel_VN {
  export async function testTunnel(): ƒS.SceneReturn {

    let locTunnel = {
      name: "Tunnel",
      background: "./Assets/Test_Minigame_Demon/Background_draft2.png"
    };

    let demon: ƒS.CharacterDefinition = {
      name: "Demon",
      pose: {
        attack: "./Assets/Characters/Demon/Demon_pos2_angry.png",
        normal: "./Assets/Characters/Demon/Demon_smile.png"
      },
      origin: ƒ.ORIGIN2D.CENTER
    };

    let mirror: ƒS.CharacterDefinition = {
      name: "Mirror",
      pose: { normal: "./Assets/Items/Mirror_back.png" },
      origin: ƒ.ORIGIN2D.CENTER
    };

    let soundeffekt = {
      evillaugh: "./Assets/Test_Minigame_Demon/evil-laugh-.mp3"
    };

    let nodeDemon: ƒ.Node;
    await ƒS.Location.show(locTunnel);
    await ƒS.Character.show(mirror, mirror.pose.normal, ƒS.positionPercent(50, 50));
    await ƒS.Character.show(demon, demon.pose.normal, ƒS.positionPercent(50, 50));
    let nodeMirror: ƒ.Node = await ƒS.Character.get(mirror).getPose(mirror.pose.normal);
    let nodeDemonNormal: ƒ.Node = await ƒS.Character.get(demon).getPose(demon.pose.normal);
    let nodeDemonAttack: ƒ.Node = await ƒS.Character.get(demon).getPose(demon.pose.attack);
    nodeDemon = nodeDemonNormal;
    // adjust mirror position
    nodeMirror.getComponent(ƒ.ComponentMesh).mtxPivot.translateY(0.1);
    nodeMirror.getComponent(ƒ.ComponentMesh).mtxPivot.translateX(-0.05);
    // prevent normalization error
    nodeDemon.mtxLocal.translateX(1);

    let graph: ƒ.Node = ƒS.Base.getGraph();
    let margin: number = 960;
    let demonTargetPosition: ƒ.Vector3 = ƒ.Vector3.ZERO();
    let demonMood: number = -4000;

    graph.addComponent(new ƒ.ComponentTransform());
    let viewport: ƒ.Viewport = ƒS.Base.getViewport();

    // start game interactions
    viewport.canvas.addEventListener("mousemove", moveMirror);
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);

    // define signals for fail and success
    let gameOver: ƒS.Signal = ƒS.Progress.defineSignal([
      () => ƒS.Progress.createEventPromise(document, "tunnelFail"),
      () => ƒS.Progress.createEventPromise(document, "tunnelSuccess")
    ]);

    // wait for signals
    let event: Event = await gameOver();
    console.log(event);

    // cleanup and end chapter
    graph.cmpTransform.mtxLocal = ƒ.Matrix4x4.IDENTITY();
    ƒ.Loop.removeEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);
    viewport.canvas.removeEventListener("mousemove", moveMirror);

    // for testing, stop NV from starting
    await ƒS.getKeypress(ƒ.KEYBOARD_CODE.SPACE);
    // chapter end

    // ------------------------------------------------------------------

    // game functions
    function moveMirror(_event: MouseEvent): void {
      let offset: ƒ.Vector2 = new ƒ.Vector2(_event.offsetX, _event.offsetY);
      let pos: ƒ.Vector3 = ƒS.pointCanvasToMiddleGround(offset);
      nodeMirror.mtxLocal.translation = ƒ.Vector3.DIFFERENCE(pos, graph.mtxWorld.translation);
      ƒS.update(0);
    }

    function loopFrame(_event: Event): void {
      let moveGraph: ƒ.Vector3 = ƒ.Vector3.ZERO();

      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A, ƒ.KEYBOARD_CODE.ARROW_LEFT]))
        moveGraph.x = 20;
      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D, ƒ.KEYBOARD_CODE.ARROW_RIGHT]))
        moveGraph.x = -20;
      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W, ƒ.KEYBOARD_CODE.ARROW_UP])) {
        if (Math.abs(nodeDemon.mtxWorld.translation.x) > 600) // demon must be out of the way
          moveGraph.z = 20;
      }

      if (Math.abs(graph.mtxLocal.translation.x + moveGraph.x) < margin)
        graph.mtxLocal.translate(moveGraph);
      if (graph.mtxLocal.translation.z > 2000)
        document.dispatchEvent(new Event("tunnelSuccess"));

      let demonSpeed: number = 17;

      if (demonMood > 0) {
        demonSpeed = 0;
        viewport.canvas.removeEventListener("mousemove", moveMirror);
      }

      if (demonMood > -2500 && nodeDemon == nodeDemonAttack) {
        // console.log("Calm down");
        ƒS.Character.hide(demon);
        ƒS.Character.show(demon, demon.pose.normal, nodeDemon.mtxLocal.translation.toVector2());
        nodeDemon = nodeDemonNormal;
      }
      if (demonMood < -4000 && nodeDemon == nodeDemonNormal) {
        console.log("Watch out!");
        ƒS.Character.hide(demon);
        ƒS.Character.show(demon, demon.pose.attack, nodeDemon.mtxLocal.translation.toVector2());
        nodeDemon = nodeDemonAttack;
      }
      if (demonMood < -8000) {
        console.log("you failed");
        document.dispatchEvent(new Event("tunnelFail"));
      }

      let move: ƒ.Vector3 = ƒ.Vector3.DIFFERENCE(demonTargetPosition, nodeDemon.mtxLocal.translation);
      if (move.magnitude < demonSpeed)
        demonTargetPosition = ƒ.Random.default.getVector3
          (new ƒ.Vector3(-800, 100, 0), new ƒ.Vector3(800, -400, 0)
          );

      move.normalize(demonSpeed);
      nodeDemon.mtxLocal.translate(move);

      let prox: ƒ.Vector3 = ƒ.Vector3.DIFFERENCE(nodeDemon.mtxLocal.translation, nodeMirror.mtxLocal.translation);
      if (prox.magnitude > 340) {
        console.log("I see you!");
        demonMood -= 10;
        if (!ƒS.Sound.isPlaying(soundeffekt.evillaugh))
          ƒS.Sound.play(soundeffekt.evillaugh, 1, false);
      }
      else {
        demonMood += 10;
      }
      ƒS.update(0);
    }
  }
}
