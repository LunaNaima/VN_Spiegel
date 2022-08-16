namespace Spiegel_VN {
  export async function testTunnel(): ƒS.SceneReturn {
    let locTunnel = {
      name: "Tunnel",
      background: "./Assets/Test_Minigame_Demon/Standbild_Test.png"
    };

    let demon: ƒS.CharacterDefinition = {
      name: "Demon",
      pose: { attack: "./Assets/Characters/Demon/Demon_smile.png" },
      origin: ƒ.ORIGIN2D.CENTER
    };

    let mirror: ƒS.CharacterDefinition = {
      name: "Mirror",
      pose: { normal: "./Assets/Items/Mirror_silver_front.png" },
      origin: ƒ.ORIGIN2D.CENTER
    };

    await ƒS.Location.show(locTunnel);
    await ƒS.Character.show(
      mirror,
      mirror.pose.normal,
      ƒS.positionPercent(50, 50)
    );
    await ƒS.Character.show(
      demon,
      demon.pose.attack,
      ƒS.positionPercent(50, 50)
    );
    let nodeDemon: ƒ.Node = await ƒS.Character.get(demon).getPose(demon.pose.attack);
    let nodeMirror: ƒ.Node = await ƒS.Character.get(mirror).getPose(mirror.pose.normal);
    // adjust mirror position
    nodeMirror.getComponent(ƒ.ComponentMesh).mtxPivot.translateY(0.1);
    nodeMirror.getComponent(ƒ.ComponentMesh).mtxPivot.translateX(-0.05);
    // prevent normalization error
    nodeDemon.mtxLocal.translateX(1);

    let graph: ƒ.Node = ƒS.Base.getGraph();
    let margin: number = 960;
    let demonTargetPosition: ƒ.Vector3 = ƒ.Vector3.ZERO();
    let demonMood: number = -1000;

    graph.addComponent(new ƒ.ComponentTransform());
    let viewport: ƒ.Viewport = Reflect.get(ƒS.Base, "viewport");
    let camera: ƒ.ComponentCamera = viewport.camera;
    camera.projectCentral(camera.getAspect(), camera.getFieldOfView(), camera.getDirection(), camera.getNear(), 2 * camera.getFar());

    // start game interactions
    viewport.canvas.addEventListener("mousemove", moveMirror);
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);

    // stop game when space pressed
    await ƒS.getKeypress(ƒ.KEYBOARD_CODE.SPACE);

    // cleanup and end chapter
    graph.cmpTransform.mtxLocal = ƒ.Matrix4x4.IDENTITY();
    ƒ.Loop.removeEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);
    viewport.canvas.removeEventListener("mousemove", moveMirror);
    ƒS.update(0);
    // chapter end


    // game functions
    function moveMirror(_event: MouseEvent): void {
      let offset: ƒ.Vector2 = new ƒ.Vector2(_event.offsetX, _event.offsetY);
      let pos: ƒ.Vector3 = ƒS.pointCanvasToMiddleGround(offset);
      nodeMirror.mtxLocal.translation = ƒ.Vector3.DIFFERENCE(pos, graph.mtxWorld.translation);
    }

    function loopFrame(_event: Event): void {
      let moveGraph: ƒ.Vector3 = ƒ.Vector3.ZERO();

      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A, ƒ.KEYBOARD_CODE.ARROW_LEFT]))
        moveGraph.x = 20;
      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D, ƒ.KEYBOARD_CODE.ARROW_RIGHT]))
        moveGraph.x = -20;
      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S, ƒ.KEYBOARD_CODE.ARROW_DOWN]))
        moveGraph.z = -20;
      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W, ƒ.KEYBOARD_CODE.ARROW_UP]))
        moveGraph.z = 20;

      if (Math.abs(graph.mtxLocal.translation.x + moveGraph.x) < margin)
        graph.mtxLocal.translate(moveGraph);

      let demonSpeed: number = 10;
      let move: ƒ.Vector3 = ƒ.Vector3.DIFFERENCE(demonTargetPosition, nodeDemon.mtxLocal.translation);
      if (move.magnitude < demonSpeed)
        demonTargetPosition = ƒ.Random.default.getVector3
          (new ƒ.Vector3(-800, 100, 0), new ƒ.Vector3(800, -400, 0)
          );

      move.normalize(demonSpeed);
      nodeDemon.mtxLocal.translate(move);

      let prox: ƒ.Vector3 = ƒ.Vector3.DIFFERENCE(nodeDemon.mtxLocal.translation, nodeMirror.mtxLocal.translation);
      // console.log(prox.magnitude);
      if (prox.magnitude > 340) {
        console.log("I see you!");
        demonMood -= 50;
      }
      else {
        console.log(demonMood);
        demonMood += 2;
      }

      ƒS.update(0);
    }
  }
}
