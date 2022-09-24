namespace Spiegel_VN {
  export async function textRiddle(): ƒS.SceneReturn {
    await ƒS.Speech.tell("", "Ich habe ein Bett, doch ich find keine Ruh.<br>'Ich habe einen Mund, doch ich kann nicht sprechen.<br>Ich bewege mich rasend schnell, doch ich verlasse niemals einen Ort.<br>Wer oder was bin ich? Tipp: Es hat etwas mit Wasser zu tun!<br/>", false);
    let answer: String = await ƒS.Speech.getInput();
    
    if (answer.toLowerCase() == "fluss") {
      console.log("RICHTIG!");
      await ƒS.Speech.tell("Baum der Wünsche", "Das erste Rätsel geschafft!")
      
    }
    else {
      await ƒS.Speech.tell("Baum der Wünsche", "Denke nochmal nach ...")
    }
    

    
    await ƒS.getKeypress(ƒ.KEYBOARD_CODE.SPACE);
  }
}
