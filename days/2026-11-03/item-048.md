# Confirm the first checkbox on a 1366 by 768 screen

The first checkbox has to be fully visible at 1366 by 768 without scrolling.

That height is shorter than the 800px case, so the wide-window margins are what keep the box on screen: 1.25rem top, 0.4rem under the heading, 0.45rem under the date.

At that size the third checkbox is the row that gets clipped first if any margin grows back.