% Daisy Bell by Harry Dacre, 1892

\version "2.18.2"

sylphCode = \markup "S1909"
sylphRelease = \markup { 19.09 } % Sep 2019

% Should print on A4 and US Letter size:
% use min of A4 (297x210) and Letter (279x216)
#(set! paper-alist (cons '("custom" . (cons 210 279)) paper-alist))
#(set-default-paper-size "custom")
#(set-global-staff-size 18) % default is 20 pt

\header {
  title = "Daisy Bell"
  subtitle = \markup { "(bicycle built for two)" }
  composer = "Harry Dacre 1892"
  tagline = ##f  % suppress tagline (bottom of last page)
  copyright = \markup \tiny { % copyright line (bottom of first page)
    \vspace #0.8
    2019 · \with-url #"http://www.sylphe.ch/" { www.sylphe.ch }
    · engraved with \with-url #"http://lilypond.org/" { LilyPond }
  }
}

\paper {
  % Two-sided printing:
  two-sided = ##t
  inner-margin = 1.5\cm
  outer-margin = 1.5\cm
  binding-offset = 0.8\cm
  % Fixed vertical spacing:
  top-margin = 2.0\cm
  bottom-margin = 1.5\cm
  ragged-bottom = ##f
  ragged-last-bottom = ##t
  % Always fill the entire line:
  ragged-right = ##f
  ragged-last = ##f
  % Miscellaneous:
  %annotate-spacing = ##t
}

% Title page in a separate book part:
% (piano on pages 2 and 3, voice on page 4)
% (implicit \pageBreak between book parts)

\bookpart {
  \paper {
    bookTitleMarkup = \markup \null
    scoreTitleMarkup = \markup \null
    oddFooterMarkup = \markup \null
    evenFooterMarkup = \markup \null
  }
  \markup \vspace #10
  \markup {
    \fill-line {
      \center-column {
        \fontsize #10 \line { "Daisy" "Bell" }
        \vspace #1
        \fontsize #5 \line { "(bicycle built for two)" }
        \vspace #5
        \fontsize #3 \line { Written and composed by }
        \vspace #2
        \fontsize #5 \line { Harry Dacre }
        \vspace #1
        \fontsize #3 \line { 1892 }
      }
    }
  }
  \markup \vspace #10
  \markup {
    \fill-line {
      \override #'(line-width . 80)
      \column {
        \justify { % oder \wordwrap = Flattersatz
          Daisy Bell was a Victorian music hall favourite,
          written and released in 1892 by British songwriter
          Harry Dacre (a pen name of Frank Dean, 1857–1922).
          When Dacre moved to the United States, he had to pay
          import duty for his bicycle, upon which a friend remarked
          that if he had brought a “bicycle built for two” he would
          have had to pay double duty. This descriptive phrase
          so pleased Dacre that he made it the punchline of his song.
          % Wikipedia reports that Daisy Bell was used in the first
          % attempts at speech synthesis (Bell Labs 1961) and has
          % a list of movies, television, etc. where the song was used.
        }
        \vspace #1
        \justify \smaller {
          Typeset by \with-url #"http://www.sylphe.ch/" { www.sylphe.ch }
          in 2019 and dedicated to the public domain — you are free
          to copy, modify, distribute, and perform this sheet music
          \with-url #"https://creativecommons.org/publicdomain/zero/1.0/"
          { (see Creative Commons CC0). }
          Source for this edition were scans of the 1892 edition
          by T. B. Harms & Co., available from the
          \with-url #"http://digitalcollections.nypl.org/items/5e66b3e8-f005-d471-e040-e00a180654d7"
          \italic { New York Public Library Digital Collections }
          and also on
          \with-url #"https://commons.wikimedia.org/wiki/Category:Daisy_Bell"
          \italic { Wikimedia Commons. }
        }
      }
    }
  }
}

\layout {
  \context {
    \Score
    \remove "Bar_number_engraver"  % Takte nicht numerieren
  }
  \context {
    \Staff \RemoveEmptyStaves
    \override VerticalAxisGroup.remove-first = ##t
  }
}

melody = \relative c'' {
  \clef treble
  d4 cis d |
  b4 a g |
  a2 fis4 |
  d2 r4 |
  a'2. |
  d,2. |
  d'2. |
  b2 r4 |
  \break
  d4 cis d |
  b4 a g |
  a2 fis4 |
  d2 r4 |
  g4 d' g, |
  fis4( d) a' |
  g2.~ |
  g4 r r |
  \break
  b4 c b |
  a4 g fis |
  b2 g4 |
  e2 r4 |
  d'4 c b |
  a2 ais4 |
  b2.~ |
  b4 r r |
  \break
  b4 c b |
  a4 g fis |
  b2 g4 |
  e2 b'4 |
  a4 e' cis |
  b2 a4 |
  d2.~ |
  d2. | \bar "||"
}

