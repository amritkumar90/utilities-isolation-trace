/*
 | Copyright 2013 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define([], function () {
    //Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "e802306fc18945a78d649fc0d5c66ff5",
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

        "geometryUrl": "http://54.214.169.132:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer",

        "gpUrl": "http://localhost:6080/arcgis/rest/services/FindNearestValves/GPServer/Find%20Nearest%20Valves",
       
        "highlighterDetails": {
            "image": "/IsolationTrace/images/ani/blueglow.gif",
            "height": 60,
            "width": 60,
            "timeout": 5000
        },
        "eventDetails": {
            "layerName": "",
            "whereClause": "",
            "zoomScale": ""
        },
        "overviewDetails":
            {
                "paramName": "ConnectedValvesArea",
                "buttonText": "Summary",
                "visible": "false",
                "MinScale": 0,
                "MaxScale": 0,
                "symbol":
                {

                    "type": "simplefillsymbol",
                    "style": "esriSFSNull",
                    "color": [0, 0, 0, 0],
                    "outline": {
                        "type": "esriSLS",
                        "style": "esriSLSSolid",
                        "color": [255, 0, 0, 255],
                        "width": 3
                    }
        
                },
                "saveOptions": {
                    "type": "layer",//csv or layer
                    "name": "Isolated Area"
                }


            },
        "GPInputs": [
            {
                "paramName": "Location_to_trace_from",
                "type": "Flag",

            },
            {
                "paramName": "Valves_to_skip",
                "type": "Skip",

            }
        ],
        "GPParams": [
                {
                    "paramName": "ConnectedValves",
                    "buttonText": "Valves",
                    "summaryText": "{Count} Valves Returned in Trace, {SkipCount} were bypassed.",
                    "displayText": "{Diameter} inch Valve: {LegacyID}",
                    "MinScale": 0,
                    "MaxScale": 0,
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
                            
                            "IDField": "LegacyID"
                        },
                    "saveOptions": {
                        "type": "csv",//csv or layer
                        "name": "Valves"
                    }
                },
                {
                    "paramName": "ConnectedRegulatorStations",
                    "buttonText": "Regulator Stations",
                    "summaryText": "{Count} Regulator Stations are connected to this location.",
                    "displayText": "Station Name: {Name}",
                    "MinScale": 0,
                    "MaxScale": 0,
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
                         },
                    "saveOptions": {
                        "type": "csv",//csv or layer
                        "name": "RegStations"
                    }

                },
                 {
                     "paramName": "ConnectedBorderStations",
                     "buttonText": "Border Stations",
                     "summaryText": "{Count} Border Stations are connected to this location.",
                     "displayText": "Station Name: {Name}",
                     "MinScale": 0,
                     "MaxScale": 0,
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
                          },
                     "saveOptions": {
                         "type": "csv",//csv or layer
                         "name": "BorderStation"
                     }

                 }
        ],



    };
    return defaults;
});