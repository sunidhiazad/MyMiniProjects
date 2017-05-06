package designPatterns;

public class LazyInstantiationSingleton {

	private static LazyInstantiationSingleton instance;

	private LazyInstantiationSingleton() {
	}

	public static LazyInstantiationSingleton getInstance() {
		if (instance == null) {
			instance = new LazyInstantiationSingleton();
		}
		return instance;
	}
}
