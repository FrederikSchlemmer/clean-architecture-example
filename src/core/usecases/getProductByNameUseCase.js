class GetProductByNameUseCase implements UseCase<String, ProductEntity>{

    constructor(private productRepository: ProductRepository) {}

    execute(params: String): ProductEntity {
        return this.productRepository.getProductByName(params);
    }
}