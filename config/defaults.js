define([], function () {
    //Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "067b19e4be4d4b04a6443a4fd47c86a3",
        "oauthappid": null, //"AFTKRmv16wj14N3z",
        //Group templates must support a group url parameter. This will contain the id of the group. 
        //group: "",
        //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "http://localhost/proxy/auth_proxy.ashx",
        //Example of a template specific property. If your template had several color schemes
        //you could define the default here and setup configuration settings to allow users to choose a different
        //color theme.  
        "theme": "blue",
        "bingMapsKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "sharinghost": location.protocol + "//" + "www.arcgis.com", //Defaults to arcgis.com. Set this value to your portal or organization host name. 

        "geometryUrl": "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",

        "gpUrl": "http://localhost:6080/arcgis/rest/services/IsolationTrace/GPServer/IsolationTrace",
        "tabContent": "----",
        "highlighterDetails": {
            "image":  "/IsolationTrace/images/ani/blueglow.gif",
            "height": 60,
            "width": 60,
            "timeout": 5000
        },
        "eventDetails": {
            "layerName": "Leak Location",
            "whereClause": "OBJECTID = {EventID}",
            "zoomScale": "18"
        },
        "GPParams":[
            {
                "paramName": "Isolating_Valves",
                "saveToLayerName": "System Valve Trace Results",
                "summaryText": "{Count} Valves Returned in Trace, {SkipCount} were bypassed.",
                "displayText": "{DIAMETER} inch Valve: {FACILITYID}",
                "highlightSymbol":
                    {

                        "type": "esriSMS",
                        "style": "esriSMSCircle",
                        "color": [0, 0, 0, 0],
                        "size": 22,
                        "angle": 0,
                        "xoffset": 0,
                        "yoffset": -1,
                        "outline":
                         {
                             "color": [255, 0, 0, 255],
                             "width": 4
                         }


                    },
                "bypassDetails":
                    {
                        "skipable": true,
                        "IDField": "FACILITYID"
                    }
            },
            {
                "paramName": "Isolated_Hydrants",
                "saveToLayerName": "Hydrant Trace Results",
                "summaryText": "{Count} Hydrants are affected by this outaged.",
                "displayText": "{MANUFACTURER} Hydrant {FACILITYID}",
                "highlightSymbol":
                    {

                        "type": "esriSMS",
                        "style": "esriSMSCircle",
                        "color": [0, 0, 0, 0],
                        "size": 22,
                        "angle": 0,
                        "xoffset": 0,
                        "yoffset": -2,
                        "outline":
                         {
                             "color": [255, 255, 0, 255],
                             "width": 4
                         }



                    },
                "bypassDetails":
                     {
                         "skipable": false,
                         "IDField": ""
                     }


            },
             {
                 "paramName": "Isolated_Customers",
                 "saveToLayerName": "Customer Trace Results",
                 "summaryText": "{Count} Customers are affected by this outaged.",
                 "displayText": "Customer {FACILITYID}",
                 "highlightSymbol":
                    {

                        "type": "esriSMS",
                        "style": "esriSMSCircle",
                        "color": [0, 0, 0, 0],
                        "size": 22,
                        "angle": 0,
                        "xoffset": 1,
                        "yoffset": -1,
                        "outline":
                         {
                             "color": [122, 122, 255, 255],
                             "width": 4
                         }


                    },
                 "bypassDetails":
                      {
                          "skipable": false,
                          "IDField": ""
                      }

             }
        ],
      


    };
    return defaults;
});