melodyChorus = \relative c'' {
  \clef treble
  \tempo "Chorus. A little faster"
  d2. | b2. | g2. | d2 r4 |
  e4 fis g | e2 g4 | d2.~ | d2 r4 | \break
  a'2. | d2. | b2. | g2 r4 |
  e4 fis g | a2 b4 | a2.~ | a4 r b | \break
  c4 b a | d2 b4 |
    << { \voiceOne\stemDown a4 } \new Voice
       { \voiceTwo\stemUp\slurUp\tupletUp\tiny \tuplet 3/2 { a8[( b a]) } }
    >> \oneVoice g2~ | g2 a4 |
  b2 g4 | e2 g4 | e4 d2~ | d4 r d | \break
  g2 b4 | a4^^ r r | g2 b4 | a4^^ r b8 c |
  d4 b g | a2 d,4 | g2.~ | g4 r r | \bar "|."
}

nudgeCN = % nudge chord name (useful to save vertical space)
#(define-music-function (parser location offset) (number?)
  #{ \once \override ChordName.X-offset = #offset #})

harmonies = \chordmode {
  g2.*2 | \nudgeCN #-0.9 d2.*2:7 | \nudgeCN #-0.8 d2.*2 | g2.*2 |
  g2.*2 | \nudgeCN #-0.9 d2.*2:7 | g2. | d2.:7 | g2.*2 |
  e2.:m | \nudgeCN #-0.9 b2.:7 | e2.*2:m | d2.:7 s2 \nudgeCN #-2 d4:aug | g2.*2 |
  e2.:m | \nudgeCN #-0.9 b2.:7 | e2.*2:m | \nudgeCN #-0.9 a2.*2:7 | d2.*2:7 |
}
harmoniesChorus = \chordmode {
  g2.*4 | c2.*2 | g2.*2 |
  \nudgeCN #2 d2.*2:7 | g2.*2 | a2.*2:7 | \nudgeCN #-1 d2.*2 |
  d2.*2:7 | \nudgeCN #-1 g2.*2 | e2.:m | c2. | g1 s4 d4:7 |
  g2. | \nudgeCN #1.8 d4:7 s2 | g2. | \nudgeCN #1.8 d4:7 s2 | g2. |
    \nudgeCN #1.8 d2.:7 | g2.*2 |
}

wordsOne = \lyricmode {
  There is a | flow -- er with -- | in my | heart, |
  Dai -- | sy, | Dai -- | sy! |
  Plant -- ed one | day by a | glanc -- ing | dart, |
  Plant -- ed by | Dai -- sy | Bell! __ |
  Wheth -- er she | loves me or | loves me | not,
  Some -- times it's | hard to | tell; __ |
  Yet I am | long -- ing to | share the | lot
  Of | beau -- ti -- ful | Dai -- sy | Bell! __ |
}

wordsTwo = \lyricmode {
  We will go | “tan -- dem” as | man and | wife, |
  Dai -- | sy, | Dai -- | sy! |
  “Ped' -- ling” a -- | way down the | road of | life, |
  I and my | Dai -- sy | Bell! __ |
  When the road's | dark we can | both des -- | pise |
  P'lice men and | “lamps” as well; __ |
  There are “bright | lights” in the | daz -- zling  |eyes
  Of | beau -- ti -- ful | Dai -- sy | Bell! __ |
}

wordsThree = \lyricmode {
  I will stand | by you in | “wheel” or | woe, |
  Dai -- | sy, | Dai -- | sy! |
  You'll be the | bell(e) which I'll | ring, you | know! |
  Sweet lit -- tle | Dai -- sy | Bell! __ |
  You'll take the | “lead” in each | “trip” we take, |
  Then, if I | don't do | well, __ |
  I will per -- | mit you to | use the | break, 
  My | beau -- ti -- ful | Dai -- sy | Bell! __ |
}

wordsChorus = \lyricmode {
  Dai -- | sy, | Dai -- | sy, |
  Give me your | an -- swer, | do! __ |
  I'm | half | cra -- | zy, |
  All for the | love of | you! __
  It | won't be a | styl -- ish | mar -- riage, __
  I | can't af -- | ford a | car -- riage, __
  But | you'll look | sweet | On the | seat
  Of a | bi -- cy -- cle | built for | two! __
}

% Intro (piano)

