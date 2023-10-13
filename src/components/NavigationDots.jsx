import React from 'react'

// const NavigationDots = ({ active }) => {
//   return (
//     <div className='app__navigation'>
//         {['home', 'about', 'work', 'skills', 'testimonial', 'contact', ].map((item, index) => (
//             <a
//                 href={`#${item}`}
//                 key = {item + index}
//                 className="app__navigation-dot"
//                 style={active === item ? {backgroundColor: '#313BAC'} : { }}
//             />
//         ))}
//     </div>
//   )
// }

const NavigationDots = ({ active }) => {
    return (
      <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
            aria-label={`Navigate to ${item}`} // Provide an accessible label
            role="button"
            tabIndex="0"
          />
        ))}
      </div>
    );
  };


export default NavigationDots
