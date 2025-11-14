// function doPost(e) {
//   var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); // change if your sheet name is different
//   var data = JSON.parse(e.postData.contents);

//   sheet.appendRow([
//     data.name,
//     data.role,
//     data.rating,
//     data.comment,
//     new Date()  // capture submission date
//   ]);

//   return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
//     .setMimeType(ContentService.MimeType.JSON);

