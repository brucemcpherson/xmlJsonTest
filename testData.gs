  var testJson = JSON.stringify({ 
    "aString": "some string", 
    "aNumber": 8,
    "aBoolean": false,
    "anObject": {
      "apis": [{
        "name":"numbers",
        "url":"http://numbersapi.com/"
      },{
        "name":"faa",
        "url":"http://services.faa.gov/airport/status"
      }],
    },
    "anArray":  [
      { "value": 8 , "result": "legs an arachnid has" },
      { "value": 8 , "result": "furlongs in a mile" }
    ],
    "anotherArray":[1,2,3]
  });

  var  testXml = '<?xml version="1.0" encoding="UTF-8"?>' +
'<root>' +
 '<aString>some string</aString>' +
  '<aNumber>8</aNumber>' +
  '<aBoolean>false</aBoolean>' +
  '<anObject>' +
    '<apis>' +
      '<name>numbers</name>' +
      '<url>http://numbersapi.com/</url>' +
    '</apis>' +
    '<apis>' +
      '<name>faa</name>' +
      '<url>http://services.faa.gov/airport/status</url>' +
    '</apis>' +
  '</anObject>' +
  '<anArray>' +
    '<value>8</value>' +
    '<result>legs an arachnid has</result>' +
  '</anArray>' +
  '<anArray>' +
    '<value>8</value>' +
    '<result>furlongs in a mile</result>' +
  '</anArray>' +
  '<anotherArray>1</anotherArray>' +
  '<anotherArray>2</anotherArray>' +
  '<anotherArray>3</anotherArray>' +
'</root>';

