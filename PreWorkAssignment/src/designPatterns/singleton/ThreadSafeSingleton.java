package designPatterns.singleton;

public class ThreadSafeSingleton {

	private static volatile ThreadSafeSingleton instance;
	private static Object lock = new Object();

	private ThreadSafeSingleton() {}

	public static synchronized ThreadSafeSingleton getSyncBlockInstance() {
		if (instance == null) {
			synchronized (lock) {
				if (instance == null)
					instance = new ThreadSafeSingleton();
			}
		}
		return instance;
	}

	public static synchronized ThreadSafeSingleton getSyncMethodInstance() {
		if (instance == null)
			instance = new ThreadSafeSingleton();
		return instance;
	}

}
