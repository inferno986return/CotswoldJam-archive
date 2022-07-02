#!/usr/bin/python

import time
import RPi.GPIO as GPIO

# -----------------------
# Define measure function
# -----------------------
def measure():
  # This function measures a distance
  GPIO.output(GPIO_TRIGGER, True)
  time.sleep(0.00001)
  GPIO.output(GPIO_TRIGGER, False)
  start = time.time()

  while GPIO.input(GPIO_ECHO)==0:
    start = time.time()

  while GPIO.input(GPIO_ECHO)==1:
    stop = time.time()

  elapsed = stop-start
  distance = (elapsed * 34300)/2

  return distance

# -----------------------
# Main Script
# -----------------------

# Use BCM GPIO references instead of physical pin numbers
GPIO.setmode(GPIO.BCM)

# Define GPIO to use on Pi
GPIO_TRIGGER = 20
GPIO_ECHO    = 21

# Set trigger as output and echo as input
GPIO.setup(GPIO_TRIGGER,GPIO.OUT)  # Trigger
GPIO.setup(GPIO_ECHO,GPIO.IN)      # Echo

# Set trigger to False (Low)
GPIO.output(GPIO_TRIGGER, False)

# Wrap main content in a try block so we can
# catch the user pressing CTRL-C and call the
# GPIO cleanup function.
try:
  while True:
    distance = measure()
    print("Distance : %.1f" % distance)
    time.sleep(1)

except KeyboardInterrupt:
  # User pressed CTRL-C, reset GPIO settings
  GPIO.cleanup()
