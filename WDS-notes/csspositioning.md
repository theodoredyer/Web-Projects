## position: oneofthese;

### Static Positioning
- Preset, nothing special things are layed out essentially in the order you type them with preset rules

### Relative Positioning
- You can change the top, left, bottom, or right position (the change is relative to the position determined by static positioning)
- Takes the element out of the document flow, so you can accidentally position it on top of other elements because only the original position is tracked in document flow. 
- Generally don't use relative positioning
- Can have absolutely positioned elements inside of it.

### Absolute Positioning
- Completely removes the element from the document flow, and everything else renders regardless of where it is.
- If the parent div to an absolute element is relative, then it will be absolute to that relative object
- If the parent is ANYTHING other than static, it will be relative to parent.

### Fixed Positioning
- Always fixed position based on the entire HTML element, they stay in the same place when you scroll.
- Good for placing elements that we always want to be in one static location, for example a HUD on the top of the screen or a footer taking up the bottom of the screen.
- top: 0, right: 0 (this causes the element to stay in the top right corner when you scroll)

### Sticky Positioning
- Combination of relative and fixed. 
- When you scroll away from it, it becomes fixed onto the preset location