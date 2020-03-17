/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// I created two global variables which store the list items and number of students that will be displayed 
const studentlistitems = document.getElementById ('.student-item')
const itemsperpage = 10;

 
// this `showPage` function hides all of the items in each page list except for the ten that need to be shown.
const showPage = (list, page) => { 
   let start = (page * itemsperpage) - itemsperpage;
   let end = (page * itemsperpage);
/// created a for loop for the paginagtion which will show only the items i wish to display///
   for(i=0; i <= list.lenght; i++)
   {
      if(document.getElementById('page'+i))
      document.getElementById('page'+i).style.display='none';
   }

   if(document.getElementById ('page'+id))
      document.getElementById('page'+id).style.display='block';
}

   
     /***Pro Tips: 
        - Keep in mind that with a list of 54 students, the last page 
          will only display four.
        - Remember that the first student has an index of 0.
        - Remember that a function `parameter` goes in the parens when 
          you initially define the function, and it acts as a variable 
          or a placeholder to represent the actual function `argument` 
          that will be passed into the parens later when you call or 
          "invoke" the function 
   ***/
   
   
   
   
   /*** 
      Create the `appendPageLinks function` to generate, append, and add 
      functionality to the pagination buttons.
   ***/
   
   const appendPageLinks = (list) => {
   
   
   
   
   
   }
   
      /*
      1. Determine how many pages are needed for the list by dividing the
      total number of list items by the max number of items per page
      2. Create a div, give it the “pagination” class, and append it to the .page div
      3. Add a ul to the “pagination” div to store the pagination links
      4. for every page, add li and a tags with the page number text
      5. Add an event listener to each a tag. When they are clicked
      call the showPage function to display the appropriate page
      6. Loop over pagination links to remove active class from all links
      7. Add the active class to the link that was just clicked. You can identify that
      clicked link using event.target
      *///
   
   
   
