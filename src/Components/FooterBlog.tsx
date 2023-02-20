import blog1 from '../Assets/images/blogs/blog5.png'
import { NavLink } from 'react-router-dom'



export function FooterBlog() {
    return (
        <div className='mt-5 labsblog'>
                    <h5>
                        OUR LATEST BLOG POST
                    </h5>
                    <p>
                        <img src={blog1} alt={blog1} width='95px' height='95px' />
                        <b>Blockchain gaming: benefits and future</b>
                        Blockchain technology is changing the
                        landscape of online gaming. In this series, we will explain the main concepts and principles. Blockchain technology is changing the landscape of online gaming. In this series, we will explain the main...
                    <NavLink to='/blog' className='gradient-color'>read more</NavLink>
                    </p>
                </div>
    );
}

