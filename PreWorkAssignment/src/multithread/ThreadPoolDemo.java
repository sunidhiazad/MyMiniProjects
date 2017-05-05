package multithread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

class Processor implements Runnable {
	private int id;

	Processor(int id) {
		this.id = id;
	}

	@Override
	public void run() {
		System.out.println("Starting " + id);

		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		System.out.println("Completed " + id);
	}

}

public class ThreadPoolDemo {

	public static void main(String[] args) {
		ExecutorService exec=Executors.newFixedThreadPool(2);
		
		for(int i=1; i<=5; i++){
			exec.submit(new Processor(i));
		}
		
		exec.shutdown();
		
		System.out.println("All tasks submitted");
		
		try {
			exec.awaitTermination(10, TimeUnit.SECONDS);
			//exec.awaitTermination(1, TimeUnit.DAYS);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		System.out.println("All tasks completed");
	}
	
	
}
