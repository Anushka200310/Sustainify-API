Sustainify API Documentation
----------

#### Endpoint
``` http
GET https://sustainify-api-production.up.railway.app/api/products
```

### Description
This endpoint retrieves a list of Sustainable Products based on specified query parameters.

### Query Parameters

- `category` (optional): Filter products by category.
- `recyclable` (optional): Filter products by recyclability.
- `waterUsage` (optional): Filter products by water usage.
- `sort` (optional): Sort the results. Use comma-separated values for multiple sorting criteria.
- `select` (optional): Select specific document fields. Use comma-separated values for multiple fields.
- `page` (optional): Specify the page number for pagination. Default is 1.
- `limit` (optional): Specify the number of items per page. Default is 8.


### Example

```http
GET https://sustainify-api-production.up.railway.app/api/products?category=Transportation&recyclable=true&sort=name
```

### Headers

Include the following header in your request:

```bash
x-api-key: environmentalz
```

### Notes

- The API supports various filtering, sorting, and pagination options to tailor the response to specific requirements.
- Ensure that query parameters are properly encoded in the URL.
- Check the nbHits field in the response to see the total number of hits for the specified query.

  ## Contact

[Anushka Banerjee]
- [GitHub](https://github.com/Anushka200310)
- [Linkedin](https://www.linkedin.com/in/anushka-banerjee-73bb52253)
