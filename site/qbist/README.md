
Revive Qbist
============

Proposed by Dr. Jörn Loviscach in a 1995 c't article(1),
this simple algorithm produces nice random images, sometimes
with a cubist style appearance.

I played with it in (or before) the year 2002 and had some fun.
The result was a MacOS Classic programm called EasyQbist that
implemented the algorithm and allowed easy playing with the
parameters. The file *qbistread.c* here reads the old save file
format from stdin and writes corresponding JSON to stdout.

Now that we have HTML5 and the Canvas element, it is tempting
to rebuild this for the Web.

Apparently, GIMP has a "Qbist" plugin that uses the algorithm;
it is in Filters / Render / Pattern / Qbist...


References
----------

(1): Dr. Jörn Loviscach: Ausgewürfelt. Moderne Kunst
algorithmisch erzeugen. c't 1995, volume 10, pages 326-329.

