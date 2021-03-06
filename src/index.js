import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.scss';
import reportWebVitals from './reportWebVitals';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)
    //State
    this.state = {
      input: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    this.setState({
      input: event.target.value
    })  
  }
  
  render() {
    return(
      <>
        <main>
          
          <div class="container-fluid">
            
            <div id="editor-container" class="container">
              <div class='tool-bar'>&lt;/&gt; Editor</div>
              <textarea id="editor" class="container-fluid panel" value={this.state.input} onChange={this.handleChange}>{this.state.input}</textarea>
            </div>
            
            <div id="previewer-container" class="container">
              <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}></div>
            </div>
            
        </div>
            
          
        </main>
      </>
    )
  }
}

const placeholder =  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('body'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
