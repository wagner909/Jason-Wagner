var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) greeting = 'Good evening';
else if (hourNow > 12) greeting = 'Good afternoon';
else if (hourNow > 0) greeting = 'Good morning';
else greeting = 'Welcome';
document.write(greeting);
document.write("<br>");
var currentTime = today.getHours() + ":" + today.getMinutes();
document.write("Current time: " + currentTime);

//# sourceMappingURL=hello.f59e6b05.js.map
