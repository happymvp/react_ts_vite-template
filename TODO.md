Folders structure
Api layer
Global Storage Layer
UI components


UI Typography note:
```
One solution would be to define the line height in REM, this was it could vary along with the font size. However, by doing that, every time we change the font size within a media query we would have to change the line height too, to maintain the scale.

There's an easier way: this property accepts percentages. So, we can declare the line height as we used to in Microsoft Word: 1, 1.2, 1.5, 2.

In our example, if I have a font of 1rem and a line height of 1.25, the values will generally be 16px and 20px. But if the user's default font size is 24px, the values will be 24px and 30px. This way, we always maintain the same proportion between font and line height. What's even better is that if the size of our font changes with media queries, we don't need to redeclare the line height!
```
https://dev.to/marcelluscaio/using-rem-doesnt-make-your-website-responsive-heres-why-4b0e

https://dev.to/marcelluscaio/fluid-typography-1mfl

https://utopia.fyi/type/calculator/?c=320,18,1.2,1240,20,1.25,5,0,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12


Scroll snap for components?
