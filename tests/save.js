var fs=require('fs');
var $=require('jQuery');
function SaveSettings() {
    fs.readFile('config.xml', function (err, data) { //Read the XML file to a string
        if(err) {throw err;}    //If and error, throw error
        var $xml = $(data.toString()).find('settings').each(function () { //Process XML
            $(this).find('background > color').text($data.backgroundColor);
            $(this).find('background > image').text($data.backgroundImage);
            if($data.startupEnabled === "on") {
                $(this).find('startup > enabled').text("true");
            } else {
                $(this).find('startup > enabled').text("false");
            }
            if($data.splashEnabled === "on") {
                $(this).find('startup > splash > enabled').text("true");
            } else {
                $(this).find('startup > splash > enabled').text("false");
            }
            $(this).find('startup > splash > image').text($data.splashImage);
            $(this).find('security > password').text($data.password);
       });

       console.log($xml.toString()); //Contains the output of the jQuery object (Not XML)

        fs.writeFile('config.xml', data.toString(), function (err) {
            if(err) {throw err;}
        }); //data.toString() contains the original XML, unmodified.
    });

}
SaveSettings();