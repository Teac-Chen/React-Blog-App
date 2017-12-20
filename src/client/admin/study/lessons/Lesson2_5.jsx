import React from 'react';

const MD_CONTENT = `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
> Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, \`code\`
 ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears
`;

export class MarkdownEditor extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: MD_CONTENT
    }
  }
}