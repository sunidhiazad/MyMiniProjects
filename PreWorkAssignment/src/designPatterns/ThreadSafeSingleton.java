package designPatterns;

public class ThreadSafeSingleton {

	private static ThreadSafeSingleton instance;
	
	private ThreadSafeSingleton(){}
	
	public static synchronized ThreadSafeSingleton getSyncInstance(){
		if(instance == null)
			instance = new ThreadSafeSingleton();
		return instance;
	}
	
	public static synchronized ThreadSafeSingleton getSyncBlockInstance(){
		if(instance == null)
			instance = new ThreadSafeSingleton();
		return instance;
	}
	
}
