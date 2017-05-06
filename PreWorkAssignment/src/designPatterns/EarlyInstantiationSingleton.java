package designPatterns;

public class EarlyInstantiationSingleton {
	private static EarlyInstantiationSingleton instance = new EarlyInstantiationSingleton();

	private EarlyInstantiationSingleton() {}

	public static EarlyInstantiationSingleton getInstance() {
		if (instance == null) {
			instance = new EarlyInstantiationSingleton();
		}
		return instance;
	}
}
