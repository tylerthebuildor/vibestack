document.querySelectorAll('pre').forEach(function(pre) {
  var code = pre.querySelector('code');
  if (!code) return;
  var text = code.textContent.trim();
  // Add copy button to single-line blocks or blocks containing command patterns
  var isCommand = /^(curl|npm|pip|cargo|go |bash|powershell|claw|\.\/|Invoke-|Set-)/m.test(text);
  var isSingleLine = text.indexOf('\n') === -1;
  if (isSingleLine || isCommand) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function() {
      navigator.clipboard.writeText(text).then(function() {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function() { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
      });
    });
    pre.appendChild(btn);
  }
});
