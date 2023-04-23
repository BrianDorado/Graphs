const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};


function main (phrase) {
  let output = "a"
  output.charAt(0) = 'A'

  console.log(output)
    phrase.split(" ").forEach((elm, index,arr) => {
         console.log(arr[index])
          arr[index] = Object.keys(morseCode).find(key => morseCode[key] === elm)
        }
        
        );
        console.log(phrase)

}

const testPhrase = ".... . .-.. .-.. --- .-- --- .-. .-.. -..";

const secondPhrase = ".-- --- .-. -..   .-- --- .-. -..";

main(testPhrase)

// main(secondPhrase)