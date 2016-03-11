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

**A plain text syntax for lyrics and chords. Natural to read and write.**


See for yourself. Here's an example song written in ditty:

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
    parts: [
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


## License

[MIT](./License.md) © [Tomek Wiszniewski](https://github.com/tomekwi)
