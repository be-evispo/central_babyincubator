/*
  Rui Santos
  Complete project details at https://RandomNerdTutorials.com/esp32-esp8266-mysql-database-php/

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files.

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

*/
#include <Arduino.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <DallasTemperature.h>
#include "DHT.h"

#include <Wire.h>

#define ONE_WIRE_BUS 33
#define DHT_PIN 14
#define DHT_TYPE DHT22

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
DHT dht(DHT_PIN, DHT_TYPE);

const int numReadings = 25;

int readings[numReadings];
int readIndex = 0;
int total = 0;
int average = 0;

const char* ssid     = "dopplerboy";
const char* password = "dopplerboy";

int SPL_dB;
int client1 = 3;
unsigned long waktu, waktu2;

String serverName = "http://192.168.137.30/rest-api/data.php";

String apiKeyValue = "amNcozreYgayth";

float s, h, t;
hw_timer_t * timer = NULL;

String readDS() {
  float s = sensors.getTempCByIndex(0);
  if (isnan(s)) {
    Serial.println("Failed to read from BME280 sensor!");
    return "";
  }
  else {
    Serial.println(s);
    return String(s);
  }
}

String readDHTh() {
  float t = dht.readTemperature();
  if (isnan(t)) {
    Serial.println("Failed to read from BME280 sensor!");
    return "";
  }
  else {
    Serial.println(t);
    return String(t);
  }
}

String readDHTt() {
  float h = sensors.getTempCByIndex(0);
  if (isnan(h)) {
    Serial.println("Failed to read from BME280 sensor!");
    return "";
  }
  else {
    Serial.println(h);
    return String(h);
  }
}

void interruptSetup() {
  // Use 1st timer of 4 (counted from zero).
  // Set 80 divider for prescaler (see ESP32 Technical Reference Manual for more
  // info).
  timer = timerBegin(0, 80, true);

  // Initializes Timer to run the ISR to sample every 2mS as per original Sketch.
  // Attach ISRTr function to our timer.
  timerAttachInterrupt(timer, &ISRTr, true);


  // Set alarm to call isr function every 2 milliseconds (value in microseconds).
  // Repeat the alarm (third parameter)
  timerAlarmWrite(timer, 3000, true);

  // Start an alarm
  timerAlarmEnable(timer);

}
void ISRTr() {
 // decibels();
}
void setup() {

  dht.begin();
  sensors.begin();
  sensors.setResolution(10);

  Serial.begin(115200);

  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());

  for (int thisReading = 0; thisReading < numReadings; thisReading++) {
    readings[thisReading] = 0;
  }

  //interruptSetup();

}

void loop() {
  readS();
  decibels();
  if (millis() - waktu2 > 100) {
    post();
    waktu2 = millis();
  }
}
