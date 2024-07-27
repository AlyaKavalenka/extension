## Weather Extension for Chrome

This project is a Chrome extension that works on the news site https://www.npr.org. The extension adds a popup page where users can select a city to display weather information. The selected city is stored using Chrome's storage API. On the news site, an icon is added next to each news header, which, when clicked, shows the weather information for the selected city.

#### Features:
- Popup page to select a city (3 cities to choose from).
- Default city selection if the user hasn't selected a city.
- Weather icon next to each news header on the NPR website.
- Clicking the weather icon shows a weather window.

#### Technologies Used:
- React.js
- TypeScript
- Chrome Extensions API
- Redux (for state management)

## Installation and Setup
Follow these steps to install and test the extension locally.
Prerequisites:
  - Node.js and npm (Node Package Manager)
  - Chrome browser

#### Steps:

1. Clone the repository:

     ```bash
      git clone https://github.com/AlyaKavalenka/extension.git
      cd weather-extension
      ```

2. Install dependencies:

      ```bash
      npm install
      ```
3. Build the extension:

      ```bash
      npm run build
      ```
4. Load the extension into Chrome:
   1. Open Chrome and go to `chrome://extensions/`.
   2. Enable "Developer mode" by toggling the switch in the top right corner.
   3. Click on "Load unpacked" and select the `dist` folder in the project directory.

5. Testing the extension:
   1. Navigate to https://www.npr.org.
   2. Open the extension popup by clicking the extension icon next to the address bar.
   3. Select a city from the dropdown menu.
   4. Weather icons should appear next to each news header.
   5. Click on an icon to see the weather information.