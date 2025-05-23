import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    // console.log("Categories are ", categories);
    return (
        <div className='mt-6 p-6 bg-white '>
            {/* section heading  */}
            <div className=' pb-2 '>
                <h2 className='text-xl md:text-2xl font-semibold'>Categories</h2>
            </div>
            {/* section content */}
            <div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-9'>
                {
                    categories.map(category => <Link  key={category._id} className=' p-6 w-full flex items-center flex-col border hover:shadow-md hover:border border-gray-200 bg-white'>
                        <img className='w-full h-20 object-cover' src={category.image} alt={category.name} />
                        <h3 className='text-center mt-1'>{category.name}</h3>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;