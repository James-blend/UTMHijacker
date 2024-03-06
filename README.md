# UTMHijacker

## Overview
UTMHijacker is a Chrome extension designed to Hijack Marketer's UTMs by replacing the tracking UTM parameters with a message of your choosing. This is still in development and soon enough it'll be live on the Chrome Web Store. For now you can install it manually with the instructions below

## Features
- **Custom UTM Replacement:** Easily replace any UTM parameters with your own custom message. (The Custom Message Part is still in development)
- **Simple Interface:** User-friendly interface for seamless interaction.
- **Privacy Focused:** Take control of your data by managing how it's shared.

## Installation
<!-- ### For Users
1. Download the extension from the Chrome Web Store.
2. Navigate to `chrome://extensions` in your browser.
3. Drag and drop the downloaded file into the page to install.

### For Contributors -->
To build and run the UTMHijack Chrome extension locally, follow these steps:

#### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your computer.
- Basic familiarity with using terminal or command prompt.

#### Setting Up
1. **Clone the Repository**

    First, clone the repository to your local machine using Git:
    ```sh
    git clone https://github.com/TheRealJamesRussell/UTMHijacker.git
    cd UTMHijack
    ```
2. **Install Dependencies**

    Inside the project directory, install the necessary dependencies:
    ```sh
    npm install
    ```
3. **Build the Extension**

    Run the following command to build the extension. This will bundle your JavaScript and assets using Webpack and output the files into the dist/ directory:
    ```sh
    npm run build
    ```
    For development purposes, you can use npm run watch to automatically rebuild the extension whenever source files change.

4. **Loading the Extension into Chrome**

    After building the extension, you'll need to load it into Chrome to test it:
    1. Open Chrome and navigate to chrome://extensions/.
    2. Enable "Developer mode" by toggling the switch in the top right corner.
    3. Click "Load unpacked" and select the dist/ directory from your project folder.
    4. The "UTMHijack" extension should now be loaded in your Chrome browser, and you can begin using it.
    
5. Updating the Extension
    
    To update the extension after making changes to the source files, simply run npm run build again to generate a new build, then reload the extension in Chrome through the chrome://extensions/ page by clicking the "Reload" button on your extension's card.


<!-- ## Usage
After installation, navigate to any webpage and click on the UTMHijacker icon in your browser's extension tray to start customizing UTM parameters. -->

## Contributing
Contributions are welcome!

## License
UTMHijacker is released under the MIT License. See the LICENSE file for more details.