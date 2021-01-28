class ProductWebRepository extends ProductRepository {

    mapper = new ProductMapper();

    getProductByName(name: String): Observable<ProductModel> {
        return mapper.mapFrom(HTTPClient.get("api/getProduct/{name}"));
    };

    getAllProducts(): Observable<ProductModel[]> {
        return mapper.mapFrom(HTTPClient.get("api/getAllProducts"));
    };
}