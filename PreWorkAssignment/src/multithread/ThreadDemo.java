package multithread;

public class ThreadDemo extends Thread {

	public void run() {
		System.out.println(Thread.currentThread().getName() + " is running!");
	}

	public static void main(String[] args) throws InterruptedException {
		ThreadDemo demo1 = new ThreadDemo();
		ThreadDemo demo2 = new ThreadDemo();
		ThreadDemo demo3 = new ThreadDemo();
		ThreadDemo demo4 = new ThreadDemo();

		demo1.setName("ThreadOne");
		demo2.setName("ThreadTwo");
		demo3.setName("ThreadThree");
		demo4.setName("ThreadFour");

		demo1.start();
		demo2.start();
		demo3.start();
		demo4.start();
	}
}
