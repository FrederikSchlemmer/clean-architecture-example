class GetAllProductsUseCase implements UseCase<void, ProductEntity[]>{

    constructor(private productRepository: ProductRepository) {}

    execute(params: void): ProductEntity[] {
        return this.productRepository.getAllProducts();
    }
}