# Get Form Data Chrome Extension
Trying out the use of `chrome.webRequest` to get restaurant information from the ubereats site. I went through all the post and get requests from the individual restaurant pages to see if there was any information I could use. I found form data from a post request to facebook, the form data contained all the information I needed including the latitude and longitude of the restaurant. The problem came in that this post is only done once and moving from page to page (restaurant to restaurant) didn't reveal any more data, strangely only the very first restaurant page you visit posts the form data. So I made it so when the popup icon is clicked a page refresh occurs therefore forcing the form data to be sent again but this time with the current restaurant page data.

Currently it only display the data found in a popup.

I aim to incorporate what I learned here to use in my food hygiene rating chrome extension.

## Installation

`git clone git@github.com:LondonJim/Get-Form-Data-Chrome-Extension.git`

Currently to install you will have to enter developer mode on your chrome extensions page.

`chrome://extensions` in the browser to access chrome extension page

Toggle Developer Mode on the top right hand side of the browser

Click on `Load unpacked` and select the directory containing the extension, an icon with a 'F' will appear top left of the chrome browser, clicking on it brings up the popup.
