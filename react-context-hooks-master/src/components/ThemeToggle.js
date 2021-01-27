import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return (
//       // pass a callback method in onClick method
//       <button onClick={ toggleTheme }>Toggle the theme</button>
//      );
//   }
// }

// integrating context with hooks
// useState is used for accessing normal state data and ThemeContext is used for accessing context data.
const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <button onClick={ toggleTheme }>Toggle the theme</button>
  );
}

export default ThemeToggle;
