// src/services/productService.js
export const fetchProductData = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/ProductData');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch product data:', error);
        throw error;
    }
};
