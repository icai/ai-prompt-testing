# AI-prompt-testing

  chatgpt button for website to generate testing

  <div align="center">

[![NPM Version][npm-image]][npm-url]
[![License][license-image]][license-url]



[npm-image]: https://img.shields.io/npm/v/ai-prompt-testing.svg
[npm-url]: https://www.npmjs.com/package/ai-prompt-testing
[license-image]: https://img.shields.io/npm/l/ai-prompt-testing.svg
[license-url]: https://github.com/icai/ai-prompt-testing/blob/master/LICENSE


</div>




##  Configure



### Add chatbtn code manually


Below is the chatbtn code for this account. Please copy and paste this code into the code of every page on your site, immediately after the <head> or <body> element. Only one chatbtn tag can be added per page.


```js

<script async src="https://unpkg.com/ai-prompt-testing/lib/chatgpt.umd.js?id=aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ=="></script>
<script>
  window._chatData = window._chatData || [];
  function chatag(){_chatData.push(arguments);}
  chatag('js', new Date());
  chatag('config', 'aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ==');
</script>

```

or 

```js
<script>
var tracker_id = 'aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ=='
function chatag(){_chatData.push(arguments);}
var url = "https://unpkg.com/ai-prompt-testing/lib/chatgpt.umd.js?id=" + tracker_id;
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



### Chatag config

-  chatag('config', 'aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ==');
  
  'aHR0cHM6Ly9kb2NzLnczY3ViLmNvbQ==' equal to btoa(location.origin)

    



### Lastest library


https://unpkg.com/ai-prompt-testing


## Demo 

 
https://docs.w3cub.com/rust/std/index


## LICENSE

Copyright (c) Terry Cai. Licensed under the MIT license.




