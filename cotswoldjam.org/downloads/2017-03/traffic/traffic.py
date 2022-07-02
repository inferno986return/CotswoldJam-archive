from gpiozero import TrafficLights
from time import sleep

traffic=TrafficLights(17,27,22)

while True:
  traffic.red.on()
  sleep(2)
  traffic.yellow.on()
  sleep(1)
  traffic.red.off()
  traffic.yellow.off()
  traffic.green.on()
  sleep(2)
  traffic.green.off()
  traffic.yellow.on()
  sleep(1)
  traffic.yellow.off()
