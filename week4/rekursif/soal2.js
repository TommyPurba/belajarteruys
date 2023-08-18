/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    const mapper = {
        a: 'b', e: 'f', i: 'j', o: 'p', u: 'v',
        A: 'B', E: 'F', I: 'J', O: 'P', U: 'V'
      };
      return str.replace(/[aeiou]/gi, match => mapper[match])
  }
  
  function reverseWord (str) {
    // str.reverse();
    return str.split('').reverse().join('');
  }
  
  function setLowerUpperCase (str) {
    let nilaiCampur = '';
    for(let i =0; i<str.length;i++){
        if(str[i]!== str[i].toLowerCase()){
            nilaiCampur += str[i].toLowerCase();
        }else{
            nilaiCampur += str[i].toUpperCase();
        }
    }
    return nilaiCampur;
  }
  
  function removeSpaces (str) {
    return str.split(" ").join('')
  }
  
  function passwordGenerator (name) {
   let ubahVocal = changeVocals(name);
    let hapusSpace = removeSpaces(ubahVocal);
    let toLowerCase = setLowerUpperCase(hapusSpace);
    let gantiWord = reverseWord(toLowerCase);

    if(gantiWord.length>5){
        return gantiWord;
    }else{
        return `Minimal karakter yang diinputkan adalah 5 karakter`;
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'