import React, { Component } from 'react';
import FormContent from './components/FormContent';




class App extends Component {

  
  render() {
    return (
      <FormContent />
    )
  }            
}

export default App;

//   <Condition when="reception" is="delivery">
//     <div>
//       <label>Street</label>
//       <Field
//         name="street"
//         component="input"
//         type="text"
//         placeholder="Street Address"
//       />
//       <Error name="street" />
//     </div>
//   </Condition>
//               {/* <Condition when="reception" is="pickup">
//                 <div>
//                   <label>Pickup Time</label>
//                   <Field name="pickupTime" component="select">
//                     <option />
//                     ${pickupTimes.map(time => (
//                       <option key={time} value={time}>
//                         {time}
//                       </option>
//                     ))}
//                   </Field>
//                   <Error name="pickupTime" />
//                 </div>
//               </Condition> */}
// <div>
//   <label>Is it a gift?</label>
//   <Field name="gift" component="input" type="checkbox" />
// </div>
//   <Condition when="gift" is={true}>
//     <div>
//       <label>Gift Message</label>
//       <Field
//         name="message"
//         component="textarea"
//         placeholder="Gift Message"
//       />
//       <Error name="message" />
//     </div>
//   </Condition>
//   <div className="buttons">
//     <button type="submit" disabled={submitting}>
//       Submit
//             </button>
//     <button type="button" onClick={reset} disabled={submitting}>
//       Reset
//             </button>
//   </div>
//   <pre>{JSON.stringify(values, 0, 2)}</pre>
//             </form >
//           )}
//         </Form >
//       </Styles >
//     );
//   }
