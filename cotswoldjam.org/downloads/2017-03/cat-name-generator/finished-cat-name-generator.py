# What is your cat name?
# Randomly generates a cat name and displays it on a gui
# Requires guizero - sudo pip3 install guizero

from guizero import App, Text, Picture, PushButton
import random

def cat_name():
    first_name = random.choice(["Mr", "Fluffy", "Whiskers", "Ginger", "Tiddles", "Tabitha", "Princess"])
    last_name = random.choice(["Bigglesworth", "Snugglybottom", "Padfoot", "McTickles", "Floofyface", "Longtail", "Fluffball", "Hairball", "Fishbreath"])
    cat_name.set(first_name + " " + last_name)


app = App("What's your cat name?")

greeting = Text(app, "Your cat name is...", color="green", size="36")

pic = Picture(app, "cat.gif")
generate_name = PushButton(app, cat_name, text="Tell me")

cat_name = Text(app, text="...")


app.display()
