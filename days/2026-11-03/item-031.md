# Honor the safe-area inset beside the column

Under 40rem, left and right padding are the max of 1.35rem and the matching safe-area inset.

On a notched phone the 1.35rem padding alone let the first checkbox slide under the rounded corner in landscape.

In landscape at 700px tall the checkbox clears the inset because the padding grew.