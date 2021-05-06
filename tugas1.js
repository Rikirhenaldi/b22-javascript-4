let deteksiPalindrom = (word) => {
    let arrWord = word.split("")
    let reverseWord = word.split("").reverse()
    let cek = reverseWord.join("") === arrWord.join("")
      if (cek) {
          console.log("Ini Palindrom");
      }else{
          console.log("Ini Bukan Palindrom");
      }
  }
  deteksiPalindrom("malam")