/**
 * ChronplotQT Survey — Google Apps Script backend
 * ------------------------------------------------
 * Paste this into the Apps Script project bound to the Google Sheet where
 * you want responses logged (Extensions > Apps Script from within the
 * Sheet). Deploy it as a Web App and paste the resulting URL into the
 * GAS_ENDPOINT constant near the top of chronplotqt_survey.html.
 *
 * See setup_instructions.md for the full step-by-step walkthrough.
 */

// Set to false if you don't want an email sent for every submission.
var SEND_EMAIL_NOTIFICATION = true;

// Email address that receives a copy of each response.
var NOTIFY_EMAIL = "eoleson0@gmail.com";

// The order/labels of columns in the sheet. Keys must match the field names
// sent from the HTML form's JS (see buildPayload() in the HTML file).
var COLUMNS = [
  ["timestamp", "Timestamp"],
  ["q1_applications", "Q1: Applications"],
  ["q2_minerals", "Q2: Minerals"],
  ["q3_systems", "Q3: Systems"],
  ["q4_tasks", "Q4: Tasks"],
  ["q5_reduction_tools", "Q5: Data reduction/analysis tools"],
  ["q6_visualization_tools", "Q6: Visualization tools"],
  ["q7_illustrator_in_workflow", "Q7: Illustrator/Inkscape/PowerPoint in workflow"],
  ["q8_coding_in_workflow", "Q8: Coding in workflow"],
  ["q8a_developing_own_code", "Q8a: Developing own code vs. existing packages"],
  ["q8b_languages", "Q8b: Languages"],
  ["q9a_still_use_isoplot", "Q9a: Still uses Isoplot"],
  ["q9b_isoplot_features", "Q9b: Isoplot features used/missed"],
  ["q10_profession", "Q10: Profession"],
  ["q11_operating_system", "Q11: Operating system"],
  ["q12_country", "Q12: Country"]
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    ensureHeaderRow(sheet);

    var row = COLUMNS.map(function (col) {
      var key = col[0];
      var value = data[key];
      return value === undefined || value === null ? "" : value;
    });
    sheet.appendRow(row);

    if (SEND_EMAIL_NOTIFICATION && NOTIFY_EMAIL) {
      sendNotificationEmail(data);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Simple health check so you can confirm the deployment URL works by
// visiting it directly in a browser (should show "ChronplotQT survey
// endpoint is live.").
function doGet(e) {
  return ContentService.createTextOutput("ChronplotQT survey endpoint is live.");
}

function ensureHeaderRow(sheet) {
  var firstCell = sheet.getRange(1, 1).getValue();
  if (firstCell === COLUMNS[0][1]) return; // header already present

  var headerLabels = COLUMNS.map(function (col) { return col[1]; });
  sheet.insertRowBefore(1);
  sheet.getRange(1, 1, 1, headerLabels.length).setValues([headerLabels]);
  sheet.getRange(1, 1, 1, headerLabels.length).setFontWeight("bold");
  sheet.setFrozenRows(1);
}

function sendNotificationEmail(data) {
  var lines = COLUMNS.map(function (col) {
    var value = data[col[0]];
    return col[1] + ": " + (value === undefined || value === null || value === "" ? "(blank)" : value);
  });
  var body = lines.join("\n");
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "New ChronplotQT survey response",
    body: body
  });
}
