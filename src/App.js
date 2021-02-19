
import React,{useState} from "react";
import styled from 'styled-components';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import './themes';
import './modes';
import './keymaps';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Selectors = styled.div`
  gap: 10px;
  display: flex;
`
const StyledCodeMirror = styled(CodeMirror)`
  .CodeMirror{
      height: 95vh;
   }
`

const Selector=({title, items,selectFunc}) => {
  return(
    <>
      {title}: 
    <select onChange={selectFunc}>
      { items.map( item => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>

    </>
  ) 
}

const welcomeMsg = `
/* Welcome to scratchpad. Select language and theme from dropdowns */
`
const App = () => {

  const [ html, setHtml] = useState(welcomeMsg);
  const [ mode, setMode] = useState('javascript');
  const [keymap, setKeymap] = useState('vim');
  const [ theme, setTheme] = useState('dracula');
  const modes = ["javascript","yaml","htmlmixed","css", "markdown"];
  const keymaps =  ["vim","emacs","sublime"];
  const themes = ['dracula','default', '3024-day', '3024-night', 'abcdef', 'ambiance', 'ayu-dark', 'ayu-mirage', 'base16-dark', 'base16-light', 'bespin', 'blackboard', 'cobalt', 'colorforth', 'darcula', 'duotone-dark', 'duotone-light', 'eclipse', 'elegant', 'erlang-dark', 'gruvbox-dark', 'hopscotch', 'icecoder', 'idea', 'isotope', 'lesser-dark', 'liquibyte', 'lucario', 'material', 'material-darker', 'material-palenight', 'material-ocean', 'mbo', 'mdn-like', 'midnight', 'monokai', 'moxer', 'neat', 'neo', 'night', 'nord', 'oceanic-next', 'panda-syntax', 'paraiso-dark', 'paraiso-light', 'pastel-on-dark', 'railscasts', 'rubyblue', 'seti', 'shadowfox', 'solarized dark', 'solarized light', 'the-matrix', 'tomorrow-night-bright', 'tomorrow-night-eighties', 'ttcn', 'twilight', 'vibrant-ink', 'xq-dark', 'xq-light', 'yeti', 'yonce', 'zenburn'];
  const selectMode =(e) => setMode(e.target.value);
  const selectTheme =(e) => setTheme(e.target.value);
  const selectKeymap=(e) => setKeymap(e.target.value);

  return (
    <StyledWrapper>
      <Selectors>
        <Selector title="lang" items={modes} selectFunc={selectMode}/>
        <Selector title="theme" items={themes} selectFunc={selectTheme}/>
        <Selector title="keymap" items={keymaps} selectFunc={selectKeymap}/>
      </Selectors>
      <StyledCodeMirror
        value={html}
        options={{
          mode: mode,
          theme: theme,
          lineNumbers: true,
          keyMap: keymap
        }}
        onBeforeChange={(editor, data, value) => {
          setHtml(value)
        }}
      />
    </StyledWrapper>
  );
}

export default App;