introUpper = \relative c'' {
  \clef treble \key g \major \time 3/4
  \tempo "Tempo di Valse"
  <d d'>4\f <cis cis'> <d d'> |
  <b b'>4 <a a'> <g g'> |
  <a a'>2 fis'4 |
  d2 d'4 |
  b8 d,(\< e fis g a |
  ais8 b\! e\> d b g\!) |
  <a c,>2-> <d, c>4-> |
  <g b,>2.-> | \bar "||"
  \break
}

introLower = \relative g {
  \clef bass \key g \major \time 3/4
  g4 <b d> <b d> |
  g4 <b d> <b d> |
  fis4 <a c d> <a c d> |
  d,4 <fis c' d> <fis c' d> |
  g4 <b d> <b d> |
  g4 <b d> <b d> |
  <d, fis a d>2-> <d fis a d>4-> |
  <g b d>2.-> \bar "||"
}

% Stanzas (piano)

pianoUpper = \relative c' {
  \clef treble
  r4 <b d g> q |
  r4 <b d g> q |
  r4 <c d a'> q |
  r4 <c d fis> q |
  r4 <c d a'> q |
  r4 <c d fis> q |
  r4 <b d g> q |
  r4 <b d g> q |
  %
  r4 <b d g> q |
  r4 <b d g> q |
  r4 <c d a'> q |
  r4 <c d fis> q |
  r4 <b d g> q |
  r4 <c d fis> q |
  r4 <b d g> q |
  <b d g>4 r r |
  %
  b'4( c b) |
  a4( g fis) |
  b2( g4) |
  e2 r4 |
  d'4( c b) |
  a2( ais4) |
  b4 ais8(\< b d g)\! |
  b4 r r |
  %
  b,4( c b) |
  a4( g fis) |
  b2( g4) |
  e4 r b' |
  a4( e' cis) |
  b2( a4) |
  << { \voiceOne
       d2.~\< d2.\!
     } \new Voice { \voiceTwo
       \override Stem.length = #5
       r4 <fis, a>( <g b>)
       \revert Stem.length
       <a c>2.
     }
  >>
  \oneVoice
}

pianoLower = \relative g, {
  \clef bass
  <g g'>4 r r |
  <g g'>4 r r |
  <fis fis'>4 r r |
  <d d'>4 r r |
  <fis fis'>4 r r |
  <d d'>4 r r |
  <g g'>4 r r |
  <d d'>4 r r |
  %
  <g g'>4 r r |
  <g g'>4 r r |
  <fis fis'>4 r r |
  <d d'>4 r r |
  <g g'>4 r r |
  <d d'>4 r r |
  <g g'>4 d' b |
  g4 r r
  %
  e'4 <g b e> <g b e> |
  b,4 <a' b dis> <a b dis> |
  e4 <g b e> <g b e> |
  e4 <g b> <g b> |
  fis4 <a c d> <a c d> |
  d,4 <fis c' d> <fis c' d> |
  g4 <b d> <b d> |
  g4 <b d> <b d> |
  %
  e,4 <g b e> <g b e> |
  b,4 <a' b dis> <a b dis> |
  e4 <g b e> <g b e> |
  e4 <g b e> <g b e> |
  a,4 <g' a cis> <g a cis> |
  a,4 <g' a cis> <g a cis> |
  << { \voiceOne
       \override Stem.length = #3 
       r4 d' d
       \revert Stem.length
       d2. }
     \new Voice { \voiceTwo
       d,2.~ d2. }
  >>
  \oneVoice
}

% Chorus (piano)

chorusUpper = \relative c'' {
  \clef treble
  % Dai-sy, Day-sy!
  << { d2.( | b2. | g2. | d2) r4 } \\
     { r4 <d g b> q | r4 <b d g> q | r4 <g d'> q | r4 <g b> q } >>
  e'4( fis g | e2 g4) | 
  % Give me your ans-wer, do!
  << { d2.-^~ | d2 r4 } \\ { r4 <g, b> q | r4 q q } >> |
  % I'm half cra-zy
  a'2.( | d2.) |
  << { b2.( | g2.) } \\ { r4 <d g> q | r4 <b e> q } >>
  % All for the love of you! It
  e4(\< fis g | a2 b4)\! | a2.~ | a4 r b |
  % won't be a styl-ish mar-riage, I
  c4( b a | d2 b4) | \tuplet 3/2 { a8( b a) } g2~\( | g2 a4\) |
  % can't af-ford a car-riage, But
  b2\( g4 | e2 g4\) | e4 d2~ | d4 r d |
  % you'll look sweet / On the seat / Of a
  g2(\f b4) | <d, fis a>4-.^^ r r |
  g2( b4) | <d, fis a>4-.^^ r b'8( c) |
  % bi-cy-cle built for two!
  d4 b g | a2( d,4) | << { g2.~ | g4 } \\ { r4 <b, d> q | q } >> r4 r |
}

chorusLower = \relative c' {
  \clef bass
  g2.( | d2.) | b2.( | g2.) |
  c4 <e g c> q | c4 q q | g4 d' b | g4 r r |
  fis'4 <a c d> q | d,4 <fis c' d> q | g2.( | e2.) |
  a,4 <g' a cis> q | a,4 q q | d <fis a d> q | d q q |
  fis4 <a c d> q | d,4 <fis c' d> q | g4 <b d> q | g4 q q |
  e4 <g b e> q | c,4 <e g c> q | g,4 <d' g b> q | fis,4 <d' a' c> q |
  g,4 <d' g b> q | <d a' c>4-.-^ r r |
    g,4 <d' g b> q | <d a' c>4-.-^ r r |
  g,4 <d' g b> q | d,4 <d' fis c'> q | g4 d b | g4 r r |
}

