define("lib/shared",["lib/shared"],function(e){var t=0,n=function(){return t++,t};return{increment:n}}),define("lib/bar1",["lib/shared"],function(e){var t=function(){console.log(e.increment())};return{doSomething:t}}),define("lib/bar2",["lib/shared"],function(e){var t=function(){console.log(e.increment())};return{doSomething:t}}),requirejs(["lib/bar1","lib/bar2"],function(e,t){e.doSomething(),t.doSomething()}),define("lib/foo",function(){})