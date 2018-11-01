var URL = "https://script.google.com/macros/s/AKfycbzNhEv3Nb38Tr277Ws0rUMGjXutkrGzEtLXfdX8XxThU8SUa-c/exec";

function doSomeTests () {
  
  // json to xml
  Logger.log (tester("http://www.omdbapi.com/?s=star%20wars&r=json"));
  
  // xml to json
  Logger.log (tester("http://www.omdbapi.com/?s=star%20wars&r=xml"));
}

function tester (url) {
  
// do an api that returns either xml or json and convert it
  var result =  UrlFetchApp.fetch(url);
  if (!result.getResponseCode() === 200 ) throw new Error ('failed to convert' + result.getContentText());
  
  // convert it to JSON
  var conversion = UrlFetchApp.fetch(URL , {
    method:"POST",
    payload:{
      convert:result.getContentText()
    }
  });
  
  // show result
  if (!conversion.getResponseCode() === 200 ) throw new Error ('failed to covert' + conversion.getContentText());
  return conversion.getContentText();
}


function xmlTest () {

  // do an api that returns xml
  var xml =  UrlFetchApp.fetch("http://www.omdbapi.com/?s=star%20wars&r=xml");
  if (!xml.getResponseCode() === 200 ) throw new Error ('failed to covert' + result.getContentText());
  
  // convert it to JSON
  var result = UrlFetchApp.fetch(URL , {
    method:"POST",
    payload:{
      convert:xml.getContentText()
    }
  });
  
  // show result
  if (!result.getResponseCode() === 200 ) throw new Error ('failed to covert' + result.getContentText());
  Logger.log(result.getContentText());

  
  // do an api that returns json
  var json =  UrlFetchApp.fetch("http://www.omdbapi.com/?s=star%20wars&r=json");
  if (!json.getResponseCode() === 200 ) throw new Error ('failed to get data from API' + json.getContentText());
  
  // convert it to JSON
  var result = UrlFetchApp.fetch(URL , {
    method:"POST",
    payload:{
      convert:json.getContentText()
    }
  });
  
  // show result
  if (!result.getResponseCode() === 200 ) throw new Error ('failed to covert' + result.getContentText());
  Logger.log(result.getContentText());
}

function tests() {
  
  
  
  // GET
  // test json to xml
  var result = UrlFetchApp.fetch(URL + '?convert=' + encodeURIComponent (testJson), {
    method:"GET"
  });
  
  // show result
  if (!result.getResponseCode() === 200 ) throw new Error ('failed to covert' + result.getContentText());
  Logger.log(result.getContentText());
  
  // test xml to json
  var result = UrlFetchApp.fetch(URL + '?convert=' + encodeURIComponent (testXml), {
    method:"GET"
  });
  
  // show result
  if (!result.getResponseCode() === 200 ) throw new Error ('failed to covert' + result.getContentText());
  Logger.log(result.getContentText());
  
  //POST
  // test json to xml
  var result = UrlFetchApp.fetch(URL , {
    method:"POST",
    payload:{
      convert:testJson
    }
  });
  
  // show result
  if (!result.getResponseCode() === 200 ) throw new Error ('failed to covert' + result.getContentText());
  Logger.log(result.getContentText());
  
    // test xml to json
  var result = UrlFetchApp.fetch(URL , {
    method:"POST",
    payload:{
      convert:testXml
    }
  });
  
  // show result
  if (!result.getResponseCode() === 200 ) throw new Error ('failed to covert' + result.getContentText());
  Logger.log(result.getContentText());

  
}
