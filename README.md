Amaze UI Slush Genertator
==============

A [slush](http://klei.github.io/slush/) generator for [Amaze UI Widget](http://amazeui.org/widgets).

## Installation

Install `slush` globally:

```bash
npm install -g slush
```

Install `slush-amuiwidget` globally:

```bash
npm install -g slush-amuiwidget
```

## Usage

Run `slush amuiwidget` under Amaze UI root dir:

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
     └── {widget}.png               # widget icon, 50px * 50px png file
```
