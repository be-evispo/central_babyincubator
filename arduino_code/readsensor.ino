void readS() {
  sensors.requestTemperatures();
  s = sensors.getTempCByIndex(0);
  h = dht.readHumidity();
  t = dht.readTemperature();
}

void decibels() {
  if (millis() - waktu > 30) {
    total = total - readings[readIndex];
    // read from the sensor:
    readings[readIndex] = map(analogRead(35), 0, 3000, 0, 1024);
    // add the reading to the total:
    total = total + readings[readIndex];
    // advance to the next position in the array:
    readIndex = readIndex + 1;

    // if we're at the end of the array...
    if (readIndex >= numReadings) {
      // ...wrap around to the beginning:
      readIndex = 0;
    }

    // calculate the average:
    average = total / numReadings;
  }
  // send it to the computer as ASCII digits
  Serial.print(average);
  Serial.print(",");
  Serial.println(SPL_dB);
  SPL_dB = ((average + 70) + 83.2073) / 3.573;
}
