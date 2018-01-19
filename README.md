# UI5Lab Library PDFViewer
The PDFViewer is a custom UI5 control that enables you to view PDF's by using a base64 data uri instead of a file URL. This can be useful in case you want to preview a PDF that you want to upload without uploading it.

<img src="https://github.com/lemaiwo/UI5LabLibraryPDFViewer/blob/master/images/pdfviewer.gif"/>

## Demo
<a href="https://htmlpreview.github.io/?https://github.com/lemaiwo/UI5LabLibraryPDFViewer/blob/master/test/ui5lab/wl/pdf/demo/index.html">https://htmlpreview.github.io/?https://github.com/lemaiwo/UI5LabLibraryPDFViewer/blob/master/test/ui5lab/wl/pdf/demo/index.html</a>

## Usage


### Include the library in your project
1. Include the library-preload.js in your project
<img src="https://github.com/lemaiwo/UI5LabLibraryPDFViewer/blob/master/images/includelib.png"/>

2. Configure the manifest.json
<img src="https://github.com/lemaiwo/UI5LabLibraryPDFViewer/blob/master/images/manifestlib.png"/>

3. Use the PDF Control
<img src="https://github.com/lemaiwo/UI5LabLibraryPDFViewer/blob/master/images/pdfview.png"/>

## Build
npm install
grunt build

For WebIDE
Use Package and Grunt with WebIDE extension (remove webide out of the filename)
1. import in the SAP Web IDE
2. Right click on the project --> Build 