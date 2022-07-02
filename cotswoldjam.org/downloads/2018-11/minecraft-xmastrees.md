Minecraft Christmas Tree Decorations
====================================

by Andrew Oakley andrew@aoakley.com for [Cotswold Jam](http://cotswoldjam.org)
Public Domain 2018-11

---------------------------
You need a world with trees
---------------------------

To load/reset a snowy woodland world in Minecraft:

```
cp minecraft-snow-trees-flat.tgz ~/
cd
tar xvzf minecraft-snow-trees-flat.tgz
cd -
```

---------------------------------
Run the program and play with it!
---------------------------------

Now run Minecraft Pi, then run makestar1.py or makestar2.py
```
python3 makestar1.py
```

These programs create a Christmas star in a 3x3x3 block
(think of a Rubik's Cube - 3 blocks wide, 3 high, 3 long).
The star will be placed a few blocks north of the player.

Try editing the block IDs and wool status colours to make your own designs!

To put stars on the top of all nearby trees, uncomment the last line:
("uncomment" means remove the # at the start of the line)
```
xmastrees.find_trees(mc,playerx,playery,playerz,10,2,makestar)
```

Note that it can take several minutes to find all nearby trees.

*****

WOOL status colours:
```
00 White
01 Orange
02 Magenta
03 Light Blue
04 Yellow
05 Lime
06 Pink
07 Grey
08 Light grey
09 Cyan
10 Purple
11 Blue
12 Brown
13 Green
14 Red
15 Black
```

---------------
Advanced topics
---------------

Finished making stars? Try making a star out of WOOD and see how that
causes the find_trees program to go horribly wrong!!! Why does making
a star out of WOOD or CACTUS cause find_trees to go wrong?
