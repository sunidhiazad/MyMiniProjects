package multithread;

public class SyncDemo {
	private volatile int counter = 0;
	
	private synchronized void increment(){
		counter++;
	}

	public static void main(String[] args) {
		SyncDemo sd = new SyncDemo();
		sd.doWork();
	}

	private void doWork() {

		Thread t1 = new Thread(new Runnable() {
			@Override
			public void run() {
				for (int i = 0; i < 1000; i++) {
					increment();
				}
			}
		});

		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				for (int i = 0; i < 1000; i++) {
					increment();
				}
			}
		});

		t1.start();
		t2.start();
		
		try {
			t1.join();
			t2.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		System.out.println("Counter: " + counter);
	}
}
