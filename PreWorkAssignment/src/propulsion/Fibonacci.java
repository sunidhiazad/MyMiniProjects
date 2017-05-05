package propulsion;
public class Fibonacci {

	public int iterativeFibonacci(int n) {

		if (n == 0)
			return 0;
		if (n == 1 || n == 2)
			return 1;

		int fibo1 = 1;
		int fibo2 = 1;
		int sum = 0;

		for (int i = 3; i <= n; i++) {
			sum = fibo1 + fibo2;
			fibo1 = fibo2;
			fibo2 = sum;
		}

		return sum;
	}

	public int recursiveFibonacci(int n) {
		if (n <= 1)
			return n;
		else
			return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
	}

	public static void main(String... args) {
		Fibonacci obj = new Fibonacci();
		if (args.length != 0) {
			for (int i = 0; i < args.length; i++) {
				int number = Integer.parseInt(args[i]);
				System.out.println("Iterative[" + number + "]: " + obj.iterativeFibonacci(number));
				System.out.println("Recursive[" + number + "]: " + obj.recursiveFibonacci(number));
			}
		} else {
			System.err.println("Error: you must supply which Fibonacci number to compute");
			System.exit(1);
//			for (int i = 0; i < 10; i++) {
//				System.out.println("Iterative[" + i + "]: " + obj.iterativeFibonacci(i));
//				System.out.println("Recursive[" + i + "]: " + obj.recursiveFibonacci(i));
//			}
		}
	}
}
