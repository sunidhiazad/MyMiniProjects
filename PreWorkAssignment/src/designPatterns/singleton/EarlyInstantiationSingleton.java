package designPatterns.singleton;

public class EarlyInstantiationSingleton {
	// Automatically Thread Safe
	private static EarlyInstantiationSingleton instance = new EarlyInstantiationSingleton();

	private EarlyInstantiationSingleton() {}

	public static EarlyInstantiationSingleton getInstance() {
		if (instance == null) {
			instance = new EarlyInstantiationSingleton();
		}
		return instance;
	}
}
