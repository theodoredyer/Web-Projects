### How does everything interact to form the box model?

By default, the box fills to fit the size of the content. 

content -> padding -> margin


#### Content
- To modify content size, using height and width. 

#### Padding
- Increase space the box takes up by x pixels on each side of the content
- Most buttons are styled using padding
- Used to add background to an element
- Added into the computation of box size

#### Border
- Adds a border around the padding
- Added into the computation of box size
- box-sizing: border box; (this sets the height and width to account for padding and border size)

#### Margin
- Spacing in between elements. 
- Used to separate elements.
- Margin collapses between two elements next to eachother, they share whichever has the larger margin between two elements.