
# The www.sylphe.ch Website

Online at www.sylphe.ch since June 2018. Domain registered for ages.  
Generally some lightweight stuff about my personal interests and musings.

- *art/* – raw or editable artwork for the site
- *site/* – the stuff to be copied to the web server
- *trials/* – experiments and trials, not part of the site
- *README.md* – this file

Only the stuff in site/ is public; all other files and
the wiki in the Fossil repository are private.


## Icons and Tiles

- *favicon.ico* can be created with Gimp: just Export to `*.ico`
- *icon.png* is the Apple Touch Icon for iOS devices.
- *tile.png* and *tile-wide.png* are for IE11 tiles; created
  at the minimum image size (248x248 and 248x120) according
  to Microsoft specs because the image is inherently large.


## Über Sylphen

Sylphen sind Luftgeister, und Luftgeister sind Elementargeister
im System des Paracelsus (16. Jahrhundert), siehe
[Wikipedia](https://de.wikipedia.org/wiki/Sylphe)

- Sylphe, der: Luftgeist, z.B. Ariel und Oberon
- Sylphe, die: ätherisch zartes weibliches Wesen (bildungssprachlich)
- Sylphide, die: weiblicher Luftgeist; zartes anmutiges Mädchen
  (bildungssprachlich)

Die Elementargeister im System des Paracelsus:

|Element|Geist|Symbol|
|-------|-----|-------
|Luft|Sylphen|🜁 U+1F701|
|Feuer|Salamander|🜂 U+1F702|
|Erde|Gnome/Zwerge|🜃 U+1F703|
|Wasser|Undinen|🜄 U+1F704|

Die Spalte *Symbol* zeigt das alchemistische Symbol für
das entsprechende Element (falls im Font vorhanden) und
ihr Unicode *code point* (der Bereich U+1F700 bis U+1F77F
enthät die alchemistischen Symbole).

Übersetzungen

| de | en | fr | it | ru |
|----|----|----|----|----|
|Sylphe|sylph|le sylphe|il silfo|сильф|
|Sylphide|sylphid|la sylphide|la sìlfide| сильфи́да |

Quellen: Wikipedia und leo.org


## Miscellaneous

W3.CSS: w3-closebtn is gone in v4; use w3-button instead.

Also from H5BP: Front-end-developer Job Interview Questions  
<https://h5bp.github.io/Front-end-Developer-Interview-Questions/>

To create color schemes interactively, try <http://paletton.com>  
Specifically for choropleth maps, try <http://colorbrewer2.org>


## Typographisches

```text
Zeichen                             Unicode       TeX     HTML5
----------------------------------  -----------   -----   ----------------
Prime, Fuss, Minutenzeichen:     ′  U+2032        $'$     &#2022;
Sekundenzeichen:                 ″  U+2033        $''$    &#2033;
Apostrphe (Auslassungszeichen):  ’  U+2019        '       &apos; &rsquo;
  Ersatz für die obigen drei:  ' '' U+0027
Anführungszeichen de:          „x“  U+201E/201C   "` "'   &bdquo; &ldquo;
Anführungszeichen en:          “x”  U+201C/201D   `` ''   &ldquo; &rdquo;
Anführungszeichen fr:          «x»  U+00AB/00BB   "< ">   &laquo; &raquo;
  Ersatz für die obigen drei:   "x" U+0022                &quot;
Geviertstrich (Binde-, Trenn-,  ‐   U+2010        -       -
  Ergänzungsstrich) (en hyphen)
  (oft nicht im Font; U+002D = ASCII 45 verwenden)
Halbgeviertstrich (Gedanken-
  Bis-, Streckenstrich)          –  U+2013        --      &ndash;
Viertelgeviertstrich (Gedanken-
  strich im Englischen)          —  U+2014        ---     &mdash;
Minuszeichen                    ‒   U+2012        $-$     &minus;
  Ersatz für die obigen vier:    -  U+002D        -       -
```


## References

<https://html5boilerplate.com/>  
<https://github.com/h5bp/html5-boilerplate>

- Used this for the basic site structure and as a kick start.

<https://www.w3schools.com/w3css/default.asp>

- The CSS framework used. It is disputed, but simple to use.

