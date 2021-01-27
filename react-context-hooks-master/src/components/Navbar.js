import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// One way to accessing context data
// // this is called context type approach. Usually this approach is used in Class based component.

// class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     console.log(this.context)
//     const { isLightTheme, light, dark } = this.context
//     const theme = isLightTheme ? light : dark
//     return (
//       <nav style={{ background: theme.ui, color: theme.syntax }}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }
// ---------------------------------------------------------


// // Another way to accessing context data
// // this is consumer approach. Normally this approach is used in Function based component.
// // we can use multiple context in a single component.

// class Navbar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     return (
//       <AuthContext>{(authContext) => (
//         <ThemeContext.Consumer>{(themeContext) => {
//           const { isAuthenticated, toggleAuth } = authContext;
//           const { isLightTheme, light, dark } = themeContext;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <div onClick={() => toggleAuth()}>
//                 { isAuthenticated ? 'Logged in' : 'Logged out' }
//               </div>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           )
//         }}</ThemeContext.Consumer>
//       )}</AuthContext>
//     );
//   }
// }
// ----------------------------------------------------------


// integrating context with hooks

const Navbar = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={() => toggleAuth()}>
        { isAuthenticated ? 'Logged in' : 'Logged out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;