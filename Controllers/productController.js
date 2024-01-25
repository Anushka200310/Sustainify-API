import productModel from "../Model/productModel.js";

const getAllProducts = async(req, res)=>{
    try {

    const { category, recyclable, waterUsage, sort, select } = req.query;
    const queryObject = {};
    
    // adding search functionality
    if(category){
        queryObject.category = category;
    }

    
    if(recyclable){
        queryObject.recyclable = recyclable;
    }

    if(waterUsage){
        queryObject.waterUsage = waterUsage;
    }

    let apiData = productModel.find(queryObject);
  
    //adding sort functionality
    if(sort){
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    //select specific document fields

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 8;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const productData = await apiData;
    const response = [{
        productData,
        nbHits: productData.length
    }];

    res.status(200).json(response);
 } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });     
}

}

export default getAllProducts;