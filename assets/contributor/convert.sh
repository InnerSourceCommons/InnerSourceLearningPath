#!/bin/bash
# This converts the presentation pdf to PNGs using ImageMagick or GraphicsMagick
# Use upon presence of updated PDF from the presentation.

convert -density 300 contributor.pdf -quality 90 contributor.png
