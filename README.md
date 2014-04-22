slush-amuiwidget
==============

> A [slush](http://klei.github.io/slush/) generator for AMUI widget.

## Installation

Install `slush` globally:

```bash
npm install -g slush
```

Link `slush-amuiwidget`:

```bash
cd tools/slush-amuiwidget
npm link
```


## Usage

CD to AMUI root dir, then:

```bash
slush amuiwidget
```

You will now be prompted to give your new widget a name, which will be used in its `package.json` and template files. 

The widget structure will look like this ({widget} will be replaced with your widget name):

```
{widget}/
├── HISTORY.md
├── README.md
├── package.json
└── src
     ├── {widget}.hbs               # handlerbars template
     ├── {widget}.less              # core style
     ├── {widget}.default.less      # default theme
     ├── {widget}.js                # widget interaction
     ├── {widget}.png               # widget icon, 50px * 50px png file
```
