#
# Makefile for slides
# --filter pandoc-citeproc
SHELL:= /bin/bash

SOURCE=slides.md

.PHONY: all

all: reveal

beamer: 
	pandoc -t beamer \
           -s -i -o beamer.pdf $(SOURCE) \
           -V theme:metropolis 

reveal:
	pandoc -t revealjs \
		   -s -i --mathjax \
		   -o talk.html $(SOURCE) \
		   -V theme=cheg \
		   -V transition=none \
		   -V revealjs-url=./js/reveal.js

html:
	pandoc -s --mathml $(SOURCE) -o standalone.html

clean:
	rm *.pdf	
