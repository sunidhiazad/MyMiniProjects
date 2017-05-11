package multithread;

public class RunnableDemo implements Runnable {

	@Override
	public void run() {
		System.out.println("I was here");
	}

	public static void main(String[] args) {
		Thread thread = new Thread(new RunnableDemo());
		thread.start();
	}
}
