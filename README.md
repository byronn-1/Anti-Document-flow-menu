# Anti-Document-flow-menu

Hi, So after a recent interview I decided that I needed to brush up on my basic logical programatic thinking. I decided to try and make a website based off another website some one else had written. Mainly to pick up my spirits I chose a very basic looking website (it had been written with PHP and wordpress by the looks of things). It however turned out that slide menu (the actual action was a fade but the way it faded made it look like a slide menu) on the website I was copying was a much more complex problem than I had initally considered. The simple looking menu which was clearly a plug-in faded-in seamingly from the click of a hamburger menu from right to left and then vice versa. It involved the integrated use of differing techniques from four technologies HTML, vanilla javascript, jQuery and CSS. More specifically the new challenges I faced were from using a combination of......

learning from fresh requestAnimationFrame() because CSS animations seemingly didn't want to be engouraged to render with setTimeout(),
Iterating HTML NodeLists with vanilla Js,
CSS Aninmations,
CSS Transitions (which I had to drop for CSS Animations because I couldn't get them to render?),
adding and removing classes with jQuery,
and the use of jQuery to battle problems of document.getElementsByClassList().

Oh and also using jQuery to reverse a HTML NodeList (which turns out to be a very handy trick)!
