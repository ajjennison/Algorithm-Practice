function pairElement(str) {
  var pairMap = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'T'
  };
  
  var pairs = [];
  
  for(var i = 0; i < str.length; i++) {
    pairs.push([str.charAt(i), pairMap[str.charAt(i)]]);
  }
  
  return pairs;
}

//Expected Output: [['G', 'C'], ['C', 'G'], ['G', 'C']]
pairElement("GCG");

//Expected Output: [['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C'], ['A', 'T']]
pairElement("ATCGA");
