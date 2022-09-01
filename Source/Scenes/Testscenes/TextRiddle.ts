namespace Spiegel_VN {
  export async function textRiddle(): ƒS.SceneReturn {
    await ƒS.Speech.tell("", "Wie lautet der Vorname der Autorin dieser Visual Novel?<br/>", false);
    let answer: String = await ƒS.Speech.getInput();
    
    if (answer.toLowerCase() == "luna")
      console.log("RICHTIG!");

    
    await ƒS.getKeypress(ƒ.KEYBOARD_CODE.SPACE);
  }
}
