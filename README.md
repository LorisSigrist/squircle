# Squircle

Squircle is a vector graphic animation tool for creating liveley web assets. Unlike many other tools like it, it outputs it's animations in pure svg files. That's right: No javascript in the output!
The project is currently still in very early development.

This repository contains all squircle related apps and packages.

## The MVP

Here is what the Squircle MVP should be able to do:
- Functional Panel System
- Minimal versions of the following Panels: Viewport, Outliner, Properties, Timeline, Export
- Multiselect Objects
- Basic animations (interpolate linearly between values)
- Import Svg File
- Export Animated Svg File
- Remember Editor State

## Repository Content
- `apps/animator` - The main App
- `apps/web` - The [squircle.ch](https://www.squircle.dev) website
- `packages/svelte-panels` - The standalone panelmanager, developed for squircle
