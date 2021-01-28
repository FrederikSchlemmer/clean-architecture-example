abstract class UseCase<S, T> {
    execute(params: S): T;
}