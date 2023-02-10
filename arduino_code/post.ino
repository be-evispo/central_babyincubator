void post() {
  if (WiFi.status() == WL_CONNECTED) {

    WiFiClient client;
    HTTPClient http;
    http.begin(serverName);

    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    String httpRequestData = "api_key=" + apiKeyValue + "&client=" + String(client1) + "&Sskin=" + String(s)
                             + "&Schamber=" + String(t) + "&humadity=" + String(h)
                             + "&noise=" + String(SPL_dB);

    //Serial.print("httpRequestData: ");
    //Serial.println(httpRequestData);
    int httpResponseCode = http.POST(httpRequestData);
    /*
      if (httpResponseCode > 0) {
      Serial.print("HTTP Response code: ");
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
      }
      else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
      }
    */
    http.end();
  }
  else {
    Serial.println("WiFi Disconnected");
  }

}
