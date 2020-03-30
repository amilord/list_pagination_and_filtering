Hiding and showing HTML on a page, using a set of buttons that you add to the page dynamically. In other words, this is basic DOM Manipulation

The two main parts of this project that I need to complete to get a Meets Expectations grade require me to add buttons to the bottom of the page and show different sets of student information in list of 10 with the last page being 4 students when each button is clicked.

 I made the necesary changes below to my code in  the script.js file and was able to get it to run scuccessfully. 

 Edit suggestions from slack unit 2 chanel
 
You have an error in your for loop you have <= list.length; but that should be < list.length;  If you change that then it fixes an TypeError you are getting. 
In your  appendPageLinks function you are trying to get the div but  it doesn't exist yet. You should be creating it. 
You are appending the div to parentDiv with the page class  You are using querySelectAll to get the .page div but you should use document.querySelector since you are just bringing back one element.
 You are trying to select the ul but like the div you need to create it then you can append it to the div you created.
In line 83 you have a typo you wrote inks instead of links 
In lines 77 and 80  you need to use createElement because the those elements don't exist yet so you need to create them then you can select them or add attributes to them.
After those changes are done at the bottom of your script you can call your functions like this
showPage(studentlistitems,1)
appendPageLinks(studentlistitems)
and your everything should work! Hope that helps you! A lot of the bugs turned out to be that you were trying to select elements that did not exist yet. One way to check is to console.log the element you are selecting. If it shows up undefined or null then you know something is wrong.  You can also look at the HTML to get an idea of what elements need to be created and which ones already exist. Keep up the awesome work :grinning: (edited)