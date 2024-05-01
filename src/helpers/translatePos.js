export function translatePartOfSpeech(pos) {
  switch (pos) {
    case 'noun':
      return 'существительное';
    case 'verb':
      return 'глагол';
    case 'participle':
      return 'причастие';
    case 'adjective':
      return 'прилагательное';
    case 'preposition':
      return 'предлог';
    case 'adverb':
      return 'наречие';
    case 'numeral':
      return 'числительное';
    case 'conjunction':
      return 'союз';
    case 'pronoun':
      return 'местоимение';
    case 'particle':
      return 'частица';
    case 'interjection':
      return 'междометие';
    case 'predicative':
      return 'предикатив';
    default:
      return pos;
  }
}
