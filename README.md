# Molecular Plant Sciences Website - Custom Code
*The MPS site is hosted by the MSU College of Natural Sciences on Mura CMS. Custom content and styles are allowed between the header and footer areas only. Modifying MPS's code requires: 1) some knowledge of HTML, CSS, and Javascript, 2) familiary with Mura CMS back-end and front-end, and 3) a code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>. Below are instructions on how to modify and publish the code.*
<hr>

## CSS Folder
### How to modify CSS:
*This section applies **only** to the mps-2020.scss/.css/.min.css files*.
* **Custom styles are written in the mps-2020.scss file**. This is the core styles file, written in SCSS, which allows for consistent design of components. 
* **Compile and minimize the base mps-2020.scss file into mps-2020.min.css**.
* **Copy and paste the code from the minimized file into Mura's dedicated custom CSS file, called  mpsCustomCSS.css**. This file is found in Mura's File Manager, under *https://prl.natsci.msu.edu/sites/_pmsb/assets/File/websiteTheme/mpsCustomCSS.css*. Right click on it, choose 'Edit', paste the code, and save your changes.
* **Do not change the name of the mpsCustomCSS.css file in Mura**. Otherwise, CSS will not load.
* **CSS files in this repository are also found on the MSU-DOE Plant Research Laboratory office server.** 

## HTML Folder
**Warning:** due to the way Mura's inline editor works, make sure to edit the .html files in an external code editor. Front-end editing might break certain features.
### .html file listing and links to web pages:
* **mps-homepage-custom.html:** <a href="https://mps.natsci.msu.edu/">MPS homepage</a>
* **mps-faculty-layout.html:** Template for faculty members under the <a href="https://mps.natsci.msu.edu/research-people/faculty/">Faculty</a> or  <a href="https://mps.natsci.msu.edu/research-people/executive-committee/">Executive Committee</a> pages. This template exists as a component in Mura called 'Faculty - Summary'.
* **mps-student-layout.html:** Template for students under the <a href="https://mps.natsci.msu.edu/research-people/students/">Students</a> page. This template exists as a component in Mura called 'Students - Summary'.
* **FoPD-2019.html:** <a href="https://mps.natsci.msu.edu/fopd/"> Fascination of Plants Day</a>

## JS Folder 
### Instructions to modify JS:
* **Custom JS is written in the mpsCustomJS.js file**. This file is found in this repository and the MSU-DOE Plant Research Laboratory office server.
* **Copy and paste the code into Mura's dedicated custom JS file, also called mpsCustomJS.js**. This file is found in Mura's File Manager, under *https://prl.natsci.msu.edu/sites/_pmsb/assets/File/websiteTheme/mpsCustomJS.js*. Right click on it, choose 'Edit', paste the code, and save your changes.
* **Do not change the name of the prlCustomJS.js file in Mura**. Otherwise, the JS will not load.
