function tokenize(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
  }
  
  function termFrequency(tokens) {
    const freq = {};
    tokens.forEach(token => freq[token] = (freq[token] || 0) + 1);
    return freq;
  }
  
  function dotProduct(a, b) {
    let result = 0;
    for (const key in a) {
      if (b[key]) result += a[key] * b[key];
    }
    return result;
  }
  
  function magnitude(vec) {
    return Math.sqrt(Object.values(vec).reduce((sum, val) => sum + val * val, 0));
  }
  
  function cosineSimilarity(vecA, vecB) {
    return dotProduct(vecA, vecB) / (magnitude(vecA) * magnitude(vecB));
  }
  
  function checkPlagiarism(userText, documents) {
    const userTokens = tokenize(userText);
    const userTF = termFrequency(userTokens);
  
    let highest = 0;
    let bestMatch = "";
  
    for (const doc of documents) {
      const docTokens = tokenize(doc);
      const docTF = termFrequency(docTokens);
      const similarity = cosineSimilarity(userTF, docTF);
  
      if (similarity > highest) {
        highest = similarity;
        bestMatch = doc.slice(0, 100) + '...'; // preview
      }
    }
  
    return highest > 0.7
      ? `❌ Plagiarism likely detected (Similarity: ${(highest * 100).toFixed(2)}%)\nMatched with: "${bestMatch}"`
      : `✅ Content seems original (Similarity: ${(highest * 100).toFixed(2)}%)`;
  }
  
  module.exports = { checkPlagiarism };
  