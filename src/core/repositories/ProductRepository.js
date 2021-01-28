abstract class ProductRepository{
    abstract getProductByName(name: String): Observable<ProductModel>;
    abstract getAllProducts(): Observable<ProductModel[]>;
}