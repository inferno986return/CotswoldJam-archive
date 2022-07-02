#!/usr/bin/python

# -----------------------
# Import required Python libraries
# -----------------------
from gpiozero import DistanceSensor
from time import sleep

# -----------------------
# Main Script
# -----------------------

sensor = DistanceSensor(echo=21, trigger=20, max_distance=2.0)

while True:

  distance = sensor.distance * 100
  print("Distance : %.1f" % distance)
  sleep(1)
