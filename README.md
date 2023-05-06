# AI-prompt-testing

  chatgpt button for website to generate testing




##  Configure



### Add chatbtn code manually


Below is the chatbtn code for this account. Please copy and paste this code into the code of every page on your site, immediately after the <head> or <body> element. Only one chatbtn tag can be added per page.


```js

<script async src="https://unpkg.com/ai-prompt-testing@1.0.1/lib/chatgpt.umd.js?id=aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ=="></script>
<script>
  window._chatData = window._chatData || [];
  function chatag(){_chatData.push(arguments);}
  chatag('js', new Date());
  chatag('config', 'aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ==');
</script>

```

or 

```
<script>
var tracker_id = 'aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ=='
function chatag(){_chatData.push(arguments);}
var url = "https://unpkg.com/ai-prompt-testing@1.0.1/lib/chatgpt.umd.js?id=" + tracker_id;
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = url;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
window._chatData = window._chatData || [];
chatag('js', new Date());
chatag('config', tracker_id);
</script>
```





### chatag config

-  chatag('config', 'aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ==');
  
  'aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ==' equal to btoa(location.origin)

    




## LICENSE

Copyright (c) Terry Cai. Licensed under the MIT license.




