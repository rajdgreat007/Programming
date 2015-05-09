var anagarams = {
  resultString : '',
  areAnagrams : function(str1,str2){
      if(str1.length!==str2.length) return false;
      var obj = {};
      for(var i=0;i<str1.length;i++){
          var char1 = str1.charAt(i), char2 = str2.charAt(i);
          if(obj.hasOwnProperty(char1)) {
              obj[char1] = obj[char1]-1;
              if(obj[char1]==0) delete obj[char1];
          }
          else obj[char1] = 1;
          if(obj.hasOwnProperty(char2)) {
              obj[char2] = obj[char2]-1;
              if(obj[char2]==0) delete obj[char2];
          }
          else obj[char2] = 1;
      }
      return Object.keys(obj).length === 0;
  },
  setResult : function(){
      this.resultString = '';
      var lines = document.getElementById('inputText').value.split('\n');
      var numTestCases = parseInt(lines[0]);
      for(var i = 1;i <=numTestCases;i++){
          var lineArr = lines[i].trim().split(' ');
          var str1 = lineArr[0], str2 = lineArr[1];
          if(this.areAnagrams(str1,str2)){
              this.resultString += lines[i]+ ' : '+ 'YES<br>';
          }else{
              this.resultString += lines[i]+ ' : '+ 'NO<br>';
          }
      }
      document.getElementById('output').innerHTML = this.resultString;
  },
  init : function(){
      document.getElementById('check').onclick = this.setResult.bind(this);
      this.setResult();
  }
};
window.onload = function(){
    anagarams.init();
};