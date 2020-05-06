#include <ESP8266WiFi.h>
#include <EEPROM.h>
#include <Servo.h>

#define DEBUG


//   *******************************  CLOUD ACCESS CONSTANT ***************
#define AP_SSID     "Vodafone-A43472354"
#define AP_PASSWORD "pxzb7ydwl3lm3kb5"

// *****************   GPIO  *********************************************

#define PIN_HUM_ANALOG   A0  // humidity pin
#define VALVE1_EN        D2  // Valve 1 enable signal
#define VALVE2_EN        D4  // Valve 2 enable signal
#define VALVE1_SIG       D1  // Valve 1 command signal (PWM)
#define VALVE2_SIG       D3  // Valve 2 command signal (PWM)

#define SENS_EN          D8  // sensor Enable

#define S0               D7     //selector 0 for sensor
#define S1               D6     //selector 1 for sensor
#define S2               D5     //selector 2 for sensor


// ****************  COSTANTS ******************************************



#define PARAM_VALVE1_ON           "/2/Sensor.Parameter1"
#define PARAM_VALVE2_ON           "/3/Sensor.Parameter1"
#define PARAM_HUMIDITY            "/1/Sensor.Parameter5"

#define MS_IN_SEC  1000 // 1S  

// ******************* OBJECTS ***************************************
WiFiServer server(80);
Servo Valve1;  // create servo object to control a valve1
Servo Valve2;  // create servo object to control a valve2

String header;

// *******************  DEFINITION ***********************
// irrigator state
typedef enum {
  s_setup            = 0,  // irrigation  setup
  s_irrigation_start = 1,  // start irrigation
  s_irrigation       = 2,  // irrigate
  s_irrigation_stop  = 3,  // irrigation stop
  s_idle             = 4   // idle state
} e_state;


// *******************  GLOBAL MEMORY *******************
struct context_t{
  e_state state;   // current State
  int module_id;
} context;

// Current time
unsigned long currentTime = millis();
// Previous time
unsigned long previousTime = 0; 
// Define timeout time in milliseconds (example: 2000ms = 2s)
const long timeoutTime = 2000;

// Auxiliar variables to store the current output state
String output5State = "off";
String output4State = "off";

void setup() {
  context.state = s_setup;
  pinMode(VALVE1_EN, OUTPUT);
  pinMode(VALVE2_EN, OUTPUT);
  pinMode(VALVE1_SIG, OUTPUT);
  pinMode(VALVE2_SIG, OUTPUT);

  pinMode(SENS_EN, OUTPUT);
  pinMode(S0, OUTPUT);
  pinMode(S1, OUTPUT);
  pinMode(S2, OUTPUT);

  //power down all the modukle 
  digitalWrite(SENS_EN,  LOW);
  digitalWrite(VALVE1_EN,LOW);
  digitalWrite(VALVE2_EN,LOW);


  Valve1.attach(VALVE1_SIG);  // attaches the servo on GIO2 to the servo object
  Valve2.attach(VALVE2_SIG);  // attaches the servo on GIO2 to the servo object

//  autoMode = false;
//  stepOk = false;
//  soilHumidityThresholdOld = -1;
//  startTime = millis();
//  soilHum = -1;


  Serial.begin(115200);
  // Connecting to Wifi 
  WiFi.mode(WIFI_STA);
  WiFi.begin(AP_SSID, AP_PASSWORD);

  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(AP_SSID);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  };

  Serial.println("WiFi connected");
  // Print local IP address and start web server
  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  server.begin();

  //EEPROM.begin(512);
  //loadConfig();

//  context.module_id = MODULE_ID;
//  //set client id
//  // Generate client name based on MAC address and last 8 bits of microsecond counter
//  String clientName;
//  //clientName += "esp8266-";
//  uint8_t mac[6];
//  WiFi.macAddress(mac);
//  clientName += macToStr(mac);
//  clientName += "-";
//  clientName += String(micros() & 0xff, 16);
//  myMqtt.setClientId((char*) clientName.c_str());
//
//  Serial.print("MQTT client id:");
//  Serial.println(clientName);
//
//  // setup callbacks
//  myMqtt.onConnected(myConnectedCb);
//  myMqtt.onDisconnected(myDisconnectedCb);
//  myMqtt.onPublished(myPublishedCb);
//  myMqtt.onData(myDataCb);
//
//  //////Serial.println("connect mqtt...");
//  myMqtt.setUserPwd(EIOTCLOUD_USERNAME, EIOTCLOUD_PASSWORD);
//  myMqtt.connect();
//
//  delay(500);
//
//  Serial.print("ModuleId: ");
//  Serial.println(context.module_id);


