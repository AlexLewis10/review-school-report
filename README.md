## School Report

This project was done as part of a review, which is essentially mock tech test which is done inside 1 hour. 

The following notes were made as I was taking a brief for the project.


How lots of different students - how did the class perform
Green, Amber and Red. - A count of how many of each for the class.


String with those grades in it. Comma separated value
"Green, Green, Amber, Red, Green" - 1 string per class

simple summary report
Also be a string, 

"Green, Green, Amber, Red, Green"
In this order;
"Green: 3\nAmber: 1\nRed: 1" + uncounted

Edge cases;
Teacher makes a mistakes, teacher misspells a word, add to another category uncounted
If color is spelled as lower case.


| INPUT   | OUTPUT |
|---------|--------|
"Green" | "Green"
"Amber" | "Amber"
"Red"   | "Red"
"Green" | "Green: 1"
"Green, Green" | "Green: 2"
"Green, Amber" | "Green: 1\n Amber: 1"
"Green, Amber, Red" | "Green: 1\n Amber: 1\n Red: 1"
"green" | "Uncounted: 1"
"groan" | "Uncounted: 1" > May be able to solve this in the previous step
"Green, Green, Amber, Red, Green, green, groan" | "Green: 3\nAmber: 1\nRed: 1\nUnreported: 2"

String convert to array? Iterate through the array. Counting for each instance. Then interpolating a string at the end.



