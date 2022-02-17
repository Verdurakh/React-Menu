Build using React and Typescript.
Includning React bootstrap and react query

Used Accordion from Boostrap for the Menu, would suggest that it is custom built for better customization, had to do some hacks to have it behave the way I wanted.





Instructions
•	Use React and TypeScript.
•	The solution should be delivered as an open repository on GitHub or Bitbucket and it should include your code and instructions on how to run it.  
•	Nice menu styling is a plus.
•	Please estimate how much time implementation will take for you.


Part 1
Create a simple navigation menu with expanding levels. The menu can have any count of sub-levels, depending on the menu model.

Clicking on expand icon should expand and collapse child nodes. Clicking on the node should log the node object into the console.

Part 2
For Part 2 we would like for you to do something a little more advanced. We would like for you to create a webpage with a layout, some interactivity as well as call an external API. 
Layout/Interactivity
For the layout we would like for there to be a header, a sidebar and a main section. 

Requirements:
•	Header
o	Should include simply the app name. 
•	Sidebar
o	Includes tree structure
o	Tree structure nodes should open and close
o	Tree structure nodes should have a different state on hover
o	Tree structure nodes should have an indication of their active status (i.e. are they selected.)
•	Main
o	Main section should update to the current selected node’s text


External API Call
This is to call a backend that contains the node structure from Part 1 and render these nodes in the Layout. You may use any library that you would like to call the backend endpoint. Remember to handle both loading and error states.

As for the backend endpoint itself this can be done in a number of ways, such as creating a node API using express (or any other framework), serving json files, or using any of the following services:

•	Cloud: https://designer.mocky.io/
•	Cloud: https://www.mockapi.io/
•	Cloud: https://getpantry.cloud/
•	Local: https://github.com/typicode/json-server 