//  //create module if necessary
//  if (storage.moduleId == 0)
//  {
//    //create module
//    Serial.println("create module: /NewModule");
//    storage.moduleId = myMqtt.NewModule();
//
//    if (storage.moduleId == 0)
//    {
//      Serial.println("Module NOT created. Check module limit");
//      while (1)
//        delay(100);
//    }
//
//    // set module type
//    Serial.println("Set module type");
//    myMqtt.SetModuleType(storage.moduleId, "ZMT_IRRIGATOR");
//
//    // create Sensor.Parameter1 - humidity treshold value
//    Serial.println("new parameter: /" + String(storage.moduleId) + "/" + PARAM_HUMIDITY_TRESHOLD);
//    myMqtt.NewModuleParameter(storage.moduleId, PARAM_HUMIDITY_TRESHOLD);
//
//    // set IsCommand
//    Serial.println("set isCommand: /" + String(storage.moduleId) + "/" + PARAM_HUMIDITY_TRESHOLD);
//    myMqtt.SetParameterIsCommand(storage.moduleId, PARAM_HUMIDITY_TRESHOLD, true);
//
//
//    // create Sensor.Parameter2
//    // Sensor.Parameter2 - manual/auto mode 0 - manual, 1 - auto mode
//    Serial.println("new parameter: /" + String(storage.moduleId) + "/" + PARAM_MANUAL_AUTO_MODE);
//    myMqtt.NewModuleParameter(storage.moduleId, PARAM_MANUAL_AUTO_MODE);
//
//    // set IsCommand
//    Serial.println("set isCommand: /" + String(storage.moduleId) + "/" + PARAM_MANUAL_AUTO_MODE);
//    myMqtt.SetParameterIsCommand(storage.moduleId, PARAM_MANUAL_AUTO_MODE, true);
//
//
//    // create Sensor.Parameter3
//    // Sensor.Parameter3 - pump on/ pump off
//    Serial.println("new parameter: /" + String(storage.moduleId) + "/" + PARAM_PUMP_ON);
//    myMqtt.NewModuleParameter(storage.moduleId, PARAM_PUMP_ON);
//
//
//    // set IsCommand
//    Serial.println("set isCommand: /" + String(storage.moduleId) + "/" + PARAM_PUMP_ON);
//    myMqtt.SetParameterIsCommand(storage.moduleId, PARAM_PUMP_ON, true);
//
//
//    // create Sensor.Parameter4
//    // Sensor.Parameter4 - current soil humidity
//    Serial.println("new parameter: /" + String(storage.moduleId) + "/" + PARAM_HUMIDITY);
//    myMqtt.NewModuleParameter(storage.moduleId, PARAM_HUMIDITY);
//
//
//    // set Description
//    Serial.println("set description: /" + String(storage.moduleId) + "/" + PARAM_HUMIDITY);
//    myMqtt.SetParameterDescription(storage.moduleId, PARAM_HUMIDITY, "Soil moist.");
//
//    // set Unit
//    Serial.println("set Unit: /" + String(storage.moduleId) + "/" + PARAM_HUMIDITY);
//    myMqtt.SetParameterUnit(storage.moduleId, PARAM_HUMIDITY, "%");
//
//    // set dbLogging
//    Serial.println("set Unit: /" + String(storage.moduleId) + "/" + PARAM_HUMIDITY);
//    myMqtt.SetParameterDBLogging(storage.moduleId, PARAM_HUMIDITY, true);
//
//    // save new module id
//    saveConfig();
//  }

  //subscribe();

  //lastAnalogReading = analogRead(PIN_HUM_ANALOG);

  //autoModeOld = !autoMode;
}

void loop() {
  WiFiClient client = server.available();   // Listen for incoming clients

  if (client) {                             // If a new client connects,
    Serial.println("New Client.");          // print a message out in the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    currentTime = millis();
    previousTime = currentTime;
    while (client.connected() && currentTime - previousTime <= timeoutTime) { // loop while the client's connected
      currentTime = millis();         
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        header += c;
        if (c == '\n') {                    // if the byte is a newline character
          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println("Connection: close");
            client.println();
            
            // turns the GPIOs on and off
            if (header.indexOf("GET /5/on") >= 0) {
              Serial.println("GPIO 5 on");
              output5State = "on";
              //digitalWrite(output5, HIGH);
            } else if (header.indexOf("GET /5/off") >= 0) {
              Serial.println("GPIO 5 off");
              output5State = "off";
              //digitalWrite(output5, LOW);
            } else if (header.indexOf("GET /4/on") >= 0) {
              Serial.println("GPIO 4 on");
              output4State = "on";
              //digitalWrite(output4, HIGH);
            } else if (header.indexOf("GET /4/off") >= 0) {
              Serial.println("GPIO 4 off");
              output4State = "off";
              //digitalWrite(output4, LOW);
            }
            
            // Display the HTML web page
            client.println("<!DOCTYPE html><html>");
            client.println("<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
            client.println("<link rel=\"icon\" href=\"data:,\">");
            // CSS to style the on/off buttons 
            // Feel free to change the background-color and font-size attributes to fit your preferences
            client.println("<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}");
            client.println(".button { background-color: #195B6A; border: none; color: white; padding: 16px 40px;");
            client.println("text-decoration: none; font-size: 30px; margin: 2px; cursor: pointer;}");
            client.println(".button2 {background-color: #77878A;}</style></head>");
            
            // Web Page Heading
            client.println("<body><h1>ESP8266 Web Server</h1>");
            
            // Display current state, and ON/OFF buttons for GPIO 5  
            client.println("<p>GPIO 5 - State " + output5State + "</p>");
            // If the output5State is off, it displays the ON button       
            if (output5State=="off") {
              client.println("<p><a href=\"/5/on\"><button class=\"button\">ON</button></a></p>");
            } else {
              client.println("<p><a href=\"/5/off\"><button class=\"button button2\">OFF</button></a></p>");
            } 
               
            // Display current state, and ON/OFF buttons for GPIO 4  
            client.println("<p>GPIO 4 - State " + output4State + "</p>");
            // If the output4State is off, it displays the ON button       
            if (output4State=="off") {
              client.println("<p><a href=\"/4/on\"><button class=\"button\">ON</button></a></p>");
            } else {
              client.println("<p><a href=\"/4/off\"><button class=\"button button2\">OFF</button></a></p>");
            }
            client.println("</body></html>");
            
            // The HTTP response ends with another blank line
            client.println();
            // Break out of the while loop
            break;
          } else { // if you got a newline, then clear currentLine
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }
      }
    }
    // Clear the header variable
    header = "";
    // Close the connection
    client.stop();
    Serial.println("Client disconnected.");
    Serial.println("");
  }

}

