# Molecular Plant Sciences Website - Custom Code
*This repository applies to the <a href="https://mps.natsci.msu.edu/">MPS website</a>, as hosted by the MSU College of Natural Sciences on Mura CMS. Although the MPS website has a pre-built design that is visually consistent with all websites within the College, it can contain custom content and styles between the header and footer areas. This repository has instructions for using the MPS custom code files. Each section below refers to its respective folder in the repository.*

*Modifying MPS's code requires: 1) some knowledge of programming languages (HTML, CSS, jQuery, and Javascript), 2) knowledge of Mura's back-end and front-end interfaces, 3) a code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, and 4) a compiler, such as <a href="http://koala-app.com/">Koala</a>.*
<hr>

## CSS Folder
The CSS folder contains all custom stylesheets for the MPS website.
### Instructions to modify code:
 * **Custom modifications take place in the mps-2019.scss file, outside of Mura**. This is the core MPS custom CSS file. It contains variables that allow for control and consistency of custom visual components. It requires knowledge of SCSS programming language and a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>.
* **Use an automated compile and minimize system**, as Mura only reads .css files. Instructions:
  1. **mps-2019.scss** file should be automatically compiled into the **mps-2019.css** file on each iteration. Live Sass Compiler, a Visual Studio Code extension, is recommended. Otherwise, <a href="http://koala-app.com/">Koala</a> is also a good compiler.
  2. The **mps-2019.css** file should be automatically minimized into the **mps-2019.min.css** file. This can be done in code editors such as Visual Studio Code.
  3. Copy and paste the minimized code from the *mps-2019.min.css** file into Mura's dedicated custom CSS file. The dedicated file is found in Mura's File Manager, under *pmsb_User_Assets/File/websiteTheme/mpsCustomCSS.css*. Right click **mpsCustomCSS.css**, choose 'Edit,' and paste the code. Save your changes.
* **In Mura, do not change the name of the mpsCustomCSS.css file.** Any change will cause the server to not load the custom CSS.
* **Identical copies of the CSS files in this repository are also found on the PRL server.** Ensure that all versions are up to date.

## HTML Folder
The HTML folder contains content used on the MPS website. **Identical copies of these files are also found on the PRL server. Ensure that all versions at all locations are up to date.**
### File listing:
* **mps-homepage-custom.html:** This content is used on the <a href="https://mps.natsci.msu.edu/">MPS homepage</a> in the section right below the hero image.
  * Any changes should be made in this file on a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, and not in Mura. The reason is that Mura's HTML editor is messy and difficult to work on.
  * To update the content in Mura, paste the code from this file in the content section in the homepage.
* **mps-faculty-layout.html:** Contains the markup to add new faculty to the <a href="https://mps.natsci.msu.edu/research-people/faculty/">Faculty</a> page. Copy and paste this code into Mura's HTML editor in the 'Content' section when creating a new faculty page in the back-end.
* **FoPD-2019.html:** This content is used on the <a href="https://mps.natsci.msu.edu/fopd/"> Fascination of Plants Day</a> page.

## JS Folder
The JS folder contains the custom PRL jQuery code. 
### Instructions to modify code:
* **Custom modifications take place in the mpsCustomJS.js file,  outside of Mura**. This is the core MPS custom JS file. It requires knowledge of JS and jQuery programming languages and a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>.
* **Copy and paste the contents from the MPSCustomJS.js file into Mura's dedicated custom JS file**. The dedicated file is found in Mura's back File Manager, under *pmsb_User_Assets/File/websiteTheme/MPSCustomJS.js*. Right click **MPSCustomJS.js**, choose 'Edit,' and paste the code. Save your changes.
* **In Mura, do not change the name of the MPSCustomJS.js file**. Any change will cause the server to not load the custom JS.
* **Identical copies of the JS files in this repository are also found on the PRL server.** Ensure that all versions are up to date.
