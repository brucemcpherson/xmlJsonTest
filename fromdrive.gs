function getDriveFile() {

  var inputFile = "0B92ExLh4POiZamdJNkN3a1Nab1hWQTBWT1M4Y2FGUTRyRm5J";

  // convert it to JSON
  var conversion = UrlFetchApp.fetch(URL , {
    method:"POST",
    payload:{
      convert:DriveApp.getFileById(inputFile).getBlob().getDataAsString()
    }
  });
  
  // write result to drive
  if (!conversion.getResponseCode() === 200 ) throw new Error ('failed to covert' + conversion.getContentText());
  DriveApp.createFile('conversion.json', conversion.getContentText());
}
