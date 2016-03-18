[![Travis – build status
](https://img.shields.io/travis/magnificat/ditty/master.svg?style=flat-square
)](https://travis-ci.org/magnificat/ditty
) [![David – status of dependencies
](https://img.shields.io/david/magnificat/ditty.svg?style=flat-square
)](https://david-dm.org/magnificat/ditty
) [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square
)](https://github.com/airbnb/javascript
)


# ditty

**Basically, it’s [markdown](https://en.wikipedia.org/wiki/Markdown) for song lyrics and chords**




<a id="/use-cases"></a>&nbsp;

## In the wild

Let’s start with the exciting bits:

* You can stuff the lyrics for a bunch of ditty songs on a well-designed PDF layout with [git.io/ditty-to-pdf](https://git.io/ditty-to-pdf).
* A great installable songbook web app is in the making at [magnificat.surge.sh](https://github.com/magnificat/magnificat.surge.sh).
* Even the raw source of ditty songs is usable enough to make [a website](http://magnificat.github.io) out of it.




<a id="/tldr"></a>&nbsp;

## TL;DR

Ditty is a plain text syntax for lyrics and chords. It’s really natural to read and write.

Let’s start with a demo! Here's an example song written in ditty:

```markdown
12 | Jak ożywczy deszcz
=======================

D     G              h      A
 Jak ożywczy deszcz – Duchu Święty przyjdź!

D        G             h       A
 Dotknij naszych serc – rozpal ognia żar!  /×2



        e               fis  e                fis
         Dziś przenikaj nas – tchnieniem mocy Swej.

        e                  fis    G          Fis
         Bądź nam światłem dnia – i nadzieją serc!  /×2
```




<a id="/syntax"></a>&nbsp;

## The syntax

ditty is quite a young format, in active development. Here are the rules we have so far:

0. A ditty file should start with a *title line*.
0. The *title line* may begin with a *song number* followed by the pipe character (`|`). The pipe may be preceded and followed by one or more spaces. We recommend one space before and one space afterwards.
0. A *song number* is any combination of decimal digits (`0-9`) and dots (`.`). It should start and end with a digit. The shortest valid number is a single digit.
0. The rest of the *title line* is the *song title*. It consists of one or more character other than a
0. The *title line* should be followed by a *title underline*.
0. The *title underline* consists of one or more equals signs (`=`). You can make it as long as the *title line* to make it stand out and look good.
0. The *title underline* should be followed by one or more blank lines.
0. The blank line under the *title underline* should be followed by one or more *stanza*s and/or *refrain*s, separated from one another by two or more blank lines.
0. Both a *stanza* and a *refrain* consists of one or more *song lines* separated from one another by exactly one blank line.
0. A *song line* consists of one or two lines. If it’s one line, it’s parsed as the *lyrics line*. If it’s two lines, the first one is a *chords line* and the second is a *lyrics line*.
0. A *lyrics line* can start with one or more spaces. We call this the indent. The line with the smallest indent in a block determines the type of the containing block. If it’s less than 4 spaces, the block is a *stanza*. Otherwise, it’s a *refrain*. The indent should be followed by one or more *characters*, the first of which should be a *printable characters*.
0. A *chords line* consists of one or more sequences of *printable characters*. Make sure the beginning of the chord matches the beginning of the related syllable in the *lyrics line*.

We have to include a rather boring common-sense note. The format is based on *characters*, *printable characters*, *lines* and *blank lines*. A *character* is any Unicode character, excluding characters with an ASCII code lower than 32 (space) and the character at 127 (DEL). A *printable character* is a *character* other than a space. A *line* is a sequence of *characters* followed by an End Of Line character (`\n`), including the End Of Line character. The last character in a *line* before the End Of Line should be a *printable character*. A *blank line* consists of exactly one End Of Line character (`\n`).

Some things are reserved for future use. Please don’t use them yet:

0. Characters other than the *characters* listed above – particularly the line feed character (`\r`) and the tab character (`\t`). For editing ditty files please use an editor which supports Unix-style line endings (not Microsoft Notepad).
0. Trailing spaces (spaces at the end of a line).
0. A line consisting of no other characters than a space (` `), a hyphen-minus (`-`), an asterisk (`*`), a hash (`#`) and an underscore (`_`).




<a id="/hints"></a>&nbsp;

## Helpful hints

Some things we recommend:

* Make sure the name of every ditty file ends with the extension `.ditty`.
* Set up syntax highlighting in your editor so that it displays `*.ditty` files as markdown.




<a id="/parser"></a>&nbsp;

## The parser

This repo comes with a simple parser. Install it on node v4.0+ with:

```sh
npm install parse-ditty
```

Here’s the output for the above song:

```js
▸ const ditty = require('parse-ditty');

▸ ditty(inputSameAsAbove);
◂ {
    number: '12',
    title: 'Jak ożywczy deszcz',
    blocks: [
      {
        type: 'stanza',
        lyrics:
`Jak ożywczy deszcz – Duchu Święty przyjdź!
Dotknij naszych serc – rozpal ognia żar!  /×2
`
      },
      {
        type: 'refrain',
        lyrics:
`Dziś przenikaj nas – tchnieniem mocy Swej.
Bądź nam światłem dnia – i nadzieją serc!  /×2
`
      },
    ],
  }
```




<a id="/license"></a>&nbsp;

## License

[MIT](./License.md) © [Tomek Wiszniewski](https://github.com/tomekwi)
