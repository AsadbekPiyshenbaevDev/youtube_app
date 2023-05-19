import React from 'react'
import { Stack } from '@mui/material'
import { category } from '../../constanta'
import { colors } from '../../constanta/colors'


const Category = ({ selectedCategoryHandler, selectedCategory }) => {
    return (
        <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
            {
                category.map(item => (
                    <button key={item.name} className="category-btn"
                        style={{
                            borderRadius: '0',
                            background: item.name === selectedCategory && colors.secondary,
                            color: item.name === selectedCategory && '#fff'
                        }}
                        onClick={() => selectedCategoryHandler(item.name)}>
                        <span style={{  marginRight: '15px', color: item.name === selectedCategory ? "#fff" : colors.secondary }}>{item.icon}</span>
                        <span style={{ opacity: '1' }}>{item.name}</span>
                    </button>
                ))
            }
        </Stack>
    )
}

export default Category