//void loadConfig() {
//  // To make sure there are settings, and they are YOURS!
//  // If nothing is found it will use the default settings.
//  if (EEPROM.read(CONFIG_START + 0) == CONFIG_VERSION[0] &&
//      EEPROM.read(CONFIG_START + 1) == CONFIG_VERSION[1] &&
//      EEPROM.read(CONFIG_START + 2) == CONFIG_VERSION[2])
//    for (unsigned int t = 0; t < sizeof(storage); t++)
//      *((char*)&storage + t) = EEPROM.read(CONFIG_START + t);
//}
//
//void saveConfig() {
//  for (unsigned int t = 0; t < sizeof(storage); t++)
//    EEPROM.write(CONFIG_START + t, *((char*)&storage + t));
//
//  EEPROM.commit();
//}


//String macToStr(const uint8_t* mac)
//{
//  String result;
//  for (int i = 0; i < 6; ++i) {
//    result += String(mac[i], 16);
//    if (i < 5)
//      result += ':';
//  }
//  return result;
//}
//
////void waitOk()
////{
////  while (!stepOk)
////    delay(100);
////
////  stepOk = false;
//////}
////
////boolean IsTimeout()
////{
////  unsigned long now = millis();
////  if (startTime <= now)
////  {
////    if ( (unsigned long)(now - startTime )  < MS_IN_SEC )
////      return false;
////  }
////  else
////  {
////    if ( (unsigned long)(startTime - now) < MS_IN_SEC )
////      return false;
////  }
////
////  return true;
////}
//
//
//void subscribe()
//{
//
//    // Sensor.Parameter1 - humidity treshold value
//    myMqtt.subscribe(PARAM_VALVE1_ON);
//
//    // Sensor.Parameter2 - manual/auto mode 0 - manual, 1 - auto mode
//    myMqtt.subscribe(PARAM_VALVE2_ON);
//
//    // Sensor.Parameter3 - pump on/ pump off
//    myMqtt.subscribe(PARAM_HUMIDITY);
//}
//
//
//void myConnectedCb() {
//#ifdef DEBUG
//  Serial.println("connected to MQTT server");
//#endif
//  subscribe();
//}
//
//void myDisconnectedCb() {
//#ifdef DEBUG
//  Serial.println("disconnected. try to reconnect...");
//#endif
//  delay(500);
//  myMqtt.connect();
//}
//
//void myPublishedCb() {
//#ifdef DEBUG
//  Serial.println("published.");
//#endif
//}
//
//void myDataCb(String& topic, String& data) {
//#ifdef DEBUG
//  Serial.print("Receive topic: ");
//  Serial.print(topic);
//  Serial.print(": ");
//  Serial.println(data);
//#endif
////  if (topic == String("/" + String(storage.moduleId) + "/" + PARAM_HUMIDITY_TRESHOLD))
////  {
////    soilHumidityThreshold = data.toInt();
////    Serial.println("soilHumidityThreshold");
////    Serial.println(data);
////  }
////
////  else if (topic == String("/" + String(storage.moduleId) + "/" + PARAM_MANUAL_AUTO_MODE))
////  {
////    autoMode = (data == String("1"));
////    Serial.println("Auto mode");
////    Serial.println(data);
////  }
////  else if (topic == String("/" + String(storage.moduleId) + "/" + PARAM_PUMP_ON))
////  {
////    //switchState = (data == String("1"))? true: false;
////    if (data == String("1"))
////      state = s_irrigation_start;
////    else
////      state = s_irrigation_stop;
////    Serial.println("Pump");
////    Serial.println(data);
////  }
//}
