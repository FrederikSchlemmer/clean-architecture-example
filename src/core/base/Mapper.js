abstract class Mapper<Entity1, Entity2> {
    abstract mapFrom(Entity1): Entity2;
    abstract mapTo(Entity2): Entity1;
}