\bookpart {
  \score {
    {
      <<
        \new Staff \with {
          fontSize = #-3
          \override StaffSymbol.thickness = #(magstep -3)
          \override StaffSymbol.staff-space = #(magstep -3)
        } {
          \new Voice = "intro" { \key g \major \time 3/4 s2.*8 }
          \break
          \new Voice = "melody" { \autoBeamOff \melody }
          \break
          \new Voice = "chorus" { \autoBeamOff \melodyChorus }
        }
        \new Lyrics \lyricsto "melody" { \set stanza = "1." \wordsOne }
        %\new Lyrics \lyricsto "melody" \wordsTwo
        %\new Lyrics \lyricsto "melody" \wordsThree
        \new Lyrics \lyricsto "chorus" \wordsChorus
        \new PianoStaff <<
          \new Staff { \introUpper \pianoUpper \chorusUpper }
          %\new Dynamics { s2.\f | etc. } piano centered dynamics
          \new Staff { \introLower \pianoLower \chorusLower }
        >>
      >>
    }
    \layout {
      \context { \Lyrics fontSize = #-1 }
    }
    \midi { \tempo 4 = 216 }
  }
  \markup \vspace #1
  \markup \smaller {
    \fill-line {
      \hspace #2 % indent a little
      \column {
        \line { \bold "2." We will go tan-dem as man and wife, }
        \line { \hspace #2 Dai-sy, Dai-sy! }
        \line { Ped'-ling a-way down the road of life, }
        \line { \hspace #2 I and my Dai-sy Bell! }
        \line { When the road's dark we can both des-pise }
        \line { \hspace #2 P'lice men and “lamps” as well; }
        \line { There are “bright lights” in the daz-zling eyes }
        \line { \hspace #2 Of beau-ti-ful Dai-sy Bell! }
      }
      \hspace #2 % separate the two columns
      \column {
        \line { \bold "3." I will stand by you in “wheel” and woe, }
        \line { \hspace #2 Dai-sy, Dai-sy! }
        \line { You'll be the bell(e) which I'll ring, you know! }
        \line { \hspace #2 Sweet lit-tle Dai-sy Bell! }
        \line { Wou'll take the “lead” in each “trip” we take, }
        \line { \hspace #2 Then, if I don't do well }
        \line { I will per-mit you to use the break, }
        \line { \hspace #2 My beau-ti-ful Dai-sy Bell! }
      }
      \hspace #2 % right margin
    }
  }
}

\bookpart {
  \score {
    <<
      \new ChordNames { %\germanChords
        \override ChordName.font-size = #-2
        \set chordChanges = ##f \harmonies
      }
      \new Staff { 
        \key g \major \time 3/4 \tempo "Tempo di Valse"
        \new Voice = "melody" { \autoBeamOff \melody }
      }
      \new Lyrics \lyricsto "melody" { \set stanza = "1." \wordsOne }
      \new Lyrics \lyricsto "melody" { \set stanza = "2." \wordsTwo }
      \new Lyrics \lyricsto "melody" { \set stanza = "3." \wordsThree }
    >>
    \layout { indent = 0 }
    \midi { \tempo 4 = 180 }
  }
  \markup { \vspace #1 }
  \score {
    <<
      \new ChordNames { %\germanChords
        \override ChordName.font-size = #-1
        \set chordChanges = ##f \harmoniesChorus
      }
      \new Staff {
        \key g \major \time 3/4 \tempo "Chorus. A little faster"
        \new Voice = "chorus" { \autoBeamOff \melodyChorus }
      }
      \new Lyrics \lyricsto "chorus" \wordsChorus
    >>
    \layout { indent = 0 }
    \midi { \tempo 4 = 216 }
  }
}
